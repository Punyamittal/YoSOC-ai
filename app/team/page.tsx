"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Globe, Mail, MapPin } from "lucide-react"

export default function TeamPage() {
  const coreTeam = [
    {
      name: "Alex Chen",
      role: "Founder & Lead Organizer",
      location: "San Francisco, USA",
      bio: "Passionate about open source and youth empowerment. Previously at Google, now building the future of collaborative coding.",
      image: "/professional-headshot-of-young-asian-developer.jpg",
      skills: ["Leadership", "Open Source", "Community Building"],
      social: {
        github: "alexchen",
        linkedin: "alexchen-dev",
        twitter: "alexcodes",
      },
    },
    {
      name: "Maria Rodriguez",
      role: "Technical Director",
      location: "Barcelona, Spain",
      bio: "Full-stack developer with 8+ years experience. Loves mentoring and building scalable systems that make a difference.",
      image: "/professional-headshot-of-hispanic-female-developer.jpg",
      skills: ["Full Stack", "Mentoring", "System Design"],
      social: {
        github: "mariarodriguez",
        linkedin: "maria-rodriguez-dev",
        website: "mariadev.com",
      },
    },
    {
      name: "Raj Patel",
      role: "Community Manager",
      location: "Mumbai, India",
      bio: "Community enthusiast who believes in the power of collaboration. Expert in building inclusive tech communities.",
      image: "/professional-headshot-of-indian-male-community-man.jpg",
      skills: ["Community", "Communication", "Event Planning"],
      social: {
        github: "rajpatel",
        linkedin: "raj-patel-community",
        twitter: "rajbuilds",
      },
    },
    {
      name: "Sarah Kim",
      role: "Design Lead",
      location: "Seoul, South Korea",
      bio: "UX/UI designer passionate about creating beautiful, accessible experiences. Advocate for design thinking in open source.",
      image: "/professional-headshot-of-korean-female-designer.jpg",
      skills: ["UI/UX Design", "Design Systems", "Accessibility"],
      social: {
        github: "sarahkim",
        linkedin: "sarah-kim-design",
        website: "sarahkim.design",
      },
    },
  ]

  const mentors = [
    {
      name: "David Johnson",
      role: "Senior Software Engineer",
      company: "Microsoft",
      expertise: "Cloud Architecture, DevOps",
      image: "/software-engineer-headshot.png",
      location: "Seattle, USA",
    },
    {
      name: "Priya Sharma",
      role: "Product Manager",
      company: "Meta",
      expertise: "Product Strategy, AI/ML",
      image: "/professional-headshot-of-indian-female-product-man.jpg",
      location: "London, UK",
    },
    {
      name: "Carlos Silva",
      role: "Tech Lead",
      company: "Spotify",
      expertise: "Mobile Development, React Native",
      image: "/professional-headshot-of-brazilian-male-tech-lead.jpg",
      location: "Stockholm, Sweden",
    },
    {
      name: "Aisha Hassan",
      role: "Security Engineer",
      company: "Cloudflare",
      expertise: "Cybersecurity, Infrastructure",
      image: "/professional-headshot-of-african-female-security-e.jpg",
      location: "Dubai, UAE",
    },
    {
      name: "Tom Wilson",
      role: "Open Source Maintainer",
      company: "Independent",
      expertise: "JavaScript, Node.js",
      image: "/professional-headshot-of-british-male-open-source-.jpg",
      location: "Manchester, UK",
    },
    {
      name: "Lisa Zhang",
      role: "Data Scientist",
      company: "Netflix",
      expertise: "Machine Learning, Python",
      image: "/professional-headshot-of-chinese-female-data-scien.jpg",
      location: "Los Angeles, USA",
    },
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
              Meet Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">The People Behind Y-SoC</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of organizers, mentors, and contributors from around the world are united by a shared
              passion for open source and youth empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Core Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The dedicated organizers who make Y-SoC possible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2">
                          {member.social.github && (
                            <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                              <Github className="w-4 h-4" />
                            </Button>
                          )}
                          {member.social.linkedin && (
                            <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                              <Linkedin className="w-4 h-4" />
                            </Button>
                          )}
                          {member.social.twitter && (
                            <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                              <Twitter className="w-4 h-4" />
                            </Button>
                          )}
                          {member.social.website && (
                            <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                              <Globe className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        {member.location}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Our Mentors</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry experts who guide and support our community members
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-secondary/30">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <img
                        src={mentor.image || "/placeholder.svg"}
                        alt={mentor.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover group-hover:ring-4 group-hover:ring-secondary/30 transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{mentor.name}</h3>
                    <p className="text-secondary font-medium mb-1">{mentor.role}</p>
                    <p className="text-sm text-muted-foreground mb-2">{mentor.company}</p>
                    <div className="flex items-center justify-center text-xs text-muted-foreground mb-3">
                      <MapPin className="w-3 h-3 mr-1" />
                      {mentor.location}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {mentor.expertise}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Want to Join Our Team?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals to help grow the Y-SoC community. Whether as a mentor,
              organizer, or contributor, there's a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-opacity neon-glow"
              >
                <Link href="/contact" className="flex items-center">
                  Get In Touch <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/recruit">Join as Participant</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
