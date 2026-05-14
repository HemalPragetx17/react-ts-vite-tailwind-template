import React from 'react'
import { useSelector } from 'react-redux'
import type { IApplicationState } from '../../store/state/app-state'

interface UserMenuProps {
  onLogout: () => void | Promise<void>
}

const UserMenu: React.FC<UserMenuProps> = ({ onLogout }) => {
  const user = useSelector((state: IApplicationState) => state.UserData)
  const [isOpen, setIsOpen] = React.useState(false)
  const [copied, setCopied] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  React.useEffect(() => {
    if (!copied) return

    const timeoutId = window.setTimeout(() => setCopied(false), 1500)
    return () => window.clearTimeout(timeoutId)
  }, [copied])

  const fullName = [user.first_name, user.last_name].filter(Boolean).join(' ').trim()
  const displayName = fullName || user.email || 'User'
  const initials = displayName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')

  const handleCopyEmail = async () => {
    if (!user.email) return

    try {
      await navigator.clipboard.writeText(user.email)
      setCopied(true)
      setIsOpen(true)
    } catch {
      setCopied(false)
    }
  }

  const handleLogout = async () => {
    setIsOpen(false)
    await onLogout()
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex items-center gap-3 rounded-full bg-white px-1 py-1 text-left"
        id="user-menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="sr-only">Open user menu</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
          {initials || 'U'}
        </span>
      </button>

      {isOpen ? (
        <div className="absolute right-0 !z-50 mt-3 w-[calc(100vw-90px)] sm:w-72 max-w-[18rem] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-200/60">
          <div className="border-b border-gray-100 px-4 py-4">
            <p className="text-sm font-semibold text-gray-900">{displayName}</p>
            <p className="mt-1 text-sm text-gray-500">{user.email || 'No email available'}</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">{user.role || 'Member'}</span>
              {copied ? <span className="text-xs font-medium text-emerald-600">Email copied</span> : null}
            </div>
          </div>
          <div className="py-1">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-400"
              disabled={!user.email}
            >
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Copy email
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-rose-600 transition hover:bg-rose-50"
            >
              <svg className="h-4 w-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign out
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default UserMenu