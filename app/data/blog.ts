export interface BlogSection {
  heading?: string
  paragraphs: string[]
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  readTime: string
  tags: string[]
  category: string
  excerpt: string
  sections: BlogSection[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-infrastructure-nobody-thinks-about",
    title: "The Infrastructure Nobody Thinks About (Until It's 3am)",
    date: "2026-04-08",
    readTime: "8 min read",
    tags: ["Infrastructure", "Reliability", "Leadership", "On-Call"],
    category: "Engineering Culture",
    excerpt:
      "Good infrastructure is invisible. You can run a business for years on systems nobody has seriously thought about since the day they were set up. This is fine — until the moment it isn't.",
    sections: [
      {
        paragraphs: [
          `There is a particular quality to the silence just before an incident. The dashboard that was green a moment ago. The status page still reading "All Systems Operational." The engineer at a team dinner, phone face-down on the table, unaware that something has started unravelling.`,
          `Good infrastructure has a structural problem: it is invisible. Not invisible the way dark matter is invisible — theoretically significant but practically irrelevant to daily life. Invisible the way a reliable postal service is invisible. You post a letter and it arrives. The system only becomes noticeable the moment it fails.`,
          `This is the thing organisations rarely talk about until they have to.`,
        ],
      },
      {
        heading: "What invisibility actually costs",
        paragraphs: [
          `The trouble with invisible things is that it is genuinely hard to argue for investing in them. If your databases have never had a catastrophic failure, the case for improving database practices sounds abstract — an engineering preference dressed up as a business concern. If your deployment pipeline has never caused a production incident, improving it looks like gold-plating.`,
          `So the investment doesn't happen. Runbooks get written once and never tested. Monitoring alerts get configured during an incident and never revisited. The on-call rotation grows by one person every time someone leaves, rather than shrinking because the system has become more reliable. Infrastructure accumulates debt in the places nobody looks — which is precisely what makes the debt so dangerous.`,
          `Then a Tuesday in July comes along.`,
          `On 19 July 2024, a routine update to CrowdStrike's Falcon sensor software was pushed automatically to 8.5 million Windows machines worldwide. A faulty content configuration file triggered a kernel panic that wouldn't recover. Airlines grounded fleets. Hospitals deferred procedures. Banks couldn't open. Delta estimated $500 million in losses from a single bad file, deployed through a channel that bypassed the testing that might have caught it.`,
          `CrowdStrike aren't careless engineers. They built systems that worked — until a combination of circumstances they hadn't fully modelled arrived all at once. That is the thing about infrastructure failures: they expose the gap between the scenarios you designed for and the scenario that actually showed up.`,
        ],
      },
      {
        heading: "The accumulation",
        paragraphs: [
          `Most infrastructure failures are nothing like CrowdStrike. They don't make the news. They happen to a company with thirty engineers and four hundred customers on a Wednesday afternoon, get fixed by Friday, and get filed as a closed incident that nobody reads again.`,
          `What accumulates isn't the incidents. It's the habits that form around them.`,
          `The patch deferred because the system seemed stable. The monitoring threshold set to a number that sounded reasonable without reference to actual baseline behaviour. The failover that's documented but not tested, because testing it means planned downtime, and planned downtime requires approvals, and approvals take time nobody has. The alert that pages at 2am for something that resolves itself — so the on-call engineer learns to silence it rather than investigate the root cause.`,
          `Each of these is a small decision, made reasonably at the time, that slightly degrades the system's reliability. Individually, none of them are mistakes. Collectively, they become the fragility that surfaces at the worst possible moment.`,
        ],
      },
      {
        heading: "What treating infrastructure seriously actually looks like",
        paragraphs: [
          `Companies that operate reliably at scale — quietly, without the incidents that make headlines — tend to share practices that aren't secret or particularly novel. They write runbooks and test them on a schedule. They instrument their systems carefully enough to understand what normal looks like, so they can recognise when something is drifting before a customer does. They practice incident response before they need it, so the decisions made under pressure aren't being made for the first time.`,
          `They treat the deployment pipeline as a product worth maintaining. They have rollback procedures that are practised, documented, and genuinely fast under pressure. They think about the on-call experience as something to engineer away from — not by eliminating the rotation, but by systematically reducing the number of things that require human attention at 2am.`,
          `None of this is advanced engineering. What it requires is protected time and the organisational will to invest in something that won't produce a visible return until it quietly prevents an incident nobody knows about. That's a hard sell in most planning cycles. It's also the right investment.`,
        ],
      },
      {
        heading: "The 3am call is a design choice",
        paragraphs: [
          `Every 3am page is the result of a decision made in daylight.`,
          `Not always a bad decision — sometimes shipping fast genuinely is the right call, and improving monitoring can wait until next sprint. But a decision. The alert threshold set too low and then muted because it was too noisy. The deployment window chosen for speed rather than recoverability. The dependency update deferred because nothing had visibly broken yet.`,
          `Infrastructure work is largely the practice of making better decisions in daylight so the night stays quiet. It is unglamorous. It doesn't ship user-visible features. It doesn't move metrics that appear in board presentations. It shows up only in its absence — in the outage that didn't happen, the data loss that didn't occur, the audit that found nothing to flag.`,
          `Good infrastructure earns no credit for what it prevents. But it also doesn't start the conversation that begins with "what are we going to tell the customers."`,
          `That trade — invisibility for reliability — is the one worth making.`,
        ],
      },
      {
        paragraphs: [
          `We wrote this because we have been on both sides of it. Organisations that invested in infrastructure before it mattered, and organisations rebuilding customer trust after an incident that a different set of decisions could have avoided. The gap between those two situations is rarely a technology gap. It is almost always a prioritisation one.`,
          `Infrastructure doesn't ask for attention. But it rewards the teams who give it some.`,
        ],
      },
    ],
  },

  {
    slug: "ai-is-the-new-junior-developer",
    title: "AI Is the New Junior Developer — And That's Okay",
    date: "2026-03-18",
    readTime: "8 min read",
    tags: ["AI", "Engineering Culture", "Career"],
    category: "AI & Engineering",
    excerpt:
      "AI tools now handle boilerplate, documentation, and the mechanical layer of software engineering. That changes what early-career development means — not whether it exists.",
    sections: [
      {
        paragraphs: [
          `For years, the junior developer was the person who wrote the CRUD. They built the boilerplate. They documented the functions nobody else wanted to document. They fixed the formatting, corrected the obvious bugs, and occasionally got a complex task thrown their way as a stretch goal. It was entry-level work designed to build a foundation before the interesting stuff kicked in.`,
          `Then along came AI code assistants — Copilot, Cursor, Claude, the whole ecosystem — and they got very good at exactly that: writing the boilerplate, the CRUD, the documentation, the tests for obvious scenarios. If you squint, you might argue that AI has taken the junior developer's job. The reality is more nuanced, and honestly, more interesting.`,
        ],
      },
      {
        heading: "What AI Actually Does Well",
        paragraphs: [
          `AI is exceptional at pattern completion. If you have a well-defined task with clear inputs and outputs — generate a REST endpoint that does X, write unit tests for this function, convert this class to use the repository pattern — modern AI tools will produce something usable more often than not. The speed advantage is real. What might take a junior developer an afternoon takes a few minutes with a good prompt.`,
          `This is the mechanical layer of software engineering. Not trivial, but repeatable. And this is precisely where junior engineers historically spent their early months building muscle memory for the craft. The question worth asking is not whether AI can do this work, but what happens to the humans who used to do it.`,
        ],
      },
      {
        heading: "The Learning Gap Nobody Is Talking About",
        paragraphs: [
          `Here is the uncomfortable truth: those so-called boring junior tasks served a purpose beyond shipping code. Writing the fifteenth CRUD endpoint by hand is the mechanism by which a junior developer internalises the architecture. Documenting a function forces them to understand it. Fixing a formatting issue might seem beneath them, but it is how they begin building code-reading instinct.`,
          `If AI handles all of that, we need to rethink how early-career engineers actually learn. The junior is not removed from the equation — they are pushed up a level. They now need to review AI output critically, understand when it is subtly wrong, and articulate requirements clearly enough that the AI can execute. That is actually a higher-order skill than writing the boilerplate yourself.`,
          `The question is whether junior developers today are being prepared for that role, or whether they are accepting Copilot suggestions without reading them. There is a version of AI-assisted development that accelerates growth and a version that hollows it out. The difference is intentionality.`,
        ],
      },
      {
        heading: "What This Means for Senior Engineers",
        paragraphs: [
          `Seniors are not off the hook here. The relationship between a senior and junior has always involved a transfer of judgment — the kind of thing you cannot put in a textbook. Knowing when a technically correct solution is architecturally wrong. Recognising the smell of code that will be a nightmare to maintain six months from now. Understanding that the business requirement as written is not the business requirement as intended.`,
          `AI does not transfer judgment. It mirrors patterns. That means seniors now have two responsibilities: using AI tools effectively themselves, and teaching juniors how to engage with AI output critically. The mentorship burden has not reduced. It has evolved, and in some ways become more demanding.`,
        ],
      },
      {
        heading: "The Net Effect",
        paragraphs: [
          `Teams that treat AI as a replacement for junior engineers will find they have solved a short-term cost problem and created a long-term capability problem. The seniors will eventually leave or age out. The AI will keep producing plausible-looking code that someone needs to actually understand.`,
          `Teams that treat AI as an accelerant — using it to free junior engineers from the tedious layer and give them more time on design decisions, architecture discussions, and substantive code review — will compound their talent faster than teams that do not.`,
          `AI is the new junior developer in the way that calculators replaced slide rules. The job did not disappear. The baseline moved. The engineers who understand that will build better teams. The ones who do not will eventually wonder why their codebase is full of confident-looking code that nobody can explain.`,
        ],
      },
    ],
  },

  {
    slug: "removing-humans-from-automation",
    title: "What Happens When You Remove Humans from Automation Entirely",
    date: "2026-03-04",
    readTime: "7 min read",
    tags: ["Automation", "Engineering", "Operations"],
    category: "AI & Engineering",
    excerpt:
      "Full automation is fast until it is catastrophically wrong. The human in the loop is not inefficiency — it is the error correction mechanism that makes the whole system trustworthy.",
    sections: [
      {
        paragraphs: [
          `There is a version of this argument that celebrates automation without reservation. Machines are consistent. They do not get tired. They do not make emotionally charged decisions at 3am. They do not call in sick on deploy day. If you could replace every human touch point in your operational process with a reliable automated system, the argument goes, you should.`,
          `That argument has a blind spot the size of Knight Capital Group.`,
        ],
      },
      {
        heading: "The Knight Capital Incident",
        paragraphs: [
          `On 1 August 2012, Knight Capital deployed new code to its trading systems. Due to a configuration error — the kind that happens in rushed deployments — a piece of old code was accidentally reactivated. The system began executing erroneous trades at machine speed, buying high and selling low, over and over, for 45 minutes. The result was $440 million in losses. Knight Capital nearly ceased to exist.`,
          `Here is what is notable: the system was automated, operating exactly as it was configured, at speeds no human could match. The problem was not the automation itself. It was the absence of any human checkpoint that could recognise something had gone catastrophically wrong and intervene. When you remove humans from automation entirely, you remove the circuit breaker.`,
        ],
      },
      {
        heading: "Where Humans Actually Add Value",
        paragraphs: [
          `The case for automation is strong and we are not here to undermine it. Automated testing, continuous integration, infrastructure provisioning, security scanning, dependency updates — these all become more reliable when removed from fallible human hands. Error rates drop. Consistency improves. Speed increases. Automate these.`,
          `But there is a category of decision that automation handles poorly: novel situations. Automation is pattern matching against scenarios you have already thought about. The moment you encounter a situation you did not model — and in any sufficiently complex system, you will encounter these situations — the automation either fails silently, fails noisily, or proceeds incorrectly with full confidence.`,
          `Humans handle novelty differently. We notice when something feels wrong even when we cannot immediately articulate why. We ask questions. We pause. We call someone who has seen something like this before.`,
        ],
      },
      {
        heading: "The Automation Spectrum",
        paragraphs: [
          `The practical answer is not humans instead of automation. It is humans and automation, with deliberate handoff points. Fully automated: routine, well-understood, low-risk tasks where the cost of an occasional error is recoverable. Dependency updates, formatting checks, unit test runs, static analysis. Human-in-the-loop: higher-stakes decisions where automation does the analysis but a human approves. Production deployments for critical paths, cost-significant infrastructure changes, security policy exceptions.`,
          `Human-led: novel, high-consequence, or ethically significant decisions. Incident response choices under ambiguity, architectural decisions with long-term implications, anything that affects people's livelihoods directly. The framework is not complex. The discipline is in correctly categorising your operations and maintaining the categories under pressure.`,
        ],
      },
      {
        heading: "The False Economy of Full Automation",
        paragraphs: [
          `Teams that push automation all the way to the edge often discover the real cost on the wrong night. The incident that nobody understood because the runbook assumed a human would recognise the warning signs. The deployment that succeeded technically but broke the business because the automation did not know what the business actually cared about. The data export that ran correctly against the wrong dataset.`,
          `Full automation is fast until it is catastrophically wrong. The cost of catastrophic wrongness in a fully automated system is proportional to how fast the system runs and how long it runs before anyone notices. That is not an advertisement for slowness. It is an argument for knowing where your judgment checkpoints need to be, and designing them to be unavoidable rather than optional.`,
          `Design your automation to be fast. Design your human checkpoints to be impossible to skip. Those two goals are not in conflict.`,
        ],
      },
    ],
  },

  {
    slug: "policy-as-code-enterprise",
    title: "Policy as Code: How Enterprises Enforce Compliance at Scale",
    date: "2026-02-19",
    readTime: "9 min read",
    tags: ["Compliance", "Security", "Infrastructure", "Enterprise"],
    category: "Security & Compliance",
    excerpt:
      "Manual compliance is a liability at scale. Policy as Code turns regulatory requirements into version-controlled, automatically enforced guardrails — and transforms audit season from a scramble into a formality.",
    sections: [
      {
        paragraphs: [
          `Compliance is one of the most expensive problems in enterprise engineering — not because the regulations are complex, though they are, but because the traditional approach to enforcing them is completely unscalable.`,
          `Someone writes a policy document. Someone else reads it selectively. A team interprets it slightly differently. An audit arrives once a quarter and discovers six months of accumulated drift. The fix is a scramble. The next quarter's drift begins immediately. This is the lifecycle of manual compliance. Policy as Code is the engineering response to it.`,
        ],
      },
      {
        heading: "What Policy as Code Actually Means",
        paragraphs: [
          `Policy as Code is the practice of expressing security and compliance requirements as executable code — code that can be version controlled, tested, peer reviewed, and automatically enforced at every relevant point in your infrastructure and deployment pipeline.`,
          `Instead of a document that says all S3 buckets must have encryption enabled, you have a rule in Open Policy Agent or HashiCorp Sentinel that evaluates every Terraform plan before it applies. If the plan includes an unencrypted bucket, it fails — not sometimes, not if someone remembers to check, but every single time. The policy becomes as real as your code. It cannot be overlooked because it is not optional.`,
        ],
      },
      {
        heading: "The Tools Enterprises Actually Use",
        paragraphs: [
          `Open Policy Agent with Rego is the de facto standard for policy enforcement across Kubernetes, APIs, and general-purpose authorisation contexts. Its strength is flexibility — Rego can express nearly any policy logic and integrates with almost every infrastructure tool. Its weakness is the learning curve. Rego is a declarative language that takes genuine time to internalise, and teams should budget for that.`,
          `HashiCorp Sentinel lives in the Terraform and Vault ecosystem and is significantly more accessible for infrastructure-focused teams. If your infrastructure is already managed through Terraform Cloud or HCP, Sentinel is the lowest-friction path. AWS Cedar, released more recently, is purpose-built for authorisation policies and performs well in multi-tenant SaaS contexts.`,
          `For most enterprises, the tool selection follows the existing stack. The more consequential question is not which tool to use — it is where to enforce, and at how many layers.`,
        ],
      },
      {
        heading: "Where Enforcement Happens",
        paragraphs: [
          `The power of Policy as Code is that enforcement can occur at multiple layers simultaneously. Pre-commit hooks catch obvious violations before they reach code review. These are fast, cheap to implement, and suitable for simple checks — detecting committed secrets, validating Terraform syntax, enforcing required resource tags.`,
          `CI/CD pipeline checks run against every proposed change and give developers immediate feedback before anything reaches an environment. This is where OPA and Sentinel earn their keep. Admission control in Kubernetes — via OPA Gatekeeper or Kyverno — enforces policy at runtime, so even changes that bypass the pipeline cannot produce non-compliant workloads in the cluster.`,
          `Continuous compliance scanning tools like Prowler, Steampipe, and Cloud Custodian audit your existing infrastructure state and catch drift that occurred outside the normal change process. A mature implementation uses all of these layers together, not as a single checkpoint at the end.`,
        ],
      },
      {
        heading: "The Audit Story",
        paragraphs: [
          `For enterprises under regulatory scrutiny — SOC 2, ISO 27001, HIPAA, PCI-DSS — Policy as Code changes the audit conversation fundamentally. Instead of manually gathering evidence that controls were applied, you can demonstrate that controls are structurally impossible to bypass. The policy is in source control. The CI logs show it executed. The admission controller proves it is active in production.`,
          `This is not just faster auditing. It is a qualitatively different level of assurance. Auditors increasingly understand and accept Policy as Code as evidence. The organisations that invest in this infrastructure are finding that audit cycles that once consumed weeks of engineering time now require hours.`,
        ],
      },
      {
        heading: "The Cultural Shift Required",
        paragraphs: [
          `Policy as Code requires engineering buy-in that traditional compliance processes never needed. Developers now interact with compliance requirements directly, as code they can read, test, and sometimes push back on through normal engineering channels. This is a feature, not a complication.`,
          `The conversation shifts from the security team says we have to, to here is the requirement, here is why it exists, here is the test that proves we meet it. The organisations that implement this well treat their security and compliance teams as contributors to the policy codebase — not as gatekeepers of a separate process running in parallel to engineering.`,
        ],
      },
    ],
  },

  {
    slug: "policy-as-code-small-business",
    title: "Policy as Code for Small Business: Start Simple, Stay Consistent",
    date: "2026-02-05",
    readTime: "6 min read",
    tags: ["Compliance", "Security", "Small Business", "DevOps"],
    category: "Security & Compliance",
    excerpt:
      "You do not need OPA to start with Policy as Code. Pre-commit hooks and GitHub Actions are already in your stack. The question is whether you are using them deliberately.",
    sections: [
      {
        paragraphs: [
          `Mention Policy as Code in most small business engineering conversations and you will get one of two reactions: eyes glazing over at the enterprise jargon, or mild panic at the prospect of learning Rego. Both reactions are understandable. Both are slightly missing the point.`,
          `Policy as Code is not a product or a specific platform. It is a principle: encode your rules as software rather than documents, so they are enforced automatically rather than remembered inconsistently. You can start implementing it this afternoon with tools you already have.`,
        ],
      },
      {
        heading: "Why Small Teams Actually Need This More",
        paragraphs: [
          `Large enterprises have compliance teams, security review boards, and manual checkpoints embedded into their processes. Tedious and slow as those processes are, they catch things. A team of four engineers has none of that. There is no one whose job it is to check whether the new developer left an S3 bucket world-readable, or whether the staging environment is still running a dependency with a known CVE from eight months ago.`,
          `The smaller the team, the more each person relies on the others to remember the rules. Human memory is not a reliable policy enforcement mechanism. It degrades under pressure, varies between individuals, and has no audit trail. Policy as Code is memory that does not forget, does not take days off, and produces logs.`,
        ],
      },
      {
        heading: "Start with Pre-Commit Hooks",
        paragraphs: [
          `The most accessible entry point is pre-commit hooks — scripts that execute before a git commit is allowed to complete. If the script exits with an error, the commit is blocked. Tools like pre-commit, the Python package that works across any language stack, make this straightforward to configure and share across a team.`,
          `In an afternoon, a small team can implement secret scanning with detect-secrets or gitleaks, blocking any commit that contains an API key, password, or private key pattern. They can add dependency vulnerability checks that flag known CVEs before they reach a branch, Terraform format and validate checks that catch syntax errors before code review, and lint rules that enforce coding standards without consuming reviewer attention on the trivial things.`,
          `Each of these is a policy. Each runs automatically on every commit. Each is in version control alongside your application code. That is Policy as Code, without a single line of Rego.`,
        ],
      },
      {
        heading: "GitHub Actions as Policy Enforcement",
        paragraphs: [
          `If your code lives on GitHub, you already have a reasonably capable policy enforcement platform available at no additional cost. GitHub Actions workflows can run security scans with Trivy, Snyk, or OWASP Dependency-Check against every pull request, check infrastructure plans before they are applied, enforce branch protection rules that require specific checks to pass before merging, and block merges when test coverage drops below a threshold.`,
          `None of this requires a dedicated security team to set up. None of it requires OPA. What it requires is one person allocating a day to write the workflows, and a team agreement that the checks are not optional and not skippable when the deadline is close. The second part is the genuinely hard part.`,
        ],
      },
      {
        heading: "The One Policy That Pays for Itself",
        paragraphs: [
          `If you implement nothing else, implement secret scanning. The number of small businesses that have suffered a developer accidentally committing an AWS access key to a public repository — and paid for it in cryptocurrency mining charges or data exfiltration — is higher than any of them would like to admit. A pre-commit hook running gitleaks takes ten minutes to configure. The alternative is explaining to customers why their data was accessed because a key appeared in a commit from eighteen months ago.`,
        ],
      },
      {
        heading: "Scaling It Gradually",
        paragraphs: [
          `Policy as Code does not need to be comprehensive on day one to be valuable. Start with the highest-consequence, lowest-effort checks. Add policies incrementally as you identify pain points. When a production incident could have been caught by an automated check, that is the signal to add the check and prevent the next occurrence.`,
          `Small businesses that build this habit early will grow into mid-sized companies with the infrastructure already in place. They will not need a policy as code initiative later — they will simply extend what they are already doing. The investment compounds quietly in the background while the team focuses on building the actual product.`,
        ],
      },
    ],
  },

  {
    slug: "best-time-to-ship-code",
    title: "The Best Time to Ship Code (It's Not When You Think)",
    date: "2026-01-22",
    readTime: "7 min read",
    tags: ["Deployment", "Engineering Culture", "DevOps"],
    category: "DevOps & Deployment",
    excerpt:
      "Never deploy on Friday is a risk management heuristic for teams that have not solved their deployment safety problem. If your deploys are risky enough that timing matters, you have a deployment problem.",
    sections: [
      {
        paragraphs: [
          `Every engineering team knows the rule: do not deploy on Friday. It is practically folklore at this point. The reasoning is surface-level sound — if something breaks on Friday afternoon, you are either cancelling your weekend or leaving a broken system until Monday. Neither outcome is good.`,
          `But here is the problem with that reasoning: it treats deployment risk as a fixed constant. It is not.`,
        ],
      },
      {
        heading: "The Actual Problem",
        paragraphs: [
          `If your deployment carries enough risk that the day of the week materially affects your weekend plans, you have a deployment problem. The day-of-week constraint is a symptom. The disease is a fragile, high-stakes, difficult-to-reverse release process.`,
          `High-consequence deployments happen for identifiable reasons: the changeset is large, accumulating weeks of work shipping at once. The rollback story is unclear or requires a manual process. Testing is insufficient or disconnected from production reality. The deployment modifies state that is genuinely hard to undo — database migrations without rollback scripts, tightly coupled configuration changes, external dependencies that cannot be cleanly reverted.`,
          `None of these problems are solved by avoiding Fridays. They are solved by improving the release process.`,
        ],
      },
      {
        heading: "What Low-Risk Deployments Look Like",
        paragraphs: [
          `Companies that deploy dozens or hundreds of times per day do not have a Friday rule. They have a different architecture. Feature flags decouple deployment from release. Code ships to production and sits dormant behind a flag. When the business is ready — when testing is complete, when the communication is drafted, when stakeholders have signed off — the flag flips. Rolling back is another flag flip. No redeployment, no downtime, no incident at 6pm on a Friday.`,
          `Canary and progressive delivery means new code starts serving 1% of traffic, then 10%, then the remainder — with automatic rollback if error rates cross a threshold. If something is wrong, the blast radius is limited by design. Comprehensive observability means the team knows within minutes whether a deployment changed system behaviour in ways that matter.`,
          `Short-lived branches and deliberately small changesets mean each deployment is a small, understandable delta from the previous state. The cognitive overhead of assessing risk is manageable because the change is manageable.`,
        ],
      },
      {
        heading: "So When Should You Deploy?",
        paragraphs: [
          `If you have built the infrastructure described above, the answer is: whenever the code is ready and the change has been validated. The time of day and day of the week do not determine risk when rollback takes thirty seconds and your monitoring tells you within two minutes whether something is wrong.`,
          `If you have not yet built that infrastructure, the pragmatic answer is during business hours, on days when your team is reachable and operating at capacity. Not because production is inherently more stable on Tuesdays, but because you need qualified people available to respond if something goes wrong. The Friday rule is a stopgap, not a strategy.`,
        ],
      },
      {
        heading: "The Case for Traffic-Aware Scheduling",
        paragraphs: [
          `There is one legitimate argument for time-based deployment constraints that survives even a mature deployment setup: customer traffic windows. If you are running a consumer platform with peak load on Friday evenings, deploying into peak traffic is not primarily a risk question — it is a blast radius question. A 0.1% error rate during peak affects ten times more customers than the same rate during trough.`,
          `Schedule deployments for your traffic valleys. Not because deployments are risky, but because you are choosing the moment when the fewest users are affected if something unexpected surfaces. That is a customer-centric decision. It is different from being afraid of your own deployment pipeline, and the distinction matters for how your team thinks about releases.`,
        ],
      },
    ],
  },

  {
    slug: "is-your-environment-truly-agile",
    title: "Is Your Environment Truly Agile?",
    date: "2026-01-08",
    readTime: "8 min read",
    tags: ["Agile", "Engineering Culture", "Leadership"],
    category: "Engineering Culture",
    excerpt:
      "Most agile environments are cargo cult agile — the ceremonies without the values. Two-week sprints that are mini waterfall. Retrospectives nobody acts on. The honest question is how long it takes your team to act on customer feedback.",
    sections: [
      {
        paragraphs: [
          `In 2001, seventeen software developers met at a ski resort in Utah and wrote the Agile Manifesto. It was one page long. It valued individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, and responding to change over following a plan.`,
          `It said nothing about two-week sprints. Nothing about story points. Nothing about Jira tickets, velocity charts, or SAFe. Nothing about any of the frameworks that now constitute a multi-billion dollar industry built entirely around the concept of agility. Something significant went wrong somewhere between 2001 and now.`,
        ],
      },
      {
        heading: "The Cargo Cult Problem",
        paragraphs: [
          `Cargo cult agile is the practice of adopting the rituals and artefacts of agile methodology without internalising the values behind them. It is the most common form of agile in large organisations today, and it is arguably more damaging than having no process at all, because it creates the appearance of responsiveness while preserving the underlying rigidity.`,
          `Signs you are operating in a cargo cult agile environment: sprint planning takes most of a day because scope is negotiated like a contract. Teams commit to a backlog and then spend the rest of the sprint managing expectations when reality does not cooperate. The retrospective is a calendar item that produces a list nobody looks at after the meeting. Velocity is used to compare teams against each other rather than as a team-specific forecasting tool. Managers attend standups to receive status updates rather than to remove blockers. Product roadmaps are planned twelve months out with quarterly commitments that must be met regardless of what is learned along the way.`,
          `These are the ceremonies without the substance. Two-week waterfall with different vocabulary.`,
        ],
      },
      {
        heading: "What SAFe Gets Wrong",
        paragraphs: [
          `SAFe — the Scaled Agile Framework — is perhaps the clearest example of agility that has been reverse-engineered into bureaucracy. It introduces Program Increment planning events, Agile Release Trains, Solution Trains, and a taxonomy of roles and artefacts that takes months to understand, let alone implement effectively.`,
          `The promise is enterprise-wide alignment and coordinated delivery across large teams. The reality, in most implementations, is that teams slow down compared to what they had before, while producing evidence of agile transformation for senior leadership. You can attend a SAFe certification course and graduate without having engaged seriously with the question of how to respond to change faster. You will, however, understand the organisational chart thoroughly.`,
          `This is not to dismiss SAFe entirely. Organisations with genuine coordination challenges across hundreds of engineers doing genuinely interdependent work need structure. But for most companies adopting it, SAFe is a way of doing agile that feels controllable to executives — which is, ironically, precisely what agile was invented to push back against.`,
        ],
      },
      {
        heading: "What Genuine Agility Looks Like",
        paragraphs: [
          `Actually agile teams share properties that have nothing to do with frameworks. They have genuine authority over how they work — not just the ability to rearrange tickets in a sprint, but real autonomy over process, tooling, and technical decisions within their domain. They talk to customers regularly, not through a product manager proxy at quarterly reviews, but in ways where engineers understand what they are building and why.`,
          `They ship frequently — not because a framework mandates it, but because frequent delivery is how you stay calibrated with reality. The feedback loop is the mechanism. Everything else is scaffolding that may or may not serve it. They change direction when evidence demands it, without a change control process that takes three weeks to approve a pivot.`,
        ],
      },
      {
        heading: "The Honest Question",
        paragraphs: [
          `How long does it take your team to act on a meaningful piece of customer feedback? If the answer is measured in weeks or months — from the moment the feedback is received to the moment something ships in response to it — you are not operating agilely. The sprint board does not change that.`,
          `The purpose of agile is to shorten the distance between learning and responding. If your environment has ceremonies but no shortening of that distance, you have agility as theatre. The honest conversation, which most organisations avoid, is to measure the actual cycle time from customer signal to shipped response and ask what would need to change to cut it in half.`,
        ],
      },
    ],
  },

  {
    slug: "best-branching-strategy",
    title: "Why Trunk-Based Development Is the Branching Strategy You've Been Looking For",
    date: "2025-12-17",
    readTime: "9 min read",
    tags: ["Git", "Engineering", "DevOps", "Best Practices"],
    category: "DevOps & Deployment",
    excerpt:
      "GitFlow is complex for reasons most teams do not actually have. Long-lived feature branches are the enemy of continuous integration. Trunk-based development, with feature flags, resolves most of the objections.",
    sections: [
      {
        paragraphs: [
          `The branching strategy debate in software engineering is nearly theological. Teams adopt GitFlow, defend it with genuine conviction, and then spend years working around the friction it creates. Others go to the opposite extreme — everyone commits directly to main, integration breaks constantly, and they reach for structure. There is a better path, and it has been practised at organisations like Google for decades. It remains underused because it challenges assumptions about what safe branching should look like.`,
        ],
      },
      {
        heading: "The Problem with Long-Lived Branches",
        paragraphs: [
          `GitFlow, in its canonical form, involves a develop branch, feature branches off develop, release branches, hotfix branches, and a main branch representing production. Each element has a rationale. Collectively they create a model that makes sense on a whiteboard and produces real pain in practice.`,
          `The core problem is duration. A feature branch that lives for two weeks is a commitment made two weeks ago, against a codebase state that no longer exists. Merging it back means integrating two weeks of diverged reality. The longer the branch, the more painful the merge, and the more likely it is that what you built no longer fits what the rest of the codebase needs.`,
          `Merge conflicts are the visible symptom. The invisible symptom is the slower feedback loop — you do not discover whether your feature integrates cleanly until the moment you attempt to merge it, which is often the worst possible moment: when you are already close to a deadline and the integration surface is largest.`,
        ],
      },
      {
        heading: "What Trunk-Based Development Actually Proposes",
        paragraphs: [
          `Trunk-based development is simple in principle: everyone integrates to the trunk — main, master, whatever you call it — at least once per day. Feature branches, where they exist at all, are short-lived: hours to a couple of days at most, never weeks.`,
          `The mental model shift is significant. Instead of I will work on this for two weeks and then merge, it becomes I will commit the foundation today, build incrementally, and integrate against reality continuously. The work is smaller, more frequently integrated, and validated against the actual state of the codebase much sooner. Problems surface when they are small.`,
        ],
      },
      {
        heading: "Feature Flags Are What Make This Possible",
        paragraphs: [
          `The obvious objection: if I am committing to trunk daily, how do I ship half-built features without breaking the product for users? The answer is feature flags, also called feature toggles. They allow code to exist in production in a dormant state until it is explicitly activated, independently of when it was deployed.`,
          `You can commit an incomplete checkout flow to main today, wrap it in a flag, deploy it, and it simply does not exist for users until you choose to enable it. This decouples deployment — code reaching production — from release — users seeing the feature. It is a genuinely important distinction that resolves most of the practical objections to trunk-based development.`,
        ],
      },
      {
        heading: "Addressing the Real Objections",
        paragraphs: [
          `Junior engineers might break main. The answer is continuous integration — if you have automated tests and quality checks running before merge is permitted, a failing commit does not break the trunk, it gets caught and rejected. The discipline is in the CI pipeline, not in the branch topology.`,
          `We have multiple releases in flight simultaneously. Feature flags handle dormant features cleanly. For organisations with strict release versioning requirements, short-lived release branches cut from main at release time — not developed there — are fully compatible with trunk-based development.`,
          `Our codebase is too large for everyone on the same trunk. Google runs a monorepo of billions of lines of code on a trunk-based model, with hundreds of engineers committing daily. This is an engineering challenge with known solutions. It is not a fundamental objection to the approach.`,
        ],
      },
      {
        heading: "The Compounding Benefit",
        paragraphs: [
          `The real case for trunk-based development is not any single argument. It is what accumulates over time when teams integrate continuously. They tend to develop better test coverage, because they need it. They tend to maintain healthier codebases, because they feel the friction of poor design decisions sooner and correct them when the correction is still cheap. They tend to deliver faster, because there is no merge debt accumulating in parallel branches waiting to be reckoned with.`,
          `The branching strategy shapes the team's habits more than most engineering leaders recognise. Long-lived branches teach teams that integration is an event to be scheduled. Trunk-based development teaches them that integration is a continuous practice. The second set of habits produces better software, faster. Choose your defaults carefully.`,
        ],
      },
    ],
  },

  {
    slug: "best-deployment-strategy",
    title: "We've Decided This Is the Best Deployment Strategy",
    date: "2025-12-03",
    readTime: "8 min read",
    tags: ["Deployment", "DevOps", "Infrastructure", "Engineering"],
    category: "DevOps & Deployment",
    excerpt:
      "There is no universal answer, but progressive delivery with feature flags wins in most production contexts. What matters more than strategy selection is having a credible, practised rollback story.",
    sections: [
      {
        paragraphs: [
          `Every engineering team eventually has to answer the question: how does code get from here to production? The answer is not purely a technical choice. It is a reflection of your risk tolerance, your operational maturity, your team's on-call culture, and what you are willing to invest in reliability. We have thought carefully about this across a range of client environments. Here is where we have landed and why.`,
        ],
      },
      {
        heading: "The Options, Honestly Assessed",
        paragraphs: [
          `Recreate deployment — shut down the old version, deploy the new one — is simple to reason about and guarantees downtime. Acceptable only when your users either do not notice or genuinely do not care: internal tooling, nightly batch jobs, development environments. For anything customer-facing in 2025, take this option off the table unless you have a contractual maintenance window and your customers have agreed to it.`,
          `Rolling deployment updates instances one by one. Some users hit the old version while others hit the new one. No downtime, but you have a mixed-version window during the rollout. This creates complexity if your change involves API or schema changes that break backwards compatibility. It works well for stateless services where disciplined backwards-compatible deploys are a team habit.`,
          `Blue-green deployment runs two identical environments simultaneously. Traffic goes to blue. You deploy to green. You switch the load balancer. If something is wrong, you switch it back. Elegant, clean rollback story, and easy to reason about. The cost is running double the infrastructure during deployment, which is either negligible or significant depending on your scale and cloud spend.`,
          `Canary deployment gradually exposes new code to increasing percentages of traffic, with automatic rollback triggered by error rate or latency thresholds. You catch issues when they affect 1% of users, not 100%. This is the most sophisticated option and, for most production services where user experience matters, the most appropriate one.`,
        ],
      },
      {
        heading: "Where Feature Flags Fit",
        paragraphs: [
          `Feature flags deserve separate consideration because they change the nature of the question. If you are using flags properly, deployment and release are different events with different risk profiles. You can deploy any time because the user-visible change is controlled independently through the flag system. This dramatically lowers the stakes of the deployment mechanism itself.`,
          `Teams that invest in feature flag infrastructure often find that their choice of deployment strategy becomes less consequential over time, because each deployment is smaller and its user impact is more precisely controlled. The deployment strategy handles infrastructure risk. The flag system handles product risk. Separating those concerns is valuable.`,
        ],
      },
      {
        heading: "Our Recommendation",
        paragraphs: [
          `For most production services where user experience is a genuine concern: canary deployments with automatic rollback triggers, paired with feature flags for user-visible changes. This combination gives you granular control over blast radius at both the infrastructure and product layer simultaneously.`,
          `For organisations earlier in their reliability journey, where the monitoring and tooling for canary is not yet in place: blue-green. It is straightforward to understand, has a clean rollback story, and forces healthy infrastructure-as-code practices because managing two environments manually is untenable at any meaningful scale.`,
          `For internal tooling or services with genuinely low downtime sensitivity and low traffic: rolling deployments. Pragmatic, sufficient, and low overhead to maintain.`,
        ],
      },
      {
        heading: "The Rollback Question",
        paragraphs: [
          `Whatever strategy you choose, answer this question first and honestly: if a deployment goes wrong, how do you return to the previous state, and how long does it actually take? Not in theory — in practice, under stress, at 11pm.`,
          `If the answer is we would need to do a hotfix release and that takes two hours, your deployment strategy is downstream of a more fundamental problem: your releases are not reversible. The strategy you choose matters far less than having a rollback procedure that is credible, tested, and genuinely understood by the people on call.`,
          `Deploy the strategy that makes rollback obvious and practised. Run rollback drills. Know the answer before you need it. Optimise for recovery speed, not just deployment speed. The teams that handle incidents best are not the ones who have the fewest deployments — they are the ones who have made recovery a normal, practiced capability rather than a panic response.`,
        ],
      },
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const current = getPostBySlug(slug)
  if (!current) return []
  // Score by shared tags + same category
  const scored = blogPosts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const sharedTags = p.tags.filter((t) => current.tags.includes(t)).length
      const sameCategory = p.category === current.category ? 2 : 0
      return { post: p, score: sharedTags + sameCategory }
    })
    .sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime())
  return scored.slice(0, count).map((s) => s.post)
}
