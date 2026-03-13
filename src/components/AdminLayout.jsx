import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  TrendingUp,
  Users,
  Menu,
  LogOut
} from "lucide-react";

export default function AdminLayout(){

  const [open,setOpen] = useState(true);
  const navigate = useNavigate();

  const logout = ()=>{

    localStorage.removeItem("admin_token");
    navigate("/admin/login");

  };

  return(

  <div className="min-h-screen bg-slate-950 text-white flex">

    {/* Sidebar */}

    <aside className={`bg-slate-900 border-r border-slate-800 transition-all duration-300 ${open ? "w-64":"w-16"}`}>

      {/* Logo */}

      <div className="p-4 flex items-center justify-center border-b border-slate-800">

        <img
          src="https://market.startwaves.co/img/sw_logo_svg_3.svg"
          alt="StartWaves"
          className={`transition-all duration-300 ${
            open ? "w-36" : "w-8"
          }`}
        />

      </div>

      {/* Navigation */}

      <nav className="mt-6 flex flex-col gap-1 px-2">

        <button
        onClick={()=>navigate("/admin")}
        className="flex items-center gap-3 px-3 py-2 rounded hover:bg-slate-800 transition"
        >
          <LayoutDashboard size={18}/>
          {open && "Dashboard"}
        </button>

        <button
        className="flex items-center gap-3 px-3 py-2 rounded hover:bg-slate-800 transition"
        >
          <TrendingUp size={18}/>
          {open && "Investments"}
        </button>

        <button
        className="flex items-center gap-3 px-3 py-2 rounded hover:bg-slate-800 transition"
        >
          <Users size={18}/>
          {open && "Users"}
        </button>

      </nav>

    </aside>

    {/* Main area */}

    <div className="flex-1 flex flex-col">

      {/* Navbar */}

      <header className="h-14 flex items-center justify-between px-6 border-b border-slate-800 bg-slate-900">

        <button
        onClick={()=>setOpen(!open)}
        className="text-slate-400 hover:text-white"
        >
          <Menu size={20}/>
        </button>

        <div className="flex items-center gap-4">

          {/* Admin avatar */}

          <div className="flex items-center gap-2 text-sm text-slate-300">

            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold">
              A
            </div>

            Admin

          </div>

          <button
          onClick={logout}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded text-sm"
          >
            <LogOut size={16}/>
            Logout
          </button>

        </div>

      </header>

      {/* Content */}

      <main className="flex-1 p-10">

        <Outlet/>

      </main>

      {/* Footer */}

      <footer className="border-t border-slate-800 p-4 text-sm text-slate-400 text-center">

        StartWaves Admin • Web3 Funding Platform

      </footer>

    </div>

  </div>

  );

}