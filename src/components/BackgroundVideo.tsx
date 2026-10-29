import { useEffect, useRef, useState } from 'react';
import heroBannerVideo from '../assets/Hero_banner.mp4';

const POSTER_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuBW-TWL8Q3fUspgaMdR926VB6J-mFbLjCaRCa3dnRLGmgL5Sm2fndSuCD8Ij5Yd8q-Gd918lnLolZV37mUkN3WW6poXtmvRnCfFkC8j8KnydQ4zJzNCkbrE_eYr3v3c2-4nciUsleqf5C19CHsq1QM8On5NZ6K1huYXafS2xZKoVsqqcWXjHG6kYJvVzqOyDU47H9KxHSed3KmuvqRlbm0u1uvFqN32MwbVtHKHDLPCYJdcly8iKwqA";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(() => (typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false));

  useEffect(() => {
    // Check user preference for reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);

    const video = videoRef.current;
    if (!video || reducedMotion) {
      if (video) video.pause();
      return () => {
        motionQuery.removeEventListener('change', handleMotionChange);
      };
    }

    // Enforce properties directly on the DOM element for cross-browser autoplay compliance
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    // Function to safely attempt playback
    const safePlay = () => {
      if (video && video.paused && !reducedMotion) {
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
      if (video && !reducedMotion) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    // Recovery handler if buffering stalls or pauses unexpectedly
    const handleStalledOrWaiting = () => {
      if (video && video.paused && !document.hidden && !reducedMotion) {
        video.play().catch(() => {});
      }
    };

    // Resume playback when user returns to this tab
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && video && video.paused && !reducedMotion) {
        video.play().catch(() => {});
      }
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('stalled', handleStalledOrWaiting);
    video.addEventListener('waiting', handleStalledOrWaiting);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Watchdog interval to ensure the video never remains stuck
    const watchdog = setInterval(() => {
      if (video && video.paused && !document.hidden && !reducedMotion) {
        video.play().catch(() => {});
      }
    }, 2000);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('stalled', handleStalledOrWaiting);
      video.removeEventListener('waiting', handleStalledOrWaiting);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(watchdog);
    };
  }, [reducedMotion]);

  return (
    <>
      {/* Fallback Static Background Image beneath video */}
      <div 
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-30 pointer-events-none"
        style={{ backgroundImage: `url("${POSTER_IMAGE}")` }}
      />

      {/* Background Video (hidden if reduced motion preferred) */}
      {!reducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={POSTER_IMAGE}
          disablePictureInPicture
          disableRemotePlayback
          className="fixed top-0 left-0 w-full h-full object-cover -z-20 pointer-events-none"
        >
          <source src={heroBannerVideo} type="video/mp4" />
          <source src="/Hero_banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Global Overlay for readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-primary/70 -z-10 pointer-events-none" />
    </>
  );
}
