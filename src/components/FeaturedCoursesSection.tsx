'use client'
import { useState } from "react";

const categories = ["All Categories", "Business", "Marketing", "Music", "Design", "Technology"];

const courses = [
  // Business
  {
    id: 1,
    image: "https://placehold.co/400x250?text=Business+Strategy",
    category: "Business",
    lessons: 18,
    students: 85,
    title: "Business Strategy Masterclass: Build & Grow",
    instructor: "Elena Carter",
    rating: 4.6,
    originalPrice: 129.99,
    price: 99.99,
  },
  {
    id: 2,
    image: "https://placehold.co/400x250?text=Finance+Essentials",
    category: "Business",
    lessons: 22,
    students: 120,
    title: "Finance Essentials for Entrepreneurs",
    instructor: "Mark Wilson",
    rating: 4.7,
    originalPrice: 109.99,
    price: 79.99,
  },

  // Marketing
  {
    id: 3,
    image: "https://placehold.co/400x250?text=Digital+Marketing",
    category: "Marketing",
    lessons: 30,
    students: 150,
    title: "Digital Marketing 2025: SEO, SEM & Social Media",
    instructor: "Sophia Green",
    rating: 4.8,
    originalPrice: 139.99,
    price: 89.99,
  },
  {
    id: 4,
    image: "https://placehold.co/400x250?text=Content+Marketing",
    category: "Marketing",
    lessons: 16,
    students: 90,
    title: "Content Marketing: Grow Your Brand Online",
    instructor: "James Anderson",
    rating: 4.5,
    originalPrice: 99.99,
    price: 69.99,
  },

  // Music
  {
    id: 5,
    image: "https://placehold.co/400x250?text=Guitar+Beginner",
    category: "Music",
    lessons: 40,
    students: 210,
    title: "Guitar for Beginners: Play Your First Song",
    instructor: "Chris Martin",
    rating: 4.9,
    originalPrice: 119.99,
    price: 59.99,
  },
  {
    id: 6,
    image: "https://placehold.co/400x250?text=Music+Production",
    category: "Music",
    lessons: 35,
    students: 175,
    title: "Music Production in FL Studio: Step by Step",
    instructor: "Emily Johnson",
    rating: 4.7,
    originalPrice: 129.99,
    price: 89.99,
  },

  // Design
  {
    id: 7,
    image: "https://placehold.co/400x250?text=UIUX+Design",
    category: "Design",
    lessons: 28,
    students: 140,
    title: "UI/UX Design Fundamentals: From Wireframe to Prototype",
    instructor: "David Lee",
    rating: 4.6,
    originalPrice: 149.99,
    price: 99.99,
  },
  {
    id: 8,
    image: "https://placehold.co/400x250?text=Graphic+Design",
    category: "Design",
    lessons: 20,
    students: 110,
    title: "Graphic Design with Adobe Illustrator & Photoshop",
    instructor: "Anna White",
    rating: 4.5,
    originalPrice: 129.99,
    price: 89.99,
  },

  // Technology
  {
    id: 9,
    image: "https://placehold.co/400x250?text=Web+Development",
    category: "Technology",
    lessons: 45,
    students: 250,
    title: "Full-Stack Web Development: React, Node & MongoDB",
    instructor: "Daniel Kim",
    rating: 4.9,
    originalPrice: 199.99,
    price: 149.99,
  },
  {
    id: 10,
    image: "https://placehold.co/400x250?text=AI+Essentials",
    category: "Technology",
    lessons: 32,
    students: 180,
    title: "AI & Machine Learning Essentials with Python",
    instructor: "Olivia Brown",
    rating: 4.8,
    originalPrice: 189.99,
    price: 139.99,
  },
];

function RatingStars({ rating }:any) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex items-center text-amber-500">
      {Array(fullStars)
        .fill(fullStars)
        .map((_, i) => (
          <svg key={`full-${i}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.379-2.454a1 1 0 00-1.175 0l-3.379 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.287-3.967z" />
          </svg>
        ))}
      {halfStar && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.379-2.454a1 1 0 00-.5-.847V2.927z" />
        </svg>
      )}
      {Array(emptyStars)
        .fill(emptyStars)
        .map((_, i) => (
          <svg key={`empty-${i}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-300">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.379-2.454a1 1 0 00-1.175 0l-3.379 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.287-3.967z" />
          </svg>
        ))}
    </div>
  );
}

export default function FeaturedCoursesSection() {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const filteredCourses =
    activeCategory === "All Categories"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Label */}
        <div className="mx-auto mb-3 flex items-center gap-2 text-sm text-violet-700">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-violet-700">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-7z"/></svg>
          </span>
          Courses
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Explore Featured Courses
        </h2>
        <p className="mt-2 text-slate-500">
          Find the perfect course to boost your skills and career.
        </p>

        {/* Categories */}
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-violet-600 text-white"
                  : "bg-violet-50 text-violet-600 hover:bg-violet-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition">
              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-44 object-cover" />
                <span className="absolute top-3 left-3 bg-violet-100 text-violet-700 text-xs font-medium px-2 py-1 rounded">
                  {course.category}
                </span>
                <button className="absolute top-3 right-3 bg-white/80 p-1 rounded-full shadow hover:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-slate-600">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center text-xs text-gray-500 gap-4 mb-2">
                  <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" /></svg>{course.lessons} Lessons</span>
                  <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>{course.students} Students</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-1 line-clamp-2">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{course.instructor}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-700">{course.rating}</span>
                    <RatingStars rating={course.rating} />
                  </div>
                  <div className="text-sm text-gray-500 line-through">${course.originalPrice}</div>
                  <div className="text-sm font-semibold text-violet-600">${course.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
