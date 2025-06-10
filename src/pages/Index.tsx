import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Trophy, Code, Users, Bot, FileText, Star, TrendingUp, Globe, ExternalLink, Zap, Target, Laugh } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { DSASection } from "@/components/DSASection";
import { CPSection } from "@/components/CPSection";
import { CommunitySection } from "@/components/CommunitySection";
import { ContactForm } from "@/components/ContactForm";
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
            <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 cursor-pointer h-full white-glow hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl group-hover:scale-110 transition-transform white-glow animate-pulse">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors white-text-shadow animate-fade-in">DSA Mastery</CardTitle>
                    <CardDescription>Master DSA to Crack Any Interview</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://i.postimg.cc/SN9W2vpM/Screenshot-2025-06-10-134124.png" 
                  alt="DSA Mastery"
                  className="w-full h-32 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Structured semester-wise plan from Arrays to DP
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="animate-pulse">GFG</Badge>
                  <Badge variant="secondary" className="animate-pulse">TUF</Badge>
                  <Badge variant="secondary" className="animate-pulse">NeetCode</Badge>
                  <Badge variant="secondary" className="animate-pulse">CodingNinja</Badge>
                </div>
                <Button className="w-full button-3d bg-gradient-to-r from-primary to-secondary white-glow hover:scale-105 transition-transform duration-300" variant="outline">
                  Start DSA Journey
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/cp-contributors">
            <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/30 cursor-pointer h-full white-glow hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-secondary to-accent rounded-xl group-hover:scale-110 transition-transform white-glow animate-pulse">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-secondary transition-colors white-text-shadow animate-fade-in">Competitive Programming</CardTitle>
                    <CardDescription>Journey to Legendary Grandmaster</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://i.postimg.cc/Zn0PfMSZ/Screenshot-2025-06-10-213117.png" 
                  alt="Competitive Programming"
                  className="w-full h-32 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  From 0 to LGM - Complete CP roadmap for Indians
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="animate-pulse">Codeforces</Badge>
                  <Badge variant="secondary" className="animate-pulse">AtCoder</Badge>
                  <Badge variant="secondary" className="animate-pulse">ICPC</Badge>
                </div>
                <Button className="w-full button-3d bg-gradient-to-r from-secondary to-accent white-glow hover:scale-105 transition-transform duration-300" variant="outline">
                  View Top Contributors
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/hackathon-guide">
            <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30 cursor-pointer h-full white-glow hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl group-hover:scale-110 transition-transform white-glow animate-pulse">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors white-text-shadow animate-fade-in">Hackathon Guide</CardTitle>
                    <CardDescription>Unstop Focus & PPI Prep</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://i.postimg.cc/sg9rfnk3/hackathon.webp" 
                  alt="Hackathon Guide"
                  className="w-full h-32 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Win hackathons and secure PPIs with our guide
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="animate-pulse">Unstop</Badge>
                  <Badge variant="secondary" className="animate-pulse">Devfolio</Badge>
                  <Badge variant="secondary" className="animate-pulse">Hack2Skill</Badge>
                </div>
                <Button className="w-full button-3d bg-gradient-to-r from-accent to-primary white-glow hover:scale-105 transition-transform duration-300" variant="outline">
                  Explore Hackathons
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 cursor-pointer h-full white-glow hover:scale-105">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl group-hover:scale-110 transition-transform white-glow animate-pulse">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors white-text-shadow animate-fade-in">FANG Toolkit</CardTitle>
                  <CardDescription>Build Like a Pro, Crack Like a Legend</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <img 
                src="https://i.postimg.cc/fWp52mHs/th.jpg" 
                alt="FANG Toolkit"
                className="w-full h-32 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
              />
              <p className="text-sm text-muted-foreground mb-4">
                FANG-ready projects and interview preparation
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="animate-pulse">LLD</Badge>
                <Badge variant="secondary" className="animate-pulse">HLD</Badge>
                <Badge variant="secondary" className="animate-pulse">System Design</Badge>
              </div>
              <Button className="w-full button-3d bg-gradient-to-r from-primary to-secondary white-glow hover:scale-105 transition-transform duration-300" variant="outline">
                Build Projects
              </Button>
            </CardContent>
          </Card>

          <Link to="/resume-tips">
            <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/30 cursor-pointer h-full white-glow hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-secondary to-accent rounded-xl group-hover:scale-110 transition-transform white-glow animate-pulse">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-secondary transition-colors white-text-shadow animate-fade-in">Diamond Resume</CardTitle>
                    <CardDescription>AI-Powered Resume Analyzer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://i.postimg.cc/5NqJf4QX/infographic-resume-template-header.png" 
                  alt="Diamond Resume"
                  className="w-full h-32 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  College student hacks for FANG-ready resumes
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="animate-pulse">ATS Bypass</Badge>
                  <Badge variant="secondary" className="animate-pulse">Keywords</Badge>
                  <Badge variant="secondary" className="animate-pulse">Templates</Badge>
                </div>
                <Button className="w-full button-3d bg-gradient-to-r from-secondary to-accent white-glow hover:scale-105 transition-transform duration-300" variant="outline">
                  Analyze Resume
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30 cursor-pointer h-full white-glow hover:scale-105">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl group-hover:scale-110 transition-transform white-glow animate-pulse">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg group-hover:text-accent transition-colors white-text-shadow animate-fade-in">AI Guide</CardTitle>
                  <CardDescription>Personal Coding Companion</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <img 
                src="https://i.postimg.cc/Jz8nDtRb/3d-artificial-intelligence-ai-image-humanoid-head-robotic-face-analyzing-flow-big-data.jpg" 
                alt="AI Guide"
                className="w-full h-32 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
              />
              <p className="text-sm text-muted-foreground mb-4">
                GPT-powered roadmap and problem suggestions
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="animate-pulse">Roadmap Gen</Badge>
                <Badge variant="secondary" className="animate-pulse">Problem Rec</Badge>
                <Badge variant="secondary" className="animate-pulse">24/7 Support</Badge>
              </div>
              <Button 
                className="w-full button-3d bg-gradient-to-r from-accent to-primary white-glow hover:scale-105 transition-transform duration-300" 
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

        {/* Top Practice Platforms Section with Logos */}
        <section className="mb-16">
          <Card className="card-3d glass-morphism border-2 border-primary/20 white-glow hover:scale-[1.02] transition-transform duration-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl pulse-3d white-glow animate-pulse">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl md:text-4xl text-gradient white-text-shadow animate-scale-in">
                    🏆 Top Practice Platforms
                  </CardTitle>
                  <CardDescription className="text-lg mt-2 animate-fade-in">
                    Master competitive programming on these platforms
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className="legend-card p-4 text-center white-glow hover:scale-110 transition-transform duration-300 animate-fade-in">
                  <img src="https://i.postimg.cc/zBGJrPTM/icons8-geeksforgeek-48-1.png" alt="GeeksforGeeks" className="h-12 w-12 mx-auto mb-2 animate-pulse" />
                  <div className="text-sm font-medium white-text-shadow">GeeksforGeeks</div>
                </div>
                <div className="legend-card p-4 text-center white-glow hover:scale-110 transition-transform duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
                  <img src="https://i.postimg.cc/rsYbrf0D/icons8-leetcode-24-1.png" alt="LeetCode" className="h-12 w-12 mx-auto mb-2 animate-pulse" />
                  <div className="text-sm font-medium white-text-shadow">LeetCode</div>
                </div>
                <div className="legend-card p-4 text-center white-glow hover:scale-110 transition-transform duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <img src="https://i.postimg.cc/C1ZY6nGn/icons8-codeforces-24-1.png" alt="Codeforces" className="h-12 w-12 mx-auto mb-2 animate-pulse" />
                  <div className="text-sm font-medium white-text-shadow">Codeforces</div>
                </div>
                <div className="legend-card p-4 text-center white-glow hover:scale-110 transition-transform duration-300 animate-fade-in" style={{animationDelay: '0.3s'}}>
                  <div className="h-12 w-12 mx-auto mb-2 bg-orange-500 rounded flex items-center justify-center text-white font-bold animate-pulse">CC</div>
                  <div className="text-sm font-medium white-text-shadow">CodeChef</div>
                </div>
                <div className="legend-card p-4 text-center white-glow hover:scale-110 transition-transform duration-300 animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <img src="https://i.postimg.cc/zDd5zwjh/th-2.jpg" alt="AtCoder" className="h-12 w-12 mx-auto mb-2 rounded animate-pulse" />
                  <div className="text-sm font-medium white-text-shadow">AtCoder</div>
                </div>
                <div className="legend-card p-4 text-center white-glow hover:scale-110 transition-transform duration-300 animate-fade-in" style={{animationDelay: '0.5s'}}>
                  <img src="https://i.postimg.cc/1tyzV92Y/coding-ninjas-logo-white.png" alt="Coding Ninjas" className="h-12 w-12 mx-auto mb-2 animate-pulse" />
                  <div className="text-sm font-medium white-text-shadow">Coding Ninjas</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Country-wise Performance Section */}
        <section className="mb-16">
          <Card className="card-3d glass-morphism border-2 border-secondary/20 white-glow hover:scale-[1.02] transition-transform duration-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-secondary to-accent rounded-xl pulse-3d white-glow animate-pulse">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl md:text-4xl text-gradient white-text-shadow animate-scale-in">
                    🌍 Country-Wise Competitive Programming Performance
                  </CardTitle>
                  <CardDescription className="text-lg mt-2 animate-fade-in">
                    Global rankings by competition wins and achievements
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { rank: "🥇 1", country: "China", flag: "https://i.postimg.cc/q71SV3WL/icons8-china-48.png", achievements: "ICPC Champions (multiple wins since 2000), TCO: 22 titles, IMO: 24 overall team golds (most ever)" },
                  { rank: "🥈 2", country: "Russia", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png", achievements: "ICPC Champions (multiple wins since 2000), TCO: 8 titles, IMO: 16 team golds" },
                  { rank: "🥉 3", country: "USA", flag: "https://i.postimg.cc/wMnch6ZL/icons8-united-states-48.png", achievements: "ICPC: 17 wins (most all-time), IMO: 9 team golds, Strong presence in Code Jam and Hacker Cup" },
                  { rank: "4", country: "Poland", flag: "https://i.postimg.cc/gj3QXBBz/icons8-poland-48.png", achievements: "TCO: 15 titles, Regular ICPC World Finalists, Known for high average ratings on Codeforces" },
                  { rank: "5", country: "Japan", flag: "https://i.postimg.cc/mZq7tgQg/icons8-japan-flag-64.png", achievements: "Strong in AtCoder, ICPC, and Olympiads, Home of many red coders and CP platform creators" },
                  { rank: "6", country: "South Korea", flag: "https://i.postimg.cc/QtzS8k8X/icons8-south-korea-48.png", achievements: "Top finishes in ICPC and IOI, 3 perfect team golds in IMO, Consistent individual red coders" },
                  { rank: "7", country: "Belarus", flag: "https://i.postimg.cc/7Y4Dwgf1/icons8-belarus-48.png", achievements: "7 TCO titles, Home of Gennady Korotkevich (tourist) – highest-rated coder in history" },
                  { rank: "8", country: "Indonesia", flag: "https://i.postimg.cc/W1P81wZn/icons8-indonesia-48.png", achievements: "8 TCO titles, Rapid growth in international coding competitions" },
                  { rank: "9", country: "India", flag: "https://i.postimg.cc/ZnC76YYx/icons8-india-48.png", achievements: "ICPC World Finalist teams regularly, TCO: 2 titles, 30+ IOI medals, top CP community size" }
                ].map((country, index) => (
                  <div key={country.country} className="legend-card p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/20 white-glow hover:scale-105 transition-transform duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex items-center gap-3 mb-4">
                      <img src={country.flag} alt={`${country.country} flag`} className="h-8 w-8 rounded animate-pulse" />
                      <div>
                        <div className="font-bold text-lg white-text-shadow">{country.rank} {country.country}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{country.achievements}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl border border-white/20 white-glow hover:scale-[1.02] transition-transform duration-300 animate-fade-in">
                <h4 className="font-bold text-lg mb-2 white-text-shadow animate-scale-in">📝 Reference Summary:</h4>
                <p className="text-sm text-muted-foreground leading-relaxed animate-fade-in">
                  "China and Russia dominate the global competitive programming scene with consistent victories in ICPC, TCO, and IMO. While the USA has a historic lead in ICPC, Poland and Japan show strength in algorithmic contests like Topcoder and AtCoder. India, despite massive participation, is still developing a gold-standard legacy, with growing impact in ICPC and Olympiads."
                </p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-primary white-text-shadow animate-fade-in">Special Mention: Shreyan Ray (IIT Kharagpur) - Currently holds India Rank #1 among active participants, Codeforces team member confirmed recently.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Fun Facts & Jokes Section */}
        <section className="mb-16">
          <Card className="card-3d glass-morphism border-2 border-accent/20 white-glow hover:scale-[1.02] transition-transform duration-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl pulse-3d white-glow animate-pulse">
                  <Laugh className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl md:text-4xl text-gradient white-text-shadow animate-scale-in">
                    💡 Fun Facts & CP Jokes
                  </CardTitle>
                  <CardDescription className="text-lg mt-2 animate-fade-in">
                    Fascinating insights and nerdy humor from the CP world
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Fun Facts */}
                <div className="space-y-6">
                  <h3 className="font-bold text-2xl text-primary white-text-shadow animate-scale-in">🧠 Fascinating Facts</h3>
                  {[
                    { title: "🧠 The 'Red Coder' Status is Rarer Than You Think", desc: "On Codeforces, out of 1.3 million+ registered users, fewer than 300 are rated as 'International Grandmasters' (red coders). That's less than 0.03% of all users — more exclusive than getting into the Ivy League!" },
                    { title: "🚀 The Greatest Coder is Still in His 20s", desc: "Gennady 'tourist' Korotkevich from Belarus started winning global contests at age 11. He has won Google Code Jam, Facebook Hacker Cup, ICPC, IOI, AtCoder, and Topcoder Open — often more than once! He reached the maximum Codeforces rating ever: ~3850+." },
                    { title: "🖥️ CP Problems Power Real-World Tech", desc: "CP builds the exact skillset used in FANG interviews: problem-solving under time, space, and edge-case constraints. Many CP stars are now engineers at Google, Meta, Apple, or are building startups." },
                    { title: "🏛️ Some Countries Have National CP Training Camps", desc: "In China, Russia, and Korea, students attend full-time algorithm bootcamps from high school. These camps prepare them for Olympiads (IOI) — like how athletes train for the Olympics." }
                  ].map((fact, index) => (
                    <div key={fact.title} className="card-3d p-4 bg-primary/5 rounded-xl border border-primary/20 white-glow hover:scale-105 transition-transform duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="font-medium text-primary white-text-shadow animate-scale-in">{fact.title}</div>
                      <div className="text-sm text-muted-foreground mt-2 leading-relaxed animate-fade-in">{fact.desc}</div>
                    </div>
                  ))}
                </div>
                
                {/* CP Jokes */}
                <div className="space-y-6">
                  <h3 className="font-bold text-2xl text-accent white-text-shadow animate-scale-in">🤣 CP Jokes</h3>
                  {[
                    { setup: "Why did the C++ programmer get stuck in an infinite loop?", punchline: "Because he kept thinking: while(!success) try_again();" },
                    { setup: "Why don't competitive programmers get invited to parties?", punchline: "Because they always optimize for minimum time and space." },
                    { setup: "What's a competitive programmer's favorite type of relationship?", punchline: "A binary one – it's either 0 or 1!" },
                    { setup: "How do competitive programmers flirt?", punchline: "\"You must be O(1), because you've got constant time access to my heart.\"" },
                    { setup: "Why did the DP solution break up with the greedy one?", punchline: "Because it had better memory and looked ahead!" },
                    { setup: "What's a CP coder's worst nightmare?", punchline: "Segmentation fault… on line 213… during a live contest… And no test case fails locally." }
                  ].map((joke, index) => (
                    <div key={joke.setup} className="card-3d p-4 bg-accent/5 rounded-xl border border-accent/20 white-glow hover:scale-105 transition-transform duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="font-medium text-accent mb-2 white-text-shadow animate-scale-in">{joke.setup}</div>
                      <div className="text-sm text-muted-foreground italic animate-fade-in">{joke.punchline}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <DSASection />
        <CPSection />
        <CommunitySection />
        
        {/* Contact Form Section */}
        <ContactForm />
        
        {/* Resources Section Link */}
        <section className="text-center">
          <Link to="/resources">
            <Card className="card-3d glass-morphism border-2 border-primary/20 p-12 cursor-pointer hover:border-primary/40 transition-all white-glow hover:scale-105 duration-500">
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
                <Button size="lg" className="button-3d bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent text-lg px-8 py-4 white-glow hover:scale-110 transition-all duration-300 animate-scale-in">
                  <ExternalLink className="h-5 w-5 mr-2 animate-pulse" />
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
