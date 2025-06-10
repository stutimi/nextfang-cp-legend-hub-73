
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Globe, Star, History, Users, Award } from "lucide-react";

export const CPSection = () => {
  return (
    <section id="cp" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Journey to Legendary Grandmaster Starts Here</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Complete guide to Competitive Programming - from 0 to LGM, understanding the history, legends, and building the future of Indian CP
        </p>
      </div>

      {/* CP Origins & History */}
      <div className="space-y-8">
        <Card className="border-2 border-accent/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <History className="h-6 w-6 text-accent" />
              <CardTitle className="text-2xl">🏁 Origins & Evolution of Competitive Programming</CardTitle>
            </div>
            <CardDescription className="text-base">
              From 1970s ACM ICPC to modern global CP platforms - understanding how competitive programming shaped the world
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-primary/5 rounded-lg">
                <div className="font-bold text-primary mb-2">🏁 1970s-1980s: The Birth</div>
                <p className="text-sm text-muted-foreground">
                  ACM ICPC (1970) started at Texas A&M, grew international by 1980s using Pascal, Fortran, and C
                </p>
              </div>
              
              <div className="p-4 bg-secondary/5 rounded-lg">
                <div className="font-bold text-secondary mb-2">🧠 1990s: Academic Growth</div>
                <p className="text-sm text-muted-foreground">
                  ICPC became prestigious, top universities started training teams, early Online Judges appeared (PKU, UVa)
                </p>
              </div>
              
              <div className="p-4 bg-accent/5 rounded-lg">
                <div className="font-bold text-accent mb-2">🌍 2000s: Online Revolution</div>
                <p className="text-sm text-muted-foreground">
                  TopCoder (2001), Codeforces (2009), CodeChef (2009) revolutionized CP with online contests and rating systems
                </p>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg">
                <div className="font-bold text-primary mb-2">🌟 2010s-2020s: Globalization</div>
                <p className="text-sm text-muted-foreground">
                  Google Code Jam, Facebook Hacker Cup, educational content, and global participation explosion
                </p>
              </div>

              <div className="p-4 bg-secondary/5 rounded-lg">
                <div className="font-bold text-secondary mb-2">🤖 2020s: Modern Era</div>
                <p className="text-sm text-muted-foreground">
                  LeetCode bridges CP and interviews, AI doesn't replace CP, school curriculums adopt CP
                </p>
              </div>

              <div className="p-4 bg-accent/5 rounded-lg">
                <div className="font-bold text-accent mb-2">🇮🇳 India's Rise</div>
                <p className="text-sm text-muted-foreground">
                  Growing participation in ICPC, IOI, and online platforms. NEXTFANG aims to create India's first LGM
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* World's Top CP Legends */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">🌟 Top 10 Competitive Programming Legends</CardTitle>
            </div>
            <CardDescription className="text-base">
              The greatest competitive programmers who shaped the sport and inspired millions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-lg border border-yellow-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <div className="font-bold">1. Gennady "tourist" Korotkevich</div>
                    <Badge className="bg-yellow-500">GOAT</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Belarus • Peak CF: 4009 (first >4000) • 2× ICPC Champion • 6× IOI Gold • Multiple GCJ & Hackercup wins
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-gray-400/10 to-gray-500/10 rounded-lg border border-gray-400/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-gray-500" />
                    <div className="font-bold">2. Petr Mitrichev</div>
                    <Badge variant="secondary">Legend</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Russia • GCJ 2006 • 3× Hackercup • 4× TCO Algorithm • 2× IOI medals • ICPC Finals 2nd
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-orange-400/10 to-orange-500/10 rounded-lg border border-orange-400/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-orange-500" />
                    <div className="font-bold">3. Makoto "rng_58" Soejima</div>
                    <Badge style={{backgroundColor: '#cd7f32', color: 'white'}}>Master</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Japan • GCJ & Hackercup winner • Perfect IMO gold • One of only 3 to hold all major titles
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-red-400/10 to-red-500/10 rounded-lg border border-red-400/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-red-500" />
                    <div className="font-bold">4. Tiancheng "ACRush" Lou</div>
                    <Badge className="bg-red-500">Icon</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    China • 2× GCJ Champion (2008, 2009) • TCO Marathon winner • IOI gold • China's legend
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-400/10 to-blue-500/10 rounded-lg border border-blue-400/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-blue-500" />
                    <div className="font-bold">5. Jakub "meret" Pachocki</div>
                    <Badge className="bg-blue-500">Genius</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Poland • 2012 GCJ Champion • IOI silver • ICPC gold • Now Chief Scientist at OpenAI
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-green-400/10 to-green-500/10 rounded-lg border border-green-400/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-green-500" />
                    <div className="font-bold">6. Scott Wu</div>
                    <Badge className="bg-green-500">Prodigy</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    USA • 3× IOI gold (2014 overall winner) • ICPC gold with Harvard • GCJ 3rd (2021)
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-400/10 to-purple-500/10 rounded-lg border border-purple-400/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-purple-500" />
                    <div className="font-bold">7. Kamil "errichto" Debowski</div>
                    <Badge className="bg-purple-500">Educator</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Poland • GCJ 2018 2nd • ICPC bronze • IOI bronze • Popular CP educator and streamer
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-teal-400/10 to-teal-500/10 rounded-lg border border-teal-400/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-teal-500" />
                    <div className="font-bold">8. Andrew He</div>
                    <Badge className="bg-teal-500">Rising Star</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    USA • 2× IOI gold • Distributed Code Jam 2017 champion • ICPC 2nd with MIT
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-indigo-400/10 to-indigo-500/10 rounded-lg border border-indigo-400/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-indigo-500" />
                    <div className="font-bold">9. Andrey Lopatin</div>
                    <Badge className="bg-indigo-500">Champion</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Russia • 2× ICPC World Finals champion • 2009 TCO Algorithm winner • Russian CP pioneer
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-pink-400/10 to-pink-500/10 rounded-lg border border-pink-400/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-pink-500" />
                    <div className="font-bold">10. Mikhail Ipatov</div>
                    <Badge className="bg-pink-500">Consistent</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Russia • IOI gold • ICPC champion • 2018 Hackercup winner • Top-3 finisher in elite contests
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Indian CP Heroes */}
        <Card className="border-2 border-secondary/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-secondary" />
              <CardTitle className="text-2xl">🇮🇳 Top Indian Competitive Programming Heroes</CardTitle>
            </div>
            <CardDescription className="text-base">
              Celebrating India's finest competitive programmers who paved the way for future generations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <div className="font-bold">1. Harsha "humblefool" Suryanarayana</div>
                    <Badge className="bg-yellow-500">Legend ⭐</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    First Indian at GCJ World Finals (2008, 31st place) • 2× TCO finalist • India's first red coder • Passed away 2014 but legacy lives on
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-lg border border-blue-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-blue-500" />
                    <div className="font-bold">2. Hanit Banga (cerberus97)</div>
                    <Badge className="bg-blue-500">Current Best</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Highest-rated Indian on CF (~2754) • IIIT Delhi • ICPC World Finals 2019 (108th) • Active inspiration
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-lg border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-green-500" />
                    <div className="font-bold">3. Udit Sanghi (T1duS)</div>
                    <Badge className="bg-green-500">Young Prodigy</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    IOI 2020 Silver • APIO 2020 Bronze • Youngest Red Coder from India (~2476 peak) • Future star
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-lg border border-purple-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-purple-500" />
                    <div className="font-bold">4. Kshitij Sodani</div>
                    <Badge className="bg-purple-500">IOI Medalist</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    IOI 2020 Bronze • India #1 CodeChef Junior • CF ~2619 • Represents new generation of Indian CP
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-lg border border-red-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-red-500" />
                    <div className="font-bold">5. Akshat Bubna (akshatb)</div>
                    <Badge className="bg-red-500">MIT Graduate</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    IOI 2014 Gold • IOI 2013 Bronze • MIT alumni • Now at Scale AI • Proved Indian potential globally
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-lg border border-orange-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-orange-500" />
                    <div className="font-bold">6. Shreyan Ray</div>
                    <Badge className="bg-orange-500">Current #1</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Highest Indian CF rating: 2912 (June 2025) • Active student • Front-runner red coder • Future LGM candidate
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-teal-500/10 to-teal-600/10 rounded-lg border border-teal-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-teal-500" />
                    <div className="font-bold">7. Aditya Paliwal (VastoLorde95)</div>
                    <Badge className="bg-teal-500">Google Research</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ICPC Finals: 56th (2017), 31st (2018) • Now AI Resident at Google Research, NYC • Tech industry success
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 rounded-lg border border-indigo-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-indigo-500" />
                    <div className="font-bold">8. Pradeep George Mathias</div>
                    <Badge className="bg-indigo-500">ICPC Veteran</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    IOI 2008 Bronze • ICPC Finals: 18th (2012), 42nd (2011) • Consistent high performance at global level
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-pink-500/10 to-pink-600/10 rounded-lg border border-pink-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-pink-500" />
                    <div className="font-bold">9. Rajat De</div>
                    <Badge className="bg-pink-500">IOI Silver</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    IOI 2016 Silver medalist • Strong national rankings on CodeChef and Codeforces • Inspiring journey
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 rounded-lg border border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-cyan-500" />
                    <div className="font-bold">10. Anurag Lal</div>
                    <Badge className="bg-cyan-500">Pioneer GM</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Peak rating: 2563 • One of India's first Grandmasters • Paved the way for current generation
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why CP Awareness is Missing */}
        <Card className="border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl">🎯 Why CP Awareness is Missing in India & How NEXTFANG Bridges It</CardTitle>
            <CardDescription className="text-base">
              Understanding the gap and our mission to create India's first Legendary Grandmaster
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-bold text-lg">🚫 Current Problems:</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <div className="font-medium text-red-700">Lack of Structured Guidance</div>
                    <div className="text-sm text-muted-foreground">No clear roadmap from 0 to LGM for Indian students</div>
                  </div>
                  <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <div className="font-medium text-red-700">Tier 2/3 College Gap</div>
                    <div className="text-sm text-muted-foreground">Limited exposure and resources compared to IITs</div>
                  </div>
                  <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <div className="font-medium text-red-700">Scattered Resources</div>
                    <div className="text-sm text-muted-foreground">Information spread across multiple platforms</div>
                  </div>
                  <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <div className="font-medium text-red-700">No Indian LGM Yet</div>
                    <div className="text-sm text-muted-foreground">India hasn't produced a Legendary Grandmaster on Codeforces</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-lg">✅ NEXTFANG Solutions:</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="font-medium text-green-700">Centralized Learning Hub</div>
                    <div className="text-sm text-muted-foreground">All resources, roadmaps, and tools in one place</div>
                  </div>
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="font-medium text-green-700">Tier 2/3 Focus</div>
                    <div className="text-sm text-muted-foreground">Specifically designed for non-IIT students</div>
                  </div>
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="font-medium text-green-700">AI-Powered Guidance</div>
                    <div className="text-sm text-muted-foreground">Personalized roadmaps and problem recommendations</div>
                  </div>
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="font-medium text-green-700">LGM Mission</div>
                    <div className="text-sm text-muted-foreground">Dedicated mission to create India's first LGM</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CP Tools and Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">🛠️ Essential CP Tools & Resources</CardTitle>
            <CardDescription className="text-base">
              Curated tools, extensions, and resources used by top competitive programmers worldwide
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="font-bold">🔧 Development Tools</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium">Codeforces Enhancer</div>
                    <div className="text-sm text-muted-foreground">Browser extension for better CF experience</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium">Sublime CP Editor</div>
                    <div className="text-sm text-muted-foreground">Fast coding environment with snippets</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium">VS Code CP Snippets</div>
                    <div className="text-sm text-muted-foreground">Templates for common algorithms</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold">📚 Learning Resources</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium">Errichto's Channel</div>
                    <div className="text-sm text-muted-foreground">Advanced tutorials and contest analysis</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium">SecondThread</div>
                    <div className="text-sm text-muted-foreground">Contest streams and problem explanations</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium">CP-Algorithms</div>
                    <div className="text-sm text-muted-foreground">Comprehensive algorithm encyclopedia</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold">🏆 Practice Platforms</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium">Codeforces</div>
                    <div className="text-sm text-muted-foreground">Premier competitive programming platform</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium">AtCoder</div>
                    <div className="text-sm text-muted-foreground">High-quality Japanese contests</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium">CSES Problem Set</div>
                    <div className="text-sm text-muted-foreground">Structured topic-wise problems</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
