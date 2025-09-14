import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated Transport Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving truck animation */}
        <div className="absolute top-1/3 left-0 w-full">
          <div className="animate-[slide-truck_20s_linear_infinite] flex items-center">
            <Truck className="w-8 h-8 text-white/20 mr-4" />
            <div className="h-0.5 bg-white/20 w-32"></div>
          </div>
        </div>
        
        {/* Road lines */}
        <div className="absolute bottom-32 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute bottom-28 left-0 w-full">
          <div className="animate-[road-lines_3s_linear_infinite] flex space-x-8">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="h-0.5 w-8 bg-white/40"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-5xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Moving People & Goods
            <br />
            <span className="text-orange-200">Safely, On Time</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/90">
            Professional transport services for businesses and individuals. 
            Your trusted partner for reliable, safe, and efficient transportation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="bg-white text-primary hover:bg-orange-50 text-lg px-10 py-4 font-semibold group transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Book a Ride
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-4 font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="mr-3 w-6 h-6" />
              Get a Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-200 mb-2">15+</div>
              <div className="text-sm text-white/80">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-200 mb-2">10K+</div>
              <div className="text-sm text-white/80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-200 mb-2">24/7</div>
              <div className="text-sm text-white/80">Available Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;