export default function TermsModal({open,onClose}){

if(!open) return null

return(

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

<div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto">


{/* HEADER */}

<div className="flex items-center justify-between px-8 py-6 border-b border-slate-800">

<h2 className="text-xl font-bold">
Terms of Service
</h2>

<button
onClick={onClose}
className="text-slate-400 hover:text-white text-xl"
>
✕
</button>

</div>


{/* CONTENT */}

<div className="px-8 py-6 space-y-6 text-sm text-slate-400 leading-relaxed">

<p>

By accessing or using the StartWaves platform you agree
to comply with these Terms of Service.

StartWaves provides blockchain-based financial
infrastructure designed for digital banking,
decentralized finance and tokenized ecosystems.

</p>


<div>

<h3 className="text-white font-semibold mb-2">
Use of the Platform
</h3>

<p>

Users may interact with StartWaves services through
compatible digital wallets. You are responsible for
maintaining the security of your wallet and private
keys.

StartWaves never stores or controls user private keys.

</p>

</div>


<div>

<h3 className="text-white font-semibold mb-2">
Blockchain Transactions
</h3>

<p>

Transactions executed through blockchain networks
are irreversible and publicly verifiable.

StartWaves does not control blockchain networks
and cannot reverse or modify transactions once
they are confirmed.

</p>

</div>


<div>

<h3 className="text-white font-semibold mb-2">
Digital Assets & Token Utility
</h3>

<p>

Tokens within the StartWaves ecosystem may provide
utility within the platform including governance,
payments or access to financial services.

Digital assets may experience volatility and
users assume all associated risks.

</p>

</div>


<div>

<h3 className="text-white font-semibold mb-2">
Risk Disclosure
</h3>

<p>

Decentralized finance and blockchain technology
carry inherent risks including smart contract
vulnerabilities, market volatility and regulatory
uncertainty.

Users should only interact with digital assets
after conducting their own research.

</p>

</div>


<div>

<h3 className="text-white font-semibold mb-2">
Limitation of Liability
</h3>

<p>

StartWaves provides technology infrastructure
for decentralized financial services and does
not guarantee financial returns or investment
performance.

Use of the platform is at your own risk.

</p>

</div>


<div>

<h3 className="text-white font-semibold mb-2">
Updates to Terms
</h3>

<p>

StartWaves may update these Terms periodically
to reflect platform improvements, ecosystem
changes or regulatory requirements.

Continued use of the platform constitutes
acceptance of updated terms.

</p>

</div>

</div>


{/* FOOTER */}

<div className="px-8 py-5 border-t border-slate-800 flex justify-between items-center">

<p className="text-xs text-slate-500">
StartWaves — Banking for All.
</p>

<button
onClick={onClose}
className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-2 rounded-lg font-semibold text-sm"
>
Close
</button>

</div>


</div>

</div>

)

}