'use client';

import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import Footer from '../components/Footer';

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-[var(--bg-a)] items-center justify-items-center min-h-screen pb-8 gap-8 p-4 font-[family-name:var(--font-geist-sans)]">
      <Analytics />
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-7xl">
          <div className="mb-6 mt-16 sm:mt-24 w-full max-w-2xl text-center">
            <h1 className="text-[var(--text-a)] font-black text-xl sm:text-2xl md:text-3xl mb-8">Farangis Abdivokhidova</h1>
            <a 
              className="text-[var(--text-a)] font-bold text-lg sm:text-xl md:text-2xl hover:text-[var(--violet)] transition-colors duration-300"
              href="/sis/techgirls25"
              rel=""
              >TechGirls 2025 Application</a>
          </div>
      </main>
      <Footer />
    </div>
  );
}