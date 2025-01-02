import React from 'react'
import { Button } from './ui/button'

interface SocialCardProps {
  icon: React.ReactNode
  title: string
  content: React.ReactNode
  buttonText: string
  buttonLink: string
}

export function SocialCard({ icon, title, content, buttonText, buttonLink }: SocialCardProps) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='p-4 flex flex-col gap-4 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.25)]'>
        <div className='flex flex-row gap-4 items-center justify-start'>
          <p className="flex items-center text-[var(--button-bg)]">
            {icon}
          </p>
          <h2 className="text-xl font-bold text-[var(--button-bg)]">{title}</h2>
        </div>
        <div className='text-[var(--text-b)]'>{content}</div>
      <Button 
        onClick={() => window.open(buttonLink, '_blank')} 
        variant="default"
        className='w-full'
      >
        {buttonText}
      </Button>
      </div>
    </div>
  )
}
