import { motion } from "framer-motion";
import {
  Brain,
  Flame,
  LineChart,
  Bot,
  DollarSign,
  Search,
  Shield,
  Cpu,
  BookOpen,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const topics = [
  {
    icon: Brain,
    title: "AI-Powered Investing",
    description:
      "Use ChatGPT, Claude, and custom AI agents to analyze stocks, identify trends, and make smarter buy/sell decisions.",
    color: "blue",
    tag: "Core Module",
  },
  {
    icon: Flame,
    title: "FIRE Strategies",
    description:
      "Learn proven frameworks for Financial Independence, Retire Early — from 4% rule mastery to aggressive savings systems.",
    color: "orange",
    tag: "FIRE Path",
  },
  {
    icon: LineChart,
    title: "Options Trading",
    description:
      "Understand options strategies from covered calls to iron condors, with AI helping you calculate risk/reward ratios.",
    color: "green",
    tag: "Advanced",
  },
  {
    icon: Bot,
    title: "Wealth Automation",
    description:
      "Build automated investing pipelines, AI-driven alerts, and smart portfolio rebalancing systems that run 24/7.",
    color: "purple",
    tag: "Automation",
  },
  {
    icon: Search,
    title: "AI Market Research",
    description:
      "Master AI-powered tools for earnings analysis, sentiment tracking, and competitor research in minutes, not hours.",
    color: "blue",
    tag: "Research",
  },
  {
    icon: DollarSign,
    title: "Passive Income Systems",
    description:
      "Discover dividend strategies, real estate REITs, and income-generating assets that compound while you sleep.",
    color: "green",
    tag: "Income",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Learn how AI models portfolio risk, hedging strategies, and position sizing for downside protection.",
    color: "purple",
    tag: "Protection",
  },
  {
    icon: Cpu,
    title: "AI Tool Mastery",
    description:
      "Deep dives into Perplexity, Claude, Gemini, and specialized fintech AI tools that give you an unfair advantage.",
    color: "orange",
    tag: "Tools",
  },
  {
    icon: BookOpen,
    title: "Wealth Psychology",
    description:
      "Overcome investing biases, build the right mindset, and create lasting habits that compound your net worth.",
    color: "blue",
    tag: "Mindset",
  },
];

const colorStyles: Record<string, { icon: string; tag: string; glow: string }> = {
  blue: {
    icon: "bg-sky-500/15 text-sky-400 group-hover:bg-sky-500/25",
    tag: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(14,165,233,0.1)]",
  },
  green: {
    icon: "bg-emerald-500/15 text-emerald-400 group-hover:bg-emerald-500/25",
    tag: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]",
  },
  purple: {
    icon: "bg-violet-500/15 text-violet-400 group-hover:bg-violet-500/25",
    tag: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]",
  },
  orange: {
    icon: "bg-orange-500/15 text-orange-400 group-hover:bg-orange-500/25",
    tag: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(251,146,60,0.1)]",
  },
};

export function WhatYoullLearn() {
  return (
    <section id="learn" className="py-24 px-4 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">
            <BookOpen className="w-3.5 h-3.5" />
            Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 mb-5 tracking-tight">
            What You'll{" "}
            <span className="gradient-text">Master Inside</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive curriculum that bridges cutting-edge AI with proven
            wealth-building principles. No fluff — just actionable strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic, index) => {
            const styles = colorStyles[topic.color];
            const Icon = topic.icon;
            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
                className="group"
              >
                <Card
                  hover
                  className={`h-full transition-all duration-300 ${styles.glow}`}
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${styles.icon}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${styles.tag}`}
                      >
                        {topic.tag}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-sky-100 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1">
                      {topic.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-400 text-base">
            All of this is included in the{" "}
            <span className="text-white font-semibold">FREE community.</span>{" "}
            No upsells, no paywalls.
          </p>
          <button
            onClick={() =>
              document.querySelector("#community")?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-4 inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-semibold text-sm transition-colors group"
          >
            Claim your free access
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
