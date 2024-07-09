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
    Connectly,
    redux,
    java,
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
    Netflixgpt,
    BiteSwift,
    CodeGenix,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "#about",
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
      title: "React developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "",
    //   icon: mobile,
    // },
    {
      title: "FullStack Developer",
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
      name: "java",
      icon: java,
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
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "NetflixGPT",
      description:
        "Netflix GPT is a cutting-edge React web app that enriches your movie-watching experience by seamlessly combining TMDB movie information, YouTube trailers, and Firebase authentication with OpenAI-powered personalized recommendations. This tech-forward platform now also offers multilingual support.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: Netflixgpt,
      source_code_link: "https://github.com/rachitsgh",
    },
    {
      name: "BiteSwift",
      description:
        "BiteSwift is an innovative online food ordering website built with ReactJS and various cutting-edge technologies. This platform offers a diverse set of features designed to elevate the user experience, including real-time email functionality, a robust login system, and more.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Expressjs",
          color: "pink-text-gradient",
        },
      ],
      image: BiteSwift,
      source_code_link: "https://github.com/rachitsgh/BiteSwift",
    },
    {
      name: "Connectly",
      description:
        "This project implements a simple chat application using Java sockets. It consists of a server (Server.java) that manages client connections and a client (Client.java) that connects to the server to send and receive messages.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
      ],
      image: Connectly,
      source_code_link: "https://github.com/rachitsgh/Connectly",
    },
    {
      name: "CodeGenix",
      description:
        "CodeGenix is a MERN project for ed-tech, offering interactive coding courses to empower learners with essential programming skills..",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
      ],
      image: CodeGenix,
      source_code_link: "https://github.com/rachitsgh/CodeGenix",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };