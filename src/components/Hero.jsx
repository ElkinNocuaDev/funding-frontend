import { useState } from "react";

export default function Hero(){

const [wallet,setWallet] = useState(null)

async function connectWallet(){

 if(!window.ethereum){
  alert("MetaMask required")
  return
 }

 const accounts = await window.ethereum.request({
  method:"eth_requestAccounts"
 })

 setWallet(accounts[0])
}

const scrollToInvest = () => {

const el = document.getElementById("invest")

if(el){
el.scrollIntoView({behavior:"smooth"})
}

}

return(

<section className="text-center pt-20">

<h1 className="text-4xl md:text-6xl font-bold leading-tight">

Own the Future  
<br/>
of Digital Banking

</h1>

<p className="mt-6 text-slate-400 max-w-xl mx-auto">

Start Waves is building a decentralized NeoBank
for Latin America where investors own the
platform and earn governance tokens.

</p>

<div className="flex justify-center gap-4 mt-8 flex-wrap">

{!wallet && (

<button
onClick={connectWallet}
className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl font-semibold"
>

Connect Wallet

</button>

)}

<button 
    onClick={scrollToInvest}
    className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl font-semibold">

Invest Now

</button>

</div>

</section>

)

}