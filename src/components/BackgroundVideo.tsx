import { useEffect, useRef } from 'react';
import heroBannerVideo from '../assets/Hero_banner.mp4';

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Enforce properties directly on the DOM element for cross-browser autoplay compliance
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    // Function to safely attempt playback
    const safePlay = () => {
      if (video && video.paused) {
        video.play().catch(() => {
          // Playback might be blocked until user interacts
        });
      }
    };

    // Initial play attempt
    safePlay();

    // Fallback if autoplay was blocked by browser policies
    const handleFirstInteraction = () => {
      safePlay();
    };
    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });
    window.addEventListener('scroll', handleFirstInteraction, { once: true });

    // Explicit loop handler: prevents video from getting stuck on the final frame
    const handleEnded = () => {
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    // Recovery handler if buffering stalls or pauses unexpectedly
    const handleStalledOrWaiting = () => {
      if (video && video.paused && !document.hidden) {
        video.play().catch(() => {});
      }
    };

    // Resume playback when user returns to this tab
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && video && video.paused) {
        video.play().catch(() => {});
      }
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('stalled', handleStalledOrWaiting);
    video.addEventListener('waiting', handleStalledOrWaiting);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Watchdog interval to ensure the video never remains stuck
    const watchdog = setInterval(() => {
      if (video && video.paused && !document.hidden) {
        video.play().catch(() => {});
      }
    }, 2000);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('stalled', handleStalledOrWaiting);
      video.removeEventListener('waiting', handleStalledOrWaiting);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(watchdog);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        className="fixed top-0 left-0 w-full h-full object-cover -z-20 pointer-events-none"
      >
        <source src={heroBannerVideo} type="video/mp4" />
        <source src="/Hero_banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Global Overlay for readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-primary/70 -z-10 pointer-events-none" />
    </>
  );
}
