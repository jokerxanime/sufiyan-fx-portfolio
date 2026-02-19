import React, { useState } from 'react';
import { Mail, Send, Youtube, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { toast } from '../hooks/use-toast';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialIcons = {
    youtube: Youtube,
    instagram: Instagram,
    twitter: Twitter,
    linkedin: Linkedin
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d9ff] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d9ff] rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            {data.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-[#1a1a1a] border-gray-800 p-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#00d9ff]/20 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-[#00d9ff]" />
                      </div>
                      <h3 className="font-semibold">Email</h3>
                    </div>
                    <a 
                      href={`mailto:${data.email}`}
                      className="text-gray-400 hover:text-[#00d9ff] transition-colors duration-300"
                    >
                      {data.email}
                    </a>
                  </div>

                  <div className="pt-6 border-t border-gray-800">
                    <h3 className="font-semibold mb-4">Follow Me</h3>
                    <div className="flex gap-3">
                      {data.social.map((social) => {
                        const Icon = socialIcons[social.icon];
                        return (
                          <a
                            key={social.platform}
                            href={social.url}
                            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#00d9ff] text-gray-400 hover:text-black flex items-center justify-center transition-all duration-300"
                            aria-label={social.platform}
                          >
                            <Icon className="h-5 w-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="bg-[#1a1a1a] border-gray-800 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-[#0a0a0a] border-gray-700 focus:border-[#00d9ff] text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-[#0a0a0a] border-gray-700 focus:border-[#00d9ff] text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-[#0a0a0a] border-gray-700 focus:border-[#00d9ff] text-white resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#00d9ff] text-black hover:bg-[#00b8d9] transition-all duration-300 group"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
