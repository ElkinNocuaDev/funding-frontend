import { useState } from "react";
import api from "../services/api";

export default function InvestmentForm(){

  const [form,setForm] = useState({
    name:"",
    email:"",
    txHash:""
  });

  const submit = async () => {

    const res = await api.post("/investments",form);

    alert("Investment submitted");

  }

  return(

    <section className="text-center py-10">

      <h2 className="text-2xl font-bold">
        Submit your investment
      </h2>

      <input
        placeholder="Name"
        className="border p-2 block mx-auto mt-3"
        onChange={e=>setForm({...form,name:e.target.value})}
      />

      <input
        placeholder="Email"
        className="border p-2 block mx-auto mt-3"
        onChange={e=>setForm({...form,email:e.target.value})}
      />

      <input
        placeholder="Transaction Hash"
        className="border p-2 block mx-auto mt-3"
        onChange={e=>setForm({...form,txHash:e.target.value})}
      />

      <button
        className="bg-black text-white px-6 py-2 mt-4"
        onClick={submit}
      >
        Submit
      </button>

    </section>

  )

}