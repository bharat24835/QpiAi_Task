'use client';
import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-red-600">404 – Page Not Found</h1>
      <p className="mb-4 text-gray-700">The page you’re looking for doesn’t exist.</p>
      <Link href="/projects">
        <button className="px-4 py-2 bg-[#4C00FE] text-white rounded-md hover:bg-[#3700c6] transition">
          Go to Projects
        </button>
      </Link>
    </div>
  );
}
