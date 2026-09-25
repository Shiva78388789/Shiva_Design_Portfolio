import type { Metadata } from 'next';
import EngageXPage from '@/pages-src/EngageXPage';
import '@/styles/engage-x.css';

export const metadata: Metadata = {
  title: 'Engage X',
  description: 'Case study: Engage X, a campaign management platform for Airtel Xtelify.',
};

export default function Page() {
  return <EngageXPage />;
}
