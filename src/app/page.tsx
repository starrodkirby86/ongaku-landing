import React from 'react';
import FloatingElements from './components/FloatingElements';
import TipsAndTricks from './components/TipsAndTricks';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-col items-center justify-center py-8">
        <h1 className="text-6xl lg:text-8xl font-display text-center text-theme-02">
          ongaku.io
        </h1>
        <FloatingElements />
      </header>
      <main className="flex-grow">
        <TipsAndTricks />
      </main>
    </div>
  );
}
