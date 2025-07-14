import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  DoorOpen, 
  Zap, 
  Shield, 
  ArrowRight,
  Wrench,
  Timer,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: DoorOpen,
      title: "Rolling Shutters",
      description: "High-quality manual and automatic rolling shutters for commercial and residential use.",
      features: ["Superior raw materials", "Best quality motors", "3-year warranty", "Professional installation"]
    },
    {
      icon: Building,
      title: "Warehouse Construction",
      description: "Complete warehouse construction services with modern infrastructure and safety standards.",
      features: ["Structural engineering", "Safety compliance", "Quality materials", "Timely delivery"]
    },
    {
      icon: Zap,
      title: "Automatic Rolling Shutters",
      description: "Advanced motorized rolling shutters with remote control and safety features.",
      features: ["Remote operation", "Safety sensors", "Emergency manual override", "Weather resistant"]
    },
    {
      icon: Shield,
      title: "Automatic Sliding Gates",
      description: "Secure and convenient automatic sliding gates for residential and commercial properties.",
      features: ["Access control", "Security features", "Smooth operation", "Durable construction"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive industrial solutions with superior quality materials and 20+ years of expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-scale bg-card/80 backdrop-blur-sm border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Assurance Section */}
        <div className="bg-card rounded-lg p-8 lg:p-12 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Why Choose <span className="text-primary">Goyal Welding Works?</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">3-Year Motor Warranty</h4>
                    <p className="text-muted-foreground">We provide comprehensive 3-year warranty on all rolling shutter motors, ensuring peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Wrench className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">20+ Years Experience</h4>
                    <p className="text-muted-foreground">Our skilled team brings over two decades of expertise in industrial shutter solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Timer className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Superior Quality Materials</h4>
                    <p className="text-muted-foreground">We use only the finest raw materials and best quality motors for lasting performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
              <p className="text-muted-foreground mb-6">
                Contact us today for a free consultation and quote. Our services are best in class.
              </p>
              <Button
                variant="hero"
                size="lg"
                onClick={() => window.open('https://wa.me/7007801235', '_blank')}
                className="hover-scale"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;