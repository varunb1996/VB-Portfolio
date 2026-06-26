import { useEffect, useRef, useState } from 'react'

function GithubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function FloatingInput({ id, label, type = 'text', value, onChange, textarea = false }) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0
  const base = 'w-full bg-white border rounded-xl text-slate-800 text-sm outline-none transition-all duration-200 font-sans'
  const border = focused ? 'border-emerald-400 ring-2 ring-emerald-100' : 'border-slate-200'

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute left-4 pointer-events-none transition-all duration-200 font-mono text-xs tracking-wide z-10 ${
          lifted ? 'top-2 text-emerald-600 text-[10px]' : 'top-3.5 text-slate-400 text-sm'
        }`}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${base} ${border} px-4 pt-7 pb-3 resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${base} ${border} px-4 pt-6 pb-2.5`}
        />
      )}
    </div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const handleChange = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:varundbukka@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Enquiry')}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <section id="contact" className="bg-white py-24 px-6">
        <div ref={ref} className="section-fade max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-emerald-600 text-xs tracking-widest uppercase">04 / Contact</span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mt-3">
              Let's Build Something{' '}
              <span className="text-gradient-emerald">Real</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Open to full-time roles, research collaborations, and challenging freelance projects
              in AI/ML engineering across India, remote, or Europe.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-start">
            {/* Left info */}
            <div className="md:col-span-2 space-y-4">
              {[
                { icon: <MailIcon />, label: 'Email', value: 'varundbukka@gmail.com', href: 'mailto:varundbukka@gmail.com', color: 'text-emerald-600' },
                { icon: <GithubIcon />, label: 'GitHub', value: 'github.com/varunb1996', href: 'https://github.com/varunb1996', color: 'text-slate-700' },
                { icon: <LinkedinIcon />, label: 'LinkedIn', value: 'linkedin.com/in/varunbukka', href: 'https://linkedin.com/in/varunbukka', color: 'text-indigo-600' },
              ].map(({ icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card glass-card-hover flex items-center gap-4 p-5 rounded-2xl group"
                >
                  <span className={`${color} group-hover:scale-110 transition-transform duration-200`}>{icon}</span>
                  <div>
                    <div className="text-slate-400 text-xs font-mono uppercase tracking-widest">{label}</div>
                    <div className={`${color} text-sm font-semibold mt-0.5`}>{value}</div>
                  </div>
                </a>
              ))}

              <div className="glass-card rounded-2xl p-5">
                <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-2">Availability</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-slate-700 text-sm font-semibold">Open to opportunities</span>
                </div>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  India · Remote · European Roles<br />
                  Full-time · Contract · Research
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <FloatingInput id="name" label="Your Name" value={form.name} onChange={handleChange('name')} />
                <FloatingInput id="email" label="Email Address" type="email" value={form.email} onChange={handleChange('email')} />
              </div>
              <FloatingInput id="subject" label="Subject" value={form.subject} onChange={handleChange('subject')} />
              <FloatingInput id="message" label="Message" value={form.message} onChange={handleChange('message')} textarea />
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-500 text-white font-bold text-sm tracking-wide hover:bg-emerald-600 transition-all duration-200 shadow-lg shadow-emerald-100 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-emerald-600 font-bold tracking-widest text-sm">VB/</span>
            <span className="text-slate-400 text-xs">AI / ML Engineer</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://github.com/varunb1996" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><GithubIcon /></a>
            <a href="https://linkedin.com/in/varunbukka" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors"><LinkedinIcon /></a>
            <a href="mailto:varundbukka@gmail.com" className="text-slate-400 hover:text-emerald-600 transition-colors"><MailIcon /></a>
          </div>
          <p className="text-slate-400 text-xs font-mono">
            © {new Date().getFullYear()} Varun Bukka — Built with React + Tailwind
          </p>
        </div>
      </footer>
    </>
  )
}
