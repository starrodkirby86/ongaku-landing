export interface GuideSection {
  id: string;
  title: string;
  color: {
    bg: string;
    text: string;
  };
}

export const guideSections: GuideSection[] = [
  {
    id: 'first-time',
    title: 'First Time Player Guide',
    color: {
      bg: 'bg-sky-800',
      text: 'text-sky-200'
    }
  },
  {
    id: 'slides',
    title: 'Mastering Slides',
    color: {
      bg: 'bg-rose-800',
      text: 'text-rose-200'
    }
  },
  {
    id: 'masters',
    title: 'Advancing to Masters',
    color: {
      bg: 'bg-fuchsia-800',
      text: 'text-fuchsia-200'
    }
  }
]; 