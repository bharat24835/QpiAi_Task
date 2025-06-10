import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <Link
        href="/projects"
        className="rounded-full border border-blue-600 transition-colors duration-200 flex items-center justify-center hover:bg-blue-50 hover:text-blue-800 text-blue-600 font-medium text-base h-12 px-6"
      >
        Projects
      </Link>
    </div>
  );
}
