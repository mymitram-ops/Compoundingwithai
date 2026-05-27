import { motion } from "framer-motion";
import {
  Building2,
  Brain,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const milestones = [
  {
    icon: Building2,
    label: "Real Estate Investor",
    detail: "Built a portfolio of rental properties generating passive income",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Brain,
    label: "AI Enthusiast",
    detail: "Merged machine learning with investing to outperform the market",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    icon: Rocket,
    label: "FIRE Achiever",
    detail: "Reached financial independence years ahead of the traditional timeline",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
];

const values = [
  "Transparent, actionable strategies — not theory",
  "AI tools tested on real portfolios",
  "Community-first, no paid courses or upsells",
  "FIRE mindset for ambitious professionals",
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-sky-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="section-label mb-5 inline-flex">
              <Brain className="w-3.5 h-3.5" />
              The Founder
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 tracking-tight leading-tight">
              From Engineer to{" "}
              <span className="gradient-text">Freedom Seeker</span>
            </h2>

            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                Like most professionals, I spent years trading time for money —
                grinding through 60-hour weeks, watching my savings barely keep
                pace with inflation while the market did its thing without me.
              </p>
              <p>
                Everything changed when I discovered the intersection of{" "}
                <span className="text-sky-400 font-medium">AI tools</span> and{" "}
                <span className="text-emerald-400 font-medium">disciplined investing</span>.
                As a real estate investor, I'd already learned the power of
                compounding. But applying AI to my stock research, options
                analysis, and portfolio management was a completely different level.
              </p>
              <p>
                I started Compounding with AI to share everything I've learned —
                not to sell courses, but to build a community of like-minded
                professionals who want to achieve FIRE on their own terms.
              </p>
              <p className="text-white font-medium">
                This community is the resource I wish I had when I started.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 space-y-3">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{value}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                document.querySelector("#community")?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-10 btn-primary inline-flex"
            >
              Join the Community
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Right: Visual cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="space-y-4"
          >
            {/* Avatar card */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-5">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-emerald-500 flex items-center justify-center text-3xl font-black text-white animate-glow">
                      AI
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center">
                      <span className="text-[8px] text-white font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">The Founder</h3>
                    <p className="text-slate-400 text-sm mt-0.5">
                      Real Estate Investor · AI Enthusiast
                    </p>
                    <p className="text-slate-400 text-sm">FIRE Achiever · Community Builder</p>
                    <div className="flex gap-2 mt-3">
                      <span className="px-2.5 py-1 bg-sky-500/10 text-sky-400 text-xs font-semibold rounded-full border border-sky-500/20">
                        Investing
                      </span>
                      <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20">
                        AI
                      </span>
                      <span className="px-2.5 py-1 bg-violet-500/10 text-violet-400 text-xs font-semibold rounded-full border border-violet-500/20">
                        FIRE
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Milestones */}
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                >
                  <Card hover className="p-5">
                    <CardContent className="p-0 flex items-start gap-4">
                      <div className={`w-11 h-11 rounded-xl ${m.bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${m.color}`} />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{m.label}</p>
                        <p className="text-slate-400 text-sm mt-0.5">{m.detail}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}

            {/* Quote card */}
            <Card className="p-6 border-sky-500/20 bg-gradient-to-br from-sky-950/40 to-emerald-950/20">
              <CardContent className="p-0">
                <p className="text-slate-200 italic text-base leading-relaxed">
                  "The best investment you can make is in knowledge and systems that
                  work while you sleep."
                </p>
                <p className="text-sky-400 text-sm font-semibold mt-3">— The Founder, Compounding with AI</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
