
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Play, ExternalLink, Users, Trophy, Medal, Linkedin, Globe, Mic, MicOff } from "lucide-react";

const platforms = [
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/",
    description: "Complete DSA tutorials and practice",
    color: "from-green-500 to-green-600",
    icon: "🔥"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/problemset/",
    description: "Interview-focused problems",
    color: "from-orange-500 to-orange-600",
    icon: "⚡"
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/",
    description: "Competitive programming contests",
    color: "from-blue-500 to-blue-600",
    icon: "🏆"
  },
  {
    name: "AtCoder",
    url: "https://atcoder.jp/",
    description: "Japanese competitive programming",
    color: "from-purple-500 to-purple-600",
    icon: "🎌"
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/",
    description: "Monthly contests and challenges",
    color: "from-yellow-500 to-yellow-600",
    icon: "👨‍🍳"
  }
];

const topIndianProgrammers = [
  {
    name: "Anoop Tokas",
    handle: "anoop2904",
    platform: "CodeChef",
    rank: "7-star",
    description: "India's highest rated CodeChef programmer",
    country: "🇮🇳"
  },
  {
    name: "Shivam Gupta", 
    handle: "lg5293",
    platform: "Codeforces",
    rank: "Grandmaster",
    description: "Multiple ICPC World Finals participant",
    country: "🇮🇳"
  },
  {
    name: "Raghav Agarwal",
    handle: "darkshadows",
    platform: "CodeChef",
    rank: "7-star",
    description: "Former ACM-ICPC World Finalist",
    country: "🇮🇳"
  },
  {
    name: "Pranjal Jain",
    handle: "gorre_morre",
    platform: "CodeChef",
    rank: "7-star",
    description: "Consistent top performer in contests",
    country: "🇮🇳"
  },
  {
    name: "Bhuvnesh Jain",
    handle: "likecs",
    platform: "CodeChef",
    rank: "6-star",
    description: "ICPC World Finals 2018 participant",
    country: "🇮🇳"
  }
];

const countryPerformance = [
  {
    country: "Russia",
    flag: "🇷🇺",
    icpcWins: 8,
    topRatedCount: 45,
    description: "Dominant force in competitive programming"
  },
  {
    country: "China",
    flag: "🇨🇳", 
    icpcWins: 5,
    topRatedCount: 38,
    description: "Consistent top performance in all contests"
  },
  {
    country: "Poland",
    flag: "🇵🇱",
    icpcWins: 3,
    topRatedCount: 22,
    description: "Strong mathematical background"
  },
  {
    country: "India",
    flag: "🇮🇳",
    icpcWins: 0,
    topRatedCount: 15,
    description: "Growing rapidly with huge potential"
  },
  {
    country: "USA",
    flag: "🇺🇸",
    icpcWins: 2,
    topRatedCount: 28,
    description: "Tech industry powerhouse"
  }
];

export const DSASection = () => {
  return (
    <section id="dsa" className="py-20 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 hero-bg opacity-10"></div>
      <div className="absolute top-20 left-10 floating-3d">
        <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 space-y-16">
        <div className="text-center mb-16 slide-in-3d">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Master DSA to Crack Any Interview
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Structured semester-wise plan from Arrays to Graphs to Dynamic Programming
          </p>
        </div>

        {/* Semester-wise Plan with enhanced design */}
        <Card className="card-3d glass-morphism border-2 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl pulse-3d">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-gradient">Semester-wise Roadmap</CardTitle>
                <CardDescription className="text-lg">Complete DSA journey mapped to your academic timeline</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="legend-card p-6 bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30 border-2">
                <div className="font-bold text-2xl text-green-400 mb-2">Semester 1-2</div>
                <Badge className="mb-3 bg-green-500">Beginner</Badge>
                <div className="text-sm text-muted-foreground">Arrays, Strings, Basic Math</div>
              </div>
              <div className="legend-card p-6 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 border-2">
                <div className="font-bold text-2xl text-yellow-400 mb-2">Semester 3-4</div>
                <Badge className="mb-3 bg-yellow-500">Intermediate</Badge>
                <div className="text-sm text-muted-foreground">Sorting, Searching, Recursion</div>
              </div>
              <div className="legend-card p-6 bg-gradient-to-br from-red-500/20 to-red-600/20 border-red-500/30 border-2">
                <div className="font-bold text-2xl text-red-400 mb-2">Semester 5-6</div>
                <Badge className="mb-3 bg-red-500">Advanced</Badge>
                <div className="text-sm text-muted-foreground">Trees, Graphs, DP</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practice Platforms */}
        <Card className="card-3d glass-morphism border-2 border-secondary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-secondary to-accent rounded-xl pulse-3d">
                <Play className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-gradient">🚀 Top Practice Platforms</CardTitle>
                <CardDescription className="text-lg">Master DSA on these world-class platforms</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={platform.name} className="slide-in-3d" style={{animationDelay: `${index * 0.1}s`}}>
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    <div className={`legend-card p-6 bg-gradient-to-br ${platform.color}/20 hover:scale-105 transition-all cursor-pointer`}>
                      <div className="text-3xl mb-3">{platform.icon}</div>
                      <div className="font-bold text-xl mb-2">{platform.name}</div>
                      <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>
                      <Button size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Practice Now
                      </Button>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* LinkedIn Gold Mine */}
        <Card className="card-3d glass-morphism border-2 border-accent/20 bg-gradient-to-r from-blue-500/5 to-blue-600/5">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl pulse-3d">
                <Linkedin className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-gradient">💎 LinkedIn Gold Mine</CardTitle>
                <CardDescription className="text-lg">Master LinkedIn to unlock career opportunities</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-2xl text-blue-400">🎯 Effective LinkedIn Strategy:</h3>
                <div className="space-y-3">
                  {[
                    "Optimize profile with keywords and professional photo",
                    "Share coding achievements and project updates regularly", 
                    "Connect with industry professionals and recruiters",
                    "Engage with tech content and join relevant groups",
                    "Showcase your problem-solving skills through posts"
                  ].map((tip, index) => (
                    <div key={index} className="card-3d p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                      <div className="text-sm text-muted-foreground">{tip}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-2xl text-green-400">✅ Content Ideas:</h3>
                <div className="space-y-3">
                  {[
                    "Daily coding problems and solutions",
                    "Tech stack tutorials and explanations",
                    "Career journey and learning experiences", 
                    "Industry insights and trends analysis",
                    "Open source contributions and projects"
                  ].map((idea, index) => (
                    <div key={index} className="card-3d p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                      <div className="text-sm text-muted-foreground">{idea}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Indian Programmers */}
        <Card className="card-3d glass-morphism border-2 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl pulse-3d">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-gradient">🏆 Top 5 Indian Competitive Programmers</CardTitle>
                <CardDescription className="text-lg">India's finest competitive programming talents</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topIndianProgrammers.map((programmer, index) => (
                <div key={programmer.name} className="slide-in-3d" style={{animationDelay: `${index * 0.15}s`}}>
                  <div className="legend-card p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30 border-2">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl">{programmer.country}</span>
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500">#{index + 1}</Badge>
                    </div>
                    <h3 className="font-bold text-xl mb-2">{programmer.name}</h3>
                    <div className="text-sm text-muted-foreground mb-2">@{programmer.handle}</div>
                    <Badge variant="secondary" className="mb-3">{programmer.rank}</Badge>
                    <p className="text-sm text-muted-foreground">{programmer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Country-wise Performance */}
        <Card className="card-3d glass-morphism border-2 border-secondary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl pulse-3d">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-gradient">🌍 Country-wise CP Performance</CardTitle>
                <CardDescription className="text-lg">Global competitive programming powerhouses</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countryPerformance.map((country, index) => (
                <div key={country.country} className="slide-in-3d" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="legend-card p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 border-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{country.flag}</span>
                      <div>
                        <h3 className="font-bold text-xl">{country.country}</h3>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm">ICPC Wins:</span>
                        <Badge>{country.icpcWins}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Top Rated:</span>
                        <Badge variant="secondary">{country.topRatedCount}</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{country.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Community Support */}
        <Card className="card-3d glass-morphism border-2 border-accent/20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="pt-6">
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-6 floating-3d" />
              <h3 className="text-3xl font-bold mb-4 text-gradient">Join DSA Community</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect with peers, get doubts solved, and share your progress
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="button-3d" size="lg">Discord</Button>
                <Button className="button-3d" variant="outline" size="lg">Telegram</Button>
                <Button className="button-3d" variant="outline" size="lg">WhatsApp</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
