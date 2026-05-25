"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-xl text-center rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0f0f0f]/95 p-6 sm:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.65)]">
        <p className="text-yellow-400 uppercase tracking-[0.25em] sm:tracking-[0.35em] text-xs sm:text-sm mb-4">Something went wrong</p>
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Unexpected error occurred.</h1>
        <p className="text-gray-400 mb-8 leading-7 sm:leading-8">
          Refresh the page or return to the homepage. If the issue persists, our team will investigate.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-3 font-semibold text-black transition hover:scale-105"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-8 py-3 font-semibold text-white transition hover:border-yellow-400/30 hover:text-yellow-400"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
