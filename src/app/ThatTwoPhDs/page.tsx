'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/react"
import Footer from '../components/Footer';
import { Button } from "../components/ui/button"
import { SocialCard } from '../components/SocialCard';

export default function Home() {

    const socialCardData = [
        {
          id: 0,
          icon: () => (<svg width="32px" height="32px" className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5813 7.19989C21.4733 6.76846 21.2534 6.37318 20.9438 6.05395C20.6341 5.73473 20.2457 5.50287 19.8178 5.3818C18.2542 5 12 5 12 5C12 5 5.74578 5 4.18222 5.41816C3.75429 5.53923 3.36588 5.77109 3.05623 6.09031C2.74659 6.40954 2.52666 6.80482 2.41868 7.23625C2.13253 8.82303 1.99255 10.4327 2.00052 12.0451C1.99032 13.6696 2.1303 15.2916 2.41868 16.8903C2.53773 17.3083 2.76258 17.6886 3.0715 17.9943C3.38043 18.3 3.76299 18.5209 4.18222 18.6357C5.74578 19.0538 12 19.0538 12 19.0538C12 19.0538 18.2542 19.0538 19.8178 18.6357C20.2457 18.5146 20.6341 18.2827 20.9438 17.9635C21.2534 17.6443 21.4733 17.249 21.5813 16.8176C21.8653 15.2427 22.0052 13.6453 21.9995 12.0451C22.0097 10.4206 21.8697 8.79862 21.5813 7.19989Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.75 9.46533C9.75 8.98805 9.75 8.74941 9.84974 8.61618C9.93666 8.50008 10.0697 8.42744 10.2144 8.4171C10.3804 8.40525 10.5811 8.53429 10.9826 8.79239L14.9254 11.3271C15.2738 11.551 15.448 11.663 15.5082 11.8054C15.5607 11.9298 15.5607 12.0702 15.5082 12.1946C15.448 12.337 15.2738 12.449 14.9254 12.6729L10.9826 15.2076C10.5811 15.4657 10.3804 15.5948 10.2144 15.5829C10.0697 15.5726 9.93666 15.4999 9.84974 15.3838C9.75 15.2506 9.75 15.012 9.75 14.5347V9.46533Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
          title: 'YouTube',
          content: 'a new kind of podcast',
          buttonText: 'Subscribe on YouTube',
          buttonLink: 'https://www.youtube.com/@ThatTwoPhDs'
        },
        {
          id: 1,
          icon: () => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12"><path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"></path></svg>),
          title: 'Discord',
          content: 'a new kind of podcast',
          buttonText: 'Join the Community',
          buttonLink: 'https://discord.gg/nVtmDUN2sR'
        },
        {
          id: 2,
          icon: () => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>),
          title: 'LinkedIn',
          content: 'a new kind of podcast',
          buttonText: 'Follow on LinkedIn',
          buttonLink: 'https://linkedin.com/company/thattwophds'
        },
        {
          id: 3,
          icon: () => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>),
          title: 'X (twitter)',
          content: 'a new kind of podcast',
          buttonText: 'Follow on Twitter',
          buttonLink: 'https://x.com/abdibrokhim'
        },
    ]

    const cutesyCards = [
        {
          id: 0,
          name: 'i failed again...',
          imgPath: '/cards/i-failed-again.png',
        },
        {
          id: 1,
          name: 'a new kind of podcast',
          imgPath: '/cards/a-new-kind-of-podcast.png',
        },
      ]

      const applicationsData = [
        {
            id: 0,
            name: '[Accepted]: HPAIR Harvard Conference, 2025',
            imgPath: '/applications/Abdivokhidov_Ibrohim_HPAIR_2025_Acceptance-1.png',
            deepDive: 'https://youtu.be/gme4g95WT8g?si=gtsi8siX01-GKi-C',
            getAccess: 'https://topmate.io/abdibrokhim/1324206'
        },
        {
            id: 1,
            name: '[Accepted]: HPAIR Harvard Conference, 2024',
            imgPath: '/applications/Abdivokhidov_Ibrohim_HPAIR_2024_Acceptance-1.png',
            deepDive: 'https://youtu.be/aY_FOwkBc40?si=B-48KO36NfpanZqp',
            getAccess: 'https://topmate.io/abdibrokhim/1324206'
        },
        {
            id: 2,
            name: '[Accepted]: IES 2025 Copernicus Berlin, 2025',
            imgPath: '/applications/ise.png',
            deepDive: 'https://youtu.be/gme4g95WT8g?si=gtsi8siX01-GKi-C',
            getAccess: 'https://topmate.io/abdibrokhim/1324206'
        },
        {
            id: 3,
            name: '[Accepted]: LEADERS FELLOWSHIP MALDIVES, 2024',
            imgPath: '/applications/lmaldives.png',
            deepDive: 'https://youtu.be/gme4g95WT8g?si=gtsi8siX01-GKi-C',
            getAccess: 'https://topmate.io/abdibrokhim/1324206'
        },
        {
            id: 4,
            name: '[Accepted]: ICSDI 2024. Research paper on Machine Learning.',
            imgPath: '/applications/Saudi conference certificate-1.png',
            deepDive: 'https://youtu.be/gme4g95WT8g?si=gtsi8siX01-GKi-C',
            getAccess: 'https://topmate.io/abdibrokhim/1324206'
        },
      ]

      const applicationsLinks = [
        {
            id: 0,
            name: 'Topmate',
            link: 'https://topmate.io/abdibrokhim/1324206',
        },
        {
            id: 1,
            name: 'Patreon',
            link: 'https://www.patreon.com/collection/862594',
        },
        {
            id: 2,
            name: 'Patreon Deep Dive',
            link: 'https://www.patreon.com/collection/1230004',
        }
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
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className="w-full h-full rounded-lg overflow-hidden">
                    <Image 
                        src={appl.imgPath}
                        alt={appl.name}
                        width={200}
                        height={200}
                        className='w-full h-full object-cover'
                    />
                    </div>
                    <div className='text-center'>
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