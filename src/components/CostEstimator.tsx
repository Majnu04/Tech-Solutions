import { motion, AnimatePresence } from 'framer-motion'
import { useMemo, useState } from 'react'
import { FaCheck, FaCode, FaChartLine, FaBullhorn, FaPalette, FaChevronDown, FaWhatsapp, FaFilePdf } from 'react-icons/fa'
import { usePersonalization } from '../context/PersonalizationContext'
import { generateEstimatePdf, ProposalMode } from '../utils/generateEstimatePdf'

type ServiceId = 'website' | 'seo' | 'ads' | 'branding'

interface ServiceConfig {
  id: ServiceId
  name: string
  basePrice: number
  popular?: boolean
  icon: JSX.Element
}

interface ServiceSelections {
  website: {
    pages: '5' | '10' | '15+'
    design: 'template' | 'custom' | 'premium'
    mobile: boolean
    cms: 'none' |  'custom'
    performance: boolean
  }
  seo: {
    keywords: '5' | '10' | '20'
    technical: boolean
    blogs: 0 | 2 | 4 | 8
    local: boolean
    duration: 3 | 6 | 12
  }
  ads: {
    platform: 'google' | 'meta' | 'both'
    budget: '<50k' | '50-100k' | '100-200k' | '200k+'
    landingPage: boolean
    duration: 1 | 3 | 6
  }
  branding: {
    logo: boolean
    colors: boolean
    social: boolean
    guidelines: boolean
  }
}

type ComplexityLevel = 'standard' | 'advanced' | 'premium'
type BusinessType = 'startup' | 'growing' | 'established'

const serviceConfigs: ServiceConfig[] = [
  { id: 'website', name: 'Website Development', basePrice: 35000, popular: true, icon: <FaCode /> },
  { id: 'seo', name: 'SEO', basePrice: 22000, popular: true, icon: <FaChartLine /> },
  { id: 'ads', name: 'Performance Ads', basePrice: 28000, icon: <FaBullhorn /> },
  { id: 'branding', name: 'Branding', basePrice: 18000, icon: <FaPalette /> }
]

const industryOptions = [
  'E-commerce', 'SaaS', 'Education', 'Healthcare', 'Real Estate', 'Finance', 'Hospitality', 'Professional Services'
]

const defaultSelections: ServiceSelections = {
  website: { pages: '10', design: 'custom', mobile: true, cms: 'wordpress', performance: true },
  seo: { keywords: '10', technical: true, blogs: 4, local: true, duration: 6 },
  ads: { platform: 'both', budget: '100-200k', landingPage: true, duration: 3 },
  branding: { logo: true, colors: true, social: true, guidelines: false }
}

const complexityMultiplier: Record<ComplexityLevel, number> = {
  standard: 1,
  advanced: 1.12,
  premium: 1.25
}

const businessMultiplier: Record<BusinessType, number> = {
  startup: 1,
  growing: 1.12,
  established: 1.28
}

const addOns = [
  { id: 'analytics', label: 'Advanced Analytics & Tagging', price: 4000 },
  { id: 'cro', label: 'Conversion Audit & CRO Plan', price: 7000 },
  { id: 'support', label: 'Priority Support (30 days)', price: 3500 }
]

const CostEstimator = () => {
  const { goal } = usePersonalization()
  const [selectedServices, setSelectedServices] = useState<Set<ServiceId>>(new Set(['website', 'seo']))
  const [selections, setSelections] = useState<ServiceSelections>(defaultSelections)
  const [complexity, setComplexity] = useState<ComplexityLevel>('advanced')
  const [businessType, setBusinessType] = useState<BusinessType>('growing')
  const [industry, setIndustry] = useState<string>('E-commerce')
  const [activeAddOns, setActiveAddOns] = useState<Set<string>>(new Set(['analytics']))
  const [generating, setGenerating] = useState(false)
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [mode, setMode] = useState<ProposalMode>('estimate')

  const toggleService = (serviceId: ServiceId) => {
    setSelectedServices(prev => {
      const next = new Set(prev)
      if (next.has(serviceId)) {
        next.delete(serviceId)
      } else {
        next.add(serviceId)
      }
      return next
    })
  }

  const toggleAddOn = (id: string) => {
    setActiveAddOns(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const updateSelection = <K extends ServiceId, T extends keyof ServiceSelections[K]>(service: K, key: T, value: ServiceSelections[K][T]) => {
    setSelections(prev => ({
      ...prev,
      [service]: {
        ...prev[service],
        [key]: value
      }
    }))
  }

  const toggleBranding = (key: keyof ServiceSelections['branding']) => {
    updateSelection('branding', key, !selections.branding[key])
  }

  const computeWebsite = () => {
    const choice = selections.website
    const features: { label: string; price: number }[] = []
    const base = serviceConfigs.find(s => s.id === 'website')?.basePrice || 0
    const pagePrice = choice.pages === '5' ? 0 : choice.pages === '10' ? 8000 : 15000
    features.push({ label: `Pages: ${choice.pages}`, price: pagePrice })
    const designPrice = choice.design === 'template' ? 0 : choice.design === 'custom' ? 12000 : 22000
    features.push({ label: `${choice.design === 'premium' ? 'Premium UI' : choice.design === 'custom' ? 'Custom Design' : 'Template'}`, price: designPrice })
    if (choice.mobile) features.push({ label: 'Mobile Optimization', price: 4500 })
    const cmsPrice = choice.cms === 'none' ? 0 : choice.cms === 'wordpress' ? 6000 : 15000
    features.push({ label: `CMS: ${choice.cms === 'none' ? 'None' : choice.cms === 'wordpress' ? 'WordPress' : 'Custom Admin'}`, price: cmsPrice })
    if (choice.performance) features.push({ label: 'Performance Optimization', price: 6000 })
    const subtotal = base + features.reduce((sum, f) => sum + f.price, 0)
    return { label: 'Website Development', base, features, subtotal }
  }

  const computeSEO = () => {
    const choice = selections.seo
    const features: { label: string; price: number }[] = []
    const base = serviceConfigs.find(s => s.id === 'seo')?.basePrice || 0
    const keywordPrice = choice.keywords === '5' ? 0 : choice.keywords === '10' ? 7000 : 14000
    features.push({ label: `${choice.keywords} Keywords`, price: keywordPrice })
    if (choice.technical) features.push({ label: 'Technical SEO', price: 8000 })
    if (choice.blogs > 0) features.push({ label: `Content Writing (${choice.blogs} blogs)`, price: choice.blogs * 2200 })
    if (choice.local) features.push({ label: 'Local SEO', price: 6000 })
    const months = choice.duration
    features.push({ label: `${months} month engagement`, price: 0 })
    const monthlySubtotal = base + features.reduce((sum, f) => sum + f.price, 0)
    const subtotal = Math.round(monthlySubtotal * (months / 3))
    return { label: 'SEO', base, features, subtotal }
  }

  const computeAds = () => {
    const choice = selections.ads
    const features: { label: string; price: number }[] = []
    const base = serviceConfigs.find(s => s.id === 'ads')?.basePrice || 0
    const platformPrice = choice.platform === 'both' ? 7000 : 0
    features.push({ label: `Platforms: ${choice.platform === 'both' ? 'Google + Meta' : choice.platform === 'google' ? 'Google' : 'Meta'}`, price: platformPrice })
    const budgetMultiplier = choice.budget === '<50k' ? 1 : choice.budget === '50-100k' ? 1.12 : choice.budget === '100-200k' ? 1.28 : 1.45
    features.push({ label: `Monthly Ad Budget: ${choice.budget.replace('k', 'k INR')}`, price: 0 })
    if (choice.landingPage) features.push({ label: 'Landing Page Creation', price: 12000 })
    const durationFactor = choice.duration / 1
    const subtotal = Math.round((base + features.reduce((sum, f) => sum + f.price, 0)) * budgetMultiplier * durationFactor)
    return { label: 'Performance Ads', base, features, subtotal }
  }

  const computeBranding = () => {
    const choice = selections.branding
    const features: { label: string; price: number }[] = []
    const base = serviceConfigs.find(s => s.id === 'branding')?.basePrice || 0
    if (choice.logo) features.push({ label: 'Logo Design', price: 8000 })
    if (choice.colors) features.push({ label: 'Brand Colors & Typography', price: 5000 })
    if (choice.social) features.push({ label: 'Social Media Kit', price: 6000 })
    if (choice.guidelines) features.push({ label: 'Brand Guidelines PDF', price: 10000 })
    const subtotal = base + features.reduce((sum, f) => sum + f.price, 0)
    return { label: 'Branding', base, features, subtotal }
  }

  const breakdown = useMemo(() => {
    const list = [] as { id: ServiceId; label: string; base: number; features: { label: string; price: number }[]; subtotal: number }[]
    if (selectedServices.has('website')) list.push({ id: 'website', ...computeWebsite() })
    if (selectedServices.has('seo')) list.push({ id: 'seo', ...computeSEO() })
    if (selectedServices.has('ads')) list.push({ id: 'ads', ...computeAds() })
    if (selectedServices.has('branding')) list.push({ id: 'branding', ...computeBranding() })
    return list
  }, [selectedServices, selections])

  const addOnTotal = useMemo(() => addOns.reduce((sum, addOn) => sum + (activeAddOns.has(addOn.id) ? addOn.price : 0), 0), [activeAddOns])

  const baseTotal = breakdown.reduce((sum, item) => sum + item.subtotal, 0)
  const complexityFactor = complexityMultiplier[complexity]
  const businessFactor = businessMultiplier[businessType]
  const finalTotal = Math.round((baseTotal + addOnTotal) * complexityFactor * businessFactor)

  const handleDownloadPdf = async () => {
    if (!breakdown.length) return
    setGenerating(true)
    try {
      const selectedAddOns = addOns.filter(a => activeAddOns.has(a.id))
      const { blob, fileName } = await generateEstimatePdf({
        services: breakdown.map(item => ({
          id: item.id,
          label: item.label,
          base: item.base,
          features: item.features,
          subtotal: item.subtotal
        })),
        addOns: selectedAddOns,
        addOnTotal,
        subtotal: baseTotal + addOnTotal,
        total: finalTotal,
        rangeTolerance: 0.12,
        businessType,
        industry,
        complexity,
        goal,
        clientName: contactName,
        clientEmail: contactEmail,
        clientPhone: contactPhone,
        mode,
        timeline: undefined,
        whyUs: undefined,
        scope: undefined,
      })

      // download
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      link.click()
      URL.revokeObjectURL(url)
    } finally {
      setGenerating(false)
    }
  }

  const renderToggle = (active: boolean) => (
    <span className={`inline-flex h-6 w-12 items-center rounded-full transition-all duration-300 ${active ? 'bg-[#22C55E]' : 'bg-white/10'}`}>
      <span className={`h-5 w-5 rounded-full bg-white shadow transform transition-all duration-300 ${active ? 'translate-x-6' : 'translate-x-1'}`} />
    </span>
  )

  return (
    <section className="section-container" style={{ background: '#04070d' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="section-badge">Get an Instant Estimate</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-6 mb-4">
          Build Your <span className="gradient-text">Project Price</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Select services, features, and business context to see transparent pricing with real-time updates.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="card p-6 md:p-8 bg-[#0A0F1A] border border-white/5">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-[#8BB5FF] font-semibold">Step 1</p>
                <h3 className="text-2xl font-bold text-white">Choose your services</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400">Toggle to select</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {serviceConfigs.map((service, index) => {
                const active = selectedServices.has(service.id)
                return (
                  <motion.button
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => toggleService(service.id)}
                    className={`group relative p-5 rounded-xl border-2 text-left transition-all duration-300 ${
                      active ? 'border-[#2563EB] bg-[#0B1220] shadow-[0_0_30px_-12px_rgba(37,99,235,0.7)]' : 'border-[#1E293B] bg-[#0B1220] hover:border-[#2563EB]/60'
                    }`}
                  >
                    {service.popular && (
                      <span className="absolute -top-2 -right-2 px-3 py-1 bg-[#2563EB] text-white text-xs font-bold rounded-full shadow-lg">
                        Most Picked
                      </span>
                    )}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg text-2xl ${active ? 'bg-[#2563EB] text-white' : 'bg-white/5 text-[#8BB5FF]'}`}>
                        {service.icon}
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${active ? 'border-[#2563EB] bg-[#2563EB]' : 'border-[#1E293B]'}`}>
                        {active && <FaCheck className="w-3 h-3 text-white" />}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-1">{service.name}</h4>
                    <p className="text-sm text-gray-400">Base ₹{service.basePrice.toLocaleString('en-IN')}</p>
                  </motion.button>
                )
              })}
            </div>
          </div>

          <div className="card p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-[#8BB5FF] font-semibold">Step 2</p>
                <h3 className="text-2xl font-bold text-white">Feature-wise configuration</h3>
              </div>
              <span className="text-xs text-gray-400">Expands for selected services</span>
            </div>

            <div className="space-y-6">
              <AnimatePresence initial={false}>
                {selectedServices.has('website') && (
                  <motion.div
                    key="website"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-5 rounded-xl border border-[#1E293B] bg-[#0F172A]/60"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-400">Website Development</p>
                        <h4 className="text-lg font-semibold text-white">Tailor your build</h4>
                      </div>
                      <div className="text-xs px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#8BB5FF] border border-[#2563EB]/40">Pages, design, CMS</div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400 mb-2">Pages</p>
                        <div className="grid grid-cols-3 gap-2">
                          {['5', '10', '15+'].map(p => (
                            <button
                              key={p}
                              onClick={() => updateSelection('website', 'pages', p as ServiceSelections['website']['pages'])}
                              className={`option-pill ${selections.website.pages === p ? 'option-pill-active' : ''}`}
                            >
                              {p}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-2">Design type</p>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: 'template', label: 'Template' },
                            { id: 'custom', label: 'Custom' },
                            { id: 'premium', label: 'Premium UI' }
                          ].map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => updateSelection('website', 'design', opt.id as ServiceSelections['website']['design'])}
                              className={`option-pill ${selections.website.design === opt.id ? 'option-pill-active' : ''}`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                        <div>
                          <p className="text-sm text-white">Mobile optimization</p>
                          <p className="text-xs text-gray-400">Responsive + lighthouse tuning</p>
                        </div>
                        <button onClick={() => updateSelection('website', 'mobile', !selections.website.mobile)}>{renderToggle(selections.website.mobile)}</button>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-2">CMS</p>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: 'none', label: 'None' },
                            { id: 'wordpress', label: 'WordPress' },
                            { id: 'custom', label: 'Custom Admin' }
                          ].map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => updateSelection('website', 'cms', opt.id as ServiceSelections['website']['cms'])}
                              className={`option-pill ${selections.website.cms === opt.id ? 'option-pill-active' : ''}`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 md:col-span-2">
                        <div>
                          <p className="text-sm text-white">Performance optimization</p>
                          <p className="text-xs text-gray-400">Core Web Vitals, lazy loading</p>
                        </div>
                        <button onClick={() => updateSelection('website', 'performance', !selections.website.performance)}>{renderToggle(selections.website.performance)}</button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {selectedServices.has('seo') && (
                  <motion.div
                    key="seo"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-5 rounded-xl border border-[#1E293B] bg-[#0F172A]/60"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-400">SEO</p>
                        <h4 className="text-lg font-semibold text-white">Rank and convert</h4>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/30">Keywords & duration</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400 mb-2">Keywords</p>
                        <div className="grid grid-cols-3 gap-2">
                          {['5', '10', '20'].map(k => (
                            <button
                              key={k}
                              onClick={() => updateSelection('seo', 'keywords', k as ServiceSelections['seo']['keywords'])}
                              className={`option-pill ${selections.seo.keywords === k ? 'option-pill-active' : ''}`}
                            >
                              {k}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-2">Duration</p>
                        <div className="grid grid-cols-3 gap-2">
                          {[3, 6, 12].map(m => (
                            <button
                              key={m}
                              onClick={() => updateSelection('seo', 'duration', m as ServiceSelections['seo']['duration'])}
                              className={`option-pill ${selections.seo.duration === m ? 'option-pill-active' : ''}`}
                            >
                              {m} mo
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                        <div>
                          <p className="text-sm text-white">Technical SEO</p>
                          <p className="text-xs text-gray-400">Audits, fixes, site health</p>
                        </div>
                        <button onClick={() => updateSelection('seo', 'technical', !selections.seo.technical)}>{renderToggle(selections.seo.technical)}</button>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-2">Blogs / month</p>
                        <div className="grid grid-cols-4 gap-2">
                          {[0, 2, 4, 8].map(b => (
                            <button
                              key={b}
                              onClick={() => updateSelection('seo', 'blogs', b as ServiceSelections['seo']['blogs'])}
                              className={`option-pill ${selections.seo.blogs === b ? 'option-pill-active' : ''}`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 md:col-span-2">
                        <div>
                          <p className="text-sm text-white">Local SEO</p>
                          <p className="text-xs text-gray-400">GBP, NAP, map pack focus</p>
                        </div>
                        <button onClick={() => updateSelection('seo', 'local', !selections.seo.local)}>{renderToggle(selections.seo.local)}</button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {selectedServices.has('ads') && (
                  <motion.div
                    key="ads"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-5 rounded-xl border border-[#1E293B] bg-[#0F172A]/60"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-400">Performance Ads</p>
                        <h4 className="text-lg font-semibold text-white">Acquisition engine</h4>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#8BB5FF] border border-[#2563EB]/30">Budget & platforms</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400 mb-2">Platforms</p>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: 'google', label: 'Google' },
                            { id: 'meta', label: 'Meta' },
                            { id: 'both', label: 'Both' }
                          ].map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => updateSelection('ads', 'platform', opt.id as ServiceSelections['ads']['platform'])}
                              className={`option-pill ${selections.ads.platform === opt.id ? 'option-pill-active' : ''}`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-2">Monthly ad budget</p>
                        <div className="grid grid-cols-2 gap-2">
                          {['<50k', '50-100k', '100-200k', '200k+'].map(opt => (
                            <button
                              key={opt}
                              onClick={() => updateSelection('ads', 'budget', opt as ServiceSelections['ads']['budget'])}
                              className={`option-pill ${selections.ads.budget === opt ? 'option-pill-active' : ''}`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-2">Duration</p>
                        <div className="grid grid-cols-3 gap-2">
                          {[1, 3, 6].map(m => (
                            <button
                              key={m}
                              onClick={() => updateSelection('ads', 'duration', m as ServiceSelections['ads']['duration'])}
                              className={`option-pill ${selections.ads.duration === m ? 'option-pill-active' : ''}`}
                            >
                              {m} mo
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                        <div>
                          <p className="text-sm text-white">Landing page required</p>
                          <p className="text-xs text-gray-400">Conversion-focused page</p>
                        </div>
                        <button onClick={() => updateSelection('ads', 'landingPage', !selections.ads.landingPage)}>{renderToggle(selections.ads.landingPage)}</button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {selectedServices.has('branding') && (
                  <motion.div
                    key="branding"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-5 rounded-xl border border-[#1E293B] bg-[#0F172A]/60"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-400">Branding</p>
                        <h4 className="text-lg font-semibold text-white">Stand-out identity</h4>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/30">Logo, kit, guides</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[{ key: 'logo', label: 'Logo design', desc: '3 concepts + revisions' }, { key: 'colors', label: 'Colors & typography', desc: 'Palette + font system' }, { key: 'social', label: 'Social media kit', desc: 'Covers, posts, avatars' }, { key: 'guidelines', label: 'Brand guidelines PDF', desc: 'Usage, tone, assets' }].map(item => (
                        <button
                          key={item.key}
                          onClick={() => toggleBranding(item.key as keyof ServiceSelections['branding'])}
                          className={`flex items-start justify-between p-3 rounded-lg border text-left transition-all ${selections.branding[item.key as keyof ServiceSelections['branding']] ? 'border-[#22C55E]/50 bg-[#22C55E]/10' : 'border-[#1E293B] bg-white/5 hover:border-[#22C55E]/40'}`}
                        >
                          <div>
                            <p className="text-sm text-white">{item.label}</p>
                            <p className="text-xs text-gray-400">{item.desc}</p>
                          </div>
                          {renderToggle(selections.branding[item.key as keyof ServiceSelections['branding']] as boolean)}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="card p-6 md:p-8 bg-[#0B1220]/90">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
              <div>
                <p className="text-sm text-[#8BB5FF] font-semibold">Step 3</p>
                <h3 className="text-2xl font-bold text-white">Business context</h3>
              </div>
              <span className="text-xs text-gray-400">Signals adjust multipliers</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-[#1E293B] bg-[#0F172A]/80 p-4 space-y-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Business size</p>
                  <span className="text-[11px] text-[#8BB5FF]">Reach & ops</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {([
                    { id: 'startup', label: 'Startup' },
                    { id: 'growing', label: 'Growing' },
                    { id: 'established', label: 'Established' }
                  ] as { id: BusinessType; label: string }[]).map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setBusinessType(opt.id)}
                      className={`option-pill w-full ${businessType === opt.id ? 'option-pill-active' : ''}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#1E293B] bg-[#0F172A]/80 p-4 space-y-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Complexity level</p>
                  <span className="text-[11px] text-[#8BB5FF]">Scope & polish</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {([
                    { id: 'standard', label: 'Standard' },
                    { id: 'advanced', label: 'Advanced' },
                    { id: 'premium', label: 'Premium' }
                  ] as { id: ComplexityLevel; label: string }[]).map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setComplexity(opt.id)}
                      className={`option-pill w-full ${complexity === opt.id ? 'option-pill-active' : ''}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#1E293B] bg-[#0F172A]/80 p-4 space-y-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Industry</p>
                  <span className="text-[11px] text-[#8BB5FF]">Context fit</span>
                </div>
                <div className="relative">
                  <select
                    value={industry}
                    onChange={e => setIndustry(e.target.value)}
                    className="w-full bg-[#0B1220] border border-[#1E293B] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#2563EB]"
                  >
                    {industryOptions.map(opt => (
                      <option key={opt} value={opt} className="bg-[#0B1220] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div className="rounded-2xl border border-[#1E293B] bg-[#0F172A]/80 p-4 space-y-3 lg:col-span-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Optional add-ons</p>
                  <span className="text-[11px] text-[#8BB5FF]">Strategic boosts</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {addOns.map(addOn => (
                    <button
                      key={addOn.id}
                      onClick={() => toggleAddOn(addOn.id)}
                      className={`option-pill w-full justify-between text-left ${activeAddOns.has(addOn.id) ? 'option-pill-active' : ''}`}
                    >
                      <span className="text-sm leading-tight">{addOn.label}</span>
                      <span className="text-[12px] text-[#8BB5FF] whitespace-nowrap">+₹{addOn.price.toLocaleString('en-IN')}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-12 h-fit"
        >
          <div className="card p-6 md:p-8 space-y-6 bg-[#0A0F1A] border border-white/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8BB5FF] font-semibold">Live estimate</p>
                <h3 className="text-2xl font-bold text-white">Breakdown</h3>
              </div>
              <div className="text-right text-xs text-gray-400">
                <p>Complexity × {complexityMultiplier[complexity].toFixed(2)}</p>
                <p>Business × {businessMultiplier[businessType].toFixed(2)}</p>
              </div>
            </div>

            <div className="space-y-4">
              {breakdown.length === 0 && (
                <div className="text-center py-10 border border-dashed border-white/10 rounded-xl">
                  <p className="text-gray-400">Select at least one service to see pricing</p>
                </div>
              )}
              {breakdown.map(item => (
                <div key={item.id} className="rounded-xl border border-[#1E293B] bg-white/5 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-white font-semibold">{item.label}</div>
                    <div className="text-[#8BB5FF] font-bold">₹{item.subtotal.toLocaleString('en-IN')}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Base</span>
                      <span>₹{item.base.toLocaleString('en-IN')}</span>
                    </div>
                    {item.features.map((f, idx) => (
                      <div key={idx} className="flex justify-between text-xs text-gray-400">
                        <span>{f.label}</span>
                        <span className="text-white">{f.price > 0 ? `+₹${f.price.toLocaleString('en-IN')}` : 'Included'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {activeAddOns.size > 0 && (
              <div className="rounded-xl border border-[#1E293B] bg-[#0B1220] p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">Add-ons</span>
                  <span className="text-[#8BB5FF] text-sm">+₹{addOnTotal.toLocaleString('en-IN')}</span>
                </div>
                <ul className="space-y-1 text-xs text-gray-400">
                  {addOns.filter(a => activeAddOns.has(a.id)).map(a => (
                    <li key={a.id} className="flex justify-between">
                      <span>{a.label}</span>
                      <span className="text-white">+₹{a.price.toLocaleString('en-IN')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="border-t border-[#1E293B] pt-4 space-y-3">
              <div className="flex justify-between items-center text-lg">
                <span className="text-gray-300">Subtotal</span>
                <span className="text-white font-semibold">₹{(baseTotal + addOnTotal).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Multipliers applied</span>
                <span className="text-sm text-[#8BB5FF] font-semibold">× {(complexityFactor * businessFactor).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Industry</span>
                <span className="text-sm text-white">{industry}</span>
              </div>
              <div className="flex items-center justify-between bg-gradient-to-r from-[#2563EB]/20 via-[#2563EB]/10 to-[#22C55E]/10 border border-[#2563EB]/40 rounded-2xl p-4">
                <div>
                  <p className="text-sm text-gray-300">Estimated Total</p>
                  <motion.p
                    key={finalTotal}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-3xl font-bold text-white"
                  >
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </motion.p>
                  <p className="text-xs text-gray-400">Final pricing may vary based on detailed requirements.</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#8BB5FF] font-semibold">Live updated</p>
                  <p className="text-xs text-gray-400">Based on features + context</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-[#1E293B] bg-[#0B1220] p-3">
                <button
                  onClick={() => setMode('estimate')}
                  className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${mode === 'estimate' ? 'bg-primary-500 text-black' : 'bg-white/5 text-gray-300'}`}
                >
                  Estimate Mode
                </button>
                <button
                  onClick={() => setMode('proposal')}
                  className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${mode === 'proposal' ? 'bg-primary-500 text-black' : 'bg-white/5 text-gray-300'}`}
                >
                  Proposal Mode
                </button>
              </div>
              <div className="text-right text-xs text-gray-400">
                <p>Quote ID auto-generated</p>
                <p>Includes watermark & 14-day validity</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <input
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Client name (for PDF)"
                className="w-full rounded-xl bg-[#0B1220] border border-[#1E293B] px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none"
              />
              <input
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Client email (optional)"
                className="w-full rounded-xl bg-[#0B1220] border border-[#1E293B] px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none"
                type="email"
              />
              <input
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="Phone (optional)"
                className="w-full rounded-xl bg-[#0B1220] border border-[#1E293B] px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none"
              />
            </div>

            <button
              onClick={handleDownloadPdf}
              disabled={!breakdown.length || generating}
              className={`btn-primary w-full justify-center flex items-center gap-2 ${(!breakdown.length || generating) ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <FaFilePdf /> {generating ? 'Preparing PDF…' : 'Download Estimate PDF'}
            </button>

            <div className="grid md:grid-cols-2 gap-3">
              <a
                href="https://wa.me/917893804498"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center flex items-center gap-2"
              >
                <FaWhatsapp /> Talk to Neo on WhatsApp
              </a>
              <a
                href="https://wa.me/917893804498?text=I%20want%20a%20detailed%20quote%20for%20my%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center"
              >
                Get Detailed Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CostEstimator
