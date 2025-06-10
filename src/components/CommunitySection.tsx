
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Send, Phone, Mail, Heart } from "lucide-react";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the NEXTFANG Community</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Connect with fellow competitive programmers, get mentorship, and be part of India's journey to create the first LGM
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Discord */}
        <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
          <CardHeader className="text-center">
            <div className="p-3 bg-[#5865F2]/10 rounded-full w-fit mx-auto mb-3 group-hover:bg-[#5865F2]/20 transition-colors">
              <MessageCircle className="h-8 w-8 text-[#5865F2]" />
            </div>
            <CardTitle className="text-xl">Discord Server</CardTitle>
            <CardDescription>Real-time discussions, voice channels, and study groups</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="flex justify-center gap-2 flex-wrap">
              <Badge variant="secondary">Live Chat</Badge>
              <Badge variant="secondary">Voice Rooms</Badge>
              <Badge variant="secondary">Study Groups</Badge>
            </div>
            <div className="text-2xl font-bold text-primary">1,247 Members</div>
            <Button className="w-full bg-[#5865F2] hover:bg-[#4752C4]">
              Join Discord
            </Button>
          </CardContent>
        </Card>

        {/* Telegram */}
        <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary/20">
          <CardHeader className="text-center">
            <div className="p-3 bg-[#0088CC]/10 rounded-full w-fit mx-auto mb-3 group-hover:bg-[#0088CC]/20 transition-colors">
              <Send className="h-8 w-8 text-[#0088CC]" />
            </div>
            <CardTitle className="text-xl">Telegram Group</CardTitle>
            <CardDescription>Quick updates, contest notifications, and daily discussions</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="flex justify-center gap-2 flex-wrap">
              <Badge variant="secondary">Instant Updates</Badge>
              <Badge variant="secondary">Contest Alerts</Badge>
              <Badge variant="secondary">Resources</Badge>
            </div>
            <div className="text-2xl font-bold text-secondary">856 Members</div>
            <Button className="w-full bg-[#0088CC] hover:bg-[#006699]">
              Join Telegram
            </Button>
          </CardContent>
        </Card>

        {/* WhatsApp */}
        <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20">
          <CardHeader className="text-center">
            <div className="p-3 bg-[#25D366]/10 rounded-full w-fit mx-auto mb-3 group-hover:bg-[#25D366]/20 transition-colors">
              <Phone className="h-8 w-8 text-[#25D366]" />
            </div>
            <CardTitle className="text-xl">WhatsApp Groups</CardTitle>
            <CardDescription>Regional groups for local meetups and peer support</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="flex justify-center gap-2 flex-wrap">
              <Badge variant="secondary">Regional</Badge>
              <Badge variant="secondary">Meetups</Badge>
              <Badge variant="secondary">Peer Support</Badge>
            </div>
            <div className="text-2xl font-bold text-accent">12 Groups</div>
            <Button className="w-full bg-[#25D366] hover:bg-[#1DA851]">
              Join WhatsApp
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Community Features */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              <CardTitle>Peer Mentoring Program</CardTitle>
            </div>
            <CardDescription>Connect with seniors and help juniors in your CP journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">1-on-1 mentorship matching</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Weekly progress check-ins</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Resume and interview guidance</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-secondary/5 to-accent/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-secondary" />
              <CardTitle>Weekly Q&A Sessions</CardTitle>
            </div>
            <CardDescription>Live doubt solving and strategy sessions with experts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm">Live problem solving sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm">Contest strategy discussions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm">Career guidance for FANG</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Information */}
      <Card className="mt-8 bg-gradient-to-r from-muted/50 to-card">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Get in Touch</CardTitle>
          <CardDescription>Have questions? Want to contribute? Reach out to us!</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" className="gap-2">
              <Mail className="h-4 w-4" />
              hello@nextfang.com
            </Button>
            <Button variant="outline" className="gap-2">
              <Users className="h-4 w-4" />
              Become a Contributor
            </Button>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            NEXTFANG is built by the community, for the community. Join us in creating India's most comprehensive competitive programming platform and help us achieve our mission of creating India's first Legendary Grandmaster.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
