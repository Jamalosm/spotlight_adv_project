export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="text-center">
        <p className="text-yellow-400 text-base sm:text-lg font-semibold mb-2">Loading Spotlight OOH...</p>
        <div className="inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-yellow-400 animate-pulse">
          ⏳
        </div>
      </div>
    </div>
  );
}
