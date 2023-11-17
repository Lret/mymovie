import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Movie me Application',
  description: 'We choice your own movie when robots can do it better?',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='h-screen w-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#23486F] via-[#192532] to-[#10131C] text-white'>
        <header className='flex justify-center p-4'>
          <h1 className='col-start-2 text-lg'>Movie me</h1>
        </header>
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}
