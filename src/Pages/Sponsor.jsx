import React, { useState } from 'react';
import { 
  Star, 
  Award, 
  Users, 
  Megaphone, 
  BarChart3, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  HeartHandshake,
  Crown,
  Gem,
  Shield,
  Zap
} from 'lucide-react';

const SponsorshipPage = () => {
  const [activeTier, setActiveTier] = useState('platinum');

  const sponsorshipTiers = [
    {
      id: 'platinum',
      name: 'Platinum Partner',
      price: '₹1,00,000+',
      color: 'from-blue-400 to-cyan-400',
      icon: <Crown size={24} className="text-white" />,
      benefits: [
        'Prime logo placement on all materials',
        'Keynote speaking opportunity',
        'Full-page ad in event booklet',
        '20 complimentary passes',
        'Dedicated social media campaign',
        'Exclusive lounge access',
        'Branding in main event area'
      ]
    },
    {
      id: 'gold',
      name: 'Gold Sponsor',
      price: '₹50,000 - ₹99,999',
      color: 'from-amber-400 to-yellow-400',
      icon: <Gem size={24} className="text-white" />,
      benefits: [
        'Large logo placement on promotional materials',
        '10 complimentary passes',
        'Half-page ad in event booklet',
        'Social media features',
        'Exhibition booth space',
        'Recognition during opening ceremony'
      ]
    },
    {
      id: 'silver',
      name: 'Silver Sponsor',
      price: '₹25,000 - ₹49,999',
      color: 'from-gray-400 to-gray-300',
      icon: <Shield size={24} className="text-white" />,
      benefits: [
        'Medium logo placement',
        '5 complimentary passes',
        'Quarter-page ad',
        'Social media mentions',
        'Exhibition space',
        'Recognition in event materials'
      ]
    },
    {
      id: 'bronze',
      name: 'Bronze Sponsor',
      price: '₹10,000 - ₹24,999',
      color: 'from-amber-700 to-amber-600',
      icon: <Zap size={24} className="text-white" />,
      benefits: [
        'Logo on event website',
        '2 complimentary passes',
        'Listing in event booklet',
        'Social media thank you',
        'Recognition at event'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Megaphone size={32} />,
      title: 'Brand Visibility',
      description: 'Reach 5,000+ students and professionals across multiple platforms'
    },
    {
      icon: <Users size={32} />,
      title: 'Networking Opportunities',
      description: 'Connect with talented students, faculty, and industry leaders'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Recruitment Access',
      description: 'First access to top talent for internships and placements'
    },
    {
      icon: <Award size={32} />,
      title: 'Industry Recognition',
      description: 'Position your company as a supporter of education and innovation'
    }
  ];

  const sponsorsByTier = {
    platinum: [
      { name: 'TechCorp', logo: 'T', description: 'Leading technology solutions provider' },
      { name: 'InnovateX', logo: 'I', description: 'Driving innovation in software development' }
    ],
    gold: [
      { name: 'FutureTech', logo: 'F', description: 'Building the future of technology' },
      { name: 'DataSphere', logo: 'D', description: 'Big data analytics experts' },
      { name: 'CloudNova', logo: 'C', description: 'Cloud computing specialists' }
    ],
    silver: [
      { name: 'CampusSolutions', logo: 'C', description: 'Educational technology leaders' },
      { name: 'EduTech', logo: 'E', description: 'Transforming education through technology' },
      { name: 'CodeCraft', logo: 'C', description: 'Software development company' },
      { name: 'WebWizards', logo: 'W', description: 'Web development experts' }
    ],
    bronze: [
      { name: 'StartUpIndia', logo: 'S', description: 'Supporting Indian startups' },
      { name: 'TechGurus', logo: 'T', description: 'Technology consulting firm' },
      { name: 'DevHub', logo: 'D', description: 'Developer community platform' },
      { name: 'AppWorks', logo: 'A', description: 'Mobile app development studio' },
      { name: 'DesignStudio', logo: 'D', description: 'UI/UX design specialists' }
    ]
  };

  const tierColors = {
    platinum: 'bg-gradient-to-r from-blue-400 to-cyan-400',
    gold: 'bg-gradient-to-r from-amber-400 to-yellow-400',
    silver: 'bg-gradient-to-r from-gray-400 to-gray-300',
    bronze: 'bg-gradient-to-r from-amber-700 to-amber-600'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 pb-16 px-4">
      {/* Background Elements */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center p-2 bg-purple-900/30 rounded-full mb-6">
            <HeartHandshake size={32} className="text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Sponsors</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We extend our heartfelt gratitude to these organizations for their generous support in making this event possible
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" data-aos="fade-up">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="text-purple-400 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Sponsors by Tier */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Valued Sponsors</h2>
          
          {Object.entries(sponsorsByTier).map(([tier, sponsors]) => (
            sponsors.length > 0 && (
              <div key={tier} className="mb-16" data-aos="fade-up">
                <div className="flex items-center justify-center mb-8">
                  <div className={`w-16 h-16 rounded-full ${tierColors[tier]} flex items-center justify-center mr-4`}>
                    {sponsorshipTiers.find(t => t.id === tier)?.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {sponsorshipTiers.find(t => t.id === tier)?.name}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sponsors.map((sponsor, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-full ${tierColors[tier]} flex items-center justify-center text-white text-xl font-bold mr-4`}>
                          {sponsor.logo}
                        </div>
                        <h4 className="text-xl font-bold text-white">{sponsor.name}</h4>
                      </div>
                      <p className="text-gray-300">{sponsor.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        {/* Sponsorship Tiers Info */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white text-center mb-2">Sponsorship Packages</h2>
          <p className="text-gray-400 text-center mb-8">Opportunities for organizations to support our event</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {sponsorshipTiers.map(tier => (
              <div 
                key={tier.id}
                className={`bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                  activeTier === tier.id 
                    ? 'border-purple-500 scale-105' 
                    : 'border-gray-700 hover:border-gray-500'
                }`}
                onClick={() => setActiveTier(tier.id)}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center mb-4`}>
                  {tier.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                  {tier.price}
                </p>
              </div>
            ))}
          </div>

          {/* Tier Benefits */}
          <div className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              {sponsorshipTiers.find(t => t.id === activeTier)?.name} Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sponsorshipTiers.find(t => t.id === activeTier)?.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white mb-6">Interested in Sponsoring?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our esteemed list of sponsors and support this incredible event. Contact our sponsorship team to learn more about opportunities.
          </p>
          
          <div className="bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-center text-gray-300">
                <Mail size={20} className="text-purple-400 mr-3" />
                <span>sponsors@kanam2026.com</span>
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <Phone size={20} className="text-purple-400 mr-3" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <MapPin size={20} className="text-purple-400 mr-3" />
                <span>NGP Campus, Coimbatore, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipPage;