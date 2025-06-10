
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 gap-2">
            <Star className="h-3 w-3" />
            India's First LGM Platform
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Building India's First
            <br />
            Legendary Grandmaster
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Empowering Tier 2 & Tier 3 students to master <strong>Competitive Programming</strong>, crack <strong>FANG</strong>, and transform dreams into reality
          </p>

          {/* CP Ladder Visual */}
          <div className="flex justify-center items-center gap-2 md:gap-4 mb-8 flex-wrap">
            <Badge variant="outline" className="text-xs">Pupil</Badge>
            <div className="h-px w-4 bg-muted-foreground"></div>
            <Badge variant="outline" className="text-xs">Expert</Badge>
            <div className="h-px w-4 bg-muted-foreground"></div>
            <Badge variant="outline" className="text-xs">Master</Badge>
            <div className="h-px w-4 bg-muted-foreground"></div>
            <Badge variant="outline" className="text-xs">GM</Badge>
            <div className="h-px w-4 bg-muted-foreground"></div>
            <Badge className="text-xs bg-gradient-to-r from-primary to-secondary">LGM</Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="gap-2">
              <TrendingUp className="h-4 w-4" />
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Target className="h-4 w-4" />
              Explore Resources
            </Button>
          </div>

          {/* Mission Statement */}
          <div className="bg-card border rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              <strong>NEXTFANG</strong> is India's digital movement toward creating the next wave of world-class competitive programmers, project innovators, and product engineers. This is where dreamers become developers, and developers become legends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
