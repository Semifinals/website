import { useEffect, useState } from "react"

export default function useLocale() {
  const defaultLocale = "en-US"
  const [locale, setLocale] = useState(defaultLocale)

  useEffect(() => {
    setLocale(navigator.language || (navigator.languages || [defaultLocale])[0])
  }, [])

  function getLocallyFormattedTime(date: number | string | Date) {
    return Intl.DateTimeFormat(locale).format(new Date(date))
  }

  return { locale, setLocale, getLocallyFormattedTime }
}
