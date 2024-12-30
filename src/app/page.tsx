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
      pagePath: '/ThatTwoPhDs',
      coverPath: '/assets/thattwophds.png',
    },
    {
      id: 1,
      name: 'just make things',
      pagePath: '/JustMakeThings',
      coverPath: '/assets/justmakethings.png',
    },
    {
      id: 2,
      name: 'Open Community',
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
        <div className="mb-8 flex justify-center shadow-[0_0_20px_rgba(255,255,255,0.25)]">
          <Image 
            src="/logo.svg"
            alt="logo"
            width={200}
            height={200}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="space-y-4">
              <Image
                src={project.coverPath}
                alt={project.name}
                width={400}
                height={300}
                className="w-full rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.25)]"
              />
              <h2 className="text-xl font-bold">{project.name}</h2>
              <div className="flex space-x-4">
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