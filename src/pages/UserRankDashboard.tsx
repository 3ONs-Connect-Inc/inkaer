
import React, { useState } from 'react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Award, Star, CheckCircle, Lock, Users, Target, Calendar, BookOpen, Zap } from 'lucide-react';

const UserRankDashboard = () => {
  const [selectedDomain, setSelectedDomain] = useState('mechanical');
  
  // Mock current user data
  const currentUser = {
    name: "Alex Johnson",
    currentRank: "Advanced", // Current rank: Novice, Beginner, Intermediate, Advanced, Expert, Elite
    currentPoints: 1750,
    domain: "mechanical"
  };

  // Rank system with points requirements
  const ranks = [
    { name: "Novice", points: "Newly Joined", color: "bg-gray-500", textColor: "text-gray-500", acronym: "ME-Nov" },
    { name: "Beginner", points: "1 - 500", color: "bg-green-500", textColor: "text-green-500", acronym: "ME1" },
    { name: "Intermediate", points: "501 - 1000", color: "bg-blue-500", textColor: "text-blue-500", acronym: "ME2" },
    { name: "Advanced", points: "1001 - 2000", color: "bg-purple-500", textColor: "text-purple-500", acronym: "ME3" },
    { name: "Expert", points: "2001 - 3500", color: "bg-orange-500", textColor: "text-orange-500", acronym: "ME4" },
    { name: "Elite", points: "3500+", color: "bg-red-500", textColor: "text-red-500", acronym: "ME-Elite" }
  ];

  // Certification requirements and availability
  const getCertificationData = () => {
    const currentRankIndex = ranks.findIndex(rank => rank.name === currentUser.currentRank);
    
    return ranks.slice(1).map((rank, index) => { // Start from Beginner (index 1)
      const actualIndex = index + 1; // Adjust for slicing
      const isAvailable = actualIndex <= currentRankIndex;
      const isCompleted = actualIndex < currentRankIndex;
      
      return {
        ...rank,
        isAvailable,
        isCompleted,
        requirements: getCertificationRequirements(rank.name)
      };
    });
  };

  const getCertificationRequirements = (rankName: string) => {
    const requirements = {
      "Beginner": [
        "Complete 3 peer reviews",
        "Submit 1 portfolio project", 
        "Achieve Beginner rank (1+ points)",
        "Pass basic mechanical engineering assessment"
      ],
      "Intermediate": [
        "Complete 8 peer reviews",
        "Submit 3 portfolio projects",
        "Achieve Intermediate rank (501+ points)",
        "Pass intermediate mechanical engineering assessment",
        "Receive 5+ positive peer feedback ratings"
      ],
      "Advanced": [
        "Complete 15 peer reviews", 
        "Submit 5 portfolio projects",
        "Achieve Advanced rank (1001+ points)",
        "Pass advanced mechanical engineering assessment",
        "Lead 2 community discussions",
        "Mentor 3 junior engineers"
      ],
      "Expert": [
        "Complete 25 peer reviews",
        "Submit 8 portfolio projects", 
        "Achieve Expert rank (2001+ points)",
        "Pass expert-level mechanical engineering assessment",
        "Publish 2 technical articles",
        "Lead 5 community discussions",
        "Successfully mentor 8 engineers"
      ],
      "Elite": [
        "Complete 50+ peer reviews",
        "Submit 15+ portfolio projects",
        "Achieve Elite rank (3500+ points)", 
        "Pass elite-level mechanical engineering assessment",
        "Publish 5+ technical articles",
        "Lead 10+ community discussions",
        "Successfully mentor 15+ engineers",
        "Contribute to platform development"
      ]
    };
    
    return requirements[rankName] || [];
  };

  const getDomainName = (domain: string) => {
    const domains = {
      mechanical: "Mechanical Engineering",
      software: "Software Engineering", 
      civil: "Civil Engineering",
      electrical: "Electrical Engineering"
    };
    return domains[domain] || "Mechanical Engineering";
  };

  const getCurrentProgress = () => {
    const currentRankData = ranks.find(rank => rank.name === currentUser.currentRank);
    const currentIndex = ranks.findIndex(rank => rank.name === currentUser.currentRank);
    
    if (currentIndex === ranks.length - 1) return 100; // Elite rank
    
    const nextRank = ranks[currentIndex + 1];
    if (currentUser.currentRank === "Novice") return 0;
    
    // Calculate progress within current rank
    const rankRanges = {
      "Beginner": { min: 1, max: 500 },
      "Intermediate": { min: 501, max: 1000 },
      "Advanced": { min: 1001, max: 2000 },
      "Expert": { min: 2001, max: 3500 }
    };
    
    const range = rankRanges[currentUser.currentRank];
    if (!range) return 0;
    
    return ((currentUser.currentPoints - range.min) / (range.max - range.min)) * 100;
  };

  const certificationData = getCertificationData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <LoggedInNavbar />
      
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900 mb-4">
              Your Progress
            </h1>
            <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
              Track your engineering journey and unlock new certifications
            </p>
          </div>

          {/* Domain Selection */}
          <div className="mb-8 flex justify-center">
            <div className="w-80">
              <label className="block text-sm font-sora font-medium text-gray-700 mb-2">
                Engineering Domain
              </label>
              <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                <SelectTrigger className="w-full bg-white border-gray-200 font-sora">
                  <SelectValue placeholder="Select Domain" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200 z-50">
                  <SelectItem value="mechanical" className="font-sora">Mechanical Engineering</SelectItem>
                  <SelectItem value="software" className="font-sora">Software Engineering</SelectItem>
                  <SelectItem value="civil" className="font-sora">Civil Engineering</SelectItem>
                  <SelectItem value="electrical" className="font-sora">Electrical Engineering</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Current Status Card */}
          <Card className="mb-8 bg-white/80 backdrop-blur-sm shadow-lg border-gray-200">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-sora font-bold text-gray-900 mb-2">Welcome back, {currentUser.name}!</h2>
                <p className="text-gray-600 font-sora">Here's your current progress in {getDomainName(selectedDomain)}</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Trophy className="w-8 h-8 text-purple-500 mr-2" />
                    <span className="text-2xl font-bold text-gray-900">{currentUser.currentRank}</span>
                  </div>
                  <p className="text-gray-600 font-sora">Current Rank</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Star className="w-8 h-8 text-yellow-500 mr-2" />
                    <span className="text-2xl font-bold text-gray-900">{currentUser.currentPoints}</span>
                  </div>
                  <p className="text-gray-600 font-sora">Total Points</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Target className="w-8 h-8 text-blue-500 mr-2" />
                    <span className="text-2xl font-bold text-gray-900">{Math.round(getCurrentProgress())}%</span>
                  </div>
                  <p className="text-gray-600 font-sora">Rank Progress</p>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-sora text-gray-600">Progress to next rank</span>
                  <span className="text-sm font-sora text-gray-900 font-semibold">{Math.round(getCurrentProgress())}%</span>
                </div>
                <Progress value={getCurrentProgress()} className="h-3" />
              </div>
            </CardContent>
          </Card>

          {/* Rank System */}
          <div className="mb-12">
            <h2 className="text-3xl font-sora font-bold text-center text-gray-900 mb-8">
              Rank System - {getDomainName(selectedDomain)}
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {ranks.map((rank, index) => {
                const isCurrentRank = rank.name === currentUser.currentRank;
                const isCompleted = ranks.findIndex(r => r.name === currentUser.currentRank) > index;
                
                return (
                  <Card 
                    key={rank.name}
                    className={`text-center transition-all duration-300 ${
                      isCurrentRank 
                        ? 'ring-2 ring-blue-500 bg-blue-50/50 shadow-lg scale-105' 
                        : isCompleted 
                          ? 'bg-green-50/50 border-green-200' 
                          : 'bg-white/80 hover:shadow-md'
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className={`w-12 h-12 rounded-full ${rank.color} flex items-center justify-center mx-auto mb-3`}>
                        {isCompleted ? (
                          <CheckCircle className="w-6 h-6 text-white" />
                        ) : (
                          <Trophy className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <h3 className="font-sora font-bold text-gray-900 mb-1">{rank.name}</h3>
                      <p className="text-xs text-gray-600 font-sora mb-2">{rank.acronym}</p>
                      <p className="text-sm text-gray-600 font-sora">{rank.points}</p>
                      {isCurrentRank && (
                        <Badge className="mt-2 bg-blue-500 hover:bg-blue-600">Current</Badge>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Available Certifications */}
          <div>
            <h2 className="text-3xl font-sora font-bold text-center text-gray-900 mb-8">
              Available Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificationData.map((cert, index) => (
                <Card 
                  key={cert.name}
                  className={`transition-all duration-300 ${
                    cert.isAvailable 
                      ? 'bg-white/80 shadow-lg hover:shadow-xl border-gray-200' 
                      : 'bg-gray-50/50 opacity-60 border-gray-100'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {cert.isCompleted ? (
                          <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                        ) : cert.isAvailable ? (
                          <Award className="w-8 h-8 text-blue-500 mr-3" />
                        ) : (
                          <Lock className="w-8 h-8 text-gray-400 mr-3" />
                        )}
                        <div>
                          <h3 className="font-sora font-bold text-gray-900">
                            {getDomainName(selectedDomain)} ({cert.name})
                          </h3>
                          <p className="text-sm text-gray-600 font-sora">{cert.acronym}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-sora font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {cert.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-gray-600 font-sora">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {cert.isCompleted && (
                      <Badge className="w-full justify-center bg-green-500 hover:bg-green-600 mb-3">
                        Completed
                      </Badge>
                    )}
                    
                    {cert.isAvailable && !cert.isCompleted && (
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-sora font-semibold">
                        Start Certification
                      </Button>
                    )}
                    
                    {!cert.isAvailable && (
                      <div className="text-center">
                        <p className="text-sm text-gray-500 font-sora mb-2">
                          Complete {cert.name} rank to unlock
                        </p>
                        <Button disabled className="w-full bg-gray-300 text-gray-500 font-sora font-semibold cursor-not-allowed">
                          Locked
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
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
