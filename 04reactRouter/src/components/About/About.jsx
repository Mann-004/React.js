import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20 px-6 md:px-16 lg:px-32 bg-white min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600 text-center">
          About Us
        </h1>
        <p className="text-lg mb-6 text-gray-700 text-center">
          We are a dedicated team passionate about creating web solutions that truly make an impact.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h2 className="text-xl font-semibold text-blue-500 mb-2">Our Mission</h2>
            <p className="text-gray-600">
              To build accessible, high-quality web applications that solve real-world problems with elegant code and thoughtful design.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-blue-500 mb-2">Our Vision</h2>
            <p className="text-gray-600">
              To be a trusted tech partner for startups and enterprises alike, delivering reliable digital solutions with care.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
