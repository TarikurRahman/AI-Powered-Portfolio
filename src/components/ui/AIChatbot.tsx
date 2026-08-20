"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles } from "lucide-react";
import gsap from "gsap";

// Suggestions to help the user get started
const SUGGESTIONS = [
  { text: "Tell me about Tarikur", label: "Who is Tarikur?" },
  { text: "Show me your projects", label: "Recent Projects" },
  { text: "What services do you offer?", label: "Services" },
  { text: "How can I contact you?", label: "Get in touch" },
];

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Floating & Glowing animation using GSAP (same style as WhatsAppFloat)
  useEffect(() => {
    const el = buttonRef.current;
    if (!el) return;

    // Floating animation
    gsap.to(el, {
      y: -10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Soft glowing pulse (purple shadow to match primary button theme)
    gsap.to(el, {
      boxShadow: "0px 0px 25px 6px rgba(168,85,247,0.6)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  // Auto-scroll to the bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  // Handle sending messages (both from input and suggestion clicks)
  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: textToSend.trim(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!response.ok) throw new Error("Failed to connect to assistant");

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No response reader available");

      const decoder = new TextDecoder();
      let done = false;
      let assistantText = "";

      // Add placeholder assistant message
      const assistantMessageId = (Date.now() + 1).toString();
      setMessages((prev) => [
        ...prev,
        { id: assistantMessageId, role: "assistant", content: "" },
      ]);

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        if (value) {
          const chunk = decoder.decode(value);
          assistantText += chunk;
          
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMessageId ? { ...msg, content: assistantText } : msg
            )
          );
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: "Sorry, I had trouble connecting. Please try again or contact Tarikur directly at tarikurrahman92@gmail.com.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  // Parse markdown [text](url) into clickable HTML links
  const renderMessageContent = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      const [_, linkText, url] = match;
      const index = match.index;

      if (index > lastIndex) {
        parts.push(text.substring(lastIndex, index));
      }

      parts.push(
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-primary/80 font-medium transition-colors"
        >
          {linkText}
        </a>
      );

      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed lg:bottom-40 bottom-24 lg:right-20 right-5 z-[999] bg-primary text-primary-foreground p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 flex items-center justify-center border border-primary/20 glow-primary"
        aria-label="Toggle AI Assistant"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Bot size={28} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-primary-foreground animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed lg:bottom-60 bottom-40 lg:right-20 right-5 z-[998] w-[calc(100vw-40px)] sm:w-[380px] h-[500px] rounded-2xl glass border border-white/10 shadow-2xl flex flex-col overflow-hidden bg-background/95 backdrop-blur-md"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-primary/5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Sparkles className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm">Tarikur's Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground p-1.5 rounded-lg hover:bg-white/5 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.length === 0 ? (
                // Welcome Message & Quick Suggestions
                <div className="space-y-6 my-auto pt-4">
                  <div className="text-center space-y-2">
                    <p className="text-sm font-medium text-foreground">
                      Hello! I'm Tarikur's Personal AI Assistant.
                    </p>
                    <p className="text-xs text-muted-foreground px-4">
                      Feel free to ask me anything about his skills, experience, projects, or how to get in touch!
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-2 px-2">
                    {SUGGESTIONS.map((suggestion) => (
                      <button
                        key={suggestion.text}
                        onClick={() => handleSendMessage(suggestion.text)}
                        className="text-left text-xs p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-primary/10 hover:border-primary/30 transition-all text-muted-foreground hover:text-foreground duration-200"
                      >
                        {suggestion.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                // Message List
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-none"
                          : "bg-secondary/60 text-foreground border border-white/5 rounded-tl-none"
                      }`}
                    >
                      {renderMessageContent(message.content)}
                    </div>
                  </div>
                ))
              )}

              {/* Typing Indicator */}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="bg-secondary/60 border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSubmit}
              className="p-3 border-t border-white/10 bg-background flex gap-2 items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me something..."
                disabled={isLoading}
                className="flex-1 bg-secondary/50 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-primary text-primary-foreground p-2 rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center glow-primary"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
