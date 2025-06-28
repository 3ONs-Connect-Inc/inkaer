
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, User, LogOut } from 'lucide-react';
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
            <a href="#dashboard" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium">
              Dashboard
            </a>
            <a href="#project" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium">
              Project
            </a>
            <a href="#rank" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium">
              Rank
            </a>
            <a href="#certifications" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium">
              Certifications
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200">
                  <User className="size-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
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
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href="/" className="flex items-center gap-2">
                      <img src="/lovable-uploads/43b0acd6-b3f5-4c6c-8343-272a5aefe7c2.png" className="h-8 w-auto" alt="Inkaer" />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <div className="space-y-4">
                    <a href="#dashboard" className="block text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium py-2">
                      Dashboard
                    </a>
                    <a href="#project" className="block text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium py-2">
                      Project
                    </a>
                    <a href="#rank" className="block text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium py-2">
                      Rank
                    </a>
                    <a href="#certifications" className="block text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium py-2">
                      Certifications
                    </a>
                  </div>
                  <div className="flex flex-col gap-3 border-t pt-4">
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
