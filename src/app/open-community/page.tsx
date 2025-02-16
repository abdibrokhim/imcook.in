'use client';

import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { Analytics } from "@vercel/analytics/react"
import Footer from '../components/Footer';
import { Button } from "../components/ui/button"
import { SocialCard } from '../components/SocialCard';
import { SponsoredCard } from '../components/SponsoredCard';
import { CryptoCard } from '../components/CryptoCard';
import { ca, troc } from '../utils/jsonData';
import { CoinCard } from '../components/CoinCard';
import { CardsMinima } from '../components/CardsMinima';
import { allProjects, brandStuff, cutesyCards, leadershipTeamData, socialCardData } from './jsonData';
import { handleDownload } from '../utils/handleDownload';

export default function Home() {
  const [expandedPodcast, setExpandedPodcast] = useState<number | null>(null);

  return (
    <div className="min-h-screen p-4 sm:p-8 md:p-12 lg:p-20">
      <Analytics />
      <main className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">Open Community</h1>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Official Trailer</h1>
        <div className='p-6 rounded-lg flex-1 shadow-[0_0_20px_rgba(255,255,255,0.25)]'>
          <div className="relative w-full md:h-[540px] h-[360px]">
            <iframe
              width="100%" height="100%" 
              className="rounded-md"
              src="https://www.youtube.com/embed/2fcSMvSTSvk"
              title="[Trailer]: Welcome to Open Community: Making AI Uncool Again. LMAO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              ></iframe>
          </div>
          <Button 
            onClick={() => window.open('https://www.theopencommunity.co/', '_blank')} 
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

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Explore All Projects</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
          {...allProjects.map((project) => (
            <div key={project.id} className={`relative flex flex-col gap-4 p-4 rounded-lg ${project.id === 3 ? 'shadow-[0_0_20px_rgba(45,212,191,0.25)]' : 'shadow-[0_0_20px_rgba(255,255,255,0.25)]'}`}>
              {project.id === 3 ? (
                <p className='absolute top-6 left-6 text-[var(--text-b)] transition duration-300 px-2 py-1 bg-[hsl(var(--teal-100))] opacity-80 text-xs rounded-full'>newest</p>
              ) : null}
              <div className='flex flex-col h-full gap-4 items-start justify-center'>
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <Image 
                    src={project.imgPath}
                    alt={project.name}
                    width={200}
                    height={200}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='text-start'>
                  <h2 className="text-xl font-bold text-[var(--button-bg)]">{project.name}: {project.title}</h2>
                  <div className='text-[var(--text-b)]'>
                    {project.info.slice(0, 150)}
                    {project.info.length > 150 && (
                      <div className="flex flex-col gap-2">
                        {expandedPodcast === project.id && (
                          <span>{project.info.slice(150)}</span>
                        )}
                        <button 
                          onClick={() => setExpandedPodcast(expandedPodcast === project.id ? null : project.id)}
                          className="text-start text-xs text-[var(--text-c)] hover:underline"
                        >
                          {expandedPodcast === project.id ? 'read less' : 'read more'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='flex space-x-4 items-center justify-center'>
                <Button 
                  onClick={() => window.open(project.learnMore, '_blank')} 
                  variant={project.id === 3 ? 'destructive' : 'default'}
                  className='w-full'
                >
                  Learn More
                </Button>
                <Button 
                  onClick={() => window.open(project.learnMore, '_blank')}
                  variant={project.id === 3 ? 'destructive' : 'default'}
                  className='w-full'
                >
                  Explore More
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

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">The Best Cracked Team</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
          {leadershipTeamData.map((member) => (
            <div key={member.id} className='flex flex-col gap-4 p-4 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.25)]'>
              <div className='flex flex-col gap-4 items-center justify-center'>
                <div className="w-48 h-48 rounded-full overflow-hidden">
                  <Image 
                    src={member.avatar}
                    alt={member.name}
                    width={200}
                    height={200}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='text-center'>
                  <h2 className="text-xl font-bold text-[var(--button-bg)]">{member.name}</h2>
                  <p className='text-[var(--text-b)]'>{member.role}</p>
                  <p className='text-[var(--text-c)] text-xs'>&quot;{member.ps}&quot;</p>
                </div>
              </div>
              <div className='flex space-x-4 items-center justify-center'>
                <Button 
                  onClick={() => window.open(member.twitter, '_blank')} 
                  variant="default"
                  className='w-full'
                >
                  X (twitter)
                </Button>
                <Button 
                  onClick={() => window.open(member.linkedin, '_blank')} 
                  variant="default"
                  className='w-full'
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Brand Guidelines</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 p-4 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.25)]'>
          <div className="flex flex-col items-center gap-2">
            <div className="w-[300px] h-[300px]">
              <Image 
                src="/assets/oc-logo.png"
                alt="logo"
                width={1440}
                height={1440}
                className='w-full h-full object-contain'
              />
            </div>
            <p className='text-xs text-[var(--text-b)]'>size: 1440x1440</p>
            <p className='text-xs text-[var(--text-b)]'>color: #000000, #ffffff</p>
            <Button 
              onClick={() => handleDownload(brandStuff[0].imgPath, brandStuff[0].name)} 
              variant="default"
              className="w-fit"
            >
              Download Logo
            </Button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-[300px] h-[300px]">
              <Image 
                src="/assets/oc-cover-1.png"
                alt="logo"
                width={1920}
                height={1080}
                className='w-full h-full object-contain'
              />
            </div>
            <p className='text-xs text-[var(--text-b)]'>size: 1920x1080</p>
            <p className='text-xs text-[var(--text-b)]'>color: #000000, #ffffff</p>
            <Button 
              onClick={() => handleDownload(brandStuff[1].imgPath, brandStuff[1].name)} 
              variant="default"
              className="w-fit"
            >
              Download Cover
            </Button>
          </div>
        </div>

        {/* crypto stuff */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[var(--text-b)]">Introducing: <span className='text-[hsl(var(--teal-700))] bg-[hsl(var(--teal-100))] inline p-1'>{`The Real Open Community ($TROC)`}</span></h1>
        <div className='grid grid-cols-1 gap-8 max-w-2xl items-center justify-center mx-auto'>
          <CryptoCard 
            title='CA'
            address={ca}
            buttonText='Copy Address'
            green={true}
          />
          {troc.map((card: { id: any; name: any; link: any; }) => (
            <CoinCard 
            key={card.id}
            title={card.name}
            address={card.link}
            buttonText={card.link}
            buttonLink={card.link}
            />
          ))}
        </div>
        <p className='max-w-xl items-center justify-center mx-auto text-[var(--text-c)] text-xs'>Disclaimer: This is the only legit coin I have ever created, everything before this was not me. Others used my image, name, and community. Yes, previous coins were rugged, but I had nothing to do with them. This one is mine. I don&apos;t have large supply of it and it&apos;s community driven. Please do your own research and be careful. This is not a financial advice.</p>

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