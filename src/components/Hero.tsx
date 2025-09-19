import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-4xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Moving People & Goods
            <br />
            <span className="text-orange-200">Safely, On Time</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-white/90">
            Professional transport services for businesses and individuals. Your
            trusted partner for reliable, safe, and efficient transportation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="bg-white text-primary hover:bg-orange-50 text-base px-8 py-3 font-semibold group transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Book a Ride
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/contact")}
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-base px-8 py-3 font-semibold transition-all duration-300 backdrop-blur-sm bg-transparent"
            >
              <Phone className="mr-2 w-5 h-5" />
              Get a Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-200 mb-1">
                15+
              </div>
              <div className="text-sm text-white/80">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-200 mb-1">
                10K+
              </div>
              <div className="text-sm text-white/80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-200 mb-1">
                24/7
              </div>
              <div className="text-sm text-white/80">Available Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
