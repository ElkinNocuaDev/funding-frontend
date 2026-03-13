import { useEffect, useState } from "react";
import api from "../services/api";

export default function Leaderboard(){

  const [leaders,setLeaders] = useState([]);
  const [loading,setLoading] = useState(true);

  const format = (n) =>
    new Intl.NumberFormat("en-US").format(n);

  useEffect(()=>{

    api.get("/public/leaderboard")
      .then(res=>{
        setLeaders(res.data);
      })
      .catch(err=>{
        console.error("Leaderboard error",err);
      })
      .finally(()=>{
        setLoading(false);
      });

  },[])

  return(

    <section className="py-20">

      <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-8">

        {/* header */}

        <div className="text-center mb-8">

          <h2 className="text-3xl font-bold tracking-tight">
            Top Investors
          </h2>

          <p className="text-slate-400 text-sm mt-2">
            Leading contributors in the current funding round
          </p>

        </div>

        {/* loading */}

        {loading && (
          <p className="text-center text-slate-400">
            Loading leaderboard...
          </p>
        )}

        {/* empty */}

        {!loading && leaders.length === 0 && (
          <p className="text-center text-slate-400">
            No investors yet
          </p>
        )}

        {/* leaderboard */}

        <div className="space-y-3">

          {leaders.map((l,i)=>{

            const rankColors = [
              "text-yellow-400",
              "text-slate-300",
              "text-amber-600"
            ];

            const invested = Number(l.invested);

            return(

              <div
                key={i}
                className="flex items-center justify-between bg-slate-800/60 border border-slate-700 rounded-xl px-5 py-4 hover:border-emerald-400/40 transition-all duration-300"
              >

                {/* left */}

                <div className="flex items-center gap-4">

                  <span className={`text-sm font-bold w-6 ${rankColors[i] || "text-slate-400"}`}>
                    #{i+1}
                  </span>

                  <div className="flex flex-col">

                    <span className="text-slate-200 font-medium">
                      {l.name}
                    </span>

                    <span className="text-xs text-slate-400">
                      {l.country}
                    </span>

                  </div>

                </div>

                {/* amount */}

                <span className="font-mono font-semibold text-emerald-400 text-lg tracking-wide">
                  ${format(invested)}
                </span>

                <div className="text-xs text-indigo-400">
                  {format(Number(l.swc_reward))} SWC
                </div>

              </div>

            )

          })}

        </div>

      </div>

    </section>

  )

}