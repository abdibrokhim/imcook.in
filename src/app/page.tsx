'use client';

import Image from 'next/image';
import React, { useState, useCallback } from 'react';
import { X, ArrowRightIcon, CopyIcon, ArrowDown, LockKeyholeIcon, LockKeyholeOpen, CheckCheckIcon, LucideStars, Share, GlobeIcon, ExternalLinkIcon, DownloadIcon } from "lucide-react"
import { Analytics } from "@vercel/analytics/react"
import Footer from './components/Footer';
import { Button } from "./components/ui/button"
import { CryptoCard } from './components/CryptoCard';
import { CoinCard } from './components/CoinCard';
import { projects, cryptoAddress, cutesyCards, troc, ca } from './utils/jsonData';
import { CardsMinima } from './components/CardsMinima';

export default function Home() {

  const handleShare = useCallback(async (projectName: string) => {
    try {
      const text = `imcook.in | yaps.gg | notl.ink | notgrep.app | justmakethings.cc`
      const twitterUrl = `https://x.com/intent/post?text=${encodeURIComponent(text)}`
      window.open(twitterUrl, '_blank')
    } catch (error) {
      console.error('An error occurred:', error)
      const fallbackText = 'imcook.in | yaps.gg | notl.ink | notgrep.app | justmakethings.cc'
      const twitterUrl = `https://x.com/intent/post?text=${encodeURIComponent(fallbackText)}`
      window.open(twitterUrl, '_blank')
    }
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-8 md:p-12 lg:p-20">
      <Analytics />
      <main className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">Welcome to Ibrohim Abdivokhidov&apos;s startup kitchen</h1>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"><span className='text-[hsl(var(--teal-700))] bg-[hsl(var(--teal-100))] inline p-1'>i build things, all open source</span></h1>
        <p className='text-xs text-[var(--text-b)] text-center'>Looking for my sis TechGirls25 application? <a className='hover:text-[hsl(var(--teal-700))] transition duration-300 px-2 py-1 bg-[hsl(var(--teal-100))] rounded-full' href='/sis/techgirls25' target='_blank'>It&apos;s here</a></p>
        
        <h1 className="text-xl font-bold text-center">I&apos;m excited to share that <a className='text-[hsl(var(--teal-700))] px-2 py-1 bg-[hsl(var(--teal-100))] rounded-full' href='https://notl.ink' target='_blank' rel="noreferrer">notl.ink</a> will be launching on ProductHunt<br></br>on February 18th, 2025 at 12:01 AM PST. (or 01:01 PM Uzbekistan time)</h1>
        <iframe 
          className='border-0 object-cover mx-auto items-center justify-center'
          src="https://cards.producthunt.com/cards/products/992403"
          width={500}
          height={405}
          allowFullScreen>
        </iframe>
        {/* projects */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className='flex flex-col gap-4 p-4 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.25)]'>
            <div className='flex flex-col gap-4 items-start justify-start'>
              <div className="w-full h-full rounded-md overflow-hidden">
                <Image 
                  src={project.coverPath}
                  alt={project.name}
                  width={400}
                  height={300}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='text-start'>
                <h2 className="text-xl font-bold text-[var(--button-bg)]">{project.name}</h2>
                <p className='text-[var(--text-b)]'>{project.info}</p>
              </div>
            </div>
            <div className='flex space-x-4 items-start justify-start'>
              <Button 
                onClick={() => window.open(project.pagePath, '_blank')} 
                variant="default"
                className='w-full'
              >
                <span className='text-sm'>Visit</span>
              </Button>
              <Button 
                onClick={() => handleShare(project.name)} 
                variant="default"
                className='w-full'
              >
                <span className='text-sm'>Share</span>
              </Button>
            </div>
          </div>
          ))}
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Donate & Support</h1>
        <p className='text-sm sm:text-md text-[var(--text-b)] text-center'>All my projects are open-source and free to use. If you like my work, consider supporting me by donating some crypto.</p>
        <div className='grid grid-cols-1 gap-8 max-w-xl items-center justify-center mx-auto'>
          {cryptoAddress.map((card) => (
            <CryptoCard
              key={card.id}
              title={card.title}
              address={card.address}
              buttonText={card.buttonText}
              green={true}
            />
          ))}
        </div>
        
        {/* Cards Minima */}
        <CardsMinima jsonData={cutesyCards} />

        <div className='flex text-xs justify-center space-x-4'>
          <Button 
            onClick={()=>{
              window.open('https://www.justmakethings.cc/', '_blank')
            }} variant="outline">
            <span className='mr-1'>generate your own card</span>
          </Button>
        </div>
        <p className='text-xs text-[var(--text-b)] text-center'>Did you like this website design? <a className='hover:text-[hsl(var(--teal-700))] transition duration-300 px-2 py-1 bg-[hsl(var(--teal-100))] rounded-full' href='https://github.com/abdibrokhim/imcook.in' target='_blank'>Fork on Github</a></p>
      </main>
      <Footer />
    </div>
  );
}