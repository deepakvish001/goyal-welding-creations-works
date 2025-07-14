import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Zap, Target, Clock, Shield } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Committed to delivering superior quality products with premium materials and precision craftsmanship."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled professionals bring 20+ years of industry experience to every project."
    },
    {
      icon: Zap,
      title: "Modern Technology",
      description: "We use cutting-edge technology and the best quality motors for optimal performance."
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "Our services are designed to be best in class, ensuring complete customer satisfaction."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We value your time and ensure all projects are completed within agreed timelines."
    },
    {
      icon: Shield,
      title: "Warranty Support",
      description: "3-year comprehensive warranty on rolling shutter motors with reliable after-sales service."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-primary">Goyal Welding Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over 20 years of experience in the industry, we have established ourselves as a trusted name in rolling shutters, automatic gates, and warehouse construction services.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-right">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Our <span className="text-primary">Mission</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To provide innovative, reliable, and high-quality industrial solutions that exceed our clients' expectations. We believe in the philosophy "You think We Create" - turning your vision into reality with precision and excellence.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4">
                Why We're <span className="text-primary">Different</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">We use only superior quality raw materials ensuring durability and longevity</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Our skilled team has 20+ years of hands-on experience in the industry</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">We provide comprehensive 3-year warranty on all rolling shutter motors</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Our services are designed to be best in class with customer satisfaction as priority</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            <div className="text-center bg-card rounded-lg p-6 hover-scale box-shadow-primary">
              <h4 className="text-4xl font-bold text-primary mb-2">500+</h4>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center bg-card rounded-lg p-6 hover-scale box-shadow-primary">
              <h4 className="text-4xl font-bold text-primary mb-2">20+</h4>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center bg-card rounded-lg p-6 hover-scale box-shadow-primary">
              <h4 className="text-4xl font-bold text-primary mb-2">1000+</h4>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center bg-card rounded-lg p-6 hover-scale box-shadow-primary">
              <h4 className="text-4xl font-bold text-primary mb-2">24/7</h4>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="hover-scale bg-card/80 backdrop-blur-sm border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {achievement.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;