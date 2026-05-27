import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is the community really 100% free?",
    answer:
      "Yes — completely free. There are no hidden fees, no paid tiers, and no upsells. This community exists to help professionals achieve financial independence using AI, and we believe access to that knowledge shouldn't cost money. The goal is to help you build wealth, not take it.",
  },
  {
    question: "Who is this community for?",
    answer:
      "This community is built for ambitious professionals: software engineers, product managers, data scientists, business owners, analysts, and anyone with a growth mindset. Whether you're just starting your investing journey or you're already managing a portfolio, you'll find value here. The one thing members have in common is a desire to use AI and smart systems to accelerate their financial freedom.",
  },
  {
    question: "Do I need investing experience to join?",
    answer:
      "Not at all. We welcome complete beginners alongside experienced investors. Our content is layered — foundational concepts for newcomers and advanced AI-driven strategies for seasoned investors. The community format means you can learn at your own pace and ask questions without judgment.",
  },
  {
    question: "What AI tools do you teach?",
    answer:
      "We cover a broad range of AI tools applied to investing: ChatGPT and Claude for market research and earnings analysis, Perplexity for real-time financial data, custom AI agents for portfolio screening, Python with AI libraries for quantitative analysis, and specialized fintech AI platforms. We also explore how to build your own AI-powered investing workflows.",
  },
  {
    question: "What is FIRE and why does it matter?",
    answer:
      "FIRE stands for Financial Independence, Retire Early. It's a movement focused on building enough passive income and investment assets to cover your living expenses — giving you the freedom to work because you want to, not because you have to. AI is a powerful accelerant for FIRE because it helps you research faster, invest smarter, and automate systems that work 24/7.",
  },
  {
    question: "How is this different from other investing communities?",
    answer:
      "Most investing communities focus on stock tips or passive index investing. We're specifically focused on the intersection of AI and active wealth-building — teaching you to use AI as an unfair advantage in your research, decision-making, and portfolio management. We're also FIRE-focused, which means strategies are aimed at long-term freedom, not just short-term gains.",
  },
  {
    question: "Will there ever be paid courses or products?",
    answer:
      "The core community is and will remain free. If we ever create premium resources in the future, they will always be optional extras — the free community will never lose value. Our model is built on trust: we grow when you achieve results, not when we sell you things.",
  },
  {
    question: "How do I get started once I join?",
    answer:
      "After joining, you'll get a welcome email with links to our top resources, a getting-started guide, and an invitation to the community platform. From there, you can explore modules, participate in discussions, ask questions, and connect with other members who are on the same FIRE journey.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={cn(
        "border border-slate-700/60 rounded-2xl overflow-hidden transition-all duration-300",
        open
          ? "bg-slate-900/80 border-sky-500/30 shadow-[0_0_20px_rgba(14,165,233,0.07)]"
          : "bg-slate-900/40 hover:border-slate-600/80 hover:bg-slate-900/60"
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
        aria-expanded={open}
      >
        <span
          className={cn(
            "font-semibold text-base md:text-lg transition-colors duration-200",
            open ? "text-white" : "text-slate-200"
          )}
        >
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200",
            open ? "bg-sky-500/20 text-sky-400" : "bg-slate-800 text-slate-400"
          )}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <div className="h-px bg-slate-700/50 mb-4" />
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 inline-flex">
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 mb-5 tracking-tight">
            Everything You <span className="gradient-text">Need to Know</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Still have questions? We've got answers. If you don't see yours
            below, just ask in the community.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-400 mb-5 text-base">
            Ready to start your FIRE journey with AI?
          </p>
          <button
            onClick={() =>
              document.querySelector("#community")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary inline-flex"
          >
            Join the Free Community Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
