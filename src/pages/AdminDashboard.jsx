import { useEffect,useState } from "react";
import api from "../services/api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function AdminDashboard(){

  const [data,setData] = useState(null);

  const loadDashboard = async ()=>{
    try{
      const res = await api.get("/admin/investments");
      setData(res.data);
    }catch(err){
      console.error("Dashboard error:",err);
    }
  };

  useEffect(()=>{

    let mounted = true;

    const load = async ()=>{
      try{
        const res = await api.get("/admin/investments");
        if(mounted){
          setData(res.data);
        }
      }catch(e){
        console.error(e);
      }
    };

    load();

    const interval = setInterval(load,15000);

    return ()=>{
      mounted=false;
      clearInterval(interval);
    };

  },[]);

  const verify = async(id)=>{
    await api.post(`/admin/investments/${id}/verify`);
    loadDashboard();
  };

  const reject = async(id)=>{
    await api.post(`/admin/investments/${id}/reject`);
    loadDashboard();
  };

  if(!data){
    return <div className="text-white">Loading dashboard...</div>
  }

  const target = 500000;

  const progress = Math.min(
    (data.total_raised_usdt / target) * 100,
    100
  );

  const chartData = (data.investments || []).map((inv,i)=>({
    name:`#${i+1}`,
    amount:inv.amount_sent
  }));

  const pendingTx = data.investments.filter(
    inv => inv.status==="pending" || inv.status==="detected"
  ).length;

  return(

  <div className="text-white space-y-10">

  {/* HEADER */}

  <div className="flex justify-between items-center">

    <h1 className="text-3xl font-bold">
      Admin Dashboard
    </h1>

    <div className="text-sm text-slate-400">

      Funding Target: {target.toLocaleString()} USDT

      <span className="ml-4 text-yellow-400">
        {pendingTx} TX Pending
      </span>

    </div>

  </div>

  {/* FUNDING PROGRESS */}

  <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">

    <div className="flex justify-between mb-2">

      <span className="text-slate-400">
        Funding Progress
      </span>

      <span className="text-green-400 font-semibold">
        {data.total_raised_usdt} USDT
      </span>

    </div>

    <div className="w-full bg-slate-800 rounded h-3 overflow-hidden">

      <div
      className="bg-green-500 h-3 transition-all duration-700"
      style={{width:`${progress}%`}}
      />

    </div>

  </div>

  {/* STATS */}

  <div className="grid grid-cols-4 gap-6">

    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
      <p className="text-slate-400 text-sm">Total Raised</p>
      <p className="text-2xl font-bold text-green-400">
        {data.total_raised_usdt} USDT
      </p>
    </div>

    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
      <p className="text-slate-400 text-sm">Investors</p>
      <p className="text-2xl font-bold">
        {data.total_investors}
      </p>
    </div>

    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
      <p className="text-slate-400 text-sm">Verified</p>
      <p className="text-2xl font-bold">
        {data.verified_investments}
      </p>
    </div>

    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
      <p className="text-slate-400 text-sm">SWC Pending</p>
      <p className="text-2xl font-bold text-blue-400">
        {data.swc_pending_distribution}
      </p>
    </div>

  </div>

  {/* CHART */}

  <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">

    <h2 className="mb-6 font-semibold">
      Investment Flow
    </h2>

    <ResponsiveContainer width="100%" height={300}>

      <LineChart data={chartData}>

        <XAxis dataKey="name"/>
        <YAxis/>

        <Tooltip/>

        <Line
        type="monotone"
        dataKey="amount"
        stroke="#22c55e"
        strokeWidth={3}
        dot={false}
        />

      </LineChart>

    </ResponsiveContainer>

  </div>

  {/* LIVE INVESTMENTS */}

  <div className="grid grid-cols-3 gap-6">

  <div className="col-span-2 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">

  <table className="w-full">

  <thead className="bg-slate-800 text-sm text-slate-300">

  <tr>
    <th className="p-3 text-left">Investor</th>
    <th className="p-3 text-left">Amount</th>
    <th className="p-3 text-left">Token</th>
    <th className="p-3 text-left">TX</th>
    <th className="p-3 text-left">Status</th>
    <th className="p-3 text-left">Actions</th>
  </tr>

  </thead>

  <tbody>

  {data.investments.map(inv=>(

  <tr key={inv.id} className="border-t border-slate-800">

    <td className="p-3">
      {inv.name || "Anonymous"}
    </td>

    <td className="p-3">
      {inv.amount_sent}
    </td>

    <td className="p-3">
      {inv.crypto_type}
    </td>

    <td className="p-3 text-xs">

    {inv.tx_hash ? (

    <a
    href={`https://etherscan.io/tx/${inv.tx_hash}`}
    target="_blank"
    rel="noreferrer"
    className="text-blue-400 hover:underline"
    >
    {inv.tx_hash.slice(0,10)}...
    </a>

    ):(
    <span className="text-slate-500">—</span>
    )}

    </td>

    <td className="p-3">

      {inv.status==="pending" &&
      <span className="text-yellow-400">Pending</span>}

      {inv.status==="detected" &&
      <span className="text-blue-400">TX Detected</span>}

      {inv.status==="verified" &&
      <span className="text-green-400">Verified</span>}

      {inv.status==="swc_sent" &&
      <span className="text-purple-400">SWC Sent</span>}

      {inv.status==="rejected" &&
      <span className="text-red-400">Rejected</span>}

    </td>

    <td className="p-3 flex gap-2">

    {(inv.status==="pending" || inv.status==="detected") && (

    <>
    <button
    onClick={()=>verify(inv.id)}
    className="bg-green-600 px-3 py-1 rounded"
    >
    Verify
    </button>

    <button
    onClick={()=>reject(inv.id)}
    className="bg-red-600 px-3 py-1 rounded"
    >
    Reject
    </button>
    </>

    )}

    </td>

  </tr>

  ))}

  </tbody>

  </table>

  </div>

  {/* LIVE FEED */}

  <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">

  <h2 className="font-semibold mb-4">
  Recent Investments
  </h2>

  <div className="space-y-3 text-sm">

  {data.investments.slice(0,5).map(inv=>(

  <div
  key={inv.id}
  className="flex justify-between border-b border-slate-800 pb-2"
  >

  <span className="text-slate-300">
  {inv.name || "Anonymous"}
  </span>

  <span className="text-green-400">
  {inv.amount_sent} USDT
  </span>

  </div>

  ))}

  </div>

  </div>

  </div>

  </div>

  );

}