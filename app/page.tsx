import { ThemeProvider } from '@/components/ThemeProvider'
import { CustomCursor } from '@/components/CustomCursor'
import { LoadingScreen } from '@/components/LoadingScreen'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { TechCarousel } from '@/components/TechCarousel'
import { About } from '@/components/About'
import { Education } from '@/components/Education'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Certifications } from '@/components/Certifications'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background">
        <LoadingScreen />
        <CustomCursor />
        <AnimatedBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <TechCarousel />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}
