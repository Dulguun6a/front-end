import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-800" style={{ fontFamily: 'Arial, sans-serif' }}>
      <section className="flex flex-1 flex-col items-center justify-center text-center gap-6 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Welcome
        </h1>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 flex-wrap">
          {[
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact"},
            { href: "/weather", label: "Weather"},
            { href: "/3.25", label: "Grid"},
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 border-2 border-red-700 text-sm text-white hover:from-red-700 hover:to-red-600 hover:border-red-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}