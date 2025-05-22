import html5 from "./assets/img/html.png";
import css3 from "./assets/img/css3.png";
import javascript from "./assets/img/javascript.png";
import reactjs from "./assets/img/reactJs.png";
import nodejs from "./assets/img/nodejs.png";
import redux from "./assets/img/redux.png";
import bootstrap from "./assets/img/bootstrap.png";
import java from "./assets/img/java.png";
import git from "./assets/img/git.png";
import github from "./assets/img/github.png";
import postman from "./assets/img/postman.png";
import motion from "./assets/img/motion.png";
import accio from "./assets/img/acciojob.png";
import czmg from "./assets/img/czmg.png";
import pu from "./assets/img/pu.png";
import pincodeApi from "./assets/img/pincodeApi.png"

export const links = ["Home", "About", "Resume", "Projects", "Contact"];

export const techStack = [
  {
    name: "HTML5",
    image: html5,
  },

  {
    name: "CSS3",
    image: css3,
  },

  {
    name: "Javascript",
    image: javascript,
  },

  {
    name: "ReactJs",
    image: reactjs,
  },

  {
    name: "Redux",
    image: redux,
  },

  {
    name: "NodeJs",
    image: nodejs,
  },

  {
    name: "Bootstrap",
    image: bootstrap,
  },

  {
    name: "Java",
    image: java,
  },

  {
    name: "Git",
    image: git,
  },

  {
    name: "Github",
    image: github,
  },

  {
    name: "Postman",
    image: postman,
  },

  {
    name: "Motion",
    image: motion,
  },
];

export const education = [
  {
    id: 1,
    image: czmg,
    date: "2020 - 2023",
    collegeName: "Smt CZMG BCA College",
    courseName: "B.C.A - Computer Applications",
    cityName: "Jamnagar, India",
  },

  {
    id: 2,
    image: pu,
    date: "2023 - 2025",
    collegeName: "Parul University",
    courseName: "M.Sc - IT - Big Data Analytics",
    cityName: "Vadodara, India",
  },
];

export const experience = [
  {
    id: 1,
    image: accio,
    date: "Oct 2024 - Apr 2025",
    companyName: "AccioJob Pvt. Ltd.",
    role: "Software Developer Trainee",
    cityName: "Vadodara, India",
  },
];

export const projects = [
  {
    id: 1,
    image: pincodeApi,
    name: "PincodeApi",
    tools: "ReactJs and Hooks",
    description: "Developed a Post Office fetching app with a responsive UI using ReactJs and its hooks. Integrated the Pincode API to fetch and display real-time Post Office data of a particular pincode. If a user wants to see a particular data of a post office then user can see by searching its name.",
  },
];
