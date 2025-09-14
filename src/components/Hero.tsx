import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin, Clock, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { icon: MapPin, text: "50+ Cities Covered" },
    { icon: Clock, text: "24/7 Service Available" },
    { icon: Shield, text: "100% Safe & Insured" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Transport Pattern */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 transport-pattern"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-500"></div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          
          {/* Main Heading */}
          <div className="mb-8">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
              <span className="text-sm font-medium">🚚 Trusted by 10,000+ Customers</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Your Journey,</span>
              <span className="block text-orange-200">Our Commitment</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed">
              Experience premium transport services with <strong>Aqas Transport</strong> - 
              where every mile matters and every passenger is our priority.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <feature.icon className="w-5 h-5 text-orange-200" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 text-lg px-8 py-6 font-semibold group transition-all duration-300 shadow-2xl"
            >
              Book Your Ride Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call: (555) 123-4567
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto text-center">
            <div>
              <div className="text-2xl font-bold text-orange-200">15+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-200">150+</div>
              <div className="text-sm text-white/80">Fleet Vehicles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-200">99%</div>
              <div className="text-sm text-white/80">On-Time Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-xs mt-2 text-white/60">Explore Services</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;