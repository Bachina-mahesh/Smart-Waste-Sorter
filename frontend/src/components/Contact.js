import React, { useState } from 'react';
import { Mail, Instagram, Facebook, Twitter, Linkedin, Github, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
    alert('Thank you for your message! This is a demo form and no data was sent.');
  };

  return (
    <div className="container mx-auto p-8 pt-20 animate-fade-in">
      <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-center mb-10">
        Contact 
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <div className="w-full md:w-[65%] lg:w-[75%] bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-gray-100 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="mailid" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="mailid"
                name="mailid"
                required
                className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-gray-100 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-gray-100 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="issue" className="block text-sm font-medium text-gray-300">
                Issue
              </label>
              <textarea
                id="issue"
                name="issue"
                rows="4"
                required
                className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-gray-100 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-bold text-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </form>
          {status && (
            <p className="mt-4 text-center text-green-400 font-bold">
              Form submitted successfully!
            </p>
          )}
        </div>

        {/* Social Media and Location */}
        <div className="w-full md:w-[35%] lg:w-[25%] bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 space-y-6">
          <h3 className="text-2xl font-bold text-green-300 mb-4">Connect</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Instagram className="w-6 h-6 text-pink-400" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Facebook className="w-6 h-6 text-blue-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Twitter className="w-6 h-6 text-blue-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Linkedin className="w-6 h-6 text-blue-500" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Github className="w-6 h-6 text-gray-300" />
            </a>
          </div>

          <h3 className="text-2xl font-bold text-green-300 mb-4 mt-8">Location</h3>
          <div className="flex items-center space-x-3 text-gray-400">
            <MapPin className="w-6 h-6 text-green-400" />
            <span>123 Main Street, City, State, Country</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;