"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import DarkVeil from "@/components/DarkVeil"
import Link from "next/link"
import { motion } from "framer-motion"
import { Crown, Star, Heart, ArrowRight, Mail, ExternalLink, Gift, Users, Zap } from "lucide-react"

export default function SponsorsPage() {
  const sponsorTiers = [
    {
      tier: "Platinum",
      icon: Crown,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      textColor: "text-purple-600",
      benefits: [
        "Logo on all marketing materials",
        "Dedicated sponsor showcase",
        "Direct access to talent pool",
        "Custom workshop opportunities",
        "Priority project partnerships",
      ],
      sponsors: [
        {
          name: "TechCorp Global",
          logo: "/abstract-tech-logo.png",
          website: "techcorp.com",
          description: "Leading cloud infrastructure provider",
        },
        {
          name: "DevTools Inc",
          logo: "/developer-tools-logo.png",
          website: "devtools.com",
          description: "Developer productivity platform",
        },
      ],
    },
    {
      tier: "Gold",
      icon: Star,
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
      textColor: "text-yellow-600",
      benefits: [
        "Logo on website and events",
        "Sponsor spotlight features",
        "Access to community showcase",
        "Networking opportunities",
        "Recruitment pipeline access",
      ],
      sponsors: [
        {
          name: "CodeBase Solutions",
          logo: "/software-solutions-company-logo.jpg",
          website: "codebase.io",
          description: "Enterprise software solutions",
        },
        {
          name: "OpenSource Hub",
          logo: "/open-source-platform-logo.jpg",
          website: "oshub.dev",
          description: "Open source project platform",
        },
        {
          name: "CloudNative Co",
          logo: "/cloud-native-company-logo.jpg",
          website: "cloudnative.co",
          description: "Cloud-native development tools",
        },
      ],
    },
    {
      tier: "Silver",
      icon: Heart,
      color: "bg-gradient-to-r from-gray-400 to-gray-600",
      textColor: "text-gray-600",
      benefits: [
        "Logo on website",
        "Social media recognition",
        "Community newsletter mentions",
        "Event participation opportunities",
      ],
      sponsors: [
        {
          name: "StartupLab",
          logo: "/startup-incubator-logo.jpg",
          website: "startuplab.com",
          description: "Startup incubator and accelerator",
        },
        {
          name: "EduTech Platform",
          logo: "/edutech-logo.png",
          website: "edutech.org",
          description: "Educational technology platform",
        },
        {
          name: "InnovateCorp",
          logo: "/innovation-company-logo.png",
          website: "innovate.corp",
          description: "Innovation consulting firm",
        },
        {
          name: "FutureDev",
          logo: "/future-development-logo.jpg",
          website: "futuredev.io",
          description: "Next-gen development tools",
        },
      ],
    },
  ]

  const sponsorshipPackages = [
    {
      name: "Community Champion",
      price: "$2,500",
      icon: Users,
      features: ["Silver tier benefits", "Community newsletter feature", "Social media shoutouts", "Logo on website"],
    },
    {
      name: "Innovation Partner",
      price: "$7,500",
      icon: Zap,
      features: [
        "Gold tier benefits",
        "Workshop hosting opportunity",
        "Recruitment pipeline access",
        "Event speaking slots",
      ],
    },
    {
      name: "Ecosystem Leader",
      price: "$15,000",
      icon: Crown,
      features: [
        "Platinum tier benefits",
        "Custom partnership opportunities",
        "Direct mentorship programs",
        "Priority project collaborations",
      ],
    },
  ]

  const stats = [
    { number: "500+", label: "Developers Reached" },
    { number: "50+", label: "Projects Supported" },
    { number: "25+", label: "Countries Represented" },
    { number: "95%", label: "Participant Satisfaction" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* DarkVeil Background */}
        <div className="absolute inset-0 opacity-60 dark:opacity-40">
          <DarkVeil />
        </div>
        
        {/* Light mode contrast overlay */}
        <div className="absolute inset-0 bg-white/10 dark:bg-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Our Sponsors
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Powered by Innovation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Y-SoC is made possible by forward-thinking companies and organizations who believe in empowering the next
              generation of developers.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Sponsorship Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Become a Sponsor</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us in empowering the next generation of developers and gain access to top talent
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sponsorshipPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-6 neon-glow">
                      <pkg.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold gradient-text mb-6">{pkg.price}</div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <Gift className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full gradient-primary text-white hover:opacity-90 transition-opacity">
                      Choose Package
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Partners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Community Partners</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're proud to work with these amazing organizations that share our mission of empowering youth in technology
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Tech Horizon Club", logo: "/placeholder-logo.png" },
              { name: "TechHelp4U", logo: "/placeholder-logo.png" },
              { name: "Lenient Tree", logo: "/placeholder-logo.png" },
              { name: "DevNovate", logo: "/placeholder-logo.png" },
              { name: "Hack with India", logo: "/placeholder-logo.png" },
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <Card className="h-32 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/60 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-md hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 group-hover:scale-105 group-hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="mb-3 relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors duration-300"></div>
                    </div>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {partner.name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how your organization can support youth developers and gain access to the most passionate
              emerging talent in tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-opacity neon-glow"
              >
                <Link href="/contact" className="flex items-center">
                  Become a Sponsor <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="mailto:sponsors@Y-SoC.dev" className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
