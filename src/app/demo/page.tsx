import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Demo | Sophie.ai',
  description: 'Experience RealTalk.ai - the future of language learning integration.',
};

/**
 * DemoPage component that integrates the RealTalk.ai project via a seamless iframe.
 * This provides a robust integration while hiding the external URL from the browser's address bar.
 */
export default function DemoPage() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-background overflow-hidden">
      <iframe
        src="https://realtalk-three.vercel.app/"
        className="w-full h-full border-none"
        title="Project Demo"
        allow="camera; microphone; clipboard-write; autoplay; display-capture;"
        loading="lazy"
      />
    </div>
  );
}
