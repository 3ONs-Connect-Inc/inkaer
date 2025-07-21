import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, User, LogOut, Crown, Star, Settings, CreditCard, HelpCircle, Shield, Bell, Bookmark } from 'lucide-react';
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
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import ProfileSearchBar from '@/components/ProfileSearchBar';

const LoggedInNavbar = () => {
  // Mock user data - in real app this would come from state/context
  const userRank = "Advanced";
  const userPoints = 2450;
  const userName = "John Doe";
  const userEmail = "john.doe@example.com";

  return (
    <section className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-2">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <img src="/lovable-uploads/43b0acd6-b3f5-4c6c-8343-272a5aefe7c2.png" className="h-8 w-auto" alt="Inkaer" />
            </a>
            <ProfileSearchBar className="w-64" />
          </div>
          
          <div className="flex items-center gap-6">
            <a href="/login-landing" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium">
              Dashboard
            </a>
            <a href="/projects" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium">
              Projects
            </a>
            
            {/* User Rank and Points - Now Clickable */}
            <a href="/user-rank-dashboard" className="flex items-center gap-4 px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200 hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-1">
                <Crown className="w-4 h-4 text-inkaer-blue" />
                <span className="text-sm font-sora font-semibold text-inkaer-blue">{userRank}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-sora font-semibold text-gray-700">{userPoints.toLocaleString()}</span>
              </div>
            </a>

            {/* Upgrade Button */}
            <Button 
              asChild 
              size="sm" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-sora font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
            >
              <a href="/upgrade">
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
              <DropdownMenuContent align="end" className="w-56 bg-white border border-gray-200 shadow-lg">
                <DropdownMenuLabel className="px-4 py-3">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold text-gray-900">{userName}</p>
                    <p className="text-xs text-gray-500">{userEmail}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                <DropdownMenuItem asChild>
                  <a href="/profile" className="flex items-center cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </a>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild>
                  <a href="/user-rank-dashboard" className="flex items-center cursor-pointer">
                    <Crown className="mr-2 h-4 w-4" />
                    <span>Your Progress</span>
                  </a>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild>
                  <a href="/projects" className="flex items-center cursor-pointer">
                    <Bookmark className="mr-2 h-4 w-4" />
                    <span>My Projects</span>
                  </a>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem asChild>
                  <a href="/settings" className="flex items-center cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </a>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild>
                  <a href="/notifications" className="flex items-center cursor-pointer">
                    <Bell className="mr-2 h-4 w-4" />
                    <span>Notifications</span>
                  </a>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild>
                  <a href="/account" className="flex items-center cursor-pointer">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing & Account</span>
                  </a>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild>
                  <a href="/privacy" className="flex items-center cursor-pointer">
                    <Shield className="mr-2 h-4 w-4" />
                    <span>Privacy & Security</span>
                  </a>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem asChild>
                  <a href="/help" className="flex items-center cursor-pointer">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>Help & Support</span>
                  </a>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
        
        <div className="block lg:hidden">
          <div className="flex items-center justify-between gap-2">
            <a href="/" className="flex items-center gap-2 flex-shrink-0">
              <img src="/lovable-uploads/43b0acd6-b3f5-4c6c-8343-272a5aefe7c2.png" className="h-8 w-auto" alt="Inkaer" />
            </a>
            
            <div className="flex-1 max-w-xs mx-2">
              <ProfileSearchBar />
            </div>
            
            {/* Mobile Rank and Points - Now Clickable */}
            <a href="/user-rank-dashboard" className="flex items-center gap-2 px-2 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200 hover:shadow-md transition-all duration-200 flex-shrink-0">
              <div className="flex items-center gap-1">
                <Crown className="w-3 h-3 text-inkaer-blue" />
                <span className="text-xs font-sora font-semibold text-inkaer-blue">{userRank}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                <span className="text-xs font-sora font-semibold text-gray-700">{userPoints.toLocaleString()}</span>
              </div>
            </a>
            
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
                  </div>
                  <div className="flex flex-col gap-3 border-t pt-4">
                    <Button asChild className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-sora font-semibold py-3 rounded-full">
                      <a href="/upgrade" className="font-sora">
                        <Crown className="mr-2 h-4 w-4" />
                        Upgrade
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="justify-start">
                      <a href="/profile" className="font-sora">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="justify-start">
                      <a href="/settings" className="font-sora">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </a>
                    </Button>
                    <Button asChild variant="ghost" className="justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                      <a href="/logout" className="font-sora">
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
