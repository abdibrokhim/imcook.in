'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Notification from './utils/notify';
import { loader } from './utils/loader';
import { Analytics } from "@vercel/analytics/react"
import Footer from './components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-[var(--bg-a)] items-center justify-items-center min-h-screen pb-8 gap-8 p-4 font-[family-name:var(--font-geist-sans)]">
      <Analytics />
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-7xl">
          <div className="mb-6 mt-16 sm:mt-24 w-full max-w-2xl text-center leading-9">
            <h1 className="text-[var(--text-a)] font-black text-xl sm:text-2xl md:text-3xl">Welcome!</h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-16 items-center justify-center'>
            <div>
              <h1 className="text-[var(--text-a)] mt-4 font-bold text-lg sm:text-xl md:text-2xl">Farangis Abdivokhidova</h1>
            </div>
            <div>
              <h1 className="text-[var(--text-a)] mt-4 font-bold text-lg sm:text-xl md:text-2xl">Ibrohim Abdivokhidov</h1>
            </div>
          </div>
      </main>
      <Footer />
    </div>
  );
}