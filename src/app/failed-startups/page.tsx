import type { Metadata } from 'next';
import FailedStartupsView from '@/views/FailedStartupsView';
import '@/styles/failed-startups.css';

export const metadata: Metadata = {
  title: 'Failed startups',
  description: 'Startups Shiva Kumar tried and learned from: SFED, Neon Central, Content Creation and Big fat Bakery.',
};

export default function Page() {
  return <FailedStartupsView v={{}} />;
}
