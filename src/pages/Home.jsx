import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Progress from "../components/Progress";
import LaunchSection from "../components/LaunchSection";
import Leaderboard from "../components/Leaderboard";
import LiveInvestments from "../components/LiveInvestments";
import EcosystemApps from "../components/EcosystemApps"
import Footer from "../components/Footer";
import HelpWidget from "../components/HelpWidget";

export default function Home() {
  return (
    <div className="min-h-screen">

      <Navbar />

      <main className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <section className="pt-16 pb-10">
          <Hero />
        </section>

        <section className="pb-14">
          <Progress />
        </section>

        <section className="pb-20">
          <LaunchSection />
        </section>

        {/* ECOSYSTEM APPS */}
        <section className="pb-20">
          <EcosystemApps />
        </section>

        {/* LIVE INVESTMENTS */}

        <section className="pb-16">
          <LiveInvestments />
        </section>

        <section className="pb-24">
          <Leaderboard />
        </section>

      </main>

      <HelpWidget/>

      <Footer />

    </div>
  );
}