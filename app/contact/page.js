import Link from "next/link";
import { Mail, Instagram, Phone, ArrowLeft } from "lucide-react";

export default function Contact() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-red-50 via-white to-blue-50 text-gray-800">

      {/* Background blobs */}
      <div className="absolute -top-24 -left-24 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-red-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-blue-200/40 blur-3xl" />

      {/* Back button */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full border border-red-300 bg-white/80 px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-red-600 shadow-md backdrop-blur-md transition hover:scale-105 hover:bg-red-600 hover:text-white"
        >
          <ArrowLeft size={16} className="transition-transform" />
          Back
        </Link>
      </div>

      {/* Section */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Card */}
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-3xl border border-white/40 bg-white/70 p-5 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">

          {/* Header */}
          <div className="mb-8 sm:mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900">
              Contact Me
            </h1>

            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-500">
              Feel free to reach out through any platform below.
            </p>
          </div>

          {/* Items */}
          <div className="space-y-4 sm:space-y-5">

            {/* Email */}
            <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-red-100 bg-white p-4 sm:p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                <Mail size={22} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-red-500">
                  Email
                </p>
                <a
                  href="mailto:nest20271003@nhs.edu.mn"
                  className="block truncate text-sm sm:text-base font-semibold text-gray-800 hover:text-red-600"
                >
                  nest20271003@nhs.edu.mn
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-blue-100 bg-white p-4 sm:p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Instagram size={22} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-500">
                  Instagram
                </p>
                <a
                  href="https://instagram.com/fluffy_duk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block truncate text-sm sm:text-base font-semibold text-gray-800 hover:text-blue-600"
                >
                  @fluffy_duk
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-red-100 bg-white p-4 sm:p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                <Phone size={22} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-red-500">
                  Phone
                </p>
                <a
                  href="tel:95880626"
                  className="block text-sm sm:text-base font-semibold text-gray-800 hover:text-red-600"
                >
                  95880626
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}