import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Events", href: "/events" },
    { name: "Sponsorship", href: "/sponsors" },
    { name: "Concert", href: "/concert" },
    { name: "Hack24", href: "/hackathon" },
    { name: "Team", href: "/members" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook size={20} />, href: "#" },
    { name: "Instagram", icon: <Instagram size={20} />, href: "#" },
    { name: "Twitter", icon: <Twitter size={20} />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, href: "#" },
    { name: "YouTube", icon: <Youtube size={20} />, href: "#" },
  ];

  const contactInfo = [
    { icon: <Mail size={20} />, detail: "info@ngpkanam.com" },
    { icon: <Phone size={20} />, detail: "+91 98765 43210" },
    { icon: <MapPin size={20} />, detail: "NGP Campus, Coimbatore, Tamil Nadu" },
  ];

  return (
    <footer
      style={{ borderTop: "0.1px solid #AFAFAF48" }}
      className="relative bg-[#0F0F0FFF] text-white overflow-hidden pt-16 pb-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Kanam '26
            </h3>
            <p className="text-gray-300 mb-6">
              Grand Techno-Cultural Sports Fest
            </p>
            {/* Social media links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-purple-500 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:animate-pulse"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-purple-500 pb-2">
              Contact Info
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-0.5">{item.icon}</span>
                  <span className="text-gray-300">{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-purple-500 pb-2">
              Event Location
            </h4>
            <div className="rounded-lg overflow-hidden border border-gray-700 shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.6888533784336!2d77.03431377529101!3d11.061938289104727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f8755e3f2769%3A0xac500119952c7945!2sNGP%20Institutions%20Entrance!5e0!3m2!1sen!2sin!4v1756741727027!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kanam 2026 Event Location"
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="text-gray-300 text-sm mt-3 text-center">
              NGP Campus, Coimbatore
            </p>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-[#AFAFAF48] pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <p className="text-gray-400 text-sm mb-2 md:mb-0 md:mr-4">
              © {new Date().getFullYear()} Kanam '26. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Developed by Alan Joshua
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-purple-500 rounded-full filter blur-xl opacity-20 animate-bounce"></div>
      <div className="absolute top-10 right-10 w-16 h-16 bg-blue-500 rounded-full filter blur-xl opacity-20 animate-pulse"></div>
    </footer>
  );
};

export default Footer;