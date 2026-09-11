"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { cv, type CVData, type Locale } from "@/lib/cv-data"

type LocaleContextType = {
  locale: Locale
  setLocale: (l: Locale) => void
  data: CVData
}

const LocaleContext = createContext<LocaleContextType | null>(null)

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return "id"
  const stored = localStorage.getItem("locale")
  if (stored === "id" || stored === "en") return stored
  return navigator.language?.toLowerCase().startsWith("id") ? "id" : "en"
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id")

  useEffect(() => {
    setLocaleState(detectInitialLocale())
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem("locale", l)
    document.documentElement.lang = l
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, data: cv[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider")
  return ctx
}
