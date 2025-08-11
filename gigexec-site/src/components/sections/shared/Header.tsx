import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/blog', label: 'Blog' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/support', label: 'Support' },
  ]

  return (
    <header className="sticky top-0 z-sticky border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2" aria-label="GigExec Home">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="text-2xl font-bold text-primary">GigExec</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <a href="/support">Support</a>
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              className="rounded-2xl px-6 py-3 bg-primary hover:bg-primary-600"
              asChild
            >
              <a href="https://gigexecs.com/signup">Sign Up</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border" id="mobile-menu" role="navigation" aria-label="Mobile navigation">
            <nav className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="/support" onClick={() => setIsMenuOpen(false)}>
                    Support
                  </a>
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="rounded-2xl px-6 py-3 bg-primary hover:bg-primary-600"
                  asChild
                >
                  <a href="https://gigexecs.com/signup" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
