import type { Metadata } from 'next';
import AkhbarPage from '@/pages-src/AkhbarPage';
import '@/styles/akhbar.css';

export const metadata: Metadata = {
  title: 'Akhbar Bash',
  description: 'How I designed and shipped Akhbar Bash, a 16-bit paper-round game for phone browsers, in one afternoon with Claude as my build partner.',
};

export default function Page() {
  return <AkhbarPage />;
}
