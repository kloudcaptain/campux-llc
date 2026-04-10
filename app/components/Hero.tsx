"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">

      {/* Lamp effect — decorative */}
      <div className="absolute top-0 isolate z-0 flex w-full flex-1 items-start justify-center pointer-events-none">
        <div className="absolute top-0 z-50 h-48 w-full opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-cyan-500/50 blur-3xl" />

        <motion.div
          initial={{ width: "8rem" }}
          animate={{ width: "16rem" }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          className="absolute top-0 z-30 h-36 rounded-full bg-cyan-500/50 blur-2xl -translate-y-[20%]"
        />
        <motion.div
          initial={{ width: "15rem" }}
          animate={{ width: "30rem" }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-cyan-500/60"
        />

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          animate={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 70deg at center top, rgba(6,182,212,0.6), transparent, transparent)",
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible"
        >
          <div className="absolute w-full left-0 bg-[#0a0a0a] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-[#0a0a0a] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          animate={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 290deg at center top, transparent, transparent, rgba(6,182,212,0.6))",
          }}
          className="absolute inset-auto left-1/2 h-56 overflow-visible"
        >
          <div className="absolute w-40 h-full right-0 bg-[#0a0a0a] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-[#0a0a0a] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 0.4, duration: 0.8 }}
        className="relative z-50 flex flex-col items-center text-center px-4 -translate-y-8"
      >
        {/* ── EYEBROW BADGE ──────────────────────────────────────────────────────
             Edit the text between the <span> tags below.
             Use "·" (middle dot) as a separator between items.             */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cyan-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Infrastructure · Security · Cloud Operations
        </div>

        {/* ── HEADLINE ───────────────────────────────────────────────────────────
             Line 1 (gradient text): edit the first <span> content.
             Line 2 (white text):    edit the second <span> content.          */}
        <h1 className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.08]">
          <span
            style={{
              backgroundImage: "linear-gradient(to right, #22d3ee, #ffffff, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Some infrastructure
          </span>
          <br />
          <span className="text-white">just runs. Ours keeps running.</span>
        </h1>

        {/* ── SUBTITLE ───────────────────────────────────────────────────────── */}
        <p className="max-w-2xl text-lg text-gray-400 mb-10 leading-relaxed">
          Managed infrastructure, security operations, and cloud architecture for
          startups, enterprises, and government organisations where downtime is
          never an acceptable outcome — and doesn't have to be.
        </p>

        {/* ── CTA BUTTONS ────────────────────────────────────────────────────────
             Primary button (solid cyan):  edit label + href below.
             Secondary button (outline):   edit label + href below.           */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-black hover:bg-cyan-400 transition-colors duration-200"
          >
            See client results
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-colors duration-200"
          >
            Talk to our team
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>

        {/* ── TRUST LINE ─────────────────────────────────────────────────────────
             Small text below CTAs. Edit the industries listed here.          */}
        <p className="mt-10 text-xs text-gray-600 tracking-wide">
          Trusted across healthcare · financial services · SaaS · government
        </p>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-10" />
    </section>
  )
}
