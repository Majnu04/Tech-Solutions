import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react'

export type GrowthGoal = 'website' | 'leads' | 'traffic' | 'branding' | null

interface PersonalizationContextValue {
  goal: GrowthGoal
  setGoal: (goal: GrowthGoal) => void
}

const PersonalizationContext = createContext<PersonalizationContextValue | undefined>(undefined)

const STORAGE_KEY = 'eds-growth-goal'

export const PersonalizationProvider = ({ children }: { children: ReactNode }) => {
  const [goal, setGoalState] = useState<GrowthGoal>(null)

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY) as GrowthGoal | null
    if (stored) setGoalState(stored)
  }, [])

  const setGoal = (value: GrowthGoal) => {
    setGoalState(value)
    if (value) {
      sessionStorage.setItem(STORAGE_KEY, value)
    } else {
      sessionStorage.removeItem(STORAGE_KEY)
    }
  }

  const value = useMemo(() => ({ goal, setGoal }), [goal])

  return (
    <PersonalizationContext.Provider value={value}>
      {children}
    </PersonalizationContext.Provider>
  )
}

export const usePersonalization = () => {
  const ctx = useContext(PersonalizationContext)
  if (!ctx) throw new Error('usePersonalization must be used within PersonalizationProvider')
  return ctx
}
