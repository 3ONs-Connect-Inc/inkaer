
import React from 'react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Crown, Star, Trophy, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UserRankDashboard = () => {
  // Mock user data - in real app this would come from state/context
  const currentRank = "Advanced";
  const currentPoints = 2450;
  const nextRank = "Expert";
  const pointsToNext = 550; // 3000 - 2450

  const rankLevels = [
    { name: "Novice", points: "Newly Joined", color: "text-gray-600", bgColor: "bg-gray-100", minPoints: 0, maxPoints: 0 },
    { name: "Beginner", points: "1-500", color: "text-brown-600", bgColor: "bg-brown-100", minPoints: 1, maxPoints: 500 },
    { name: "Intermediate", points: "501-1500", color: "text-green-600", bgColor: "bg-green-100", minPoints: 501, maxPoints: 1500 },
    { name: "Advanced", points: "1501-3000", color: "text-blue-600", bgColor: "bg-blue-100", minPoints: 1501, maxPoints: 3000 },
    { name: "Expert", points: "3001-5000", color: "text-purple-600", bgColor: "bg-purple-100", minPoints: 3001, maxPoints: 5000 },
    { name: "Elite", points: "5000+", color: "text-orange-600", bgColor: "bg-orange-100", minPoints: 5000, maxPoints: Infinity }
  ];

  const currentRankIndex = rankLevels.findIndex(rank => rank.name === currentRank);
  const currentRankInfo = rankLevels[currentRankIndex];
  const progressPercent = currentRankInfo.maxPoints === 0 ? 100 : ((currentPoints - currentRankInfo.minPoints) / (currentRankInfo.maxPoints - currentRankInfo.minPoints)) * 100;

  const availableCertifications = [
    {
      title: "Mechanical Engineering",
      description: "Verify your mechanical engineering expertise",
      requirements: "Advanced rank required",
      available: currentRankIndex >= 3
    },
    {
      title: "Software Engineering", 
      description: "Demonstrate your software development skills",
      requirements: "Advanced rank required",
      available: currentRankIndex >= 3
    },
    {
      title: "Civil Engineering",
      description: "Showcase your civil engineering knowledge",
      requirements: "Expert rank required", 
      available: currentRankIndex >= 4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <LoggedInNavbar />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900 mb-6">
              Your Progress
            </h1>
            <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
              Track your ranking progress and unlock new certifications
            </p>
          </div>

          {/* Current Rank Status */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${currentRankInfo.bgColor} mb-4`}>
                <Crown className={`w-10 h-10 ${currentRankInfo.color}`} />
              </div>
              <h2 className="text-3xl font-sora font-bold text-gray-900 mb-2">
                {currentRank}
              </h2>
              <p className="text-lg text-gray-600 font-sora mb-4">
                {currentPoints.toLocaleString()} points
              </p>
              
              {/* Progress Bar */}
              <div className="max-w-md mx-auto">
                <div className="flex justify-between text-sm text-gray-600 font-sora mb-2">
                  <span>{currentRankInfo.minPoints}</span>
                  <span>{pointsToNext} points to {nextRank}</span>
                  <span>{currentRankInfo.maxPoints === Infinity ? '∞' : currentRankInfo.maxPoints}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(progressPercent, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Rank Roadmap */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-sora font-bold text-gray-900 mb-6 text-center">
              Roadmap to Elite
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {rankLevels.map((rank, index) => (
                <div 
                  key={index} 
                  className={`text-center p-4 rounded-xl border-2 transition-all duration-200 ${
                    index <= currentRankIndex 
                      ? 'border-green-300 bg-green-50' 
                      : index === currentRankIndex + 1
                      ? 'border-blue-300 bg-blue-50'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${rank.bgColor} mb-3`}>
                    {index <= currentRankIndex ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : index === currentRankIndex + 1 ? (
                      <Target className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Crown className={`w-6 h-6 ${rank.color}`} />
                    )}
                  </div>
                  <h3 className="font-sora font-semibold text-sm text-gray-900 mb-1">
                    {rank.name}
                  </h3>
                  <p className="text-xs text-gray-600 font-sora">
                    {rank.points} {rank.name !== "Novice" ? "pts" : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Available Certifications */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-sora font-bold text-gray-900 mb-6 text-center">
              Available Certifications
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {availableCertifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={`border-2 rounded-xl p-6 transition-all duration-200 ${
                    cert.available 
                      ? 'border-green-300 bg-green-50 hover:shadow-md' 
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}
                >
                  <div className="text-center mb-4">
                    <Trophy className={`w-12 h-12 mx-auto mb-3 ${cert.available ? 'text-green-600' : 'text-gray-400'}`} />
                    <h3 className="font-sora font-semibold text-gray-900 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-sora mb-3">
                      {cert.description}
                    </p>
                    <p className={`text-xs font-sora ${cert.available ? 'text-green-600' : 'text-gray-500'}`}>
                      {cert.requirements}
                    </p>
                  </div>
                  <Button 
                    className={`w-full font-sora font-semibold ${
                      cert.available 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!cert.available}
                  >
                    {cert.available ? 'Start Certification' : 'Not Available'}
                    {cert.available && <ArrowRight className="w-4 h-4 ml-2" />}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UserRankDashboard;
