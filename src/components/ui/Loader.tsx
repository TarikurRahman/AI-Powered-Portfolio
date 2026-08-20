import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({ onFinish }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    let hasFinished = false;
    const finishLoading = () => {
      if (hasFinished) return;
      hasFinished = true;
      onFinish();
    };

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.35,
          ease: "power2.inOut",
          onComplete: finishLoading,
        });
      },
    });

    const fallbackTimer = window.setTimeout(finishLoading, 2500);

    // Text entrance
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5 }
    )

      // Progress line animation
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.7,
          transformOrigin: "left center",
        },
        "-=0.2"
      )

      // Subtle pulse before exit
      .to(textRef.current, {
        opacity: 0.7,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
      });

    return () => {
      window.clearTimeout(fallbackTimer);
      tl.kill();
    };
  }, [onFinish]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
    >
      <h1
        ref={textRef}
        className="text-[#01D3E8] text-3xl tracking-[8px] font-semibold"
      >
        LOADING
      </h1>

      <div className="w-40 h-[2px] bg-white/10 mt-6 overflow-hidden rounded-full">
        <div
          ref={lineRef}
          className="h-full bg-[#01D3E8] rounded-full"
        />
      </div>
    </div>
  );
};

export default Loader;