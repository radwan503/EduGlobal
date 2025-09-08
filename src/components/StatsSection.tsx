'use client';

import { useEffect, useRef, useState } from 'react';
import { Globe, GraduationCap, Briefcase, Users, BookOpen, Award, Star, Rocket } from 'lucide-react';

// Counter hook
const useCountUp = (end: number, duration = 2000, startOnVisible = true) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(!startOnVisible);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!startOnVisible || !ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, started]);

  return { count, ref };
};

// ✅ New component for each stat card
const StatCard = ({ value, label, Icon }: { value: number; label: string; Icon: any }) => {
  const { count, ref } = useCountUp(value, 2500);

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl bg-white/80 backdrop-blur-sm shadow p-8 hover:shadow-2xl transition transform hover:-translate-y-1"
    >
      {/* Animated gradient ring */}
      <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 p-[2px] group-hover:scale-110 transition-transform">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
          <Icon className="w-7 h-7 text-purple-600" />
        </div>
      </div>

      <div className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-500">
        {count.toLocaleString()}
      </div>
      <div className="mt-2 text-sm md:text-base font-medium text-gray-600">
        {label}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 120000, label: 'Global Students', icon: Globe },
    { value: 8600, label: 'Graduates Placed', icon: GraduationCap },
    { value: 3500, label: 'Partner Companies', icon: Briefcase },
    { value: 98000, label: 'Community Members', icon: Users },
    { value: 7800, label: 'Courses Available', icon: BookOpen },
    { value: 4500, label: 'Certified Mentors', icon: Award },
    { value: 15000, label: 'Positive Reviews', icon: Star },
    { value: 2400, label: 'Career Success Stories', icon: Rocket },
  ];

  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-indigo-50 py-20 px-6 md:px-12 overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4 max-w-7xl mx-auto relative z-10">
        {stats.map((stat, index) => (
          <StatCard key={index} value={stat.value} label={stat.label} Icon={stat.icon} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
