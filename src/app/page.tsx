'use client';

import Image from 'next/image';
import React, { useState, useCallback } from 'react';
import { Analytics } from "@vercel/analytics/react"
import Footer from './components/Footer';
import { Button } from "./components/ui/button"
import { CryptoCard } from './components/CryptoCard';

export default function Home() {

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

  const cutesyCards = [
    {
      id: 0,
      name: 'i make things, therefore i am.',
      imgPath: '/cards/i-make-things-therefore-i-am.png',
    },
    {
      id: 1,
      name: 'MY 2024 WRAPPED',
      imgPath: '/cards/my2024wrapped.png',
    },
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

  const cryptoAddress = [
    {
      id: 0,
      title: 'BITCOIN',
      icon: '/crypto/Bitcoin.svg',
      address: 'bc1qpylxaqwapk0tgdmpnnljj545z4lk2z9q5us6p6',
      buttonText: "Copy Address"
    },
    {
      id: 1,
      title: 'ETHEREUM',
      icon: '/crypto/Ethereum_logo.svg',
      address: '0xb4a8e71d82e8Bf84a02C7770585F9cD8b267aDB9',
      buttonText: "Copy Address"
    },
    {
      id: 2,
      title: 'SOLANA',
      icon: '/crypto/solanaLogoMark.svg',
      address: '4MpPHapcdb5MwRy57juUQ2wUt1EJo8BYqXsYKwSfCvz1',
      buttonText: "Copy Address"
    }
  ]

  return (
    <div className="min-h-screen p-4 sm:p-8 md:p-12 lg:p-20">
      <Analytics />
      <main className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">Ibrohim Abdivokhidov</h1>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">&quot;i make things, therefore i am.&quot;</h1>
        <p className='text-xs text-[var(--text-b)] text-center'>Looking for my sis TechGirls25 application? <a className='hover:text-[hsl(var(--teal-700))] transition duration-300 px-2 py-1 bg-[hsl(var(--teal-100))] rounded-full' href='/sis/techgirls25' target='_blank'>It&apos;s here</a></p>
        <div className="flex flex-col p-12 justify-center items-center rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.25)]">
          <p className='animate-pulse text-2xl'>loading...</p>
          <p className='text-xs mt-2'>meanwhile feel free to check out <a className='ml-1 hover:text-[hsl(var(--teal-700))] transition duration-300 px-2 py-1 bg-[hsl(var(--teal-100))] rounded-full' href='https://github.com/abdibrokhim/wrapped24' target='_blank'>MY 2024 WRAPPED</a></p>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">My Big Projects</h1>
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
                Deep Dive
              </Button>
              <Button 
                onClick={() => handleShare(project.name)} 
                variant="default"
                className='w-full'
              >
                Share on Twitter
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
            />
          ))}
        </div>
        
        {/* Cutesy Cards */}

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
        <p className='text-xs text-[var(--text-b)] text-center'>Did you like this website design? <a className='hover:text-[hsl(var(--teal-700))] transition duration-300 px-2 py-1 bg-[hsl(var(--teal-100))] rounded-full' href='https://github.com/abdibrokhim/imcook.in' target='_blank'>Fork on Github</a></p>
      </main>
      <Footer />
    </div>
  );
}