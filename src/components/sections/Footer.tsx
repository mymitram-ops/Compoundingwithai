import { motion } from "framer-motion";
import { TrendingUp, Zap, Mail, ArrowRight, Share2, Briefcase, Play } from "lucide-react";

const footerLinks = {
  Community: [
    { label: "Join Free", href: "#community" },
    { label: "What You'll Learn", href: "#learn" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],
  Topics: [
    { label: "AI Investing", href: "#learn" },
    { label: "FIRE Strategies", href: "#learn" },
    { label: "Options Trading", href: "#learn" },
    { label: "Wealth Automation", href: "#learn" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Disclaimer", href: "#" },
  ],
};

const socials = [
  { icon: Share2, label: "Twitter / X", href: "#" },
  { icon: Briefcase, label: "LinkedIn", href: "#" },
  { icon: Play, label: "YouTube", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@compoundingwithai.com" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-slate-800/80 pt-16 pb-8 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-sky-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2.5 mb-5"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 flex items-center justify-center shadow-lg">
                <TrendingUp className="w-5 h-5 text-white" />
                <Zap className="w-2.5 h-2.5 text-yellow-300 absolute" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-sm tracking-wide">Compounding</span>
                <span className="gradient-text font-bold text-sm tracking-wide">with AI</span>
              </div>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Helping professionals achieve financial independence faster by
              leveraging the power of AI in their investing journey. Join the
              movement. Build freedom.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700/60 hover:border-sky-500/40 flex items-center justify-center text-slate-400 hover:text-sky-400 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <button
                      onClick={() => scrollTo(href)}
                      className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200 text-left"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mini CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
        >
          <div>
            <h3 className="text-white font-bold text-xl mb-1">
              Ready to start your FIRE journey?
            </h3>
            <p className="text-slate-400 text-sm">
              Join our community of professionals. Free forever.
            </p>
          </div>
          <button
            onClick={() => scrollTo("#community")}
            className="btn-primary whitespace-nowrap flex-shrink-0"
          >
            Join Free Community
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Disclaimer */}
        <div className="glass-card p-4 mb-8 text-center">
          <p className="text-slate-500 text-xs leading-relaxed">
            <strong className="text-slate-400">Disclaimer:</strong> The content on this site is for
            educational and informational purposes only. It does not constitute financial advice,
            investment advice, or any other professional advice. Always do your own research and
            consult with a licensed financial advisor before making investment decisions. Past
            performance is not indicative of future results. Investing involves risk, including
            the possible loss of principal.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-xs border-t border-slate-800/60 pt-6">
          <p>© {new Date().getFullYear()} Compounding with AI. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{" "}
            <span className="text-sky-400">AI</span>
            {" "}+{" "}
            <span className="text-emerald-400">passion</span>
            {" "}for financial freedom
          </p>
        </div>
      </div>
    </footer>
  );
}
