'use client';

import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { Analytics } from "@vercel/analytics/react"
import Footer from '../components/Footer';
import { Button } from "../components/ui/button"
import { SocialCard } from '../components/SocialCard';
import { SponsoredCard } from '../components/SponsoredCard';
import { CryptoCard } from '../components/CryptoCard';
import { CoinCard } from '../components/CoinCard';
import { CardsMinima } from '../components/CardsMinima';
import { allPodcasts, applicationsData, cutesyCards, socialCardData } from './jsonData';

export default function Home() {
    const [expandedPodcast, setExpandedPodcast] = useState<number | null>(null);

  return (
    <div className="min-h-screen p-4 sm:p-8 md:p-12 lg:p-20">
      <Analytics />
      <main className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">That Two PhDs</h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Latest Podcast</h1>
        <div className='p-6 rounded-lg flex-1 shadow-[0_0_20px_rgba(255,255,255,0.25)]'>
          <div className="relative w-full md:h-[540px] h-[360px]">
            <iframe
              width="100%" height="100%" 
              className="rounded-md"
              src="https://www.youtube.com/embed/aY_FOwkBc40"
              title="DAAD Rejected After Week? - That Two PhDs"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              ></iframe>
          </div>
          <Button 
            onClick={() => window.open('https://www.youtube.com/@ThatTwoPhDs', '_blank')} 
            variant="default"
            className="w-full mt-4"
          >
            Explore More
          </Button>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Join Us</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
          {socialCardData.map((card) => (
            <SocialCard
              key={card.id}
              icon={typeof card.icon === 'function' ? card.icon() : card.icon}
              title={card.title}
              content={card.content}
              buttonText={card.buttonText}
              buttonLink={card.buttonLink}
            />
          ))}
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Learn 100x Faster</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
            {applicationsData.map((appl) => (
              <div key={appl.id} className='flex flex-col gap-4 p-4 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.25)]'>
                <div className='flex flex-col h-full gap-4 items-start justify-center'>
                    <div className="w-full h-full rounded-lg overflow-hidden">
                    <Image 
                        src={appl.imgPath}
                        alt={appl.name}
                        width={200}
                        height={200}
                        className='w-full h-full object-cover'
                    />
                    </div>
                    <div className='text-start'>
                    <h2 className="text-xl font-bold text-[var(--button-bg)]">{appl.name}</h2>
                    </div>
                </div>
                <div className='flex space-x-4 items-center justify-center'>
                    <Button 
                        onClick={() => window.open(appl.deepDive, '_blank')} 
                        variant="default"
                        className='w-full'
                    >
                    Deep Dive
                    </Button>
                    <Button 
                        onClick={() => window.open(appl.getAccess, '_blank')}
                        variant="default"
                        className='w-full'
                    >
                    Get Access
                    </Button>
                </div>
              </div>
            ))}
            {/* sponsored card */}
            <SponsoredCard 
              title="Learn How To Build Real World Stuff"
              info="What you will learn?"
              about="Get hands-on with real AI projects - from transforming modern websites with a retro 90s vibe to building an AI coding interviewer, launching your own AI startup, chatting with documents, generating AI stickers, and even creating Chrome extensions. You'll dive into top tech stacks (Next.js, React, Tailwind CSS, AI/ML APIs, OpenAI, and other tons of potential tools), learn prompt engineering, deploy like a pro on Vercel, and level up your dev game with rapid prototyping skills."
              quote="Ibrohim Abdivokhidov - &quot;1st AI/ML API Regional Ambassador in Central Asia | Founder & CEO at Open Community (170+ 🧑‍💻) | 60+ Hackathons | Open Source contr. at Anarchy Labs (500+ ⭐️), Langflow (35K+ ⭐️) | Mentor (200K+ 🧑‍🎓) | Author (5+ 📚)&quot;"
              firstButtonText="Start Learning"
              firstButtonLink="/JustMakeThings"
              secondButtonText="Contact ME"
              secondButtonLink="https://linkedin.com/in/abdibrokhim"
            />
          </div>

        <div className='flex flex-col gap-4 items-center justify-center p-6 rounded-lg flex-1 shadow-[0_0_20px_rgba(255,255,255,0.25)]'>
            <div className="w-full h-full rounded-lg overflow-hidden">
            <Image 
                src="/applications/1.png"
                alt="Explore All"
                width={200}
                height={200}
                className='w-full h-full object-cover'
            />
            </div>
            <div className='text-start'>
                <h2 className="text-xl font-bold text-[var(--button-bg)]">Get access other 40+ applications. Listen to the Podcast and Deep Dive into Applications. Download Applications and Podcast in a High Quality. Complete analysis and etc.</h2>
                <h2 className="text-lg font-bold text-[var(--text-b)]">Click &quot;Explore All&quot; rn!</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-full'>
                <Button 
                    onClick={() => window.open('https://topmate.io/abdibrokhim/1324206', '_blank')} 
                    variant="default"
                    className="w-full"
                >
                    Explore All on Topmate
                </Button>
                <Button 
                    onClick={() => window.open('https://www.patreon.com/collection/862594', '_blank')} 
                    variant="default"
                    className="w-full"
                >
                    Explore All on Patreon
                </Button>
                <Button 
                    onClick={() => window.open('https://www.patreon.com/collection/1230004', '_blank')} 
                    variant="default"
                    className="w-full"
                >
                    Deep Dive (with Analysis)
                </Button>
            </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Explore All Podcasts</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
          {[...allPodcasts].reverse().map((podcast) => (
            <div key={podcast.id} className={`relative flex flex-col gap-4 p-4 rounded-lg ${podcast.id === 3 ? 'shadow-[0_0_20px_rgba(45,212,191,0.25)]' : 'shadow-[0_0_20px_rgba(255,255,255,0.25)]'}`}>
              {podcast.id === 3 ? (
                <p className='absolute top-6 left-6 text-[var(--text-b)] transition duration-300 px-2 py-1 bg-[hsl(var(--teal-100))] opacity-80 text-xs rounded-full'>newest</p>
              ) : null}
              <div className='flex flex-col h-full gap-4 items-center justify-center'>
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <Image 
                    src={podcast.imgPath}
                    alt={podcast.name}
                    width={200}
                    height={200}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='text-start'>
                  <h2 className="text-xl font-bold text-[var(--button-bg)]">{podcast.name}</h2>
                  <div className='text-[var(--text-b)]'>
                    {podcast.info.slice(0, 150)}
                    {podcast.info.length > 150 && (
                      <div className="flex flex-col gap-2">
                        {expandedPodcast === podcast.id && (
                          <span>{podcast.info.slice(150)}</span>
                        )}
                        <button 
                          onClick={() => setExpandedPodcast(expandedPodcast === podcast.id ? null : podcast.id)}
                          className="text-start text-xs text-[var(--text-c)] hover:underline"
                        >
                          {expandedPodcast === podcast.id ? 'read less' : 'read more'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='flex space-x-4 items-center justify-center'>
                <Button 
                  onClick={() => window.open(podcast.deepDive, '_blank')} 
                  variant={podcast.id === 3 ? 'destructive' : 'default'}
                  className='w-full'
                >
                  Watch on YouTube
                </Button>
                <Button 
                  onClick={() => window.open(podcast.stream, '_blank')}
                  variant={podcast.id === 3 ? 'destructive' : 'default'}
                  className='w-full'
                >
                  Listen on Spotify
                </Button>
              </div>
            </div>
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