import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const testimonials = [
  {
    name: "Priya Sharma",
    title: "Senior Software Engineer",
    company: "FAANG",
    quote:
      "I went from zero investing knowledge to a confident options trader in 3 months. The AI tools taught here genuinely gave me an edge. My portfolio is up 38% since joining.",
    stars: 5,
    tag: "Software Engineer",
    avatar: "PS",
    color: "blue",
  },
  {
    name: "Marcus Williams",
    title: "Product Manager",
    company: "Tech Startup",
    quote:
      "This community changed how I think about wealth. I used ChatGPT to analyze my portfolio using techniques from this group and caught a major market shift early. FIRE feels real now.",
    stars: 5,
    tag: "Product Manager",
    avatar: "MW",
    color: "green",
  },
  {
    name: "Sarah Chen",
    title: "Data Scientist",
    company: "Fortune 500",
    quote:
      "As a data scientist, I was skeptical. But the AI-powered screeners and research frameworks here are genuinely rigorous. I'm on track to retire 12 years earlier than planned.",
    stars: 5,
    tag: "Data Scientist",
    avatar: "SC",
    color: "purple",
  },
  {
    name: "Raj Patel",
    title: "Business Owner",
    company: "E-commerce",
    quote:
      "I was always too busy running my business to learn investing. This community gave me AI systems that work for me 24/7. First time I feel like my money is actually working.",
    stars: 5,
    tag: "Entrepreneur",
    avatar: "RP",
    color: "blue",
  },
  {
    name: "Emily Rodriguez",
    title: "Financial Analyst",
    company: "Investment Bank",
    quote:
      "Even as a finance professional, I learned techniques here I didn't know existed. The intersection of AI and investing is the future, and this community is ahead of the curve.",
    stars: 5,
    tag: "Finance Pro",
    avatar: "ER",
    color: "green",
  },
  {
    name: "David Kim",
    title: "DevOps Engineer",
    company: "SaaS Company",
    quote:
      "I built an AI-driven watchlist using tools from this community. My first month using it I spotted a 4x opportunity. The ROI on joining this free community is insane.",
    stars: 5,
    tag: "Engineer",
    avatar: "DK",
    color: "purple",
  },
];

const avatarColors: Record<string, string> = {
  blue: "from-sky-500 to-blue-600",
  green: "from-emerald-500 to-teal-600",
  purple: "from-violet-500 to-purple-600",
};

function TestimonialCard({ testimonial, index }: { testimonial: (typeof testimonials)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <Card hover glow={testimonial.color as "blue" | "green"} className="h-full p-6 flex flex-col">
        <CardContent className="p-0 flex flex-col h-full">
          {/* Stars */}
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: testimonial.stars }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Quote */}
          <div className="relative flex-1">
            <Quote className="w-6 h-6 text-sky-400/30 absolute -top-1 -left-1" />
            <p className="text-slate-300 leading-relaxed pl-4 text-sm md:text-base">
              "{testimonial.quote}"
            </p>
          </div>

          {/* Author */}
          <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-700/50">
            <div
              className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarColors[testimonial.color]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
            >
              {testimonial.avatar}
            </div>
            <div className="min-w-0">
              <p className="text-white font-semibold text-sm truncate">{testimonial.name}</p>
              <p className="text-slate-400 text-xs truncate">
                {testimonial.title} · {testimonial.company}
              </p>
            </div>
            <div className="ml-auto flex-shrink-0">
              <Badge variant={testimonial.color === "blue" ? "blue" : testimonial.color === "green" ? "green" : "default"}>
                {testimonial.tag}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">
            <Star className="w-3.5 h-3.5 fill-sky-400" />
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 mb-5 tracking-tight">
            Professionals Who Are{" "}
            <span className="gradient-text">Already Winning</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Engineers, analysts, and business owners using AI to accelerate
            their path to financial independence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 glass-card p-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left"
        >
          <div className="flex -space-x-3">
            {["PS", "MW", "SC", "RP", "ER"].map((initials, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br ${
                  ["from-sky-500 to-blue-600", "from-emerald-500 to-teal-600", "from-violet-500 to-purple-600", "from-sky-500 to-blue-600", "from-emerald-500 to-teal-600"][i]
                }`}
              >
                {initials}
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-xs text-slate-300 font-semibold">
              +5k
            </div>
          </div>
          <div>
            <p className="text-white font-semibold">
              5,200+ members already inside
            </p>
            <p className="text-slate-400 text-sm">
              Join the fastest-growing AI investing community — completely free
            </p>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-white font-semibold ml-2">4.9/5</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
