
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, X, MessageCircle, Minimize2, Mic, MicOff, Volume2, VolumeX, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  type: "bot" | "user";
  content: string;
  timestamp: Date;
}

export const EnhancedChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content: "Hi! I'm your NEXTFAANG AI assistant with advanced voice support! 🎤 Building India's First LGM for competitive programming. I can help with CP roadmaps, problem recommendations, FAANG interview prep, and more! What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [apiKey, setApiKey] = useState("");
  const [elevenLabsKey, setElevenLabsKey] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  const { toast } = useToast();
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setMessage(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => setIsListening(false);
      recognitionRef.current.onend = () => setIsListening(false);
    }

    synthRef.current = window.speechSynthesis;

    return () => {
      if (recognitionRef.current) recognitionRef.current.stop();
      if (synthRef.current) synthRef.current.cancel();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const speakText = async (text: string) => {
    if (elevenLabsKey && !isSpeaking) {
      try {
        setIsSpeaking(true);
        const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL', {
          method: 'POST',
          headers: {
            'Accept': 'audio/mpeg',
            'Content-Type': 'application/json',
            'xi-api-key': elevenLabsKey,
          },
          body: JSON.stringify({
            text: text,
            model_id: 'eleven_multilingual_v2',
            voice_settings: { stability: 0.5, similarity_boost: 0.5 }
          }),
        });

        if (response.ok) {
          const audioBlob = await response.blob();
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          
          audio.onended = () => {
            setIsSpeaking(false);
            URL.revokeObjectURL(audioUrl);
          };
          
          audio.play();
        } else {
          fallbackToWebSpeech(text);
        }
      } catch (error) {
        fallbackToWebSpeech(text);
      }
    } else {
      fallbackToWebSpeech(text);
    }
  };

  const fallbackToWebSpeech = (text: string) => {
    if (synthRef.current && !isSpeaking) {
      synthRef.current.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      
      synthRef.current.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  const getAIResponse = async (userMessage: string): Promise<string> => {
    if (!apiKey) {
      return getStaticResponse(userMessage);
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `You are NEXTFAANG AI assistant - Building India's First LGM for competitive programming. Help with DSA, CP strategies, FAANG prep, contests, and coding interviews. Be encouraging and provide actionable advice.`
            },
            { role: 'user', content: userMessage }
          ],
          max_tokens: 400,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      return data.choices[0]?.message?.content || getStaticResponse(userMessage);
    } catch (error) {
      return getStaticResponse(userMessage);
    }
  };

  const getStaticResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("roadmap") || lowerMessage.includes("path")) {
      return "🗺️ For NEXTFAANG CP roadmap: 1) Master Arrays/Strings 2) Learn Two Pointers & Sliding Window 3) Conquer DP & Recursion 4) Practice Graph algorithms 5) Regular contest participation. Building India's First LGM requires systematic practice!";
    } else if (lowerMessage.includes("codeforces") || lowerMessage.includes("cf")) {
      return "🏆 Codeforces mastery for NEXTFAANG: Start with Div 2 A/B problems, focus on implementation & math. Virtual contests are key! Aim for Expert rating (1600+) for top Indian tech companies.";
    } else if (lowerMessage.includes("faang") || lowerMessage.includes("interview")) {
      return "💼 NEXTFAANG interview prep: Focus on medium/hard LeetCode problems, system design basics, and behavioral questions. Practice mock interviews and time management. You're building towards India's tech leadership!";
    } else if (lowerMessage.includes("dsa")) {
      return "🧩 DSA mastery path: Arrays → LinkedLists → Stacks/Queues → Trees → Graphs → DP. Use NEXTFAANG's systematic approach: Understand → Code → Optimize → Practice variants.";
    } else {
      return "🚀 I can help with: CP roadmaps 📚 DSA guidance 🏆 Contest strategies 💼 FAANG prep 🎯 Interview tips 🤖 Building India's First LGM together! What specific area interests you?";
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: Message = { 
      type: "user", 
      content: message, 
      timestamp: new Date() 
    };
    setMessages(prev => [...prev, userMessage]);

    const aiResponse = await getAIResponse(message);
    
    setTimeout(() => {
      const botMessage: Message = { 
        type: "bot", 
        content: aiResponse, 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, botMessage]);
      
      // Auto-speak response
      if (elevenLabsKey || synthRef.current) {
        setTimeout(() => speakText(aiResponse), 300);
      }
    }, 1000);

    setMessage("");
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-20 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full h-16 w-16 shadow-2xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 button-3d pulse-glow"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-20 z-50 w-96 h-[500px]">
      <Card className="h-full flex flex-col shadow-2xl card-3d glass-morphism border-2 border-red-500/30 bg-gradient-to-br from-red-500/5 to-red-600/5">
        <CardHeader className="pb-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-full pulse-3d">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold">NEXTFAANG Assistant</CardTitle>
                <div className="text-xs opacity-90">Building India's First LGM</div>
              </div>
            </div>
            <div className="flex gap-1">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/20" 
                onClick={() => setShowSettings(!showSettings)}
              >
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Badge className="w-fit text-xs bg-green-500/20 text-green-300 border-green-500/30">
            🟢 Online • Voice Ready
          </Badge>
        </CardHeader>

        {showSettings && (
          <div className="p-4 bg-slate-800 border-b border-red-500/30 space-y-3">
            <Input
              type="password"
              placeholder="OpenAI API Key (optional)"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="text-xs"
            />
            <Input
              type="password"
              placeholder="ElevenLabs API Key (optional)"
              value={elevenLabsKey}
              onChange={(e) => setElevenLabsKey(e.target.value)}
              className="text-xs"
            />
          </div>
        )}

        <CardContent className="flex-1 flex flex-col p-4 overflow-hidden">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4 scroll-smooth">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className="max-w-[80%]">
                  <div
                    className={`p-3 rounded-2xl text-sm slide-in-3d ${
                      msg.type === "user"
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                        : "bg-gradient-to-r from-muted to-muted/80 glass-morphism"
                    }`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {msg.content}
                  </div>
                  {msg.type === "bot" && (
                    <div className="flex justify-start mt-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0 hover:bg-red-500/20"
                        onClick={() => isSpeaking ? stopSpeaking() : speakText(msg.content)}
                      >
                        {isSpeaking ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about CP, DSA, NEXTFAANG..."
                className="text-sm pr-12 bg-gradient-to-r from-background to-muted/50 border-red-500/30 focus:border-red-500"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button
                size="sm"
                variant="ghost"
                className={`absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0 ${
                  isListening ? 'text-red-500 pulse-glow' : 'hover:bg-red-500/20'
                }`}
                onClick={isListening ? stopListening : startListening}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>
            </div>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 button-3d"
              onClick={handleSendMessage}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          
          {isListening && (
            <div className="text-center mt-2">
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30 pulse-3d">
                🎤 Listening...
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
