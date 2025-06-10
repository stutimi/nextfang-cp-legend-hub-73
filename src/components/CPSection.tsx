import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Globe, Star, History, Users, Award, ExternalLink, BookOpen } from "lucide-react";

const cpLegends = [
  {
    name: "Gennady \"tourist\" Korotkevich",
    country: "Belarus",
    flag: "🇧🇾",
    article: "https://codeforces.com/blog/entry/73894",
    rank: 1,
    title: "GOAT",
    description: "Youngest-ever IOI gold medalist (2012); 5× Codeforces World Champion; multiple ACM ICPC finals and Topcoder Open champion. Leads algorithm research at Google Research.",
    gradient: "from-primary/20 to-accent/20",
    borderColor: "border-primary/40",
    image: "https://i.postimg.cc/Sx3FTRv5/Screenshot-2025-06-10-150038.png"
  },
  {
    name: "Petr Mitrichev",
    country: "Russia", 
    flag: "🇷🇺",
    article: "https://codeforces.com/blog/entry/16517",
    rank: 2,
    title: "Legend",
    description: "Multiple Topcoder Open victories; winner at IOI and numerous Codeforces marathons. Senior Algorithm Engineer at Google.",
    gradient: "from-muted/20 to-secondary/20",
    borderColor: "border-muted/40",
    image: "https://i.postimg.cc/k41DhYjJ/Screenshot-2025-06-10-150353.png"
  },
  {
    name: "Benq (Benjamin Qi)",
    country: "Japan",
    flag: "🇯🇵", 
    article: "https://codeforces.com/blog/entry/15547",
    rank: 3,
    title: "Master",
    description: "Dominant on platforms like Codeforces and AtCoder; frequent GYM victor. Software engineer at a top-tier tech firm.",
    gradient: "from-accent/20 to-primary/20",
    borderColor: "border-accent/40",
    image: "https://i.postimg.cc/9Qw7v2TD/883337-vertical-japanese-flag-wallpapers-1920x1200.jpg"
  },
  {
    name: "ecnerwala (Brian Dean)",
    country: "USA",
    flag: "🇺🇸",
    article: "https://codeforces.com/blog/entry/16004",
    rank: 4,
    title: "Icon",
    description: "Consistently ranked top across Codeforces, AtCoder, Topcoder. Researcher in formal verification / proof assistants.",
    gradient: "from-primary/20 to-secondary/20",
    borderColor: "border-primary/40",
    image: "https://i.postimg.cc/Vk9D3XXr/unnamed.jpg"
  },
  {
    name: "rng_58 (Petr Evdakov)",
    country: "Japan",
    flag: "🇯🇵",
    article: "https://codeforces.com/blog/entry/15683", 
    rank: 5,
    title: "Genius",
    description: "High-ranking coder on Codeforces and AtCoder. Engineer role at a leading company. Active in algorithmic research.",
    gradient: "from-secondary/20 to-accent/20",
    borderColor: "border-secondary/40",
    image: "https://i.postimg.cc/6qh4wVfq/flag-japan-527804-853.avif"
  }
];

const topIndianProgrammers = [
  {
    name: "Harsha \"humblefool\" Suryanarayana",
    handle: "humblefool",
    platform: "Topcoder",
    rank: "🥇 Legend",
    description: "First Indian in Google Code Jam Final (2008); two-time Topcoder Open finalist; highest-rated Indian coder at his time. Revered as \"India's greatest coder.\"",
    country: "🇮🇳",
    image: "https://i.postimg.cc/d0p5TCZ4/maxresdefault-2.jpg",
    flagImage: "https://i.postimg.cc/qMG0XJL8/t-500x300-3.jpg"
  },
  {
    name: "Utkarsh Gupta (demoralizer)",
    handle: "demoralizer",
    platform: "Codeforces",
    rank: "🥈 Grandmaster",
    description: "International Grandmaster on Codeforces; peak 2500+. India's top in multiple Google Kick Start events; Code Jam finalist. Engineer at Google.",
    country: "🇮🇳",
    image: "https://i.postimg.cc/j26Vcbpw/unnamed-1.jpg",
    flagImage: "https://i.postimg.cc/qMG0XJL8/t-500x300-3.jpg"
  },
  {
    name: "Priyansh Agarwal",
    handle: "priyansh31dec",
    platform: "CodeChef",
    rank: "🥉 Master",
    description: "6★ on CodeChef; Master on Codeforces. ICPC World Finalist; achieved All‑India #1 in Google Kick Start. Creates CP tutorials.",
    country: "🇮🇳",
    image: "https://i.postimg.cc/fR3qCZnH/Fv-H-JWGa-IAE5-Nt-F.jpg",
    flagImage: "https://i.postimg.cc/qMG0XJL8/t-500x300-3.jpg"
  },
  {
    name: "Udit Sanghi",
    handle: "udit_sanghi",
    platform: "Codeforces",
    rank: "🏅 Red Coder",
    description: "Silver medal at IOI 2020; bronze at APIO 2020. ~2476 rating — youngest Red Coder in India. Considered a future star.",
    country: "🇮🇳",
    image: "https://i.postimg.cc/NG203Cq5/udit-sanghi.jpg",
    flagImage: "https://i.postimg.cc/qMG0XJL8/t-500x300-3.jpg"
  },
  {
    name: "Kshitij Sodani",
    handle: "kshitij_sodani",
    platform: "CodeChef",
    rank: "🏅 Rising Star",
    description: "Bronze at IOI 2020; represented India at IOI 2021. Held India's #1 on CodeChef Junior; India #2 on CF (rating ~2619). Heading to MIT.",
    country: "🇮🇳",
    image: "https://i.postimg.cc/Y28hfLHx/th-1.jpg",
    flagImage: "https://i.postimg.cc/qMG0XJL8/t-500x300-3.jpg"
  }
];

const evolutionTimeline = [
  {
    period: "1970s-1980s",
    title: "The Birth",
    description: "ACM ICPC (1970) started at Texas A&M, grew international by 1980s using Pascal, Fortran, and C",
    gradient: "from-primary/20 to-accent/20"
  },
  {
    period: "1990s", 
    title: "Academic Growth",
    description: "ICPC became prestigious, top universities started training teams, early Online Judges appeared (PKU, UVa)",
    gradient: "from-accent/20 to-secondary/20"
  },
  {
    period: "2000s",
    title: "Online Revolution", 
    description: "TopCoder (2001), Codeforces (2009), CodeChef (2009) revolutionized CP with online contests and rating systems",
    gradient: "from-secondary/20 to-muted/20"
  },
  {
    period: "2010s-2020s",
    title: "Globalization",
    description: "Google Code Jam, Facebook Hacker Cup, educational content, and global participation explosion",
    gradient: "from-muted/20 to-primary/20"
  }
];

export const CPSection = () => {
  return (
    <section id="cp" className="py-20 relative overflow-hidden">
      {/* Background with 3D elements */}
      <div className="absolute inset-0 virtual-stage opacity-20"></div>
      <div className="absolute top-20 left-10 floating-3d">
        <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full opacity-30"></div>
      </div>
      <div className="absolute bottom-20 right-10 floating-3d" style={{animationDelay: '2s'}}>
        <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 slide-in-3d">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Journey to Legendary Grandmaster Starts Here
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Complete guide to Competitive Programming - from 0 to LGM, understanding the history, legends, and building the future of Indian CP
          </p>
        </div>

        {/* Origins & Evolution Section with stunning design */}
        <Card className="mb-16 card-3d glass-morphism border-2 border-primary/20 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://i.postimg.cc/XYwYDr5q/61cc8a91532d9e30a0f7d49a-the-evolution-of-programming.png" 
              alt="Evolution of Programming"
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader className="relative z-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-xl pulse-3d">
                <History className="h-8 w-8 text-background" />
              </div>
              <div>
                <CardTitle className="text-3xl md:text-4xl text-gradient">
                  🏁 Origins & Evolution of Competitive Programming
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  From 1970s ACM ICPC to modern global CP platforms - understanding how competitive programming shaped the world
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {evolutionTimeline.map((era, index) => (
                <div key={era.period} className="slide-in-3d" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className={`p-6 rounded-2xl bg-gradient-to-br ${era.gradient} border border-white/20 card-3d h-full`}>
                    <div className="font-bold text-lg text-primary mb-2">🧬 {era.period}</div>
                    <div className="font-semibold text-foreground mb-2">{era.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {era.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top CP Legends with enhanced design */}
        <Card className="mb-16 card-3d glass-morphism border-2 border-secondary/20 overflow-hidden">
          <CardHeader className="relative">
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full -translate-y-20 -translate-x-20 floating-3d"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="p-3 bg-gradient-to-r from-secondary to-accent rounded-xl pulse-3d">
                <Star className="h-8 w-8 text-background" />
              </div>
              <div>
                <CardTitle className="text-3xl md:text-4xl text-gradient">
                  🌟 Top 5 Competitive Programming Legends
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  The greatest competitive programmers who shaped the sport and inspired millions
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cpLegends.map((legend, index) => (
                <div key={legend.name} className="slide-in-3d" style={{animationDelay: `${index * 0.15}s`}}>
                  <div className={`legend-card p-6 bg-gradient-to-br ${legend.gradient} ${legend.borderColor} border-2`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-6 w-6 text-primary" />
                        <span className="text-2xl font-bold">#{legend.rank}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{legend.flag}</span>
                        <Badge className="bg-gradient-to-r from-primary to-accent text-background">
                          {legend.title}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <img 
                        src={legend.image} 
                        alt={legend.name}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <h3 className="font-bold text-xl text-foreground">{legend.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {legend.description}
                      </p>
                      
                      <a 
                        href={legend.article} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full gap-2 button-3d bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-background">
                          <BookOpen className="h-4 w-4" />
                          Read Article
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Indian Programmers Section */}
        <Card className="mb-16 card-3d glass-morphism border-2 border-accent/20 overflow-hidden">
          <CardHeader className="relative">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl pulse-3d">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl md:text-4xl text-gradient">
                  🇮🇳 Top 5 Indian Competitive Programmers
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  India's finest competitive programming talents leading the way
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topIndianProgrammers.map((programmer, index) => (
                <div key={programmer.name} className="slide-in-3d" style={{animationDelay: `${index * 0.15}s`}}>
                  <div className="legend-card p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30 border-2">
                    <div className="flex items-center gap-2 mb-4">
                      <img 
                        src={programmer.flagImage} 
                        alt="India Flag"
                        className="w-8 h-6 object-cover rounded"
                      />
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500">#{index + 1}</Badge>
                    </div>
                    <img 
                      src={programmer.image} 
                      alt={programmer.name}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-bold text-xl mb-2">{programmer.name}</h3>
                    <div className="text-sm text-muted-foreground mb-2">@{programmer.handle}</div>
                    <Badge variant="secondary" className="mb-3">{programmer.rank}</Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">{programmer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Why CP Awareness section with enhanced visuals */}
        <Card className="mb-16 card-3d glass-morphism border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5 overflow-hidden">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl pulse-3d">
                <Trophy className="h-8 w-8 text-background" />
              </div>
              <div>
                <CardTitle className="text-3xl md:text-4xl text-gradient">
                  🎯 Why CP Awareness is Missing in India & How NEXTFANG Bridges It
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  Understanding the gap and our mission to create India's first Legendary Grandmaster
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="font-bold text-2xl text-red-400">🚫 Current Problems:</h3>
                <div className="space-y-4">
                  {[
                    { title: "Lack of Structured Guidance", desc: "No clear roadmap from 0 to LGM for Indian students" },
                    { title: "Tier 2/3 College Gap", desc: "Limited exposure and resources compared to IITs" },
                    { title: "Scattered Resources", desc: "Information spread across multiple platforms" },
                    { title: "No Indian LGM Yet", desc: "India hasn't produced a Legendary Grandmaster on Codeforces" }
                  ].map((problem, index) => (
                    <div key={problem.title} className="card-3d p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                      <div className="font-medium text-red-400">{problem.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">{problem.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="font-bold text-2xl text-green-400">✅ NEXTFANG Solutions:</h3>
                <div className="space-y-4">
                  {[
                    { title: "Centralized Learning Hub", desc: "All resources, roadmaps, and tools in one place" },
                    { title: "Tier 2/3 Focus", desc: "Specifically designed for non-IIT students" },
                    { title: "AI-Powered Guidance", desc: "Personalized roadmaps and problem recommendations" },
                    { title: "LGM Mission", desc: "Dedicated mission to create India's first LGM" }
                  ].map((solution, index) => (
                    <div key={solution.title} className="card-3d p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                      <div className="font-medium text-green-400">{solution.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">{solution.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-3d glass-morphism border-2 border-primary/20 p-12">
            <CardContent className="pt-0">
              <div className="floating-3d mb-6">
                <Trophy className="h-16 w-16 text-primary mx-auto" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Ready to Become a CP Legend?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands of aspiring competitive programmers on their journey to greatness. Master algorithms, solve challenging problems, and compete with the best!
              </p>
              <a 
                href="https://www.tle-eliminators.com/cp-sheet" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="button-3d bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-background text-lg px-8 py-4">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Start Your CP Journey
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
