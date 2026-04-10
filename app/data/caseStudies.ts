export interface Metric {
  value: string
  label: string
}

export interface CaseStudy {
  id: string
  client: string
  industry: string
  tags: string[]
  summary: string
  problem: string
  solution: string
  result: string
  metrics: Metric[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: "global-retail-infrastructure",
    client: "Global Retail Group",
    industry: "Retail & E-Commerce",
    tags: ["Cloud Migration", "Infrastructure as Code", "High Availability"],
    summary:
      "A national retail chain running 400+ stores on aging on-premises hardware was losing revenue to downtime and could not scale for peak trading periods.",
    problem:
      "The client's infrastructure had not meaningfully changed in eight years. Seasonal peaks — Black Friday, end-of-financial-year sales — brought the platform to its knees. The on-premises estate required two full-time engineers simply to keep it running, and unplanned downtime was averaging three to four hours per week. Every hour of downtime was directly measurable in lost transactions. The engineering team spent more time firefighting than building. Planned capacity upgrades required six-week procurement cycles, making elastic scaling impossible. The organisation had digital transformation ambitions that the existing infrastructure simply could not support.",
    solution:
      "We designed and executed a phased cloud migration to AWS, replacing the brittle on-premises estate with infrastructure defined entirely as code using Terraform and deployed through automated pipelines. We implemented a multi-availability-zone architecture with auto-scaling groups that respond to real-time traffic signals, active-active failover for the database tier using Aurora Global Database, and a content delivery layer through CloudFront to absorb static asset load. The entire infrastructure configuration was placed in version control, with policy checks running against every proposed change before application. The migration was executed with zero planned downtime through a blue-green cutover strategy, with traffic gradually shifted over a four-hour window.",
    result:
      "The client reached 99.97% availability in the three months following migration — eliminating the recurring downtime that had been accepted as normal for years. Their first post-migration Black Friday handled 4x normal peak traffic without intervention. The two engineers previously dedicated to infrastructure maintenance were redeployed to product work. Infrastructure costs reduced through right-sizing and reserved instance purchasing.",
    metrics: [
      { value: "99.97%", label: "Uptime achieved" },
      { value: "4x", label: "Peak load capacity" },
      { value: "42%", label: "Infrastructure cost reduction" },
      { value: "0", label: "Unplanned downtime hours (post-migration)" },
    ],
  },
  {
    id: "financial-services-compliance",
    client: "Mid-Market Investment Firm",
    industry: "Financial Services",
    tags: ["Policy as Code", "Security", "Compliance Automation", "SOC 2"],
    summary:
      "A growing investment firm was spending six weeks per quarter on manual compliance evidence gathering, with each audit cycle finding new drift in their cloud environment.",
    problem:
      "The firm operated under SOC 2 Type II obligations and was pursuing ISO 27001 certification. Their compliance process was almost entirely manual: a team of three would spend six weeks before each audit gathering screenshots, running manual checks, and producing evidence packs. Despite this effort, auditors consistently found configuration drift — security groups left open after troubleshooting, MFA requirements not enforced across all accounts, logging gaps in non-production environments that occasionally touched production data. Each finding required a remediation plan and a follow-up audit, extending the overall cycle further. As the engineering team grew from 8 to 35 engineers, the manual compliance model became genuinely untenable. The compliance team was working longer hours to keep up with more engineers making more changes.",
    solution:
      "We implemented a Policy as Code framework using OPA Gatekeeper for Kubernetes workloads and HashiCorp Sentinel for Terraform infrastructure changes. We codified the firm's SOC 2 and ISO 27001 requirements as executable policies covering network access controls, encryption requirements, logging configuration, and identity management. Every infrastructure change now runs through automated policy evaluation before deployment is permitted. We deployed AWS Config with custom rules for continuous compliance monitoring of the existing environment and integrated findings into a single compliance dashboard. Remediation for detected drift is now automated for the 80% of findings that fall into known, safe-to-fix categories.",
    result:
      "The quarterly compliance evidence pack — which previously required six weeks of engineering time — is now generated automatically in under four hours. The last audit cycle produced zero findings related to configuration drift, which the firm's auditors noted as exceptional for an organisation of its size. The compliance team of three redirected their time toward improving control coverage and preparing the ISO 27001 documentation rather than gathering evidence for what already existed.",
    metrics: [
      { value: "6 weeks → 4 hrs", label: "Audit evidence cycle" },
      { value: "0", label: "Configuration drift findings in last audit" },
      { value: "100%", label: "Infrastructure changes policy-evaluated" },
      { value: "80%", label: "Drift remediation automated" },
    ],
  },
  {
    id: "healthcare-network-security",
    client: "Regional Healthcare Provider",
    industry: "Healthcare",
    tags: ["Zero Trust", "Network Architecture", "HIPAA", "Data Security"],
    summary:
      "A regional healthcare network with twelve facilities needed to modernise its patient records access architecture to meet HIPAA requirements and resolve persistent performance issues.",
    problem:
      "The provider's patient records system was built on a flat network architecture that had grown organically over fifteen years. Clinicians experienced slow query times — regularly exceeding 8 seconds for common lookups — which was affecting the quality of patient care. More critically, a third-party security assessment identified that lateral movement within the flat network was largely unconstrained: a compromised endpoint in one facility could access records from all twelve. HIPAA requirements around minimum necessary access were not being enforced at the network layer at all. A minor breach incident involving unauthorised access to a workstation had put the organisation on notice from their HIPAA compliance officer. The provider needed to remediate the security architecture without disrupting clinical operations — a constraint with no tolerance for error.",
    solution:
      "We designed and implemented a zero-trust network architecture across all twelve facilities, replacing the flat network model with micro-segmented zones with explicit, role-based access controls between them. Patient records access is now governed by cryptographic identity verification at the application and network layer, with access policies derived directly from staff roles in the HR system. We migrated the records database to a tiered architecture with read replicas co-located with the clinics that generate the highest query volumes, eliminating the cross-site latency that was the primary driver of slow lookups. All data at rest and in transit is encrypted end-to-end, with key management handled through AWS KMS with audit logging for every access event.",
    result:
      "Patient record query times fell from an average of 8.3 seconds to under 90 milliseconds across all facilities — a reduction that clinicians described as genuinely transformative for workflow. The zero-trust architecture was independently assessed as meeting HIPAA technical safeguard requirements in full, closing the compliance gap that had prompted the engagement. The organisation's cyber insurance premium reduced at the next renewal cycle.",
    metrics: [
      { value: "8.3s → 90ms", label: "Average query time" },
      { value: "100%", label: "HIPAA technical safeguards met" },
      { value: "12", label: "Facilities migrated with zero downtime" },
      { value: "31%", label: "Cyber insurance premium reduction" },
    ],
  },
  {
    id: "saas-scale-architecture",
    client: "B2B SaaS Platform",
    industry: "Software / Technology",
    tags: ["Microservices", "Kubernetes", "Auto-Scaling", "CI/CD"],
    summary:
      "A rapidly growing SaaS platform built on a monolithic architecture could not handle a 10x user growth event and faced existential delivery bottlenecks as the engineering team scaled.",
    problem:
      "The platform had grown from 2,000 to 80,000 active users in eighteen months following a successful enterprise sales push. The monolithic Rails application that had served them well at smaller scale was now a bottleneck at every layer. Deployment took four hours including manual testing steps, during which the platform was partially degraded. Any change to a high-traffic module required full regression testing across the entire application. Three separate engineering squads were working on the same codebase with daily merge conflicts, and the time from feature completion to production was averaging 22 days. A single infrastructure event brought the entire platform down — there was no isolation between the billing service, the reporting engine, and the customer-facing application.",
    solution:
      "We led the decomposition of the monolith into twelve domain-aligned microservices, migrated to a Kubernetes platform on EKS with service-mesh networking through Istio, and rebuilt the CI/CD pipeline using GitHub Actions with automated testing gates, security scanning, and progressive canary deployments. Each service now has independent deployment pipelines, independent scaling policies, and independently deployable contracts. The database layer was decomposed from a single PostgreSQL instance into service-owned data stores with an event streaming layer through Kafka for cross-service communication. Feature flagging was implemented platform-wide to decouple deployment from release, allowing incomplete features to ship to production while remaining invisible to end users.",
    result:
      "Deployment time fell from four hours to under twelve minutes per service, with no platform-wide degradation during releases. Each engineering squad now operates with genuine autonomy — changes to the billing service do not require sign-off from the reporting team and cannot break the customer application. The platform handled a 50x traffic spike during a product hunt launch without automated scaling intervention being noticed by the team until after the fact.",
    metrics: [
      { value: "4 hrs → 12 min", label: "Deployment time" },
      { value: "50x", label: "Peak traffic handled" },
      { value: "22 days → 3 days", label: "Feature cycle time" },
      { value: "3", label: "Independent engineering squads unblocked" },
    ],
  },
]
