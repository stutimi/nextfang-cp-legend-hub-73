import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Trophy, Code, Users, Bot, FileText, Star, TrendingUp, Globe, ExternalLink, Zap, Target, Laugh, BarChart3, Calendar, Gamepad2, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { DSASection } from "@/components/DSASection";
import { CPSection } from "@/components/CPSection";
import { CommunitySection } from "@/components/CommunitySection";
import { ContactForm } from "@/components/ContactForm";
import { Chatbot } from "@/components/Chatbot";
import { VisitorStats } from "@/components/VisitorStats";
import { CPAwarenessSection } from "@/components/CPAwarenessSection";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <StatsSection />
      
      <VisitorStats />
      
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
              Experience the power of <strong className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">NEXTFANG</strong> comprehensive learning ecosystem
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

            <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300 cursor-pointer h-full white-glow hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl group-hover:scale-110 transition-transform white-glow animate-pulse">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-blue-700 transition-colors white-text-shadow">📚 Career Tips & Blogs</CardTitle>
                    <CardDescription>Featured insights from industry experts</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 p-3 bg-gradient-to-r from-blue-50/10 to-blue-100/10 rounded-lg border border-blue-200/20">
                  <h4 className="font-medium text-sm mb-2 text-blue-300">Latest: "Google Interview Secrets"</h4>
                  <p className="text-xs text-muted-foreground mb-2">How to crack System Design rounds...</p>
                  <div className="text-xs text-blue-400 hover:underline cursor-pointer">Read more →</div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Weekly updates on interview tips, career guidance, and industry trends
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 animate-pulse">Weekly Posts</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 animate-pulse">Expert Tips</Badge>
                </div>
                <Button className="w-full button-3d bg-gradient-to-r from-blue-700 to-blue-800 text-white white-glow hover:scale-105 transition-transform duration-300" variant="outline">
                  Read Blogs
                </Button>
              </CardContent>
            </Card>

            <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300 cursor-pointer h-full white-glow hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform white-glow animate-pulse">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-purple-600 transition-colors white-text-shadow">💡 Interview Simulator</CardTitle>
                    <CardDescription>Real-time coding practice environment</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 bg-slate-900 rounded-lg p-3 border border-slate-700">
                  <div className="text-xs font-mono text-green-400 mb-1">// Two Sum Problem</div>
                  <div className="text-xs font-mono text-slate-300">function twoSum(nums, target) {</div>
                  <div className="text-xs font-mono text-slate-300 ml-4">const map = new Map();</div>
                  <div className="text-xs font-mono text-blue-400 ml-4 animate-pulse">|</div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Practice with real interview questions and get instant feedback
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 animate-pulse">Live Coding</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 animate-pulse">Auto-grading</Badge>
                </div>
                <Button className="w-full button-3d bg-gradient-to-r from-purple-500 to-purple-600 text-white white-glow hover:scale-105 transition-transform duration-300" variant="outline">
                  Start Practice
                </Button>
              </CardContent>
            </Card>

            <Card className="group card-3d hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300 cursor-pointer h-full white-glow hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl group-hover:scale-110 transition-transform white-glow animate-pulse">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-green-600 transition-colors white-text-shadow">🔔 Smart Reminders</CardTitle>
                    <CardDescription>Never miss your practice sessions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-green-50/10 rounded border-l-4 border-green-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs">Daily DSA Practice - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-blue-50/10 rounded border-l-4 border-blue-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-xs">Codeforces Contest - Tomorrow</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  AI-powered scheduling to maintain consistent practice habits
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 animate-pulse">AI Scheduling</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 animate-pulse">Push Notifications</Badge>
                </div>
                <Button className="w-full button-3d bg-gradient-to-r from-green-500 to-green-600 text-white white-glow hover:scale-105 transition-transform duration-300" variant="outline">
                  Set Reminders
                </Button>
              </CardContent>
            </Card>

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

        <section className="mb-16">
          <Card className="card-3d glass-morphism border-2 border-blue-200/20 white-glow hover:scale-[1.02] transition-transform duration-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl pulse-3d white-glow animate-pulse">
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

        <section className="mb-16">
          <Card className="card-3d glass-morphism border-2 border-blue-200/20 white-glow hover:scale-[1.02] transition-transform duration-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl pulse-3d white-glow animate-pulse">
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
                  <div key={country.country} className="legend-card p-6 bg-gradient-to-br from-blue-50/10 to-blue-100/10 border border-white/20 white-glow hover:scale-105 transition-transform duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
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
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-100/10 to-blue-50/10 rounded-xl border border-white/20 white-glow hover:scale-[1.02] transition-transform duration-300 animate-fade-in">
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

        <section className="mb-16">
          <Card className="card-3d glass-morphism border-2 border-blue-200/20 white-glow hover:scale-[1.02] transition-transform duration-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl pulse-3d white-glow animate-pulse">
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
                <div className="space-y-6">
                  <h3 className="font-bold text-2xl text-primary white-text-shadow animate-scale-in">🧠 Fascinating Facts</h3>
                  {[
                    { title: "🧠 The 'Red Coder' Status is Rarer Than You Think", desc: "On Codeforces, out of 1.3 million+ registered users, fewer than 300 are rated as 'International Grandmasters' (red coders). That's less than 0.03% of all users — more exclusive than getting into the Ivy League!" },
                    { title: "🚀 The Greatest Coder is Still in His 20s", desc: "Gennady 'tourist' Korotkevich from Belarus started winning global contests at age 11. He has won Google Code Jam, Facebook Hacker Cup, ICPC, IOI, AtCoder, and Topcoder Open — often more than once! He reached the maximum Codeforces rating ever: ~3850+." },
                    { title: "🖥️ CP Problems Power Real-World Tech", desc: "CP builds the exact skillset used in FANG interviews: problem-solving under time, space, and edge-case constraints. Many CP stars are now engineers at Google, Meta, Apple, or are building startups." },
                    { title: "🏛️ Some Countries Have National CP Training Camps", desc: "In China, Russia, and Korea, students attend full-time algorithm bootcamps from high school. These camps prepare them for Olympiads (IOI) — like how athletes train for the Olympics." }
                  ].map((fact, index) => (
                    <div key={fact.title} className="card-3d p-4 bg-blue-50/5 rounded-xl border border-blue-200/20 white-glow hover:scale-105 transition-transform duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="font-medium text-primary white-text-shadow animate-scale-in">{fact.title}</div>
                      <div className="text-sm text-muted-foreground mt-2 leading-relaxed animate-fade-in">{fact.desc}</div>
                    </div>
                  ))}
                </div>
                
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
                    <div key={joke.setup} className="card-3d p-4 bg-blue-50/5 rounded-xl border border-blue-200/20 white-glow hover:scale-105 transition-transform duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="font-medium text-accent mb-2 white-text-shadow animate-scale-in">{joke.setup}</div>
                      <div className="text-sm text-muted-foreground italic animate-fade-in">{joke.punchline}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="roadmap">
          <DSASection />
        </section>
        <section id="demo">
          <CPSection />
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
        <Chatbot />
      </div>
    </div>
  );
};

export default Index;
