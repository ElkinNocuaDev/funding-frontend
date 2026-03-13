import { useEffect, useState } from "react";
import api from "../services/api";

export default function LiveInvestments(){

  const [items,setItems] = useState([]);

  const fetchData = () => {
    api.get("/public/live-investments")
      .then(res => setItems(res.data))
      .catch(()=>{});
  }

  useEffect(()=>{

    fetchData();

    const interval = setInterval(fetchData,10000);

    return ()=>clearInterval(interval);

  },[])

  if(!items.length) return null;

  return(

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-6 shadow-xl">

      {/* header */}

      <div className="flex items-center justify-between mb-5">

        <h3 className="text-lg font-semibold tracking-tight">
          Live Investments
        </h3>

        <span className="text-xs text-emerald-400 flex items-center gap-1">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"/>
          LIVE
        </span>

      </div>

      {/* list */}

      <div className="space-y-3 max-h-64 overflow-y-auto pr-1">

        {items.map((tx,i)=>{

          const wallet = tx.wallet_address || "0x000000000000";

          const shortWallet =
            wallet.slice(0,6) + "..." + wallet.slice(-4);

          return(

            <div
              key={i}
              className="flex justify-between items-center bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm hover:border-emerald-400/40 transition-all duration-300 animate-investFade"
            >

              {/* wallet */}

              <div className="flex items-center gap-3">

                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.8)]"/>

                <span className="text-slate-300 font-mono text-xs tracking-wide">
                  {shortWallet}
                </span>

              </div>

              {/* amount */}

              <span className="font-semibold text-emerald-400">
                ${tx.amount}
              </span>

            </div>

          )

        })}

      </div>

    </div>

  )

}