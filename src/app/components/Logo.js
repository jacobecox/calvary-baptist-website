import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image 
        src="/cbsv-logo.jpeg"
        alt="Calvary Logo" 
        width={100} 
        height={100}
        className="object-contain"
      />
    </div>
  );
} 