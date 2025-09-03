import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Rocket, Star } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated stars */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            opacity: Math.random() * 0.7 + 0.3,
            animationDuration: `${Math.random() * 5 + 3}s`,
          }}
        />
      ))}
      
      {/* Nebula clouds */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Floating elements */}
      
      <div className="absolute top-10 right-10 w-16 h-16 bg-blue-500 rounded-full filter blur-xl opacity-20 animate-pulse">
        <Star className="absolute inset-0 m-auto text-blue-200" size={20} />
      </div>
      <div className="absolute top-1/3 left-20 w-12 h-12 bg-pink-500 rounded-full filter blur-xl opacity-30 animate-bounce delay-1000">
        <Rocket className="absolute inset-0 m-auto text-pink-200" size={16} />
      </div>

      {/* Content */}
      <div className="text-center relative z-10 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lost in Space</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-md mx-auto">
            The page you're looking for seems to have drifted off into the cosmos. Let's get you back home.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all transform hover:-translate-y-1"
          >
            <Home size={20} />
            Home Page
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-transparent border-2 border-purple-500 text-purple-300 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-purple-900 hover:bg-opacity-30 transition-all"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Additional info */}
        <div className="mt-12 pt-8 border-t border-purple-800 border-opacity-50">
          <p className="text-purple-300 mb-4">While you're here, explore our website:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/events" className="text-purple-400 hover:text-purple-300 transition-colors">
              Events
            </Link>
            <Link to="/concert" className="text-purple-400 hover:text-purple-300 transition-colors">
              Concert
            </Link>
            <Link to="/sponsors" className="text-purple-400 hover:text-purple-300 transition-colors">
              Sponsors
            </Link>
            <Link to="/hackathon" className="text-purple-400 hover:text-purple-300 transition-colors">
              Hackathon
            </Link>
          </div>
        </div>
      </div>

      {/* Astronaut illustration */}
      <div className="absolute bottom-20 right-20 opacity-10 hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50C122.091 50 140 68.9086 140 91C140 113.091 122.091 131 100 131C77.9086 131 60 113.091 60 91C60 68.9086 77.9086 50 100 50Z" fill="white"/>
          <path d="M120 91C120 102.046 111.046 111 100 111C88.9543 111 80 102.046 80 91C80 79.9543 88.9543 71 100 71C111.046 71 120 79.9543 120 91Z" fill="#4A5568"/>
          <path d="M85 80C86.6569 80 88 78.6569 88 77C88 75.3431 86.6569 74 85 74C83.3431 74 82 75.3431 82 77C82 78.6569 83.3431 80 85 80Z" fill="white"/>
          <path d="M115 80C116.657 80 118 78.6569 118 77C118 75.3431 116.657 74 115 74C113.343 74 112 75.3431 112 77C112 78.6569 113.343 80 115 80Z" fill="white"/>
          <path d="M100 140C100 140 80 130 80 160H120C120 130 100 140 100 140Z" fill="white"/>
          <path d="M70 120C70 120 50 110 50 140H90C90 110 70 120 70 120Z" fill="white"/>
          <path d="M130 120C130 120 150 110 150 140H110C110 110 130 120 130 120Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default NotFoundPage;