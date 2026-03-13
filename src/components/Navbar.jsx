import { useState } from "react";
import RewardsModal from "./RewardsModal";

export default function Navbar(){

  const [open,setOpen] = useState(false);
  const [showRewards,setShowRewards] = useState(false);

  return(

    <>
    <nav className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://www.startwaves.co/img/sw_logo_letras_svg_3.svg"
            alt="StartWaves"
            className="h-9 w-auto"
          />
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8 text-slate-400">

          <a href="https://github.com/ElkinNocuaDev/startwavesweb/releases/tag/v3.6-pitch" target="_blank" className="hover:text-white transition">
            Whitepaper
          </a>

          <span
            onClick={()=>setShowRewards(true)}
            className="hover:text-white transition cursor-pointer"
            >
            Rewards
          </span>

        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">

          <a
            href="#invest"
            className="ml-6 px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-medium hover:opacity-90 transition"
          >
            Invest Now
          </a>

        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 text-2xl"
          onClick={()=>setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile menu */}
      {open && (

        <div className="md:hidden border-t border-slate-800/60 bg-slate-950/95">

          <div className="flex flex-col px-6 py-6 space-y-4 text-slate-300">

            <a href="https://github.com/ElkinNocuaDev/startwavesweb/releases/tag/v3.6-pitch" onClick={()=>setOpen(false)}>
              Whitepaper
            </a>

            <a
              href="#invest"
              onClick={()=>setOpen(false)}
              className="mt-4 text-center px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-medium"
            >
              Invest Now
            </a>

          </div>

        </div>

      )}

    </nav>

    <RewardsModal
      open={showRewards}
      onClose={()=>setShowRewards(false)}
    />
    </>

  )

}