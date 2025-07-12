
import React, { useState } from 'react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Crown, Star, Trophy, Target, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const UserRankDashboard = () => {
  const [selectedDomain, setSelectedDomain] = useState('mechanical');
  
  // Mock user data - in real app this would come from state/context
  const currentRank = "Advanced";
  const currentPoints = 2450;
  const nextRank = "Expert";
  const pointsToNext = 550; // 3000 - 2450

  const domains = [
    { value: 'mechanical', label: 'Mechanical Engineering', code: 'ME' },
    { value: 'electrical', label: 'Electrical Engineering', code: 'EE' },
    { value: 'civil', label: 'Civil Engineering', code: 'CE' },
    { value: 'software', label: 'Software Engineering', code: 'SE' },
    { value: 'aerospace', label: 'Aerospace Engineering', code: 'AE' }
  ];

  const rankLevels = [
    { name: "Novice", points: "Newly Joined", color: "text-gray-600", bgColor: "bg-gray-100", minPoints: 0, maxPoints: 0, code: "0" },
    { name: "Beginner", points: "1-500", color: "text-brown-600", bgColor: "bg-brown-100", minPoints: 1, maxPoints: 500, code: "1" },
    { name: "Intermediate", points: "501-1500", color: "text-green-600", bgColor: "bg-green-100", minPoints: 501, maxPoints: 1500, code: "2" },
    { name: "Advanced", points: "1501-3000", color: "text-blue-600", bgColor: "bg-blue-100", minPoints: 1501, maxPoints: 3000, code: "3" },
    { name: "Expert", points: "3001-5000", color: "text-purple-600", bgColor: "bg-purple-100", minPoints: 3001, maxPoints: 5000, code: "4" },
    { name: "Elite", points: "5000+", color: "text-orange-600", bgColor: "bg-orange-100", minPoints: 5000, maxPoints: Infinity, code: "Elite" }
  ];

  const currentRankIndex = rankLevels.findIndex(rank => rank.name === currentRank);
  const currentRankInfo = rankLevels[currentRankIndex];
  const progressPercent = currentRankInfo.maxPoints === 0 ? 100 : ((currentPoints - currentRankInfo.minPoints) / (currentRankInfo.maxPoints - currentRankInfo.minPoints)) * 100;

  const selectedDomainInfo = domains.find(d => d.value === selectedDomain);

  const getCertifications = () => {
    const certs = [];
    
    // Start from Beginner (index 1) since certification starts at Beginner
    for (let i = 1; i < rankLevels.length; i++) {
      const rank = rankLevels[i];
      const isAvailable = currentRankIndex >= i; // Available if current rank is equal or higher
      const certCode = `${selectedDomainInfo?.code}${rank.code}`;
      
      certs.push({
        title: `${selectedDomainInfo?.label} (${rank.name})`,
        code: certCode,
        rank: rank.name,
        available: isAvailable,
        requirements: getRequirements(rank.name, isAvailable),
        description: getCertDescription(rank.name, selectedDomainInfo?.label || ''),
        bgColor: rank.bgColor,
        color: rank.color
      });
    }
    
    return certs;
  };

  const getRequirements = (rankName: string, isAvailable: boolean) => {
    if (!isAvailable) {
      return `Requires ${rankName} rank or higher`;
    }
    
    switch (rankName) {
      case 'Beginner':
        return 'Complete 2 basic projects • Peer review participation • Basic skill assessment';
      case 'Intermediate':
        return 'Complete 3 intermediate projects • Mentor 1 beginner • Technical interview';
      case 'Advanced':
        return 'Lead 1 complex project • Industry case study • Advanced technical assessment';
      case 'Expert':
        return 'Portfolio of 5+ advanced projects • Peer teaching • Expert-level evaluation';
      case 'Elite':
        return 'Demonstrate mastery across multiple domains • Industry recognition • Elite assessment';
      default:
        return 'Requirements not specified';
    }
  };

  const getCertDescription = (rankName: string, domain: string) => {
    return `Verify your ${domain.toLowerCase()} expertise at the ${rankName.toLowerCase()} level`;
  };

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

          {/* Domain Selection */}
          <div className="mb-8 max-w-md mx-auto">
            <label className="block text-sm font-sora font-medium text-gray-700 mb-2 text-center">
              Select Engineering Domain
            </label>
            <Select value={selectedDomain} onValueChange={setSelectedDomain}>
              <SelectTrigger className="w-full bg-white border-gray-200 font-sora">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200 z-50">
                {domains.map(domain => (
                  <SelectItem key={domain.value} value={domain.value} className="font-sora">
                    {domain.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
              {selectedDomainInfo?.label} Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCertifications().map((cert, index) => (
                <div 
                  key={index} 
                  className={`border-2 rounded-xl p-6 transition-all duration-200 ${
                    cert.available 
                      ? 'border-green-300 bg-green-50 hover:shadow-md' 
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}
                >
                  <div className="text-center mb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${cert.bgColor} mb-3`}>
                      <Trophy className={`w-8 h-8 ${cert.available ? cert.color : 'text-gray-400'}`} />
                    </div>
                    <h3 className="font-sora font-semibold text-gray-900 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-sora mb-2">
                      Code: {cert.code}
                    </p>
                    <p className="text-sm text-gray-600 font-sora mb-3">
                      {cert.description}
                    </p>
                    <div className={`text-xs font-sora p-3 rounded-lg mb-3 ${cert.available ? 'bg-blue-50 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
                      <p className="font-medium mb-1">Requirements:</p>
                      <p>{cert.requirements}</p>
                    </div>
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
