import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import cms from "../Components/Cmc";
import { Search, Filter, Calendar, Users, Award, Clock, MapPin } from 'lucide-react';

AOS.init();

export default function Event() {
  const [searchTerm, setSearchTerm] = useState("");
  const [day, setDay] = useState("");
  const [cluster, setCluster] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventData, setEventData] = useState([]);
  const [activeFilters, setActiveFilters] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await cms.from("Events").select("*");
        if (error) throw error;
        setEventData(data || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Count active filters
    let count = 0;
    if (searchTerm) count++;
    if (day) count++;
    if (cluster) count++;
    if (eventType) count++;
    setActiveFilters(count);
  }, [searchTerm, day, cluster, eventType]);

  const filteredEvents = eventData.filter((event) => {
    return (
      (searchTerm === "" || event.name?.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (day === "" || event.day === day) &&
      (cluster === "" || event.cluster === cluster) &&
      (eventType === "" || event.type === eventType)
    );
  });

  const groupedData = filteredEvents.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {});

  const clearFilters = () => {
    setSearchTerm("");
    setDay("");
    setCluster("");
    setEventType("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 pb-16 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Catalog</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore all the exciting events, workshops, and competitions happening at Kanam '26
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Filter size={24} className="text-purple-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">Filter Events</h2>
            </div>
            {activeFilters > 0 && (
              <button 
                onClick={clearFilters}
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center"
              >
                Clear all filters ({activeFilters})
              </button>
            )}
          </div>

          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search events by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Filter Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <div className="flex items-center mb-2">
                <Calendar size={18} className="text-purple-400 mr-2" />
                <label className="text-gray-300 text-sm font-medium">Event Day</label>
              </div>
              <select
                className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              >
                <option value="">All Days</option>
                <option value="Day 1">Day 1</option>
                <option value="Day 2">Day 2</option>
                <option value="Day 3">Day 3</option>
                <option value="Day 4">Day 4</option>
              </select>
            </div>

            <div className="relative">
              <div className="flex items-center mb-2">
                <Users size={18} className="text-purple-400 mr-2" />
                <label className="text-gray-300 text-sm font-medium">Department Cluster</label>
              </div>
              <select
                className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={cluster}
                onChange={(e) => setCluster(e.target.value)}
              >
                <option value="">All Clusters</option>
                <option value="Computer Science">Computer Science</option>
                <option value="BME ECE EEE">BME ECE EEE</option>
                <option value="CIVIL and MECH">CIVIL and MECH</option>
                <option value="Management and Commerce">Management and Commerce</option>
                <option value="Science">Science</option>
                <option value="Humanities">Humanities</option>
                <option value="General">General</option>
              </select>
            </div>

            <div className="relative">
              <div className="flex items-center mb-2">
                <Award size={18} className="text-purple-400 mr-2" />
                <label className="text-gray-300 text-sm font-medium">Event Type</label>
              </div>
              <select
                className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="Technical Event">Technical Event</option>
                <option value="Non-Technical Event">Non-Technical Event</option>
                <option value="Paper Presentation">Paper Presentation</option>
                <option value="Project Presentation">Project Presentation</option>
                <option value="Workshop">Workshop</option>
                <option value="Hackathon">Hackathon</option>
                <option value="Culturals">Culturals</option>
                <option value="Sports">Sports</option>
              </select>
            </div>

            <div className="flex items-end">
              <div className="text-gray-400 text-sm">
                Showing <span className="text-purple-400 font-bold">{filteredEvents.length}</span> of{" "}
                <span className="text-white">{eventData.length}</span> events
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto">
        {Object.entries(groupedData).length > 0 ? (
          Object.entries(groupedData).map(([type, events]) => (
            <div key={type} className="mb-16" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center mb-8">
                <div className="h-0.5 bg-gradient-to-r from-transparent to-purple-500 flex-grow mr-4"></div>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 whitespace-nowrap">
                  {type}
                </h2>
                <div className="h-0.5 bg-gradient-to-r from-purple-500 to-transparent flex-grow ml-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {events.map((event) => (
                  <div 
                    key={event.id} 
                    className="group relative bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:-translate-y-2"
                    data-aos="zoom-in"
                  >
                    <Link to={`/event/${event.id}`}>
                      {/* Event Image */}
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={event.img}
                          alt={event.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Event Type Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-purple-600/90 text-xs font-semibold text-white rounded-full">
                            {event.type}
                          </span>
                        </div>
                      </div>

                      {/* Event Content */}
                      <div className="p-5">
                        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors">
                          {event.name}
                        </h3>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center text-gray-300">
                            <Users size={16} className="mr-2 text-purple-400" />
                            <span className="text-sm">Hosted by {event.hosted}</span>
                          </div>
                          
                          <div className="flex items-center text-gray-300">
                            <Calendar size={16} className="mr-2 text-purple-400" />
                            <span className="text-sm font-medium">{event.day}</span>
                          </div>

                          {event.time && (
                            <div className="flex items-center text-gray-300">
                              <Clock size={16} className="mr-2 text-purple-400" />
                              <span className="text-sm">{event.time}</span>
                            </div>
                          )}

                          {event.location && (
                            <div className="flex items-center text-gray-300">
                              <MapPin size={16} className="mr-2 text-purple-400" />
                              <span className="text-sm">{event.location}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">{event.cluster}</span>
                          <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform group-hover:scale-105">
                            View Details
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16" data-aos="fade-up">
            <div className="text-purple-400 mb-4">
              <Search size={64} className="mx-auto opacity-50" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No events found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your filters or search term</p>
            <button 
              onClick={clearFilters}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}