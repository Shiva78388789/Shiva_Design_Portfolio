import type { Metadata } from 'next';
import DthPage from '@/pages-src/DthPage';
import '@/styles/dth.css';

export const metadata: Metadata = {
  title: 'DTH Price Simplification',
  description: 'Case study: simplifying DTH pack creation and pricing for Airtel.',
};

export default function Page() {
  return <DthPage />;
}
