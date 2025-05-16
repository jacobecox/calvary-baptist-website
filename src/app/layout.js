import { Montserrat } from 'next/font/google';
import Navbar from './components/NavBar';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Calvary Baptist Church',
  icons: {
    icon: '/cbsv-logo.jpeg',
    shortcut: '/cbsv-logo.jpeg',
    apple: '/cbsv-logo.jpeg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}