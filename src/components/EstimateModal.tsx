import { useEffect, lazy, Suspense } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'

const CostEstimator = lazy(() => import('./CostEstimator'))

type EstimateModalProps = {
  open: boolean
  onClose: () => void
}

const EstimateModal = ({ open, onClose }: EstimateModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (open) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[2000] flex items-end sm:items-center justify-center px-3 sm:px-4 py-4 sm:py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-6xl h-[92vh] sm:h-auto sm:max-h-[90vh] overflow-hidden rounded-3xl sm:rounded-[32px] border border-white/10 bg-[#060910] shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', stiffness: 160, damping: 18 }}
            role="dialog"
            aria-modal="true"
            aria-label="Build Your Project Price"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-4 sm:px-8 py-4 sm:py-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary-300">Estimate</p>
                <h2 className="mt-1 text-2xl sm:text-3xl font-semibold text-white">Build Your Project Price</h2>
                <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-2xl">
                  Select services, features, and business context to see transparent pricing in real-time.
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10"
                aria-label="Close estimate"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>

            <div className="max-h-[calc(92vh-180px)] sm:max-h-[70vh] overflow-y-auto px-4 sm:px-8 pb-28 pt-4 sm:pt-6 custom-scrollbar bg-gradient-to-b from-white/5 via-transparent to-transparent">
              <Suspense
                fallback={
                  <div className="flex h-48 items-center justify-center text-sm text-gray-300">
                    Loading estimator...
                  </div>
                }
              >
                <CostEstimator />
              </Suspense>
            </div>

            <div className="sticky bottom-0 flex flex-col gap-3 border-t border-white/10 bg-gradient-to-r from-primary-500/20 via-black/80 to-primary-500/15 px-4 sm:px-8 py-4 backdrop-blur">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary-200">Next</p>
                  <p className="text-sm text-gray-200">Share this estimate and we will turn it into a plan within 24 hours.</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="https://wa.me/message/REJQPX2ODRQZE1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-primary-300 hover:text-primary-100"
                  >
                    Talk to Neo on WhatsApp
                  </a>
                  <button
                    onClick={onClose}
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-primary-500 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-primary-500/25 transition hover:bg-primary-400"
                  >
                    Get Detailed Quote
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default EstimateModal
