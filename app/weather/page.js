import Link from "next/link";

export default function WeatherApp() {
  return (
    <main className="h-screen w-full bg-[#0f0f1a] text-white flex flex-col font-mono overflow-hidden relative">
      <Link href="/" className="absolute top-4 left-4 z-30 flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2a2a3d] border-2 border-[#5555aa] text-sm text-[#b0b0cc] hover:bg-[#3a3a4d] hover:border-[#7777cc] hover:text-white transition-all duration-200 font-semibold">
        ← back
      </Link>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-20 bg-[#14142a] border-r border-[#2a2a3d] flex flex-col items-center py-8 gap-8 text-sm text-[#5555aa]">
          {["☁", "⊡", "⊞", "⚙"].map((icon, i) => (
            <button key={i} className="flex flex-col items-center gap-2 hover:text-white transition text-3xl">{icon}</button>
          ))}
        </aside>

        <section className="flex-1 p-8 flex flex-col gap-6 overflow-auto">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">Madrid</h1>
              <p className="text-sm text-[#6e6e9a] mt-2">Chance of rain: 0%</p>
            </div>
            <div className="text-7xl">☀️</div>
          </div>

          <div className="text-7xl font-bold tracking-tight">31°</div>

          <div className="bg-[#14142a] border border-[#2a2a3d] rounded-xl p-5 flex justify-between text-center text-sm text-[#b0b0cc] gap-3">
            {[["6 AM","☁️","25°"],["9 AM","🌤️","28°"],["12 PM","☀️","33°"],["3 PM","☀️","34°"],["6 PM","☀️","32°"],["9 PM","☁️","30°"]].map(([t,e,d],i)=>(
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-[#5555aa]">{t}</span>
                <span className="text-2xl">{e}</span>
                <span className="font-semibold text-white">{d}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[["Real Feel","30°"],["Wind","0.2 km/h"],["UV Index","3"]].map(([l,v],i)=>(
              <div key={i} className="bg-[#14142a] border border-[#2a2a3d] p-5 rounded-xl">
                <p className="text-xs text-[#5555aa] mb-2">{l}</p>
                <p className="text-2xl font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </section>

        <aside className="w-64 bg-[#14142a] border-l border-[#2a2a3d] p-6 flex flex-col gap-2 text-sm overflow-auto">
          <p className="text-[#5555aa] tracking-widest uppercase text-xs mb-4 font-semibold">7-Day Forecast</p>
          {[["Today","☀️","36/22"],["Tue","☀️","37/21"],["Wed","☀️","37/21"],["Thu","☁️","37/21"],["Fri","☁️","37/21"],["Sat","🌧️","37/21"],["Sun","⚡","37/21"]].map(([d,e,t],i)=>(
            <div key={i} className="flex justify-between items-center py-3 px-2 border-b border-[#1e1e2e] last:border-0 text-[#b0b0cc]">
              <span className="w-14 text-[#6e6e9a]">{d}</span>
              <span className="text-lg">{e}</span>
              <span className="font-medium text-white">{t}</span>
            </div>
          ))}
        </aside>
      </div>
    </main>
  );
}