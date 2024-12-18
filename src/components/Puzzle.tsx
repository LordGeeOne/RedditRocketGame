import React, { useState, useEffect } from 'react';

interface PuzzleProps {
  onSolved: (success: boolean, refillFuel?: boolean) => void;
  onLeave: () => void;  // renamed from onQuit
  subreddit?: { name: string; icon: string }; // Added subreddit property
}

const Puzzle: React.FC<PuzzleProps> = ({ onSolved, onLeave, subreddit }) => {  // Added subreddit prop
  const subreddits = ['react', 'programming', 'javascript', 'typescript'];
  const [currentPuzzle, setCurrentPuzzle] = useState('');
  const [availableLetters, setAvailableLetters] = useState<string[]>([]);
  const [slots, setSlots] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // Added state for feedback

  useEffect(() => {
    const puzzle = subreddits[Math.floor(Math.random() * subreddits.length)];
    setCurrentPuzzle(puzzle);

    // Set up slots with 'r/' filled in
    const initialSlots = ['r', '/'];
    const remainingSlots = new Array(puzzle.length).fill('');
    setSlots([...initialSlots, ...remainingSlots]);

    // Set available letters from the puzzle word
    setAvailableLetters(puzzle.split('').sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      const letter = key.toLowerCase();
      const letterIndex = availableLetters.indexOf(letter);
      if (letterIndex !== -1) {
        handleLetterClick(letter, letterIndex);
      }
      // Optional: Handle backspace to remove the last filled letter
      if (key === 'Backspace') {
        const lastFilledIndex = slots.lastIndexOf('', slots.length - 1) - 1;
        if (lastFilledIndex >= 2) {
          const newSlots = [...slots];
          const removedLetter = newSlots[lastFilledIndex];
          newSlots[lastFilledIndex] = '';
          setSlots(newSlots);

          const newAvailableLetters = [...availableLetters];
          const availableIndex = availableLetters.indexOf(removedLetter);
          if (availableIndex !== -1) {
            newAvailableLetters[availableIndex] = removedLetter;
          }
          setAvailableLetters(newAvailableLetters);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [availableLetters, slots]);

  const handleLetterClick = (letter: string, index: number) => {
    // Find the first empty slot after 'r/'
    const emptySlotIndex = slots.findIndex((slot, idx) => idx >= 2 && slot === '');
    if (emptySlotIndex === -1) return;

    const newSlots = [...slots];
    newSlots[emptySlotIndex] = letter;
    setSlots(newSlots);

    const newLetters = [...availableLetters];
    newLetters[index] = '';
    setAvailableLetters(newLetters);

    // Check if word is complete
    if (newSlots.slice(2).every(slot => slot !== '')) {
      const success = newSlots.slice(2).join('') === currentPuzzle;
      setIsCorrect(success); // Set feedback state
      onSolved(true, success);
    }
  };

  const resetPuzzle = () => {
    // Reset slots and available letters
    const initialSlots = ['r', '/'];
    const remainingSlots = new Array(currentPuzzle.length).fill('');
    setSlots([...initialSlots, ...remainingSlots]);
    setAvailableLetters(currentPuzzle.split('').sort(() => Math.random() - 0.5));
    setIsCorrect(null); // Reset feedback state
  };

  return (
    <div className="puzzle-container" style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0,0,0,0.2)',
      minWidth: '300px'
    }}>
      <h3 style={{ textAlign: 'center', color: '#333' }}>Guess the subreddit!</h3>

      {/* Add the new refuel message below the heading */}
      <p style={{ textAlign: 'center', color: '#555', marginTop: '0.5rem' }}>
        Answer correctly to refuel
      </p>
      
      {/* Display subreddit image if available */}
      {subreddit && (
        <div className="subreddit-image" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          {/* Increase the width and height from 60px to 100px */}
          <img src={subreddit.icon} alt={subreddit.name} style={{ width: '100px', height: '100px' }} />
          <p>{subreddit.name}</p>
        </div>
      )}
      
      <div style={{
        display: 'flex',
        gap: '8px',
        justifyContent: 'center',
        marginBottom: '2rem'
      }}>
        {slots.map((letter, index) => (
          <div key={`slot-${index}`} style={{
            width: '40px',
            height: '40px',
            border: '2px solid #333',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            backgroundColor: letter ? '#333' : '#f5f5f5',
            color: letter ? '#fff' : '#333',
            transition: 'all 0.2s ease'
          }}>
            {letter}
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        justifyContent: 'center'
      }}>
        {availableLetters.map((letter, index) => (
          letter && (
            <button
              key={`letter-${index}`}
              onClick={() => handleLetterClick(letter, index)}
              style={{
                width: '40px',
                height: '40px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#007bff',
                color: 'white',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}
            >
              {letter}
            </button>
          )
        ))}
      </div>

      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        marginTop: '1rem'
      }}>
        <button
          onClick={resetPuzzle}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
        <button
          onClick={onLeave}  // renamed from onQuit
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Leave
        </button>
      </div>

      {/* Visual feedback for correct guess */}
      {isCorrect && (
        <div className="feedback correct" style={{
          marginTop: '1rem',
          padding: '0.5rem',
          backgroundColor: '#d4edda',
          color: '#155724',
          border: '1px solid #c3e6cb',
          borderRadius: '4px',
          textAlign: 'center'
        }}>
          Correct! Well done!
        </div>
      )}

      {/* Visual feedback for incorrect guess */}
      {isCorrect === false && (
        <div className="feedback incorrect" style={{
          marginTop: '1rem',
          padding: '0.5rem',
          backgroundColor: '#f8d7da',
          color: '#721c24',
          border: '1px solid #f5c6cb',
          borderRadius: '4px',
          textAlign: 'center'
        }}>
          Incorrect! Try again.
        </div>
      )}
    </div>
  );
};

export default Puzzle;
