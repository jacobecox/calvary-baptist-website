// components/Navbar.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 shadow-md bg-white">
 

      {/* Menu */}     {/* Logo */}
        <Image src="/cbsv-logo.svg" alt="Calvary Logo" width={200} height={200} />
      <ul className="hidden md:flex space-x-6 text-gray-800 text-sm font-medium">
        <li><button href="/">Home</button></li>
        <li><Link href="/visit">Visit Us</Link></li>
        <li><Link href="/how-to-be-saved">How to Be Saved</Link></li>
        <li><Link href="/watch">Watch Services</Link></li>
        <li><Link href="/beliefs">What We Believe</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/more">More</Link></li>
      </ul>
    </nav>
  );
}
