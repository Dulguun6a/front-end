"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import DataJson from "../../utils/data.json";

export default function List() {
  const [query, setQuery] = useState("");
  const [displayed, setDisplayed] = useState(DataJson);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const debounceRef = useRef<any>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const q = query.trim().toLowerCase();

      if (!q) {
        setDisplayed(DataJson);
        return;
      }

      setDisplayed(
        DataJson.filter((item) =>
          [
            item.first_name,
            item.last_name,
            `${item.first_name} ${item.last_name}`,
            item.email,
            item.country,
            item.type,
            item.phone,
            item.company,
            item.job_title,
            item.address,
          ]
            .filter(Boolean)
            .map((f) => String(f).toLowerCase())
            .some((f) => f.includes(q))
        )
      );
    }, 180);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 text-gray-800 overflow-x-hidden">
      
      {/* Background blobs (responsive scaling) */}
      <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-red-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-blue-200/40 blur-3xl" />

      {/* Back button */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full border border-red-300 bg-white/80 px-3 py-1.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-red-600 shadow-md backdrop-blur-md transition hover:scale-105 hover:bg-red-600 hover:text-white"
        >
          ← Back
        </Link>
      </div>

      {/* Container */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16">

        {/* Search */}
        <div className="mb-6 w-full max-w-xl sm:max-w-2xl">
          <div className="relative">
            <span className="pointer-events-none absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search users..."
              className="w-full rounded-full border-2 border-red-200 bg-white py-3 sm:py-4 pl-11 sm:pl-12 pr-10 sm:pr-12 text-sm sm:text-base shadow-md transition focus:border-red-400 focus:outline-none"
            />

            {query && (
              <button
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
              >
                ✕
              </button>
            )}
          </div>

          <p className="mt-2 text-right text-xs font-semibold text-red-600">
            {displayed.length} user{displayed.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Grid */}
        {displayed.length === 0 ? (
          <div className="py-16 text-center text-sm text-gray-400">
            No users found for “{query}”
          </div>
        ) : (
          <div
            className="
              grid w-full gap-4 sm:gap-5
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              2xl:grid-cols-5
            "
          >
            {displayed.map((item) => (
              <div
                key={item.id}
                className="flex flex-col overflow-hidden rounded-2xl border-2 border-red-200 bg-white shadow-md transition hover:-translate-y-1 hover:border-red-400 hover:shadow-xl"
              >
                {/* Image */}
                <div className="flex h-28 sm:h-32 items-center justify-center bg-red-50 overflow-hidden">
                  {item.img ? (
                    <img
                      src={item.img}
                      alt={`${item.first_name} ${item.last_name}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-red-200 bg-red-100 text-base sm:text-xl font-bold text-red-600">
                      {item.first_name?.[0]}
                      {item.last_name?.[0]}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-1.5 p-3 sm:p-4">
                  <div className="flex items-start justify-between gap-2">
                    <p className="truncate text-sm font-bold">
                      {item.first_name} {item.last_name}
                    </p>

                    <span className="shrink-0 rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[10px] font-semibold uppercase text-red-500">
                      {item.type}
                    </span>
                  </div>

                  <p className="truncate text-xs text-gray-500">{item.email}</p>
                  <p className="text-xs font-semibold text-red-600">
                    {item.country}
                  </p>

                  {item.phone && (
                    <p className="truncate text-xs text-gray-500">📞 {item.phone}</p>
                  )}
                  {item.company && (
                    <p className="truncate text-xs text-gray-500">🏢 {item.company}</p>
                  )}
                  {item.job_title && (
                    <p className="truncate text-xs text-gray-500">💼 {item.job_title}</p>
                  )}
                  {item.address && (
                    <p className="truncate text-xs text-gray-400">📍 {item.address}</p>
                  )}
                </div>

                {/* Footer */}
                {(item.age || item.point !== undefined) && (
                  <div className="grid grid-cols-2 gap-2 border-t bg-red-50 px-3 py-3 text-center sm:px-4">
                    {item.age && (
                      <div>
                        <p className="text-[10px] font-semibold uppercase text-red-400">
                          Age
                        </p>
                        <p className="text-sm font-bold">{item.age}</p>
                      </div>
                    )}

                    {item.point !== undefined && (
                      <div>
                        <p className="text-[10px] font-semibold uppercase text-red-400">
                          Points
                        </p>
                        <p className="text-sm font-bold text-red-600">
                          {item.point}
                        </p>
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