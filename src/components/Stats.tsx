import { useEffect, useState } from "react";
import { Award, Users, Clock, Shield, CheckCircle, Star } from "lucide-react";

const Stats = () => {
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

    const element = document.getElementById('stats');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Satisfied Clients",
      description: "Happy customers across Azamgarh and surrounding areas"
    },
    {
      icon: Award,
      number: "20+",
      label: "Years Experience",
      description: "Two decades of expertise in industrial solutions"
    },
    {
      icon: CheckCircle,
      number: "1000+",
      label: "Projects Completed",
      description: "Successfully delivered industrial projects"
    },
    {
      icon: Shield,
      number: "3 Years",
      label: "Motor Warranty",
      description: "Comprehensive warranty on all rolling shutter motors"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Service",
      description: "Round-the-clock customer support and maintenance"
    },
    {
      icon: Star,
      number: "100%",
      label: "Quality Assurance",
      description: "Superior quality materials and best-in-class service"
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-secondary to-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence and quality service delivery.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-card/80 backdrop-blur-sm rounded-lg p-8 text-center hover-scale box-shadow-primary transition-all duration-500 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mx-auto mb-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
              <h4 className="text-xl font-semibold mb-3">{stat.label}</h4>
              <p className="text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-card/60 backdrop-blur-sm rounded-lg p-8 lg:p-12 text-center animate-fade-in">
          <h3 className="text-3xl font-bold mb-4">
            Trusted by <span className="text-primary">Businesses</span> Across Azamgarh
          </h3>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Located near Tanishq Showroom in Narauli, we have been serving the industrial needs of Azamgarh and surrounding areas with dedication and expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Licensed & Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Insured Services</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Local Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;