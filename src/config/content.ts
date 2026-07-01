import type { ImageMetadata } from "astro";
// Imported from src/assets so Astro's build pipeline emits optimized WebP +
// srcset. Public copies under /assets/images are kept for JSON-LD/OG URLs.
import profilePhoto from "../assets/images/about/dennis-oezmen.png";
import consumerElectronicsImg from "../assets/images/projects/consumer-electronics-store.jpg";
import fashionEcommerceImg from "../assets/images/projects/fashion-ecommerce-us.jpg";
import cybersecurityImg from "../assets/images/projects/project3.png";
import pottsalatImg from "../assets/images/projects/pottsalat.jpg";

export const siteConfig = {
  name: "Dennis Özmen",
  title: "Dennis Özmen | SEO, GEO & Digital Marketing",
  description:
    "Strategic SEO and digital marketing expert with 10+ years of experience scaling organic visibility, GEO, and marketing automation.",
  social: {
    linkedin: "https://www.linkedin.com/in/dennisoezmen/",
    github: "https://github.com/ozmenius",
  },
};

export const homeContent = {
  title: "Hi, I'm Dennis Özmen",
  description:
    "Strategic SEO and digital marketing expert with 10+ years of experience — from classic search optimization to Generative Engine Optimization and AI-powered marketing automation. I scale organic visibility, cut acquisition costs, and lead international teams.",
  buttons: {
    about: {
      text: "About Me",
      href: "/about/",
    },
    posts: {
      text: "Read Posts",
      href: "/posts/",
    },
  },
  image: {
    src: profilePhoto,
    alt: "Dennis Özmen",
  },
  images: {
    light: "https://multiplepage-portfolio.edgeone.app/assets/images/tech-background-light.svg",
    dark: "/assets/images/tech-background-dark.svg",
  },
};

type ExperienceItem = {
  period: string;
  position: string;
  company: string;
  description?: string;
  summary?: string;
  resultsTitle?: string;
  results?: { label?: string; metrics: string[] }[];
};

export const aboutContent = {
  meta: {
    title: "About",
    description:
      "SEO & digital marketing expert with 10+ years of experience in SEO, GEO, CRO, email marketing, and content.",
  },
  title: "About Me",
  description:
    "Strategic SEO and digital marketing expert with 10+ years of experience scaling organic visibility, cutting acquisition costs, and leading international teams. I build cross-channel strategies with measurable impact — from classic SEO to Generative Engine Optimization — and design AI-powered automation for SEO teams with n8n, KNIME, and Claude. Native German and Turkish, fluent English (C1).",
  skills: [
    "SEO",
    "GEO",
    "CRO",
    "Email Marketing",
    "Content Strategy",
    "Marketing Automation",
    "Node.js",
    "Astro",
    "WordPress",
    "Data Analytics",
    "Team Leadership",
  ],
  image: {
    src: profilePhoto,
    alt: "Dennis Özmen",
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "Mar 2024 – Present",
        position: "Team Lead, SEO",
        company: "Neil Patel Digital (Düsseldorf)",
        summary:
          "Lead a team of in-house SEO managers and freelancers across a portfolio of 20+ international clients spanning fintech, e-commerce, cybersecurity SaaS, and enterprise MedTech. Own strategy, roadmaps, and P&L optimization, and build AI-powered, no-code SEO automation.",
        resultsTitle: "Selected results",
        results: [
          {
            label: "Consumer Electronics Store (DE/EU)",
            metrics: ["+150% visibility", "+4M organic traffic (YoY)"],
          },
          {
            label: "Fashion e-commerce (US)",
            metrics: ["+53.5% revenue", "+110% top-10 rankings (YoY)"],
          },
          {
            label: "B2B cybersecurity SaaS",
            metrics: ["+51.5% AI-search traffic", "+84.5% impressions (HoH)"],
          },
          {
            label: "MedTech enterprise",
            metrics: ["+17.1% traffic", "+25.2% keyword rankings (YoY)"],
          },
        ],
      },
      {
        period: "Nov 2022 – Feb 2024",
        position: "Search Manager SEO & SEA",
        company: "Pottsalat GmbH (Essen)",
        summary:
          "Drove SEO, SEA, and email marketing for a fresh-food e-commerce brand — combining technical SEO, offpage, and paid to scale visibility while cutting acquisition costs.",
        resultsTitle: "Key results",
        results: [
          {
            metrics: [
              "Sistrix visibility ×2",
              "+135% top-10 keywords",
              "CPA €35 → €15",
              "Email CTR 1.3% → 1.96%",
              "66% cost savings",
            ],
          },
        ],
      },
      {
        period: "Mar 2020 – Oct 2022",
        position: "Online Marketing Manager",
        company: "myBait GmbH (Oberhausen)",
        description:
          "Built SEO-driven content strategies and automated email workflows, growing organic reach through data-driven optimization and social media.",
      },
      {
        period: "Sep 2019 – Feb 2020",
        position: "PR & Fundraising",
        company: "YOU Foundation (Düsseldorf)",
        description:
          "Ran PR, email, and social media campaigns to drive donations for a children's education nonprofit.",
      },
      {
        period: "Dec 2017 – Oct 2018",
        position: "Working Student, SEO Content",
        company: "StepStone Continental Europe S.E. (Düsseldorf)",
        description:
          "Created and optimized SEO content for landing pages — including a redesign of the career-tips section — and led keyword research to grow organic traffic.",
      },
    ] as ExperienceItem[],
  },
  connect: {
    title: "Let's Connect",
  },
};

type ProjectMetric = { value: string; label: string };
type ProjectStorySection = { heading: string; body: string };
type Project = {
  slug: string;
  name: string;
  title: string;
  description: string;
  image: string; // public path — used for JSON-LD / OG absolute URLs
  imageAsset: ImageMetadata; // imported asset — optimized (WebP + srcset) for display
  href: string;
  category: string;
  period: string;
  summary: string;
  metrics: ProjectMetric[];
  story: ProjectStorySection[];
  services: string[];
};

// Add a new project by appending an object here — its `/projects/<slug>/` page,
// listing card, and JSON-LD schema are all generated automatically. `href` is
// derived from `slug` below, so you never set it (or the markup) by hand.
const projectInputs: Omit<Project, "href">[] = [
  {
    slug: "consumer-electronics-store",
    name: "Consumer Electronics Store (DE/EU)",
    title: "Consumer Electronics Store (DE/EU) — +150% Visibility",
    description:
      "+150% visibility, +110% top-3 rankings, and +4M organic visits YoY by rebuilding category-level SEO.",
    image: "/assets/images/projects/consumer-electronics-store.jpg",
    imageAsset: consumerElectronicsImg,
    category: "E-Commerce SEO",
    period: "12-month SEO program",
    summary:
      "How a high-SKU consumer electronics retailer rebuilt its organic foundation and more than doubled search visibility in twelve months.",
    metrics: [
      { value: "+150%", label: "Organic visibility (YoY)" },
      { value: "+110%", label: "Top-3 rankings (YoY)" },
      { value: "+4M", label: "Additional organic visits (YoY)" },
    ],
    story: [
      {
        heading: "The Challenge",
        body: "With thousands of product and category pages, the store was leaving organic growth on the table. Faceted navigation created crawl waste and duplicate URLs, category content was thin, and the most commercial pages were slipping out of the top three — losing ground to marketplaces on exactly the terms that drive revenue.",
      },
      {
        heading: "The Approach",
        body: "We rebuilt the SEO architecture from the category level up: consolidated and de-duplicated faceted URLs, fixed indexation and internal linking so authority flowed to money pages, and shipped data-driven category content tied to real search demand. A parallel technical track — Core Web Vitals, product and review structured data — made the highest-value pages eligible for rich results.",
      },
      {
        heading: "The Results",
        body: "Within twelve months organic visibility grew +150% and top-3 rankings +110%, while the store captured over 4 million additional organic visits year-over-year. Category pages went from an afterthought to the channel's single biggest growth driver.",
      },
    ],
    services: [
      "Technical SEO",
      "Category & product content",
      "Internal linking",
      "Structured data",
      "Core Web Vitals",
    ],
  },
  {
    slug: "fashion-ecommerce-us",
    name: "Fashion E-Commerce (US)",
    title: "Fashion E-Commerce (US) — +53.5% Revenue",
    description:
      "+53.5% revenue, +91.8% users, and +110% top-10 rankings YoY through combined SEO and CRO.",
    image: "/assets/images/projects/fashion-ecommerce-us.jpg",
    imageAsset: fashionEcommerceImg,
    category: "E-Commerce SEO & CRO",
    period: "Year-over-year program",
    summary:
      "Pairing SEO with conversion optimization to turn a growing US fashion brand's traffic into revenue.",
    metrics: [
      { value: "+53.5%", label: "Revenue (YoY)" },
      { value: "+91.8%", label: "Users (YoY)" },
      { value: "+110%", label: "Top-10 rankings (YoY)" },
    ],
    story: [
      {
        heading: "The Challenge",
        body: "The brand attracted plenty of visitors but converted too few of them, while organic rankings had plateaued just outside the top 10 for its highest-intent collection and product terms. Growth in traffic alone wasn't translating into growth in revenue.",
      },
      {
        heading: "The Approach",
        body: "We ran SEO and CRO as a single program. On the SEO side: collection-page optimization, intent-matched content, and technical fixes to break into the top 10 on commercial queries. On the CRO side: streamlined product and checkout journeys, clearer merchandising, and tested page layouts so the additional traffic actually converted.",
      },
      {
        heading: "The Results",
        body: "Top-10 rankings grew +110% and users +91.8% year-over-year — but the headline is +53.5% revenue. The added traffic was the right traffic, captured by a site that finally converted it.",
      },
    ],
    services: [
      "Collection-page SEO",
      "CRO",
      "Content",
      "Technical SEO",
      "Conversion testing",
    ],
  },
  {
    slug: "b2b-cybersecurity-saas",
    name: "B2B Cybersecurity SaaS",
    title: "B2B Cybersecurity SaaS — +51.5% AI-Search Traffic",
    description:
      "+84.5% impressions, +46.6% non-brand traffic, and +51.5% AI-search traffic HoH via GEO and technical SEO.",
    image: "/assets/images/projects/project3.png",
    imageAsset: cybersecurityImg,
    category: "GEO & Technical SEO",
    period: "Half-over-half program",
    summary:
      "Optimizing a B2B cybersecurity platform for the next search frontier — AI Overviews, ChatGPT, and answer engines — without losing classic organic ground.",
    metrics: [
      { value: "+51.5%", label: "AI-search traffic (HoH)" },
      { value: "+84.5%", label: "Impressions (HoH)" },
      { value: "+46.6%", label: "Non-brand traffic (HoH)" },
    ],
    story: [
      {
        heading: "The Challenge",
        body: "The platform leaned heavily on branded search and was barely visible in AI-generated answers — precisely where security buyers now begin their research. Non-brand discovery was the gap between a known name and a default shortlist pick.",
      },
      {
        heading: "The Approach",
        body: "We built a GEO program on top of solid technical SEO: passage-level, citable content that answers buyer questions directly, entity and schema markup to make the brand machine-readable, and an llms.txt and crawler strategy to keep the site accessible to AI engines. Classic technical work — indexation, internal linking, performance — reinforced the foundation.",
      },
      {
        heading: "The Results",
        body: "Half-over-half, AI-search traffic grew +51.5%, impressions +84.5%, and non-brand traffic +46.6%. The brand moved from invisible to cited across AI answer engines, while expanding reach well beyond its own name.",
      },
    ],
    services: [
      "GEO",
      "Technical SEO",
      "Schema & entities",
      "Content",
      "AI-crawler optimization",
    ],
  },
  {
    slug: "pottsalat",
    name: "Pottsalat",
    title: "Pottsalat — +135.8% Top-10 Keywords",
    description:
      "+135.8% top-10 keywords, 2x Sistrix visibility, and -57% cost per acquisition through combined SEO and PPC.",
    image: "/assets/images/projects/pottsalat.jpg",
    imageAsset: pottsalatImg,
    category: "SEO & PPC",
    period: "15-month program (Nov 2022 – Feb 2024)",
    summary:
      "Running organic and paid search side by side to grow visibility for the Ruhr-area salad and bowl brand Pottsalat while cutting acquisition costs.",
    metrics: [
      { value: "+135.8%", label: "Top-10 keywords" },
      { value: "2x", label: "Sistrix visibility index" },
      { value: "-57%", label: "Cost per acquisition" },
    ],
    story: [
      {
        heading: "The Challenge",
        body: "Pottsalat's category and location pages were thin and generic, organized around internal naming rather than how people actually searched, leaving real keyword demand uncaptured. On the paid and lifecycle side, the stack had outgrown its budget: Klaviyo billed per contact in the database rather than per email sent, and Adspert's automated bidding layer added significant cost on top of Google Ads. Brand-term clicks alone cost close to €0.09, and the resulting cost per acquisition exceeded the average order value — every paid acquisition was a net loss before margin was even considered.",
      },
      {
        heading: "The Approach",
        body: "After comprehensive keyword research, we rebuilt the site's category and location landing pages around search intent — replacing generic catch-alls with dedicated pages mapped to the exact terms and categories people were searching for. On paid search, we canceled Adspert and rebuilt the Google Ads account by hand, moving to Smart Bidding strategies and using custom scripts to continuously monitor and optimize campaign structure and performance. On email, we replaced Klaviyo with Brevo to switch from per-contact to per-email pricing, cutting costs immediately, then built out several automation workflows in Brevo and ran A/B tests to improve them further. Brevo also unlocked WhatsApp as a new newsletter channel.",
      },
      {
        heading: "The Results",
        body: "The intent-matched landing pages didn't just lift visibility — they acquired customers who hadn't found Pottsalat before. Average rankings improved from position 30.7 to 26.4, with top-10 keywords up +135.8% and the Sistrix visibility index doubling. Backlinks grew +71.7%, cost per acquisition fell -57% (€35 to €15), and brand CPC dropped from €0.09 to €0.02. Email click-through rate rose from 1.3% to 1.96% and open rate from 13.6% to 17.79%, at a 66.5% lower campaign cost.",
      },
    ],
    services: [
      "SEO",
      "SEA",
      "Local SEO",
      "Email Marketing",
      "Content & Webshop Optimization",
    ],
  },
];

const projects: Project[] = projectInputs.map((project) => ({
  ...project,
  href: `/projects/${project.slug}/`,
}));

export const projectsContent = {
  meta: {
    title: "Projects",
    description: "Selected SEO and digital marketing results",
  },
  title: "Selected Results",
  description:
    "A snapshot of measurable impact across SEO, GEO, and cross-channel marketing for international clients. Each result reflects year-over-year or half-over-half growth driven by strategy, technical SEO, and content.",
  projects,
};

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
