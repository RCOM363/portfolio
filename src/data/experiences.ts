import { TExperience } from "@/types/experience.types";

export const experiences: TExperience[] = [
  {
    company: "Care Diary",
    website: "https://carediary.com.au/",
    startDate: "2025-06",
    endDate: "",
    technologies: [
      "React.js",
      "React Native",
      "TanStack Query",
      "Next.js",
      "Expo",
      "Node.js",
      "Sequelize",
      "PostgreSQL",
      "Bit Bucket",
      "Git",
    ],
    roles: [
      {
        title: "Software Engineer Intern",
        startDate: "2025-06",
        endDate: "2025-12",
        description:
          "Developed responsive web and mobile interfaces from Figma designs, integrated REST APIs with CRUD and 2FA flows, upgraded backend and database to support new features, and automated reminders using BullMQ and Expo push notifications.",
      },
    ],
  },
  {
    company: "Pranaksh Technologies LLP",
    website: "https://www.linkedin.com/company/pranaksh-infotech",
    startDate: "2024-11",
    endDate: "2025-05",
    technologies: [
      "React.js",
      "TanStack Query",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Git",
    ],
    roles: [
      {
        title: "Software Developer Intern",
        startDate: "2024-11",
        endDate: "2025-05",
        description:
          "Built RESTful APIs with PostgreSQL and Prisma to manage 1K+ records, implemented JWT authentication with RBAC for secure access, and optimized performance using Tanstack Query for smart caching and state management.",
      },
    ],
  },
];
