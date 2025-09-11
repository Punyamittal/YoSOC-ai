"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import DarkVeil from "@/components/DarkVeil"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  User, 
  Star, 
  Code, 
  Palette, 
  Database, 
  Globe, 
  ArrowRight, 
  Mail, 
  ExternalLink,
  Award,
  Clock,
  Users,
  BookOpen,
  MessageCircle
} from "lucide-react"

export default function MentorsPage() {
  const mentors = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Full-Stack Developer",
      company: "TechCorp Global",
      avatar: "/professional-headshot-of-chinese-female-data-scien.jpg",
      expertise: ["React", "Node.js", "Python", "AWS"],
      experience: "8+ years",
      rating: 4.9,
      students: 150,
      bio: "Passionate about building scalable web applications and mentoring the next generation of developers.",
      specialties: ["Frontend Development", "Backend Architecture", "Cloud Computing"],
      availability: "Available",
      timezone: "PST",
      languages: ["English", "Mandarin"]
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Lead UI/UX Designer",
      company: "DesignStudio Inc",
      avatar: "/professional-headshot-of-african-female-security-e.jpg",
      expertise: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
      experience: "6+ years",
      rating: 4.8,
      students: 120,
      bio: "Design enthusiast focused on creating intuitive user experiences and teaching design thinking principles.",
      specialties: ["UI/UX Design", "Design Systems", "User Research"],
      availability: "Available",
      timezone: "EST",
      languages: ["English", "Spanish"]
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Data Science Lead",
      company: "DataFlow Solutions",
      avatar: "/professional-headshot-of-indian-female-product-man.jpg",
      expertise: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      experience: "7+ years",
      rating: 4.9,
      students: 180,
      bio: "Data science expert passionate about AI/ML and helping students understand complex algorithms.",
      specialties: ["Machine Learning", "Data Analysis", "AI Ethics"],
      availability: "Available",
      timezone: "IST",
      languages: ["English", "Hindi", "Gujarati"]
    },
    {
      id: 4,
      name: "David Kim",
      role: "DevOps Engineer",
      company: "CloudNative Co",
      avatar: "/professional-headshot-of-korean-female-designer.jpg",
      expertise: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      experience: "5+ years",
      rating: 4.7,
      students: 90,
      bio: "Infrastructure specialist focused on automation and helping teams adopt DevOps best practices.",
      specialties: ["DevOps", "Cloud Infrastructure", "Automation"],
      availability: "Available",
      timezone: "KST",
      languages: ["English", "Korean"]
    },
    {
      id: 5,
      name: "Elena Rodriguez",
      role: "Mobile App Developer",
      company: "AppCraft Studios",
      avatar: "/professional-headshot-of-hispanic-female-developer.jpg",
      expertise: ["React Native", "Flutter", "iOS", "Android"],
      experience: "6+ years",
      rating: 4.8,
      students: 110,
      bio: "Mobile development expert passionate about cross-platform solutions and user experience.",
      specialties: ["Mobile Development", "Cross-Platform", "App Store Optimization"],
      availability: "Available",
      timezone: "CST",
      languages: ["English", "Spanish", "Portuguese"]
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      role: "Backend Architect",
      company: "ScaleTech Solutions",
      avatar: "/professional-headshot-of-indian-male-community-man.jpg",
      expertise: ["Java", "Spring Boot", "Microservices", "PostgreSQL"],
      experience: "9+ years",
      rating: 4.9,
      students: 200,
      bio: "Backend specialist focused on building robust, scalable systems and mentoring aspiring architects.",
      specialties: ["Backend Architecture", "Microservices", "Database Design"],
      availability: "Available",
      timezone: "GMT",
      languages: ["English", "Arabic", "Urdu"]
    }
  ]

  const expertiseCategories = [
    { name: "Frontend Development", icon: Code, count: 3, color: "bg-blue-500" },
    { name: "Backend Development", icon: Database, count: 2, color: "bg-green-500" },
    { name: "UI/UX Design", icon: Palette, count: 1, color: "bg-purple-500" },
    { name: "Data Science", icon: BookOpen, count: 1, color: "bg-orange-500" },
    { name: "DevOps", icon: Globe, count: 1, color: "bg-red-500" },
    { name: "Mobile Development", icon: MessageCircle, count: 1, color: "bg-pink-500" }
  ]

  const stats = [
    { number: "6", label: "Expert Mentors", icon: Users },
    { number: "850+", label: "Students Mentored", icon: BookOpen },
    { number: "4.8", label: "Average Rating", icon: Star },
    { number: "15+", label: "Technologies", icon: Code }
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
              Our Mentors
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Learn from Industry Experts</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get personalized guidance from experienced professionals who are passionate about helping you succeed in your open-source journey.
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

      {/* Expertise Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Expertise Areas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our mentors specialize in various technologies and domains to provide comprehensive guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {expertiseCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="h-32 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">{category.count} mentor{category.count !== 1 ? 's' : ''}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Meet Our Mentors</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals ready to guide you through your open-source journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    {/* Mentor Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative">
                        <img
                          src={mentor.avatar}
                          alt={mentor.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-background"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {mentor.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-1">{mentor.role}</p>
                        <p className="text-xs text-primary font-medium">{mentor.company}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {mentor.availability}
                      </Badge>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {mentor.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {mentor.expertise.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {mentor.expertise.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{mentor.expertise.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{mentor.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{mentor.students} students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{mentor.experience}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 gradient-primary text-white hover:opacity-90 transition-opacity">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Connect
                      </Button>
                      <Button size="sm" variant="outline" className="hover:border-primary hover:text-primary transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
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
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Ready to Get Mentored?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Y-SoC and get paired with experienced mentors who will guide you through your open-source journey and help you grow as a developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-opacity neon-glow"
              >
                <Link href="/recruit" className="flex items-center">
                  Apply as a Mentee <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="mailto:mentors@Y-SoC.dev" className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Become a Mentor
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
