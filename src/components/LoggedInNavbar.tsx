
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, User, LogOut, Crown, Star } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LoggedInNavbar = () => {
  // Mock user data - in real app this would come from state/context
  const userRank = "Expert";
  const userPoints = 2450;

  return (
    <section className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-2">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <img src="/lovable-uploads/43b0acd6-b3f5-4c6c-8343-272a5aefe7c2.png" className="h-8 w-auto" alt="Inkaer" />
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="/login-landing" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium">
              Dashboard
            </a>
            <a href="/projects" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium">
              Projects
            </a>
            <a href="#rank" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium">
              Rank
            </a>
            <a href="#certifications" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium">
              Certifications
            </a>
            <a href="/pricing" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium">
              Pricing
            </a>
            
            {/* User Rank and Points */}
            <div className="flex items-center gap-4 px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200">
              <div className="flex items-center gap-1">
                <Crown className="w-4 h-4 text-inkaer-blue" />
                <span className="text-sm font-sora font-semibold text-inkaer-blue">{userRank}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-sora font-semibold text-gray-700">{userPoints.toLocaleString()}</span>
              </div>
            </div>

            {/* Upgrade Button */}
            <Button 
              asChild 
              size="sm" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-sora font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
            >
              <a href="/pricing">
                <Crown className="w-4 h-4 mr-1" />
                Upgrade
              </a>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200">
                  <User className="size-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-lg">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
        
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <img src="/lovable-uploads/43b0acd6-b3f5-4c6c-8343-272a5aefe7c2.png" className="h-8 w-auto" alt="Inkaer" />
            </a>
            
            {/* Mobile Rank and Points */}
            <div className="flex items-center gap-2 px-2 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200">
              <div className="flex items-center gap-1">
                <Crown className="w-3 h-3 text-inkaer-blue" />
                <span className="text-xs font-sora font-semibold text-inkaer-blue">{userRank}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                <span className="text-xs font-sora font-semibold text-gray-700">{userPoints.toLocaleString()}</span>
              </div>
            </div>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-white">
                <SheetHeader>
                  <SheetTitle>
                    <a href="/" className="flex items-center gap-2">
                      <img src="/lovable-uploads/43b0acd6-b3f5-4c6c-8343-272a5aefe7c2.png" className="h-8 w-auto" alt="Inkaer" />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <div className="space-y-4">
                    <a href="/login-landing" className="block text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium py-2">
                      Dashboard
                    </a>
                    <a href="/projects" className="block text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium py-2">
                      Projects
                    </a>
                    <a href="#rank" className="block text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium py-2">
                      Rank
                    </a>
                    <a href="#certifications" className="block text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium py-2">
                      Certifications
                    </a>
                    <a href="/pricing" className="block text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium py-2">
                      Pricing
                    </a>
                  </div>
                  <div className="flex flex-col gap-3 border-t pt-4">
                    <Button asChild className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-sora font-semibold py-3 rounded-full">
                      <a href="/pricing" className="font-sora">
                        <Crown className="mr-2 h-4 w-4" />
                        Upgrade
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="justify-start">
                      <a href="#profile" className="font-sora">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </a>
                    </Button>
                    <Button asChild variant="ghost" className="justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                      <a href="#logout" className="font-sora">
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoggedInNavbar;
