import { useEffect, useRef } from 'react'

const timeline = [
  {
    year: '2014–2018',
    role: 'B.E. Mechanical Engineering',
    org: 'Solapur University, India',
    desc: 'Built a rigorous physics and engineering foundation — thermodynamics, mechanics, and systems thinking that later became the lens through which I approach ML problems in the real world.',
    color: 'text-slate-600',
    dot: 'bg-slate-400',
  },
  {
    year: '2019–2023',
    role: 'M.Sc. Mechatronics (AI/Robotics track)',
    org: 'Universität Siegen, Germany',
    desc: 'Dove deep into robotics, computer vision, control systems, and embedded AI. Contributed to NLP and computer vision benchmarking as a student research assistant — benchmarking SOTA segmentation models and optimising HPC data pipelines, cutting training time by 30%.',
    color: 'text-indigo-600',
    dot: 'bg-indigo-400',
  },
  {
    year: 'Jan–Sep 2023',
    role: "Master's Thesis Researcher",
    org: 'Forschungszentrum Jülich (Helmholtz Centre), Germany',
    desc: 'Applied physics-informed 3D CNNs to predict hydrogen electrolyser membrane permeability from microstructural data — achieving 95–97% accuracy. This bridged my engineering instincts with deep learning in a way that shaped how I think about data-scarce, high-stakes ML problems.',
    color: 'text-purple-600',
    dot: 'bg-purple-400',
  },
  {
    year: 'Jan 2022–Present',
    role: 'AI/ML Engineer (Freelance)',
    org: 'GAIA Initiative (Remote)',
    desc: 'Designing and shipping production AI systems end-to-end — from large-scale RAG pipelines ingesting 5M+ monthly records across 10TB of unstructured data, to multi-agent orchestration platforms and privacy-preserving federated models. Containerised 15+ ML microservices achieving 99.5% API availability at 1,000+ concurrent requests.',
    color: 'text-emerald-600',
    dot: 'bg-emerald-500',
  },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="bg-slate-50 py-24 px-6">
      <div ref={ref} className="section-fade max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="font-mono text-emerald-600 text-xs tracking-widest uppercase">00 / About</span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mt-3">
            The Engineer Behind the{' '}
            <span className="text-gradient-emerald">Models</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
            I didn't start in software — I started with equations describing physical reality. That background
            shapes everything: how I model uncertainty, how I reason about causality, and why I care deeply
            about AI systems that work in the real world, not just on benchmarks.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Timeline */}
          <div className="md:col-span-3 relative">
            <div className="absolute left-2.5 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/40 via-indigo-400/20 to-transparent" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="relative pl-10">
                  <div className={`absolute left-0 top-1 w-5 h-5 rounded-full ${item.dot} border-2 border-slate-50 ring-2 ring-slate-200`} />
                  <div className="font-mono text-xs text-slate-400 mb-1 tracking-widest">{item.year}</div>
                  <div className={`font-bold text-base ${item.color}`}>{item.role}</div>
                  <div className="text-slate-400 text-xs mb-2 font-mono">{item.org}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="md:col-span-2 space-y-6">
            <div className="glass-card glass-card-hover rounded-2xl p-6">
              <h3 className="text-slate-900 font-bold mb-3 flex items-center gap-2">
                <span className="text-emerald-500">⚡</span> Engineering Philosophy
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                I bridge the gap between AI research and deployable software. A new LLM paper is only as
                valuable as the infrastructure that can serve it at scale. I think in systems — latency budgets,
                failure modes, data drift, and cost per inference — not just model accuracy.
              </p>
            </div>

            <div className="glass-card glass-card-hover rounded-2xl p-6">
              <h3 className="text-slate-900 font-bold mb-3 flex items-center gap-2">
                <span className="text-indigo-500">🌍</span> Languages
              </h3>
              <div className="space-y-3">
                {[
                  { lang: 'English', level: 'Fluent', pct: 98, color: 'bg-emerald-500' },
                  { lang: 'German', level: 'Professional', pct: 72, color: 'bg-indigo-500' },
                  { lang: 'Hindi', level: 'Native', pct: 100, color: 'bg-purple-500' },
                ].map(({ lang, level, pct, color }) => (
                  <div key={lang}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-700 font-medium">{lang}</span>
                      <span className="text-slate-400 text-xs font-mono">{level}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card glass-card-hover rounded-2xl p-6">
              <h3 className="text-slate-900 font-bold mb-3 flex items-center gap-2">
                <span className="text-purple-500">🎯</span> Currently Exploring
              </h3>
              <ul className="text-slate-600 text-sm space-y-2">
                <li className="flex gap-2"><span className="text-emerald-500">→</span> Actor-Critic RL loops over LLM reasoning chains</li>
                <li className="flex gap-2"><span className="text-emerald-500">→</span> GraphRAG for structured knowledge synthesis</li>
                <li className="flex gap-2"><span className="text-emerald-500">→</span> Privacy-preserving federated distillation</li>
                <li className="flex gap-2"><span className="text-emerald-500">→</span> Autonomous research & self-reflection agents</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
