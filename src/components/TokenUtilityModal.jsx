export default function TokenUtilityModal({open,onClose}){

if(!open) return null

return(

<div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-xl w-full">

<h2 className="text-xl font-bold mb-4">
SWC Token Utility
</h2>

<p className="text-slate-400 text-sm leading-relaxed">

The SWC token powers the StartWaves financial ecosystem.

Token holders gain access to platform utilities including
transaction fee discounts, governance participation and
early access to decentralized financial services such as
lending, payments and digital banking infrastructure.

SWC is designed as the economic layer of the StartWaves
NeoBank, enabling community participation and alignment
between investors, users and developers.

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