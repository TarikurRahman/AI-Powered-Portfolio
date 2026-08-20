"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Facebook, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "tarikurrahman92@gmail.com", href: "mailto:tarikurrahman92@gmail.com" },
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: "#" },
  { icon: Phone, label: "Phone", value: "+8801633003462", href: "tel:+8801633003462" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/tarikurrahmanbd", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/tarikurrahman", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/tarikurrahmanbd", label: "Twitter" },
  { icon: Facebook, href: "https://www.facebook.com/tarikurrahman", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@tarikurrahman", label: "Youtube" },
  { icon: Mail, href: "mailto:tarikurrahman92@gmail.com", label: "Email" },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // Web3Forms Access Key is set here
    formData.append("access_key", "71c361c1-3ee9-4436-9ea5-b7aa8d9edb6b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast({
          variant: "destructive",
          title: "Error!",
          description: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Network Error",
        description: "Please check your internet connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 md:pt-32">
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Contact
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Let's <span className="text-gradient">Connect</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Have a project in mind or just want to chat? I'm always open to
                discussing new opportunities.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-display font-semibold mb-6">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  I'm currently available for freelance work and full-time
                  opportunities. If you have a project that needs some creative
                  touch, I'd love to hear about it.
                </p>

                <div className="space-y-6 mb-10">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="text-primary" size={22} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-display font-semibold mb-4">
                    Follow Me
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
                        aria-label={social.label}
                      >
                        <social.icon size={22} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass p-8 rounded-2xl"
              >
                <h2 className="text-2xl font-display font-semibold mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-secondary/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-secondary/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project inquiry"
                      required
                      className="bg-secondary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="bg-secondary/50 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full glow-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message <Send className="ml-2" size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
