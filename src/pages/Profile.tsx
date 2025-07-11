
import React from 'react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Mail, MapPin, Calendar, Award, Star, Edit } from 'lucide-react';

const Profile = () => {
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
