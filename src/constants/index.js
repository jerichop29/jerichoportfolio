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
  carrent,
  jobit,
  tripguide,
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
  sanJose,
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
      "NutriPro is a smart nutrition analysis and food quality assessment platform that helps users evaluate the freshness, quality, and nutritional value of food items using AI and computer vision. It provides real-time insights to support healthier choices and reduce food waste. 🥦",
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
        name: "computer-vision",
        color: "orange-text-gradient",
      },
      {
        name: "yolov8",
        color: "blue-text-gradient",
      },
    ],
    image: nutripro,
    source_code_link: "https://github.com/jerichop29/NutriPro",
  },
  {
    name: "Mercado De Calamba",
    description:
      "Mercado de Calamba is a smart stall management platform that helps administrators oversee rentals, track payments, and manage vendors using automation. It improves efficiency, ensures transparency, and enhances the overall market experience. 🏪",
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
        name: "scss.js",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
    ],
    image: mercado,
    source_code_link: "https://github.com/jerichop29/mercado",
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
    source_code_link: "https://github.com/jerichop29/maxima",
  },
  {
    name: "San Jose Resort",
    description:
      "San Jose Resort is a comprehensive reservation platform that allows guests to book rooms, amenities, and events while ensuring a seamless and convenient stay.",
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
    image: sanJose,
    source_code_link: "https://github.com/jerichop29/San-Jose-RMS",
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
    source_code_link: "https://github.com/jerichop29/Hotel-Reservation",
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
    source_code_link: "https://github.com/jerichop29/spam-classifier",
  },
  {
    name: "Vista Visual Studio",
    description:
      "Vista is a pure UI design project for Technopreneurship that focuses on creating intuitive and visually appealing interfaces while enhancing user experience.",
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
    source_code_link: "https://github.com/jerichop29/Vista",
  },
  {
    name: "Logo using Gimpp",
    description:
      "Digital Art Logo is a creative design project using GIMP to craft unique and visually striking logos with professional detailing and precision.",
    tags: [
      {
        name: "gimpp",
        color: "blue-text-gradient",
      },
    ],
    image: digitalArtLogo,
    source_code_link: "https://github.com/jerichop29",
  },
  {
    name: "Digital Art using Gimpp",
    description:
      "Digital Art – Apples is a digital drawing project using GIMP that showcases realistic apple illustrations with shading, texture, and depth.",
    tags: [
      {
        name: "gimpp",
        color: "blue-text-gradient",
      },
    ],
    image: digitalArt,
    source_code_link: "https://github.com/jerichop29",
  },
];

export { services, technologies, experiences, projects };
