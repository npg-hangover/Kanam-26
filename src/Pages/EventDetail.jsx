import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import cms from "../Components/Cmc";
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Award, 
  User, 
  BookOpen,
  ChevronRight
} from 'lucide-react';

export default function EventsList() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        let { data, error } = await cms
          .from('Events')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setEvent(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Event Not Found</h1>
          <Link 
            to="/events" 
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  // Extract rules into an array
  const rules = [
    event.rules1,
    event.rules2,
    event.rules3,
    event.rules4,
    event.rules5
  ].filter(rule => rule && rule.trim() !== '');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 pb-16 px-4">
      {/* Background Elements */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link 
          to="/events" 
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Events
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Event Header */}
        <div className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-8 border border-gray-700 mb-8" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Event Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={event.img}
                alt={event.name}
                className="rounded-2xl w-full max-w-md object-cover shadow-2xl"
              />
            </div>

            {/* Event Info */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {event.name}
              </h1>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <Users size={20} className="text-purple-400 mr-3" />
                  <span className="text-lg">Hosted by {event.hosted}</span>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Calendar size={20} className="text-purple-400 mr-3" />
                  <span className="text-lg">{event.day}</span>
                </div>
                
                {event.date && (
                  <div className="flex items-center text-gray-300">
                    <Clock size={20} className="text-purple-400 mr-3" />
                    <span className="text-lg">{event.date}</span>
                  </div>
                )}
                
                {event.venue && (
                  <div className="flex items-center text-gray-300">
                    <MapPin size={20} className="text-purple-400 mr-3" />
                    <span className="text-lg">{event.venue}</span>
                  </div>
                )}
                
                <div className="flex items-center text-gray-300">
                  <Award size={20} className="text-purple-400 mr-3" />
                  <span className="text-lg capitalize">{event.type}</span>
                </div>
              </div>

              
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-6 border border-gray-700 mb-8" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'description'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <BookOpen size={20} className="inline mr-2" />
              Description
            </button>
            
            {rules.length > 0 && (
              <button
                onClick={() => setActiveTab('rules')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'rules'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <Award size={20} className="inline mr-2" />
                Rules & Guidelines
              </button>
            )}
            
            {(event.speaker || event.coordinator1 || event.coordinator2) && (
              <button
                onClick={() => setActiveTab('contacts')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'contacts'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <User size={20} className="inline mr-2" />
                Contacts
              </button>
            )}
          </div>

          {/* Tab Content */}
          <div className="p-4">
            {activeTab === 'description' && (
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4">About This Event</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {event.description}
                </p>
              </div>
            )}

            {activeTab === 'rules' && rules.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Rules & Guidelines</h3>
                <ul className="space-y-3">
                  {rules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight size={20} className="text-purple-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'contacts' && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Event Contacts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.speaker && (
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Speaker</h4>
                      <p className="text-gray-300">{event.speaker}</p>
                    </div>
                  )}
                  
                  {(event.coordinator1 || event.coordinator2) && (
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Student Coordinators</h4>
                      <ul className="text-gray-300">
                        {event.coordinator1 && <li>{event.coordinator1}</li>}
                        {event.coordinator2 && <li>{event.coordinator2}</li>}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="300">
          <div className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Event Type</h3>
            <div className="flex items-center">
              <Award size={24} className="text-purple-400 mr-3" />
              <span className="text-gray-300 text-lg capitalize">{event.type}</span>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Department Cluster</h3>
            <div className="flex items-center">
              <Users size={24} className="text-purple-400 mr-3" />
              <span className="text-gray-300 text-lg">{event.cluster || "All Departments"}</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        
      </div>
    </div>
  );
}