import React from 'react';
import Banner from '../components/Banner';
import SearchBar from '../components/SearchBar';

const Homepage = () => {
  return (
    <div className="p-8">
      <Banner />
      <SearchBar />

      {/* Services Overview Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* IT Training Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group overflow-hidden">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1550439062-609e1531270e" 
                alt="IT Training"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-600">IT Career Training</h3>
              <p className="text-gray-600">
                Full-stack development courses with modern tech stack including React, Node.js, 
                and cloud technologies. Includes real-world projects and career mentoring.
              </p>
            </div>
          </div>

          {/* Certification Prep Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group overflow-hidden">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998" 
                alt="Certification Preparation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-green-600">Certification Programs</h3>
              <p className="text-gray-600">
                Prepare for top certifications including AWS, Microsoft Azure, and Cisco. 
                Includes practice exams, study groups, and expert review sessions.
              </p>
            </div>
          </div>

          {/* Corporate Workshops Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group overflow-hidden">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Corporate Training"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-purple-600">Corporate Solutions</h3>
              <p className="text-gray-600">
                Customized team training programs in DevOps, cloud migration, and cybersecurity. 
                On-site or virtual delivery options available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="mt-20 bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Transforming Tech Careers</h2>
          
          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-blue-600 mb-2">5,000+</div>
              <h3 className="text-xl font-semibold mb-2">Students Trained</h3>
              <p className="text-gray-600">Since 2018 across 12 countries</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-green-600 mb-2">94%</div>
              <h3 className="text-xl font-semibold mb-2">Placement Success</h3>
              <p className="text-gray-600">Average within 3 months of graduation</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-purple-600 mb-2">4.8/5</div>
              <h3 className="text-xl font-semibold mb-2">Average Rating</h3>
              <p className="text-gray-600">From 1,500+ student reviews</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <blockquote className="text-lg italic text-gray-700 mb-6">
                "After completing the Full-Stack Development program, I transitioned from 
                retail management to a $85k developer role at a Fortune 500 company. 
                The career support was invaluable!"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Frontend Developer, Microsoft</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <blockquote className="text-lg italic text-gray-700 mb-6">
                "The AWS certification prep helped me pass on first attempt. 
                I doubled my salary within 6 months and now lead cloud projects at Amazon."
              </blockquote>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                  alt="Michael Chen" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-gray-600">Cloud Architect, AWS</p>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default Homepage;