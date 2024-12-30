'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/react"
import Footer from '../components/Footer';
import { Button } from "../components/ui/button"

export default function Home() {

  const cutesyCards = [
    {
      id: 0,
      name: 'just make things',
      imgPath: '/cards/jmt1.png',
    },
    {
      id: 1,
      name: 'just make things',
      imgPath: '/cards/jmt2.png',
    },
    {
      id: 2,
      name: 'just make things',
      imgPath: '/cards/jmt3.png',
    },
    {
      id: 3,
      name: 'just make things',
      imgPath: '/cards/jmt4.png',
    },
  ]

  const handleDownload = useCallback(async (downloadUrl: string, downloadName: string) => {
    try {
      const a = document.createElement('a')
      a.href = downloadUrl
      a.download = downloadName
      a.click()
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }, [])

  return (
    <div className="min-h-screen p-4 sm:p-8 md:p-12 lg:p-20">
      <Analytics />
      <main className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">just make things</h1>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Cutesy Cards</h1>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Cutesy Cards</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
          {cutesyCards.map((card) => (
            <div key={card.id} className='flex flex-col gap-4 p-4 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.25)]'>
              <div className='flex flex-col gap-4 items-center justify-center'>
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <Image 
                    src={card.imgPath}
                    alt={card.name}
                    width={200}
                    height={200}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='text-center'>
                  <h2 className="text-xl font-bold text-[var(--button-bg)]">{card.name}</h2>
                </div>
              </div>
              <div className='flex space-x-4 items-center justify-center'>
                <Button 
                  onClick={() => window.open(card.imgPath, '_blank')} 
                  variant="default"
                  className='w-full'
                >
                  View Card
                </Button>
                <Button 
                  onClick={() => handleDownload(card.imgPath, card.name)}
                  variant="default"
                  className='w-full'
                >
                  Download Card
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className='flex text-xs justify-center space-x-4'>
          <Button 
            onClick={()=>{
              window.open('https://www.justmakethings.cc/', '_blank')
            }} variant="outline">
            <span className='mr-1'>generate your own card</span>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}