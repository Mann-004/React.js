import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="pt-20 px-6 md:px-16 lg:px-32 bg-gray-50 min-h-screen text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600 text-center">
          Contact Us
        </h1>
        <p className="text-lg text-center mb-10 text-gray-600">
          Have questions or feedback? We'd love to hear from you.
        </p>

        <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-500">
          Or go back to <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
