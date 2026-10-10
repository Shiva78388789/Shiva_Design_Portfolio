import type { Metadata } from 'next';
import ToolsView from '@/views/ToolsView';
import '@/styles/tools.css';

export const metadata: Metadata = {
  title: 'Tools I use',
  description: 'The tools Shiva Kumar uses for design, documentation, prototyping and building with AI.',
};

export default function Page() {
  return <ToolsView v={{}} />;
}
