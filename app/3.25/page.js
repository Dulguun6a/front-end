"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import DataJson from "../../utils/data.json";

export default function List() {
  const [query, setQuery] = useState("");
  const [displayed, setDisplayed] = useState(DataJson);
  const inputRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const q = query.trim().toLowerCase();
      if (!q) { setDisplayed(DataJson); return; }
      setDisplayed(
        DataJson.filter((item) =>
          [item.first_name, item.last_name, `${item.first_name} ${item.last_name}`,
           item.email, item.country, item.type, item.phone, item.company, item.job_title, item.address]
            .filter(Boolean).map((f) => String(f).toLowerCase()).some((f) => f.includes(q))
        )
      );
    }, 180);
    return () => clearTimeout(debounceRef.current);
  }, [query]);

  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-800" style={{ fontFamily: 'Arial, sans-serif' }}>

      {/* Back button */}
      <div className="absolute top-6 left-6 z-10">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 border-2 border-red-700 text-sm text-white hover:bg-red-700 hover:border-red-800 transition-all duration-200 font-semibold"
        >
          ← back
        </Link>
      </div>

      <section className="flex flex-1 flex-col items-center pt-20 pb-12 px-6">

        {/* Search bar */}
        <div className="w-full max-w-2xl mb-6">
          <div className="relative">
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">🔍</span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-12 pr-12 py-5 bg-white border-2 border-red-200 rounded-full text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-400 transition-all duration-200 shadow-md"
            />
            {query && (
              <button
                onClick={() => { setQuery(""); inputRef.current?.focus(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition text-base leading-none"
              >
                ✕
              </button>
            )}
          </div>
          <p className="text-xs text-red-600 font-semibold text-right mt-2 pr-2">
            {displayed.length} user{displayed.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* 5-column grid */}
        {displayed.length === 0 ? (
          <p className="text-center text-gray-400 py-16 text-sm">
            No users found for &ldquo;{query}&rdquo;
          </p>
        ) : (
          <div className="w-full grid grid-cols-5 gap-4">
            {displayed.map((item) => (
              <div
                key={item.id}
                className="flex flex-col bg-white border-2 border-red-200 rounded-3xl overflow-hidden hover:border-red-400 hover:shadow-lg transition-all duration-200 shadow-md"
              >
                <div className="w-full h-32 bg-red-50 flex items-center justify-center overflow-hidden border-b-2 border-red-100">
                  {item.img ? (
                    <img
                      src={item.img}
                      alt={`${item.first_name} ${item.last_name}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-red-100 border-2 border-red-200 flex items-center justify-center text-red-600 font-bold text-xl">
                      {item.first_name?.[0]}{item.last_name?.[0]}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1.5 p-4 flex-1">
                  <div className="flex items-start justify-between gap-1">
                    <p className="text-sm font-bold text-gray-900 leading-tight truncate">
                      {item.first_name} {item.last_name}
                    </p>
                    <span className="text-[10px] px-2 py-0.5 bg-red-50 border border-red-200 rounded-full text-red-500 font-semibold uppercase tracking-wide whitespace-nowrap flex-shrink-0">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">{item.email}</p>
                  <p className="text-xs text-red-600 font-semibold">{item.country}</p>
                  {item.phone     && <p className="text-xs text-gray-500 truncate">📞 {item.phone}</p>}
                  {item.company   && <p className="text-xs text-gray-500 truncate">🏢 {item.company}</p>}
                  {item.job_title && <p className="text-xs text-gray-500 truncate">💼 {item.job_title}</p>}
                  {item.address   && <p className="text-xs text-gray-400 truncate">📍 {item.address}</p>}
                </div>

                {(item.age || item.point !== undefined) && (
                  <div className="border-t-2 border-red-100 px-4 py-3 grid grid-cols-2 gap-2 text-center bg-red-50">
                    {item.age && (
                      <div>
                        <p className="text-[10px] text-red-400 uppercase tracking-wider font-semibold">Age</p>
                        <p className="text-sm font-bold text-gray-800">{item.age}</p>
                      </div>
                    )}
                    {item.point !== undefined && (
                      <div>
                        <p className="text-[10px] text-red-400 uppercase tracking-wider font-semibold">Points</p>
                        <p className="text-sm font-bold text-red-600">{item.point}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}