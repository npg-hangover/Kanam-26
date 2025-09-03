import React, { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import Marquee from "react-fast-marquee";
import "./home.css";

const EventHomepage = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const ngpitRef = useRef(null);
  const ngpcasRef = useRef(null);

  const images = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1200px-State_Bank_of_India_logo.svg.png",
    },
    {
      src: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-vert-500x200-2c50-p@2x.png",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQXY980OZg7VFawyIdqyvY3IQW0iZLOBC8w&s",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/25/Intel_logo_%282006-2020%29.jpg",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMIkehcJnGoVQvsid8gki0aHwAQ_fgCJxODA&s",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Meta_Inc._logo.jpg",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/03/Lenovo_Global_Corporate_Logo.png",
    },
  ];

  const eventDate = new Date("February 4, 2026 9:00:00").getTime();

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const interval = setInterval(updateCountdown, 1000);
    window.addEventListener("scroll", handleScroll);

    updateCountdown();

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [eventDate]);

  const calculateParallax = (speed) => {
    return scrollPosition * speed;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-hidden">
      {/* Navigation */}
      <div className="w-full justify-center flex">
        <nav
          style={{ borderBottom: "0.1px solid #AFAFAF48" }}
          className="fixed w-[100%] bg-[#2929293B] bg-opacity-70 backdrop-filter backdrop-blur-lg z-50 transition-all duration-300"
        >
          <div className="px-4 py-3 flex justify-between items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
              Kanam '26
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="hover:text-orange-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-orange-400 transition-colors"
              >
                Events
              </a>
              <a
                href="#speakers"
                className="hover:text-orange-400 transition-colors"
              >
                Sponsorships
              </a>
              <a
                href="#schedule"
                className="hover:text-orange-400 transition-colors"
              >
                Concert
              </a>
              <a
                href="#register"
                className="hover:text-orange-400 transition-colors"
              >
                Hack 24
              </a>
            </div>
            <button className="px-4 py-2 bg-[#D35400] rounded-lg font-semibold hover:bg-orange-700 transition-all">
              Register Now
            </button>
          </div>
        </nav>
      </div>

      {/* Hero Section with Parallax */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
         <Spline scene="https://prod.spline.design/xSASI3e94TYm8s8s/scene.splinecode" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] to-transparent"></div>

        <div className="relative z-10 text-center px-4 py-16 max-w-6xl mx-auto mt-16">
          <div className="mb-6 animate-bounce">
            <span className="bg-orange-900 text-orange-200 text-lg px-4 py-1 rounded-full">
              February 4-7, 2026
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-[#E6E6E9]">Kanam '26</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#FFFFFFFF] mb-10 max-w-3xl mx-auto animate-fade-in-up">
            Grand Techno-Cultural Sports Fest
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 p-4 gap-4 max-w-2xl mx-auto mb-12 animate-fade-in-up">
            <div className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-xl p-4 border border-orange-500 border-opacity-30 hover:scale-105 transition-transform">
              <div className="text-4xl md:text-6xl font-bold text-orange-400">
                {days}
              </div>
              <div className="text-sm text-orange-200 mt-2">Days</div>
            </div>

            <div className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-xl p-4 border border-amber-500 border-opacity-30 hover:scale-105 transition-transform">
              <div className="text-4xl md:text-6xl font-bold text-amber-400">
                {hours}
              </div>
              <div className="text-sm text-amber-200 mt-2">Hours</div>
            </div>

            <div className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-xl p-4 border border-yellow-500 border-opacity-30 hover:scale-105 transition-transform">
              <div className="text-4xl md:text-6xl font-bold text-yellow-400">
                {minutes}
              </div>
              <div className="text-sm text-yellow-200 mt-2">Minutes</div>
            </div>

            <div className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-xl p-4 border border-red-500 border-opacity-30 hover:scale-105 transition-transform">
              <div className="text-4xl md:text-6xl font-bold text-red-400">
                {seconds}
              </div>
              <div className="text-sm text-red-200 mt-2">Seconds</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-10">
            <button className="px-8 py-3 bg-transparent border-2 border-orange-500 text-orange-300 rounded-lg font-semibold text-lg hover:bg-orange-900 hover:bg-opacity-30 transition-all">
              Explore Events
            </button>
            <button className="px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold text-lg hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30">
              Register Now
            </button>
          </div>
        </div>
      </section>
      
      <section style={{ background: "#0E0E0EFF" }}>
        <p className="text-center text-2xl p-4 text-[#C1C1C1FF]">
          Sponsored By
        </p>
        <Marquee
          pauseOnHover={true}
          gradientWidth={400}
          gradientColor="#0E0E0EFF"
          gradient={true}
        >
          <div className="p-8 flex gap-18">
            {images.map((item, index) => (
              <img
                key={index}
                className="h-15"
                src={item.src}
                alt="Sponsor"
              />
            ))}
          </div>
        </Marquee>
      </section>

      {/* About Section with Parallax */}
      <section
        id="about"
        ref={aboutRef}
        className="py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] opacity-20"></div>

        <div
          className="absolute top-110 -left-40 w-80 h-80 bg-[#FF8C00] rounded-full filter blur-3xl opacity-20"
          style={{
            transform: `translate(${calculateParallax(
              0.1
            )}px, ${calculateParallax(0.05)}px)`,
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                Kanam
              </span>
            </h2>
            <div className="w-30 h-1 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto"></div>
          </div>

          <div className="grid p-4 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl text-[#E6E6E9] font-bold mb-6">
                A Journey to the Celebration
              </h3>
              <p className="text-orange-200 mb-6">
                Kanam '26 the Grand Techno-Cultural Sports Fest with the tagline
                'One Pulse One Beat One Kanam,' is a remarkable initiative that
                embodies unity and collaboration. Organized jointly by the
                Student Development Council of NGP iTECH and NGPASC, this event
                aims to bring together students from diverse disciplines,
                showcasing their talents in technology, culture, and sports
                while fostering a spirit of camaraderie and innovation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-orange-400">70+</div>
                  <div className="text-orange-200">Events</div>
                </div>
                <div className="transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-amber-400">5,000+</div>
                  <div className="text-orange-200">Footfalls</div>
                </div>
                <div className="transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-yellow-400">25+</div>
                  <div className="text-orange-200">Workshops</div>
                </div>
                <div className="transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-red-400">4</div>
                  <div className="text-orange-200">Days</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute inset-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl rotate-3 opacity-70"
                style={{
                  transform: `translate(${calculateParallax(
                    0.05
                  )}px, ${calculateParallax(0.03)}px)`,
                }}
              ></div>
              <div className="relative border-[1px] border-[rgba(214,97,16,1)] bg-[rgba(214,97,16,0.24)] rounded-2xl p-2 overflow-hidden">
                <img
                  src="https://ngpkanam.com/assets/home2-wWtWmTPN.jpeg"
                  alt="Event gathering"
                  className="rounded-2xl w-full h-96 object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] opacity-20"></div>
        <div
          className="absolute -top-40 -left-40 w-80 h-80 bg-orange-600 rounded-full filter blur-3xl opacity-20"
          style={{
            transform: `translate(${calculateParallax(
              0.1
            )}px, ${calculateParallax(0.05)}px)`,
          }}
        ></div>
        <div
          className="absolute -bottom-50 -right-40 w-80 h-80 bg-amber-600 rounded-full filter blur-3xl opacity-20"
          style={{
            transform: `translate(${calculateParallax(
              -0.1
            )}px, ${calculateParallax(-0.05)}px)`,
          }}
        ></div>

        <PricingSection />
      </section>

      {/* NGP iTECH Section */}
      <section
        id="ngpit"
        ref={ngpitRef}
        className="py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] opacity-20"></div>

        <div
          className="absolute -top-40 -left-40 w-80 h-80 rounded-full filter blur-3xl opacity-20"
          style={{
            transform: `translate(${calculateParallax(
              0.1
            )}px, ${calculateParallax(0.5)}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-50 -right-40 w-80 h-80 bg-amber-600 rounded-full filter blur-3xl opacity-20"
          style={{
            transform: `translate(${calculateParallax(
              -0.1
            )}px, ${calculateParallax(-0.05)}px)`,
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-full">
              <div class="relative flex h-[100%] items-center justify-center rounded-[1.5em] border-[1px] border-[rgba(214,97,16,1)] bg-[rgba(214,97,16,0.24)] p-2 text-lime-300">
                <div class="group absolute left-1/2 top-1/2 flex h-[3em] w-[3em] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[1.5em] border-[1px] border-[#ffffffaa] bg-[#2E2E2E5C] backdrop-blur-[6px] duration-[500ms] hover:h-[90%] hover:w-[90%] hover:rounded-[1.5em]">
                  <svg
                    class="h-[1.5em] w-[1.5em] duration-300 group-hover:opacity-0"
                    viewBox="0 0 48 48"
                    fill="none"
                    height="48"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#a)">
                      <path
                        clip-rule="evenodd"
                        d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z"
                        fill-rule="evenodd"
                        fill="#fff"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path d="M0 0h48v48H0z" fill="#fff"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <div class="items-left duration-600 absolute left-0 top-0 flex translate-y-[100%] flex-col justify-between p-[1.5em] font-nunito text-[hsl(0,0%,85%)] group-hover:translate-y-0">
                    <div class="items-left flex flex-col justify-center">
                      <h1 class="text-[1.5em] font-bold text-[#FFFFFFFF] leading-[0.8em]">
                        Dr. N.G.P. Institute of Technology
                      </h1>
                      <p class="text-[0.9em] mt-4 font-light text-[#FFFFFFFF]">
                        Dr.N.G.P.Institute of Technology established in the year
                        2007 is located in Coimbatore, Tamil Nadu. It is an
                        Autonomous, Self- financing Engineering College,
                        Approved by AICTE, New Delhi and Affiliated to Anna
                        University, Chennai. It is also recognized by UGC,
                        accredited by NAAC with A and eligible programmes are
                        accredited by NBA (B.E.-BME, CSE, ECE, EEE and
                        Mechanical). The Institution offers 10 Under Graduate
                        Programmes in BE BME, CSE, CSE(Cyber Security), Civil,
                        ECE, EEE and Mechanical and B.Tech. AI&DS, CSBS and IT.
                        It also offers 4 Post graduate Programmes namely ME-
                        Computer Science and Engineering. Embedded Systems
                        Technologies, Power Electronics & Drives and MBA.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="https://ngpkanam.com/assets/Engi-Me0zQivH.jpeg"
                  alt="Event gathering"
                  className="rounded-2xl w-full h-full object-cover"
                />
                
              </div>
            </div>
            <div class="relative flex h-[100%] items-center justify-center rounded-[1.5em] border-[1px] border-[rgba(214,97,16,1)] bg-[rgba(214,97,16,0.24)] p-2 text-lime-300">
              <div class="group absolute left-1/2 top-1/2 flex h-[3em] w-[3em] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[1.5em] border-[1px] border-[#ffffffaa] bg-[#2E2E2E5C] backdrop-blur-[6px] duration-[500ms] hover:h-[90%] hover:w-[90%] hover:rounded-[1.5em]">
                <svg
                  class="h-[1.5em] w-[1.5em] duration-300 group-hover:opacity-0"
                  viewBox="0 0 48 48"
                  fill="none"
                  height="48"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      clip-rule="evenodd"
                      d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z"
                      fill-rule="evenodd"
                      fill="#fff"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path d="M0 0h48v48H0z" fill="#fff"></path>
                    </clipPath>
                  </defs>
                </svg>
                <div class="items-left duration-600 absolute left-0 top-0 flex translate-y-[100%] flex-col justify-between p-[1.5em] font-nunito text-[hsl(0,0%,85%)] group-hover:translate-y-0">
                  <div class="items-left flex flex-col justify-center">
                    <h1 class="text-[1.5em] font-bold text-[#FFFFFFFF] leading-[0.8em]">
                      Dr. N.G.P. Arts and Science College
                    </h1>
                    <p class="text-[0.9em] mt-4 font-light text-[#FFFFFFFF]">
                      Dr.N.G.P Arts and Science College was established by the
                      Dr NGP Research and Educational Trust (Formerly Kovai
                      Medical Center Research and Educational Trust) Coimbatore
                      in 1997. The college incepted its educational journey with
                      4 Under Graduate Programmes and today it is emerged as one
                      of the major academies in self-financing institutions in
                      Tamil Nadu, India. The college conferred with the
                      autonomous status in 2015-2016 by the UGC and is
                      affiliated to Bharathiar University, Coimbatore. The
                      College was accredited by the NAAC with 'A++' Grade in the
                      Third cycle and ranked no. 75 by NIRF.
                    </p>
                  </div>
                </div>
              </div>
              <img
                src="https://ngpkanam.com/assets/arts-1tEpPO8x.jpg"
                alt="Event gathering"
                className="rounded-2xl w-full "
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        ref={aboutRef}
        className="py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] opacity-20"></div>

        <div
          className="absolute -top-10 -left-40 w-80 h-80 bg-orange-600 rounded-full filter blur-3xl opacity-20"
          style={{
            transform: `translate(${calculateParallax(
              0.1
            )}px, ${calculateParallax(0.05)}px)`,
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <IconicEvents />
        </div>
      </section>

      <section>
        <Footer />
      </section>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const IconicEvents = () => {
  const events = [
    {
      id: 1,
      title: "Hackathon",
      description:
        "24-hour coding marathon where developers create innovative solutions to real-world problems.",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      stats: "200+ Participants",
    },
    {
      id: 2,
      title: "Concert Night",
      description:
        "An electrifying night with performances by popular artists and bands.",
      icon: "🎵",
      color: "from-purple-500 to-pink-500",
      stats: "5K+ Audience",
    },
    {
      id: 3,
      title: "Robo Wars",
      description:
        "Battle of bots where engineering students showcase their robotic creations.",
      icon: "🤖",
      color: "from-red-500 to-orange-500",
      stats: "50+ Teams",
    },
    {
      id: 4,
      title: "Cultural Night",
      description:
        "A vibrant showcase of diverse cultural performances and traditions.",
      icon: "🎭",
      color: "from-green-500 to-teal-500",
      stats: "100+ Performances",
    },
    {
      id: 5,
      title: "Startup Pitch",
      description:
        "A platform for aspiring entrepreneurs to pitch their ideas to investors.",
      icon: "🚀",
      color: "from-yellow-500 to-amber-500",
      stats: "30+ Startups",
    },
    {
      id: 6,
      title: "Sports Tournament",
      description:
        "Competitive sports events with athletes from various colleges.",
      icon: "⚽",
      color: "from-indigo-500 to-blue-500",
      stats: "15+ Games",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Iconic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Events
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the most anticipated events that make our fest
            unforgettable
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-700 hover:scale-105"
            >
              {/* Rotating background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${event.color} transition-all duration-1000 group-hover:rotate-6 group-hover:scale-110`}
              ></div>

              {/* Animated border */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-700"></div>

              {/* Content container */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <div>
                  {/* Icon */}
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-700">
                    {event.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-200 group-hover:text-white transition-colors duration-500">
                    {event.description}
                  </p>
                </div>

                {/* Stats and CTA */}
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-sm font-semibold text-gray-200 mb-3">
                    {event.stats}
                  </p>
                  <button className="w-full py-2 bg-white/10 backdrop-filter backdrop-blur-lg rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: "Events", href: "#events" },
    { name: "Schedule", href: "#schedule" },
    { name: "Speakers", href: "#speakers" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "Instagram", icon: "📸", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "YouTube", icon: "📺", href: "#" },
  ];

  const contactInfo = [
    { icon: "📧", detail: "info@ngpkanam.com" },
    { icon: "📞", detail: "+91 98765 43210" },
    { icon: "📍", detail: "NGP Campus, Coimbatore, Tamil Nadu" },
  ];

  return (
    <footer
      style={{ borderTop: "0.1px solid #AFAFAF48" }}
      className="relative bg-[#0F0F0FFF] text-white overflow-hidden pt-16 pb-8 mt-20"
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
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-purple-500 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:animate-pulse"></span>
                    {link.name}
                  </a>
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
                  <span className="text-xl mr-3 mt-1">{item.icon}</span>
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
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Kanam '26. All rights reserved.
          </p>
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

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Hackathon Pass",
      price: "₹2000",
      description: "Maximum Tean cap. of 4",
      features: [
        "Dinner and Breakfast is provided",
        "Refreshments are provided",
        "Free Concert Entry",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "General Pass",
      price: "₹300",
      description: "Ideal for enthusiasts who want full experience",
      features: [
        "Workshops",
        "Technical and Non-Technical Events",
        "Paper Presentation",
        "Project Presentation",
        "Free Concert Entry",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Cultural Pass",
      price: "₹1500",
      description: "Maximum Team cap. of 8",
      features: [
        "Cine Bites",
        "Chorus Clash",
        "Beat the Street",
        "Free Concert Entry",
      ],
      popular: false,
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Event{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Passes
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get your preference Pass to be the part of Kanam 26 
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "scale-105 shadow-2xl shadow-purple-500/20 border-2 border-purple-500"
                  : "bg-gray-800/50 border border-gray-700"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg z-10">
                  MOST POPULAR
                </div>
              )}

              {/* Card content */}
              <div className="flex flex-col h-full p-6 bg-gradient-to-b from-gray-800 to-gray-900">
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.title}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      {plan.price}
                    </span>
                    {plan.price !== "Free" && (
                      <span className="text-gray-400 ml-1">/person</span>
                    )}
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>

                {/* Features list */}
                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action button */}
                <button
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      : "bg-gray-700 hover:bg-gray-600 text-white"
                  }`}
                >
                  {plan.price === "Free" ? "Register Now" : "Register Now"}
                </button>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-gray-400">
            For the detailed information on any events get into the events page for the detailed informations
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventHomepage;
