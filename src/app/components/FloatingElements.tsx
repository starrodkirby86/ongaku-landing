'use client';
import { motion } from 'motion/react';

// Customizable CSS variables for easy positioning and sizing
const styles = {
  container: {
    '--chibi-width': 'min(494px, 61.75%)',  // 494/800 = 61.75%
    '--chibi-height': 'min(606px, 75.75%)', // 606/800 = 75.75%
    '--shape-1-size': 'min(300px, 37.5%)',  // 300/800 = 37.5%
    '--shape-2-size': 'min(350px, 43.75%)', // 350/800 = 43.75%
    '--shape-3-size': 'min(400px, 50%)',    // 400/800 = 50%
    '--shape-1-x': '5%',
    '--shape-1-y': '30%',
    '--shape-2-x': '70%',
    '--shape-2-y': '10%',
    '--shape-3-x': '40%',
    '--shape-3-y': '50%',
  } as React.CSSProperties,
};

export default function FloatingElements() {
  return (
    <div 
      className='relative w-full max-w-[800px] aspect-square mx-auto overflow-hidden'
      style={styles.container}
    >
      {/* Background shapes with rotation and pulse */}
      <motion.div
        className='absolute'
        style={{
          left: 'var(--shape-1-x)',
          top: 'var(--shape-1-y)',
          width: 'var(--shape-1-size)',
          height: 'var(--shape-1-size)',
          transformOrigin: 'center center',
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          },
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <img 
          src='/shape_01.png' 
          alt='Decorative shape 1' 
          className='w-full h-full object-contain'
        />
      </motion.div>

      <motion.div
        className='absolute'
        style={{
          left: 'var(--shape-2-x)',
          top: 'var(--shape-2-y)',
          width: 'var(--shape-2-size)',
          height: 'var(--shape-2-size)',
          transformOrigin: 'center center',
        }}
        animate={{
          rotate: -360,
          scale: [1, 1.15, 1],
        }}
        transition={{
          rotate: {
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          },
          scale: {
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <img 
          src='/shape_02.png' 
          alt='Decorative shape 2' 
          className='w-full h-full object-contain'
        />
      </motion.div>

      <motion.div
        className='absolute'
        style={{
          left: 'var(--shape-3-x)',
          top: 'var(--shape-3-y)',
          width: 'var(--shape-3-size)',
          height: 'var(--shape-3-size)',
          transformOrigin: 'center center',
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: {
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          },
          scale: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <img 
          src='/shape_03.png' 
          alt='Decorative shape 3' 
          className='w-full h-full object-contain'
        />
      </motion.div>

      {/* Front chibi milk with floating animation */}
      <motion.div
        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
        style={{
          width: 'var(--chibi-width)',
          height: 'var(--chibi-height)',
        }}
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <img 
          src='/chibi_milk.png' 
          alt='Chibi Milk' 
          className='w-full h-full object-contain'
        />
      </motion.div>
    </div>
  );
}
