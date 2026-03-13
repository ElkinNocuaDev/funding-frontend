import { useState } from "react";
import api from "../services/api";
import { ethers } from "ethers";

export default function InvestCard(){

  const [wallet,setWallet] = useState(null);
  const [token,setToken] = useState("USDT");

  const [amount,setAmount] = useState("");
  const [reward,setReward] = useState(null);

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [country,setCountry] = useState("");

  const PROJECT_WALLET = import.meta.env.VITE_PROJECT_WALLET;
  const USDT_CONTRACT = import.meta.env.VITE_USDT_CONTRACT;
  const USDC_CONTRACT = import.meta.env.VITE_USDC_CONTRACT;

  const [popup,setPopup] = useState({
    open:false,
    type:"info",
    message:""
  });

  const showPopup = (type,message)=>{
    setPopup({open:true,type,message});
  };

  const closePopup = ()=>{
    setPopup({...popup,open:false});
  };

  const connectWallet = async ()=>{

    if(!window.ethereum){
      showPopup("error","MetaMask not detected. Please install MetaMask.");
      return;
    }

    try{

      const accounts = await window.ethereum.request({
        method:"eth_requestAccounts"
      });

      setWallet(accounts[0]);

    }catch(err){

      showPopup("error","Wallet connection failed.");

    }

  };

  const calculate = async ()=>{

    if(!amount || amount<=0){
      showPopup("warning","Enter a valid amount.");
      return;
    }

    try{

      const res = await api.get(`/rewards/calculate?amount=${amount}`);

      setReward(res.data.swc_reward);

    }catch(err){

      showPopup("error","Could not calculate reward.");

    }

  };

  const buyTokens = async ()=>{

    if(!wallet){
      showPopup("warning","Please connect your wallet first.");
      return;
    }

    if(!amount || amount<=0){
      showPopup("warning","Enter a valid amount.");
      return;
    }

    if(!reward){
      showPopup("warning","Please calculate your reward first.");
      return;
    }

    try{

      showPopup("info","Opening wallet. Confirm the transaction.");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const network = await provider.getNetwork();

      if(network.chainId !== 1n){
        showPopup("warning","Please switch to Ethereum Mainnet.");
        return;
      }

      const projectWallet = PROJECT_WALLET;

      const tokenAddress =
       token === "USDT"
       ? USDT_CONTRACT
       : USDC_CONTRACT;

      const abi = [
        "function transfer(address to, uint amount) returns (bool)"
      ];

      const contract = new ethers.Contract(tokenAddress,abi,signer);

      const decimals = 6;

      const tx = await contract.transfer(
        projectWallet,
        ethers.parseUnits(amount,decimals)
      );

      showPopup("info","Transaction sent. Waiting for blockchain confirmation...");

      await tx.wait();

      await api.post("/investments",{

        name,
        email,
        country,

        wallet_address: wallet,

        crypto_type: token,

        amount_sent: amount,

        expected_swc: reward,

        tx_hash: tx.hash

      });

      setAmount("");
      setReward(null);

      showPopup("success","Investment submitted successfully!");

    }catch(err){

      console.error(err);

      showPopup("error","Transaction failed. Please try again.");

    }

  };

  return(

  <>

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl w-full max-w-md" id="invest">

    <h2 className="text-2xl font-bold mb-6">
      Invest in StartWaves
    </h2>

    {!wallet ? (

      <button
        onClick={connectWallet}
        className="w-full bg-indigo-500 hover:bg-indigo-600 py-3 rounded-lg font-semibold"
      >
        Connect Wallet
      </button>

    ) : (

      <div className="text-green-400 text-sm mb-4">
        Wallet connected: {wallet.slice(0,6)}...{wallet.slice(-4)}
      </div>

    )}

    <div className="mt-4">

      <label className="text-sm text-slate-400 block mb-2">
        Payment Token
      </label>

      <select
        value={token}
        onChange={e=>setToken(e.target.value)}
        className="w-full p-3 bg-slate-800 rounded-lg"
      >
        <option value="USDT">USDT</option>
        <option value="USDC">USDC</option>
      </select>

    </div>

    <input
      type="number"
      placeholder={`${token} amount`}
      value={amount}
      onChange={e=>setAmount(e.target.value)}
      className="mt-4 w-full p-3 bg-slate-800 rounded-lg"
    />

    <button
      onClick={calculate}
      className="mt-4 w-full bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold"
    >
      Calculate Reward
    </button>

    {reward && (

      <div className="bg-slate-800 p-5 mt-6 rounded-lg">

        <p className="text-gray-400 text-sm">
          You receive
        </p>

        <p className="text-3xl font-bold text-green-400">
          {reward} SWC
        </p>

      </div>

    )}

    <input
      type="text"
      placeholder="Name (optional)"
      value={name}
      onChange={e=>setName(e.target.value)}
      className="mt-4 w-full p-3 bg-slate-800 rounded-lg"
    />

    <input
      type="email"
      placeholder="Email (optional)"
      value={email}
      onChange={e=>setEmail(e.target.value)}
      className="mt-3 w-full p-3 bg-slate-800 rounded-lg"
    />

    <input
      type="text"
      placeholder="Country (optional)"
      value={country}
      onChange={e=>setCountry(e.target.value)}
      className="mt-3 w-full p-3 bg-slate-800 rounded-lg"
    />

    <button
      onClick={buyTokens}
      className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold"
    >
      Buy Tokens
    </button>

  </div>

  {popup.open && (

  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

    <div className="w-full max-w-sm sm:max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 text-center shadow-2xl">

      <div className="mb-4 text-4xl">

        {popup.type==="success" && "✅"}
        {popup.type==="error" && "❌"}
        {popup.type==="warning" && "⚠️"}
        {popup.type==="info" && "⏳"}

      </div>

      {popup.type==="info" && (
        <div className="flex justify-center mb-4">
          <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"/>
        </div>
      )}

      <h3 className={`text-lg sm:text-xl font-bold mb-3
        ${popup.type==="success" && "text-green-400"}
        ${popup.type==="error" && "text-red-400"}
        ${popup.type==="warning" && "text-yellow-400"}
        ${popup.type==="info" && "text-blue-400"}
      `}>
        {popup.type.toUpperCase()}
      </h3>

      <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
        {popup.message}
      </p>

      <button
        onClick={closePopup}
        className="w-full bg-indigo-600 hover:bg-indigo-700 transition py-3 rounded-xl font-semibold"
      >
        Close
      </button>

    </div>

  </div>

  )}

  </>

  );

}