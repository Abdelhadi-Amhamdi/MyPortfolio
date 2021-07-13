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
  SiIonic
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
    url: "https://www.instagram.com/__ab__am/",
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
  hero1: "I'm a front-end developer and web designer",
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
    {
      name: "Ionic",
      icon: <SiIonic />,
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
      img: "./img/works/trad7.png",
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
      img: "./img/works/newpro.png",
      title: "new pro",
      tech: "javascript",
      live: "live",
      url: "https://ecstatic-lewin-e6701f.netlify.app",
      git: "Github",
      gitUrl: "https://github.com/Abdelhadi-Amhamdi/new-pro",
    },
    {
      id: 3,
      type: "dev",
      img: "./img/works/todos.png",
      title: "todos",
      tech: "javascript",
      // live:'live',
      // url:'',
      git: "Github",
      gitUrl: "https://github.com/Abdelhadi-Amhamdi/Javascript-todo-app",
    },
    {
      id: 4,
      type: "dev",
      img: "./img/works/recipes.png",
      title: "recpies",
      tech: "React",
      live: "live",
      url: "https://recipes.gq/",
      git: "Github",
      gitUrl: "https://github.com/Abdelhadi-Amhamdi/React-App-1",
    },
    {
      id: 5,
      type: "dev",
      img: "./img/works/Portfolio.png",
      title: "portfolio",
      tech: "React & scss",
      live: "live",
      url: "https://aabm.cf",
      git: "Github",
      gitUrl: "https://github.com/Abdelhadi-Amhamdi/PORTFOLIO",
    },
    {
      id: 6,
      type: "dev",
      img: "./img/works/sienceHumman.png",
      title: "Sience Humman",
      tech: "Laravel and Vue js",
      // live:'Show',
      // url:'',
    },
    {
      id: 7,
      type: "dev",
      img: "./img/works/pets.png",
      title: "Pets",
      tech: "Mern Stack",
      live:'Live',
      url:'https://adopt-pets.tk',
      tools:
        "Node js , express , mongodb , react js , scss , html , jwt , react router dom , react hooks",
    },
    {
      id: 8,
      type: "dev",
      img: "./img/works/Quran.png",
      title: "Quran Extetion",
      tech: "JAVASCRIPT",
      tools:
        "HTML , CSS , JAVASCRIPT",
      git: "Github",
      gitUrl: "https://github.com/Abdelhadi-Amhamdi/Quran-Extension",
    },
    {
      id: 9,
      type: "dev",
      img: "./img/works/plants.png",
      title: "Plants Store",
      tech: "JAVASCRIPT",
      tools:
        "HTML , CSS , JAVASCRIPT , BOOTSTRAP",
      git: "Github",
      gitUrl: "",
      live :"Live",
      url :"https://plants-garden.tk"
    },
    {
      id: 10,
      type: "dev",
      img: "./img/works/todosIonic.png",
      title: "Todos Application",
      tech: "Ionic ReactJs TypeScript",
      tools:
        "Ionic",
      git: "Github",
      gitUrl: "https://github.com/Abdelhadi-Amhamdi/Todos-ionic-app",
      // live :"Live",
      // url :""
    },
    {
      id: 11,
      type: "dev",
      img: "./img/works/manga.png",
      title: "Manga Scarping",
      tech: "Javascript Node js",
      tools:
        "Node js",
      git: "Github",
      gitUrl: "",
      live :"Live",
      url :"https://inspiring-beaver-e92137.netlify.app/"
    },
  ],
};

export const contact = {
  minititle: "text me",
  title: "Contact Me :",
  name: "Abdelhadi Amhamdi",
  phone: "+212621420623",
  email: "aamhamdi943@gmail.com",
};

export const sectionInfo = {
  disc:
    "From interaction design to scalable application web and single-page apps . I help awesome people to build ambitious yet accessible projects , thanks fro visiting my portfolio , and i hope you enjoying.",
};
