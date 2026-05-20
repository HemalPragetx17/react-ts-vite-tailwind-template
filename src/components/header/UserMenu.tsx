import React from 'react'
import { useSelector } from 'react-redux'
import type { IApplicationState } from '../../store/state/app-state'
import CustomPopover from '../popover/CustomPopover'

interface UserMenuProps {
  onLogout: () => void | Promise<void>
}

const UserMenu: React.FC<UserMenuProps> = ({ onLogout }) => {
  const user = useSelector((state: IApplicationState) => state.UserData)
  const [isOpen, setIsOpen] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

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

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!user.email) return
    try {
      await navigator.clipboard.writeText(user.email)
      setCopied(true)
      setIsOpen(true)
    } catch {
      setCopied(false)
    }
  }

  const handleLogout = async (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(false)
    await onLogout()
  }

  const trigger = (
    <button
      type="button"
      className="flex items-center gap-3 rounded-full bg-white px-1 py-1 text-left hover:opacity-90 transition-opacity duration-200"
      id="user-menu-button"
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      <span className="sr-only">Open user menu</span>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white select-none">
        {initials || 'U'}
      </span>
    </button>
  )

  return (
    <CustomPopover
      trigger={trigger}
      placement="bottom-end"
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      showArrow={true}
      offset={10}
      color="primary"
      minWidth="18rem"
      className="w-[calc(100vw-90px)] sm:w-72 max-w-[18rem]"
    >
      {/* User info header */}
      <div className="border-b border-secondary-100 dark:border-secondary-800 px-4 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
            {initials || 'U'}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-secondary-900 dark:text-white">{displayName}</p>
            <p className="truncate text-xs text-secondary-500 dark:text-secondary-400">{user.email || 'No email available'}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-full bg-secondary-100 dark:bg-secondary-800 px-2.5 py-1 text-xs font-medium text-secondary-600 dark:text-secondary-300">
            {user.role || 'Member'}
          </span>
          {copied && (
            <span className="text-xs font-medium text-success">Email copied!</span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="py-1">
        <button
          type="button"
          onClick={handleCopyEmail}
          className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-secondary-700 dark:text-secondary-300 transition hover:bg-secondary-50 dark:hover:bg-secondary-900/50 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!user.email}
        >
          <svg className="h-4 w-4 text-secondary-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy email
        </button>

        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-danger transition hover:bg-danger/5 dark:hover:bg-danger/10"
        >
          <svg className="h-4 w-4 text-danger shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign out
        </button>
      </div>
    </CustomPopover>
  )
}

export default UserMenu