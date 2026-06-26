import { useEffect, useRef } from 'react'

const domains = [
  {
    title: 'Deep Learning & NLP',
    icon: '🧠',
    color: 'emerald',
    description: 'End-to-end model development from architecture design to training and evaluation.',
    skills: [
      'PyTorch', 'TensorFlow', 'Keras', 'BERT', 'Transformers', 'CNNs',
      'RNNs / LSTMs', 'GANs', 'XGBoost', 'Scikit-learn', 'FinBERT', 'Ensemble Methods',
    ],
  },
  {
    title: 'LLMs & Agentic Systems',
    icon: '🤖',
    color: 'indigo',
    description: 'Building autonomous multi-agent pipelines and retrieval-augmented generation systems.',
    skills: [
      'LangGraph', 'LLaMA 3', 'Mixtral', 'Claude', 'RAG', 'FAISS',
      'BM25 Hybrid Retrieval', 'CrossEncoder Reranking', 'Multi-Agent Orchestration',
      'Prompt Engineering', 'SDXL / Flux', 'ComfyUI',
    ],
  },
  {
    title: 'MLOps & Infrastructure',
    icon: '⚙️',
    color: 'purple',
    description: 'Production-grade deployment, monitoring, and automation for ML at scale.',
    skills: [
      'Docker', 'Kubernetes', 'FastAPI', 'Jenkins', 'Terraform', 'Ansible',
      'AWS EKS', 'CI/CD', 'Datadog', 'Prometheus', 'Grafana', 'AWS CloudWatch',
      'n8n', 'Zapier',
    ],
  },
  {
    title: 'Research & Vision',
    icon: '🔬',
    color: 'slate',
    description: 'Applied ML research, computer vision, and privacy-preserving distributed learning.',
    skills: [
      'Computer Vision', '3D CNNs', 'Semantic Segmentation', 'Diffusion Models',
      'Federated Learning (Flower)', 'FedProx', 'Physics-Informed ML',
      'SHAP / LIME XAI', 'HPC Pipelines', 'Power BI', 'ParaView',
    ],
  },
]

const colorMap = {
  emerald: { badge: 'badge-emerald', header: 'text-emerald-700', border: 'hover:border-emerald-300' },
  indigo:  { badge: 'badge-indigo',  header: 'text-indigo-700',  border: 'hover:border-indigo-300' },
  purple:  { badge: 'badge-purple',  header: 'text-purple-700',  border: 'hover:border-purple-300' },
  slate:   { badge: 'badge-slate',   header: 'text-slate-700',   border: 'hover:border-slate-300' },
}

export default function Skills() {
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
    <section id="skills" className="bg-white py-24 px-6">
      <div ref={ref} className="section-fade max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-emerald-600 text-xs tracking-widest uppercase">01 / Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mt-3">
            Technical{' '}
            <span className="text-gradient-emerald">Stack</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Four years of compounding skill across the full AI development lifecycle —
            from research prototypes to containerised production APIs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {domains.map((domain) => {
            const c = colorMap[domain.color]
            return (
              <div
                key={domain.title}
                className={`glass-card glass-card-hover rounded-2xl p-7 transition-all duration-300 ${c.border}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl">{domain.icon}</span>
                  <div>
                    <h3 className={`font-bold text-lg ${c.header}`}>{domain.title}</h3>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{domain.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((skill) => (
                    <span key={skill} className={`badge ${c.badge} cursor-default`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Programming languages row */}
        <div className="mt-8 glass-card rounded-2xl p-6 flex flex-wrap items-center gap-4">
          <span className="text-slate-400 text-xs font-mono tracking-widest uppercase">Languages</span>
          <div className="flex flex-wrap gap-2">
            {['Python', 'C++', 'Java', 'MATLAB / Simulink', 'Bash'].map(lang => (
              <span key={lang} className="badge badge-slate">{lang}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
