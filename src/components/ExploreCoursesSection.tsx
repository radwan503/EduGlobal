'use client'

import { useEffect, useMemo, useRef, useState } from "react";
const icons = {
  coding: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8">
      <path fill="currentColor" d="M8 17l-5-5 5-5v3h8V7l5 5-5 5v-3H8v3z"/>
    </svg>
  ),
  startup: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8">
      <path fill="currentColor" d="M12 2C8 2 4 4 4 8c0 5 8 14 8 14s8-9 8-14c0-4-4-6-8-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8">
      <path fill="currentColor" d="M12 3l9 18H3L12 3zm0 4.8L6.6 19h10.8L12 7.8z"/>
    </svg>
  ),
  marketing: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8">
      <path fill="currentColor" d="M4 4h2v16H4V4zm14-2h2v20h-2V2zM10 8h2v12h-2V8zm4-4h2v16h-2V4z"/>
    </svg>
  ),
  music: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8">
      <path fill="currentColor" d="M9 19V7h10V3H7v16a4 4 0 1 0 2-3z"/>
    </svg>
  ),
  finance: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8">
      <path fill="currentColor" d="M3 5h18v14H3V5zm4 4v6h10V9H7z"/>
    </svg>
  ),
};

function CategoryCard({ icon, title, count, tone = "indigo" }:any) {
  const tones:any = {
    indigo: "bg-indigo-50 text-indigo-600",
    violet: "bg-violet-50 text-violet-600",
    rose: "bg-rose-50 text-rose-600",
    amber: "bg-amber-50 text-amber-600",
    sky: "bg-sky-50 text-sky-600",
    emerald: "bg-emerald-50 text-emerald-600",
  };

  return (
    <button
      className="group w-[230px] shrink-0 snap-start rounded-2xl border border-slate-200 bg-white/70 p-6 text-center shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500/40 backdrop-blur"
      aria-label={`${title} – ${count}`}
    >
      <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl ${tones[tone]} group-hover:scale-[1.03] transition`}>{icon}</div>
      <div className="font-semibold text-slate-800 text-lg">{title}</div>
      <div className="mt-1 text-sm text-slate-500">{count}</div>
    </button>
  );
}

function Arrow({ dir = "left", onClick, disabled }:any) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "left" ? "Previous" : "Next"}
      className={`h-10 w-10 rounded-full border border-slate-200 bg-white/80 backdrop-blur shadow-sm flex items-center justify-center transition hover:shadow disabled:opacity-40 disabled:cursor-not-allowed ${dir === "left" ? "-left-3" : "-right-3"}`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {dir === "left" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 6l6 6-6 6" />
        )}
      </svg>
    </button>
  );
}

export default function ExploreCoursesSection() {
  const items = useMemo(
    () => [
      { icon: icons.coding, title: "Programming", count: "150+ Bootcamps", tone: "indigo" },
      { icon: icons.startup, title: "Entrepreneurship", count: "90+ Workshops", tone: "violet" },
      { icon: icons.design, title: "Creative Design", count: "110+ Tutorials", tone: "rose" },
      { icon: icons.marketing, title: "Digital Marketing", count: "100+ Lessons", tone: "amber" },
      { icon: icons.music, title: "Music & Audio", count: "80+ Tracks", tone: "sky" },
      { icon: icons.finance, title: "Finance & Investing", count: "120+ Guides", tone: "emerald" },
    ],
    []
  );

  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    function recompute() {
      const track:any = trackRef.current;
      if (!track) return;
      const cardWidth = 230 + 24;
      const visible:any = Math.max(1, Math.floor(track.clientWidth / cardWidth));
      const totalPages = Math.max(1, Math.ceil(items.length / visible));
      setPages(totalPages);
      setPage((p) => Math.min(p, totalPages - 1));
    }
    recompute();
    const obs:any = new ResizeObserver(recompute);
    obs.observe(trackRef.current);
    return () => obs.disconnect();
  }, [items.length]);

  useEffect(() => {
    const track:any = trackRef.current;
    if (!track) return;
    const cardWidth = 230 + 24;
    const perView = Math.max(1, Math.floor(track.clientWidth / cardWidth));
    track.scrollTo({ left: page * perView * cardWidth, behavior: "smooth" });
  }, [page]);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(pages - 1, p + 1));

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-violet-50 to-purple-50 py-16">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4">
        {/* Top Category label */}
        <div className="mx-auto mb-3 flex items-center justify-center gap-2 text-sm text-violet-700">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-violet-700">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-7z"/></svg>
          </span>
          Featured Learning Paths
        </div>

        {/* Heading */}
        <h2 className="mx-auto max-w-4xl text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Discover <span className="text-violet-600">3000+</span> Learning Resources
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-500">
          Explore curated content and master skills that shape your future.
        </p>

        {/* Carousel */}
        <div className="relative mt-10">
          <div className="pointer-events-none absolute -top-14 right-0 flex gap-2">
            <div className="pointer-events-auto"><Arrow dir="left" onClick={prev} disabled={page === 0} /></div>
            <div className="pointer-events-auto"><Arrow dir="right" onClick={next} disabled={page === pages - 1} /></div>
          </div>

          <div
            ref={trackRef}
            className="no-scrollbar scroll-smooth overflow-hidden"
          >
            <div className="flex snap-x snap-mandatory gap-6 py-2">
              {items.map((it, i) => (
                <CategoryCard key={i} icon={it.icon} title={it.title} count={it.count} tone={it.tone} />
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${i === page ? "bg-violet-600" : "bg-slate-300 hover:bg-slate-400"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

