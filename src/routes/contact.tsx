import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Twitter,
  Globe,
  CheckCircle2,
  MapPin,
  Clock,
} from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/GauriCo?tab=repositories',
    icon: Github,
    color: 'var(--foreground)',
    bg: 'color-mix(in oklch, var(--foreground) 10%, transparent)',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gauri-sawant-a54354211/',
    icon: Linkedin,
    color: 'oklch(0.6 0.2 240)',
    bg: 'color-mix(in oklch, oklch(0.6 0.2 240) 12%, transparent)',
  },
   { name: 'Mail', href: 'mailto:gaurisawant567@gmail.com', icon: Mail, username: 'gaurisawant567@gmail.com' },
]

const skillGroups = [
  {
    label: 'Frontend',
    color: 'var(--violet)',
    skills: ['React', 'JavaScript', 'HTML & CSS'],
  },
  {
    label: 'Backend',
    color: 'var(--cyan)',
    skills: ['Java', 'Spring Boot','REST APIs', 'MySQL', 'Hibernate'],
  },
  {
    label: 'Tools',
    color: 'oklch(0.7 0.22 40)',
    skills: ['VS Code', 'Spring Tool Suit', 'Git', 'Postman', 'Flex Deploy', 'JDeveloper'],
  },
]

function Contact() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await fetch('/contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      setSubmitted(true)
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto animate-slide-up">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              background:
                'linear-gradient(135deg, color-mix(in oklch, var(--violet) 20%, transparent), color-mix(in oklch, var(--cyan) 20%, transparent))',
              border: '2px solid color-mix(in oklch, var(--violet) 40%, transparent)',
            }}
          >
            <CheckCircle2
              className="w-10 h-10"
              style={{ color: 'var(--cyan)' }}
            />
          </div>
          <h2 className="text-3xl font-black mb-3">Message Sent!</h2>
          <p className="text-muted-foreground mb-8">
            Thanks for reaching out. I typically respond within 24 hours.
          </p>
          <button
            onClick={() => { setSubmitted(false); setFields({ name: '', email: '', subject: '', message: '' }) }}
            className="px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--violet), var(--cyan))',
              color: 'oklch(0.98 0 0)',
            }}
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* ── Header ────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden grid-bg">
        <div
          className="absolute top-0 right-0 w-80 h-80 opacity-15 blur-3xl pointer-events-none rounded-full"
          style={{ background: 'var(--cyan)' }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 animate-slide-up">
            Get In Touch
          </p>
          <h1 className="text-5xl sm:text-6xl font-black mb-4 animate-slide-up-delay-1">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl animate-slide-up-delay-2">
            Have a project in mind? Want to collaborate? Or just want to say hi?
            My inbox is always open.
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* ── Contact Form ── */}
            <div className="lg:col-span-3">
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={fields.name}
                        onChange={handleChange}
                        required
                        placeholder="Alex Johnson"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 transition-all duration-200 text-sm"
                        style={{ '--tw-ring-color': 'var(--violet)' } as React.CSSProperties}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={fields.email}
                        onChange={handleChange}
                        required
                        placeholder="alex@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 transition-all duration-200 text-sm"
                        style={{ '--tw-ring-color': 'var(--violet)' } as React.CSSProperties}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={fields.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 transition-all duration-200 text-sm"
                      style={{ '--tw-ring-color': 'var(--violet)' } as React.CSSProperties}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={fields.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project, idea, or just say hello..."
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 transition-all duration-200 resize-none text-sm"
                      style={{ '--tw-ring-color': 'var(--violet)' } as React.CSSProperties}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{
                      background: 'linear-gradient(135deg, var(--violet), var(--cyan))',
                      color: 'oklch(0.98 0 0)',
                      boxShadow: '0 4px 20px color-mix(in oklch, var(--violet) 40%, transparent)',
                    }}
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact info */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-5">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'color-mix(in oklch, var(--violet) 15%, transparent)',
                      }}
                    >
                      <Mail size={16} style={{ color: 'var(--violet)' }} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                      <a
                        href="mailto:hello@gaurisawant.dev"
                        className="text-sm font-medium hover:text-primary transition-colors"
                      >
                        hello@gaurisawant.dev
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'color-mix(in oklch, var(--cyan) 15%, transparent)',
                      }}
                    >
                      <MapPin size={16} style={{ color: 'var(--cyan)' }} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                      <p className="text-sm font-medium">San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'color-mix(in oklch, var(--foreground) 10%, transparent)',
                      }}
                    >
                      <Clock size={16} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Response time</p>
                      <p className="text-sm font-medium">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-5">Find Me Online</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map(({ name, href, icon: Icon, color, bg }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border hover:border-primary/40 transition-all duration-200 hover:-translate-y-0.5 group"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                        style={{ background: bg }}
                      >
                        <Icon size={15} style={{ color }} />
                      </div>
                      <span className="text-sm font-medium">{name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-5">Tech I Work With</h3>
                <div className="space-y-5">
                  {skillGroups.map(({ label, color, skills }) => (
                    <div key={label}>
                      <p
                        className="text-xs font-semibold uppercase tracking-wide mb-2"
                        style={{ color }}
                      >
                        {label}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-full text-xs font-medium border border-border hover:border-primary/40 transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
