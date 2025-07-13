import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-20 px-6 md:px-16 lg:px-32 bg-gray-50 min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">
          Welcome to MyWebsite!
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-600">
          We provide top-notch solutions to help your business grow.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Learn More
          </Link>
          <Link
            to="/contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
