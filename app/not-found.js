export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-800 font-sans text-center px-6" style={{ fontFamily: 'Arial, sans-serif' }}>
      <p className="text-xs text-red-600 tracking-widest uppercase mb-4 font-semibold">error.404</p>
      <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-900 mb-3">404</h1>
      <p className="text-sm sm:text-base text-gray-600 mb-8">Gants page olchij chdku.</p>
      <a href="/" className="px-6 py-3 bg-red-600 border-2 border-red-700 hover:bg-red-700 hover:border-red-800 text-sm text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
        ← Go Home
      </a>
    </div>
  );
}