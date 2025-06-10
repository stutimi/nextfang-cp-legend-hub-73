
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Code, Users } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">NEXTFANG</h1>
              <p className="text-xs text-muted-foreground">Building India's First LGM</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#dsa" className="text-sm font-medium hover:text-primary transition-colors">DSA</a>
            <a href="#cp" className="text-sm font-medium hover:text-primary transition-colors">CP</a>
            <a href="#hackathon" className="text-sm font-medium hover:text-primary transition-colors">Hackathons</a>
            <a href="#fang" className="text-sm font-medium hover:text-primary transition-colors">FANG</a>
            <a href="#resume" className="text-sm font-medium hover:text-primary transition-colors">Resume</a>
            <a href="#community" className="text-sm font-medium hover:text-primary transition-colors">Community</a>
          </div>

          {/* User Counter & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Badge variant="secondary" className="gap-1">
              <Users className="h-3 w-3" />
              2,547 Users
            </Badge>
            <Button size="sm">Join Community</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#dsa" className="text-sm font-medium hover:text-primary transition-colors">DSA</a>
              <a href="#cp" className="text-sm font-medium hover:text-primary transition-colors">CP</a>
              <a href="#hackathon" className="text-sm font-medium hover:text-primary transition-colors">Hackathons</a>
              <a href="#fang" className="text-sm font-medium hover:text-primary transition-colors">FANG</a>
              <a href="#resume" className="text-sm font-medium hover:text-primary transition-colors">Resume</a>
              <a href="#community" className="text-sm font-medium hover:text-primary transition-colors">Community</a>
              <div className="pt-4 border-t">
                <Badge variant="secondary" className="gap-1 mb-3">
                  <Users className="h-3 w-3" />
                  2,547 Users
                </Badge>
                <Button className="w-full">Join Community</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
