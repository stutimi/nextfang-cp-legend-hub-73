
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Star, TrendingUp } from "lucide-react";

export const CompanyShowcase = () => {
  const companies = [
    {
      name: "Google",
      image: "https://i.postimg.cc/rp3Jv16N/google-head-office-campus-mountain-view-californias-usa-E94-EK8.jpg",
      alt: "Google Campus",
      description: "Leading tech innovation",
      color: "from-blue-500 to-green-500"
    },
    {
      name: "Apple",
      image: "https://i.postimg.cc/Y9t92Vwr/apple-store.jpg",
      alt: "Apple Store",
      description: "Design excellence",
      color: "from-gray-500 to-slate-600"
    },
    {
      name: "Meta",
      image: "https://i.postimg.cc/xTXZ83YM/Meta-Completes-Another-Round-of-Layoffs.webp",
      alt: "Meta Office",
      description: "Social innovation",
      color: "from-blue-600 to-purple-600"
    },
    {
      name: "Tech Industry",
      image: "https://i.postimg.cc/XYh1bSd5/maxresdefault.jpg",
      alt: "Tech Industry",
      description: "Future of technology",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Innovation Hub",
      image: "https://i.postimg.cc/gkpwkN3B/maxresdefault-1.jpg",
      alt: "Innovation Hub",
      description: "Next-gen solutions",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 gap-2 bg-blue-900/50 border-blue-400/30 text-blue-300 hover:bg-blue-800/60 backdrop-blur-sm animate-fade-in">
            <Building2 className="h-4 w-4" />
            Dream Companies
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent animate-fade-in">
            Where Our Students Land
          </h2>
          
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            Join the ranks of our successful alumni working at the world's most prestigious tech companies
          </p>
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {companies.map((company, index) => (
            <Card 
              key={company.name} 
              className="group relative overflow-hidden border-2 border-blue-400/20 bg-slate-800/50 backdrop-blur-sm hover:border-blue-400/60 transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={company.image} 
                    alt={company.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Company Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${company.color} rounded-full text-white font-semibold mb-2 text-sm`}>
                      <Star className="h-4 w-4" />
                      {company.name}
                    </div>
                    <p className="text-white/80 text-sm">{company.description}</p>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="text-center p-8 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl border border-blue-400/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-cyan-300 mb-2">150+</div>
            <div className="text-blue-200">FAANG Placements</div>
            <TrendingUp className="h-6 w-6 text-cyan-400 mx-auto mt-2 animate-pulse" />
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-400/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-purple-300 mb-2">₹45L+</div>
            <div className="text-purple-200">Average Package</div>
            <Star className="h-6 w-6 text-purple-400 mx-auto mt-2 animate-pulse" />
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl border border-green-400/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-green-300 mb-2">98%</div>
            <div className="text-green-200">Success Rate</div>
            <Building2 className="h-6 w-6 text-green-400 mx-auto mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
