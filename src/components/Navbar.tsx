
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
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
            <a href="#how-it-works" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium">
              How It Works
            </a>
            <a href="#certification" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium">
              Certification
            </a>
            <Button asChild variant="ghost" size="sm" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium">
              <a href="sign-in">Sign In</a>
            </Button>
            <Button asChild size="sm" className="bg-gradient-inkaer hover:opacity-90 text-white font-sora font-semibold px-6 py-2">
              <a href="sign-up">Get Started</a>
            </Button>
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
                    <a href="#how-it-works" className="block text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium py-2">
                      How It Works
                    </a>
                    <a href="#certification" className="block text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium py-2">
                      Certification
                    </a>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href="#sign-in" className="font-sora">Sign In</a>
                    </Button>
                    <Button asChild className="bg-gradient-inkaer hover:opacity-90 text-white font-sora font-semibold py-3">
                      <a href="#get-started">Get Started</a>
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

export default Navbar;
