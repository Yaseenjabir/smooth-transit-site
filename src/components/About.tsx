import { useEffect, useState } from "react";
import { Shield, Clock, Users, Award } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "All our vehicles undergo regular safety inspections and our drivers are thoroughly vetted."
    },
    {
      icon: Clock,
      title: "Always On Time",
      description: "Punctuality is our priority. We track routes in real-time to ensure timely arrivals."
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Our experienced drivers and support staff are committed to excellent customer service."
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Award-winning transport services with a focus on comfort and reliability."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About TransportPro
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over 15 years of experience in the transport industry, we provide reliable 
            and professional transport solutions for all your needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center fade-in ${isVisible ? "visible" : ""}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center fade-in ${isVisible ? "visible" : ""}`}>
          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Available Service</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;