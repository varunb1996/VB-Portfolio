import { useEffect, useRef } from 'react'

const projects = [
  {
    name: 'Advanced-GraphRAG',
    tagline: 'Knowledge Graph–Augmented Retrieval System',
    description:
      'Extends conventional RAG by structuring retrieved knowledge into dynamic property graphs. Entity relationships, semantic clusters, and multi-hop reasoning paths are resolved at query time — enabling precise answers over complex, interconnected unstructured data.',
    stack: ['LangGraph', 'Neo4j', 'FAISS', 'CrossEncoder', 'FastAPI', 'Docker'],
    impact: '10TB+ unstructured data indexed',
    metric: '~40% improved answer coherence over flat RAG',
    color: 'emerald',
    github: 'https://github.com/varunb1996/Advanced-GraphRAG',
  },
  {
    name: 'Advanced-Langgraph-Agents',
    tagline: 'Production Multi-Agent Workflow Orchestration',
    description:
      'A composable multi-agent platform built on LangGraph with support for branching reasoning graphs, tool-use orchestration, and automated retry logic. Designed for complex task decomposition where no single agent can reliably solve end-to-end.',
    stack: ['LangGraph', 'LLaMA 3', 'Mixtral', 'Claude', 'FastAPI', 'Redis'],
    impact: 'Parallel sub-agent coordination',
    metric: 'Automated reasoning pipelines with 0 human intervention',
    color: 'indigo',
    github: 'https://github.com/varunb1996/Advanced-Langgraph-Agents',
  },
  {
    name: 'Agentic-Actor-Critic-RAG',
    tagline: 'RL Actor-Critic Loop with RAG Policy Grounding',
    description:
      'Combines reinforcement learning with retrieval-augmented generation: an Actor agent generates candidate answers grounded in retrieved context, while a Critic agent scores them against quality criteria, feeding reward signals back to iteratively improve output fidelity.',
    stack: ['LangGraph', 'FAISS', 'PyTorch', 'PPO', 'BM25', 'FastAPI'],
    impact: 'Self-improving RAG pipeline via RL feedback',
    metric: 'Critic-guided output quality over baseline RAG',
    color: 'purple',
    github: 'https://github.com/varunb1996/Agentic-Actor-Critic-RAG',
  },
  {
    name: 'Autonomous-Research-And-Reasoning-Agent',
    tagline: 'End-to-End Autonomous Research Pipeline',
    description:
      'A fully autonomous AI researcher that decomposes a research question, retrieves and synthesises multi-source evidence, self-reflects on reasoning gaps, and iterates until a confidence threshold is met — producing structured, citation-backed reports without human checkpoints.',
    stack: ['LangGraph', 'Claude', 'LLaMA 3', 'Serpapi', 'FAISS', 'Python'],
    impact: 'Full research cycle without human-in-the-loop',
    metric: 'Self-reflective reasoning with automatic gap detection',
    color: 'emerald',
    github: 'https://github.com/varunb1996/Autonomous-Research-And-Reasoning-Agent',
  },
  {
    name: 'ml-research-pulse',
    tagline: 'Real-Time ML Paper Discovery & Synthesis Agent',
    description:
      'Monitors arXiv and Semantic Scholar for new ML publications, ranks papers by relevance using embedding similarity to user-defined interest profiles, and auto-generates structured digests — weekly intelligence briefings distilled from hundreds of papers.',
    stack: ['LangChain', 'FAISS', 'Sentence-Transformers', 'arXiv API', 'FastAPI', 'Cron'],
    impact: '200+ papers processed per run',
    metric: 'Automated weekly ML landscape digest',
    color: 'indigo',
    github: 'https://github.com/varunb1996/ml-research-pulse',
  },
  {
    name: 'Compass-Synthesis-Agent',
    tagline: 'Multi-Agent Problem Solver for Complex Life Challenges',
    description:
      'Decomposes complex user problems across 7 domain-specific agents (Health, Finance, Legal, Career, Housing, Government, Family) running in parallel. A conflict resolution agent reconciles contradictions, and a synthesis agent produces a single prioritized action plan — streamed in real time via SSE.',
    stack: ['FastAPI', 'LLaMA 3.1', 'Groq API', 'Next.js 15', 'Supabase', 'Docker'],
    impact: '7 specialist agents executing in parallel',
    metric: 'Real-time streaming synthesis via SSE',
    color: 'purple',
    github: 'https://github.com/varunb1996/Compass-Synthesis-Agent',
  },
]

const colorMap = {
  emerald: {
    badge: 'badge-emerald',
    accent: 'text-emerald-600',
    chip: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    border: 'hover:border-emerald-300',
    label: 'text-emerald-500',
  },
  indigo: {
    badge: 'badge-indigo',
    accent: 'text-indigo-600',
    chip: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    border: 'hover:border-indigo-300',
    label: 'text-indigo-500',
  },
  purple: {
    badge: 'badge-purple',
    accent: 'text-purple-600',
    chip: 'bg-purple-50 border-purple-200 text-purple-700',
    border: 'hover:border-purple-300',
    label: 'text-purple-500',
  },
}

function ProjectCard({ project }) {
  const c = colorMap[project.color]
  return (
    <div className={`glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-4 ${c.border}`}>
      {/* Header */}
      <div>
        <div className={`font-mono text-[10px] ${c.label} tracking-widest mb-1 uppercase`}>
          github.com/varunb1996
        </div>
        <h3 className="text-slate-900 font-bold text-lg leading-snug">{project.name}</h3>
        <p className={`text-sm font-medium ${c.accent} mt-0.5`}>{project.tagline}</p>
      </div>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1">{project.description}</p>

      {/* Impact chips */}
      <div className="flex flex-col gap-2">
        <div className={`text-xs px-3 py-1.5 rounded-lg border ${c.chip} font-mono flex items-center gap-2`}>
          <span className={c.accent}>▲</span> {project.impact}
        </div>
        <div className="text-xs px-3 py-1.5 rounded-lg border border-slate-100 bg-slate-50 text-slate-600 font-mono flex items-center gap-2">
          <span className="text-slate-400">◆</span> {project.metric}
        </div>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map(t => (
          <span key={t} className={`badge ${c.badge} text-[0.65rem]`}>{t}</span>
        ))}
      </div>

      {/* GitHub button */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto inline-flex items-center gap-2 text-xs font-mono font-semibold ${c.accent} hover:underline`}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        View on GitHub ↗
      </a>
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.05 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" className="bg-slate-50 py-24 px-6">
      <div ref={ref} className="section-fade max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-emerald-600 text-xs tracking-widest uppercase">02 / Work</span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mt-3">
            Featured{' '}
            <span className="text-gradient-emerald">Projects</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Open-source agentic systems and AI pipelines built to solve real retrieval, reasoning, and synthesis problems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => <ProjectCard key={p.name} project={p} />)}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/varunb1996"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-200 font-mono"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            More on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
