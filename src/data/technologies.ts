import {
  // FaJava,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  // SiPython,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiExpress,
  SiMongodb,
  SiRedis,
  // SiPrisma,
  // SiMongoose,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

export const technologies = {
  // languages
  //Java: FaJava,
  //Python: SiPython,
  Javascript: SiJavascript,
  Typescript: SiTypescript,
  // dev
  Tailwind: SiTailwindcss,
  "React.js": FaReact,
  Redux: SiRedux,
  "TanStack Query": SiReactquery,
  "Next.js": RiNextjsFill,
  "Node.js": FaNodeJs,
  Express: SiExpress,
  // db
  MongoDB: SiMongodb,
  // Mongoose: SiMongoose,
  PostgreSQL: BiLogoPostgresql,
  // Prisma: SiPrisma,
  Redis: SiRedis,
  // devops
  Git: FaGitAlt,
  Docker: FaDocker,
  AWS: FaAws,
};
