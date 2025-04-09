/* eslint-disable react/no-unescaped-entities */


export default function HomePage() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-white">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Calvary Baptist Church is an independent, Bible-believing, Baptist church located in beautiful Simi Valley, California.
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-6">
          Here, we invite you to come and experience biblical fellowship, spiritual growth, and preaching straight from God's Word.
        </p>
        <button className="bg-black text-white py-3 px-6 rounded-full font-semibold text-lg">
          WHAT WE BELIEVE
        </button>
      </section>

      {/* WHO WE ARE Section */}
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-[#4EC3E0] text-white flex items-center justify-center py-20">
          <h2 className="text-5xl font-extrabold text-center">WHO WE ARE:</h2>
        </div>
        <div className="w-full md:w-1/2 bg-white p-10 flex items-center justify-center">
          <div>
            <h3 className="text-3xl font-bold text-[#4EC3E0] mb-4">BRING YOUR FAMILY</h3>
            <p className="text-gray-700 text-lg max-w-md">
              Our friendly environment at Calvary welcomes you and your family to worship with us this Sunday!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
