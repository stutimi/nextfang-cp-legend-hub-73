
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Star, Zap, Rocket, Bot } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative virtual-stage py-24 overflow-hidden">
      {/* Enhanced 3D Virtual Stage with White Shining Spotlights */}
      <div className="absolute inset-0">
        <div className="spotlight-white absolute top-20 left-1/4"></div>
        <div className="spotlight-white absolute top-32 right-1/4"></div>
        <div className="spotlight-white absolute bottom-20 left-1/3"></div>
        
        {/* Background company images */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://i.postimg.cc/NjrMs5Z8/maxresdefault.jpg" 
            alt="Tech Background"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          />
          <img 
            src="https://i.postimg.cc/SNbz0CZh/apple-store.jpg" 
            alt="Apple Store"
            className="absolute top-1/4 right-0 w-1/3 h-1/3 object-cover opacity-20 rounded-l-3xl"
          />
          <img 
            src="https://i.postimg.cc/SK45tP40/google-head-office-campus-mountain-view-californias-usa-E94-EK8.jpg" 
            alt="Google Campus"
            className="absolute bottom-1/4 left-0 w-1/3 h-1/3 object-cover opacity-20 rounded-r-3xl"
          />
          <img 
            src="https://i.postimg.cc/RhKdS95V/Meta-Completes-Another-Round-of-Layoffs.webp" 
            alt="Meta"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 object-cover opacity-15 rounded-2xl"
          />
        </div>

        {/* Enhanced 3D Floating Elements with White Glow */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-white/20 to-primary/30 rounded-full blur-3xl float-animation white-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/30 to-white/20 rounded-full blur-3xl float-animation white-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-silver/20 to-white/30 rounded-full blur-3xl float-animation white-glow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge with company logo */}
          <div className="mb-8 flex justify-center">
            <Badge variant="secondary" className="mb-6 gap-3 card-3d pulse-glow-white text-lg px-8 py-4">
              <img 
                src="https://i.postimg.cc/4NLSdfjB/cedf0ef6-a561-4074-aa6b-8993a0ba5baa.png" 
                alt="NEXTFANG Logo"
                className="h-8 w-8 rounded-full"
              />
              <Star className="h-5 w-5" />
              India's First LGM Platform
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-8xl font-bold mb-10 text-gradient slide-in-up leading-tight white-text-shadow">
            Building India's First
            <br />
            <span className="relative inline-block">
              Legendary Grandmaster
              <div className="absolute -top-4 -right-4">
                <Rocket className="h-12 w-12 text-accent float-animation white-glow" />
              </div>
            </span>
          </h1>

          {/* Updated Subtitle */}
          <p className="text-2xl md:text-4xl text-muted-foreground mb-12 max-w-5xl mx-auto fade-in-scale leading-relaxed white-text-shadow">
            Empowering <strong className="blue-gradient">all college students</strong> to master <strong className="blue-gradient">Competitive Programming</strong>, crack <strong className="golden-gradient">FANG</strong>, and transform dreams into reality
          </p>

          {/* Company Showcase with Geometric Shapes */}
          <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
            {/* Google - Square */}
            <div className="geometric-card square bg-gradient-to-r from-primary/10 to-secondary/10 white-glow">
              <img 
                src="https://i.postimg.cc/SK45tP40/google-head-office-campus-mountain-view-californias-usa-E94-EK8.jpg" 
                alt="Google"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Amazon - Circle */}
            <div className="geometric-card circle bg-gradient-to-r from-accent/10 to-primary/10 white-glow">
              <img 
                src="https://i.postimg.cc/NjrMs5Z8/maxresdefault.jpg" 
                alt="Amazon"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Apple - Square */}
            <div className="geometric-card square bg-gradient-to-r from-secondary/10 to-accent/10 white-glow">
              <img 
                src="https://i.postimg.cc/SNbz0CZh/apple-store.jpg" 
                alt="Apple"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Microsoft - Circle */}
            <div className="geometric-card circle bg-gradient-to-r from-primary/10 to-accent/10 white-glow">
              <img 
                src="https://i.postimg.cc/8PrzcMWK/maxresdefault-3.jpg" 
                alt="Microsoft"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <Button size="lg" className="gap-4 text-xl px-12 py-8 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent card-3d pulse-glow-white white-glow">
              <TrendingUp className="h-6 w-6" />
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="gap-4 text-xl px-12 py-8 border-2 border-primary/40 hover:bg-primary/20 card-3d white-glow">
              <Target className="h-6 w-6" />
              Explore Resources
            </Button>
            <Link to="#" onClick={() => {
              const chatbot = document.querySelector('[data-chatbot]');
              if (chatbot) {
                chatbot.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              <Button variant="outline" size="lg" className="gap-4 text-xl px-12 py-8 border-2 border-accent/40 hover:bg-accent/20 card-3d white-glow">
                <Bot className="h-6 w-6" />
                AI Guide
              </Button>
            </Link>
          </div>

          {/* Mission Statement */}
          <div className="glass-morphism border-2 border-primary/30 rounded-3xl p-10 max-w-5xl mx-auto card-3d pulse-glow-white white-glow">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Zap className="h-8 w-8 text-primary floating-3d white-glow" />
              <h3 className="text-2xl font-bold text-gradient white-text-shadow">
                NEXTFANG Mission
              </h3>
              <Zap className="h-8 w-8 text-accent floating-3d white-glow" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed white-text-shadow">
              <strong className="blue-gradient">NEXTFANG</strong> is India's digital movement toward creating the next wave of world-class competitive programmers, project innovators, and product engineers. This is where <em className="silver-gradient">dreamers become developers</em>, and <em className="golden-gradient">developers become legends</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
