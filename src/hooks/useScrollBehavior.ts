import { useState, useEffect } from 'react'

export const useScrollDepth = (threshold: number = 50): boolean => {
  const [hasReached, setHasReached] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (hasReached) return

      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100

      if (scrollPercentage >= threshold) {
        setHasReached(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold, hasReached])

  return hasReached
}

export const useTimeOnPage = (seconds: number = 30): boolean => {
  const [hasReached, setHasReached] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasReached(true)
    }, seconds * 1000)

    return () => clearTimeout(timer)
  }, [seconds])

  return hasReached
}

export const useScrollDirection = (): 'up' | 'down' | null => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollDirection
}
