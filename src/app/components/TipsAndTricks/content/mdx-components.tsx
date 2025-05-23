'use client';

import { MDXProvider } from '@mdx-js/react';

const components = {
  h1: (props: any) => (
    <h1 {...props} className='text-4xl font-display text-theme-02 mb-6' />
  ),
  h2: (props: any) => (
    <h2 {...props} className='text-2xl font-body font-extrabold uppercase text-theme-01 mb-4' />
  ),
  p: (props: any) => <p {...props} className='text-lg text-theme-01 mb-4' />,
  ul: (props: any) => (
    <ul
      {...props}
      className='list-disc list-inside space-y-2 text-theme-01 mb-4'
    />
  ),
  li: (props: any) => <li {...props} className='text-lg' />,
  strong: (props: any) => <b {...props} className='font-bold text-theme-05' />,
};

export function MDXComponents({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={components}>
      <div className='prose prose-invert max-w-none'>{children}</div>
    </MDXProvider>
  );
}
