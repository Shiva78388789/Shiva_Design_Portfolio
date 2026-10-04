import type { Metadata } from 'next';
import JugnuPage from '@/pages-src/JugnuPage';
import '@/styles/jugnu.css';

export const metadata: Metadata = {
  title: 'Jugnu',
  description: 'Case study: Jugnu.',
};

export default function Page() {
  return <JugnuPage />;
}
