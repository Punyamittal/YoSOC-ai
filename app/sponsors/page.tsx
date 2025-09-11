"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

      {/* Sponsor Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Our Amazing Sponsors</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thank you to these incredible organizations supporting youth in open source
            </p>
          </motion.div>

          <div className="space-y-16">
            {sponsorTiers.map((tier, tierIndex) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: tierIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg ${tier.color} flex items-center justify-center neon-glow`}>
                      <tier.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold ${tier.textColor}`}>{tier.tier} Sponsors</h3>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {tier.benefits.map((benefit) => (
                      <Badge key={benefit} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div
                  className={`grid ${tier.sponsors.length <= 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-8 max-w-5xl mx-auto`}
                >
                  {tier.sponsors.map((sponsor, index) => (
                    <motion.div
                      key={sponsor.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                        <CardContent className="p-8 text-center">
                          <div className="mb-6 relative overflow-hidden rounded-lg bg-muted/50 p-6 group-hover:bg-muted/70 transition-colors">
                            <img
                              src={sponsor.logo || "/placeholder.svg"}
                              alt={`${sponsor.name} logo`}
                              className="w-full h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <h4 className="text-xl font-bold text-foreground mb-2">{sponsor.name}</h4>
                          <p className="text-sm text-muted-foreground mb-4">{sponsor.description}</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="group-hover:border-primary group-hover:text-primary transition-colors bg-transparent"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit Website
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
