
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Target, BookOpen, Users, Zap, TrendingUp, Globe, Award, Brain, Code2 } from "lucide-react";

export const CPAwarenessSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 animate-fade-in">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Critical Analysis
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900 animate-scale-in">
            Why CP Awareness is Missing in India?
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Understanding the gap and how <strong className="text-blue-800">NEXTFANG</strong> is bridging it
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Problems Section */}
          <Card className="bg-white/70 backdrop-blur-md border-2 border-blue-200/50 hover:scale-[1.02] transition-transform duration-300 animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-100 rounded-xl">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-blue-900">Current Problems</CardTitle>
                  <CardDescription className="text-blue-700">Why CP awareness lacks in India</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  icon: <BookOpen className="h-5 w-5 text-orange-600" />,
                  title: "Educational System Gap",
                  desc: "Traditional curriculum focuses on theory, not competitive programming practice"
                },
                {
                  icon: <Users className="h-5 w-5 text-purple-600" />,
                  title: "Lack of Mentorship",
                  desc: "Limited access to experienced CP practitioners and proper guidance"
                },
                {
                  icon: <Globe className="h-5 w-5 text-blue-600" />,
                  title: "Resource Fragmentation",
                  desc: "Quality CP resources scattered across platforms without structured learning paths"
                },
                {
                  icon: <Brain className="h-5 w-5 text-green-600" />,
                  title: "Awareness Deficit",
                  desc: "Students unaware of CP's importance for FANG interviews and career growth"
                }
              ].map((problem, index) => (
                <div key={problem.title} className="flex gap-4 p-4 bg-blue-50/50 rounded-xl hover:bg-blue-100/50 transition-colors duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                    {problem.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">{problem.title}</h4>
                    <p className="text-sm text-blue-700">{problem.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Solutions Section */}
          <Card className="bg-white/70 backdrop-blur-md border-2 border-blue-200/50 hover:scale-[1.02] transition-transform duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-blue-900">NEXTFANG Solutions</CardTitle>
                  <CardDescription className="text-blue-700">How we're bridging the gap</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  icon: <Code2 className="h-5 w-5 text-blue-600" />,
                  title: "Structured Learning Path",
                  desc: "Semester-wise DSA progression from beginner to Legendary Grandmaster"
                },
                {
                  icon: <Users className="h-5 w-5 text-green-600" />,
                  title: "Community & Mentorship",
                  desc: "Connect with top CP contributors and get personalized guidance"
                },
                {
                  icon: <TrendingUp className="h-5 w-5 text-purple-600" />,
                  title: "Career-Focused Approach",
                  desc: "Direct mapping of CP skills to FANG interview success and career growth"
                },
                {
                  icon: <Award className="h-5 w-5 text-orange-600" />,
                  title: "Comprehensive Resources",
                  desc: "One-stop platform for all CP needs - from basics to advanced problem solving"
                }
              ].map((solution, index) => (
                <div key={solution.title} className="flex gap-4 p-4 bg-blue-50/50 rounded-xl hover:bg-blue-100/50 transition-colors duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                    {solution.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">{solution.title}</h4>
                    <p className="text-sm text-blue-700">{solution.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-100 to-blue-50 border-2 border-blue-200/50 p-8 max-w-4xl mx-auto hover:scale-[1.02] transition-transform duration-300 animate-fade-in">
            <CardContent className="pt-0">
              <Zap className="h-16 w-16 text-blue-600 mx-auto mb-6 animate-pulse" />
              <h3 className="text-3xl font-bold mb-4 text-blue-900 animate-scale-in">
                Join the Movement
              </h3>
              <p className="text-lg text-blue-700 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
                Be part of India's first comprehensive competitive programming ecosystem. 
                Together, we're creating the next generation of world-class programmers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 animate-scale-in">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 animate-scale-in" style={{animationDelay: '0.1s'}}>
                  <Users className="h-5 w-5 mr-2" />
                  Join Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
