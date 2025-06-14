import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Target, BookOpen, Lightbulb, Globe, Star, Gamepad2, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { DSASection } from "@/components/DSASection";
import { CPSection } from "@/components/CPSection";
import { CommunitySection } from "@/components/CommunitySection";
import { ContactForm } from "@/components/ContactForm";
import { EnhancedChatbot } from "@/components/EnhancedChatbot";
import { VisitorStats } from "@/components/VisitorStats";
import { CPAwarenessSection } from "@/components/CPAwarenessSection";
import { CompanyShowcase } from "@/components/CompanyShowcase";
import { EnhancedAIMentor } from "@/components/EnhancedAIMentor";
import { SkillAssessment } from "@/components/SkillAssessment";
import { LiveCodingPreview } from "@/components/LiveCodingPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <StatsSection />
      
      <VisitorStats />
      
      <CompanyShowcase />
      
      <LiveCodingPreview />
      
      <SkillAssessment />
      
      <div className="container mx-auto px-4 py-12 space-y-16">
        <section id="features" className="scroll-mt-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-blue-900/50 border-blue-400/30 text-blue-300 hover:bg-blue-800/60 backdrop-blur-sm">
              <Star className="h-4 w-4 mr-2" />
              Interactive Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              Smart Tools for Smart Students
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Experience the power of <strong className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">NEXTFAANG's</strong> comprehensive learning ecosystem - Building India's First LGM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300 cursor-pointer h-full white-glow hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform white-glow animate-pulse">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors white-text-shadow">📊 Live Progress Charts</CardTitle>
                    <CardDescription>Real-time tracking of your CP journey</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 p-4 bg-gradient-to-r from-blue-50/10 to-blue-100/10 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>DSA Progress</span>
                      <span className="text-blue-400">78%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full animate-pulse" style={{width: "78%"}}></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Track your daily progress, streak counts, and skill improvements
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 animate-pulse">Live Charts</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 animate-pulse">Streak Tracking</Badge>
                </div>
                <Button className="w-full button-3d bg-gradient-to-r from-blue-500 to-blue-600 text-white white-glow hover:scale-105 transition-transform duration-300" variant="outline">
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            <Link to="/dsa-mastery">
              <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300 cursor-pointer h-full white-glow hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl group-hover:scale-110 transition-transform white-glow animate-pulse">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors white-text-shadow">🧩 Interactive CP Roadmap</CardTitle>
                      <CardDescription>Step-by-step guided learning path</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 space-y-2">
                    {["Arrays & Strings", "Two Pointers", "Dynamic Programming"].map((topic, index) => (
                      <div key={topic} className={`p-2 rounded border-l-4 text-xs transition-all hover:scale-105 ${
                        index === 0 ? "border-green-500 bg-green-50/10" : 
                        index === 1 ? "border-blue-500 bg-blue-50/10" : 
                        "border-gray-500 bg-gray-50/10"
                      }`}>
                        <div className="flex justify-between">
                          <span>{topic}</span>
                          <span className={index === 0 ? "text-green-400" : index === 1 ? "text-blue-400" : "text-gray-400"}>
                            {index === 0 ? "✓" : index === 1 ? "→" : "○"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Collapsible cards for each topic with practice problems
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 animate-pulse">Guided Path</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 animate-pulse">Progress Sync</Badge>
                  </div>
                  <Button className="w-full button-3d bg-gradient-to-r from-blue-600 to-blue-700 text-white white-glow hover:scale-105 transition-transform duration-300" variant="outline">
                    Explore Roadmap
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/cp-dictionary">
              <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300 cursor-pointer h-full white-glow hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl group-hover:scale-110 transition-transform white-glow animate-pulse">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-blue-700 transition-colors white-text-shadow">📚 CP Dictionary</CardTitle>
                      <CardDescription>Comprehensive programming terms guide</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 p-3 bg-gradient-to-r from-blue-50/10 to-blue-100/10 rounded-lg border border-blue-200/20">
                    <h4 className="font-medium text-sm mb-2 text-blue-300">Featured: "Dynamic Programming"</h4>
                    <p className="text-xs text-muted-foreground mb-2">Method for solving complex problems by...</p>
                    <div className="text-xs text-blue-400 hover:underline cursor-pointer">Learn more →</div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Search through hundreds of CP terms with examples and explanations
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 animate-pulse">Searchable</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 animate-pulse">Examples</Badge>
                  </div>
                  <Button className="w-full button-3d bg-gradient-to-r from-blue-700 to-blue-800 text-white white-glow hover:scale-105 transition-transform duration-300" variant="outline">
                    Browse Dictionary
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/cp-tricks-tips">
              <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300 cursor-pointer h-full white-glow hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform white-glow animate-pulse">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-purple-600 transition-colors white-text-shadow">💡 CP Tricks & Tips</CardTitle>
                      <CardDescription>Master techniques and strategies</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 bg-slate-900 rounded-lg p-3 border border-slate-700">
                    <div className="text-xs font-mono text-green-400 mb-1">// Fast I/O Trick</div>
                    <div className="text-xs font-mono text-slate-300">ios_base::sync_with_stdio(false);</div>
                    <div className="text-xs font-mono text-slate-300">cin.tie(NULL);</div>
                    <div className="text-xs font-mono text-blue-400 animate-pulse">// 10x faster input!</div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn proven techniques to solve problems faster and more efficiently
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 animate-pulse">Pro Tips</Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 animate-pulse">Code Templates</Badge>
                  </div>
                  <Button className="w-full button-3d bg-gradient-to-r from-purple-500 to-purple-600 text-white white-glow hover:scale-105 transition-transform duration-300" variant="outline">
                    Learn Tricks
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/language-translation">
              <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300 cursor-pointer h-full white-glow hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl group-hover:scale-110 transition-transform white-glow animate-pulse">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-green-600 transition-colors white-text-shadow">🌍 Language Translation</CardTitle>
                      <CardDescription>Convert code between languages</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-green-50/10 rounded border-l-4 border-green-500">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-xs">C++ → Python</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-blue-50/10 rounded border-l-4 border-blue-500">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-xs">Java → JavaScript</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    See algorithms implemented in different programming languages
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 animate-pulse">Multi-Language</Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 animate-pulse">Side by Side</Badge>
                  </div>
                  <Button className="w-full button-3d bg-gradient-to-r from-green-500 to-green-600 text-white white-glow hover:scale-105 transition-transform duration-300" variant="outline">
                    Translate Code
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300 cursor-pointer h-full white-glow hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl group-hover:scale-110 transition-transform white-glow animate-pulse">
                    <Gamepad2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-red-600 transition-colors white-text-shadow">🎮 CP Battle Arena</CardTitle>
                    <CardDescription>Compete with peers in real-time</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 bg-gradient-to-r from-red-50/10 to-orange-50/10 rounded-lg p-3 border border-red-200/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-red-400">Live Battle</span>
                    <span className="text-xs text-orange-400">⏱️ 25:30</span>
                  </div>
                  <div className="text-xs text-muted-foreground">You vs @coder_ninja</div>
                  <div className="text-xs text-green-400 mt-1">🟢 Connected to battle room</div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Real-time competitive programming battles with live leaderboards
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-red-100 text-red-800 animate-pulse">Live Battles</Badge>
                  <Badge variant="secondary" className="bg-red-100 text-red-800 animate-pulse">Leaderboards</Badge>
                </div>
                <Button className="w-full button-3d bg-gradient-to-r from-red-500 to-red-600 text-white white-glow hover:scale-105 transition-transform duration-300" variant="outline">
                  Join Battle
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="roadmap">
          <DSASection />
        </section>
        
        <CPAwarenessSection />
        
        <section id="community">
          <CommunitySection />
        </section>
        
        <section id="contact">
          <ContactForm />
        </section>
        
        <section className="text-center">
          <Link to="/resources">
            <Card className="card-3d glass-morphism border-2 border-blue-200/20 p-12 cursor-pointer hover:border-blue-300/40 transition-all white-glow hover:scale-105 duration-500">
              <CardContent className="pt-0">
                <div className="floating-3d mb-6 white-glow animate-pulse">
                  <Globe className="h-16 w-16 text-primary mx-auto" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gradient white-text-shadow animate-scale-in">
                  Explore All Resources
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed white-text-shadow animate-fade-in">
                  Comprehensive collection of competitive programming resources, tutorials, and practice platforms
                </p>
                <Button size="lg" className="button-3d bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-lg px-8 py-4 white-glow hover:scale-110 transition-all duration-300 animate-scale-in">
                  <ExternalLink className="h-5 w-5 mr-2 animate-pulse" />
                  View All Resources
                </Button>
              </CardContent>
            </Card>
          </Link>
        </section>
      </div>
      
      <div data-chatbot>
        <EnhancedChatbot />
      </div>
      
      <EnhancedAIMentor />
    </div>
  );
};

export default Index;
