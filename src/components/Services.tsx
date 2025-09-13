import { useEffect, useState } from "react";
import { Car, Truck, Users, Building2, MapPin, Clock } from "lucide-react";

const Services = () => {
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

    const element = document.getElementById("services");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Car,
      title: "Personal Transport",
      description: "Comfortable and reliable personal transportation for all occasions.",
      features: ["Airport transfers", "City tours", "Special events", "Door-to-door service"]
    },
    {
      icon: Truck,
      title: "Cargo Delivery",
      description: "Safe and efficient cargo delivery services for businesses and individuals.",
      features: ["Same-day delivery", "Freight transport", "Secure handling", "Real-time tracking"]
    },
    {
      icon: Users,
      title: "Group Transport",
      description: "Spacious vehicles for group travel, events, and corporate functions.",
      features: ["Team outings", "Wedding parties", "Conference transport", "Custom routes"]
    },
    {
      icon: Building2,
      title: "Corporate Solutions",
      description: "Professional transport solutions tailored for business needs.",
      features: ["Executive transport", "Employee shuttles", "Client meetings", "Flexible scheduling"]
    },
    {
      icon: MapPin,
      title: "Long Distance",
      description: "Comfortable long-distance travel with experienced drivers.",
      features: ["Inter-city travel", "Rest stops", "Travel planning", "Luggage handling"]
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency transport services when you need them most.",
      features: ["Emergency response", "Medical transport", "Breakdown assistance", "Priority service"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive transport solutions designed to meet all your mobility needs 
            with professionalism and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card fade-in ${isVisible ? "visible" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;