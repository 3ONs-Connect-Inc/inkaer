
import React from 'react';
import { CheckCircle, MessageSquare, TrendingUp, Award, Eye } from 'lucide-react';

const ShowWhatYouGotSection = () => {
  const steps = [
    {
      icon: CheckCircle,
      title: "Tackle Real Challenges",
      description: "Tackle real-world engineering challenges that reflect what you'd do on the job.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: MessageSquare,
      title: "Get Expert Feedback",
      description: "Get thoughtful feedback from Engineers who've been there.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: TrendingUp,
      title: "Climb the Ranks",
      description: "Move up the rank based on work quality, not keywords or buzzwords.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Award,
      title: "Get Certified",
      description: "Get certified by adding visibility and trust through a proctored interview with expert engineers.",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Eye,
      title: "Get Discovered",
      description: "Employers see your rank, history, and reviews to assess your fit before reaching out.",
      color: "text-inkaer-blue",
      bgColor: "bg-blue-50"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900 mb-6">
            Show What You've Got!
          </h2>
          <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
            Our proven process helps you showcase your true engineering potential through real challenges and expert validation.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-inkaer rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${step.color}`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-sora font-bold text-gray-900 group-hover:text-inkaer-blue transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-sora leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-inkaer-blue/20 transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Connecting Lines (Desktop Only) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 400">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(0, 170, 254)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(41, 98, 255)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M200,150 Q400,100 600,150 T1000,150"
              stroke="url(#pathGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ShowWhatYouGotSection;
