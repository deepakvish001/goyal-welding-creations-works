import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Industrial Rolling Shutters" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-right">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Premium
                <span className="text-primary text-shadow-glow"> Rolling Shutters</span>
                <br />
                & Industrial Solutions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                You think We Create - Professional industrial shutters, automatic gates, and warehouse construction services with 20+ years of expertise.
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 text-primary">
                <Shield className="h-5 w-5" />
                <span className="font-semibold">3 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">20+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <Star className="h-5 w-5" />
                <span className="font-semibold">Superior Quality</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => window.open('https://wa.me/917007801235', '_blank')}
                className="hover-scale"
              >
                Get Quote Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover-scale"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 hover-scale box-shadow-primary">
              <h3 className="text-2xl font-bold text-primary mb-2">500+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 hover-scale box-shadow-primary">
              <h3 className="text-2xl font-bold text-primary mb-2">20+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 hover-scale box-shadow-primary">
              <h3 className="text-2xl font-bold text-primary mb-2">3 Years</h3>
              <p className="text-muted-foreground">Motor Warranty</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 hover-scale box-shadow-primary">
              <h3 className="text-2xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-muted-foreground">Support Service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-primary/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;