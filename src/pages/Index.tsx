
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { CPSection } from "@/components/CPSection";
import { DSASection } from "@/components/DSASection";
import { CommunitySection } from "@/components/CommunitySection";
import { CompanyShowcase } from "@/components/CompanyShowcase";
import { CPAwarenessSection } from "@/components/CPAwarenessSection";
import { LiveCodingPreview } from "@/components/LiveCodingPreview";
import { FloatingAIMentor } from "@/components/FloatingAIMentor";
import { EnhancedChatbot } from "@/components/EnhancedChatbot";
import { PlatformGuideMentor } from "@/components/PlatformGuideMentor";
import { VisitorStats } from "@/components/VisitorStats";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Target, 
  TrendingUp, 
  BookOpen, 
  Zap, 
  Star,
  ArrowRight,
  Sparkles,
  Rocket,
  Shield,
  Code2,
  Trophy,
  Users,
  Globe,
  ChevronRight,
  Lightbulb,
  Search,
  BarChart3,
  Database,
  Github,
  FileText,
  Calendar,
  MessageSquare,
  Bot,
  Clock,
  Compass
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const tools = [
    {
      title: "Contest Performance Analyzer",
      description: "Analyze your Codeforces contest performance and GitHub activity with AI-powered insights",
      icon: BarChart3,
      href: "/contest-analyzer",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      bgGradient: "from-blue-50 via-purple-50 to-pink-50",
      features: ["Contest Analysis", "GitHub Integration", "Performance Metrics", "Recommendation Engine"],
      category: "Performance",
      isNew: true
    },
    {
      title: "CP Dictionary",
      description: "Comprehensive dictionary of competitive programming terms, algorithms, and data structures",
      icon: BookOpen,
      href: "/cp-dictionary",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-50 via-teal-50 to-cyan-50",
      features: ["Algorithm Reference", "Data Structure Guide", "Complexity Analysis", "Code Examples"],
      category: "Learning",
      isNew: false
    },
    {
      title: "CP Tricks & Tips",
      description: "Master competitive programming with expert tricks, optimization techniques, and pro tips",
      icon: Lightbulb,
      href: "/cp-tricks-tips",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-50 via-red-50 to-pink-50",
      features: ["Advanced Techniques", "Optimization Tips", "Contest Strategies", "Time Management"],
      category: "Strategy",
      isNew: false
    },
    {
      title: "DSA Mastery Hub",
      description: "Complete roadmap for mastering Data Structures and Algorithms with interactive learning",
      icon: Database,
      href: "/dsa-mastery",
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      bgGradient: "from-violet-50 via-purple-50 to-indigo-50",
      features: ["Interactive Roadmap", "Practice Problems", "Visual Learning", "Progress Tracking"],
      category: "Mastery",
      isNew: false
    },
    {
      title: "Resume Builder Pro",
      description: "Create ATS-friendly resumes optimized for FAANG and top tech companies",
      icon: Target,
      href: "/resume-tips",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgGradient: "from-green-50 via-emerald-50 to-teal-50",
      features: ["ATS Optimization", "FAANG Templates", "Skills Highlighting", "Expert Reviews"],
      category: "Career",
      isNew: false
    },
    {
      title: "Hackathon Guide",
      description: "Complete guide to winning hackathons with team formation, ideation, and execution strategies",
      icon: Rocket,
      href: "/hackathon-guide",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      bgGradient: "from-yellow-50 via-orange-50 to-red-50",
      features: ["Team Building", "Project Ideas", "Tech Stack Guide", "Pitch Strategies"],
      category: "Innovation",
      isNew: false
    }
  ];

  const futureFeatures = [
    {
      title: "Comprehensive Documentation",
      description: "Detailed guides and documentation for each tech stack, helping users understand implementation and contribute effectively",
      icon: FileText,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      features: ["Implementation Guides", "Contribution Guidelines", "Best Practices", "Code Examples"],
      timeline: "Q2 2025"
    },
    {
      title: "Coding Practice Arena",
      description: "Interactive coding challenges and DSA practice problems to strengthen students' technical skills",
      icon: Code2,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      features: ["Interactive Challenges", "Real-time Coding", "Skill Assessment", "Progress Tracking"],
      timeline: "Q3 2025"
    },
    {
      title: "Community Building Platform",
      description: "Dedicated community space for discussions, mentorship, peer support, and networking opportunities",
      icon: Users,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      features: ["Discussion Forums", "Mentorship Matching", "Peer Support", "Networking Events"],
      timeline: "Q3 2025"
    },
    {
      title: "Event Planning Suite",
      description: "Comprehensive tools to organize and manage webinars, coding competitions, bootcamps, and workshops",
      icon: Calendar,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      features: ["Event Management", "Registration System", "Live Streaming", "Analytics Dashboard"],
      timeline: "Q4 2025"
    },
    {
      title: "AI Resume Builder Automation",
      description: "AI-powered resume builder that auto-generates professional resumes based on user profiles and achievements",
      icon: Bot,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      features: ["AI Generation", "Profile Analysis", "ATS Optimization", "Career Goal Alignment"],
      timeline: "Q1 2026"
    }
  ];

  const categories = ["All", "Performance", "Learning", "Strategy", "Mastery", "Career", "Innovation"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <Navbar />
      <HeroSection />
      <StatsSection />
      
      {/* Enhanced Tools Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-secondary/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Smart Tools for Smart Students
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Supercharge your competitive programming journey with our AI-powered tools designed to accelerate your learning and maximize your potential.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`
                  transition-all duration-300 hover:scale-105
                  ${category === "All" 
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg" 
                    : "hover:bg-primary/10 hover:border-primary/30"
                  }
                `}
              >
                {category}
                {category === "All" && <Star className="ml-2 h-4 w-4" />}
              </Button>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <Link key={tool.title} to={tool.href} className="group block">
                <Card className={`
                  relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl
                  bg-gradient-to-br ${tool.bgGradient} border-2 border-transparent hover:border-white/20
                  backdrop-blur-sm group-hover:backdrop-blur-md
                `}>
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* New Badge */}
                  {tool.isNew && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white animate-pulse">
                        <Sparkles className="w-3 h-3 mr-1" />
                        NEW
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${tool.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <tool.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs opacity-70">
                        {tool.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {tool.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Button 
                      className={`
                        w-full bg-gradient-to-r ${tool.gradient} text-white 
                        group-hover:shadow-lg group-hover:scale-105 
                        transition-all duration-300 border-0
                      `}
                    >
                      <span>Explore Tool</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                       style={{ padding: '2px' }}>
                    <div className="w-full h-full bg-card rounded-lg" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl backdrop-blur-sm border border-white/10">
              <Trophy className="h-8 w-8 text-primary" />
              <div className="text-left">
                <h3 className="text-lg font-semibold">Ready to Level Up?</h3>
                <p className="text-muted-foreground">Join thousands of students already using our tools</p>
              </div>
              <Button className="bg-gradient-to-r from-primary to-secondary text-white">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Future Scope Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-secondary/10" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-accent to-primary rounded-xl shadow-lg">
                <Compass className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                Future Scope for NEXTFAANG
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover what's coming next on our roadmap. These exciting features will transform how students learn, practice, and succeed in competitive programming.
            </p>
          </div>

          {/* Future Features Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {futureFeatures.map((feature, index) => (
              <Card key={feature.title} className={`
                relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl
                bg-gradient-to-br ${feature.bgGradient} border-2 border-transparent hover:border-white/20
                backdrop-blur-sm group
              `}>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-accent to-primary text-white">
                    <Clock className="w-3 h-3 mr-1" />
                    {feature.timeline}
                  </Badge>
                </div>

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Status Button */}
                  <Button 
                    disabled
                    className={`
                      w-full bg-gradient-to-r ${feature.gradient} text-white opacity-75
                      cursor-not-allowed
                    `}
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Coming Soon</span>
                  </Button>
                </CardContent>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                     style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-card rounded-lg" />
                </div>
              </Card>
            ))}
          </div>

          {/* Roadmap Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border-2 border-accent/20 p-8">
              <CardContent className="pt-0">
                <Rocket className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Join Us on This Journey
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Be part of the future of competitive programming education. Stay updated with our progress and be the first to access these revolutionary features.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-secondary">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Join Community
                  </Button>
                  <Button size="lg" variant="outline" className="border-accent/30 hover:bg-accent/10">
                    <Globe className="mr-2 h-4 w-4" />
                    Follow Updates
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CPSection />
      <DSASection />
      <LiveCodingPreview />
      <CompanyShowcase />
      <CPAwarenessSection />
      <CommunitySection />
      
      {/* Floating Components */}
      <FloatingAIMentor />
      <EnhancedChatbot />
      <PlatformGuideMentor />
      <VisitorStats />
    </div>
  );
};

export default Index;
