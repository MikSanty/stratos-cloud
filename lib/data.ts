export const BRAND = {
  name: "Stratos",
  tagline: "Infrastructure at the Speed of Thought",
  description:
    "Stratos helps teams build, scale, and monitor applications with enterprise-grade cloud infrastructure. From edge computing to real-time analytics, we power the next generation of digital experiences.",
  logoIcon: "solar:cloud-bold-duotone",
  logoIconLinear: "solar:cloud-linear",
};

export const NAV_ITEMS = [
  { label: "Home", href: "#hero", icon: "solar:home-2-bold-duotone" },
  { label: "Features", href: "#features", icon: "solar:widget-5-bold-duotone" },
  { label: "Solutions", href: "#solutions", icon: "solar:layers-bold-duotone" },
  { label: "Workflow", href: "#workflow", icon: "solar:routing-2-bold-duotone" },
  { label: "Company", href: "#company", icon: "solar:buildings-2-bold-duotone" },
  { label: "Pricing", href: "#pricing", icon: "solar:tag-price-bold-duotone" },
  { label: "Testimonials", href: "#testimonials", icon: "solar:chat-round-dots-bold-duotone" },
  { label: "Contact", href: "#contact", icon: "solar:letter-bold-duotone" },
];

export const FEATURES = [
  {
    icon: "solar:chart-2-bold-duotone",
    title: "Real-Time Analytics",
    description: "Stream and analyze billions of events per second with sub-millisecond latency dashboards.",
    stat: "< 1ms",
    statLabel: "p99 latency",
  },
  {
    icon: "solar:global-bold-duotone",
    title: "Edge Network",
    description: "Deploy workloads to 310+ edge locations worldwide for ultra-low latency at global scale.",
    stat: "310+",
    statLabel: "edge nodes",
  },
  {
    icon: "solar:shield-check-bold-duotone",
    title: "Zero-Trust Security",
    description: "End-to-end encryption, SOC 2 Type II certified, with automated threat detection and response.",
    stat: "99.97%",
    statLabel: "threat block rate",
  },
  {
    icon: "solar:server-bold-duotone",
    title: "Five-Nines Uptime",
    description: "Multi-region failover with automatic healing ensures your services never go offline.",
    stat: "99.999%",
    statLabel: "uptime SLA",
  },
  {
    icon: "solar:code-square-bold-duotone",
    title: "Developer API",
    description: "RESTful and GraphQL APIs with SDKs for 12 languages. Ship integrations in minutes, not weeks.",
    stat: "12",
    statLabel: "SDK languages",
  },
  {
    icon: "solar:cpu-bolt-bold-duotone",
    title: "AI Infrastructure",
    description: "GPU clusters optimized for inference and training. Run foundation models at production scale.",
    stat: "40x",
    statLabel: "faster inference",
  },
];

export const SOLUTIONS = [
  {
    id: "analytics",
    title: "Real-Time Analytics",
    subtitle: "See everything. Miss nothing.",
    description:
      "Ingest petabytes of streaming data and surface actionable insights in real time. Our columnar engine processes complex aggregations across distributed datasets without breaking a sweat.",
    highlights: ["Sub-second query times", "Petabyte-scale ingestion", "200+ pre-built connectors", "Custom dashboards & alerts"],
    icon: "solar:graph-up-bold-duotone",
  },
  {
    id: "edge",
    title: "Edge Computing",
    subtitle: "Compute where your users are.",
    description:
      "Push workloads to the network edge for single-digit millisecond response times. Our serverless edge runtime handles cold starts in under 5ms with zero configuration.",
    highlights: ["< 5ms cold starts", "Automatic geo-routing", "Edge-native databases", "WebSocket & SSE support"],
    icon: "solar:global-bold-duotone",
  },
  {
    id: "devops",
    title: "DevOps Automation",
    subtitle: "Ship faster. Sleep better.",
    description:
      "Automate your entire deployment pipeline from commit to production. Built-in canary releases, rollback protection, and infrastructure-as-code templates.",
    highlights: ["GitOps-native workflows", "Canary & blue-green deploys", "Auto-scaling policies", "Cost anomaly detection"],
    icon: "solar:routing-2-bold-duotone",
  },
  {
    id: "security",
    title: "Security & Compliance",
    subtitle: "Enterprise-grade by default.",
    description:
      "Zero-trust architecture with automated compliance reporting. Meet SOC 2, HIPAA, GDPR, and FedRAMP requirements without slowing down your teams.",
    highlights: ["Automated audit trails", "Role-based access control", "Secrets management", "Vulnerability scanning"],
    icon: "solar:shield-check-bold-duotone",
  },
];

export const WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Connect Your Stack",
    description: "Link your repositories, registries, and cloud accounts in under two minutes with our guided setup wizard.",
    icon: "solar:plug-circle-bold-duotone",
  },
  {
    number: "02",
    title: "Configure Pipelines",
    description: "Define build, test, and deploy stages with our visual pipeline editor or declarative YAML configs.",
    icon: "solar:settings-bold-duotone",
  },
  {
    number: "03",
    title: "Deploy Globally",
    description: "Push to any region with a single command. Traffic splits, canary releases, and rollbacks are automatic.",
    icon: "solar:rocket-2-bold-duotone",
  },
  {
    number: "04",
    title: "Monitor & Optimize",
    description: "Real-time metrics, distributed tracing, and AI-powered anomaly detection keep your systems healthy.",
    icon: "solar:chart-2-bold-duotone",
  },
];

export const COMPANY_STATS = [
  { value: 99.999, suffix: "%", label: "Uptime Guarantee" },
  { value: 310, suffix: "+", label: "Edge Locations" },
  { value: 58, suffix: "M+", label: "API Calls / Day" },
  { value: 2800, suffix: "+", label: "Enterprise Clients" },
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    description: "For small teams getting started with cloud infrastructure.",
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: [
      "Up to 5 team members",
      "10 GB storage",
      "100K API requests / mo",
      "Community support",
      "Basic analytics dashboard",
      "2 environments",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing teams that need advanced tooling and scale.",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "Up to 25 team members",
      "500 GB storage",
      "5M API requests / mo",
      "Priority support (< 4hr SLA)",
      "Advanced analytics & alerts",
      "Unlimited environments",
      "Custom domains & SSL",
      "Role-based access control",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For organizations with custom requirements and compliance needs.",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Unlimited API requests",
      "Dedicated support engineer",
      "Custom SLA (up to 99.999%)",
      "SOC 2 & HIPAA compliance",
      "SSO & SCIM provisioning",
      "Private edge network",
      "On-premise deployment option",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "Luminary Health",
    quote: "Stratos cut our deployment times by 80% and gave us the confidence to ship multiple times a day. The edge network is genuinely transformative.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Marcus Rivera",
    role: "CTO",
    company: "FinScope Analytics",
    quote: "We migrated our entire data pipeline to Stratos in three weeks. The real-time analytics alone justified the switch — we're seeing insights 40x faster.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Aisha Patel",
    role: "Head of DevOps",
    company: "NovaTech Systems",
    quote: "The zero-trust security model and automated compliance reporting saved our team hundreds of hours. SOC 2 audits went from a nightmare to a formality.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "James Thornton",
    role: "Principal Architect",
    company: "Orbiter Labs",
    quote: "Five-nines uptime isn't just marketing — we've had zero unplanned downtime in 18 months. The multi-region failover is the real deal.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Elena Vasquez",
    role: "Director of Platform",
    company: "Meridian Commerce",
    quote: "Our API response times dropped from 200ms to 12ms after moving to Stratos Edge. Our customers noticed the difference immediately.",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    name: "David Kim",
    role: "Staff Engineer",
    company: "Apex Robotics",
    quote: "The GPU inference infrastructure handles our ML models at scale without us managing a single server. It just works — and it's fast.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

export const COMPANY_LOGOS = [
  { name: "NASA", icon: "simple-icons:nasa" },
  { name: "SpaceX", icon: "simple-icons:spacex" },
  { name: "Uber", icon: "simple-icons:uber" },
  { name: "Visa", icon: "simple-icons:visa" },
  { name: "Grab", icon: "simple-icons:grab" },
  { name: "Bose", icon: "simple-icons:bose" },
  { name: "Discover", icon: "simple-icons:discover" },
  { name: "DJI", icon: "simple-icons:dji" },
  { name: "Nikon", icon: "simple-icons:nikon" },
  { name: "Craftsman", icon: "simple-icons:craftsman" },
  { name: "Sony", icon: "simple-icons:sony" },
];

export const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
    { label: "Documentation", href: "#" },
  ],
  Company: [
    { label: "About", href: "#company" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
    { label: "Partners", href: "#" },
  ],
  Resources: [
    { label: "Community", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Status", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Tutorials", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Security", href: "#" },
  ],
};

export const SOCIAL_LINKS = [
  { icon: "simple-icons:x", href: "#", label: "X (Twitter)" },
  { icon: "simple-icons:github", href: "#", label: "GitHub" },
  { icon: "simple-icons:linkedin", href: "#", label: "LinkedIn" },
  { icon: "simple-icons:discord", href: "#", label: "Discord" },
];
