// hooks/useLenisScroll.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1, // slow and creamy
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom ease
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
