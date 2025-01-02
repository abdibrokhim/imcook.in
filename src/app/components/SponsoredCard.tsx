import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image';

interface SponsoredCardProps {
    title: string
    info: string
    about: string
    quote: string
    firstButtonText: string
    firstButtonLink: string
    secondButtonText: string
    secondButtonLink: string
}

export function SponsoredCard({ title, info, about, quote, firstButtonText, firstButtonLink, secondButtonText, secondButtonLink }: SponsoredCardProps) {
    return (
<div className='relative flex flex-col gap-4 p-4 rounded-lg shadow-[0_0_20px_rgba(45,212,191,0.25)]'>
              <p className='absolute top-6 left-6 text-[var(--text-b)] transition duration-300 px-2 py-1 bg-[hsl(var(--teal-100))] opacity-80 text-xs rounded-full'>sponsored</p>
              <div className='flex flex-col gap-4 items-start justify-center'>
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <Image 
                        src="/applications/makethings-cover.png"
                        alt="Learn Build Stuff"
                        width={200}
                        height={200}
                        className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='text-start'>
                    <h2 className="text-xl font-bold text-[hsl(var(--teal-700))] bg-[hsl(var(--teal-100))] inline p-1">{title}</h2>
                    <div className='flex flex-col gap-2 mt-2'>
                      <p className='text-[var(--text-b)]'>{info}</p>
                      <p className='text-[var(--text-b)]'>{about}</p>
                      <p className='text-[var(--text-b)]'>{quote}</p>
                    </div>
                  </div>
              </div>
              <div className='flex space-x-4 items-center justify-center'>
                  <Button 
                      onClick={() => window.open(firstButtonLink, '_blank')} 
                      variant="destructive"
                      className='w-full'
                  >
                    {firstButtonText}
                  </Button>
                  <Button 
                      onClick={() => window.open(secondButtonLink, '_blank')}
                      variant="destructive"
                      className='w-full'
                  >
                    {secondButtonText}
                  </Button>
              </div>
            </div>
    )
}