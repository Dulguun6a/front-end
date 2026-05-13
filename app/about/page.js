import Link from "next/link";

export default function About() {
  return (
    <main className="relative flex min-h-screen flex-col bg-white text-gray-800 overflow-x-hidden">

      {/* Background subtle improvement (optional but nicer on big screens) */}
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-red-100 blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-60" />

      {/* Back button */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-red-600 border-2 border-red-700 px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm text-white font-semibold shadow-md transition hover:bg-red-700 hover:border-red-800"
        >
          ← Back
        </Link>
      </div>

      {/* Content wrapper */}
      <section className="relative z-10 flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12">

        <div className="w-full max-w-2xl text-center">

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            About Me
          </h1>

          {/* Card */}
          <div className="mt-8 sm:mt-10 w-full rounded-3xl border-2 border-red-200 bg-white p-5 sm:p-8 shadow-lg transition hover:shadow-xl">

            {/* Intro */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Сайн байна уу? Намайг Дөлгөөн гэдэг, би 17 настай ба 11 дүгээр ангид сурдаг.
              Одоогоор Nest Education IT School-д суралцаж байгаа, миний дуртай хичээл бол front-end.
            </p>

            {/* Divider */}
            <div className="my-5 border-t-2 border-blue-200" />

            {/* Extra info */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Би долоо хоног болгон UB Quiz Night-д оролцдог.
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
              <span className="rounded-full bg-gray-50 px-3 py-1 border">
                <span className="text-blue-600 font-semibold">age</span> · 17
              </span>

              <span className="rounded-full bg-gray-50 px-3 py-1 border">
                <span className="text-red-600 font-semibold">grade</span> · 11
              </span>

              <span className="rounded-full bg-gray-50 px-3 py-1 border">
                <span className="text-blue-600 font-semibold">school</span> · Nest Education
              </span>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}