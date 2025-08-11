import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    platform: [
      { href: '/clients', label: 'For Clients' },
      { href: '/professionals', label: 'For Professionals' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/blog', label: 'Blog' },
    ],
    company: [
      { href: '/about-us', label: 'About Us' },
      { href: '/support', label: 'Support' },
      { href: '/careers', label: 'Careers' },
      { href: '/contact', label: 'Contact' },
    ],
    legal: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/cookies', label: 'Cookie Policy' },
      { href: '/security', label: 'Security' },
    ],
    social: [
      { href: 'https://x.com/NunoG_Rodrigues', label: 'Twitter', icon: '𝕏' },
      { href: 'https://www.linkedin.com/in/nuno-g-rodrigues-210a59/', label: 'LinkedIn', icon: 'in' },
    ],
  }

  return (
    <footer className="border-t border-border bg-background" role="contentinfo">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold text-primary">GigExec</span>
            </div>
            <p className="text-muted-foreground max-w-md text-sm sm:text-base">
              Connecting businesses with top-tier professionals. 
              Find the perfect match for your next project.
            </p>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs">
                Trusted by 10,000+ companies
              </Badge>
            </div>
          </div>
          
          {/* Platform Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm sm:text-base">Platform</h4>
            <nav className="space-y-2" aria-label="Platform links">
              {footerLinks.platform.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm sm:text-base">Company</h4>
            <nav className="space-y-2" aria-label="Company links">
              {footerLinks.company.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm sm:text-base">Legal</h4>
            <nav className="space-y-2" aria-label="Legal links">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-border pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="max-w-md">
            <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Stay Updated</h4>
            <p className="text-muted-foreground text-xs sm:text-sm mb-4">
              Get the latest updates on new features and professional insights.
            </p>
            <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                aria-label="Email address for newsletter"
              />
              <Button size="sm" className="rounded-lg bg-primary hover:bg-primary-600 text-sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-muted-foreground text-xs sm:text-sm">
              © {currentYear} GigExec. All rights reserved.
            </div>

            {/* Social Links */}
            <nav className="flex items-center space-x-4" aria-label="Social media links">
              {footerLinks.social.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-lg" aria-hidden="true">{social.icon}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
