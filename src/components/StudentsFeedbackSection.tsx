'use client'

import React, { useMemo, useState } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Noah Williams",
    role: "Full-Stack Developer",
    rating: 5,
    text:
      "The program exceeded my expectations. Real-world projects made me confident, and I got my first freelance client within weeks!",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop",
    photo:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Ava Thompson",
    role: "UX/UI Designer",
    rating: 4.5,
    text:
      "Beautifully structured lessons and supportive mentors helped me transition into product design. Loved the design critiques!",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
    photo:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "James Anderson",
    role: "Data Analyst",
    rating: 4,
    text:
      "From zero coding skills to analyzing datasets confidently. The interactive dashboard projects were game-changers for me.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    photo:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  },
];

function SparklesIcon(props:any){
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z"/>
      <path d="M5 3l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/>
      <path d="M19 13l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/>
    </svg>
  );
}

function Arrow({dir="left", onClick}:any){
  return (
    <button
      onClick={onClick}
      aria-label={dir === "left" ? "Previous testimonial" : "Next testimonial"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-violet-700 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/60"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {dir === "left" ? <path d="M15 18l-6-6 6-6"/> : <path d="M9 6l6 6-6 6"/>}
      </svg>
    </button>
  );
}

function Stars({ value }:any){
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="flex items-center gap-1">
      {Array.from({length:5}).map((_,i)=>{
        const t = i < full ? "full" : i === full && half ? "half" : "empty";
        return (
          <svg key={i} viewBox="0 0 24 24" className="h-4 w-4">
            {t === "full" && <path fill="#F59E0B" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>}
            {t === "half" && (<><path fill="#F59E0B" d="M12 15.4V4.6l1.71 3.97 4.37.37-3.32 2.88 1 4.28L12 15.4z"/><path fill="#C7D2FE" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2v13.4z"/></>)}
            {t === "empty" && <path fill="#C7D2FE" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>}
          </svg>
        );
      })}
    </div>
  );
}

export default function StudentsFeedbackSection(){
  const data = useMemo(()=>TESTIMONIALS,[]);
  const [idx, setIdx] = useState(0);
  const current = data[idx];

  const prev = () => setIdx((i)=> (i-1+data.length)%data.length);
  const next = () => setIdx((i)=> (i+1)%data.length);

  return (
    <section className="relative bg-[#F8F7FF] py-16" aria-labelledby="feedback-heading">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-6 flex items-center gap-2 text-sm text-violet-700">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-violet-700">
            <SparklesIcon className="h-3.5 w-3.5" />
          </span>
          Student Testimonials
        </div>
        <h2 id="feedback-heading" className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">What Our Learners Say</h2>
        <p className="mt-2 max-w-2xl text-slate-500">Discover the experiences of students who transformed their careers with us.</p>

        {/* Card */}
        <div className="mt-10 rounded-3xl bg-[#4F37D9] p-6 sm:p-8 shadow-lg">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left image */}
            <div className="order-1 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 lg:order-none">
              <img src={current.photo} alt="happy student" className="h-[360px] w-full object-cover" />
            </div>

            {/* Right content */}
            <div className="relative text-white">
              <div className="mb-4 flex items-center gap-3">
                <img src={current.avatar} alt="avatar" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/30" />
                <Stars value={current.rating} />
              </div>

              <p className="text-lg/7 text-white/95">{current.text}</p>

              <div className="mt-6">
                <div className="text-lg font-semibold">{current.name}</div>
                <div className="text-sm text-white/80">{current.role}</div>
              </div>

              {/* Controls */}
              <div className="mt-6 flex items-center gap-4">
                <Arrow dir="left" onClick={prev} />
                <div className="flex items-center gap-2">
                  {data.map((_,i)=> (
                    <button key={i} aria-label={`Go to testimonial ${i+1}`} onClick={()=>setIdx(i)} className={`h-2 w-2 rounded-full ${i===idx? 'bg-white' : 'bg-white/40'}`} />
                  ))}
                </div>
                <Arrow dir="right" onClick={next} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
