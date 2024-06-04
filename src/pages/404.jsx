'use client';

import { useEffect } from "react";

export default function NotFound() {

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center">
      <div className="mt-16 text-center">
        <h1 className="text-4xl font-bold lg:tracking-tight">
          404
        </h1>
        <p className="text-2xl mt-4 text-slate-600">
          Esta página ha cambiado de lugar. Redirigiéndose...
        </p>
      </div>
    </div>
  );
}