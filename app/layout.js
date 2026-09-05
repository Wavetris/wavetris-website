import './globals.css';

export const metadata = {
  metadataBase: new URL('https://wavetris.com'),
  title: {
    default: 'WAVETRIS | Electronic Product Design & Engineering',
    template: '%s | WAVETRIS',
  },
  description:
    'WAVETRIS provides electronic product design and engineering services across PCB design, embedded systems, FPGA, power electronics, validation and test automation.',
  keywords: [
    'electronic product design',
    'PCB design',
    'embedded systems',
    'FPGA design',
    'power electronics',
    'hardware engineering',
    'test automation',
    'electronics design house',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'WAVETRIS | Electronic Product Design & Engineering',
    description:
      'From architecture to prototype — practical electronic product engineering for demanding applications.',
    url: 'https://wavetris.com',
    siteName: 'WAVETRIS',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
