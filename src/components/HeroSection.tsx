
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Star, Zap, Rocket, Bot, ChevronDown, Play, Github, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative virtual-stage py-24 overflow-hidden">
      {/* Enhanced 3D Virtual Stage with White Shining Spotlights */}
      <div className="absolute inset-0">
        <div className="spotlight-white absolute top-20 left-1/4 animate-pulse"></div>
        <div className="spotlight-white absolute top-32 right-1/4 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="spotlight-white absolute bottom-20 left-1/3 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Background company images with different shapes */}
        <div className="absolute inset-0 opacity-10">
          {/* Square format images */}
          <div className="absolute top-10 left-10 w-32 h-32 overflow-hidden animate-fade-in">
            <img 
              src="https://i.postimg.cc/Bbz4DZXg/ce9fedd7b042038f4b5a597ab8f52d45.jpg" 
              alt="Competitive Programming Contest"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="absolute top-10 right-10 w-32 h-32 overflow-hidden animate-fade-in" style={{animationDelay: '0.5s'}}>
            <img 
              src="https://i.postimg.cc/fyC5gkxc/2021-ICPC-World-Champions.jpg" 
              alt="ICPC World Champions"
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          {/* Circular format images */}
          <div className="absolute top-1/4 left-5 w-24 h-24 rounded-full overflow-hidden animate-fade-in" style={{animationDelay: '1s'}}>
            <img 
              src="https://i.postimg.cc/wv8p94nW/45227950-2137472146284962-8222995478405447680-n.jpg" 
              alt="Programming Competition"
              className="w-full h-full object-cover opacity-25"
            />
          </div>
          <div className="absolute top-1/4 right-5 w-24 h-24 rounded-full overflow-hidden animate-fade-in" style={{animationDelay: '1.2s'}}>
            <img 
              src="https://i.postimg.cc/Gmx747B7/IOI-2023-1.webp" 
              alt="IOI 2023"
              className="w-full h-full object-cover opacity-25"
            />
          </div>

          {/* Rectangle format images */}
          <img 
            src="https://i.postimg.cc/XYh1bSd5/maxresdefault.jpg" 
            alt="Tech Background"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30 animate-fade-in"
          />
          <img 
            src="https://i.postimg.cc/Y9t92Vwr/apple-store.jpg" 
            alt="Apple Store"
            className="absolute top-1/4 right-0 w-1/3 h-1/3 object-cover opacity-20 rounded-l-3xl animate-fade-in"
            style={{animationDelay: '0.5s'}}
          />
          <img 
            src="https://i.postimg.cc/rp3Jv16N/google-head-office-campus-mountain-view-californias-usa-E94-EK8.jpg" 
            alt="Google Campus"
            className="absolute bottom-1/4 left-0 w-1/3 h-1/3 object-cover opacity-20 rounded-r-3xl animate-fade-in"
            style={{animationDelay: '1s'}}
          />
          <img 
            src="https://i.postimg.cc/xTXZ83YM/Meta-Completes-Another-Round-of-Layoffs.webp" 
            alt="Meta"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 object-cover opacity-15 rounded-2xl animate-fade-in"
            style={{animationDelay: '1.5s'}}
          />
          <img 
            src="https://i.postimg.cc/gkpwkN3B/maxresdefault-1.jpg" 
            alt="Innovation Hub"
            className="absolute bottom-10 right-20 w-40 h-24 object-cover opacity-20 rounded-xl animate-fade-in"
            style={{animationDelay: '2s'}}
          />
        </div>

        {/* Enhanced 3D Floating Elements with White Glow */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-white/20 to-primary/30 rounded-full blur-3xl float-animation white-glow animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/30 to-white/20 rounded-full blur-3xl float-animation white-glow animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-silver/20 to-white/30 rounded-full blur-3xl float-animation white-glow animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge with company logo */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <Badge variant="secondary" className="mb-6 gap-3 card-3d pulse-glow-white text-lg px-8 py-4 animate-scale-in">
              <img 
                src="https://i.postimg.cc/4NLSdfjB/cedf0ef6-a561-4074-aa6b-8993a0ba5baa.png" 
                alt="NEXTFAANG Logo"
                className="h-8 w-8 rounded-full animate-pulse"
              />
              <Star className="h-5 w-5 animate-pulse" />
              India's First LGM Platform
            </Badge>
          </div>

          {/* Catchy and Concise Headline with NEXTFAANG branding */}
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-gradient slide-in-up leading-tight white-text-shadow animate-fade-in">
            <span className="inline-block animate-scale-in">Welcome to</span>
            <br />
            <span className="inline-block animate-scale-in bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent" style={{animationDelay: '0.2s'}}>NEXTFAANG</span>
            <br />
            <span className="relative inline-block animate-scale-in text-3xl md:text-5xl" style={{animationDelay: '0.4s'}}>
              <span className="blue-gradient">Master CP & DSA to Crack FAANG</span>
              <div className="absolute -top-4 -right-4">
                <Rocket className="h-12 w-12 text-accent float-animation white-glow animate-pulse" />
              </div>
            </span>
          </h1>

          {/* Quick tagline with animation */}
          <div className="mb-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto leading-relaxed white-text-shadow">
              <strong className="blue-gradient animate-pulse">Real Progress</strong> • <strong className="silver-gradient animate-pulse">Smart Guidance</strong> • <strong className="golden-gradient animate-pulse">Battle-Tested Tools</strong>
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join thousands of students already transforming their coding journey with India's most comprehensive CP platform
            </p>
          </div>

          {/* CTA Buttons with See Features */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <Button size="lg" className="gap-4 text-xl px-12 py-6 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent card-3d pulse-glow-white white-glow hover:scale-110 transition-all duration-300 animate-scale-in">
              <TrendingUp className="h-6 w-6 animate-pulse" />
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-4 text-xl px-12 py-6 border-2 border-primary/40 hover:bg-primary/20 card-3d white-glow hover:scale-110 transition-all duration-300 animate-scale-in" 
              style={{animationDelay: '0.2s'}}
              onClick={scrollToFeatures}
            >
              <ChevronDown className="h-6 w-6 animate-pulse" />
              See Features
            </Button>
            <Link to="#" onClick={() => {
              const chatbot = document.querySelector('[data-chatbot]');
              if (chatbot) {
                chatbot.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              <Button variant="outline" size="lg" className="gap-4 text-xl px-12 py-6 border-2 border-accent/40 hover:bg-accent/20 card-3d white-glow hover:scale-110 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.4s'}}>
                <Bot className="h-6 w-6 animate-pulse" />
                AI Mentor
              </Button>
            </Link>
          </div>

          {/* Demo Video Section */}
          <div className="mb-16 animate-fade-in" style={{animationDelay: '1s'}}>
            <div className="max-w-4xl mx-auto">
              <div className="relative group card-3d overflow-hidden rounded-3xl white-glow hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-2 border-blue-400/30">
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-6">
                      <Play className="h-20 w-20 text-primary mx-auto animate-pulse white-glow" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 white-text-shadow">
                      See NEXTFAANG in Action
                    </h3>
                    <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                      Watch how we help students master competitive programming and crack their dream companies in just 2 minutes
                    </p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 white-glow hover:scale-110 transition-all duration-300">
                      <Play className="h-5 w-5 mr-2" />
                      Watch Demo
                    </Button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Quick Stats & Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in" style={{animationDelay: '1.2s'}}>
            <div className="card-3d glass-morphism p-6 rounded-2xl white-glow hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary mb-2 white-text-shadow">2,547+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div className="card-3d glass-morphism p-6 rounded-2xl white-glow hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-secondary mb-2 white-text-shadow">150+</div>
              <div className="text-muted-foreground">FAANG Placements</div>
            </div>
            <div className="card-3d glass-morphism p-6 rounded-2xl white-glow hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-accent mb-2 white-text-shadow">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>

          {/* Dev Details Section */}
          <div className="glass-morphism border-2 border-primary/30 rounded-3xl p-8 max-w-5xl mx-auto card-3d pulse-glow-white white-glow animate-fade-in hover:scale-105 transition-transform duration-500" style={{animationDelay: '1.4s'}}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <Zap className="h-8 w-8 text-primary floating-3d white-glow animate-pulse" />
              <h3 className="text-2xl font-bold text-gradient white-text-shadow animate-scale-in">
                🚧 Ongoing Development
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="text-left">
                <h4 className="font-bold text-lg mb-4 text-primary white-text-shadow">Tech Stack</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div>• React + TypeScript</div>
                  <div>• Tailwind CSS + Shadcn UI</div>
                  <div>• Vite + React Router</div>
                  <div>• Tanstack Query</div>
                </div>
              </div>
              
              <div className="text-left">
                <h4 className="font-bold text-lg mb-4 text-secondary white-text-shadow">Future Plans</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div>• Advanced AI Mentor</div>
                  <div>• Resume Builder Pro</div>
                  <div>• Live CP Battles</div>
                  <div>• Company-wise Prep</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" size="sm" className="gap-2 border-primary/40 hover:bg-primary/20 white-glow hover:scale-105 transition-all duration-300">
                <Github className="h-4 w-4" />
                ✅ GitHub Repo
              </Button>
              <Button variant="outline" size="sm" className="gap-2 border-secondary/40 hover:bg-secondary/20 white-glow hover:scale-105 transition-all duration-300">
                <FileText className="h-4 w-4" />
                ✅ Pitch Deck
              </Button>
              <Button variant="outline" size="sm" className="gap-2 border-accent/40 hover:bg-accent/20 white-glow hover:scale-105 transition-all duration-300">
                <Target className="h-4 w-4" />
                ✅ Working Prototype
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
