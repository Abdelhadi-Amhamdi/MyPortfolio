import React from "react";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiBootstrap,
  SiCss3,
  SiFacebook,
  SiGithub,
  SiHtml5,
  SiInstagram,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodeDotJs,
  SiReact,
  SiSass,
  SiTwitter,
} from "react-icons/si";

export const SocilLinks = [
  {
    id: 1,
    icon: <SiFacebook />,
    url: "https://m.facebook.com/abdelhadi.amhamdi.3",
  },
  {
    id: 2,
    icon: <SiInstagram />,
    url: "https://www.instagram.com/am555155/",
  },
  {
    id: 3,
    icon: <SiTwitter />,
    url: "https://twitter.com/AbdelhadiAmham1",
  },
  {
    id: 4,
    icon: <SiGithub />,
    url: "https://github.com/Abdelhadi-Amhamdi",
  },
];

export const heroInfo = {
  name: "Hi I'm Abdelhadi",
  hero1: "I'm a full stack developer and web designer",
};

export const aside = {
  num1: "Introduction",
  num2: "Skills",
  num3: "Works",
  num4: "Contact",
};

export const intro = {
  minititle: "who i'm i ?",
  titele: "Introduction :",
  text:
    "hello im abdelhadi amhamdi i 20 years old im from Morocco and im living in marrakech , im a web disigner and web developer , i love design and creating and developing new stuffs",
};

export const skills = {
  minititle: "what i can do",
  title: "My Skills :",
  SkillsIcons: [
    {
      name: "Html5",
      icon: <SiHtml5 />,
    },
    {
      name: "Css3",
      icon: <SiCss3 />,
    },
    {
      name: "Scss",
      icon: <SiSass />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript />,
    },
    {
      name: "Jquery",
      icon: <SiJquery />,
    },
    {
      name: "React.js",
      icon: <SiReact />,
    },
    {
      name: "Node.js",
      icon: <SiNodeDotJs />,
    },
    {
      name: "Laravel",
      icon: <SiLaravel />,
    },
    {
      name: "Mongodb",
      icon: <SiMongodb />,
    },
    {
      name: "MySql",
      icon: <SiMysql />,
    },
    {
      name: "Photoshop",
      icon: <SiAdobephotoshop />,
    },
    {
      name: "Illustrator",
      icon: <SiAdobeillustrator />,
    },
  ],
};

export const works = {
  minititle: "what i did ?",
  title: "My works :",
  projects: [
    {
      id: 1,
      type: "dev",
      img: "./img/works/trad7.jpg",
      title: "traditional store",
      tech: "laravel & vue js",
      // live:'live',
      // url:'',
      git: "Github",
      gitUrl: "https://github.com/Abdelhadi-Amhamdi/Trad-shopp",
    },
    {
      id: 2,
      type: "dev",
      img: "./img/works/newpro.jpg",
      title: "new pro",
      tech: "javascript",
      live: "live",
      url: "https://infallible.tk/",
      git: "Github",
      gitUrl: "https://github.com/Abdelhadi-Amhamdi/new-pro",
    },
    {
      id: 3,
      type: "dev",
      img: "./img/works/to-do.png",
      title: "todos",
      tech: "javascript",
      // live:'live',
      // url:'',
      git: "Github",
      gitUrl: "https://github.com/Abdelhadi-Amhamdi/Javascript-todo-app",
    },
    {
      id: 5,
      type: "dev",
      img: "./img/works/recipes.PNG",
      title: "recpies",
      tech: "React",
      live: "live",
      url: "https://recipes.gq/",
      git: "Github",
      gitUrl: "https://github.com/Abdelhadi-Amhamdi/React-App-1",
    },
    {
      id: 6,
      type: "dev",
      img: "./img/works/portfolio.PNG",
      title: "portfolio",
      tech: "React & scss",
      live: "live",
      url: "https://elated-hermann-1dc0cf.netlify.app/",
      git: "Github",
      gitUrl: "https://github.com/Abdelhadi-Amhamdi/PORTFOLIO",
    },
    {
      id: 8,
      type: "dev",
      img: "./img/works/sienceHumans.PNG",
      title: "Sience Humman",
      tech: "Laravel and Vue js",
      // live:'Show',
      // url:'',
    },
    {
      id: 9,
      type: "dev",
      img: "./img/works/pets.PNG",
      title: "Pets",
      tech: "Mern Stack",
      // live:'Show',
      // url:'',
      tools:
        "Node js , express , mongodb , react js , scss , html , jwt , react router dom , react hooks",
    },
  ],
};

export const contact = {
  minititle: "text me",
  title: "Contact Me :",
  name: "Abdelhadi Amhamdi",
  phone: "212621420623",
  email: "aamhamdi943@gmail.com",
};

export const sectionInfo = {
  disc:
    "From interaction design to scalable application web and single-page apps . I help awesome people to build ambitious yet accessible projects , thanks fro visiting my portfolio , and i hope you enjoying.",
};
