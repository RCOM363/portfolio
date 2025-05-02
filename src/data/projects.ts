import mysttxt from "../../public/projects/myst-txt.webp";
import feedforward from "../../public/projects/feed-forward.webp";
import cashlog from "../../public/projects/cash-log.webp";

export const projects = [
  {
    name: "MystTxt",
    image: mysttxt,
    description:
      "MystTxt is a fun and secure anonymous messaging platform built with Next.js. Create an account, share your unique link, and receive anonymous messages.",
    source: "https://github.com/RCOM363/myst_txt",
    link: "https://myst-txt.rcom363.in/",
    technologies: [
      "Typescript",
      "Tailwind CSS",
      "Shadcn UI",
      "Next.js",
      "NextAuth",
      "React Hook Form",
      "Zod",
      "MongoDB",
      "Mongoose",
      "Redis",
      "Upstash",
      "Resend",
      "Google Gemini API",
    ],
  },
  {
    name: "FeedForward",
    image: feedforward,
    description:
      "FeedForward is a food donation platform built using the MERN stack, designed to bridge the gap between surplus food and those in need. The platform enables donors to share excess food, recipients to request food.",
    source: "https://github.com/RCOM363/feed-forward",
    link: "https://feed-forward.rcom363.in/",
    technologies: [
      "Tailwind CSS",
      "Reactjs",
      "React Router",
      "React Hook Form",
      "React Query",
      "Zod",
      "Nodejs",
      "Expressjs",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Nodemailer",
      "BullMQ",
      "Cloudinary",
      "Docker",
      "Nginx",
      "AWS",
    ],
  },
  {
    name: "CashLog",
    image: cashlog,
    description:
      "CashLog is a full-stack web application designed to help users track cash transactions. This website allows users to manually log and manage expenses and incomes, offering a straightforward way to keep track of cash flow.",
    source: "https://github.com/RCOM363/cash-log",
    link: "https://cash-log.rcom363.in/",
    technologies: [
      "CSS3",
      "Reactjs",
      "Redux",
      "React Router",
      "React Hook Form",
      "Nodejs",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
  },
];
