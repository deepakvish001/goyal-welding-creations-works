import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 7007801235",
      action: "tel:+917007801235",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "rudransh2306@gmail.com",
      action: "mailto:rudransh2306@gmail.com",
      description: "Send us your queries"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Near Tanishq Showroom, Narauli",
      location: "Azamgarh - 276001",
      description: "Visit our office"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Sat: 9:00 AM - 7:00 PM",
      location: "Sunday: Closed",
      description: "We're here to help"
    }
  ];

  const services = [
    "Rolling Shutters",
    "Warehouse Construction", 
    "Automatic Rolling Shutters",
    "Automatic Sliding Gates",
    "Industrial Solutions",
    "Maintenance Services"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="hover-scale bg-card/80 backdrop-blur-sm border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">{info.description}</CardDescription>
                <div className="space-y-2">
                  {info.action ? (
                    <a 
                      href={info.action}
                      className="text-primary hover:underline font-medium block"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="font-medium">{info.details}</p>
                  )}
                  {info.location && (
                    <p className="text-sm text-muted-foreground">{info.location}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Form Alternative */}
          <div className="space-y-8 animate-slide-right">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Let's Discuss Your <span className="text-primary">Project</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Our team is ready to provide you with the best industrial solutions. Contact us through WhatsApp for instant support and quotes.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Our Services Include:</h4>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4">Why Choose Us?</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">3-Year Motor Warranty</p>
                    <p className="text-sm text-muted-foreground">Comprehensive warranty on all rolling shutter motors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">20+ Years Experience</p>
                    <p className="text-sm text-muted-foreground">Skilled team with decades of industry expertise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Superior Quality Materials</p>
                    <p className="text-sm text-muted-foreground">Only the finest raw materials and best quality motors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Actions */}
          <div className="space-y-8 animate-slide-up">
            <div className="bg-card/60 backdrop-blur-sm rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Click the button below to chat with us on WhatsApp. We'll respond immediately with a personalized quote.
              </p>
              
              <Button
                variant="hero"
                size="lg"
                onClick={() => window.open('https://wa.me/917007801235', '_blank')}
                className="w-full hover-scale mb-4"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                <span>✓ Instant Response</span>
                <span>✓ Free Quote</span>
                <span>✓ Expert Advice</span>
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-lg p-8">
              <h4 className="text-xl font-semibold mb-4 text-center">Business Information</h4>
              <div className="space-y-4">
                <div className="text-center">
                  <h5 className="font-medium text-primary text-lg">Goyal Welding Works</h5>
                  <p className="text-sm text-muted-foreground">"You think We Create"</p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Near Tanishq Showroom, Narauli</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Azamgarh - 276001</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+91 7007801235</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>rudransh2306@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;