import React from 'react'
import { Button } from './ui/button'
import Notification from '../utils/notify';

interface CryptoCardProps {
  title: string
  address: string
  buttonText: string
  green: boolean
}

export function CryptoCard({ title, address, green }: CryptoCardProps) {
    const [notification, setNotification] = React.useState<{ message: string; type: 'error' | 'success' | 'info' } | null>(null);  // notification message

  return (
    <div className='flex flex-col gap-4'>
                    {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}
      <div className={`p-4 flex flex-row items-center justify-between rounded-lg ${green ? 'shadow-[0_0_20px_rgba(45,212,191,0.25)]' : 'shadow-[0_0_20px_rgba(255,255,255,0.25)]'}`}>
        <div className='flex flex-row gap-4 items-center overflow-hidden'>
          <h2 className="text-sm md:text-lg font-bold whitespace-nowrap bg-[hsl(var(--teal-100))] text-[hsl(var(--teal-700))] inline-flex items-center justify-centerstart rounded-md font-medium px-2 py-1 h-10 px-4 py-2">{title}:</h2>
          <div className='text-[var(--text-b)] text-xs md:text-sm truncate animate-pulse'>{address}</div>
        </div>
        <Button 
          onClick={() => 
            navigator.clipboard.writeText(address).then(() => {
                setNotification({ message: 'Copied to clipboard', type: 'success'})
            })
          } 
          variant="destructive"
          className='shrink-0'
        >
          <span className='text-sm'>Copy</span>
        </Button>
      </div>
    </div>
  )
}
