
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, X, MessageCircle, Minimize2 } from "lucide-react";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hi! I'm your NEXTFANG AI assistant. I can help you with CP roadmaps, problem recommendations, resume tips, and more! What would you like to know?"
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = { type: "user", content: message };
    setMessages(prev => [...prev, userMessage]);

    // Simple bot responses (in a real app, this would call an API)
    setTimeout(() => {
      let botResponse = "";
      const lowerMessage = message.toLowerCase();

      if (lowerMessage.includes("roadmap") || lowerMessage.includes("path")) {
        botResponse = "Great question! For CP roadmap, I recommend: 1) Start with basic DSA (Arrays, Strings) 2) Learn sorting/searching 3) Master recursion and DP 4) Practice on Codeforces regularly. Would you like specific resources for any topic?";
      } else if (lowerMessage.includes("codeforces") || lowerMessage.includes("cf")) {
        botResponse = "Codeforces is the premier CP platform! Start with Div 2 A problems, gradually move to B and C. I recommend solving 2-3 problems daily. Use virtual contests to practice. Need help with specific CF topics?";
      } else if (lowerMessage.includes("resume")) {
        botResponse = "For FANG-ready resumes: 1) Highlight projects with impact 2) Use action verbs 3) Quantify achievements 4) Include relevant tech stack 5) ATS-friendly format. Want me to review specific sections?";
      } else if (lowerMessage.includes("dsa")) {
        botResponse = "DSA mastery path: Arrays → Strings → Sorting → Searching → Recursion → Trees → Graphs → DP. Practice on LeetCode, GFG, and TUF. Aim for 2-3 problems daily. Which topic would you like resources for?";
      } else if (lowerMessage.includes("hackathon")) {
        botResponse = "Hackathon success tips: 1) Choose familiar tech stack 2) Focus on problem-solving 3) Build MVP first 4) Great presentation matters 5) Network with judges. Unstop has the best opportunities in India!";
      } else {
        botResponse = "I can help you with: 🚀 CP roadmaps 📚 DSA guidance 🏆 Contest strategies 💼 Resume tips 🎯 FANG preparation. What specific area interests you?";
      }

      setMessages(prev => [...prev, { type: "bot", content: botResponse }]);
    }, 1000);

    setMessage("");
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 h-96">
      <Card className="h-full flex flex-col shadow-2xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1 bg-primary/10 rounded-full">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <CardTitle className="text-sm">NEXTFANG AI Assistant</CardTitle>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <Minimize2 className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <Badge variant="secondary" className="w-fit text-xs">
            Online • Powered by AI
          </Badge>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-3">
          <div className="flex-1 overflow-y-auto space-y-3 mb-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs p-2 rounded-lg text-xs ${
                    msg.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about CP, DSA, FANG..."
              className="text-xs"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button size="sm" onClick={handleSendMessage}>
              <Send className="h-3 w-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
