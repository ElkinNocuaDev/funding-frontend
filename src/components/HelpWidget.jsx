import { useState } from "react"

export default function HelpWidget(){

const [open,setOpen] = useState(false)
const [message,setMessage] = useState(
"Hi! I'm the StartWaves AI assistant. I can help you understand how the investment works."
)

const scrollToInvest = () => {

const el = document.getElementById("invest")

if(el){
el.scrollIntoView({behavior:"smooth"})
}

}

return(

<>

{/* ORB BUTTON */}

<div
onClick={()=>setOpen(!open)}
className="fixed bottom-6 right-6 z-50 cursor-pointer"
>

<div className="relative flex items-center justify-center">

{/* glow */}

<div className="absolute w-16 h-16 rounded-full bg-indigo-600 blur-xl opacity-60 animate-pulse"></div>

{/* orb */}

<div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600
flex items-center justify-center shadow-2xl
hover:scale-110 transition text-lg">

🤖

</div>

</div>

</div>


{/* CHAT WINDOW */}

{open && (

<div className="fixed bottom-24 right-6 w-80 bg-slate-900 border border-slate-800
rounded-2xl shadow-2xl p-5 z-50">

{/* HEADER */}

<div className="flex items-center justify-between mb-3">

<h3 className="font-semibold text-sm">
StartWaves AI
</h3>

<button
onClick={()=>setOpen(false)}
className="text-slate-400 hover:text-white"
>
✕
</button>

</div>

{/* MESSAGE */}

<div className="bg-slate-800 rounded-lg p-3 text-sm text-slate-300 mb-4">

{message}

</div>

{/* OPTIONS */}

<div className="space-y-2 text-sm">

<button
onClick={()=>setMessage(
"StartWaves is building a decentralized NeoBank for Latin America. Early investors support the development of our blockchain financial infrastructure and receive SWC ecosystem tokens."
)}
className="w-full text-left hover:text-indigo-400"
>
How the investment works
</button>


<button
onClick={()=>setMessage(
"SWC is the utility token of the StartWaves ecosystem. It powers payments, lending services, governance voting and platform rewards."
)}
className="w-full text-left hover:text-indigo-400"
>
Token Utility
</button>


<button
onClick={()=>setMessage(
"All investments are recorded on-chain and verified through blockchain transactions. Transparency and security are core principles of the StartWaves infrastructure."
)}
className="w-full text-left hover:text-indigo-400"
>
Security & Transparency
</button>


<button
onClick={scrollToInvest}
className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 mt-2"
>
Invest now
</button>

<a
href="https://discord.gg/fCQd8dtb"
target="_blank"
rel="noopener noreferrer"
className="block w-full text-center border border-indigo-500 text-indigo-400 hover:bg-indigo-600 hover:text-white rounded-lg py-2 transition"
>
Chat with us on Discord
</a>

</div>

</div>

)}

</>

)

}