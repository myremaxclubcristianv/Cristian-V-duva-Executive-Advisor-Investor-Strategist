import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#07090D] text-[#F5F4EF]">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="text-[#C6A15B] underline">
        Return to Home
      </Link>
    </main>
  );
}
