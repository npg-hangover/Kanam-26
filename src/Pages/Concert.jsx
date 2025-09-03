import React, { useState } from 'react';
import { 
  Music, 
  Calendar, 
  Clock, 
  MapPin, 
  Ticket, 
  Play,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight
} from 'lucide-react';

const ConcertPage = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  // Concert information
  const concertInfo = {
    title: "Kanam 2026 Concert",
    date: "February 7, 2026",
    time: "6:00 PM onwards",
    venue: "NGP Campus Grounds, Coimbatore",
    description: "Get ready for the most spectacular musical experience of the year! Kanam 2026 brings together amazing artists for an unforgettable night of music."
  };

  // Artists data for February 7
  const artists = [
    {
      id: 1,
      name: "A.R. Rahman",
      genre: "World Music / Film Score",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      performanceTime: "9:00 PM",
      stage: "Main Stage",
      social: {
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        youtube: "https://youtube.com"
      },
      video: "https://www.youtube.com/embed/79uLcX4lF-s"
    },
    {
      id: 2,
      name: "The Local Train",
      genre: "Rock / Indie",
      image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      performanceTime: "7:30 PM",
      stage: "Rock Arena",
      social: {
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        youtube: "https://youtube.com"
      },
      video: "https://www.youtube.com/embed/5j7Z2cN7fJY"
    },
    {
      id: 3,
      name: "Nikki & The Stars",
      genre: "Pop / Electronic",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      performanceTime: "6:00 PM",
      stage: "Dance Pavilion",
      social: {
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        youtube: "https://youtube.com"
      },
      video: "https://www.youtube.com/embed/JGwWNGJdvx8"
    },
    {
      id: 4,
      name: "Vijay Prakash",
      genre: "Playback / Carnatic Fusion",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      performanceTime: "8:00 PM",
      stage: "Main Stage",
      social: {
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        youtube: "https://youtube.com"
      },
      video: "https://www.youtube.com/embed/6R2BzW2Q+oE"
    },
    {
      id: 5,
      name: "Ritviz",
      genre: "Electronic / Indie Pop",
      image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      performanceTime: "10:30 PM",
      stage: "Dance Pavilion",
      social: {
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        youtube: "https://youtube.com"
      },
      video: "https://www.youtube.com/embed/6R2BzW2Q+oE"
    },
    {
      id: 6,
      name: "When Chai Met Toast",
      genre: "Indie Folk / Pop",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      performanceTime: "6:45 PM",
      stage: "Acoustic Garden",
      social: {
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        youtube: "https://youtube.com"
      },
      video: "https://www.youtube.com/embed/6R2BzW2Q+oE"
    }
  ];

  const playVideo = (artistId) => {
    setPlayingVideo(artistId === playingVideo ? null : artistId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 pb-16 px-4">
      {/* Background Elements */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-purple-900/30 rounded-full mb-6">
            <Music size={32} className="text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kanam <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">2026</span> Concert
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience an unforgettable night of music on February 7, 2026
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
        </div>

        {/* Concert Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Event Details</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar size={20} className="text-purple-400 mr-3" />
                <span className="text-gray-300">{concertInfo.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={20} className="text-purple-400 mr-3" />
                <span className="text-gray-300">{concertInfo.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="text-purple-400 mr-3" />
                <span className="text-gray-300">{concertInfo.venue}</span>
              </div>
            </div>
            <p className="text-gray-300 mt-6">{concertInfo.description}</p>
            <button className="mt-6 flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:-translate-y-1">
              <Ticket size={20} className="mr-2" />
              Get Your Tickets
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>

          <div className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-8 border border-gray-700 overflow-hidden">
            <h2 className="text-2xl font-bold text-white mb-4">Lineup Highlights</h2>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Concert crowd" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2">An Unforgettable Night</h3>
                <p className="text-gray-300">6 amazing artists across multiple stages</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-purple-900/30 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-400">1</div>
                <div className="text-gray-300 text-sm">Night</div>
              </div>
              <div className="bg-pink-900/30 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-pink-400">6</div>
                <div className="text-gray-300 text-sm">Artists</div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Schedule Timeline */}
        

        {/* Artists Grid */}
        <h2 className="text-3xl font-bold text-white text-center mb-8">Performing Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {artists.map(artist => (
            <div key={artist.id} className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 transition-all duration-300 hover:border-purple-500">
              {/* Artist Image */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    artist.stage === "Main Stage" 
                      ? "bg-purple-500/20 text-purple-300" 
                      : artist.stage === "Rock Arena"
                      ? "bg-red-500/20 text-red-300"
                      : "bg-blue-500/20 text-blue-300"
                  }`}>
                    {artist.stage}
                  </span>
                </div>
                <button 
                  onClick={() => playVideo(artist.id)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-purple-600/80 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all hover:scale-110"
                >
                  <Play size={24} className="text-white ml-1" fill="white" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{artist.name}</h3>
                  <p className="text-gray-300 text-sm">{artist.genre}</p>
                </div>
              </div>

              {/* Artist Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Clock size={18} className="text-purple-400 mr-2" />
                    <span className="text-gray-300">{artist.performanceTime}</span>
                  </div>
                  <div className="flex space-x-2">
                    <a href={artist.social.instagram} className="text-gray-400 hover:text-pink-400 transition-colors">
                      <Instagram size={18} />
                    </a>
                    <a href={artist.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href={artist.social.youtube} className="text-gray-400 hover:text-red-400 transition-colors">
                      <Youtube size={18} />
                    </a>
                  </div>
                </div>

                {/* Video Player */}
                {playingVideo === artist.id && (
                  <div className="mt-4 rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="200"
                      src={artist.video}
                      title={`${artist.name} performance`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-12 border border-purple-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Don't Miss Out!</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Join thousands of music lovers for the most anticipated event of the year. 
            Limited tickets available, so book yours now!
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:-translate-y-1 flex items-center mx-auto">
            <Ticket size={20} className="mr-2" />
            Book Your Tickets Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConcertPage;