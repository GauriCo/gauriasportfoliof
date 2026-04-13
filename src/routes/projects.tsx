import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  // Collect all unique tags
  const allTags = ['All', ...Array.from(new Set(allProjects.flatMap((p) => p.tags)))]

  const filtered =
    activeFilter === 'All'
      ? allProjects
      : allProjects.filter((p) => p.tags.includes(activeFilter))

  const gradients = [
    'linear-gradient(135deg, oklch(0.38 0.24 285), oklch(0.48 0.2 200))',
    'linear-gradient(135deg, oklch(0.32 0.2 200), oklch(0.44 0.24 285))',
    'linear-gradient(135deg, oklch(0.42 0.22 320), oklch(0.38 0.24 285))',
    'linear-gradient(135deg, oklch(0.44 0.2 160), oklch(0.38 0.24 200))',
    'linear-gradient(135deg, oklch(0.4 0.24 40), oklch(0.42 0.22 320))',
    'linear-gradient(135deg, oklch(0.38 0.2 240), oklch(0.44 0.2 160))',
  ]

  return (
    <div className="min-h-screen">
      {/* ── Header ────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden grid-bg">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 opacity-15 blur-3xl pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, var(--violet), var(--cyan))',
          }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 animate-slide-up">
            Portfolio
          </p>
          <h1 className="text-5xl sm:text-6xl font-black mb-4 animate-slide-up-delay-1">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto animate-slide-up-delay-2">
            A curated selection of things I've built — from side projects to
            production applications.
          </p>
        </div>
      </section>

      {/* ── Filter Tabs ───────────────────────────────────────── */}
      <section className="sticky top-16 z-40 py-4 border-b border-border/60"
        style={{
          backdropFilter: 'blur(12px)',
          background: 'color-mix(in oklch, var(--background) 90%, transparent)',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={[
                  'flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  activeFilter === tag
                    ? 'text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted border border-border',
                ].join(' ')}
                style={
                  activeFilter === tag
                    ? {
                        background:
                          'linear-gradient(135deg, var(--violet), var(--cyan))',
                        boxShadow:
                          '0 0 16px color-mix(in oklch, var(--violet) 40%, transparent)',
                      }
                    : {}
                }
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Grid ──────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground">
              No projects found for this filter.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <div
                  key={project._meta.path}
                  className="group glass-card rounded-2xl overflow-hidden hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                  style={{
                    '--hover-shadow': `0 20px 60px color-mix(in oklch, var(--violet) 20%, transparent)`,
                  } as React.CSSProperties}
                >
                  {/* Project image / gradient thumbnail */}
                  <div
                    className="relative h-48 overflow-hidden"
                    style={{ background: gradients[i % gradients.length] }}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-black text-white/20 select-none">
                          {project.title.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                    )}

                    {/* Hover overlay with links */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
                        >
                          <Github size={15} />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                          style={{
                            background: 'linear-gradient(135deg, var(--violet), var(--cyan))',
                            color: 'white',
                          }}
                        >
                          <ExternalLink size={15} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setActiveFilter(tag)}
                          className="text-xs"
                        >
                          <Badge
                            variant="secondary"
                            className="hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors"
                          >
                            {tag}
                          </Badge>
                        </button>
                      ))}
                    </div>

                    {/* Footer links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border/60">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github size={13} />
                          GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
                          style={{ color: 'var(--cyan)' }}
                        >
                          <ExternalLink size={13} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
