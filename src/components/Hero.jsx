import { useState, useEffect } from 'react'

const phrases = [
  'Building RAG pipelines that actually scale.',
  'Designing multi-agent systems for the real world.',
  'Turning LLM research into production-grade software.',
  'From physics intuition to intelligent machine systems.',
]

function useTypingEffect(phrases) {
  const [display, setDisplay] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]
    let timeout

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => setCharIdx(i => i + 1), 45)
      setDisplay(current.slice(0, charIdx))
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(i => i - 1), 22)
      setDisplay(current.slice(0, charIdx))
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setPhraseIdx(i => (i + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx, phrases])

  return display
}

export default function Hero() {
  const typed = useTypingEffect(phrases)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center hero-grid bg-white overflow-hidden"
    >
      {/* Subtle radial glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400 opacity-5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-400 opacity-5 rounded-full blur-3xl pointer-events-none" />

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-16 py-6 z-20 border-b border-slate-100">
        <span className="font-mono text-emerald-600 text-sm font-bold tracking-widest">VB/</span>
        <div className="hidden md:flex gap-8 text-sm text-slate-500">
          {['about', 'skills', 'projects', 'terminal', 'contact'].map(s => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="hover:text-emerald-600 transition-colors duration-200 capitalize tracking-wide font-medium"
            >
              {s}
            </button>
          ))}
        </div>
        <a
          href="https://github.com/varunb1996"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono border border-emerald-500/40 text-emerald-700 px-4 py-1.5 rounded-full hover:bg-emerald-50 transition-all duration-200 font-semibold"
        >
          GitHub ↗
        </a>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        {/* Available badge — centred above */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-mono tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            AVAILABLE FOR INDIA · REMOTE · EUROPE
          </div>
        </div>

        {/* Two-column layout: text left, photo right */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Left — text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none mb-4">
              <span className="text-slate-900">Varun</span>{' '}
              <span className="text-gradient-emerald">Bukka</span>
            </h1>

            <p className="text-slate-500 text-lg sm:text-xl font-medium mb-4 tracking-wide">
              AI / ML Engineer &nbsp;·&nbsp; NLP · RAG · Agentic Systems · MLOps
            </p>

            {/* Typing tagline */}
            <div className="h-8 flex items-center justify-center md:justify-start mb-8">
              <p className="text-slate-700 text-base font-mono">
                {typed}
                <span className="animate-blink text-emerald-500 ml-0.5">|</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollTo('projects')}
                className="px-8 py-3.5 rounded-xl bg-emerald-500 text-white font-bold text-sm tracking-wide hover:bg-emerald-600 transition-all duration-200 shadow-lg shadow-emerald-200 hover:-translate-y-0.5"
              >
                View Architecture ↓
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-8 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm tracking-wide hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-200"
              >
                Get in Touch →
              </button>
            </div>
          </div>

          {/* Right — photo */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-indigo-500 blur-md opacity-20 scale-105" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-emerald-100">
                <img
                  src={`${import.meta.env.BASE_URL}portfolio.jpeg`}
                  alt="Varun Bukka"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Small floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-white border border-slate-100 shadow-md rounded-full px-3 py-1.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-semibold text-slate-700">AI Engineer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { val: '5M+', label: 'Records / Month' },
            { val: '99.5%', label: 'API Uptime' },
            { val: '95%', label: 'RAG Accuracy' },
            { val: '3+', label: 'Years Production AI' },
          ].map(({ val, label }) => (
            <div key={label} className="bg-white border border-slate-100 shadow-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-gradient-emerald">{val}</div>
              <div className="text-xs text-slate-400 mt-1 font-mono tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-slate-300 text-xs font-mono tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-emerald-400/50 to-transparent" />
      </div>
    </section>
  )
}
