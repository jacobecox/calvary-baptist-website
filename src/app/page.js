/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="font-sans">
      {/* Main Content Section */}
      <section className="flex flex-col min-h-[calc(100vh-80px)]">
        {/* Simi Valley Image */}
        <div className="w-full relative h-[400px]">
          <Image
            src="/sim-valley.JPG"
            alt="Simi Valley"
            fill
            className="object-cover object-[center_60%]"
            priority
          />
        </div>

        {/* WHO WE ARE Section */}
        <div className="w-full bg-white text-[#4EC3E0] flex items-center justify-center pb-4 pt-10 px-8">
          <h2 className="text-5xl font-extrabold text-center w-3/4">WHO WE ARE:</h2>
        </div>

        {/* Hero Section */}
        <div className="w-full flex items-center justify-center p-8 bg-white">
          <div className="w-3/4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Calvary Baptist Church is an independent, Bible-believing, Baptist church located in beautiful Simi Valley, California.
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Here, we invite you to come and experience biblical fellowship, spiritual growth, and preaching straight from God's Word.
            </p>
            <button 
              onClick={() => router.push('/beliefs')}
              className="bg-black text-white py-4 px-8 rounded-full font-semibold text-xl hover:text-[#4EC3E0] transition-colors duration-200"
            >
              WHAT WE BELIEVE
            </button>
          </div>
        </div>

        {/* BRING YOUR FAMILY Section */}
        <div className="w-full bg-[#4EC3E0] text-white flex items-center justify-center py-24 px-8">
          <div className="w-3/4 text-center">
            <h3 className="text-5xl font-extrabold mb-4">BRING YOUR FAMILY</h3>
            <p className="text-4xl mb-6">
              Our friendly environment at Calvary welcomes you and your family to worship with us this Sunday!
            </p>
            <button 
              onClick={() => router.push('/visit')}
              className="bg-black text-white py-4 px-8 rounded-full font-semibold text-xl hover:text-[#4EC3E0] transition-colors duration-200"
            >
              VISIT US
            </button>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full bg-black text-white py-24 px-8">
          <div className="w-3/4 mx-auto">
            <h3 className="text-5xl font-extrabold text-center mb-12">CONTACT US</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lg mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-white focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-white focus:outline-none"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-lg mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-white focus:outline-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#4EC3E0] text-white py-3 px-8 rounded-full font-semibold text-lg hover:bg-[#3db1d0] transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
