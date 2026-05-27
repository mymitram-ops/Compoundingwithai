import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhatYoullLearn } from "@/components/sections/WhatYoullLearn";
import { About } from "@/components/sections/About";
import { Community } from "@/components/sections/Community";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhatYoullLearn />
        <About />
        <Community />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
