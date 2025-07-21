
import React from 'react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Mail, MapPin, Calendar, Award, Star, Edit, Trophy, CheckCircle, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Profile = () => {
  // Mock data for projects
  const completedProjects = [
    {
      id: 1,
      title: "Autonomous Drone Design",
      type: "Portfolio",
      difficulty: "Expert",
      grade: "A+",
      submittedDate: "2024-01-15",
      category: "Aerospace Engineering"
    },
    {
      id: 2,
      title: "Thermal Management System",
      type: "Challenge",
      difficulty: "Intermediate",
      grade: "A",
      submittedDate: "2024-02-20",
      category: "Mechanical Engineering"
    },
    {
      id: 3,
      title: "Smart Building HVAC",
      type: "Portfolio",
      difficulty: "Advanced",
      grade: "A-",
      submittedDate: "2024-03-10",
      category: "Civil Engineering"
    },
    {
      id: 4,
      title: "Bridge Load Analysis",
      type: "Challenge",
      difficulty: "Beginner",
      grade: "B+",
      submittedDate: "2024-03-25",
      category: "Structural Engineering"
    }
  ];

  // Mock data for certifications
  const certifications = [
    {
      id: 1,
      name: "Mechanical Engineering Professional",
      domain: "Mechanical Engineering",
      level: "Expert",
      earnedDate: "2024-01-20",
      requirements: "Complete 3 Expert projects + Pass certification exam"
    },
    {
      id: 2,
      name: "CAD Design Specialist",
      domain: "Design Engineering",
      level: "Advanced",
      earnedDate: "2024-02-15",
      requirements: "Complete 5 CAD projects + Portfolio review"
    },
    {
      id: 3,
      name: "Thermal Analysis Expert",
      domain: "Thermal Engineering",
      level: "Expert",
      earnedDate: "2024-03-05",
      requirements: "Complete thermal challenges + Peer review"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-orange-100 text-orange-800';
      case 'expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-green-600';
    if (grade.startsWith('B')) return 'text-blue-600';
    if (grade.startsWith('C')) return 'text-yellow-600';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <LoggedInNavbar />
      
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-inkaer-blue to-indigo-600 p-8 text-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-3xl font-sora font-bold mb-2">John Doe</h1>
                  <p className="text-xl font-sora opacity-90">Mechanical Engineer</p>
                  <div className="flex items-center gap-4 mt-4 justify-center md:justify-start">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span className="font-sora font-semibold">Expert</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-yellow-300" />
                      <span className="font-sora font-semibold">2,450 points</span>
                    </div>
                  </div>
                </div>
                <Button variant="secondary" className="font-sora">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>

            {/* Profile Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-sora">Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-gray-500" />
                      <span className="font-sora">john.doe@example.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <span className="font-sora">San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <span className="font-sora">Joined March 2024</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Statistics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-sora">Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-sora text-gray-600">Projects Submitted</span>
                      <span className="font-sora font-semibold">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-sora text-gray-600">Reviews Given</span>
                      <span className="font-sora font-semibold">28</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-sora text-gray-600">Average Rating</span>
                      <span className="font-sora font-semibold">4.6</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Bio Section */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="font-sora">About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-sora leading-relaxed">
                    Passionate mechanical engineer with 5+ years of experience in product design and development. 
                    Specialized in CAD modeling, thermal analysis, and prototyping. Always eager to tackle new 
                    challenges and collaborate with fellow engineers on innovative projects.
                  </p>
                </CardContent>
              </Card>

              {/* Projects Section */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="font-sora flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Completed Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {completedProjects.map((project) => (
                      <div key={project.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex-1">
                            <h3 className="font-sora font-semibold text-lg">{project.title}</h3>
                            <p className="text-sm text-gray-600 font-sora">{project.category}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="outline" className="text-xs">
                                {project.type}
                              </Badge>
                              <Badge className={`text-xs ${getDifficultyColor(project.difficulty)}`}>
                                {project.difficulty}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex flex-col sm:items-end gap-2">
                            <div className={`font-sora font-bold text-xl ${getGradeColor(project.grade)}`}>
                              {project.grade}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Clock className="w-4 h-4" />
                              <span className="font-sora">{new Date(project.submittedDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications Section */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="font-sora flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {certifications.map((cert) => (
                      <div key={cert.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                              <h3 className="font-sora font-semibold text-lg">{cert.name}</h3>
                            </div>
                            <p className="text-sm text-gray-600 font-sora mb-2">{cert.domain}</p>
                            <p className="text-xs text-gray-500 font-sora">{cert.requirements}</p>
                            <div className="mt-2">
                              <Badge className={`text-xs ${getDifficultyColor(cert.level)}`}>
                                {cert.level} Level
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span className="font-sora">Earned {new Date(cert.earnedDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
