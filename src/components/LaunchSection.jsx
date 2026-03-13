import InvestCard from "./InvestCard";

export default function LaunchSection(){

  return(

    <section className="w-full py-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>

          <span className="text-indigo-400 font-semibold tracking-widest text-sm">
            EARLY INVESTOR ACCESS
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">

            Become an Early Owner  
            of the <span className="text-indigo-400">StartWaves NeoBank</span>

          </h2>

          <p className="text-gray-400 leading-relaxed text-lg mt-6 max-w-xl">

            StartWaves is building a decentralized NeoBank for Latin America and Central America.
            Powered by blockchain technology, the ecosystem enables digital wallets, borderless payments and micro-lending services designed for emerging markets.
            By investing today, you secure early ownership in the financial infrastructure that will power the next generation of digital banking.

          </p>

          {/* TRUST ELEMENTS */}

          <div className="grid grid-cols-3 gap-6 mt-10 max-w-lg">

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">

              <p className="text-2xl font-bold text-indigo-400">
                Web3
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Blockchain Powered
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">

              <p className="text-2xl font-bold text-green-400">
                Global
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Investor Network
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">

              <p className="text-2xl font-bold text-blue-400">
                DeFi
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Smart Contracts
              </p>

            </div>

          </div>


          {/* TOKEN UTILITY */}

          <div className="mt-14">

            <h3 className="font-semibold mb-6 text-xl">
              SWC Token Utility
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="flex items-center gap-3">
                <span className="text-green-400">✔</span>
                Governance voting in the StartWaves ecosystem
              </li>

              <li className="flex items-center gap-3">
                <span className="text-green-400">✔</span>
                Early access to startup investment opportunities
              </li>

              <li className="flex items-center gap-3">
                <span className="text-green-400">✔</span>
                Platform rewards and staking incentives
              </li>

            </ul>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="lg:sticky lg:top-32">

          <InvestCard/>

        </div>

      </div>

    </section>

  )

}