
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LoginLanding from "./pages/LoginLanding";
import UploadPortfolio from "./pages/UploadPortfolio";
import Projects from "./pages/Projects";
import Pricing from "./pages/Pricing";
import Upgrade from "./pages/Upgrade";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HowItWorks from "./pages/HowItWorks";
import Rank from "./pages/Rank";
import Certifications from "./pages/Certifications";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login-landing" element={<LoginLanding />} />
          <Route path="/upload-portfolio" element={<UploadPortfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/community" element={<Community />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
