import lvlupImage from "../assets/lvlup-google-pitch.png";

export default function RewardsModal({open,onClose}){

if(!open) return null

return(

<div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6">

<div className="relative bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl max-w-xl w-full p-6">

{/* close button */}

<button
onClick={onClose}
className="absolute top-4 right-4 text-slate-400 hover:text-white"
>
✕
</button>

{/* title */}

<h2 className="text-lg font-semibold mb-4">
StartWaves — Finalist
</h2>

{/* image */}

<div className="w-full flex justify-center">

<img
  src={lvlupImage}
  alt="Google LvlUp Startup Pitch Finalist"
  className="w-full max-w-md rounded-lg object-contain"
/>

</div>

{/* description */}

<p className="text-slate-400 text-sm mt-4 leading-relaxed">

StartWaves was selected as a finalist in the Google LvlUp Startup Pitch
Competition among hundreds of startups. This recognition validates our
vision of building a decentralized NeoBank infrastructure for Latin
America powered by blockchain and DeFi technology.

</p>

</div>

</div>

)

}