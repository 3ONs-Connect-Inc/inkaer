
import React from 'react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Crown, Star, Trophy, TrendingUp, Award, CheckCircle, Target, Users, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const UserRankDashboard = () => {
  // Mock user data
  const currentUser = {
    rank: "Advanced",
    points: 2450,
    nextRank: "Expert",
    pointsToNext: 550,
    totalPointsForNext: 3000
  };

  const rankLevels = [
    { name: "Novice", points: "Newly Joined", color: "text-gray-600", bgColor: "bg-gray-100", minPoints: 0, maxPoints: 0 },
    { name: "Beginner", points: "1-500", color: "text-brown-600", bgColor: "bg-brown-100", minPoints: 1, maxPoints: 500 },
    { name: "Intermediate", points: "501-1500", color: "text-green-600", bgColor: "bg-green-100", minPoints: 501, maxPoints: 1500 },
    { name: "Advanced", points: "1501-3000", color: "text-blue-600", bgColor: "bg-blue-100", minPoints: 1501, maxPoints: 3000 },
    { name: "Expert", points: "3001-5000", color: "text-purple-600", bgColor: "bg-purple-100", minPoints: 3001, maxPoints: 5000 },
    { name: "Elite", points: "5000+", color: "text-orange-600", bgColor: "bg-orange-100", minPoints: 5001, maxPoints: 99999 }
  ];

  const currentRankIndex = rankLevels.findIndex(rank => rank.name === currentUser.rank);
  const progressPercentage = ((currentUser.points - rankLevels[currentRankIndex].minPoints) / (rankLevels[currentRankIndex].maxPoints - rankLevels[currentRankIndex].minPoints)) * 100;

  const availableCertifications = [
    {
      title: "Mechanical Engineering Certification",
      description: "Validate your expertise in mechanical design, analysis, and manufacturing processes",
      requirements: ["3+ portfolio projects", "Advanced rank or higher", "Peer reviews"],
      icon: <Award className="w-6 h-6" />,
      eligible: currentUser.rank === "Advanced" || currentUser.rank === "Expert" || currentUser.rank === "Elite",
      color: "bg-blue-600"
    },
    {
      title: "Software Engineering Certification",
      description: "Demonstrate proficiency in software development, architecture, and best practices",
      requirements: ["5+ coding projects", "Expert rank required", "Technical assessment"],
      icon: <Award className="w-6 h-6" />,
      eligible: currentUser.rank === "Expert" || currentUser.rank === "Elite",
      color: "bg-green-600"
    },
    {
      title: "Elite Engineer Certification",
      description: "Ultimate certification for top-tier engineering professionals",
      requirements: ["Elite rank", "10+ projects", "Community leadership"],
      icon: <Crown className="w-6 h-6" />,
      eligible: currentUser.rank === "Elite",
      color: "bg-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,170,254,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,120,200,0.08)_0%,transparent_50%)]"></div>

      <div className="relative z-10">
        <LoggedInNavbar />
        
        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900 mb-4">
                Your Progress
              </h1>
              <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
                Track your engineering journey and unlock new opportunities
              </p>
            </div>

            {/* Current Status */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Current Rank Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
                    <Crown className="w-10 h-10 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-sora font-bold text-gray-900 mb-2">
                    Current Rank: {currentUser.rank}
                  </h2>
                  <div className="flex items-center justify-center gap-2 text-lg font-sora font-semibold text-gray-700">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    {currentUser.points.toLocaleString()} Points
                  </div>
                </div>

                {/* Progress to Next Rank */}
                {currentUser.rank !== "Elite" && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-sora font-medium text-gray-600">
                        Progress to {currentUser.nextRank}
                      </span>
                      <span className="text-sm font-sora font-semibold text-gray-900">
                        {currentUser.pointsToNext} points to go
                      </span>
                    </div>
                    <Progress value={progressPercentage} className="h-3" />
                    <div className="text-center text-sm text-gray-500 font-sora">
                      {currentUser.points} / {currentUser.totalPointsForNext} points
                    </div>
                  </div>
                )}
              </div>

              {/* Rank Roadmap */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-sora font-bold text-gray-900 mb-6 text-center">
                  Rank Roadmap to Elite
                </h3>
                <div className="space-y-4">
                  {rankLevels.map((rank, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-200 ${
                        rank.name === currentUser.rank
                          ? 'bg-blue-50 border-2 border-blue-200'
                          : currentRankIndex > index
                          ? 'bg-green-50 border border-green-200'
                          : 'bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        rank.name === currentUser.rank
                          ? 'bg-blue-600 text-white'
                          : currentRankIndex > index
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {currentRankIndex > index ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : rank.name === currentUser.rank ? (
                          <Crown className="w-5 h-5" />
                        ) : (
                          <Target className="w-5 h-5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-sora font-semibold text-gray-900">
                          {rank.name}
                        </h4>
                        <p className="text-sm text-gray-600 font-sora">
                          {rank.points} {rank.points !== "Newly Joined" ? "points" : ""}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Available Certifications */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">
                  Available Certifications
                </h2>
                <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-sora font-medium text-blue-800">
                    Share your certifications on LinkedIn
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableCertifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`relative rounded-2xl p-6 border-2 transition-all duration-300 ${
                      cert.eligible
                        ? 'border-green-200 bg-green-50/50 hover:shadow-lg'
                        : 'border-gray-200 bg-gray-50/50 opacity-75'
                    }`}
                  >
                    {cert.eligible && (
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-sora font-semibold">
                        Eligible
                      </div>
                    )}
                    
                    <div className="text-center mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 ${cert.color} text-white rounded-full mb-3`}>
                        {cert.icon}
                      </div>
                      <h3 className="text-lg font-sora font-bold text-gray-900 mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 font-sora text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-sora font-semibold text-gray-700">
                        Requirements:
                      </h4>
                      <ul className="space-y-1">
                        {cert.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-xs text-gray-600 font-sora flex items-center gap-2">
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className={`w-full font-sora font-semibold py-2 rounded-lg transition-all duration-200 ${
                        cert.eligible
                          ? `${cert.color} hover:opacity-90 text-white`
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!cert.eligible}
                    >
                      {cert.eligible ? 'Start Certification' : 'Not Eligible Yet'}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default UserRankDashboard;
