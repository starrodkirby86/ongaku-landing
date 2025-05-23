'use client';
import ContentsMenu from './ContentsMenu';
import { guideSections } from './content/config';
import FirstTime from './content/first-time.mdx';
import Slides from './content/slides.mdx';
import Masters from './content/masters.mdx';
import { MDXComponents } from './content/mdx-components';

const contentMap = {
  'first-time': FirstTime,
  'slides': Slides,
  'masters': Masters,
};

const TipsAndTricks = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-5xl lg:text-7xl font-display uppercase text-center text-theme-05'>
        maimai Tips & Tricks
      </h2>
      <article className='container mx-auto px-4 py-8 max-w-4xl'>
        <ContentsMenu />

        <div className='divider' />

        {guideSections.map((section) => {
          const Content = contentMap[section.id as keyof typeof contentMap];
          return (
            <section key={section.id} id={section.id} className='mb-12'>
              <MDXComponents>
                <Content />
              </MDXComponents>
            </section>
          );
        })}
      </article>
    </div>
  );
};

export default TipsAndTricks;
