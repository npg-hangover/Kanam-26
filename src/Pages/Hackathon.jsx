import React, { useState } from 'react';
import { 
  Clock, 
  Award, 
  Users, 
  Calendar, 
  MapPin, 
  Code, 
  Trophy,
  ChevronDown,
  ChevronUp,
  Star,
  Zap
} from 'lucide-react';

const HackathonPage = () => {
  const [activeDay, setActiveDay] = useState('day1');
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const timelineDay1 = [
    {
      time: '08:00 AM',
      title: 'Registration & Breakfast',
      description: 'Check-in, team registration, and networking breakfast'
    },
    {
      time: '09:30 AM',
      title: 'Opening Ceremony',
      description: 'Welcome speech, rules overview, and theme announcement'
    },
    {
      time: '10:30 AM',
      title: 'Hacking Begins!',
      description: 'Official start of the 24-hour coding marathon'
    },
    {
      time: '01:00 PM',
      title: 'Lunch Break',
      description: 'Networking lunch with mentors and participants'
    },
    {
      time: '02:30 PM',
      title: 'Tech Workshop #1',
      description: 'Advanced API integration techniques'
    },
    {
      time: '06:00 PM',
      title: 'Evening Snacks',
      description: 'Energy boost with snacks and beverages'
    },
    {
      time: '08:00 PM',
      title: 'Tech Workshop #2',
      description: 'UI/UX design principles for developers'
    },
    {
      time: '10:30 PM',
      title: 'Midnight Pizza',
      description: 'Traditional hackathon pizza party'
    }
  ];

  const timelineDay2 = [
    {
      time: '01:00 AM',
      title: 'Night Owl Session',
      description: 'Quiet coding with energy drinks and coffee'
    },
    {
      time: '06:00 AM',
      title: 'Sunrise Yoga',
      description: 'Optional yoga session to refresh and refocus'
    },
    {
      time: '08:00 AM',
      title: 'Breakfast & Code Review',
      description: 'Final touches and breakfast'
    },
    {
      time: '10:30 AM',
      title: 'Hacking Ends!',
      description: 'All submissions must be completed'
    },
    {
      time: '11:00 AM',
      title: 'Project Submission',
      description: 'Finalize and submit your projects'
    },
    {
      time: '12:00 PM',
      title: 'Lunch & Demo Preparation',
      description: 'Networking lunch and presentation practice'
    },
    {
      time: '01:30 PM',
      title: 'Project Demonstrations',
      description: 'Teams present their projects to judges'
    },
    {
      time: '04:00 PM',
      title: 'Closing Ceremony & Awards',
      description: 'Winner announcements and prize distribution'
    }
  ];

  const prizePool = [
    {
      place: '1st',
      amount: '₹1,00,000',
      title: 'Grand Champion',
      color: 'from-yellow-400 to-amber-400',
      description: 'Cash prize + Tech goodies + Internship opportunities'
    },
    {
      place: '2nd',
      amount: '₹50,000',
      title: 'Runner Up',
      color: 'from-gray-400 to-gray-300',
      description: 'Cash prize + Tech gadgets + Mentorship sessions'
    },
    {
      place: '3rd',
      amount: '₹25,000',
      title: 'Second Runner Up',
      color: 'from-amber-700 to-amber-600',
      description: 'Cash prize + Developer tools subscription'
    },
    {
      place: 'Special',
      amount: '₹15,000',
      title: 'Best UI/UX Design',
      color: 'from-purple-400 to-pink-400',
      description: 'Special category award for outstanding design'
    },
    {
      place: 'Special',
      amount: '₹15,000',
      title: 'Most Innovative Idea',
      color: 'from-green-400 to-teal-400',
      description: 'Award for the most creative solution'
    },
    {
      place: 'Special',
      amount: '₹10,000',
      title: 'Best Beginner Team',
      color: 'from-blue-400 to-cyan-400',
      description: 'Award for exceptional first-time hackers'
    }
  ];

  const faqs = [
    {
      question: "Who can participate in the hackathon?",
      answer: "The hackathon is open to all students from any college or university. Both beginners and experienced developers are welcome. Teams can have 2-4 members."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Please bring your student ID, laptop, chargers, and any other devices you might need. We'll provide food, drinks, and plenty of snacks!"
    },
    {
      question: "Do I need to have a team before registering?",
      answer: "Not at all! You can register as an individual or as a team. We'll have team formation sessions at the beginning of the event to help individuals find teammates."
    },
    {
      question: "What are the judging criteria?",
      answer: "Projects will be judged based on innovation (30%), technical complexity (30%), design/UX (20%), and practicality (20%)."
    },
    {
      question: "Will there be mentors available?",
      answer: "Yes, we'll have industry professionals and experienced developers available throughout the event to provide guidance and support."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 pb-16 px-4">
      {/* Background Elements */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-purple-900/30 rounded-full mb-6">
            <Code size={36} className="text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Hack 24</span> Hours
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Join us for 24 hours of coding, innovation, and creativity. Build something amazing and compete for prizes worth over ₹2,00,000!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center text-purple-400">
              <Calendar size={20} className="mr-2" />
              <span>February 5-6, 2026</span>
            </div>
            <div className="flex items-center text-blue-400">
              <Clock size={20} className="mr-2" />
              <span>24-Hour Marathon</span>
            </div>
            <div className="flex items-center text-green-400">
              <MapPin size={20} className="mr-2" />
              <span>NGP Innovation Center</span>
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-purple-400 mb-2">24</div>
            <div className="text-gray-300">Hours of Coding</div>
          </div>
          <div className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">₹2L+</div>
            <div className="text-gray-300">Prize Pool</div>
          </div>
          <div className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-green-400 mb-2">300+</div>
            <div className="text-gray-300">Participants</div>
          </div>
          <div className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-amber-400 mb-2">50+</div>
            <div className="text-gray-300">Projects</div>
          </div>
        </div>

        {/* Prize Pool Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-2">Prize Pool</h2>
          <p className="text-gray-400 text-center mb-8">Compete for amazing prizes and recognition</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {prizePool.map((prize, index) => (
              <div 
                key={index} 
                className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${prize.color} flex items-center justify-center mb-4 mx-auto`}>
                  <Trophy size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-2">{prize.place} Place</h3>
                <div className="text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  {prize.amount}
                </div>
                <p className="text-lg text-gray-300 text-center mb-2">{prize.title}</p>
                <p className="text-sm text-gray-400 text-center">{prize.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-2">Event Timeline</h2>
          <p className="text-gray-400 text-center mb-8">24 hours of coding, learning, and innovation</p>
          
          {/* Day Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-xl p-1 border border-gray-700">
              <button
                onClick={() => setActiveDay('day1')}
                className={`px-6 py-2 rounded-lg transition-all ${
                  activeDay === 'day1'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Day 1 (Feb 5)
              </button>
              <button
                onClick={() => setActiveDay('day2')}
                className={`px-6 py-2 rounded-lg transition-all ${
                  activeDay === 'day2'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Day 2 (Feb 6)
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 transform -translate-x-1/2"></div>
            
            <div className="space-y-8">
              {(activeDay === 'day1' ? timelineDay1 : timelineDay2).map((item, index) => (
                <div key={index} className="relative pl-10 md:pl-0">
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-1/2 top-4 w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-900 transform -translate-x-1/2"></div>
                  
                  <div className="md:flex md:items-center md:justify-between md:odd:flex-row-reverse">
                    <div className="md:w-5/12 mb-4 md:mb-0">
                      <div className="text-lg font-bold text-purple-400">{item.time}</div>
                    </div>
                    
                    <div className="md:w-5/12 bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-center mb-8">Everything you need to know about Hack 24</p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl border border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {activeFaq === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default HackathonPage;