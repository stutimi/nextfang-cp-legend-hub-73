
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, ExternalLink, Code, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Competitive Programming Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to master competitive programming and become a coding legend
            </p>
          </div>
        </div>

        {/* What is CP Section */}
        <Card className="mb-8 card-3d border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              What is Competitive Programming?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-6">
              Competitive Programming is a sport where programmers solve algorithmic problems within a time limit using a programming language of their choice. It's a test of problem-solving skills, knowledge of algorithms, and ability to write efficient code.
            </p>
            
            <h4 className="text-lg font-semibold mb-4">Few good websites for CP:</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="secondary">CodeForces</Badge>
              <Badge variant="secondary">CodeChef</Badge>
              <Badge variant="secondary">AtCoder</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Extensions Section */}
        <Card className="mb-8 card-3d border-2 border-secondary/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Target className="h-6 w-6 text-secondary" />
              Extensions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Extensions can help you analyze your performance, track your progress and much more.
            </p>
            <p className="mb-4">Here are the best CP extensions on the market:</p>
            <a 
              href="https://codeforces.com/blog/entry/82884" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="outline" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                View Extensions Guide
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* Learning Resources */}
        <Card className="mb-8 card-3d border-2 border-accent/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-accent" />
              Where to learn?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">Following links are useful for learning CP topics:</p>
            
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">TLE Course Work</h4>
                <p className="text-sm text-muted-foreground">Obviously the best structured course</p>
              </div>
              
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">CodeForces Catalog</h4>
                <a href="https://codeforces.com/catalog" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  https://codeforces.com/catalog
                </a>
              </div>
              
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">CP Algorithms</h4>
                <a href="https://cp-algorithms.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  https://cp-algorithms.com/
                </a>
              </div>
              
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">USACO Guide</h4>
                <a href="https://usaco.guide/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  https://usaco.guide/
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practice Resources */}
        <Card className="mb-8 card-3d border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              Where to practice?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">Following links are useful for practicing CP:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4">Rating Wise Practice</h4>
                <div className="space-y-3">
                  <a href="https://www.tle-eliminators.com/cp-sheet" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <ExternalLink className="h-4 w-4" />
                      TLE Eliminators CP Sheet
                    </Button>
                  </a>
                  <a href="https://codeforces.com/problemset" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Codeforces Problemset
                    </Button>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Topic Wise Practice</h4>
                <div className="space-y-3">
                  <a href="https://codeforces.com/edu/courses" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Codeforces EDU
                    </Button>
                  </a>
                  <a href="https://cses.fi/problemset/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <ExternalLink className="h-4 w-4" />
                      CSES Problem Set
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Practice */}
        <Card className="mb-8 card-3d border-2 border-secondary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Where to practice more? (Advanced)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <a href="https://projecteuler.net/archives" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Project Euler
                </Button>
              </a>
              <a href="https://open.kattis.com/problems" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Kattis Problems
                </Button>
              </a>
              <a href="https://acm.timus.ru/problemset.aspx" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Timus Online Judge
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Progress Tracking */}
        <Card className="mb-8 card-3d border-2 border-accent/20">
          <CardHeader>
            <CardTitle className="text-2xl">Track Your Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">These sites help to see all of your accounts at the same place:</p>
            
            <div className="space-y-3">
              <a href="https://clist.by/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <ExternalLink className="h-4 w-4" />
                  CLIST
                </Button>
              </a>
              <a href="https://progvar.fun/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <ExternalLink className="h-4 w-4" />
                  ProgVar
                </Button>
              </a>
              <a href="https://codeclock.in/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Codeclock (Mobile App)
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
