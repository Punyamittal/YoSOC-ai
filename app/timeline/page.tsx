"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Users, Lightbulb, Code, Trophy, Star, ArrowRight, CheckCircle, Clock } from "lucide-react"

export default function TimelinePage() {
  const timelineEvents = [
    {
      month: "October 2024",
      title: "Registrations Open",
      icon: Calendar,
      description:
        "Applications open for all community roles. Join as a Project Lead, Mentor, Contributor, Designer, or Learner.",
      highlights: [
        "Application forms go live",
        "Community onboarding begins",
        "Role selection and preferences",
        "Initial project proposals",
      ],
      color: "bg-primary",
      status: "active",
    },
    {
      month: "November 2024",
      title: "Team Formation",
      icon: Users,
      description: "Participants are matched with projects and teams based on skills, interests, and availability.",
      highlights: [
        "Project team assignments",
        "Mentor-mentee matching",
        "Initial team meetings",
        "Project scope finalization",
      ],
      color: "bg-secondary",
      status: "upcoming",
    },
    {
      month: "December 2024",
      title: "Project Pitches",
      icon: Lightbulb,
      description: "Teams present their project ideas, get feedback, and finalize their development roadmaps.",
      highlights: [
        "Project pitch presentations",
        "Community feedback sessions",
        "Technical architecture planning",
        "Milestone definition",
      ],
      color: "bg-accent",
      status: "upcoming",
    },
    {
      month: "January 2025",
      title: "Coding Begins",
      icon: Code,
      description: "The main development phase starts with teams working on their open-source projects.",
      highlights: [
        "Active development phase",
        "Weekly progress check-ins",
        "Code reviews and collaboration",
        "Continuous learning workshops",
      ],
      color: "bg-chart-4",
      status: "upcoming",
    },
    {
      month: "February 2025",
      title: "Mid Evaluations",
      icon: CheckCircle,
      description: "Progress assessment, feedback collection, and course corrections for the final stretch.",
      highlights: [
        "Project progress evaluation",
        "Mentor feedback sessions",
        "Technical skill assessments",
        "Final phase planning",
      ],
      color: "bg-chart-5",
      status: "upcoming",
    },
    {
      month: "March 2025",
      title: "Final Submissions & Showcase",
      icon: Trophy,
      description: "Projects are completed, showcased to the community, and celebrated with awards and recognition.",
      highlights: [
        "Project completion and submission",
        "Community showcase event",
        "Awards and recognition ceremony",
        "Networking and celebration",
      ],
      color: "bg-primary",
      status: "upcoming",
    },
  ]

  const stats = [
    { number: "6", label: "Months Program", icon: Clock },
    { number: "50+", label: "Projects Expected", icon: Code },
    { number: "500+", label: "Participants", icon: Users },
    { number: "25+", label: "Countries", icon: Star },
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
              Program Timeline
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Your 6-Month Journey</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From registration to showcase, follow the complete Y-SoC timeline and see how you'll grow as a developer
              and contributor to the open-source community.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16"
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
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-3 neon-glow">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Program Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each phase is carefully designed to maximize learning, collaboration, and project success
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-0.5" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.month}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary transform -translate-x-2 md:-translate-x-2 z-10" />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <Card className="hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className={`w-12 h-12 rounded-lg ${event.color} flex items-center justify-center neon-glow`}
                          >
                            <event.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <Badge variant={event.status === "active" ? "default" : "secondary"} className="mb-2">
                              {event.status === "active" ? "Current Phase" : "Upcoming"}
                            </Badge>
                            <h3 className="text-sm font-medium text-muted-foreground">{event.month}</h3>
                          </div>
                        </div>

                        <h4 className="text-xl font-bold text-foreground mb-3">{event.title}</h4>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>

                        <div className="space-y-2">
                          <h5 className="font-semibold text-foreground text-sm">Key Activities:</h5>
                          <ul className="space-y-1">
                            {event.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-center text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't miss out on this incredible opportunity to grow, learn, and contribute to meaningful projects. Your
              open-source journey starts with a single application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-opacity neon-glow"
              >
                <Link href="/recruit" className="flex items-center">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/about">Learn More About Y-SoC</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
