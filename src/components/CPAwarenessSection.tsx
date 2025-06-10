
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Target, BookOpen, Users, Zap, TrendingUp, Globe, Award, Brain, Code2 } from "lucide-react";

export const CPAwarenessSection = () => {
  return (
    <section className="py-16 hero-bg relative overflow-hidden">
      {/* Floating spotlight elements for 3D effect */}
      <div className="spotlight-white absolute top-10 left-10 opacity-30"></div>
      <div className="spotlight-white absolute top-32 right-20 opacity-25"></div>
      <div className="spotlight-white absolute bottom-20 left-1/3 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 glass-morphism border-primary/30 text-primary hover:bg-primary/20 animate-fade-in pulse-glow-white">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Critical Analysis
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient white-text-shadow animate-scale-in floating-3d">
            Why CP Awareness is Missing in India?
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto leading-relaxed animate-fade-in white-text-shadow">
            Understanding the gap and how <strong className="text-gradient">NEXTFANG</strong> is bridging it
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Problems Section */}
          <Card className="card-3d glass-morphism border-2 border-primary/30 hover:border-accent/50 white-glow animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 glass-morphism border border-destructive/30 rounded-xl pulse-3d">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gradient">Current Problems</CardTitle>
                  <CardDescription className="text-accent">Why CP awareness lacks in India</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  icon: <BookOpen className="h-5 w-5 text-secondary" />,
                  title: "Educational System Gap",
                  desc: "Traditional curriculum focuses on theory, not competitive programming practice"
                },
                {
                  icon: <Users className="h-5 w-5 text-accent" />,
                  title: "Lack of Mentorship",
                  desc: "Limited access to experienced CP practitioners and proper guidance"
                },
                {
                  icon: <Globe className="h-5 w-5 text-primary" />,
                  title: "Resource Fragmentation",
                  desc: "Quality CP resources scattered across platforms without structured learning paths"
                },
                {
                  icon: <Brain className="h-5 w-5 text-accent" />,
                  title: "Awareness Deficit",
                  desc: "Students unaware of CP's importance for FANG interviews and career growth"
                }
              ].map((problem, index) => (
                <div key={problem.title} className="flex gap-4 p-4 glass-morphism border border-muted/20 rounded-xl hover:border-primary/30 transition-all duration-300 card-3d white-glow slide-in-3d" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex-shrink-0 p-2 glass-morphism border border-primary/20 rounded-lg shadow-sm pulse-3d">
                    {problem.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 white-text-shadow">{problem.title}</h4>
                    <p className="text-sm text-muted-foreground">{problem.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Solutions Section */}
          <Card className="card-3d glass-morphism border-2 border-primary/30 hover:border-accent/50 white-glow animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 glass-morphism border border-primary/30 rounded-xl pulse-3d">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gradient">NEXTFANG Solutions</CardTitle>
                  <CardDescription className="text-accent">How we're bridging the gap</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  icon: <Code2 className="h-5 w-5 text-primary" />,
                  title: "Structured Learning Path",
                  desc: "Semester-wise DSA progression from beginner to Legendary Grandmaster"
                },
                {
                  icon: <Users className="h-5 w-5 text-accent" />,
                  title: "Community & Mentorship",
                  desc: "Connect with top CP contributors and get personalized guidance"
                },
                {
                  icon: <TrendingUp className="h-5 w-5 text-secondary" />,
                  title: "Career-Focused Approach",
                  desc: "Direct mapping of CP skills to FANG interview success and career growth"
                },
                {
                  icon: <Award className="h-5 w-5 text-accent" />,
                  title: "Comprehensive Resources",
                  desc: "One-stop platform for all CP needs - from basics to advanced problem solving"
                }
              ].map((solution, index) => (
                <div key={solution.title} className="flex gap-4 p-4 glass-morphism border border-muted/20 rounded-xl hover:border-primary/30 transition-all duration-300 card-3d white-glow slide-in-3d" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex-shrink-0 p-2 glass-morphism border border-primary/20 rounded-lg shadow-sm pulse-3d">
                    {solution.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 white-text-shadow">{solution.title}</h4>
                    <p className="text-sm text-muted-foreground">{solution.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-3d glass-morphism border-2 border-primary/30 p-8 max-w-4xl mx-auto white-glow animate-fade-in">
            <CardContent className="pt-0">
              <Zap className="h-16 w-16 text-primary mx-auto mb-6 pulse-3d floating-3d" />
              <h3 className="text-3xl font-bold mb-4 text-gradient white-text-shadow animate-scale-in">
                Join the Movement
              </h3>
              <p className="text-lg text-accent mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in white-text-shadow">
                Be part of India's first comprehensive competitive programming ecosystem. 
                Together, we're creating the next generation of world-class programmers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="button-3d bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 animate-scale-in white-glow">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg" className="button-3d border-primary text-primary hover:bg-primary/10 px-8 py-3 animate-scale-in white-glow" style={{animationDelay: '0.1s'}}>
                  <Users className="h-5 w-5 mr-2" />
                  Join Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
