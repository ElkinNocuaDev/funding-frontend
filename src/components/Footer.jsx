import { useState } from "react";
import PrivacyModal from "./PrivacyModal";
import TermsModal from "./TermsModal";
import TokenUtilityModal from "./TokenUtilityModal";
import GovernanceModal from "./GovernanceModal";

export default function Footer(){

const [showPrivacy,setShowPrivacy] = useState(false)
const [showTerms,setShowTerms] = useState(false)

const [showToken,setShowToken] = useState(false)
const [showGovernance,setShowGovernance] = useState(false)

const scrollToInvest = () => {

  const el = document.getElementById("invest")

  if(el){
    el.scrollIntoView({
      behavior:"smooth",
      block:"start"
    })
  }

}

return(

<>

<footer className="border-t border-slate-800 mt-24">

<div className="max-w-7xl mx-auto px-6 py-16">

<div className="grid md:grid-cols-4 gap-10">

{/* BRAND */}

<div>

<h3 className="text-xl font-bold mb-4">
StartWaves
</h3>

<p className="text-slate-400 text-sm leading-relaxed">
A decentralized NeoBank for Latin America and Central America,
powered by blockchain infrastructure, digital wallets
and DeFi financial services.
</p>

</div>

{/* ECOSYSTEM */}

<div>

<h4 className="font-semibold mb-4 text-sm tracking-wide">
Ecosystem
</h4>

<ul className="space-y-3 text-slate-400 text-sm">

<li>
<a href="https://market.startwaves.co" target="_blank" className="hover:text-indigo-400 transition">
MarketCap
</a>
</li>

<li>
<a href="https://wallet.startwaves.co" target="_blank" className="hover:text-indigo-400 transition">
StartPay Wallet
</a>
</li>

<li>
<a href="https://www.fluuyo.com" target="_blank" className="hover:text-indigo-400 transition">
Fluuyo Lending
</a>
</li>

</ul>

</div>

{/* PLATFORM */}

<div>

<h4 className="font-semibold mb-4 text-sm tracking-wide">
Platform
</h4>

<ul className="space-y-3 text-slate-400 text-sm">

<li
onClick={scrollToInvest}
className="hover:text-indigo-400 cursor-pointer"
>
Invest
</li>

<li
onClick={()=>setShowToken(true)}
className="hover:text-indigo-400 cursor-pointer"
>
Token Utility
</li>

<li
onClick={()=>setShowGovernance(true)}
className="hover:text-indigo-400 cursor-pointer"
>
Governance
</li>

</ul>

</div>

{/* COMMUNITY */}

<div>

<h4 className="font-semibold mb-4 text-sm tracking-wide">
Community
</h4>

<ul className="space-y-3 text-slate-400 text-sm">

<li>
<a href="https://www.youtube.com/@StartWavesAcademy" target="_blank" className="hover:text-indigo-400 transition">
Academy
</a>
</li>

<li>
<a href="https://discord.gg/fCQd8dtb" target="_blank" className="hover:text-indigo-400 transition">
Discord
</a>
</li>

<li>
<a href="https://www.startwaves.co/contact.html" target="_blank" className="hover:text-indigo-400 transition">
Contact
</a>
</li>

</ul>

</div>

</div>


{/* BOTTOM */}

<div className="border-t border-slate-800 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">

<p>
© {new Date().getFullYear()} Start Waves. All rights reserved.
</p>

<div className="flex gap-6 mt-4 md:mt-0">

<span
onClick={()=>setShowPrivacy(true)}
className="hover:text-indigo-400 cursor-pointer"
>
Privacy
</span>

<span
onClick={()=>setShowTerms(true)}
className="hover:text-indigo-400 cursor-pointer"
>
Terms
</span>

<TokenUtilityModal
open={showToken}
onClose={()=>setShowToken(false)}
/>

<GovernanceModal
open={showGovernance}
onClose={()=>setShowGovernance(false)}
/>

</div>

</div>

</div>

</footer>


{/* MODALS */}

<PrivacyModal
open={showPrivacy}
onClose={()=>setShowPrivacy(false)}
/>

<TermsModal
open={showTerms}
onClose={()=>setShowTerms(false)}
/>

</>

)

}