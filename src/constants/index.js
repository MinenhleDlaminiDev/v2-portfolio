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
    starbucks,
    tesla,
    shopify,
    carrent,
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
      name: "TypeScript",
      icon: typescript,
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "K1 Autowash",
      icon: starbucks,
      iconBg: "#383E56",
      date: "September 2021 -  March 2022",
      points: [
        "Developing and maintaining web application using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Old Mutual",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2022 - December 2022",
      points: [
        "Developing and maintaining web application using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Developed email templates with HTML, CSS, and SASS which increased campaign exposure",
        "Created PostgreSQL database queries that tracked and provided feedback on the campaign performance across the 12 different branches.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Pick 'n Book",
      icon: shopify,
      iconBg: "#383E56",
      date: "January 2023 - October 2023",
      points: [
        "Developing and maintaining web application using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Developed REST backend with Express JS and JSON Server for user profiles, inventory management, and order processing to facilitate the sales.",
        "Implemented user authentication and security utilizing JSON Web Token (JWT).",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "TIPTIP",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "November 2023 - December 2024",
      points: [
        "Created Landing & Short Code UI using ReactJS & Tailwind ensuring responsive and user-friendly UI.",
        "Implemented dashboard component, integrate RESTful APIs, enabling dynamic content loading.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "PIntegrated React features; hooks, context API, and React Router, to manage application state and enhance navigation.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "SAPI",
      description:
        "The world’s first Endpoint As A Service. S.API hosts an evergrowing list of endpoints that provide you and your applications access to a wide collection of data, computations and artificial intelligence functionality all through our Open API service.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://s-api.co.za",
    },
  ];
  
  export { services, technologies, experiences, projects };