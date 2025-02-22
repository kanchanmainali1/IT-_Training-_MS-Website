import React, { useState, useEffect, useRef } from 'react';

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef(null);

  const slides = [
    {
      type: 'course',
      heading: 'Web Development',
      text: 'Master Full-Stack Development with hands-on projects.',
    },
    {
      type: 'offer',
      heading: '10% off for January batch!',
      text: 'Limited time offer. Enroll now to secure your discount.',
    },
    {
      type: 'announcement',
      heading: 'New Python Course Launched',
      text: 'Explore our latest Python programming course with AI and data science modules.',
    },
  ];

  const goToSlide = (index) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveSlide(index);
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="bg-blue-600 text-white p-12 rounded-lg text-center relative">
      {/* Slide Content */}
      <div className="min-h-[200px] mb-8">
        <h1 className={`text-4xl font-bold mb-4 transition-all duration-500 ${
          slides[activeSlide].type === 'offer' ? 'text-yellow-300' : ''
        }`}>
          {slides[activeSlide].heading}
        </h1>
        <p className="text-xl">{slides[activeSlide].text}</p>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mb-8 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === activeSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="mt-6 space-x-4">
        <button className="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
          Enroll Now
        </button>
        <button className="bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
          View Courses
        </button>
        <button className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
          Schedule a Demo
        </button>
      </div>
    </section>
  );
};

export default Banner;