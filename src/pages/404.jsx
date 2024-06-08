"use client";

import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center">
      <img src="/images/sad.png" alt="404" height={200} width={200} />
      <div className="mt-8 text-center">
        <p className="text-3xl font-bold mt-4">
          Esta página ha cambiado de lugar.
        </p>
        <p className="text-2xl mt-4 text-slate-600">
          Un momento por favor...
        </p>
      </div>
    </div>
  );
}
