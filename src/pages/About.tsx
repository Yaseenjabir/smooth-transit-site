import { Truck, Award, Users, Clock, Shield, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: Truck, label: "Vehicles", value: "150+" },
    { icon: MapPin, label: "Cities Covered", value: "50+" },
    { icon: Award, label: "Years Experience", value: "15+" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety is our top priority with regular vehicle maintenance and certified drivers."
    },
    {
      icon: Clock,
      title: "Punctuality",
      description: "We value your time and ensure timely arrivals for all your transportation needs."
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Professional drivers and well-maintained vehicles for a comfortable journey."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Aqas Transport
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the way in professional transportation services with over 15 years of experience
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2009, Aqas Transport began as a small family business with a simple mission: 
                to provide reliable, safe, and comfortable transportation services to our community.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Over the years, we've grown from a single vehicle operation to a fleet of over 150 
                modern vehicles, serving thousands of satisfied customers across 50+ cities.
              </p>
              <Button onClick={() => navigate('/contact')} className="bg-primary hover:bg-primary/90">
                Get in Touch
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-lg border">
                  <value.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;