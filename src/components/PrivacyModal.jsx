export default function PrivacyModal({open,onClose}){

if(!open) return null

return(

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

<div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto">

{/* HEADER */}

<div className="flex items-center justify-between px-8 py-6 border-b border-slate-800">

<h2 className="text-xl font-bold">
Privacy Policy
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

Start Waves is committed to protecting your privacy and
ensuring transparency in how data is handled across the
platform.

</p>

<div>

<h3 className="text-white font-semibold mb-2">
Information We Collect
</h3>

<p>

Start Waves does not require traditional personal data
to access the platform. The primary identifier used
within the ecosystem is your blockchain wallet address.

</p>

</div>


<div>

<h3 className="text-white font-semibold mb-2">
Blockchain Transparency
</h3>

<p>

Transactions executed through blockchain networks are
public by design. Wallet addresses and transaction
data may be visible on public block explorers.

Start Waves does not control or modify this information.

</p>

</div>


<div>

<h3 className="text-white font-semibold mb-2">
Platform Security
</h3>

<p>

Start Waves utilizes secure infrastructure and smart
contract technology to protect user interactions
within the platform.

We do not store private keys or access user wallets.

</p>

</div>


<div>

<h3 className="text-white font-semibold mb-2">
Cookies & Analytics
</h3>

<p>

The platform may use minimal analytics tools to
improve user experience and platform performance.

No sensitive financial information is stored
by Start Waves.

</p>

</div>


<div>

<h3 className="text-white font-semibold mb-2">
Policy Updates
</h3>

<p>

This Privacy Policy may be updated periodically to
reflect improvements to the platform or regulatory
requirements.

</p>

</div>

</div>


{/* FOOTER */}

<div className="px-8 py-5 border-t border-slate-800 flex justify-between items-center">

<p className="text-xs text-slate-500">
Start Waves — Banking for All.
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