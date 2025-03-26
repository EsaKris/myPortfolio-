import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  again,
  tesla,
  techie,
  sycamore,
  jobit,
  tripguide,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Developer",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "again and afresh",
    icon: again,
    iconBg: "#383E56",
    date: "October 2024 - December 2024",
    points: [
      "Developing and maintaining the Sycamore web platform using React.js, Django, and other relevant technologies to ensure a seamless user experience.",
      "Collaborating with the Sycamore team, including designers, event planners, and developers, to create a robust and user-friendly application..",
      "Implementing responsive design to ensure the platform works effectively across all devices, enhancing accessibility for participants.",
      "Ensuring cross-browser compatibility so attendees can access the Sycamore website without technical issues.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Portfolio Website",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed and designed my portfolio website from scratch using React.js.",
      "Implemented a responsive UI with a clean and modern design.",
      "Ensured cross-browser compatibility for a seamless user experience.",
      "Built an interactive and scalable web solution to showcase my work.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "TechieKraft",
    icon: techie,
    iconBg: "#383E56",
    date: "Jan 2025 - Jan 2025",
    points: [
      "Developing and maintaining web applications using Django, HTML, and Tailwind CSS to create a seamless appointment booking system.",
      "Collaborating with cross-functional teams, including designers and developers, to ensure a smooth user experience.",
      "Implementing responsive design with Tailwind CSS for optimal performance across different devices.",
      "Ensuring cross-browser compatibility to provide a consistent experience for all users.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "School Project",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Independently developed and implemented a Multi-Factor Authentication (MFA) system to enhance user account security and data protection.",
      "Designed and built a secure authentication system to prevent unauthorized access using multiple verification methods.",
      "Developed and maintained the entire system, handling both frontend and backend security measures",
      "Followed best security practices, ensuring encryption, secure data storage, and protection against cyber threats.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Esa proved me wrong.",
    name: "George Saater",
    designation: "Audio Engineer",
    company: "A & A",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGGIy5CgKMIOA/profile-displayphoto-shrink_200_200/B4DZQHiMA8GgAY-/0/1735293191696?e=1748476800&v=beta&t=2_fwgzYofJ1IHT6Rsrr2b6nbj2a3LtmBL1Ko2fsiCpw",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Esa does.",
    name: "Chinedu Nweke",
    designation: "CEO",
    company: "TechieKraft",
    image: "https://media.licdn.com/dms/image/v2/D4D0BAQHUrwfrdlSPow/company-logo_200_200/company-logo_200_200/0/1736846193377?e=1748476800&v=beta&t=_zZq8Yo2xceZk6xTIuHT1feM_iXi-RXl2sEBLEM4vh4",
  },
  {
    testimonial:
      "After Esa optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sycamore",
    description:
      "The Sycamore Project is a church event web app for participant and worker registration, QR-based attendance tracking, worker ID cards, online donations, and live streaming, built with Django and Tailwind. 🚀",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sycamore,
    source_code_link: "https://github.com/john-okojere/sycamore",
  },
  {
    name: "TechieTeens",
    description:
      "TechieTeens by Techikrafft provides school tech training in coding, robotics, and digital skills. Easily book appointments for hands-on learning sessions Empowering students with future-ready tech skills! 🚀.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/EsaKris/TechieKraft",
  },
  {
    name: "Portfolio Webste",
    description:
      "I designed and built my portfolio website using React.js, creating a modern and responsive UI. It features cross-browser compatibility and a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
