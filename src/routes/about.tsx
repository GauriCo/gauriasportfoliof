import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

const skillCategories = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React / React Native', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML & CSS', level: 92 },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Core Java', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'Spring Boot', level: 75 },
      { name: 'REST API Design', level: 90 },
    ],
  },
  {
    label: 'DevOps & Tools',
    skills: [
      { name: 'Spring Tool Suit', level: 72 },
      { name: 'JDeveloper', level: 85 },
      { name: 'Flex Deploy', level: 82 },
      { name: 'Git & Version Control', level: 95 },
    ],
  },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full progress-bar"
          style={{
            '--progress-width': `${level}%`,
            background: 'linear-gradient(90deg, var(--violet), var(--cyan))',
          } as React.CSSProperties}
        />
      </div>
    </div>
  )
}

function About() {
  const jobs = [...allJobs].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  )
  const educations = [...allEducations].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  )

  return (
    <div className="min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden grid-bg">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: 'var(--violet)' }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="animate-slide-up">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                About Me
              </p>
              <h1 className="text-5xl sm:text-6xl font-black leading-tight mb-6">
                Building the{' '}
                <span className="gradient-text">web, one</span>
                <br />
                commit at a time
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hey! I'm Gauri Sawant, a Java Developer with 4 years of experience in designing, developing, and maintaining Java applications. 
                Seeking leverage expertise in Java technologies, software development, and problem-solving skills to 
                contribute to a dynamic development team.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My sweet spot is the React + TypeScript ecosystem. I care deeply
                about performance, accessibility, and writing code that teammates
                actually enjoy reading.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Outside of coding, I'm a table tennis player, amateur photographer,
                and occasional open source maintainer. I believe the best products
                come from teams that communicate well and ship often.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  { icon: MapPin, text: 'Mumbai, India' },
                  { icon: Briefcase, text: 'Open to opportunities' },
                ].map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border border-border text-muted-foreground"
                  >
                    <Icon size={13} />
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end animate-slide-up-delay-1">
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-3xl opacity-30 blur-xl"
                  style={{
                    background: 'linear-gradient(135deg, var(--violet), var(--cyan))',
                  }}
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
          </div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────────── */}
      <section className="py-24 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            Expertise
          </p>
          <h2 className="text-4xl font-black mb-12">
            Skills &{' '}
            <span className="gradient-text">Proficiencies</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skillCategories.map((category) => (
              <div
                key={category.label}
                className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all duration-300"
              >
                <h3
                  className="font-bold text-sm uppercase tracking-wide mb-6"
                  style={{ color: 'var(--violet)' }}
                >
                  {category.label}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience Timeline ───────────────────────────────── */}
      <section className="py-24 border-t border-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            Career
          </p>
          <h2 className="text-4xl font-black mb-12">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px"
              style={{
                background:
                  'linear-gradient(to bottom, var(--violet), var(--cyan), transparent)',
              }}
            />

            <div className="space-y-10">
              {jobs.map((job) => (
                <div key={`${job.company}-${job.startDate}`} className="flex gap-8 group">
                  {/* Dot */}
                  <div className="relative flex-shrink-0 w-10 flex justify-center">
                    <div
                      className="absolute top-1.5 w-4 h-4 rounded-full border-2 group-hover:scale-125 transition-transform duration-200"
                      style={{
                        background: 'var(--background)',
                        borderColor: 'var(--violet)',
                        boxShadow:
                          '0 0 8px color-mix(in oklch, var(--violet) 60%, transparent)',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="pb-2 flex-1">
                    <div className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-bold text-lg">{job.jobTitle}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mt-0.5">
                            <Briefcase size={12} />
                            <span className="font-medium">{job.company}</span>
                            <span>·</span>
                            <MapPin size={12} />
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
                          <Calendar size={11} />
                          {job.startDate.slice(0, 7)} – {job.endDate ? job.endDate.slice(0, 7) : 'Present'}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {job.summary}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {job.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Education ─────────────────────────────────────────── */}
      <section className="py-24 border-t border-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            Background
          </p>
          <h2 className="text-4xl font-black mb-12">
            <span className="gradient-text">Education</span>
          </h2>

          <div className="space-y-6">
            {educations.map((edu) => (
              <div
                key={edu.school}
                className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          'linear-gradient(135deg, color-mix(in oklch, var(--violet) 20%, transparent), color-mix(in oklch, var(--cyan) 20%, transparent))',
                      }}
                    >
                      <GraduationCap size={18} style={{ color: 'var(--violet)' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{edu.school}</h3>
                      <p className="text-muted-foreground text-sm">{edu.summary}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
                    <Calendar size={11} />
                    {edu.startDate.slice(0, 7)} – {edu.endDate ? edu.endDate.slice(0, 7) : 'Present'}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {edu.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
