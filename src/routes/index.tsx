import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Github, ExternalLink, ChevronDown, Download } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const techStack = [
  'Java', 'JavaScript', 'Spring Boot', 'MySQL', 'Hibernate',
]

function Home() {
  const featuredProjects = allProjects.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden grid-bg">
        {/* Radial glow blobs */}
        <div
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'var(--violet)' }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: 'var(--cyan)' }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 relative z-10">
          {/* Eyebrow */}
          <div className="animate-slide-up">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border"
              style={{
                borderColor: 'color-mix(in oklch, var(--violet) 40%, transparent)',
                background: 'color-mix(in oklch, var(--violet) 12%, transparent)',
                color: 'var(--violet)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: 'var(--cyan)' }}
              />
              Available for new opportunities
            </span>
          </div>

          {/* Main headline */}
          <div className="mt-6 animate-slide-up-delay-1">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tight">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block gradient-text-animated mt-1">Gauri Sawant</span>
            </h1>
          </div>

          {/* Role */}
          <div className="mt-6 animate-slide-up-delay-2">
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium max-w-2xl">
              Full Stack Developer crafting{' '}
              <span className="gradient-text font-semibold">fast, beautiful</span>{' '}
              web experiences with Java & Spring Boot.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 animate-slide-up-delay-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-3 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, var(--violet), var(--cyan))',
                color: 'oklch(0.98 0 0)',
                boxShadow: '0 0 24px color-mix(in oklch, var(--violet) 40%, transparent)',
              }}
            >
              View My Work
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, var(--violet), var(--cyan))',
                color: 'oklch(0.98 0 0)',
                boxShadow: '0 0 24px color-mix(in oklch, var(--violet) 40%, transparent)',
              }}            >
              Get In Touch
            </Link>
            <a
                href="/resume"
                className="inline-flex items-center gap-2 px-3 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                background: 'linear-gradient(135deg, var(--violet), var(--cyan))',
                color: 'oklch(0.98 0 0)',
                boxShadow: '0 0 24px color-mix(in oklch, var(--violet) 40%, transparent)',
              }}                >
                <Download size={16} aria-hidden="true" />
                View Resume
              </a>
          </div>

          <div
  className="flex justify-center lg:justify-end animate-fade-in"
  style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
>
  <div className="relative animate-float">
    <div
      className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 via-violet-500/20 to-indigo-400/30 blur-xl"
      aria-hidden="true"
    />
    
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full ring-4 ring-primary/40 ring-offset-4 ring-offset-background overflow-hidden shadow-2xl">
      <img
        src="/b612_20260223_142641_254.jpg"
        alt="Gauri Sawant — Backend Developer"
        className="w-full h-full object-cover"
        width={320}
        height={320}
      />
    </div>

    {/* Floating stat badge */}
    <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-card border border-border rounded-2xl px-4 py-2.5 shadow-lg">
      <div className="text-xs text-muted-foreground">Experience</div>
      <div className="text-lg font-extrabold">4+ Years</div>
    </div>

  </div>
</div>

          {/* Scroll indicator */}
          <div className="mt-20 flex justify-center animate-float opacity-50">
            <ChevronDown size={24} className="text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────────── */}
      <section className="py-16 border-y border-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-medium border border-border hover:border-primary/60 hover:text-primary transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Selected Work
              </p>
              <h2 className="text-4xl font-black">Featured Projects</h2>
            </div>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project._meta.path} project={project} index={i} />
            ))}
          </div>

          <div className="mt-8 sm:hidden text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View all projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick About ───────────────────────────────────────── */}
      <section className="py-24 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                About Me
              </p>
              <h2 className="text-4xl font-black mb-6 leading-tight">
                Passionate about{' '}
                <span className="gradient-text">building things</span> that matter
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
               I am working as a Java backend developer, leveraging strong programming 
              skills and a solid understanding of backend development principles. 
              Committed to contributing to the development of robust and scalable 
              applications using Java, Spring, Hibernate, and RESTful APIs. Eager
               to work in a collaborative environment, enhance skills, and deliver 
               efficient software solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                When I'm not pushing commits, I'm contributing to open source, writing
                about web development, or exploring the latest tools in the ecosystem.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-semibold text-sm text-primary hover:underline"
              >
                More about me <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '4', label: 'Years Experience' },
                { value: '5', label: 'Certifications' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="glass-card rounded-2xl p-6 text-center hover:border-primary/40 transition-all duration-300"
                >
                  <div className="text-4xl font-black gradient-text mb-1">{value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="rounded-3xl p-12 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, color-mix(in oklch, var(--violet) 20%, var(--background)), color-mix(in oklch, var(--cyan) 15%, var(--background)))',
              border: '1px solid color-mix(in oklch, var(--violet) 30%, transparent)',
            }}
          >
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, var(--violet), transparent 70%)',
              }}
            />
            <h2 className="text-4xl font-black mb-4 relative z-10">
              Let's build something{' '}
              <span className="gradient-text">great together</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto relative z-10">
              I'm currently available for new opportunities.
            </p>
            <Link
              to="/contact"
              className="relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, var(--violet), var(--cyan))',
                color: 'oklch(0.98 0 0)',
                boxShadow: '0 8px 32px color-mix(in oklch, var(--violet) 40%, transparent)',
              }}
            >
              Start a Conversation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof allProjects)[number]
  index: number
}) {
  const gradients = [
    'linear-gradient(135deg, oklch(0.4 0.22 285), oklch(0.5 0.18 200))',
    'linear-gradient(135deg, oklch(0.35 0.2 200), oklch(0.45 0.25 285))',
    'linear-gradient(135deg, oklch(0.45 0.2 320), oklch(0.4 0.22 285))',
  ]

  return (
    <div className="group glass-card rounded-2xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
      {/* Image placeholder */}
      <div
        className="h-44 relative overflow-hidden"
        style={{ background: gradients[index % gradients.length] }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
