"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, MessageSquare, Send, CheckCircle, MapPin, Clock, Users } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactCategories = [
    { value: "general", label: "General Inquiry" },
    { value: "sponsorship", label: "Sponsorship Opportunities" },
    { value: "partnership", label: "Partnership Proposal" },
    { value: "media", label: "Media & Press" },
    { value: "technical", label: "Technical Support" },
    { value: "feedback", label: "Feedback & Suggestions" },
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@Y-SoC.dev",
      action: "Send Email",
    },
    {
      icon: MessageSquare,
      title: "Join Discord",
      description: "Connect with our community",
      contact: "5,000+ members",
      action: "Join Server",
    },
    {
      icon: MapPin,
      title: "Global Community",
      description: "We're everywhere",
      contact: "25+ countries",
      action: "View Map",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Contact form submitted:", formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 neon-glow">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold gradient-text mb-6">Message Sent!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Thank you for reaching out! We'll get back to you within 24-48 hours.
              </p>
              <div className="space-y-4">
                <p className="text-muted-foreground">For immediate assistance, join our Discord community:</p>
                <Button className="gradient-primary text-white hover:opacity-90 transition-opacity neon-glow">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Join Discord Community
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Contact Y-SoC</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions, ideas, or want to get involved? We'd love to hear from you. Reach out to our team or join
              our vibrant Discord community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-6 neon-glow">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{info.title}</h3>
                    <p className="text-muted-foreground mb-4">{info.description}</p>
                    <p className="text-primary font-medium mb-6">{info.contact}</p>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="border-border/50 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger className="border-border/50 focus:border-primary">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactCategories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                        className="border-border/50 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        className="border-border/50 focus:border-primary min-h-[150px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gradient-primary text-white hover:opacity-90 transition-opacity neon-glow"
                    >
                      {isSubmitting ? (
                        "Sending Message..."
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Discord Community */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8"
            >
              <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center neon-glow">
                      <MessageSquare className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Join Our Discord</h3>
                      <p className="text-secondary font-medium">Connect instantly with our community</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Get real-time support, connect with other developers, participate in discussions, and stay updated
                    with the latest Y-SoC news and events.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">5,000+</div>
                      <div className="text-sm text-muted-foreground">Active Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">24/7</div>
                      <div className="text-sm text-muted-foreground">Community Support</div>
                    </div>
                  </div>
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Join Discord Server
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">Quick Info</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-foreground">Response Time</div>
                        <div className="text-sm text-muted-foreground">24-48 hours</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-foreground">Community Size</div>
                        <div className="text-sm text-muted-foreground">500+ active developers</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-foreground">Global Reach</div>
                        <div className="text-sm text-muted-foreground">25+ countries worldwide</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
