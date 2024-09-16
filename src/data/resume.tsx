import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anderson Henrique",
  initials: "AH",
  url: "https://dillion.io",
  location: "Teresina, Piauí",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Engenheiro de software e apaixonado por tecnologia em todas as suas formas. Falar sobre tecnologia: foi isso que escolhi para minha vida.",
  summary:
    "Como entusiasta e profissional em desenvolvimento mobile, trabalho todos os dias desenvolvendo aplicações que impactam em diversos ramos. Trabalho com a mentalidade de que um bom desenvolvedor deve se manter sempre atualizado com as últimas novidades do mundo da tecnologia, por isso me dedico nos finais de semanas e horas vagas com o objetivo de melhorar minha entrega profissional. Atualmente, tenho experiência no desenvolvimento mobile utilizando React Native e desenvolvimento de APIs usando Node.js, assim como Next JS para desenvolvimento web.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React Native",
    "React",
    "Next.js",
    "Typescript",
    "Deploy IOS/Android - Google Play e Apple Store",
    "Node.js",
    "Java",
    "Postgres",
    "MYSQL",
    "AWS",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/andersonhcc",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andersonhenriquecc/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "2DLpro",
      href: "https://www.d2l.com/pt-br/",
      badges: [],
      end: null,
      location: "Remota",
      title: "Software Engineer PL",
      logoUrl: "/2dl.jpeg",
      start: "Abril 2024",
      description: "",
    },
    {
      company: "Ficash",
      badges: [],
      href: "https://ficash.com.br/",
      location: "Remota",
      title: "Software Engineer",
      logoUrl: "/ficash.jpeg",
      start: "January 2021",
      end: "April 2021",
      description: "",
    },
    {
      company: "Brickup",
      href: "https://www.brickup.app/",
      badges: [],
      location: "Remota",
      title: "Software Engineer",
      logoUrl: "/brickup.jpeg",
      start: "Janeiro 2024",
      end: "April 2024",
      description: "",
    },
    {
      company: "Web Holding USA",
      href: "https://webholdingusa.com/",
      badges: [],
      location: "Remota",
      title: "Software Engineer",
      logoUrl: "/wb.jpeg",
      start: "Agosto 2022",
      end: "Janeiro 2024",
      description: "",
    },
  ],
  education: [
    {
      school: "Universidade Federal Pernambuco",
      href: "http://www.ufpe.br/",
      degree: "Engenharia da Computação",
      logoUrl: "/ufpe.jpeg",
      start: "2022",
      end: "Present",
    },
    {
      school: "Universidade Federal Piauí",
      href: "http://ufpi.br/",
      degree: "Engenharia Elétrica",
      logoUrl: "/ufpi.jpeg",
      start: "2021",
      end: "Trancado",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
