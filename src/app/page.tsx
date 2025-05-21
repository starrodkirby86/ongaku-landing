import React from 'react';
import FloatingElements from './components/FloatingElements';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-6xl lg:text-8xl font-display text-center text-theme-02'>
        ongaku.io
      </h1>
      <FloatingElements />
    </div>
  );
}
