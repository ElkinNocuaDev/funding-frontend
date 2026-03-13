import { useEffect, useState } from "react";
import api from "../services/api";

export default function Progress() {

  const [stats,setStats] = useState(null);

  const format = (n) =>
    new Intl.NumberFormat("en-US").format(n);

  const fetchStats = () => {
    api.get("/public/stats")
      .then(res => setStats(res.data))
      .catch(()=>{});
  };

  useEffect(()=>{

    fetchStats();

    const interval = setInterval(fetchStats,15000);

    return () => clearInterval(interval);

  },[])

  if(!stats){

    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 animate-pulse">

        <div className="h-5 bg-slate-800 rounded w-1/2 mb-6"/>

        <div className="h-3 bg-slate-800 rounded w-full mb-8"/>

        <div className="grid grid-cols-3 gap-4">
          <div className="h-12 bg-slate-800 rounded-xl"/>
          <div className="h-12 bg-slate-800 rounded-xl"/>
          <div className="h-12 bg-slate-800 rounded-xl"/>
        </div>

      </div>
    )
  }

  const progress = Math.min(
    (stats.raised_usdt / stats.funding_goal) * 100,
    100
  );

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-8 shadow-xl">

      {/* HEADER */}

      <div>

        <p className="text-sm text-slate-400 mb-2">
          Funding Progress
        </p>

        <div className="flex justify-between items-end">

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            ${format(stats.raised_usdt)}
          </h2>

          <p className="text-slate-400 text-sm">
            of ${format(stats.funding_goal)}
          </p>

        </div>

      </div>

      {/* PROGRESS BAR */}

      <div className="relative w-full bg-slate-800 rounded-full h-4 overflow-hidden">

        {/* wave background */}
        <div className="absolute inset-0 opacity-40 animate-wave bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400"/>

        {/* progress */}
        <div
          className="relative h-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-1500 ease-out shadow-lg"
          style={{ width:`${progress}%` }}
        />

      </div>

      {/* percentage */}

      <div className="text-right text-sm text-emerald-400 font-semibold">
        {progress.toFixed(1)}% funded
      </div>

      {/* STATS */}

      <div className="grid grid-cols-3 gap-4">

        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-center">

          <p className="text-2xl font-bold">
            {format(stats.investors)}
          </p>

          <p className="text-xs text-slate-400 mt-1">
            Investors
          </p>

        </div>

        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-center">

          <p className="text-2xl font-bold">
            {format(stats.swc_sold)}
          </p>

          <p className="text-xs text-slate-400 mt-1">
            SWC Sold
          </p>

        </div>

        <div className="bg-slate-800/60 border border-emerald-500/40 rounded-xl p-4 text-center">

          <p className="text-2xl font-bold text-emerald-400">
            +20%
          </p>

          <p className="text-xs text-slate-400 mt-1">
            Early Bonus
          </p>

        </div>

      </div>

    </div>

  );

}