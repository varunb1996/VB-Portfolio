import { useState, useRef, useEffect } from 'react'

const RESPONSES = {
  help: [
    '┌─────────────────────────────────────────┐',
    '│  varun@ai-terminal — available commands  │',
    '└─────────────────────────────────────────┘',
    '',
    '  /about        →  Who is Varun Bukka?',
    '  /skills       →  Technical expertise',
    '  /experience   →  Work history',
    '  /projects     →  Featured repos',
    '  /contact      →  Get in touch',
    '  /stack        →  Favourite tech stack',
    '  clear         →  Clear terminal',
    '',
  ],
  '/about': [
    '$ cat about.md',
    '',
    'Name:     Varun Bukka',
    'Role:     AI / ML Engineer',
    'Based:    Solapur, India',
    'Open to:  India · Remote · European Roles',
    '',
    'Bio:',
    '  Physics-trained engineer turned AI systems builder.',
    '  I design and ship production-grade ML systems —',
    '  RAG pipelines, multi-agent orchestration, MLOps infra.',
    '  3+ years across research labs and freelance AI engineering.',
    '',
  ],
  '/skills': [
    '$ varun --list-skills',
    '',
    '[ Deep Learning & NLP ]',
    '  PyTorch · TensorFlow · BERT · Transformers · GANs · XGBoost',
    '',
    '[ LLMs & Agentic Systems ]',
    '  LangGraph · LLaMA 3 · Mixtral · Claude · RAG · FAISS',
    '  BM25 Hybrid · CrossEncoder Reranking · Multi-Agent Orchestration',
    '',
    '[ MLOps & Infrastructure ]',
    '  Docker · Kubernetes · FastAPI · Terraform · AWS EKS · CI/CD',
    '  Datadog · Prometheus · Grafana · n8n · Zapier',
    '',
    '[ Research & Vision ]',
    '  Computer Vision · 3D CNNs · Federated Learning · SHAP/LIME',
    '',
  ],
  '/experience': [
    '$ cat experience.json',
    '',
    '[1] AI/ML Engineer (Freelance) — Jan 2022 – Present',
    '    → Built RAG pipelines processing 5M+ monthly records',
    '    → 15+ ML microservices, 99.5% uptime at 1k+ RPS',
    '    → Multi-agent orchestration with Claude, LLaMA, Mixtral',
    '    → Federated learning with Flower / FedProx',
    '',
    '[2] Thesis Researcher — Forschungszentrum Jülich (2023)',
    '    → Physics-informed 3D CNN for electrolyser membranes',
    '    → 95–97% accuracy vs. simulated ground truth',
    '',
    '[3] Research Assistant — Universität Siegen (2020–2023)',
    '    → SOTA computer vision benchmarking',
    '    → HPC pipeline optimisation: -30% training time',
    '',
  ],
  '/projects': [
    '$ ls ~/projects/',
    '',
    '📁 Advanced-GraphRAG             → Graph-augmented knowledge retrieval',
    '📁 Advanced-Langgraph-Agents     → Multi-agent workflow orchestration',
    '📁 agentic-actor-crtic-rag       → RL Actor-Critic loop over RAG',
    '📁 Autonomous-Research-And-Reasoning-Agent',
    '                                 → Fully autonomous research agent',
    '📁 ml-research-pulse             → Real-time ML paper synthesis',
    '📁 Compass-Synthesis-Agent       → Multi-source structured synthesis',
    '',
    '→ github.com/varunb1996',
    '',
  ],
  '/contact': [
    '$ cat contact.yml',
    '',
    'email:    varundbukka@gmail.com',
    'github:   github.com/varunb1996',
    'linkedin: linkedin.com/in/varunbukka',
    'phone:    +91 8983193073',
    'location: Solapur, India',
    '',
    '→ Open to freelance, full-time, or research collaborations.',
    '',
  ],
  '/stack': [
    '$ varun --favourite-stack',
    '',
    'Language:   Python (primary), C++',
    'Agents:     LangGraph + Claude + FAISS',
    'Serving:    FastAPI + Docker + Kubernetes',
    'Monitoring: Prometheus + Grafana + Datadog',
    'Automation: n8n + Zapier + CI/CD pipelines',
    '',
    'Philosophy: ship it, monitor it, improve it.',
    '',
  ],
}

const SAMPLE_PROMPTS = ['/about', '/skills', '/experience', '/projects', '/contact', '/stack']

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'system', text: 'varun@ai-terminal:~$ Type a command or click a prompt below.' },
    { type: 'system', text: 'Type "help" to see all available commands.' },
    { type: 'divider' },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const runCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    if (!trimmed) return

    if (trimmed === 'clear') {
      setHistory([{ type: 'system', text: 'Terminal cleared. Type "help" for commands.' }])
      return
    }

    const key = trimmed === 'help' ? 'help' : trimmed
    const lines = RESPONSES[key]

    setHistory(prev => [
      ...prev,
      { type: 'input', text: `varun@ai-terminal:~$ ${cmd}` },
    ])

    if (!lines) {
      setHistory(prev => [
        ...prev,
        { type: 'error', text: `Command not found: ${cmd}. Type "help" for available commands.` },
      ])
      return
    }

    setIsTyping(true)
    lines.forEach((line, i) => {
      setTimeout(() => {
        setHistory(prev => [...prev, { type: 'output', text: line }])
        if (i === lines.length - 1) setIsTyping(false)
      }, i * 30)
    })
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isTyping) {
      runCommand(input)
      setInput('')
    }
  }

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
    <section id="terminal" className="bg-slate-900 py-24 px-6">
      <div ref={ref} className="section-fade max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-emerald-400 text-xs tracking-widest uppercase">03 / Interactive</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
            AI{' '}
            <span className="text-gradient-emerald">Terminal</span>
          </h2>
          <p className="text-slate-400 mt-4 text-sm">
            Query my profile like an AI agent. Type a command or click a prompt below.
          </p>
        </div>

        {/* Sample prompts */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {SAMPLE_PROMPTS.map(p => (
            <button
              key={p}
              onClick={() => { runCommand(p); inputRef.current?.focus() }}
              disabled={isTyping}
              className="font-mono text-xs px-3 py-1.5 rounded-lg border border-emerald-400/20 text-emerald-400 bg-emerald-400/5 hover:bg-emerald-400/12 hover:border-emerald-400/40 transition-all duration-150 disabled:opacity-40"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Terminal window */}
        <div className="terminal-bg rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800/80 bg-slate-900/60">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
            <span className="ml-3 font-mono text-xs text-slate-500">varun@ai-terminal:~</span>
          </div>

          {/* Output area */}
          <div
            className="h-80 overflow-y-auto p-5 font-mono text-sm space-y-0.5 cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, i) => {
              if (item.type === 'divider') return <div key={i} className="h-px bg-slate-800 my-2" />
              if (item.type === 'input') return <div key={i} className="text-emerald-300 font-semibold">{item.text}</div>
              if (item.type === 'error') return <div key={i} className="text-red-400">{item.text}</div>
              if (item.type === 'system') return <div key={i} className="text-slate-500 italic">{item.text}</div>
              return <div key={i} className="text-slate-300 whitespace-pre">{item.text}</div>
            })}
            {isTyping && (
              <div className="text-emerald-400 text-xs animate-pulse">processing...</div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input row */}
          <div className="flex items-center gap-3 px-5 py-3 border-t border-slate-800/80 bg-slate-900/40">
            <span className="font-mono text-emerald-400 text-sm select-none">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isTyping}
              placeholder="type a command…"
              className="flex-1 bg-transparent font-mono text-sm text-slate-200 outline-none placeholder-slate-600 disabled:opacity-40"
            />
            <span className="animate-blink text-emerald-400 font-mono">▋</span>
          </div>
        </div>
      </div>
    </section>
  )
}
