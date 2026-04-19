import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Page — ERP",
  description: "Приклад сторінки за маршрутом /test",
};

export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] font-sans text-white gap-6 p-8">
      {/* Картка */}
      <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-[1.5rem] py-12 px-16 text-center w-full max-w-[520px] shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
        {/* Іконка */}
        <div className="text-[3.5rem] mb-4 drop-shadow-[0_0_12px_#a78bfa]">
          🧭
        </div>

        <h1 className="text-[2.2rem] font-bold mb-2 bg-gradient-to-r from-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
          Сторінка /test
        </h1>

        <p className="text-white/60 leading-[1.7] mb-8">
          Ця сторінка живе за адресою{" "}
          <code className="bg-[#a78bfa]/15 border border-[#a78bfa]/30 rounded-md px-2 py-0.5 text-[#c4b5fd]">
            /test
          </code>
          . Вона з'явилася завдяки файлу{" "}
          <code className="bg-[#60a5fa]/15 border border-[#60a5fa]/30 rounded-md px-2 py-0.5 text-[#93c5fd]">
            app/test/page.tsx
          </code>
          .
        </p>

        {/* Схема роутингу */}
        <div className="bg-black/30 rounded-2xl py-5 px-6 text-left text-[0.85rem] font-mono text-white/70 mb-8 leading-[1.9]">
          <span className="text-[#a78bfa]">app/</span>
          <br />
          <span className="text-[#6ee7b7]">├── page.tsx</span>
          <span className="text-white/35"> → /</span>
          <br />
          <span className="text-[#60a5fa]">├── test/page.tsx</span>
          <span className="text-[#fcd34d]"> → /test  ← ви тут</span>
          <br />
          <span className="text-white/40">└── blog/[slug]/page.tsx → /blog/:slug</span>
        </div>

        <Link
          href="/"
          className="inline-block py-3 px-8 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white font-semibold text-[0.95rem] shadow-[0_4px_20px_rgba(124,58,237,0.4)] transition-opacity hover:opacity-85"
        >
          ← На головну
        </Link>
      </div>
    </div>
  );
}
