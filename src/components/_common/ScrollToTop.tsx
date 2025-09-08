'use client'

import { useEffect, useState } from "react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-20 h-11 w-11 rounded-full border border-slate-200 bg-white/90 shadow-md backdrop-blur transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-500/40 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <svg viewBox="0 0 24 24" className="mx-auto h-5 w-5 text-violet-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
export default ScrollToTop