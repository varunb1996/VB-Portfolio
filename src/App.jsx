import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Terminal from './components/Terminal'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Terminal />
      <Contact />
    </div>
  )
}
