'use client';

import { useState } from 'react';
import BrandLogo from './BrandLogo';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <BrandLogo />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium relative">
          <a href="#" className="hover:text-purple-600 transition-colors">Home</a>

          {/* Mega Menu Trigger */}
          <div className="group relative">
            <button className="hover:text-purple-600 transition-colors">Programs</button>
            {/* Mega Menu Panel */}
            <div className="absolute left-0 top-full hidden w-[600px] grid-cols-3 gap-6 rounded-b-xl bg-white p-6 shadow-lg group-hover:grid">
              <div>
                <h4 className="mb-2 text-sm font-semibold text-gray-800">Technology</h4>
                <ul className="space-y-1 text-gray-600">
                  <li><a href="#" className="hover:text-purple-600">AI & Machine Learning</a></li>
                  <li><a href="#" className="hover:text-purple-600">Data Science</a></li>
                  <li><a href="#" className="hover:text-purple-600">Cloud Computing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold text-gray-800">Creative</h4>
                <ul className="space-y-1 text-gray-600">
                  <li><a href="#" className="hover:text-purple-600">Digital Marketing</a></li>
                  <li><a href="#" className="hover:text-purple-600">Video Editing</a></li>
                  <li><a href="#" className="hover:text-purple-600">Animation</a></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold text-gray-800">Professional</h4>
                <ul className="space-y-1 text-gray-600">
                  <li><a href="#" className="hover:text-purple-600">Project Management</a></li>
                  <li><a href="#" className="hover:text-purple-600">Finance & Accounting</a></li>
                  <li><a href="#" className="hover:text-purple-600">Leadership</a></li>
                </ul>
              </div>
            </div>
          </div>

          <a href="#" className="hover:text-purple-600 transition-colors">Our Story</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Workshops</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Support</a>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="rounded-lg border border-purple-600 px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50">
            Sign In
          </button>
          <button className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700">
            Join Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="h-7 w-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white px-6 py-4 space-y-4 text-sm font-medium">
          <a href="#" className="block hover:text-purple-600">Home</a>
          <div>
            <span className="block font-semibold text-gray-700">Programs</span>
            <ul className="mt-2 space-y-2 pl-3 text-gray-600">
              <li><a href="#" className="hover:text-purple-600">AI & Machine Learning</a></li>
              <li><a href="#" className="hover:text-purple-600">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-purple-600">Leadership</a></li>
            </ul>
          </div>
          <a href="#" className="block hover:text-purple-600">Our Story</a>
          <a href="#" className="block hover:text-purple-600">Workshops</a>
          <a href="#" className="block hover:text-purple-600">Support</a>

          <div className="flex flex-col gap-2 pt-4">
            <button className="rounded-lg border border-purple-600 px-4 py-2 text-purple-600 hover:bg-purple-50">
              Sign In
            </button>
            <button className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">
              Join Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
