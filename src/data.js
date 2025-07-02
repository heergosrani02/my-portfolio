import html5 from "./assets/img/html.png";
import css3 from "./assets/img/css3.png";
import javascript from "./assets/img/javascript.png";
import reactjs from "./assets/img/reactJs.png";
import redux from "./assets/img/redux.png";
import tailwindCss from "./assets/img/tailwindCss.png";
import java from "./assets/img/java.png";
import git from "./assets/img/git.png";
import github from "./assets/img/github.png";
import postman from "./assets/img/postman.png";
import motion from "./assets/img/motion.png";
import accio from "./assets/img/acciojob.png";
import hariaSchool from "./assets/img/hariaSchool.png";
import tapovan from "./assets/img/tapovanSchool.png";
import czmg from "./assets/img/czmg.png";
import pu from "./assets/img/pu.png";
import pincodeApi from "./assets/img/pincodeApi.png";
import googleExcelClone from "./assets/img/googleExcelClone.png";
import youtubeClone from "./assets/img/YoutubeClone.png";

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
    name: "TailwindCss",
    image: tailwindCss,
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
    image: hariaSchool,
    date: "2017 - 2018",
    collegeName: "Shri L.G Haria High School",
    courseName: "S.S.C",
    cityName: "Jamnagar, India",
  },

  {
    id: 2,
    image: tapovan,
    date: "2019 - 2020",
    collegeName: "Tapovan Vatsalyadham",
    courseName: "H.S.C",
    cityName: "Gadhinagar, India",
  },

  {
    id: 3,
    image: czmg,
    date: "2020 - 2023",
    collegeName: "Smt CZMG BCA College",
    courseName: "B.C.A - Computer Applications",
    cityName: "Jamnagar, India",
  },

  {
    id: 4,
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
    image: googleExcelClone,
    name: "Google Excel Clone",
    tools: "HTML5, CSS3 and Javascript",
    description: "Developed a web-based spreadsheet application inspired by Google Sheets and Integrated the some of its feature like Cell formating, Text Decoration, Real-time updates and Text Alignment etc. Enabled users to style cells dynamically.",
    githubLink: "https://github.com/heergosrani02/google-excel-clone",
    liveDemo: "https://google-excel-clone.vercel.app/",
  },

  {
    id: 2,
    image: pincodeApi,
    name: "PincodeApi",
    tools: "ReactJs and Hooks",
    description: "Developed a Post Office fetching app with a responsive UI using ReactJs and its hooks. Integrated the Pincode API to fetch and display real-time Post Office data of a particular pincode. If a user wants to see a particular data of a post office then user can see by searching its name.",
    githubLink: "https://github.com/heergosrani02/pincodeApi",
    liveDemo: "https://pincode-api-pearl.vercel.app/"
  },

  {
    id: 3,
    image: youtubeClone,
    name: "Youtube Clone",
    tools: "ReactJs and Hooks",
    description: "Developed a youtube clone using youtube data v3 api that fetches and display real-time video data, including titles, thumbnails, and descriptions and created a realtime videoPage like youtube. Ensured a seamless user experience with efficient API handling and error management.",
    githubLink: "https://github.com/heergosrani02/youtube-clone",
    liveDemo: "https://youtube-clone-mu-sable.vercel.app/",
  },
];


