import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { initParticlesEngine } from "@tsparticles/react";

export default function AdminLogin(){

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");

  const [init,setInit] = useState(false);

  useEffect(()=>{

    const token = localStorage.getItem("admin_token");

    if(token){
      navigate("/admin");
    }

  },[]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const login = async ()=>{

    setError("");
    setLoading(true);

    try{

      const res = await api.post("/admin/auth/login",{
        email,
        password
      });

      localStorage.setItem(
        "admin_token",
        res.data.token
      );

      navigate("/admin");

    }catch(err){

      setError(
        err.response?.data?.error || "Login failed"
      );

    }finally{

      setLoading(false);

    }

  };

  return(

  <div className="min-h-screen grid grid-cols-2 bg-slate-950 text-white">

    {/* LEFT SIDE - BLOCKCHAIN ANIMATION */}

    <div className="relative h-full flex items-center justify-center overflow-hidden col-span-1">

      {init && (
  <Particles
      id="tsparticles"
      options={{
        background:{ color:"#020617" },
        particles:{
          number:{ value:60 },
          color:{ value:"#6366f1" },
          links:{
            enable:true,
            distance:150,
            color:"#6366f1",
            opacity:0.4
          },
          move:{
            enable:true,
            speed:1
          },
          size:{ value:2 }
        }
      }}
      className="absolute inset-0"
    />
  )}

      <div className="relative z-10 text-center px-12">

        <img
          src="https://market.startwaves.co/img/sw_logo_svg_3.svg"
          alt="StartWaves"
          className="w-40 mx-auto mb-8"
        />

        <h1 className="text-4xl font-bold mb-4">
          Web3 Funding DeFi App
        </h1>

        <p className="text-slate-400 max-w-md mx-auto">
          Secure DeFi investment infrastructure for
          blockchain funding, treasury management
          and SWC token distribution.
        </p>

      </div>

    </div>


    {/* RIGHT SIDE - LOGIN FORM */}

    <div className="relative z-20 flex items-center justify-center">

      <form
      onSubmit={(e)=>{
        e.preventDefault();
        login();
      }}
      className="w-[380px] bg-slate-900 border border-slate-800 rounded-xl p-10 shadow-2xl"
      >

      <h2 className="text-2xl font-bold mb-6">
        Admin Login
      </h2>

      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-400 p-3 rounded mb-4 text-sm">
          {error}
        </div>
      )}

      <label className="text-sm text-slate-400">
        Email
      </label>

      <input
      type="email"
      value={email}
      onChange={e=>setEmail(e.target.value)}
      className="w-full mt-1 mb-4 p-3 bg-slate-800 rounded text-white outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <label className="text-sm text-slate-400">
        Password
      </label>

      <input
      type="password"
      value={password}
      onChange={e=>setPassword(e.target.value)}
      className="w-full mt-1 mb-6 p-3 bg-slate-800 rounded text-white outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
      type="submit"
      disabled={loading}
      className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded font-semibold transition disabled:opacity-50"
      >
      {loading ? "Logging in..." : "Login"}
      </button>

      <p className="text-xs text-slate-500 mt-6 text-center">
        StartWaves Funding Infrastructure
      </p>

      </form>

    </div>

  </div>

  );

}