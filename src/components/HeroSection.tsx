
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Star, Zap, Rocket } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl float-animation" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 gap-2 card-3d pulse-glow text-base px-6 py-2">
            <Star className="h-4 w-4" />
            India's First LGM Platform
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent slide-in-up leading-tight">
            Building India's First
            <br />
            <span className="relative inline-block">
              Legendary Grandmaster
              <div className="absolute -top-2 -right-2">
                <Rocket className="h-8 w-8 text-accent float-animation" />
              </div>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-3xl text-muted-foreground mb-10 max-w-4xl mx-auto fade-in-scale leading-relaxed">
            Empowering Tier 2 & Tier 3 students to master <strong className="text-primary">Competitive Programming</strong>, crack <strong className="text-secondary">FANG</strong>, and transform dreams into reality
          </p>

          {/* CP Ladder Visual */}
          <div className="flex justify-center items-center gap-2 md:gap-6 mb-10 flex-wrap">
            <Badge variant="outline" className="text-sm card-3d hover:bg-primary/10">Pupil</Badge>
            <div className="h-px w-6 bg-gradient-to-r from-primary to-secondary"></div>
            <Badge variant="outline" className="text-sm card-3d hover:bg-secondary/10">Expert</Badge>
            <div className="h-px w-6 bg-gradient-to-r from-secondary to-accent"></div>
            <Badge variant="outline" className="text-sm card-3d hover:bg-accent/10">Master</Badge>
            <div className="h-px w-6 bg-gradient-to-r from-accent to-primary"></div>
            <Badge variant="outline" className="text-sm card-3d hover:bg-primary/10">GM</Badge>
            <div className="h-px w-6 bg-gradient-to-r from-primary to-secondary"></div>
            <Badge className="text-sm bg-gradient-to-r from-primary via-secondary to-accent card-3d pulse-glow">LGM</Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="gap-3 text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent card-3d pulse-glow">
              <TrendingUp className="h-5 w-5" />
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="gap-3 text-lg px-8 py-6 border-2 border-primary/30 hover:bg-primary/10 card-3d">
              <Target className="h-5 w-5" />
              Explore Resources
            </Button>
          </div>

          {/* Mission Statement */}
          <div className="bg-card/80 backdrop-blur border-2 border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto card-3d pulse-glow">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                NEXTFANG Mission
              </h3>
              <Zap className="h-6 w-6 text-accent" />
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-primary">NEXTFANG</strong> is India's digital movement toward creating the next wave of world-class competitive programmers, project innovators, and product engineers. This is where <em className="text-secondary">dreamers become developers</em>, and <em className="text-accent">developers become legends</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
