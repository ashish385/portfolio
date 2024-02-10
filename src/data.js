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
// import Project5 from "./assets/img/projects/p5.webp";
// import Project6 from "./assets/img/projects/p6.webp";

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
  },
  {
    img: UpworkBrandIcon,
    href: "#",
  },
  {
    img: FiverBrandIcon,
    href: "#",
  },
  {
    img: BehanceBrandIcon,
    href: "#",
  },
  {
    img: DribbbleBrandIcon,
    href: "#",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Tic-Tac-Toe",
    category: "UI/UX design",
    link: "https://tic-tac-toe-game-on.netlify.app/",
  },
  {
    id: "2",
    image: Project2,
    name: "StudyNotion",
    category: "web development",
    link: "https://studynotion87.netlify.app/",
  },
  {
    id: "3",
    image: Project3,
    name: "MERN Chat-App",
    category: "web development",
    link: "https://mern-chat-app-yjcn.onrender.com/",
  },
  {
    id: "4",
    image: Project4,
    name: "School_ERP",
    category: "web development",
    link: "https://main--effulgent-buttercream-621bd3.netlify.app/",
  },
  // {
  //   id: "5",
  //   image: Project5,
  //   name: "project name 5",
  //   category: "web development",
  // },
  // {
  //   id: "6",
  //   image: Project6,
  //   name: "project name 6",
  //   category: "web development",
  // },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
  // {
  //   name: 'branding',
  // },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Building a user-friendly website involves a combination of design, development, and usability considerations. Continuously gather feedback from users and make improvements to ensure a positive user experience.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      " A full-stack developer is proficient in a wide range of technologies and tools, allowing them to handle all aspects of a web project, from designing the user interface to managing the server and databases.",
  },
  // {
  //   icon: <FiPenTool />,
  //   name: 'Branding',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  // },
  // {
  //   icon: <FiTag />,
  //   name: 'SEO',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  // },
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
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Gaura Pandey, U.P",
    description: "Serving clients worldwide",
  },
];
