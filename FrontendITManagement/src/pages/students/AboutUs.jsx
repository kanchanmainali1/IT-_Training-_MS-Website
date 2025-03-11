import React from "react";

const AboutUs = () => {
  const instructors = [
    {
      name: "John Doe",
      photo: "https://via.placeholder.com/150",
      qualification: "MSc in Computer Science",
      achievements: "10+ years of experience in IT training",
    },
    {
      name: "Jane Smith",
      photo: "https://via.placeholder.com/150",
      qualification: "Certified AWS Architect",
      achievements: "Former Microsoft Certified Trainer",
    },
  ];

  const partnerships = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Cisco",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cisco_logo.svg",
    },
    {
      name: "Google Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Google_Cloud_logo.svg",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Company Overview */}
      <section className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-blue-600">About Us</h2>
        <p className="text-gray-700 mt-4">
          Our mission is to empower individuals with cutting-edge IT skills to
          excel in their careers. Our vision is to be a globally recognized IT
          training institution.
        </p>
        <p className="text-gray-700 mt-2">
          Established in 2010, we have grown into a leading training institute,
          helping thousands of students achieve success in IT careers.
        </p>
      </section>

      {/* Team Introduction */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-blue-600 text-center">
          Meet Our Instructors
        </h3>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 max-w-xs text-center"
            >
              <img
                src={instructor.photo}
                alt={instructor.name}
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h4 className="text-xl font-semibold mt-4">{instructor.name}</h4>
              <p className="text-gray-600">{instructor.qualification}</p>
              <p className="text-gray-500 text-sm">{instructor.achievements}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnerships and Affiliations */}
      <section className="mb-12 text-center">
        <h3 className="text-3xl font-semibold text-blue-600">
          Our Partnerships & Affiliations
        </h3>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {partnerships.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto"
              />
              <p className="text-gray-700 mt-2">{partner.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
