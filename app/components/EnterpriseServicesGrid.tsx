"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Server, Shield, Cloud, Database, Network, Lock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: React.ElementType
  title: string
  description: string
  index: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, index }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      className="group relative"
    >
      <div className="relative h-full rounded-xl bg-[#1a1a1a] border border-cyan-500/20 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-10">
          <div className="mb-4 inline-flex rounded-lg bg-cyan-500/10 p-3 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:scale-110">
            <Icon className="h-6 w-6" />
          </div>

          <h3 className="mb-3 text-xl font-semibold text-white">
            {title}
          </h3>

          <p className="text-sm leading-relaxed text-gray-400">
            {description}
          </p>
        </div>

        <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />
        </div>
      </div>
    </motion.div>
  )
}

interface EnterpriseServicesProps {
  title?: string
  services?: Array<{
    icon: React.ElementType
    title: string
    description: string
  }>
  className?: string
}

// ── SERVICE CARDS ──────────────────────────────────────────────────────────────
// These six cards appear in the homepage services grid.
// To edit: update title, description, or swap the icon.
// Icons: import any name from lucide-react — https://lucide.dev/icons
// To add a card: duplicate an object and add it to the array (grid auto-expands).
// To remove a card: delete its object from the array.
const EnterpriseServices: React.FC<EnterpriseServicesProps> = ({
  title = "What we do — and why it matters",
  services = [
    {
      icon: Server,
      title: "Server Infrastructure",
      description: "Purpose-built environments for workloads that don't tolerate surprises. Documented SLAs, redundant power, proactive capacity management — and engineers who monitor before you have to call.",
    },
    {
      icon: Shield,
      title: "Security Operations",
      description: "Continuous threat monitoring, structured incident response, and controls aligned to ISO 27001. We treat your security posture as an ongoing programme, not a one-time project.",
    },
    {
      icon: Cloud,
      title: "Cloud & Hybrid Architecture",
      description: "Multi-cloud environments that are actually managed — across AWS, Azure, and GCP — with cost governance, compliance guardrails, and the operational visibility your team deserves.",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "High-availability operations with point-in-time recovery, synchronous replication, and automated failover. Your data, exactly as you left it — even when something goes wrong.",
    },
    {
      icon: Network,
      title: "Network Engineering",
      description: "Software-defined networks with documented redundancy, explicit failover paths, and traffic segmentation built for enterprise-grade connectivity requirements.",
    },
    {
      icon: Lock,
      title: "Identity & Access Control",
      description: "Role-based access, MFA, and privileged access management. Shrink your attack surface, satisfy your auditors, and stop worrying about who has access to what.",
    },
  ],
  className,
}) => {
  const titleRef = React.useRef(null)
  const isTitleInView = useInView(titleRef, { once: true })

  return (
    <div className={cn("relative min-h-screen w-full bg-[#0a0a0a] py-16 px-4 sm:px-6 lg:px-8", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: -30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-cyan-400">
              {title}
            </span>
          </h2>
          <p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Six service areas. One goal: infrastructure that earns your trust every single day.
          </p>
          <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        {/* Understated cross-link */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/5 pt-10">
          <p className="text-gray-500 text-sm max-w-md">
            Each of these services has been applied in real engagements — healthcare networks, financial firms, enterprise SaaS, and government organisations.
          </p>
          <div className="flex items-center gap-6 shrink-0">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
            >
              See client results <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
            >
              Read our thinking <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnterpriseServices
