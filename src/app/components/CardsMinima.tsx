import Image from 'next/image';
import React, { useCallback } from 'react'
import { Button } from './ui/button'
import { DownloadIcon, ExternalLinkIcon } from 'lucide-react';
import { handleDownload } from '../utils/handleDownload';

interface CardsMinimaProps {
    jsonData: {
        id: number,
        name: string,
        imgPath: string,
    }[]
}

export function CardsMinima({ jsonData }: CardsMinimaProps) {
  return (
    <>
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Cards Minima</h1>
        <p className='text-sm sm:text-md text-[var(--text-b)] text-center'>Download them and share with your fam!!</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
          {jsonData.map((card) => (
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
                  <span className='text-sm'>View</span>
                </Button>
                <Button 
                  onClick={() => handleDownload(card.imgPath, card.name)}
                  variant="default"
                  className='w-full'
                >
                  <span className='text-sm'>Download</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}
