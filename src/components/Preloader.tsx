import React, { useEffect, useState } from 'react';
import { subreddits } from '../types/subreddit';

interface PreloaderProps {
  onLoaded: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    const totalImages = subreddits.length;
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    subreddits.forEach(sub => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        loadedImages.push(img);
        setImagesLoaded(loadedCount);
        setProgress((loadedCount / totalImages) * 100);
        if (loadedCount === totalImages) {
          // Keep images in DOM but hidden
          loadedImages.forEach(img => {
            img.style.display = 'none';
            document.body.appendChild(img);
          });
          onLoaded();
        }
      };
      img.onerror = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        console.error(`Failed to load: ${sub.icon}`);
        if (loadedCount === totalImages) {
          onLoaded();
        }
      };
      img.src = sub.icon;
    });

    return () => {
      // Cleanup hidden images when component unmounts
      loadedImages.forEach(img => img.remove());
    };
  }, [onLoaded]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }}>
      <h2>Loading assets...</h2>
      <div style={{
        width: '200px',
        height: '20px',
        backgroundColor: '#333',
        borderRadius: '10px',
        overflow: 'hidden',
        margin: '10px'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: '#007bff',
          transition: 'width 0.3s ease'
        }} />
      </div>
      <div>Loading subreddit images: {imagesLoaded}/{subreddits.length}</div>
    </div>
  );
};

export default Preloader;
