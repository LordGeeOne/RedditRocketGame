import React, { useEffect, useState, useRef } from 'react';
import Phaser from 'phaser';
import { RocketScene } from '../scenes/RocketScene';
import Puzzle from './Puzzle';
import Preloader from './Preloader';

const Game: React.FC = () => {
  const gameRef = useRef<HTMLDivElement>(null);
  const [fuel, setFuel] = useState(100);
  const [height, setHeight] = useState(0);
  const [showPuzzle, setShowPuzzle] = useState(false);
  const gameInstanceRef = useRef<Phaser.Game | null>(null);
  const [game, setGame] = useState<Phaser.Game | null>(null);
  const [currentSubreddit, setCurrentSubreddit] = useState<{ name: string; icon: string } | null>(null);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    // Only initialize game after assets are loaded
    if (!gameRef.current || !assetsLoaded) return;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: gameRef.current,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { x: 0, y: 0 }
        }
      },
      scene: RocketScene
    };

    gameInstanceRef.current = new Phaser.Game(config);
    const game = gameInstanceRef.current;

    game.events.on('updateFuel', setFuel);
    game.events.on('updateHeight', setHeight);
    game.events.on('showPuzzle', (subreddit: { name: string; icon: string }) => {
      setCurrentSubreddit(subreddit);
      setShowPuzzle(true);
    });

    // Ensure 'continuePastPuzzle' event is handled in RocketScene.ts
    game.events.on('continuePastPuzzle', () => {
      // Handle continuation after puzzle
    });

    setGame(gameInstanceRef.current);

    return () => {
      game.events.off('updateFuel', setFuel);
      game.events.off('updateHeight', setHeight);
      game.events.off('showPuzzle');
      game.destroy(true);
      gameInstanceRef.current = null;
    };
  }, [assetsLoaded]); // Add assetsLoaded as dependency

  const restartGame = () => {
    if (game) {
      game.destroy(true);
      setFuel(100);
      setHeight(0);
      setShowPuzzle(false);
      
      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: gameRef.current!,
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { x: 0, y: 0 }
          }
        },
        scene: RocketScene
      };

      const newGame = new Phaser.Game(config);
      setGame(newGame);
      gameInstanceRef.current = newGame;

      newGame.events.on('updateFuel', setFuel);
      newGame.events.on('updateHeight', setHeight);
      newGame.events.on('showPuzzle', () => setShowPuzzle(true));
    }
  };

  const resumeGame = () => {
    setCurrentSubreddit(null); // Clear current subreddit
    game?.events.emit('continuePastPuzzle');
    game?.scene.resume('RocketScene');
    setShowPuzzle(false);
  };

  if (!assetsLoaded) {
    return <Preloader onLoaded={() => setAssetsLoaded(true)} />;
  }

  return (
    <div className="game-wrapper">
      <div ref={gameRef} className="game-container" />
      <div className="game-ui">
        {/* Remove the fuel bar */}
        {/* <div className="fuel-bar" style={{ width: `${fuel}%` }} /> */}
        <div className="height" style={{ color: '#fff' }}>Height: {height}H</div>
      </div>
      {showPuzzle && (
        <Puzzle
          onSolved={(success, refillFuel) => {
            if (refillFuel) {
              game?.events.emit('refillFuel');
            }
            resumeGame();
          }}
          onLeave={resumeGame}  // Changed from restartGame to resumeGame
          subreddit={currentSubreddit || undefined}
        />
      )}
    </div>
  );
};

export default Game;
