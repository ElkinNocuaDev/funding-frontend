export default function GovernanceModal({open,onClose}){

if(!open) return null

return(

<div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-xl w-full">

<h2 className="text-xl font-bold mb-4">
Decentralized Governance
</h2>

<p className="text-slate-400 text-sm leading-relaxed">

StartWaves is evolving toward a decentralized governance
model where SWC token holders participate in strategic
decisions of the ecosystem.

Community governance will allow token holders to vote on
key proposals including protocol upgrades, treasury
allocation, financial product launches and ecosystem
partnerships.

This model ensures transparency, community ownership and
long-term alignment with the decentralized financial
infrastructure powering the StartWaves NeoBank.

</p>

<button
onClick={onClose}
className="mt-6 bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg"
>
Close
</button>

</div>

</div>

)

}