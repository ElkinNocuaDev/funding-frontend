export default function EcosystemApps(){

const apps = [

{
name:"MarketCap",
description:"Real-time analytics and token market data for the StartWaves ecosystem.",
url:"https://market.startwaves.co",
tag:"Analytics"
},

{
name:"StartPay Wallet",
description:"Secure Web3 wallet for payments, token storage and DeFi interaction.",
url:"https://wallet.startwaves.co",
tag:"Wallet"
},

{
name:"Fluuyo Lending",
description:"Micro-lending platform connecting investors with borrowers globally.",
url:"https://www.fluuyo.com",
tag:"DeFi Lending"
}

]

return(

<section className="py-24">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-6">

StartWaves Ecosystem

</h2>

<p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">

The StartWaves NeoBank ecosystem is powered by decentralized
financial applications enabling analytics, payments and lending
across global markets.

</p>

<div className="grid md:grid-cols-3 gap-8">

{apps.map((app,i)=>(

<a
key={i}
href={app.url}
target="_blank"
rel="noopener noreferrer"
className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500 transition-all hover:shadow-xl"
>

<div className="flex justify-between items-center mb-6">

<span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-indigo-400">

{app.tag}

</span>

<span className="text-emerald-400 text-xs flex items-center gap-1">

<span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"/>
LIVE

</span>

</div>

<h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400">

{app.name}

</h3>

<p className="text-slate-400 text-sm leading-relaxed">

{app.description}

</p>

<div className="mt-6 text-indigo-400 font-medium text-sm">

Open App →

</div>

</a>

))}

</div>

</div>

</section>

)

}