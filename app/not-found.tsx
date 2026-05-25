import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-xl text-center rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0f0f0f]/95 p-6 sm:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.65)]">
        <p className="text-yellow-400 uppercase tracking-[0.25em] sm:tracking-[0.35em] text-xs sm:text-sm mb-4">404</p>
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Page not found.</h1>
        <p className="text-gray-400 mb-8 leading-7 sm:leading-8">
          The page you are looking for does not exist or has moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-3 font-semibold text-black transition hover:scale-105"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
