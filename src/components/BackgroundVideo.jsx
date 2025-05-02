import { useEffect, useRef } from 'react';

function BackgroundVideo({ playTo, onVideoDone }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || playTo === null) return;

    // Inicia reproducción
    video.currentTime = playTo === 2 ? 0 : 2;
    video.play();

    const handleTimeUpdate = () => {
      if (playTo === 2 && video.currentTime >= 2) {
        video.pause();
        onVideoDone();
      } else if (playTo === 0 && video.currentTime >= video.duration - 0.1) {
        video.pause();
        video.currentTime = 0;
        onVideoDone();
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [playTo, onVideoDone]);

  return (
    <>
      <video
        ref={videoRef}
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
      >
        <source src="/videos/sakura-temple.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>

      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <div className="w-full h-full" />
      </div>
    </>
  );
}

export default BackgroundVideo;
