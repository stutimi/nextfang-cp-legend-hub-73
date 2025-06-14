
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/Navbar";
import { ContestSearch } from "@/components/ContestSearch";
import { PerformanceAnalysis } from "@/components/PerformanceAnalysis";
import { PracticeRecommendations } from "@/components/PracticeRecommendations";
import { AnalyticsCharts } from "@/components/AnalyticsCharts";
import { Search, TrendingUp, Target, BookOpen } from "lucide-react";

const ContestAnalyzer = () => {
  const [handle, setHandle] = useState("");
  const [analysisData, setAnalysisData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!handle.trim()) return;
    
    setIsLoading(true);
    try {
      // This will be handled by the ContestSearch component
      console.log("Analyzing handle:", handle);
    } catch (error) {
      console.error("Analysis failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Contest Performance Analyzer
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Analyze your Codeforces contest performance, identify weak areas, and get personalized practice recommendations to improve your competitive programming skills.
          </p>
        </div>

        {/* Input Section */}
        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Enter Codeforces Handle
            </CardTitle>
            <CardDescription>
              Enter your Codeforces username to analyze your contest performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="e.g., tourist, Benq, jiangly"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
                className="flex-1"
              />
              <Button 
                onClick={handleAnalyze}
                disabled={isLoading || !handle.trim()}
                className="bg-gradient-to-r from-primary to-secondary"
              >
                {isLoading ? "Analyzing..." : "Analyze"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Analysis Results */}
        {handle && (
          <Tabs defaultValue="search" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="search" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Contest Search
              </TabsTrigger>
              <TabsTrigger value="performance" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Performance
              </TabsTrigger>
              <TabsTrigger value="recommendations" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                Recommendations
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="search" className="mt-6">
              <ContestSearch 
                handle={handle} 
                onAnalysisComplete={setAnalysisData}
              />
            </TabsContent>

            <TabsContent value="performance" className="mt-6">
              <PerformanceAnalysis data={analysisData} />
            </TabsContent>

            <TabsContent value="recommendations" className="mt-6">
              <PracticeRecommendations data={analysisData} />
            </TabsContent>

            <TabsContent value="analytics" className="mt-6">
              <AnalyticsCharts data={analysisData} />
            </TabsContent>
          </Tabs>
        )}

        {/* Feature Overview */}
        {!handle && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Search className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Contest Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Analyze your submissions from recent contests to identify patterns and areas for improvement.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-secondary mb-2" />
                <CardTitle className="text-lg">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track your solving time, success rate, and problem difficulty progression over time.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-lg">Smart Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get personalized practice problems based on your weak areas and problem tags.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Visual Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Interactive charts and graphs to visualize your progress and performance trends.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContestAnalyzer;
