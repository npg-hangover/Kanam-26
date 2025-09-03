import React from "react";
import { useEffect, useState } from "react";
import cms from "../Components/Cmc";
import {
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Link as LinkIcon,
  Users,
  Award,
  Star,
  Heart
} from "lucide-react";

const Members = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            {/* <CircularProgress size={60} sx={{ color: '#8B5CF6' }} /> */}
            <p className="mt-4 text-xl text-gray-300">Loading Team Members...</p>
          </div>
        </div>
      ) : (
        <Con />
      )}
    </div>
  );
};

function Con() {
  const [data, setData] = useState([]);
  const [activeCommittee, setActiveCommittee] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        let { data: fetchedData, error } = await cms.from("Team").select("*");

        if (error) throw error;

        setData(fetchedData);
        
        // Set the first committee as active by default
        if (fetchedData.length > 0) {
          const committees = [...new Set(fetchedData.map(item => item.committee))];
          setActiveCommittee(committees[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, []);

  // Group data by committee
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.committee]) {
      acc[item.committee] = [];
    }
    acc[item.committee].push(item);
    return acc;
  }, {});

  // Get all committees
  const committees = Object.keys(groupedData);

  // Social media icon component
  const SocialIcon = ({ platform, url }) => {
    if (!url) return null;
    
    const iconProps = {
      size: 18,
      className: "text-gray-400 hover:text-white transition-colors duration-300"
    };
    
    switch(platform) {
      case 'instagram':
        return <a href={url} target="_blank" rel="noopener noreferrer"><Instagram {...iconProps} /></a>;
      case 'twitter':
        return <a href={url} target="_blank" rel="noopener noreferrer"><Twitter {...iconProps} /></a>;
      
      case 'facebook':
        return <a href={url} target="_blank" rel="noopener noreferrer"><Facebook {...iconProps} /></a>;
      
      case 'email':
        return <a href={`mailto:${url}`}><Mail {...iconProps} /></a>;
      case 'website':
        return <a href={url} target="_blank" rel="noopener noreferrer"><LinkIcon {...iconProps} /></a>;
      default:
        return null;
    }
  };

  return (
    <div className="py-16 mt-0 sm:py-24">
      {/* Background Elements */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      {/* Header Section */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center justify-center p-3 bg-purple-900/30 rounded-full mb-6">
          <Users size={36} className="text-purple-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Team</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Meet the talented individuals who make it all happen
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
      </div>

      {/* Committee Navigation */}
      {committees.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 mb-12 px-6 relative z-10">
          {committees.map((committee) => (
            <button
              key={committee}
              onClick={() => setActiveCommittee(committee)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCommittee === committee
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {committee}
            </button>
          ))}
        </div>
      )}

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {Object.entries(groupedData).map(([committee, members]) => (
          <div 
            key={committee} 
            className={`mb-20 transition-opacity duration-500 ${activeCommittee === committee ? 'opacity-100' : 'opacity-40'}`}
          >
            {/* Committee Name */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3">
                {committee}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
              <p className="text-gray-400 mt-4">{members.length} members</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Member Cards */}
              {members.map((member, index) => (
                <div 
                  key={member.id} 
                  className="relative group bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 transition-all duration-500 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                    
                    {/* Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3 className="text-xl font-bold mb-1 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                        {member.name}
                      </h3>
                      <p className="text-purple-300 text-sm transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                        {member.role}
                      </p>
                      
                      {/* Social Links */}
                      <div className="flex space-x-3 mt-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        {member.instagram && <SocialIcon platform="instagram" url={member.instagram} />}
                        {member.twitter && <SocialIcon platform="twitter" url={member.twitter} />}
                        
                        {member.facebook && <SocialIcon platform="facebook" url={member.facebook} />}
                        
                        {member.email && <SocialIcon platform="email" url={member.email} />}
                        {member.website && <SocialIcon platform="website" url={member.website} />}
                      </div>
                    </div>

                    {/* Favorite/Star indicator */}
                    {member.favorite && (
                      <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Star size={16} className="text-yellow-400 fill-current" />
                      </div>
                    )}
                  </div>
                  
                  {/* Additional Info */}
                  <div className="p-5">
                    <div className="text-gray-300 text-sm mb-3 h-12 overflow-hidden">
                      {member.bio || `${member.role} in the ${committee} committee`}
                    </div>
                    
                    {/* Skills/Interests */}
                    {member.skills && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {member.skills.split(',').slice(0, 3).map((skill, index) => (
                          <span 
                            key={index} 
                            className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full transition-colors duration-300 hover:bg-purple-800/50"
                          >
                            {skill.trim()}
                          </span>
                        ))}
                        {member.skills.split(',').length > 3 && (
                          <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full">
                            +{member.skills.split(',').length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;