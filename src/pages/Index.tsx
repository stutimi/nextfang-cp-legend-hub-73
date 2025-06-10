
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Trophy, Code, Users, Bot, FileText, Star, TrendingUp, Globe } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { DSASection } from "@/components/DSASection";
import { CPSection } from "@/components/CPSection";
import { CommunitySection } from "@/components/CommunitySection";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      
      {/* Main Sections */}
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Quick Access Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">DSA Mastery</CardTitle>
                  <CardDescription>Master DSA to Crack Any Interview</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Structured semester-wise plan from Arrays to DP
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">GFG</Badge>
                <Badge variant="secondary">TUF</Badge>
                <Badge variant="secondary">NeetCode</Badge>
              </div>
              <Button className="w-full" variant="outline">
                Start DSA Journey
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary/20">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Code className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Competitive Programming</CardTitle>
                  <CardDescription>Journey to Legendary Grandmaster</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                From 0 to LGM - Complete CP roadmap for Indians
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Codeforces</Badge>
                <Badge variant="secondary">AtCoder</Badge>
                <Badge variant="secondary">ICPC</Badge>
              </div>
              <Button className="w-full" variant="outline">
                Begin CP Journey
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-lg">Hackathon Guide</CardTitle>
                  <CardDescription>Unstop Focus & PPI Prep</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Win hackathons and secure PPIs with our guide
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Unstop</Badge>
                <Badge variant="secondary">Devfolio</Badge>
                <Badge variant="secondary">Hack2Skill</Badge>
              </div>
              <Button className="w-full" variant="outline">
                Explore Hackathons
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">FANG Toolkit</CardTitle>
                  <CardDescription>Build Like a Pro, Crack Like a Legend</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                FANG-ready projects and interview preparation
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">LLD</Badge>
                <Badge variant="secondary">HLD</Badge>
                <Badge variant="secondary">System Design</Badge>
              </div>
              <Button className="w-full" variant="outline">
                Build Projects
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary/20">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <FileText className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Diamond Resume</CardTitle>
                  <CardDescription>AI-Powered Resume Analyzer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Tier 2/3 hacks for FANG-ready resumes
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">ATS Bypass</Badge>
                <Badge variant="secondary">Keywords</Badge>
                <Badge variant="secondary">Templates</Badge>
              </div>
              <Button className="w-full" variant="outline">
                Analyze Resume
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Bot className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-lg">AI Guide</CardTitle>
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
              <Button className="w-full" variant="outline">
                Chat with AI
              </Button>
            </CardContent>
          </Card>
        </section>

        <DSASection />
        <CPSection />
        <CommunitySection />
      </div>
      
      <Chatbot />
    </div>
  );
};

export default Index;
