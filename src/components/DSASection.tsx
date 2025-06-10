
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Play, ExternalLink, Users } from "lucide-react";

export const DSASection = () => {
  return (
    <section id="dsa" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Master DSA to Crack Any Interview</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Structured semester-wise plan from Arrays to Graphs to Dynamic Programming
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Semester-wise Plan */}
        <Card className="col-span-full md:col-span-2 lg:col-span-1">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <CardTitle>Semester-wise Roadmap</CardTitle>
            </div>
            <CardDescription>Complete DSA journey mapped to your academic timeline</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <div className="font-medium">Semester 1-2</div>
                <div className="text-sm text-muted-foreground">Arrays, Strings, Basic Math</div>
              </div>
              <Badge variant="secondary">Beginner</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <div className="font-medium">Semester 3-4</div>
                <div className="text-sm text-muted-foreground">Sorting, Searching, Recursion</div>
              </div>
              <Badge variant="secondary">Intermediate</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <div className="font-medium">Semester 5-6</div>
                <div className="text-sm text-muted-foreground">Trees, Graphs, DP</div>
              </div>
              <Badge>Advanced</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Best Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5 text-secondary" />
              Best Resources
            </CardTitle>
            <CardDescription>Curated learning materials from top educators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">GeeksforGeeks</div>
                  <div className="text-sm text-muted-foreground">Complete DSA track</div>
                </div>
                <Button size="sm" variant="outline">
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">TakeUForward</div>
                  <div className="text-sm text-muted-foreground">Striver's A2Z DSA</div>
                </div>
                <Button size="sm" variant="outline">
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">NeetCode</div>
                  <div className="text-sm text-muted-foreground">Interview patterns</div>
                </div>
                <Button size="sm" variant="outline">
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Aditya Verma DP */}
        <Card>
          <CardHeader>
            <CardTitle>🔁 Recursion & DP Mastery</CardTitle>
            <CardDescription>Aditya Verma's curated roadmap for DP excellence</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-accent/10 rounded-lg">
                <div className="font-medium text-accent">Pattern Recognition</div>
                <div className="text-sm text-muted-foreground">Identify DP patterns in problems</div>
              </div>
              <div className="p-3 bg-accent/10 rounded-lg">
                <div className="font-medium text-accent">Memoization</div>
                <div className="text-sm text-muted-foreground">Top-down approach mastery</div>
              </div>
              <div className="p-3 bg-accent/10 rounded-lg">
                <div className="font-medium text-accent">Tabulation</div>
                <div className="text-sm text-muted-foreground">Bottom-up optimization</div>
              </div>
            </div>
            <Button className="w-full mt-4">Start DP Journey</Button>
          </CardContent>
        </Card>
      </div>

      {/* Community Support */}
      <Card className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <CardContent className="pt-6">
          <div className="text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Join DSA Community</h3>
            <p className="text-muted-foreground mb-4">
              Connect with peers, get doubts solved, and share your progress
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" size="sm">Discord</Button>
              <Button variant="outline" size="sm">Telegram</Button>
              <Button variant="outline" size="sm">WhatsApp</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
