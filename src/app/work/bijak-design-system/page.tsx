import type { Metadata } from 'next';
import BijakPage from '@/pages-src/BijakPage';
import '@/styles/bijak.css';

export const metadata: Metadata = {
  title: 'Bijak Web Design System',
  description: 'Case study: building the Bijak web design system.',
};

export default function Page() {
  return <BijakPage />;
}
