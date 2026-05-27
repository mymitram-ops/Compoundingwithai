import { motion } from "framer-motion";
import { ArrowRight, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

export function Hero() {
  const scrollToLearn = () => {
    document.querySelector("#learn")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCommunity = () => {
    document.querySelector("#community")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-600/8 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-emerald-600/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-900/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(14,165,233,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Top badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex justify-center mb-6"
        >
          <span className="section-label">
            <Star className="w-3.5 h-3.5 fill-sky-400" />
            Free Community — No Credit Card Required
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-balance mb-6"
        >
          Achieve{" "}
          <span className="gradient-text">Financial Independence</span>
          <br />
          Using the Power of{" "}
          <span className="relative inline-block">
            <span className="gradient-text">AI</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 8"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 6 Q50 0 100 4 Q150 8 200 2"
                stroke="url(#underline-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0ea5e9" />
                  <stop offset="1" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 text-balance"
        >
          Join a free community of ambitious professionals using AI-powered investing
          strategies to reach FIRE faster. Real strategies. Real results. Zero fluff.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Button size="lg" onClick={scrollToCommunity} className="w-full sm:w-auto">
            Join the FREE Community
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToLearn} className="w-full sm:w-auto">
            See What You'll Learn
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.75}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm"
        >
          {["100% Free", "No Spam", "Instant Access", "Cancel Anytime"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={scrollToLearn}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
