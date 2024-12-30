'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import Notification from './utils/notify';
import { loader } from './utils/loader';
import { Analytics } from "@vercel/analytics/react"
import Footer from './components/Footer';
import { Button } from "./components/ui/button"

export default function Home() {
  const [loading, setLoading] = useState(false);

  const projects = [
    {
      id: 0,
      name: 'That Two PhDs',
      info: 'a new kind of podcast',
      pagePath: '/ThatTwoPhDs',
      coverPath: '/assets/thattwophds.png',
    },
    {
      id: 1,
      name: 'just make things',
      info: 'you can just make things',
      pagePath: '/JustMakeThings',
      coverPath: '/assets/justmakethings.png',
    },
    {
      id: 2,
      name: 'Open Community',
      info: 'making ai uncool again',
      pagePath: '/OpenCommunity',
      coverPath: '/assets/opencommunity.png',
    }
  ]

  const handleShare = useCallback(async (projectName: string) => {
    try {
      const text = `this project is sooooo crazy ${projectName}!\nhere: imcook.in\n#justmakethings`
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
      window.open(twitterUrl, '_blank')
    } catch (error) {
      console.error('An error occurred:', error)
      const fallbackText = '#justmakethings'
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(fallbackText)}`
      window.open(twitterUrl, '_blank')
    }
  }, [])

  return (
    <div className="min-h-screen p-4 sm:p-8 md:p-12 lg:p-20">
      <Analytics />
      <main className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">Ibrohim Abdivokhidov</h1>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">i make things, therefore i am.</h1>
        <div className="mb-8 flex justify-center shadow-[0_0_20px_rgba(255,255,255,0.25)]">
          <Image 
            src="/logo.svg"
            alt="logo"
            width={200}
            height={200}
          />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">My Cookies</h1>
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
              >
                Deep Dive
              </Button>
              <Button 
                onClick={() => handleShare(project.name)} 
                variant="default"
              >
                Share on Twitter
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