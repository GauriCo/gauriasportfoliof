import {
  HeadContent,
  Scripts,
  createRootRoute,
  Outlet,
} from '@tanstack/react-router'
import { Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Gauri Sawant — Full Stack Developer' },
      {
        name: 'description',
        content:
          'Full stack developer specializing in Core Java, Spring Boot, MySQL, React, JavaScript, and modern web technologies.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

const navLinks = [
  { to: '/' as const, label: 'Home' },
  { to: '/about' as const, label: 'About' },
  { to: '/projects' as const, label: 'Projects' },
  { to: '/contact' as const, label: 'Contact' },
]

function Nav({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouterState()
  const pathname = router.location.pathname

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/60"
      style={{
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        background: 'color-mix(in oklch, var(--background) 85%, transparent)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-primary-foreground"
              style={{
                background: 'linear-gradient(135deg, var(--violet), var(--cyan))',
              }}
            >
              GS
            </div>
            <span className="font-bold text-lg hidden sm:block">Gauri Sawant</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => {
              const isActive =
                to === '/' ? pathname === '/' : pathname.startsWith(to)
              return (
                <Link
                  key={to}
                  to={to}
                  className={[
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                  ].join(' ')}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border/60 py-3 space-y-1">
            {navLinks.map(({ to, label }) => {
              const isActive =
                to === '/' ? pathname === '/' : pathname.startsWith(to)
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    'block px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                  ].join(' ')}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </header>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(true)

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <div className={dark ? 'dark' : ''}>
          <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Nav dark={dark} setDark={setDark} />
            <main className="pt-16">{children}</main>
            <footer className="border-t border-border/60 py-8 mt-24">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  © 2026 Gauri Sawant. My Portfolio. All rights reserved by Gauri
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                  <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
                  <Link to="/projects" className="hover:text-foreground transition-colors">Projects</Link>
                  <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  )
}
