import { Car, Truck, Users, Building, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Car,
      title: "Personal Transport",
      description: "Comfortable rides for individuals and small groups",
      features: ["Airport transfers", "City tours", "Shopping trips", "Medical appointments"],
      price: "Starting from $15"
    },
    {
      icon: Truck,
      title: "Cargo Delivery",
      description: "Safe and efficient delivery of goods and packages",
      features: ["Same-day delivery", "Fragile item handling", "Large cargo transport", "Tracking system"],
      price: "Starting from $25"
    },
    {
      icon: Users,
      title: "Group Transport",
      description: "Transportation solutions for events and group travel",
      features: ["Wedding transport", "Event shuttles", "Corporate events", "Tour groups"],
      price: "Starting from $50"
    },
    {
      icon: Building,
      title: "Corporate Solutions",
      description: "Professional transport services for businesses",
      features: ["Executive transport", "Employee shuttles", "Client meetings", "Conference transport"],
      price: "Custom pricing"
    },
    {
      icon: MapPin,
      title: "Long Distance",
      description: "Comfortable long-distance travel options",
      features: ["Inter-city travel", "Multiple stops", "Overnight trips", "Rest stops included"],
      price: "Starting from $100"
    },
    {
      icon: Clock,
      title: "Emergency Service",
      description: "24/7 emergency transportation when you need it most",
      features: ["24/7 availability", "Quick response", "Medical emergencies", "Urgent deliveries"],
      price: "Premium rates"
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
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive transportation solutions tailored to meet your specific needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border hover:shadow-lg transition-shadow">
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-4">
                  <div className="text-lg font-semibold text-primary mb-4">{service.price}</div>
                  <Button 
                    onClick={() => navigate('/contact')} 
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Transportation Solutions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us for personalized quotes and specialized transport services
          </p>
          <Button 
            onClick={() => navigate('/contact')} 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Get Custom Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;