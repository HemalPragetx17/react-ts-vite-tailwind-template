import React, { useEffect, useState } from 'react'
import CustomSwitch from '../input/CustomSwitch'

const SunIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-3.5 h-3.5 text-amber-500"
  >
    <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.16 5.1a.75.75 0 0 1 1.06 0l1.59 1.59a.75.75 0 1 1-1.06 1.06L6.16 6.16a.75.75 0 0 1 0-1.06Zm11.68 0a.75.75 0 0 1 0 1.06l-1.59 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59a.75.75 0 0 1 1.06 0ZM12 5.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 12a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75ZM18.75 12a.75.75 0 0 1 .75-.75H21.75a.75.75 0 0 1 0 1.5H19.5a.75.75 0 0 1-.75-.75ZM6.16 17.84a.75.75 0 0 1 0 1.06l-1.59 1.59a.75.75 0 0 1-1.06-1.06l1.59-1.59a.75.75 0 0 1 1.06 0Zm11.68 0a.75.75 0 0 1 1.06 1.06l-1.59 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59ZM12 18.75a.75.75 0 0 1 .75.75V21.75a.75.75 0 0 1-1.5 0V19.5a.75.75 0 0 1 .75-.75Z" />
  </svg>
)

const MoonIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-3.5 h-3.5 text-indigo-600"
  >
    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 1 1-16.925-12 10.503 10.503 0 0 1 8.009-1.572Z" clipRule="evenodd" />
  </svg>
)

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored as 'light' | 'dark'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])

  return (
    <CustomSwitch
      name="theme-toggle"
      value={theme === 'dark'}
      onChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      color="primary"
      size="md"
      thumbIcon={(checked) => checked ? <MoonIcon /> : <SunIcon />}
      containerClassName="w-fit flex items-center justify-center -mt-1"
    />
  )
}

export default ThemeToggle
