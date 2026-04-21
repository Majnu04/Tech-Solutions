import { usePersonalization } from '../context/PersonalizationContext'
import { memo } from 'react'

const Hero = () => {
  const { goal } = usePersonalization()

  const subheadlineMap: Record<string, string> = {
    website: 'High-performance websites built to convert visitors into customers.',
    leads: 'Conversion-first systems designed to generate qualified leads.',
    traffic: 'SEO and campaigns engineered to drive consistent traffic.',
    branding: 'Brand identities that build trust and recognition.'
  }

  const primaryCtaMap: Record<string, string> = {
    website: 'Build My Website',
    leads: 'Get More Leads',
    traffic: 'Grow My Traffic',
    branding: 'Build My Brand'
  }

  const subheadline = goal ? subheadlineMap[goal] : 'We engineer high-converting experiences—fast builds, performance SEO, and campaigns tuned for leads, revenue, and compounding growth.'
  const primaryCta = goal ? primaryCtaMap[goal] : 'Get Instant Estimate'

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_at_20%_20%,rgba(37,99,235,0.18),transparent_45%),radial-gradient(900px_at_80%_25%,rgba(34,197,94,0.08),transparent_40%),#020617]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] text-white text-balance">
            <span className="block">We Don’t Just Build Websites.</span>
            <span className="block text-[#8BB5FF]">We Build Revenue-Driven Businesses.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#C7CED9] max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a href="#contact" className="btn-primary cursor-pointer px-8 py-4 text-base w-full sm:w-auto text-center">
              {primaryCta}
            </a>
            <a href="#contact" className="btn-secondary cursor-pointer px-8 py-4 text-base w-full sm:w-auto text-center">
              Free Strategy Call
            </a>
            {goal && (
              <span className="text-xs text-[#8BB5FF] px-3 py-2 rounded-full border border-[#2563EB]/40 bg-[#0B1220]/70">Personalized for your goal</span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Hero)
