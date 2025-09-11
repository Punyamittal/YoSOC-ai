"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Twitter, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = {
    program: [
      { label: "About Y-SoC", href: "/about" },
      { label: "Timeline", href: "/timeline" },
      { label: "Join Program", href: "/recruit" },
      { label: "FAQ", href: "#" },
    ],
    community: [
      { label: "Team", href: "/team" },
      { label: "Discord", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Blog", href: "#" },
    ],
    sponsors: [
      { label: "Our Sponsors", href: "/sponsors" },
      { label: "Become a Sponsor", href: "/sponsors" },
      { label: "Partnership", href: "/contact" },
      { label: "Media Kit", href: "#" },
    ],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "Help Center", href: "#" },
      { label: "Code of Conduct", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "/contact", label: "Email" },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0.4)",
                        "0 0 0 4px rgba(59, 130, 246, 0.1)",
                        "0 0 0 0 rgba(59, 130, 246, 0.4)"
                      ]
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <motion.span 
                      className="text-2xl font-mono font-bold text-primary"
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(59, 130, 246, 0.5)",
                          "0 0 8px rgba(59, 130, 246, 0.8)",
                          "0 0 0px rgba(59, 130, 246, 0.5)"
                        ]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      &lt;/&gt;
                    </motion.span>
                  </motion.div>
                  <span className="font-bold text-2xl gradient-text">Y-SoC</span>
                </Link>
                <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                  Empowering the next generation of developers through open-source collaboration. Join thousands of
                  young developers building the future together.
                </p>
                <Badge variant="secondary" className="mb-6">
                  October 2025 - March 2026
                </Badge>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:text-primary transition-colors"
                    >
                      <Link href={social.href} aria-label={social.label}>
                        <social.icon className="h-5 w-5" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3 grid md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-foreground mb-4">Program</h3>
                <ul className="space-y-3">
                  {footerLinks.program.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-foreground mb-4">Community</h3>
                <ul className="space-y-3">
                  {footerLinks.community.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-foreground mb-4">Sponsors</h3>
                <ul className="space-y-3">
                  {footerLinks.sponsors.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-foreground mb-4">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center text-sm text-muted-foreground"
            >
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>by the Y-SoC community</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <p className="text-sm text-muted-foreground">© 2024 Y-SoC. All rights reserved.</p>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="hover:text-primary transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
