import type { Metadata } from 'next';
import ToffeePage from '@/pages-src/ToffeePage';
import '@/styles/toffee.css';

export const metadata: Metadata = {
  title: 'Toffee Seller App',
  description: 'Case study: redesigning the Toffee Insurance seller app.',
};

export default function Page() {
  return <ToffeePage />;
}
