// components/Navbar.tsx
'use client';

import { useRouter } from 'next/navigation';
import Logo from './Logo';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="w-full flex items-center justify-center py-4 px-6 shadow-md bg-calvary-blue">
      {/* Navigation Container */}
      <div className="hidden md:flex items-center gap-6">
        <Logo />
        <button 
          onClick={() => router.push('/')}
          className="text-white hover:text-gray-200 transition-colors duration-200 bg-transparent border-none outline-none mx-2"
        >
          Home
        </button>
        <button 
          onClick={() => router.push('/visit')}
          className="text-white hover:text-gray-200 transition-colors duration-200 bg-transparent border-none outline-none mx-2"
        >
          Visit Us
        </button>
        <button 
          onClick={() => router.push('/how-to-be-saved')}
          className="text-white hover:text-gray-200 transition-colors duration-200 bg-transparent border-none outline-none mx-2"
        >
          How to Be Saved
        </button>
        <button 
          onClick={() => router.push('/watch')}
          className="text-white hover:text-gray-200 transition-colors duration-200 bg-transparent border-none outline-none mx-2"
        >
          Watch Services
        </button>
        <button 
          onClick={() => router.push('/beliefs')}
          className="text-white hover:text-gray-200 transition-colors duration-200 bg-transparent border-none outline-none mx-2"
        >
          What We Believe
        </button>
        <button 
          onClick={() => router.push('/contact')}
          className="text-white hover:text-gray-200 transition-colors duration-200 bg-transparent border-none outline-none mx-2"
        >
          Contact
        </button>
        <button 
          onClick={() => router.push('/more')}
          className="text-white hover:text-gray-200 transition-colors duration-200 bg-transparent border-none outline-none mx-2"
        >
          More
        </button>
      </div>
    </nav>
  );
}
