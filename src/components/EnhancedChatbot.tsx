import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, X, MessageCircle, Mic, MicOff, Volume2, VolumeX, Settings, Sparkles, Brain, Zap } from "lucide-react";
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
      content: "🚀 Welcome to NEXTFAANG AI Assistant! I'm here to help you master competitive programming and build your journey towards India's First LGM. Ask me anything about DSA, contests, FAANG prep, or platform features!",
      timestamp: new Date()
    }
  ]);
  const [apiKey, setApiKey] = useState("");
  const [elevenLabsKey, setElevenLabsKey] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

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
              content: `You are NEXTFAANG AI Assistant - Building India's First LGM for competitive programming. You're an expert mentor who helps with:

              🎯 Competitive Programming strategies and roadmaps
              🧩 Data Structures & Algorithms guidance  
              🏆 Contest preparation (Codeforces, CodeChef, AtCoder)
              💼 FAANG interview preparation
              🚀 Platform feature guidance and usage tips
              📚 Learning resources and study plans
              
              Keep responses encouraging, practical, and focused on actionable advice. Use emojis appropriately and maintain an enthusiastic but professional tone. Always provide specific next steps when possible.`
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
    
    if (lowerMessage.includes("roadmap") || lowerMessage.includes("path") || lowerMessage.includes("guide")) {
      return "🗺️ For NEXTFAANG CP roadmap: 1) Master Arrays/Strings 2) Learn Two Pointers & Sliding Window 3) Conquer DP & Recursion 4) Practice Graph algorithms 5) Regular contest participation. Building India's First LGM requires systematic practice! Would you like me to create a personalized roadmap for you?";
    } else if (lowerMessage.includes("contest") || lowerMessage.includes("codeforces") || lowerMessage.includes("cf")) {
      return "🏆 Contest strategy for NEXTFAANG success: Start with Div 2 A/B problems, focus on implementation & math. Virtual contests are key! Aim for Expert rating (1600+) for top Indian tech companies. Try our Contest Analyzer feature to track your performance!";
    } else if (lowerMessage.includes("faang") || lowerMessage.includes("interview")) {
      return "💼 NEXTFAANG interview prep: Focus on medium/hard LeetCode problems, system design basics, and behavioral questions. Practice mock interviews and time management. Check out our DSA Mastery section and use the skill assessment tool!";
    } else if (lowerMessage.includes("feature") || lowerMessage.includes("tool") || lowerMessage.includes("platform")) {
      return "🛠️ NEXTFAANG Platform Features: 📊 Live Progress Charts 🧩 Interactive CP Roadmap 📚 CP Dictionary 💡 Tricks & Tips 🌍 Code Translation 🎮 Battle Arena. Try our Platform Guide mentor for a complete tour!";
    } else if (lowerMessage.includes("dsa") || lowerMessage.includes("algorithm")) {
      return "🧩 DSA mastery path: Arrays → LinkedLists → Stacks/Queues → Trees → Graphs → DP. Use NEXTFAANG's systematic approach: Understand → Code → Optimize → Practice variants. Check our DSA Mastery page for detailed roadmaps!";
    } else {
      return "🚀 I can help with: 📚 CP roadmaps 🏆 Contest strategies 💼 FAANG prep 🎯 Interview tips 🛠️ Platform features 🤖 Building India's First LGM together! What specific area interests you? Try asking about our features or start with 'show me the roadmap'!";
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
    setMessage("");
    setIsTyping(true);

    const aiResponse = await getAIResponse(message);
    
    setTimeout(() => {
      setIsTyping(false);
      const botMessage: Message = { 
        type: "bot", 
        content: aiResponse, 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, botMessage]);
      
      // Auto-speak response if voice is enabled
      if (elevenLabsKey || synthRef.current) {
        setTimeout(() => speakText(aiResponse), 300);
      }
    }, 1500);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="rounded-full h-20 w-20 shadow-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 button-3d pulse-glow border-2 border-white/20"
          >
            <div className="relative">
              <Bot className="h-10 w-10 text-white" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </Button>
          
          {/* Floating badges around the button */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium animate-bounce">
            AI Assistant
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
            NEXTFAANG
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px]">
      <Card className="h-full flex flex-col shadow-2xl card-3d glass-morphism border-2 border-blue-500/30 bg-gradient-to-br from-slate-900/95 to-blue-900/95 backdrop-blur-xl overflow-hidden">
        <CardHeader className="pb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-full pulse-3d">
                <Brain className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  NEXTFAANG Assistant
                  <Sparkles className="h-4 w-4 animate-pulse" />
                </CardTitle>
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
          <div className="flex gap-2">
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30 animate-pulse">
              🟢 Online
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
              <Zap className="h-3 w-3 mr-1" />
              AI Powered
            </Badge>
          </div>
        </CardHeader>

        {showSettings && (
          <div className="p-4 bg-slate-800/80 border-b border-blue-500/30 space-y-3">
            <Input
              type="password"
              placeholder="OpenAI API Key (for smarter responses)"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="text-xs bg-slate-700 border-blue-400/30 text-white"
            />
            <Input
              type="password"
              placeholder="ElevenLabs API Key (for premium voice)"
              value={elevenLabsKey}
              onChange={(e) => setElevenLabsKey(e.target.value)}
              className="text-xs bg-slate-700 border-blue-400/30 text-white"
            />
            <div className="text-xs text-blue-300">
              💡 Add API keys for enhanced AI responses and premium voice features
            </div>
          </div>
        )}

        <CardContent className="flex-1 flex flex-col p-4 overflow-hidden">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4 scroll-smooth">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className="max-w-[85%]">
                  <div
                    className={`p-4 rounded-2xl text-sm slide-in-3d ${
                      msg.type === "user"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gradient-to-r from-slate-800 to-slate-700 text-white border border-blue-400/20"
                    }`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {msg.content}
                  </div>
                  {msg.type === "bot" && (
                    <div className="flex justify-start mt-2 gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0 hover:bg-blue-500/20 text-blue-400"
                        onClick={() => isSpeaking ? stopSpeaking() : speakText(msg.content)}
                      >
                        {isSpeaking ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
                      </Button>
                      <span className="text-xs text-slate-400">
                        {msg.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-4 rounded-2xl border border-blue-400/20">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about CP, DSA, NEXTFAANG features..."
                className="text-sm pr-12 bg-slate-800 border-blue-500/30 focus:border-blue-500 text-white"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button
                size="sm"
                variant="ghost"
                className={`absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0 ${
                  isListening ? 'text-red-500 pulse-glow' : 'hover:bg-blue-500/20 text-blue-400'
                }`}
                onClick={isListening ? stopListening : startListening}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>
            </div>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 button-3d"
              onClick={handleSendMessage}
              disabled={isTyping}
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
