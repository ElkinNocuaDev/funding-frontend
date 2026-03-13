import { useState } from "react";
import api from "../services/api";

export default function InvestmentCalculator(){

  const [amount,setAmount] = useState("");
  const [reward,setReward] = useState(null);

  const calculate = async () => {

    const res = await api.get(`/rewards/calculate?amount=${amount}`);

    setReward(res.data.swc_reward);

  }

  return(

    <section className="text-center py-10">

      <h2 className="text-2xl font-bold">
        Calculate your reward
      </h2>

      <input
        className="border p-2 mt-4"
        placeholder="USDT amount"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
      />

      <button
        className="ml-3 bg-black text-white px-4 py-2"
        onClick={calculate}
      >
        Calculate
      </button>

      {reward && (
        <p className="mt-4 text-xl">
          You receive <b>{reward} SWC</b>
        </p>
      )}

    </section>

  )

}