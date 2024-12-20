import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  ircs,
  bits,
  BLOOD,
  Real_img,
  quiz,
  gallery,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "IRCS",
    icon: ircs,
    iconBg: "#ffffff",
    date: "MAY 2023 - JUNE 2023",
    points: [
      "Led development of a blood bank management website at IRCS, using HTML, PHP, JavaScript, and CSS.",
      "Collaborated with design team, ensuring seamless integration of front-end and back-end as a full stack developer.",
      "Demonstrated proficiency in web development, designing and implementing key features.",
    ],
  },
  {
    title: "Material Discovery - Machine Learning",
    company_name: "BITS PILANI",
    icon: bits,
    iconBg: "#fffffff",
    date: "JAN 2024 - MAY 2024",
    points: [
      "Working under Professor Ghosh's project which spans chemistry, physics, and computer science to accelerate material discovery.",
      "Advanced machine learning analyzes data, predicting novel materials effectively using algorithms like neural networks and decision trees.",
      "Focus on sustainable, high-performance materials for renewable energy, electronics, and healthcare applications.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "REAL ESTATE WEBSITE",
    description:
      "A web-based platform that allows users to search, view, and manage real estate listings from various agencies, providing a convenient and efficient solution for buying, selling, or renting properties.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Real_img,
    source_code_link: "https://github.com/noobapoo99/Real_estate.git",
  },
  {
    name: "BLOOD BANK WEBSITE",
    description:
      "A web-based platform that allows users to find and schedule blood donation appointments, connect with local blood banks, and manage their donation history, providing a convenient ant solution for saving lives.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: BLOOD,
    source_code_link: "https://github.com/noobapoo99/ircs_main.git",
  },
  {
    name: "QUIZ",
    description:
      "A web-based platform where users can take quizzes on various topics, track their progress, and learn new information, providing an engaging and interactive way to test and expand their knowledge.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/noobapoo99/quiz.git",
  },
  {
    name: "Photo Gallery",
    description:
      "A web-based platform where users can explore and share photos, organized into galleries based on themes, events, or categories. It offers a visually immersive experience for users to discover, appreciate, and upload their favorite images, providing a dynamic space for creativity and inspiration.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: gallery,
    source_code_link: "https://github.com/noobapoo99/photo__gallery.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
