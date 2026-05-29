import { motion } from "framer-motion";
import { Users, Lock, Zap, Gift, ArrowRight, CheckCircle2 } from "lucide-react";

const COMMUNITY_URL = "https://www.skool.com/compoundingwithai-9847/about";

const perks = [
  { icon: Gift, text: "Free forever — no credit card needed" },
  { icon: Zap, text: "Instant access to all resources" },
  { icon: Users, text: "Growing community of professionals" },
  { icon: Lock, text: "Private, spam-free community" },
];

export function Community() {
  return (
    <section id="community" className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-600/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4 inline-flex">
            <Users className="w-3.5 h-3.5" />
            Join the Community
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 mb-5 tracking-tight">
            Start Your Journey to{" "}
            <span className="gradient-text">Financial Freedom</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Join professionals learning to leverage AI for smarter
            investing. It's 100% free — and always will be.
          </p>
        </motion.div>

        {/* Perks row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
        >
          {perks.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="glass-card p-4 flex flex-col items-center gap-2 text-center"
            >
              <Icon className="w-5 h-5 text-sky-400" />
              <p className="text-slate-300 text-xs font-medium leading-snug">{text}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-sky-500/20 via-emerald-500/10 to-sky-500/20 blur-sm" />

          <div className="relative glass-card p-10 md:p-14 rounded-2xl flex flex-col items-center text-center gap-8">
            <div>
              <h3 className="text-white font-bold text-2xl mb-2">Ready to join?</h3>
              <p className="text-slate-400 text-base">
                Click below to get instant free access on Skool.
              </p>
            </div>

            <a
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4"
            >
              Join the FREE Community
              <ArrowRight className="w-5 h-5" />
            </a>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-slate-400 text-xs">
              {["No spam, ever", "Instant access", "Your data stays private"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-slate-500 text-sm">
            Trusted by engineers, analysts, and entrepreneurs.{" "}
            <span className="text-emerald-400 font-medium">100% free, always.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
