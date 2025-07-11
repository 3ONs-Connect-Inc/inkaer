
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Crown, Star, Trophy, TrendingUp } from 'lucide-react';

const Rank = () => {
  const rankLevels = [
    { name: "Novice", points: "0-100", color: "text-gray-600", bgColor: "bg-gray-100" },
    { name: "Beginner", points: "101-500", color: "text-brown-600", bgColor: "bg-brown-100" },
    { name: "Intermediate", points: "501-1500", color: "text-green-600", bgColor: "bg-green-100" },
    { name: "Advanced", points: "1501-3000", color: "text-blue-600", bgColor: "bg-blue-100" },
    { name: "Expert", points: "3001-5000", color: "text-purple-600", bgColor: "bg-purple-100" },
    { name: "Elite", points: "5000+", color: "text-orange-600", bgColor: "bg-orange-100" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <Navbar />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900 mb-6">
              Ranking System
            </h1>
            <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
              Advance through our ranking system by submitting quality projects and receiving positive peer reviews
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {rankLevels.map((rank, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${rank.bgColor} mb-4`}>
                    <Crown className={`w-8 h-8 ${rank.color}`} />
                  </div>
                  <h3 className="text-xl font-sora font-bold text-gray-900 mb-2">
                    {rank.name}
                  </h3>
                  <p className="text-gray-600 font-sora mb-4">
                    {rank.points} points
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-sora font-bold text-gray-900 mb-6 text-center">
              How to Earn Points
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-sora font-semibold text-gray-900 mb-2">Submit Projects</h3>
                <p className="text-gray-600 font-sora text-sm">Earn 50-200 points per project based on quality</p>
              </div>
              <div className="text-center">
                <Trophy className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="font-sora font-semibold text-gray-900 mb-2">Peer Reviews</h3>
                <p className="text-gray-600 font-sora text-sm">Get 10-50 points for each positive review</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="font-sora font-semibold text-gray-900 mb-2">Community Engagement</h3>
                <p className="text-gray-600 font-sora text-sm">Earn bonus points for helping other engineers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rank;
