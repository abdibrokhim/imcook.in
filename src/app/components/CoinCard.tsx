import React from 'react'
import { Button } from './ui/button'

interface CoinCardProps {
  title: string
  address: string
  buttonText: string
  buttonLink: string
}

export function CoinCard({ title, address, buttonLink }: CoinCardProps) {

  return (
    <div className='flex flex-col gap-4'>
      <div className='p-4 flex flex-row items-center justify-between rounded-lg shadow-[0_0_20px_rgba(45,212,191,0.25)]'>
        <div className='flex flex-row gap-4 items-center overflow-hidden'>
          <h2 className="text-sm md:text-lg font-bold whitespace-nowrap bg-[hsl(var(--teal-100))] text-[hsl(var(--teal-700))] inline-flex items-center justify-centerstart rounded-md font-medium px-2 py-1 h-10 px-4 py-2">{title}:</h2>
          <div className='text-[var(--text-b)] text-xs md:text-sm truncate animate-pulse'>{address}</div>
        </div>
        <Button 
          onClick={() => window.open(buttonLink, '_blank')} 
          variant="destructive"
          className='shrink-0'
        >
          <span className='text-sm'>Visit</span>
        </Button>
      </div>
    </div>
  )
}
