
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Trophy, Code, Users, Bot, FileText, Star, TrendingUp, Globe, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { DSASection } from "@/components/DSASection";
import { CPSection } from "@/components/CPSection";
import { CommunitySection } from "@/components/CommunitySection";
import { Chatbot } from "@/components/Chatbot";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      
      {/* Main Sections */}
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Quick Access Cards with enhanced clickability */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/dsa-mastery">
            <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 cursor-pointer h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl group-hover:scale-110 transition-transform">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">DSA Mastery</CardTitle>
                    <CardDescription>Master DSA to Crack Any Interview</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://i.postimg.cc/SN9W2vpM/Screenshot-2025-06-10-134124.png" 
                  alt="DSA Mastery"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Structured semester-wise plan from Arrays to DP
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">GFG</Badge>
                  <Badge variant="secondary">TUF</Badge>
                  <Badge variant="secondary">NeetCode</Badge>
                  <Badge variant="secondary">CodingNinja</Badge>
                </div>
                <Button className="w-full button-3d bg-gradient-to-r from-primary to-secondary" variant="outline">
                  Start DSA Journey
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/cp-contributors">
            <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/30 cursor-pointer h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-secondary to-accent rounded-xl group-hover:scale-110 transition-transform">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-secondary transition-colors">Competitive Programming</CardTitle>
                    <CardDescription>Journey to Legendary Grandmaster</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://i.postimg.cc/Zn0PfMSZ/Screenshot-2025-06-10-213117.png" 
                  alt="Competitive Programming"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  From 0 to LGM - Complete CP roadmap for Indians
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Codeforces</Badge>
                  <Badge variant="secondary">AtCoder</Badge>
                  <Badge variant="secondary">ICPC</Badge>
                </div>
                <Button className="w-full button-3d bg-gradient-to-r from-secondary to-accent" variant="outline">
                  View Top Contributors
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/hackathon-guide">
            <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30 cursor-pointer h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl group-hover:scale-110 transition-transform">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">Hackathon Guide</CardTitle>
                    <CardDescription>Unstop Focus & PPI Prep</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://i.postimg.cc/sg9rfnk3/hackathon.webp" 
                  alt="Hackathon Guide"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Win hackathons and secure PPIs with our guide
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Unstop</Badge>
                  <Badge variant="secondary">Devfolio</Badge>
                  <Badge variant="secondary">Hack2Skill</Badge>
                </div>
                <Button className="w-full button-3d bg-gradient-to-r from-accent to-primary" variant="outline">
                  Explore Hackathons
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 cursor-pointer h-full">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl group-hover:scale-110 transition-transform">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">FANG Toolkit</CardTitle>
                  <CardDescription>Build Like a Pro, Crack Like a Legend</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <img 
                src="https://i.postimg.cc/fWp52mHs/th.jpg" 
                alt="FANG Toolkit"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-muted-foreground mb-4">
                FANG-ready projects and interview preparation
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">LLD</Badge>
                <Badge variant="secondary">HLD</Badge>
                <Badge variant="secondary">System Design</Badge>
              </div>
              <Button className="w-full button-3d bg-gradient-to-r from-primary to-secondary" variant="outline">
                Build Projects
              </Button>
            </CardContent>
          </Card>

          <Link to="/resume-tips">
            <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/30 cursor-pointer h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-secondary to-accent rounded-xl group-hover:scale-110 transition-transform">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-secondary transition-colors">Diamond Resume</CardTitle>
                    <CardDescription>AI-Powered Resume Analyzer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://i.postimg.cc/5NqJf4QX/infographic-resume-template-header.png" 
                  alt="Diamond Resume"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Tier 2/3 hacks for FANG-ready resumes
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">ATS Bypass</Badge>
                  <Badge variant="secondary">Keywords</Badge>
                  <Badge variant="secondary">Templates</Badge>
                </div>
                <Button className="w-full button-3d bg-gradient-to-r from-secondary to-accent" variant="outline">
                  Analyze Resume
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30 cursor-pointer h-full">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl group-hover:scale-110 transition-transform">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg group-hover:text-accent transition-colors">AI Guide</CardTitle>
                  <CardDescription>Personal Coding Companion</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                GPT-powered roadmap and problem suggestions
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Roadmap Gen</Badge>
                <Badge variant="secondary">Problem Rec</Badge>
                <Badge variant="secondary">24/7 Support</Badge>
              </div>
              <Button 
                className="w-full button-3d bg-gradient-to-r from-accent to-primary" 
                variant="outline"
                onClick={() => {
                  const chatbot = document.querySelector('[data-chatbot]');
                  if (chatbot) {
                    chatbot.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Chat with AI
              </Button>
            </CardContent>
          </Card>
        </section>

        <DSASection />
        <CPSection />
        <CommunitySection />
        
        {/* Resources Section Link */}
        <section className="text-center">
          <Link to="/resources">
            <Card className="card-3d glass-morphism border-2 border-primary/20 p-12 cursor-pointer hover:border-primary/40 transition-all">
              <CardContent className="pt-0">
                <div className="floating-3d mb-6">
                  <Globe className="h-16 w-16 text-primary mx-auto" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                  Explore All Resources
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  Comprehensive collection of competitive programming resources, tutorials, and practice platforms
                </p>
                <Button size="lg" className="button-3d bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent text-lg px-8 py-4">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View All Resources
                </Button>
              </CardContent>
            </Card>
          </Link>
        </section>
      </div>
      
      <div data-chatbot>
        <Chatbot />
      </div>
    </div>
  );
};

export default Index;
