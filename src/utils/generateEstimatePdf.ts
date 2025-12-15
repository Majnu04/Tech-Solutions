import jsPDF from 'jspdf'

export type EstimateFeature = { label: string; price: number }
export type EstimateService = {
  id: string
  label: string
  base: number
  features: EstimateFeature[]
  subtotal: number
}

export type ProposalMode = 'estimate' | 'proposal'

export type EstimatePdfPayload = {
  services: EstimateService[]
  addOns: { label: string; price: number }[]
  addOnTotal: number
  subtotal: number
  total: number
  rangeTolerance?: number // 0.1 = 10%
  businessType: string
  industry: string
  complexity: string
  goal?: string | null
  clientName?: string
  clientEmail?: string
  clientPhone?: string
  mode?: ProposalMode
  scope?: {
    includes: string[]
    excludes: string[]
  }
  timeline?: string[]
  whyUs?: string[]
  contact?: string[]
}

const formatCurrency = (value: number) => `₹${value.toLocaleString('en-IN')}`

const createReferenceId = () => {
  const stamp = Date.now().toString(36).toUpperCase()
  const random = Math.floor(Math.random() * 9999)
  return `ELT-${stamp}-${random}`
}

const addWatermark = (doc: jsPDF, text: string) => {
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  doc.saveGraphicsState()
  doc.setGState(doc.GState({ opacity: 0.04 }))
  doc.setTextColor('#0F172A')
  doc.setFontSize(42)
  doc.text(text, pageWidth / 2, pageHeight / 2, { align: 'center', angle: -30 })
  doc.restoreGraphicsState()
}

const ensureSpace = (doc: jsPDF, cursor: number, needed: number, onNewPage: () => void) => {
  const pageHeight = doc.internal.pageSize.getHeight()
  if (cursor + needed > pageHeight - 60) {
    doc.addPage()
    addWatermark(doc, 'Elite Digital Solutions – Confidential')
    onNewPage()
    return 60
  }
  return cursor
}

export const generateEstimatePdf = async (payload: EstimatePdfPayload) => {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' })
  const marginX = 52
  let cursorY = 60

  const brandDark = '#0B1220'
  const brandPrimary = '#2563EB'
  const textDark = '#0F172A'
  const textMuted = '#475569'

  const headerReset = () => {
    cursorY = 60
  }

  const drawSectionTitle = (title: string) => {
    cursorY = ensureSpace(doc, cursorY, 64, headerReset)
    doc.setFillColor('#e6e6e6')
    doc.setDrawColor('#e6e6e6')
    doc.roundedRect(marginX, cursorY, 510, 32, 6, 6, 'F')
    doc.setTextColor(textDark)
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text(title, marginX + 12, cursorY + 20)
    cursorY += 44
  }

  const addSpacing = (amount = 12) => {
    cursorY += amount
  }

  addWatermark(doc, 'Elite Digital Solutions – Confidential')

  // Cover / Intro
  doc.setFillColor(brandDark)
  doc.rect(0, 0, doc.internal.pageSize.getWidth(), 150, 'F')
  doc.setTextColor('#FFFFFF')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.text('Elite Digital Solutions', marginX, cursorY)
  cursorY += 26
  doc.setFontSize(24)
  const isProposal = (payload.mode ?? 'estimate') === 'proposal'
  doc.text(isProposal ? 'Project Proposal' : 'Project Cost Estimate – Elite Digital Solutions', marginX, cursorY)
  cursorY += 26
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(12)
  doc.text('Transparent pricing based on your selected services and requirements', marginX, cursorY)
  cursorY += 30

  const referenceId = createReferenceId()
  const date = new Date()
  const validity = new Date(date.getTime() + 14 * 24 * 60 * 60 * 1000)
  doc.setFontSize(11)
  doc.text(`Goal: ${payload.goal ?? 'Not specified'}`, marginX, cursorY)
  doc.text(`Date: ${date.toLocaleDateString()}`, marginX + 180, cursorY)
  doc.text(`Quote Ref: ${referenceId}`, marginX + 340, cursorY)
  cursorY += 16
  doc.text(`Generated: ${date.toLocaleString()}`, marginX, cursorY)
  cursorY += 16
  doc.text(`Estimate Valid Until: ${validity.toLocaleDateString()}`, marginX, cursorY)
  addSpacing(18)

  doc.setTextColor(textDark)

  // Proposal intro page (proposal mode)
  if (isProposal) {
    drawSectionTitle('Introduction')
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(13)
    doc.text(`Client: ${payload.clientName || 'Not provided'}`, marginX, cursorY)
    cursorY += 16
    doc.setFont('helvetica', 'normal')
    const introText = doc.splitTextToSize('This proposal outlines how Elite Digital Solutions will help achieve your goals.', 500)
    doc.text(introText, marginX, cursorY)
    cursorY += introText.length * 14 + 20
    doc.setFont('helvetica', 'bold')
    doc.text('Business Goal', marginX, cursorY)
    doc.setFont('helvetica', 'normal')
    cursorY += 14
    const goalText = doc.splitTextToSize(payload.goal || 'Not specified', 500)
    doc.text(goalText, marginX, cursorY)
    cursorY += goalText.length * 14 + 12
  }

  // Client Summary
  drawSectionTitle('Client Summary')
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('Business Type', marginX, cursorY)
  doc.text('Industry', marginX + 180, cursorY)
  doc.text('Project Goal', marginX + 360, cursorY)
  doc.setFont('helvetica', 'normal')
  cursorY += 16
  doc.text(payload.businessType || 'Not specified', marginX, cursorY)
  doc.text(payload.industry || 'Not specified', marginX + 180, cursorY)
  doc.text(payload.goal || 'Not specified', marginX + 360, cursorY)
  cursorY += 24
  doc.setTextColor(textMuted)
  const summaryText = doc.splitTextToSize('This estimate is tailored for your business goals.', 500)
  doc.text(summaryText, marginX, cursorY)
  cursorY += summaryText.length * 14 + 14
  doc.setTextColor(textDark)

  // Scope (proposal mode)
  if (isProposal) {
    drawSectionTitle('Scope of Work')
    doc.setFont('helvetica', 'bold')
    doc.text('Included', marginX, cursorY)
    cursorY += 16
    doc.setFont('helvetica', 'normal')
    const includes = payload.scope?.includes?.length ? payload.scope.includes : ['Discovery & strategy', 'Design & UX', 'Build & QA']
    includes.forEach(item => {
      cursorY = ensureSpace(doc, cursorY, 20, headerReset)
      doc.text(`• ${item}`, marginX + 12, cursorY)
      cursorY += 14
    })
    addSpacing(6)
    doc.setFont('helvetica', 'bold')
    doc.text('Not Included', marginX, cursorY)
    cursorY += 16
    doc.setFont('helvetica', 'normal')
    const excludes = payload.scope?.excludes?.length ? payload.scope.excludes : ['Stock photography licensing', 'Copywriting unless specified', '3rd-party subscription fees']
    excludes.forEach(item => {
      cursorY = ensureSpace(doc, cursorY, 20, headerReset)
      doc.text(`• ${item}`, marginX + 12, cursorY)
      cursorY += 14
    })
  }

  // Service Breakdown
  drawSectionTitle('Service Breakdown')
  payload.services.forEach(service => {
    cursorY = ensureSpace(doc, cursorY, 120, headerReset)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(13)
    doc.text(service.label, marginX, cursorY)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(brandPrimary)
    doc.text(formatCurrency(service.subtotal), marginX + 420, cursorY)
    doc.setTextColor(textMuted)
    cursorY += 16

    doc.setFontSize(11)
    doc.text(`Base: ${formatCurrency(service.base)}`, marginX, cursorY)
    cursorY += 14

    service.features.forEach(feature => {
      cursorY = ensureSpace(doc, cursorY, 24, headerReset)
      const line = `${feature.label}`
      doc.text(line, marginX + 12, cursorY)
      const priceText = feature.price > 0 ? `+${formatCurrency(feature.price)}` : 'Included'
      doc.text(priceText, marginX + 420, cursorY)
      cursorY += 14
    })
    addSpacing(10)
  })

  if (payload.addOns.length) {
    cursorY = ensureSpace(doc, cursorY, 80, headerReset)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.text('Selected Add-ons', marginX, cursorY)
    cursorY += 16
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(textMuted)
    payload.addOns.forEach(addOn => {
      cursorY = ensureSpace(doc, cursorY, 20, headerReset)
      doc.text(addOn.label, marginX + 12, cursorY)
      doc.text(`+${formatCurrency(addOn.price)}`, marginX + 420, cursorY)
      cursorY += 14
    })
    addSpacing(12)
    doc.setTextColor(textDark)
  }

  // Pricing Summary
  drawSectionTitle('Pricing Summary')
  doc.setFont('helvetica', 'normal')
  doc.text('Subtotal', marginX, cursorY)
  doc.text(formatCurrency(payload.subtotal), marginX + 420, cursorY)
  cursorY += 16
  doc.text('Add-ons', marginX, cursorY)
  doc.text(formatCurrency(payload.addOnTotal), marginX + 420, cursorY)
  cursorY += 16
  doc.text('Estimated Total', marginX, cursorY)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(brandPrimary)
  doc.text(formatCurrency(payload.total), marginX + 420, cursorY)
  doc.setTextColor(textMuted)
  cursorY += 18

  const variance = payload.rangeTolerance ?? 0.12
  const varianceValue = Math.round(payload.total * variance)
  const rangeText = `${formatCurrency(payload.total - varianceValue)} – ${formatCurrency(payload.total + varianceValue)}`
  doc.text(`Estimated range (±${Math.round(variance * 100)}%): ${rangeText}`, marginX, cursorY)
  cursorY += 16
  doc.text('Final pricing may vary based on detailed requirements.', marginX, cursorY)
  cursorY += 16
  doc.text(`Estimate Valid Until: ${validity.toLocaleDateString()}`, marginX, cursorY)
  cursorY += 20
  doc.setTextColor(textDark)

  // Timeline (proposal mode)
  if (isProposal) {
    drawSectionTitle('Timeline')
    const timeline = payload.timeline?.length ? payload.timeline : ['Week 1: Discovery & planning', 'Week 2-3: Design & UX', 'Week 4-6: Build & QA', 'Week 7: Launch & optimization']
    doc.setFont('helvetica', 'normal')
    timeline.forEach(item => {
      cursorY = ensureSpace(doc, cursorY, 24, headerReset)
      doc.text(`• ${item}`, marginX + 12, cursorY)
      cursorY += 16
    })
  }

  // Why Us (proposal mode)
  if (isProposal) {
    drawSectionTitle('Why Elite Digital Solutions')
    const points = payload.whyUs?.length ? payload.whyUs : [
      'Conversion-first, performance-optimized builds',
      'Full-funnel expertise: strategy, design, build, growth',
      'Reliable delivery with transparent communication'
    ]
    doc.setFont('helvetica', 'normal')
    points.forEach(item => {
      cursorY = ensureSpace(doc, cursorY, 24, headerReset)
      doc.text(`• ${item}`, marginX + 12, cursorY)
      cursorY += 16
    })
  }

  // Next Steps
  drawSectionTitle('Next Steps')
  doc.setFont('helvetica', 'normal')
  const steps = [
    'Requirement discussion',
    'Timeline confirmation',
    'Final proposal'
  ]
  steps.forEach((step, idx) => {
    cursorY = ensureSpace(doc, cursorY, 24, headerReset)
    doc.text(`${idx + 1}. ${step}`, marginX, cursorY)
    cursorY += 16
  })
  cursorY += 6
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(brandPrimary)
  doc.text('Schedule a Free Strategy Call', marginX, cursorY)
  cursorY += 24
  doc.setTextColor(textDark)

  // Contact
  drawSectionTitle('Contact')
  doc.setFont('helvetica', 'normal')
  const contactLines = payload.contact?.length ? payload.contact : [
    'Elite Digital Solutions',
    'Website: https://elitedigitalsolutions.tech',
    'Email: hello@elitedigitalsolutions.tech',
    'WhatsApp / Phone: +91 78938 04498'
  ]
  contactLines.forEach(line => {
    cursorY = ensureSpace(doc, cursorY, 20, headerReset)
    doc.text(line, marginX, cursorY)
    cursorY += 16
  })

  const fileName = isProposal ? 'Project-Proposal-EliteDigital.pdf' : 'Project-Cost-Estimate.pdf'
  const blob = doc.output('blob')
  return { blob, fileName }
}
