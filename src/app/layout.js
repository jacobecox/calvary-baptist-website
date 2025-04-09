import { Montserrat } from 'next/font/google';
import Navbar from './components/NavBar';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = { title: 'Calvary Baptist Church' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Navbar />
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}