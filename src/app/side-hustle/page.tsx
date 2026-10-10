import type { Metadata } from 'next';
import SideHustleView from '@/views/SideHustleView';
import '@/styles/side-hustle.css';

export const metadata: Metadata = {
  title: 'Side hustle',
  description: 'What Shiva Kumar does outside work: books, gym, automation, gaming, projection mapping and DJing.',
};

export default function Page() {
  return <SideHustleView v={{}} />;
}
