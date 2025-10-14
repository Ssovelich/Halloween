'use client';

import { useEffect, useRef } from 'react';

const GlobalAudio = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.25;
        audioRef.current.play().catch(() => {});
      }
      window.removeEventListener('click', playAudio);
      window.removeEventListener('keydown', playAudio);
    };

    window.addEventListener('click', playAudio, { once: true });
    window.addEventListener('keydown', playAudio, { once: true });

    return () => {
      window.removeEventListener('click', playAudio);
      window.removeEventListener('keydown', playAudio);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/sounds/halloween-ambience.mp3"
      loop
      preload="auto"
    />
  );
}

export default GlobalAudio;
