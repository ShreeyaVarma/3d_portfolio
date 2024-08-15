import {
  mobile,
  backend,
  creator,
  web,
  c,
  cpp,
  css,
  docker,
  figma,
  git,
  haskell,
  html,
  java,
  javascript,
  latex,
  mips,
  mysql,
  nodejs,
  python,
  reactjs,
  tailwind,
  threejs,
  typescript,
  radicalai,
  uoe,
  hyped,
  inf,
  // portfolio,
  chaos,
  solar,
  bank,
  sudoku,
  cache,
  kiosk,
  hack_the_burgh_species,
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
    title: "AI Engineer",
    icon: mobile,
  },
  {
    title: "Teaching Assistant",
    icon: backend,
  },
  {
    title: "Researcher",
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
      name: "c++",
      icon: cpp,
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
      name: "python 3",
      icon: python,
    },
    {
      name: "haskell",
      icon: haskell,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "c",
      icon: c,
    },
    
    

];

const experiences = [
  {
    title: "AI Engineer",
    company_name: "Radical AI",
    icon: radicalai,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Implemented Al applications using Open Al API & Google Gemini, increasing project efficiency by 15% to create a quiz generator.",
      "Enhanced user engagement by 25% through effective prompt engineering and integration of secure Identity and Access Management (IAM) solutions, ensuring robust and scalable software design.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Edinburgh University",
    icon: uoe,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Mar 2024",
    points: [
      "Partnered with Dr. David Robertson to analyze the impact of AI in healthcare reviewing 3+ research papers.",
      "Conducted a comprehensive analysis of AI applications in medical diagnostics, accelerating the identification of optimal treatment plans by 40%.",
    ],
  },
  {
    title: "Software Navigation Engineer",
    company_name: "HypEd",
    icon: hyped,
    iconBg: "#383E56",
    date: "Oct 2022 - June 2024",
    points: [
      "Augmented pod navigation accuracy by 30% through research and implementation of optical flow sensors and Keyence systems.",
      "Refined velocity estimation and system scalability by 18% through data-driven engineering principles, ensuring high-performance software solutions aligned with objectives in cross-functional team and collaborative environments. C | C++",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "School of Informatics",
    icon: inf,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Apr 2024",
    points: [
      "Facilitated delivery of undergraduate courses and graded assignments, including Java and Haskell (Logical and Object-Oriented Programming) improving technical solutions by 10% and students’ grades by 35% and reducing grading time by 20%.",
      "Collaborated with faculty members to develop instructional materials and plan course content, amplifying revision tutorials by 17%.",
      "Contributed to improve course materials based on student performance feedback, resulting in 34% boost in scores.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Shreeya has shown great academic performance. She will defintely achieve great things in the future and is an inspiration to many. I wish her all the best in her future endeavours.",
    name: "Dr. David Robertson",
    designation: "Professor and Lecturer",
    company: "School of Informatics",
    image: "https://www.research.ed.ac.uk/files-asset/36723625/Edinburgh_Uni_8105772.jpg/",
  },
  {
    testimonial:
      "We are thrilled to have Shreeya at our company. She does her best in bringing out the most efficient solutions on the table. We can very well say that her skills and experience have really added great value to our RadicalX Team.",
    name: "Talha Sabri",
    designation: "CEO",
    company: "Radical AI",
    image: "https://cdn.theorg.com/2bfc71fd-3192-49e3-b8e2-53f0b8417e79_medium.jpg",
  },

];

const projects = [
  // {
  //   name: "Personal Portfolio",
  //   description:
  //     "Basically this is what is infront of your eyes right now!.",
  //   tags: [
  //     {
  //       name: "javascript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "nodejs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "reactjs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: portfolio,
  //   source_code_link: "https://github.com/TomHarcus/SEPP-CW3",
  // },
  {
    name: "Self-Service Kiosk",
    description:
      "Developed a virtual kiosk that helps answer university inquiries reducing administrative workload by 30% . Handled  receiving, answering and redirecting 50+ inquiries. Agile | Unit Testing | System and Design Testing",
    tags: [
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: kiosk,
    source_code_link: "https://github.com/TomHarcus/SEPP-CW3",
  },
  {
    name: "Virtual Cache Simulator",
    description:
      "Formulated a simulator that reads memory addresses and generates statistics for the cache accesses improving data retrieval speed by 22% ensuring system scalability and stability. Comprehended virtual to physical address translations and data  access mechanisms in hardware cache.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
    ],
    image: cache,
    source_code_link: "https://github.com/inf2c-cs-2022/coursework2-part2-virtual-memory-and-cache-simulator-ShreeyaVarma",
  },
  {
    name: "Chaos Game",
    description:
      "Built a Python application that employs chaos theory principles to create complex patterns producing over 1,000 iterations  and placing an average of 500 points per iteration to create visually intricate designs. I have simulated the structure of the chaos game and applied its logic I also implement and visualize the distribution of chromosomes in the human body genome using the DNA bases characters.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: chaos,
    source_code_link: "https://github.com/ShreeyaVarma/ChaosGame",
  },
  {
    name: "Machine Learning Model to track Endangered Species",
    description:
      "Engineered a learning model to track endangered species, achieving 92% accuracy in identifying pandas.This solution supports SDG 15 'Life on Land' by enabling precise tracking for conservation efforts.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
    ],
    image: hack_the_burgh_species,
    source_code_link: "https://github.com/ShreeyaVarma/Track_Endangered/import",
  },
  {
    name: "Solar System",
    description:
      "This project aims to simulate the motion of the planets in two-dimensions and to predict launch conditions for satellites to successfully reach planets. Upon additon of planets, update the postion and velocity of the planets and sun at each time step, show orbits and calculate orbital periods. Also, calculate the total energy of the system and the launch conditions for a satellite to reach a planet.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: solar,
    source_code_link: "https://github.com/ShreeyaVarma/SolarSystem",
  },
  {
    name: "Sudoku Solver",
    description:
      "Generated a sudoku solver using haskell taking into account all possible permutations and combinations of possible solutions.",
    tags: [
      {
        name: "haskell",
        color: "pink-text-gradient",
      },
    ],
    image: sudoku,
    source_code_link: "https://github.com/ShreeyaVarma/Sudoku",
  },
  {
    name: "Banking Management System",
    description:
      "A python based program that prompts the user to enter essential detials in order to create an account, block account and other operations as per personal needs. Make transactions, check balance, and other operations.",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/ShreeyaVarma/Bank_Management_System",
  },
];

// const achievements = [
//   {
//     name: "Edinburgh Award - Leadership",
//     description: "President of Hoppers Society - Gender Diversity in Informatics",
//   },
//   {
//     name: "Edinburgh Award - Volunteering",
//     description: "InfPALS Leader - Informatics Peer Assisted Learning Support",
//   },
//   {
//     name: "HackTheBurgh IX Winning Team",
//     description: "For the best use of machine learning",
//   },
//   {
//     name: "Honourable Mention - Haskell Coding Competition",
//     description: "Built a dynamic 3-D Model",
//   },
// ];

// export { services, technologies, experiences, testimonials, projects, achievements };

export { services, technologies, experiences, testimonials, projects };