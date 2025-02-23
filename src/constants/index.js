import {
  mobile,
  computerVision,
  machineLearning,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  bootstrap,
  python,
  flutter,
  mySQL,
  dart,
  php,
  website,
  freelance,
  digitalArtLogo,
  digitalArt,
  hotelReservation,
  nutripro,
  resortReservation,
  spamClassifier,
  mercado,
  vista,
  resortReservation1,
  lms,
  portfolio1,
  portfolio2,
  graphicsDesign1,
  graphicsDesign2,
  graphicsDesign3,
  visualProgramming,
  mobileLogin,
  assembly,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web App Development",
    icon: web,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: machineLearning,
  },
  {
    title: "Computer Vision",
    icon: computerVision,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "mySQL",
    icon: mySQL,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "City Government of Calamba ICT",
    icon: website,
    iconBg: "#383E56",
    date: "December 2024 - March 2025",
    points: [
      "Developing web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Self-Employed",
    icon: freelance,
    iconBg: "#383E56",
    date: "November 2023 - Present",
    points: [
      "Providing software development services for student thesis and academic projects.",
      "Assisting students in designing and developing web and mobile applications using modern technologies.",
      "Guiding students in implementing AI, machine learning, and computer vision techniques in research projects.",
    ],
  },
];

const projects = [
  {
    name: "NutriPro",
    description:
      "NutriPro is a smart nutrition analysis and vegetable quality assessment platform that helps users evaluate the freshness, quality, and nutritional value of vegetable items using AI and computer vision. It provides real-time insights to support healthier choices and reduce food waste. 🥦",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "tensorflow lite",
        color: "orange-text-gradient",
      },
      {
        name: "yolov8",
        color: "blue-text-gradient",
      },
    ],
    image: nutripro,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/jerichop29/NutriPro",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/watch?v=oLDTqzYLxDo&t=14s",
      },
    ],
  },
  {
    name: "Mercado De Calamba",
    description:
      "Mercado de Calamba is a smart stall management platform that helps administrators oversee rentals, track stall information, and manage vendors. It improves efficiency, transparency, and enhances the market experience with 3D mapping for better visualization. 🏪",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "mySQL",
        color: "orange-text-gradient",
      },
      {
        name: "scss",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
    ],
    image: mercado,
    source_code_link: "https://github.com/jerichop29/mercado",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/jerichop29/mercado",
      },
    ],
  },
  {
    name: "Maxima Resort",
    description:
      "Maxima Resort is a smart reservation management system that helps streamline bookings, track availability, and manage guest check-ins seamlessly. It enhances efficiency, improves customer experience, and simplifies daily resort operations effectively. 🏖️📅",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "orange-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
    ],
    image: resortReservation,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/jerichop29/maxima",
      },
    ],
  },
  {
    name: "Resort Reservation",
    description:
      "Resort Reservation is a comprehensive reservation platform that allows guests to book rooms, amenities, and events while ensuring a seamless and convenient stay.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: resortReservation1,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/jerichop29/San-Jose-RMS",
      },
    ],
  },
  {
    name: "Hotel Reservation",
    description:
      "Hotel Reservation is a smart booking system that enables users to reserve rooms, manage check-ins, and access exclusive deals for a hassle-free lodging experience.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: hotelReservation,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/jerichop29/Hotel-Reservation",
      },
    ],
  },
  {
    name: "Spam Classifier",
    description:
      "Spam Classifier is an intelligent filtering system that detects and blocks spam emails, messages, and content using advanced AI and machine learning techniques.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "svm",
        color: "green-text-gradient",
      },
      {
        name: "naive Bayes",
        color: "pink-text-gradient",
      },
    ],
    image: spamClassifier,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/jerichop29/spam-classifier",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/watch?v=yYMLy_TMg5A&t=1s",
      },
    ],
  },
  {
    name: "Vista Visual Studio",
    description:
      "Vista is a pure UI design project for my school subject technopreneur that focuses on creating intuitive and visually appealing interfaces.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: vista,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/jerichop29/Vista",
      },
    ],
  },
  {
    name: "Logo using Gimp",
    description:
      "Making creative Digital Art Logo project for graphic design subject using GIMP to craft unique and visually striking logos with professional detailing and precision.",
    tags: [
      {
        name: "gimp",
        color: "blue-text-gradient",
      },
    ],
    image: digitalArtLogo,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/jerichop29/",
      },
    ],
    
  },
  {
    name: "Digital Art using Gimp",
    description:
      "Creating a Digital Art Drawing project using GIMP that showcases realistic apple illustrations with detailed shading, rich texture, and enhanced depth.",
    tags: [
      {
        name: "gimp",
        color: "blue-text-gradient",
      },
    ],
    image: digitalArt,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/jerichop29/",
      },
    ],
  },
  {
    name: "LMS",
    description:
      "A learning platform that offers courses, quizzes, and progress tracking.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "orange-text-gradient",
      },
    ],
    image: lms,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/jerichop29/lms-design",
      },
    ],
  },
  {
    name: "Portfolio Website",
    description:
      "A personal site showcasing projects, skills, and achievements",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio1,
    links: [
      {
        name: "GitHub",
        url: "https://jerichop29.github.io/Jericho-Portfolio/",
      },
      {
        name: "Netlify",
        url: "https://pechojericho.netlify.app/",
      },
    ],
  },
  {
    name: "Portfolio Website",
    description:
      "A creative display of work, experience, and expertise.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio2,
    links: [
      {
        name: "Netlify",
        url: "https://myportfoliojp.netlify.app/",
      },
    ],
  },
  {
    name: "Graph using matplotlib",
    description:
      "A visual representation of data using Python’s Matplotlib library.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "google-collab",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: visualProgramming,
    links: [
      {
        name: "GoogleCollab",
        url: "https://colab.research.google.com/drive/1qL16on4-tIkbuQ-e1WQHJLNQ1B0AETZ4?usp=sharing&fbclid=IwY2xjawIne-xleHRuA2FlbQIxMAABHeDE3XljUvZMG7uBh-z_B8xEvv5AD1yp_dlEyt6ALIN1ou-1dXMD64hQuw_aem_-V23MHXaK6iomcQKr6OSKg#scrollTo=d_x5XvLE-9nk",
      },
    ],
  },
  {
    name: "Drawing into Digital",
    description:
      "A cartoon sketch made in GIMP using digital tools.",
    tags: [
      {
        name: "gimp",
        color: "blue-text-gradient",
      },
    ],
    image: graphicsDesign1,
    links: [
      {
        name: "Drive",
        url: "https://drive.google.com/file/d/19UGpBLFF5TF7qzP7uRXjOIE9TojDsIdr/view?usp=sharing",
      },
    ],
  },
  {
    name: "Mobile App Login",
    description:
      "A secure authentication system for accessing mobile applications.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
    ],
    image: mobileLogin,
    links: [
      {
        name: "Drive",
        url: "https://drive.google.com/drive/folders/1SL7psvR6aJtJcujPk6l_aOzLKJEaLVQz?usp=sharing",
      },
    ],
  },
  {
    name: "Assembly Language Art",
    description:
      "A pixel-style Pikachu drawn using assembly code.",
    tags: [
      {
        name: "assembly language",
        color: "blue-text-gradient",
      },
      {
        name: "doxbox",
        color: "green-text-gradient",
      },
    ],
    image: assembly,
    links: [
      {
        name: "Drive",
        url: "https://drive.google.com/file/d/1AZUzj60iXr3aAKjHd7rVsEge2u98zEBg/view?usp=sharing",
      },
    ],
  },
  {
    name: "Digital Art Bugs Bunney",
    description:
      "A stylized digital illustration of the classic Bugs Bunny character.",
    tags: [
      {
        name: "gimp",
        color: "blue-text-gradient",
      },
    ],
    image: graphicsDesign2,
    links: [
    ],
  },
  {
    name: "Digital Art Hallway",
    description:
      "A detailed digital painting of a school hallway scene.",
    tags: [
      {
        name: "gimp",
        color: "blue-text-gradient",
      },
    ],
    image: graphicsDesign3,
    links: [
    ],
  },
];

export { services, technologies, experiences, projects };
