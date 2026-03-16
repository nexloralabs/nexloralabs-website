import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { MotionProvider } from "@/components/layout/MotionProvider";
import Script from "next/script";
import CookieConsent from "@/components/ui/CookieConsent";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexloralabs.com"),  // Domain unchanged — update when new domain is configured
  title: {
    default: "NexLora Labs — Freelance Software Engineering Team | Custom Dev, AI & Automation",
    template: "%s | NexLora Labs",
  },
  description:
    "NexLora Labs is a freelance engineering team that designs, builds, deploys & automates digital products for businesses of all sizes. Web, mobile, SaaS, AI & n8n automation — from idea to deployment.",
  keywords: [
    "custom software development team",
    "hire software engineers",
    "end-to-end product development",
    "fullstack development team for hire",
    "SaaS product development team",
    "AI software development",
    "web application development",
    "mobile app development team",
    "AI automation services",
    "business process automation",
    "n8n automation experts",
    "hire freelance engineers",
    "startup tech partner",
    "hire dedicated developers",
    "product design and development",
    "software consulting team",
    "MVP development for startups",
    "ecommerce development team",
    "DevOps and deployment services",
    "React developer for hire",
    "Node.js backend development",
    "Android and iOS app development",
    "AI workflow automation",
    "n8n workflow development",
    "automate business processes with AI",
    "intelligent automation for small business",
  ],
  authors: [{ name: "NexLora Labs", url: "https://nexloralabs.com" }],
  creator: "NexLora Labs",
  publisher: "NexLora Labs",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "NexLora Labs — Freelance Engineering Team | Custom Software, AI & Automation",
    description:
      "One engineering team. Every service. End to end. We design, build, deploy & automate digital products for startups, SMBs and enterprises.",
    url: "https://nexloralabs.com",
    siteName: "NexLora Labs",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NexLora Labs freelance engineering team — custom software development, AI automation and n8n workflows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexLora Labs — Freelance Engineering Team | Custom Software, AI & Automation",
    description:
      "One team. Every service. End to end. We build web apps, mobile apps, SaaS & AI automation for businesses of all sizes.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexLora Labs",
  url: "https://nexloralabs.com",
  logo: "https://nexloralabs.com/og-image.jpg",
  description:
    "NexLora Labs is a freelance engineering team that designs, builds, deploys, and automates digital products for businesses of all sizes — from startups to enterprises.",
  email: "nexloralabs@gmail.com",
  telephone: "+919505231281",
  sameAs: [
    "https://twitter.com/nexloralabs",
    "https://www.instagram.com/nexloralabs",
    "https://www.linkedin.com/company/nexloralabs",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  foundingDate: "2024",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 2,
    maxValue: 10,
  },
  knowsAbout: [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "SaaS Product Development",
    "AI Development & Integration",
    "AI Automation & Intelligent Workflows",
    "n8n Workflow Automation",
    "Business Process Automation",
    "UI/UX Design",
    "MVP Development",
    "Product Engineering",
    "DevOps & Cloud Deployment",
    "Technical Consulting",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NexLora Labs",
  url: "https://nexloralabs.com",
  description:
    "Freelance engineering team building web apps, mobile apps, SaaS platforms, AI solutions & n8n automations for businesses of all sizes.",
  publisher: {
    "@type": "Organization",
    name: "NexLora Labs",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://nexloralabs.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NexLora Labs — Freelance Software Engineering Team",
  url: "https://nexloralabs.com",
  description:
    "End-to-end custom software development, AI automation, and n8n workflow engineering for startups, small businesses, and enterprises. One engineering team — every service — from idea to deployment.",
  telephone: "+919505231281",
  email: "nexloralabs@gmail.com",
  priceRange: "$$",
  image: "https://nexloralabs.com/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "20",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development & Automation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Application Development",
          description: "End-to-end web application development with React, Next.js, and Node.js — built for scale by our dedicated engineering team.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development (Android & iOS)",
          description: "Native and cross-platform mobile applications for Android and iOS, built by experienced mobile engineers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Product Development",
          description: "Full-stack SaaS product development from architecture and design to deployment, scaling, and ongoing maintenance.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Development & Integration",
          description: "Custom AI development, LLM-powered features, intelligent automation, and AI integration into existing business workflows.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Automation & n8n Workflow Engineering",
          description: "Business process automation using AI and n8n workflows — replacing manual human tasks with intelligent automated systems.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "DevOps, Cloud Deployment & Infrastructure",
          description: "CI/CD pipelines, cloud infrastructure setup, performance optimization, and infrastructure scaling for production applications.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design",
          description: "Conversion-driven user interface and user experience design from wireframes to production, backed by user research.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MVP Development for Startups",
          description: "Rapid MVP development and market validation for startups and founders — from idea to a deployable product in weeks.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ecommerce Development",
          description: "Custom ecommerce platforms and online stores built for performance, conversion, and scale.",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is behind NexLora Labs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NexLora Labs is a dedicated freelance engineering team of senior software engineers, designers, and automation specialists. Every project is built by our core team — no outsourcing, no junior developers, no middlemen.",
      },
    },
    {
      "@type": "Question",
      name: "What custom software development services does NexLora Labs offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer end-to-end services: custom web application development, mobile app development (Android & iOS), SaaS product development, AI development & integration, AI automation & n8n workflow engineering, DevOps & cloud deployment, UI/UX design, ecommerce development, MVP prototyping, and technical consulting. We handle everything from idea to deployment.",
      },
    },
    {
      "@type": "Question",
      name: "What is the typical turnaround time for a software development project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small to medium apps: 4–6 weeks. Complex enterprise platforms or AI systems: 2–4 months. We scope realistically and deliver on time, every single time.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — 6 months of complimentary support after launch. This includes bug fixes, performance monitoring, security patches, and priority response within 24 hours. Your success is our success.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer AI automation and workflow automation services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we specialize in replacing manual business tasks with intelligent automated systems. We build custom AI automations and n8n workflows that save hours of manual work, reduce errors, and scale with your business. From simple task automation to complex multi-step AI workflows.",
      },
    },
    {
      "@type": "Question",
      name: "Can NexLora Labs work with businesses of any size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We partner with businesses of all sizes — solo founders with an idea, growing startups needing a tech team, SMBs looking to digitize operations, and established enterprises requiring custom software. One team, every service, end to end.",
      },
    },
    {
      "@type": "Question",
      name: "What is your pricing model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fair, transparent, and predictable. After the discovery call, you receive a detailed, fixed-price proposal — no hidden fees, no scope creep surprises. You approve everything before a single line of code is written.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://nexloralabs.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://nexloralabs.com/#services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Our Work",
      item: "https://nexloralabs.com/#work",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contact",
      item: "https://nexloralabs.com/contact",
    },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Siva Goram",
  jobTitle: "Lead Engineer & Founder",
  url: "https://nexloralabs.com",
  worksFor: {
    "@type": "Organization",
    name: "NexLora Labs",
  },
  knowsAbout: [
    "Full-Stack Development",
    "AI Automation",
    "n8n Workflow Engineering",
    "Product Engineering",
    "Cloud Architecture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              websiteSchema,
              serviceSchema,
              faqSchema,
              breadcrumbSchema,
              personSchema,
            ])
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} font-dm bg-bg-primary text-text-primary antialiased selection:bg-accent/30 selection:text-gray-900`}
      >
        <GoogleAnalytics gaId="G-C3M2EVLDNH" />
        <MotionProvider>
          {children}
          <CookieConsent />
        </MotionProvider>
      </body>
    </html>
  );
}
