
import React, { useState } from 'react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Crown, Star, Trophy, Users, Target, ChevronDown, Shield, Award, Lock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const UserRankDashboard = () => {
  const [selectedDomain, setSelectedDomain] = useState('mechanical');
  
  // Mock user data
  const userRank = "Advanced";
  const userPoints = 2450;
  const nextRankPoints = 3000;
  const pointsToNext = nextRankPoints - userPoints;

  const ranks = [
    {
      name: "Novice",
      points: "Newly Joined",
      color: "bg-gray-100 text-gray-800",
      current: false,
      completed: true
    },
    {
      name: "Beginner",
      points: "1 - 500",
      color: "bg-green-100 text-green-800",
      current: false,
      completed: true
    },
    {
      name: "Intermediate",
      points: "501 - 1500",
      color: "bg-blue-100 text-blue-800",
      current: false,
      completed: true
    },
    {
      name: "Advanced",
      points: "1501 - 3000",
      color: "bg-purple-100 text-purple-800",
      current: true,
      completed: false
    },
    {
      name: "Expert",
      points: "3001 - 5000",
      color: "bg-orange-100 text-orange-800",
      current: false,
      completed: false
    },
    {
      name: "Elite",
      points: "5000+",
      color: "bg-red-100 text-red-800",
      current: false,
      completed: false
    }
  ];

  const domains = [
    { value: 'mechanical', label: 'Mechanical Engineering' },
    { value: 'civil', label: 'Civil Engineering' },
    { value: 'electrical', label: 'Electrical Engineering' },
    { value: 'chemical', label: 'Chemical Engineering' },
    { value: 'software', label: 'Software Engineering' },
    { value: 'aerospace', label: 'Aerospace Engineering' }
  ];

  const certifications = [
    {
      rank: "Beginner",
      title: "Mechanical Engineering (Beginner)",
      acronym: "ME1",
      available: true,
      earned: true,
      requirements: [
        "Complete Beginner rank (1-500 points)",
        "Submit 3 verified projects",
        "Pass peer review assessment",
        "Complete basic safety training"
      ]
    },
    {
      rank: "Intermediate", 
      title: "Mechanical Engineering (Intermediate)",
      acronym: "ME2",
      available: true,
      earned: false,
      requirements: [
        "Complete Intermediate rank (501-1500 points)",
        "Submit 5 advanced projects",
        "Mentor 2 junior engineers",
        "Pass technical interview",
        "Complete advanced CAD certification"
      ]
    },
    {
      rank: "Advanced",
      title: "Mechanical Engineering (Advanced)",
      acronym: "ME3",
      available: false,
      earned: false,
      requirements: [
        "Complete Advanced rank (1501-3000 points)",
        "Lead 2 major projects",
        "Publish technical paper",
        "Complete industry collaboration",
        "Pass expert-level assessment"
      ]
    },
    {
      rank: "Expert",
      title: "Mechanical Engineering (Expert)",
      acronym: "ME4",
      available: false,
      earned: false,
      requirements: [
        "Complete Expert rank (3001-5000 points)",
        "Lead cross-functional team",
        "Develop innovative solution",
        "Complete management training",
        "Industry recognition award"
      ]
    },
    {
      rank: "Elite",
      title: "Mechanical Engineering (Elite)",
      acronym: "ME-Elite",
      available: false,
      earned: false,
      requirements: [
        "Complete Elite rank (5000+ points)",
        "Revolutionary contribution to field",
        "International recognition",
        "Mentor 10+ engineers to Expert level",
        "Industry leadership position"
      ]
    }
  ];

  const getDomainPrefix = (domain: string) => {
    const prefixes = {
      'mechanical': 'ME',
      'civil': 'CE',
      'electrical': 'EE',
      'chemical': 'CH',
      'software': 'SE',
      'aerospace': 'AE'
    };
    return prefixes[domain as keyof typeof prefixes] || 'ME';
  };

  const getCurrentRankIndex = () => {
    return ranks.findIndex(rank => rank.current);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <LoggedInNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-sora font-bold text-gray-900 mb-4">
              Your Progress
            </h1>
            <p className="text-xl text-gray-600 font-sora">
              Track your engineering journey and unlock certifications
            </p>
          </div>

          {/* Current Status */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Crown className="w-8 h-8 text-inkaer-blue" />
                  <span className="text-3xl font-sora font-bold text-inkaer-blue">{userRank}</span>
                </div>
                <p className="text-gray-600 font-sora">Current Rank</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-8 h-8 text-yellow-500 fill-current" />
                  <span className="text-3xl font-sora font-bold text-gray-900">{userPoints.toLocaleString()}</span>
                </div>
                <p className="text-gray-600 font-sora">Total Points</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Target className="w-8 h-8 text-green-500" />
                  <span className="text-3xl font-sora font-bold text-green-600">{pointsToNext}</span>
                </div>
                <p className="text-gray-600 font-sora">Points to Next Rank</p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-sora font-semibold text-gray-700">Progress to Expert</span>
                <span className="text-sm font-sora text-gray-600">{Math.round((userPoints / nextRankPoints) * 100)}%</span>
              </div>
              <Progress value={(userPoints / nextRankPoints) * 100} className="h-3" />
            </div>
          </div>

          {/* Ranks Progress */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-sora font-bold text-gray-900 mb-6">Rank Progression</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {ranks.map((rank, index) => (
                <div
                  key={rank.name}
                  className={`text-center p-4 rounded-2xl border-2 transition-all ${
                    rank.current
                      ? 'border-inkaer-blue bg-blue-50'
                      : rank.completed
                      ? 'border-green-200 bg-green-50'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="mb-3">
                    {rank.completed ? (
                      <Trophy className="w-8 h-8 text-green-500 mx-auto" />
                    ) : rank.current ? (
                      <Crown className="w-8 h-8 text-inkaer-blue mx-auto" />
                    ) : (
                      <div className="w-8 h-8 border-2 border-gray-300 rounded-full mx-auto"></div>
                    )}
                  </div>
                  <h3 className="font-sora font-semibold text-gray-900 mb-1">{rank.name}</h3>
                  <p className="text-xs text-gray-600 font-sora">{rank.points}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4 sm:mb-0">
                Certifications
              </h2>
              
              <div className="flex items-center gap-4">
                <label className="text-sm font-sora font-semibold text-gray-700">
                  Engineering Domain:
                </label>
                <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                  <SelectTrigger className="w-64">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {domains.map((domain) => (
                      <SelectItem key={domain.value} value={domain.value}>
                        {domain.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const prefix = getDomainPrefix(selectedDomain);
                const certTitle = cert.title.replace('Mechanical Engineering', domains.find(d => d.value === selectedDomain)?.label || 'Mechanical Engineering');
                const certAcronym = cert.acronym.replace('ME', prefix);
                
                return (
                  <div
                    key={cert.rank}
                    className={`p-6 rounded-2xl border-2 transition-all ${
                      cert.earned
                        ? 'border-green-200 bg-green-50'
                        : cert.available
                        ? 'border-blue-200 bg-blue-50'
                        : 'border-gray-200 bg-gray-50 opacity-60'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          cert.earned
                            ? 'bg-green-500'
                            : cert.available
                            ? 'bg-blue-500'
                            : 'bg-gray-400'
                        }`}>
                          {cert.earned ? (
                            <Award className="w-6 h-6 text-white" />
                          ) : cert.available ? (
                            <Shield className="w-6 h-6 text-white" />
                          ) : (
                            <Lock className="w-6 h-6 text-white" />
                          )}
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-lg font-sora font-bold text-gray-900">
                              {certTitle}
                            </h3>
                            <Badge variant="outline" className="text-xs">
                              {certAcronym}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-3">
                            <p className={`text-sm font-sora ${
                              cert.earned
                                ? 'text-green-600'
                                : cert.available
                                ? 'text-blue-600'
                                : 'text-gray-500'
                            }`}>
                              {cert.earned
                                ? 'Certification Earned'
                                : cert.available
                                ? 'Available for Certification'
                                : `Unlocks at ${cert.rank} Rank`
                              }
                            </p>
                            {cert.available && !cert.earned && (
                              <Button 
                                size="sm"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-sora"
                              >
                                Start Certification
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:w-96">
                        <h4 className="font-sora font-semibold text-gray-900 mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {cert.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-sm text-gray-600 font-sora flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UserRankDashboard;
