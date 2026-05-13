import Link from "next/link";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-800" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="absolute top-6 left-6 z-10">
        <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 border-2 border-red-700 text-sm text-white hover:bg-red-700 hover:border-red-800 transition-all duration-200 font-semibold">
          ← back
        </Link>
      </div>

      <section className="flex flex-1 flex-col items-center justify-center text-center gap-6 px-4 sm:px-6 pt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          About Me
        </h1>

        <div className="w-full max-w-md space-y-4 mt-6 px-4">
          <div className="bg-white border-2 border-red-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg hover:shadow-xl transition-shadow">
            <div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Сайн байна уу? Намайг Дөлгөөн гэдэг, би 17 настай ба 11 дүгээр ангид сурдаг.
                Одоогоор Nest Education IT School-д суралцаж байгаа, миний дуртай хичээл бол front-end.
              </p>
            </div>

            <div className="border-t-2 border-blue-200 pt-4">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Би долоо хоног болгон UB Quiz Night-д оролцдог.
              </p>
            </div>

            <div className="border-t-2 border-blue-200 pt-4 flex gap-4 flex-wrap text-xs sm:text-sm text-gray-600 justify-center">
              <span><span className="text-blue-600 font-semibold">age</span> · 17</span>
              <span><span className="text-red-600 font-semibold">grade</span> · 11</span>
              <span><span className="text-blue-600 font-semibold">school</span> · Nest Education</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}