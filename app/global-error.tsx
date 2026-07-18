'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-h-screen bg-[#050605] text-[#F6F8F2] font-sans px-6">
        <div className="max-w-md w-full text-center flex flex-col items-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#E5FE40] mb-3">
            System Error
          </span>
          <h2 className="text-2xl font-bold tracking-tight mb-3">Something went wrong</h2>
          <p className="text-sm text-[#A9B0A5] mb-6 leading-relaxed">
            An unexpected runtime error occurred on this page. You can attempt to reload the app interface.
          </p>
          <button
            onClick={() => reset()}
            className="h-10 px-6 rounded-full bg-[#E5FE40] text-[#050605] font-semibold text-xs tracking-tight hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-[0_4px_16px_rgba(229,254,64,0.15)]"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
