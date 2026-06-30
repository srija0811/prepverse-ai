import {
  Brain,
  Code2,
  FileText,
  Calculator,
  Building2,
  BarChart3,
  ClipboardCheck,
  Sparkles,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Step = {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type FooterLinkGroup = {
  title: string;
  links: { label: string; href: string }[];
};

export const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const features: Feature[] = [
  {
    icon: Brain,
    title: "AI Mock Interviews",
    description:
      "Practice with an AI interviewer that adapts to your skill level and gives real-time feedback on your answers.",
  },
  {
    icon: Code2,
    title: "DSA Practice",
    description:
      "Solve curated coding problems with hints, optimal solutions, and complexity analysis tailored to top companies.",
  },
  {
    icon: FileText,
    title: "Resume Analyzer",
    description:
      "Upload your resume and get AI-powered suggestions to make it stand out to recruiters and ATS systems.",
  },
  {
    icon: Calculator,
    title: "Aptitude Drills",
    description:
      "Master quantitative, logical, and verbal aptitude with timed drills modeled after real placement tests.",
  },
  {
    icon: Building2,
    title: "Company-Specific Prep",
    description:
      "Access tailored question banks and interview patterns for TCS, Infosys, Amazon, Google, and more.",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description:
      "Track your strengths, weak areas, and improvement over time with detailed performance dashboards.",
  },
];

export const steps: Step[] = [
  {
    number: 1,
    icon: ClipboardCheck,
    title: "Take Assessment",
    description:
      "Complete a quick skill assessment across DSA, aptitude, and communication to establish your baseline.",
  },
  {
    number: 2,
    icon: Sparkles,
    title: "Get Your AI Plan",
    description:
      "Receive a personalized study roadmap based on your target companies, timeline, and current skill level.",
  },
  {
    number: 3,
    icon: Target,
    title: "Practice Daily",
    description:
      "Work through daily challenges, mock interviews, and company-specific modules with AI guidance.",
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Land Your Offer",
    description:
      "Track your readiness score and walk into interviews confident, prepared, and placement-ready.",
  },
];

export const stats: Stat[] = [
  { value: 10000, suffix: "+", label: "Students Prepared" },
  { value: 500, suffix: "+", label: "Partner Companies" },
  { value: 95, suffix: "%", label: "Success Rate" },
  { value: 50000, suffix: "+", label: "Practice Questions" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "B.Tech CSE",
    company: "Placed at Amazon",
    quote:
      "PrepVerse AI's mock interviews were a game-changer. The AI feedback helped me fix my communication gaps before the real interview.",
    initials: "PS",
  },
  {
    name: "Rahul Verma",
    role: "B.Tech IT",
    company: "Placed at TCS",
    quote:
      "The company-specific prep modules saved me weeks of research. I knew exactly what to expect in my TCS NQT and technical rounds.",
    initials: "RV",
  },
  {
    name: "Ananya Patel",
    role: "MCA",
    company: "Placed at Infosys",
    quote:
      "From aptitude to HR rounds, everything was covered. My readiness score went from 42% to 91% in just six weeks.",
    initials: "AP",
  },
  {
    name: "Karthik Reddy",
    role: "B.Tech ECE",
    company: "Placed at Microsoft",
    quote:
      "The DSA practice with AI hints taught me to think through problems systematically. I cracked Microsoft on my first attempt.",
    initials: "KR",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "Is PrepVerse AI free to use?",
    answer:
      "Yes! We offer a generous free tier with access to aptitude drills, basic DSA practice, and limited mock interviews. Premium plans unlock full company-specific prep and unlimited AI interviews.",
  },
  {
    question: "Which companies does PrepVerse AI cover?",
    answer:
      "We cover 500+ companies including TCS, Infosys, Wipro, Amazon, Google, Microsoft, Flipkart, and many startups. New company modules are added every week.",
  },
  {
    question: "How does the AI mock interview work?",
    answer:
      "Our AI conducts realistic voice or text-based interviews tailored to your target role. It evaluates your technical answers, communication, and problem-solving approach, then provides detailed feedback.",
  },
  {
    question: "Can I use PrepVerse AI on my phone?",
    answer:
      "Absolutely. PrepVerse AI is fully responsive and works on any device — desktop, tablet, or mobile — so you can practice anywhere, anytime.",
  },
  {
    question: "How is my progress tracked?",
    answer:
      "Your dashboard shows readiness scores, topic-wise performance, streaks, and improvement trends. The AI adjusts your study plan based on your latest results.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "Not at all. PrepVerse AI adapts to all skill levels — from beginners learning their first language to advanced candidates targeting FAANG companies.",
  },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Interview Guides", href: "#" },
      { label: "Company Sheets", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];
