import React from 'react'
import CustomPopover from '../popover/CustomPopover'

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

  const unreadCount = notifications.filter((n) => n.unread).length

  const markAllAsRead = () => {
    setNotifications((current) => current.map((n) => ({ ...n, unread: false })))
  }

  const handleNotificationClick = (notificationId: number) => {
    setNotifications((current) =>
      current.map((n) => (n.id === notificationId ? { ...n, unread: false } : n)),
    )
  }

  const trigger = (
    <button
      type="button"
      className="relative rounded-full bg-white p-1 text-secondary-400 hover:text-secondary-600 transition-colors duration-200"
      aria-label="View notifications"
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      <span className="sr-only">View notifications</span>
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
      {unreadCount > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold leading-none text-white">
          {unreadCount}
        </span>
      )}
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
      minWidth="20rem"
      className="w-[calc(100vw-90px)] sm:w-80 max-w-[20rem]"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-secondary-100 dark:border-secondary-800 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-secondary-900 dark:text-white">Notifications</p>
          <p className="text-xs text-secondary-500 dark:text-secondary-400">{unreadCount} unread updates</p>
        </div>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); markAllAsRead(); }}
          className="text-xs font-medium text-primary transition hover:text-primary/80 disabled:text-secondary-400"
          disabled={unreadCount === 0}
        >
          Mark all as read
        </button>
      </div>

      {/* Notification list */}
      <div className="max-h-80 divide-y divide-secondary-100 dark:divide-secondary-800 overflow-auto">
        {notifications.map((notification) => (
          <button
            key={notification.id}
            type="button"
            onClick={(e) => { e.stopPropagation(); handleNotificationClick(notification.id); }}
            className={`flex w-full gap-3 px-4 py-3 text-left transition hover:bg-secondary-50 dark:hover:bg-secondary-900/50 ${notification.unread ? 'bg-primary/5 dark:bg-primary/10' : ''}`}
          >
            <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${notification.unread ? 'bg-primary' : 'bg-secondary-300 dark:bg-secondary-600'}`} />
            <span className="min-w-0 flex-1">
              <span className="flex items-center justify-between gap-2">
                <span className={`block truncate text-sm font-medium ${notification.unread ? 'text-secondary-900 dark:text-white' : 'text-secondary-600 dark:text-secondary-400'}`}>
                  {notification.title}
                </span>
                <span className="shrink-0 text-xs text-secondary-400">{notification.time}</span>
              </span>
              <span className="mt-1 block text-xs text-secondary-500 dark:text-secondary-400">{notification.message}</span>
            </span>
          </button>
        ))}
      </div>
    </CustomPopover>
  )
}

export default NotificationsMenu