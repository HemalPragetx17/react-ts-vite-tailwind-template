import React from 'react'

type NotificationItem = {
  id: number
  title: string
  message: string
  time: string
  unread: boolean
}

const defaultNotifications: NotificationItem[] = [
  {
    id: 1,
    title: 'New user signed up',
    message: 'A new account was created from the onboarding flow.',
    time: '2m ago',
    unread: true,
  },
  {
    id: 2,
    title: 'Backup completed',
    message: 'The latest nightly backup finished successfully.',
    time: '1h ago',
    unread: true,
  },
  {
    id: 3,
    title: 'System update',
    message: 'Version 1.4.2 is now available for deployment.',
    time: 'Yesterday',
    unread: false,
  },
]

const NotificationsMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [notifications, setNotifications] = React.useState(defaultNotifications)
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

  const unreadCount = notifications.filter((notification) => notification.unread).length

  const markAllAsRead = () => {
    setNotifications((current) => current.map((notification) => ({ ...notification, unread: false })))
  }

  const toggle = () => setIsOpen((current) => !current)

  const handleNotificationClick = (notificationId: number) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === notificationId ? { ...notification, unread: false } : notification,
      ),
    )
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={toggle}
        className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        aria-label="View notifications"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="sr-only">View notifications</span>
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        {unreadCount > 0 ? (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold leading-none text-white">
            {unreadCount}
          </span>
        ) : null}
      </button>

      {isOpen ? (
        <div className="absolute right-0 !z-50 mt-3 w-[calc(100vw-90px)] sm:w-80 max-w-[20rem] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-200/60">
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-gray-900">Notifications</p>
              <p className="text-xs text-gray-500">{unreadCount} unread updates</p>
            </div>
            <button
              type="button"
              onClick={markAllAsRead}
              className="text-xs font-medium text-indigo-600 transition hover:text-indigo-700 disabled:text-gray-400"
              disabled={unreadCount === 0}
            >
              Mark all as read
            </button>
          </div>
          <div className="max-h-80 divide-y divide-gray-100 overflow-auto">
            {notifications.map((notification) => (
              <button
                key={notification.id}
                type="button"
                onClick={() => handleNotificationClick(notification.id)}
                className={`flex w-full gap-3 px-4 py-3 text-left transition hover:bg-gray-50 ${notification.unread ? 'bg-indigo-50/60' : ''}`}
              >
                <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${notification.unread ? 'bg-indigo-500' : 'bg-gray-300'}`} />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className={`block truncate text-sm font-medium ${notification.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                      {notification.title}
                    </span>
                    <span className="shrink-0 text-xs text-gray-400">{notification.time}</span>
                  </span>
                  <span className="mt-1 block text-sm text-gray-500">{notification.message}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default NotificationsMenu