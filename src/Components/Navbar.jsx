import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <div className="w-full justify-center flex">
        <nav
          style={{ borderBottom: "0.1px solid #AFAFAF48" }}
          className="fixed w-[100%] bg-[#2929293B] bg-opacity-70 backdrop-filter backdrop-blur-lg z-50 transition-all duration-300"
        >
          <div className="px-4 py-3 text-white flex justify-between items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Kanam '26
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
              to={"/"}
                className="hover:text-purple-400 transition-colors"
              >
                Home
              </Link>
              <Link
              to={"/events"}
                className="hover:text-purple-400 transition-colors"
              >
                Events
              </Link>
              <Link
                to={"/sponsors"}
                className="hover:text-purple-400 transition-colors"
              >
                Sponsorships
              </Link>
              <Link
                to={"/concert"}
                className="hover:text-purple-400 transition-colors"
              >
                Concert
              </Link>
              <Link
                to={"/hackathon"}
                className="hover:text-purple-400 transition-colors"
              >
                Hack 24
              </Link>
            </div>
            <button className="px-4 py-2 bg-[#702DA7FF] rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
              Register Now
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}
