export default function WalletInfo(){

  const wallet = "0xYourTreasuryWallet";

  return(

    <section className="text-center py-10">

      <h2 className="text-2xl font-bold">
        Send USDT
      </h2>

      <p className="mt-4">
        Network: Polygon / Ethereum
      </p>

      <div className="bg-gray-100 p-4 mt-4 inline-block">

        {wallet}

      </div>

    </section>

  )

}