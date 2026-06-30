"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";

const floatingCards = [
  {
    icon: TrendingUp,
    label: "Readiness Score",
    value: "91%",
    delay: 0.3,
  },
  {
    icon: Sparkles,
    label: "AI Feedback",
    value: "Real-time",
    delay: 0.5,
  },
  {
    icon: Users,
    label: "Students",
    value: "10K+",
    delay: 0.7,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden mesh-bg py-20 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                AI-Powered Placement Prep
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Ace Your{" "}
              <span className="gradient-text">Placement</span>
              <br />
              with AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
            >
              Master coding interviews, aptitude tests, and HR rounds with
              personalized AI coaching. Join 10,000+ students who landed jobs at
              top companies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              >
                Start Free
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:bg-primary/5"
              >
                See How It Works
              </a>
            </motion.div>
          </div>

          <div className="relative hidden h-80 lg:block">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
            <div className="relative flex h-full items-center justify-center">
              {floatingCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: card.delay }}
                    className="absolute rounded-2xl border border-border bg-card p-5 shadow-lg shadow-primary/10"
                    style={{
                      top: i === 0 ? "10%" : i === 1 ? "40%" : "65%",
                      left: i === 0 ? "5%" : i === 1 ? "35%" : "15%",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted">{card.label}</p>
                        <p className="text-lg font-bold">{card.value}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
