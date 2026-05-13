import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex gap-6 px-6 py-4 bg-[#1e1e2e] border-b border-[#2a2a3d] text-sm text-gray-400">
      <Link href="/" className="hover:text-white transition">Home</Link>
      <Link href="/about" className="hover:text-white transition">About</Link>
      <Link href="/contact" className="hover:text-white transition">Contact</Link>
      <Link href="/weather" className="hover:text-white transition">Weather</Link>
      <Link href="/3.25" className="hover:text-white transition">Grid</Link>
    </nav>
  );
}