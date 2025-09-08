import React from 'react';

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-indigo-800 to-purple-900 overflow-hidden font-sans">
      <div className="container relative mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        
        {/* Decorative background shapes */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl -z-10"></div>
        
        {/* Left image container */}
        <div className="relative p-2 transform -rotate-3 rounded-3xl border-2 border-white border-opacity-30 backdrop-filter backdrop-blur-sm transition-transform duration-500 ease-in-out hover:rotate-0">
          <img
            src="https://placehold.co/400x600/5A67D8/FFFFFF?text=Classroom+Study"
            alt="Student in a classroom"
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* Pencil icon SVG */}
          <div className="absolute top-4 right-4 p-2 bg-white bg-opacity-20 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L14.732 5.232z"
              />
            </svg>
          </div>
        </div>

        {/* Circular text element (simplified) */}
        <div className="relative flex items-center justify-center p-8">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-white border-opacity-30 animate-spin-slow"></div>
          <div className="absolute flex flex-col items-center justify-center text-center text-xs text-white uppercase font-semibold tracking-widest leading-none">
            <span className="-rotate-90">ABOUT UNIVERSITY</span>
            <span className="mt-2 rotate-90">ABOUT COLLEGE</span>
          </div>
        </div>

        {/* Right image container */}
        <div className="relative p-2 transform rotate-3 rounded-3xl border-2 border-white border-opacity-30 backdrop-filter backdrop-blur-sm transition-transform duration-500 ease-in-out hover:rotate-0">
          <img
            src="https://placehold.co/400x600/A088FF/FFFFFF?text=Online+Tutoring"
            alt="Student on a video call"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

      </div>
    </div>
  );
};

export default App;


// 'use client'

// export default function WhyChooseUsSection() {
//   const benefits = [
//     { title: "Expert Instructors", icon: "👨‍🏫" },
//     { title: "Interactive Learning", icon: "💻" },
//     { title: "Affordable Learning", icon: "💸" },
//     { title: "Career Advance", icon: "🚀" },
//     { title: "Course Selection", icon: "📚" },
//     { title: "Support Community", icon: "🤝" },
//   ];

//     const text1 = 'STUDY ABOARD .';
 

//   return (
//     <section className="relative overflow-hidden bg-violet-700 py-20 text-white">
//       {/* Abstract background decorations */}
//       <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />
//       <div className="pointer-events-none absolute top-1/2 right-10 h-20 w-20 rounded-full border-2 border-white/40" />
//       <svg className="absolute top-12 left-12 h-10 w-10 text-violet-400/50" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//         <path d="M4 19h16V5H4v14zm2-2V7h12v10H6z" /> {/* open book */}
//       </svg>
//       <svg className="absolute bottom-20 left-1/3 h-10 w-10 text-violet-300/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//         <path d="M4 20l16-4-6-6-10 10z" /> {/* pencil */}
//       </svg>
//       <svg className="absolute top-1/3 right-24 h-12 w-12 text-emerald-300/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//         <circle cx="12" cy="12" r="5" />
//         <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.5 7.5-1.5-1.5M6 6 4.5 4.5" /> {/* lightbulb */}
//       </svg>
//       <svg className="absolute top-2/3 left-1/4 h-16 w-16 text-violet-200/50" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//         <path d="M2 12c2-2 6-2 8 0s6 2 8 0 6-2 8 0" /> {/* wavy pattern */}
//       </svg>

//       <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16">
//         {/* Left: learner images */}
//         <div className="flex items-center justify-center min-h-screen p-4 ">
//       <div className="container relative mx-auto flex flex-col md:flex-row items-center justify-center gap-[-100px]">
//         {/* Decorative background shapes */}
//         <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl -z-10"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl -z-10"></div>

//         {/* Left image container */}
//         <div className="relative p-2 transform -rotate-3 rounded-3xl border-2 border-white border-opacity-30 backdrop-filter backdrop-blur-sm transition-transform duration-500 ease-in-out hover:rotate-0 z-10">
//           <img
//             src="https://studyhub-nextjs.vercel.app/_next/image?url=%2Fimages%2Fwhy-choose%2F02.jpg&w=256&q=75"
//             alt="Student in a classroom"
//             className="w-full h-full object-cover rounded-2xl"
//           />
//           <div className="absolute top-4 right-4 p-2 bg-white bg-opacity-20 rounded-full">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L14.732 5.232z" />
//             </svg>
//           </div>
//         </div>

//         {/* Rotated smaller circular overlay with true infinite rotation */}
//         <div className="absolute w-42 h-42 rounded-full border-2 border-white border-opacity-30 z-20" style={{ animation: 'spin 10s linear infinite' }}></div>
//         <div className="absolute w-42 h-42 flex items-center justify-center z-20">
//           {[...text1].map((char, i) => (
//             <span
//               key={`t1-${i}`}
//               style={{ transform: `rotate(${(i * 360) / text1.length}deg) translate(0, -70px)` }}
//               className="absolute text-white text-xs uppercase font-semibold"
//             >
//               {char}
//             </span>
//           ))}

//         </div>

//         {/* Right image container */}
//         <div className="relative p-2 transform rotate-3 rounded-3xl border-2 border-white border-opacity-30 backdrop-filter backdrop-blur-sm transition-transform duration-500 ease-in-out hover:rotate-0 z-10">
//           <img
//             src="https://studyhub-nextjs.vercel.app/_next/image?url=%2Fimages%2Fwhy-choose%2F03.jpg&w=640&q=75"
//             alt="Student on a video call"
//             className="w-full h-full object-cover rounded-2xl"
//           />
//         </div>
//       </div>
//       <style jsx>{`
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>

//         {/* Right: text and benefits */}
//         <div className="md:w-1/2">
//           <div className="mb-3 flex items-center gap-2 text-sm text-violet-200">
//             <svg
//               viewBox="0 0 24 24"
//               className="h-4 w-4"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-7z" />
//             </svg>
//             Why Choose Us
//           </div>

//           <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
//             Studyhub Your Path to Excellence & Success
//           </h2>
//           <p className="mt-3 max-w-lg text-violet-100">
//             We are passionate about education and dedicated to providing high-quality learning resources for learners of all backgrounds.
//           </p>

//           {/* Benefits grid */}
//           <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
//             {benefits.map((b) => (
//               <div
//                 key={b.title}
//                 className="flex items-center gap-2 rounded-lg border border-violet-500/40 bg-violet-600/40 px-3 py-2 text-sm font-medium"
//               >
//                 <span>{b.icon}</span>
//                 {b.title}
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <button className="mt-8 inline-flex items-center rounded-lg bg-white px-5 py-3 font-semibold text-violet-700 shadow hover:bg-violet-50">
//             View All Course
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="ml-2 h-4 w-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


