//  icons
import {
  // FiYoutube,
  FiInstagram,
  FiGithub,
  // FiDribbble,
  FiLayout,
  FiSettings,
  // FiPenTool,
  // FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiServer,
  FiCpu,
  FiSmartphone,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/tic-tac-toe.png";
import Project2 from "./assets/img/projects/StudyNotion.png";
import Project3 from "./assets/img/projects/mern-chat-app.png";
import Project4 from "./assets/img/projects/school-erp.png";
import Project5 from "./assets/img/projects/kbspublischool.png";
import Project6 from "./assets/img/projects/react-dashboard.png";
import Project7 from "./assets/img/projects/lms.png";
import Project8 from "./assets/img/projects/hms.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  // {
  //   name: 'testimonials',
  //   href: 'testimonials',
  // },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "www.linkedin.com/in/ashish-soni-b36608222",
  },
  {
    icon: <FiInstagram />,
    href: "https://instagram.com/ashish_soni23?igshid=OGQ5ZDc2ODk2ZA==",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/ashish385",
  },
  // {
  //   icon: <FiDribbble />,
  //   href: "",
  // },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "#",
    motion: { delayMs: 0, durationMs: 550 },
  },
  {
    img: UpworkBrandIcon,
    href: "#",
    motion: { delayMs: 80, durationMs: 550 },
  },
  {
    img: FiverBrandIcon,
    href: "#",
    motion: { delayMs: 160, durationMs: 550 },
  },
  {
    img: BehanceBrandIcon,
    href: "#",
    motion: { delayMs: 240, durationMs: 550 },
  },
  {
    img: DribbbleBrandIcon,
    href: "#",
    motion: { delayMs: 320, durationMs: 550 },
  },
];


// projects
// Apne assets paths ke sath check kar lijiyega jo bhi images variable paths hain
export const projectsData = [
  {
    id: "1",
    image: Project8, // Replace with your actual asset if distinct
    name: "MediCloud – Enterprise Healthcare Platform",
    category: "Full-Stack Development (Freelance)",
    description: "Architecting a secure hospital management ecosystem using the MERN stack and Material UI (MUI). Currently implementing state-compliant ABDM (Ayushman Bharat Digital Mission) sandbox integrations to manage electronic health records (EHR) over secure federal healthcare networks.",
    github: "", // Kept blank safely to protect private client repository contract
    link: "#",
    motion: { delayMs: 0, durationMs: 550 },
  },
  {
    id: "2",
    image: Project3,
    name: "NexusChat – Real-Time Messaging System",
    category: "Web Development",
    description: "Engineered a scalable full-stack real-time communication portal using React, Node.js, Express, and MongoDB. Integrated WebSockets (Socket.io) for instantaneous packet transmission, alongside encrypted JSON Web Token (JWT) user authentication protocols.",
    github: "", 
    link: "https://onrender.com",
    motion: { delayMs: 100, durationMs: 550 },
  },
  {
    id: "3",
    image: Project2,
    name: "StudyNotion – Advanced EdTech Platform",
    category: "Web Development",
    description: "Developed a functional learning management system configured with video storage rendering pipelines, structured content management hubs, dynamic student-instructor privilege portals, and interactive administrative dashboard widgets.",
    github: "",
    link: "https://netlify.app",
    motion: { delayMs: 200, durationMs: 550 },
  },
  {
    id: "4",
    image: Project7,
    name: "FinRoute – Automated Home Loan Engine",
    category: "Web Development",
    description: "Designed an enterprise financial network engineered to parse user data models and compute composite interest schema matrix transformations automatically. Integrated with a clean validation flow interface to manage system security logs.",
    github: "https://github.com",
    link: "https://netlify.app",
    motion: { delayMs: 300, durationMs: 550 },
  },
  {
    id: "5",
    image: Project4,
    name: "EduCore – Academic ERP Network",
    category: "Web Development",
    description: "Built a fully relational administrative resource planning platform to monitor high-volume institutional metrics. Built with automated data-tables architectures to safely structure grading logs and accounting ledgers.",
    github: "",
    link: "https://netlify.app",
    motion: { delayMs: 400, durationMs: 550 },
  },
  {
    id: "6",
    image: Project5,
    name: "KBS Public – Institutional Portal",
    category: "Web Development",
    description: "Designed and optimized a responsive corporate web showcase layout ensuring sub-second visual load performance scores. Focused deeply on cross-browser cross-device flex grid structures, layouts rendering optimization, and typography scales.",
    github: "https://github.com",
    link: "https://kbspublicschoolmangarh.com",
    motion: { delayMs: 500, durationMs: 550 },
  },
  {
    id: "7",
    image: Project6,
    name: "OmniSight – Telemetry Admin Console",
    category: "UI/UX Design",
    description: "Crafted a high-fidelity data visualization layout schema specialized in complex operational tracking metrics. Features an analytical tracking grid containing flexible component layouts to ensure data visibility benchmarks.",
    github: "",
    link: "https://onrender.com",
    motion: { delayMs: 600, durationMs: 550 },
  },
  {
    id: "8",
    image: Project1,
    name: "GridShift – Interactive State Game",
    category: "UI/UX Design",
    description: "Engineered a low-latency mini game matrix to test performance optimizations of state hook dependencies inside React. Built using pure custom atomic layouts to guarantee smooth structural frame-rates.",
    github: "",
    link: "https://netlify.app",
    motion: { delayMs: 700, durationMs: 550 },
  },
];




// projects
export const projectsNav = [
  { name: 'all' },
  { name: 'web development' },
  { name: 'UI/UX design' },
];


// skill
export const skills = [
  {
    image: SkillImg1,
    motion: { delayMs: 0, durationMs: 550 },
  },
  {
    image: SkillImg2,
    motion: { delayMs: 70, durationMs: 550 },
  },
  {
    image: SkillImg3,
    motion: { delayMs: 140, durationMs: 550 },
  },
  {
    image: SkillImg4,
    motion: { delayMs: 210, durationMs: 550 },
  },
  {
    image: SkillImg5,
    motion: { delayMs: 280, durationMs: 550 },
  },
  {
    image: SkillImg6,
    motion: { delayMs: 350, durationMs: 550 },
  },
  {
    image: SkillImg7,
    motion: { delayMs: 420, durationMs: 550 },
  },
  {
    image: SkillImg8,
    motion: { delayMs: 490, durationMs: 550 },
  },
];


// services

export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Crafting high-fidelity, high-converting minimal user interfaces with deep premium layouts. Focused cleanly on smooth micro-interactions, responsive grids alignment, and seamless modern user experiences.",
    motion: { delayMs: 0, durationMs: 550 },
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Engineering robust frontend clients and structural full-stack architectures. Proficient across high-end modern frameworks to build secure web platforms with optimized asset loads.",
    motion: { delayMs: 100, durationMs: 550 },
  },
  {
    icon: <FiServer />,
    name: "Backend & DevOps",
    description:
      "Designing clean restful APIs with distributed scalable database systems. Configuring automated pipeline deployments, secure cloud host environments, and server logic flows.",
    motion: { delayMs: 200, durationMs: 550 },
  },
  {
    icon: <FiCpu />,
    name: "AI & Custom Tools",
    description:
      "Integrating predictive smart AI logic layers, machine models wrappers, and deep analytical dashboards to scale manual workflows into automated performant digital utilities.",
    motion: { delayMs: 300, durationMs: 550 },
  },
  {
    icon: <FiSmartphone />,
    name: "App Development",
    description:
      "Building seamless native mobile clients across platforms with shared optimized engineering modules. Focused heavily on lightning-fast tactile rendering speed and clean physical graphics.",
    motion: { delayMs: 400, durationMs: 550 },
  },
];


// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at 4840asoni@gmail.com",
    dd: `<p className=" text-accent mb-1 font-normal">
                      {description}
                    </p>`,
    motion: { delayMs: 0, durationMs: 550 },
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Gaura Pandey, U.P",
    description: "Serving clients worldwide",
    motion: { delayMs: 140, durationMs: 550 },
  },
];

