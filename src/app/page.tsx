'use client'
import ExploreCoursesSection from '@/components/ExploreCoursesSection';
import FeaturedCoursesSection from '@/components/FeaturedCoursesSection';
import FooterWithCTABanner from '@/components/_common/FooterWithCTABanner';
import Header from '@/components/_common/Header';
import InstructorsSection from '@/components/InstructorsSection';
import StudentsFeedbackSection from '@/components/StudentsFeedbackSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import HeroSection from '@/components/HeroSection';
import LatestNewsSection from '@/components/LatestNewsSection';
import StatsSection from '@/components/StatsSection';
import TrustedBySection from '@/components/TrustedBySection';
import React from 'react';
import ScrollToTop from '@/components/_common/ScrollToTop';

export default function App() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <TrustedBySection />
        <ExploreCoursesSection/>
        <FeaturedCoursesSection/>
        <WhyChooseUsSection />
        <StatsSection />
        <InstructorsSection />
        <StudentsFeedbackSection />
        <LatestNewsSection />
        <FooterWithCTABanner />
        <ScrollToTop />
      </div>
    </div>
  );
}







