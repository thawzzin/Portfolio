import dota2 from "../../assets/videos/Dota2.mp4";
import shopit from "../../assets/videos/shopit.mp4";
import filmverse from "../../assets/videos/Filmverse.mp4";
import filmverseMobile from "../../assets/videos/filmverse-mobile.mp4";
import filmverseMobile2 from "../../assets/videos/filmverse-mobile2.mp4";
import blueocean from "../../assets/videos/blueocean.webm";
import juggernaut from "../../assets/images/juggernaut.png";
import shoppingcart from "../../assets/images/Shoppingcart.png";
import bologo from "../../assets/images/bologo.png";
import film from "../../assets/images/film.png";
import reactIcon from "../../assets/icons/react.png";
import tsIcon from "../../assets/icons/typescript.png";
import reduxIcon from "../../assets/icons/redux.png";
import tailwindIcon from "../../assets/icons/tailwind.png";
import firebaseIcon from "../../assets/icons/firebase.png";
import shadcnIcon from "../../assets/icons/shadcnicon.png";
import nextIcon from "../../assets/icons/nextjs.png";

export const projects = [
  {
    title: "Blue Ocean Comapny Landing Page",
    type: "web",
    description:
      "A landing page of my previous company using React, Tailwindcss, Shadcn along with the dashboard for CMS.",
    video: blueocean,
    url: "https://blueoceanmm.com",
    githubUrl: "",
    img: bologo,
    libs: [reactIcon, tailwindIcon, shadcnIcon],
  },
  {
    title: "Shopit",
    type: "web",
    description:
      "A responsive e-commerce shopping website with dummyjson api. Developed to enhance my skills in developing online stores and e-commerce platforms.",
    video: shopit,
    url: "https://shopit-tz.vercel.app/",
    githubUrl: "https://github.com/Zett1e/shopit",
    img: shoppingcart,
    libs: [reactIcon, tsIcon, reduxIcon, tailwindIcon],
  },
  {
    title: "Dota 2",
    type: "web",
    description:
      "A website for Dota 2, the best and most exciting moba game!, using opendota api. Intended to learn more about dota2 and know some details. You can go take a look for hero details and lores and details of your favourite pro team if you interested.",
    video: dota2,
    url: "https://dota2-landing-page.vercel.app/",
    githubUrl: "https://github.com/Zett1e/Dota2-Landing-Page",
    img: juggernaut,
    libs: [reactIcon, tailwindIcon],
  },
  {
    title: "Filmverse",
    type: "web",
    description:
      "A movie streaming website with the movie database api. Get in touch with popular films, get some details of your favourite movie and find the one for friday night, including trailers, Just go there and start streaming.",
    video: filmverse,
    url: "https://thefilmverse.vercel.app/",
    githubUrl: "https://github.com/thawzzin/filmversev2",
    img: film,
    libs: [nextIcon, tailwindIcon],
  },
  {
    title: "Filmverse Mobile",
    type: "mobile",
    description:
      "A movie project using react native and firebase authentication. A personal project I've made while learning React Native. ",
    video: filmverseMobile,
    video2: filmverseMobile2,
    githubUrl: "https://github.com/Zett1e/Filmverse-mobile",
    img: film,
    libs: [reactIcon, firebaseIcon],
  },
];
