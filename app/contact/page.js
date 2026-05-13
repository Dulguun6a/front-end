import Link from "next/link";

export default function Contact() {
  return (
    <main
      className="flex flex-col min-h-screen bg-white text-gray-800"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="absolute top-6 left-6 z-10">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 border-2 border-red-700 text-sm text-white hover:bg-red-700 hover:border-red-800 transition-all duration-200 font-semibold"
        >
          ← back
        </Link>
      </div>

      <section className="flex flex-1 flex-col items-center justify-center text-center gap-6 px-4 sm:px-6 pt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Contact Me
        </h1>

        <div className="w-full max-w-md space-y-3 mt-6 px-4">
          {/* Email */}
          <div className="flex items-center justify-between px-6 py-4 bg-white border-2 border-red-200 rounded-full shadow-md">
            <div className="text-left flex-1">
              <p className="text-xs text-red-600 font-semibold uppercase tracking-wide">
                Email
              </p>
              <p className="text-sm font-bold text-gray-800 truncate">
                nest20271003@nhs.edu.mn
              </p>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex items-center justify-between px-6 py-4 bg-white border-2 border-blue-200 rounded-full shadow-md">
            <div className="text-left flex-1">
              <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
                Instagram
              </p>
              <p className="text-sm font-bold text-gray-800">
                @fluffy_duk
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between px-6 py-4 bg-white border-2 border-red-200 rounded-full shadow-md">
            <div className="text-left flex-1">
              <p className="text-xs text-red-600 font-semibold uppercase tracking-wide">
                Phone
              </p>
              <p className="text-sm font-bold text-gray-800">
                95880626
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}