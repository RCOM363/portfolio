import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiZod,
  SiReactquery,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiMongoose,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

export const icons = {
  // languages
  Java: FaJava,
  Python: SiPython,
  Javascript: SiJavascript,
  Typescript: SiTypescript,
  // dev
  Tailwind: SiTailwindcss,
  React: FaReact,
  Redux: SiRedux,
  ReactQuery: SiReactquery,
  Zod: SiZod,
  Nextjs: RiNextjsFill,
  Nodejs: FaNodeJs,
  Express: SiExpress,
  JWT: SiJsonwebtokens,
  Docker: FaDocker,
  AWS: FaAws,
  // db
  MongoDB: SiMongodb,
  Mongoose: SiMongoose,
  PostgreSQL: BiLogoPostgresql,
  Prisma: SiPrisma,
  Redis: SiRedis,
  // tools
  Git: FaGitAlt,
  GitHub: FaGithub,
  Postman: SiPostman,
  Vercel: SiVercel,
};
