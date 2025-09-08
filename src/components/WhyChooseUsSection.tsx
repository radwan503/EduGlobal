'use client'

export default function WhyChooseUsSection() {
  const benefits = [
    { title: "Global Universities", icon: "🌍" },
    { title: "Scholarship Guidance", icon: "🎓" },
    { title: "Visa Assistance", icon: "🛂" },
    { title: "Career Mentorship", icon: "💼" },
    { title: "Cultural Programs", icon: "🎭" },
    { title: "24/7 Support", icon: "📞" },
  ];

  const text1 = 'STUDY ABROAD 🌎';

  return (
    <section className="relative overflow-hidden bg-violet-700 py-20 text-white">
      {/* Abstract background decorations */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-1/2 right-10 h-20 w-20 rounded-full border-2 border-white/40 animate-pulse" />
      <svg className="absolute top-12 left-12 h-10 w-10 text-violet-400/50 animate-spin" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M4 19h16V5H4v14zm2-2V7h12v10H6z" />
      </svg>
      <svg className="absolute bottom-20 left-1/3 h-10 w-10 text-violet-300/60 animate-bounce" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M4 20l16-4-6-6-10 10z" />
      </svg>
      <svg className="absolute top-1/3 right-24 h-12 w-12 text-emerald-300/60 animate-ping" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.5 7.5-1.5-1.5M6 6 4.5 4.5" />
      </svg>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16">
        {/* Left: learner images */}
        <div className="">
          <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-[-80px] px-4 md:px-6">
            {/* Left image container */}
            <div className="relative md:w-1/3 w-full p-2 transform -rotate-3 rounded-3xl border-2 border-white border-opacity-30 backdrop-blur-sm transition-transform duration-500 ease-in-out hover:rotate-0 z-10">
              <img
                src="https://images.unsplash.com/photo-1581668181500-08c6a6e006f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHN0dWR5fGVufDB8MXwwfHx8Mg%3D%3D"
                alt="Students celebrating abroad"
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
              />
              <div className="absolute top-4 right-4 p-2 bg-white bg-opacity-20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L14.732 5.232z" />
                </svg>
              </div>
            </div>

            {/* Rotating circular overlay */}
            <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-white border-opacity-30 z-20 animate-spin-infinite"></div>
            <div className="absolute w-28 h-28 md:w-36 md:h-36 flex items-center justify-center z-20 animate-spin-infinite">
              {[...text1].map((char, i) => (
                <span
                  key={`t1-${i}`}
                  style={{ transform: `rotate(${(i * 360) / text1.length}deg) translate(0, -48px)` }}
                  className="absolute text-white text-[10px] md:text-xs uppercase font-semibold"
                >
                  {char}
                </span>
              ))}
            </div>

            {/* Right image container */}
            <div className="relative md:w-1/3 w-full p-2 transform rotate-3 rounded-3xl border-2 border-white border-opacity-30 backdrop-blur-sm transition-transform duration-500 ease-in-out hover:rotate-0 z-10">
              <img
                src="https://images.unsplash.com/photo-1587613863965-74d82b39ef79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3R1ZHl8ZW58MHwxfDB8fHwy"
                alt="Student studying overseas"
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
              />
            </div>
          </div>

          <style jsx>{`
            @keyframes spinInfinite {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .animate-spin-infinite {
              animation: spinInfinite 15s linear infinite;
            }
          `}</style>
        </div>

        {/* Right: text and benefits */}
        <div className="md:w-1/2">
          <div className="mb-3 flex items-center gap-2 text-sm text-violet-200">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-7z" />
            </svg>
            Why Choose StudyHub Abroad
          </div>

          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Your Gateway to Global Education & Opportunities
          </h2>
          <p className="mt-3 max-w-lg text-violet-100">
            Unlock a world of possibilities by joining top universities, accessing international scholarships, and building a career beyond borders.
          </p>

          {/* Benefits grid */}
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex items-center gap-2 rounded-lg border border-violet-500/40 bg-violet-600/40 px-3 py-2 text-sm font-medium"
              >
                <span>{b.icon}</span>
                {b.title}
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-8 inline-flex items-center rounded-lg bg-white px-5 py-3 font-semibold text-violet-700 shadow hover:bg-violet-50">
            Explore Programs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
