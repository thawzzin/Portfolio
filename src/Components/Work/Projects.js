import dota2 from "../../Assets/Video/Dota2.mp4";
import shopit from "../../Assets/Video/shopit.mp4";
import filmverse from "../../Assets/Video/Filmverse.mp4";
import filmverseMobile from "../../Assets/Video/filmverse-mobile.mp4";
import filmverseMobile2 from "../../Assets/Video/filmverse-mobile2.mp4";
import juggernaut from "../../Assets/Image/juggernaut.png";
import shoppingcart from "../../Assets/Image/Shoppingcart.png";
import film from "../../Assets/Image/film.png";
import reactIcon from "../../Assets/Icons/react.png";
import tsIcon from "../../Assets/Icons/typescript.png";
import reduxIcon from "../../Assets/Icons/redux.png";
import sassIcon from "../../Assets/Icons/sass.png";
import tailwindIcon from "../../Assets/Icons/tailwind.png";
import firebaseIcon from "../../Assets/Icons/firebase.png";

export const projects = [
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
      "A movie project with the movie database api. Wanna know what are popular now? Wanna know details of your favourite movie? Dont know what to watch? Wanna find and watch trailers? Just go there take a look.",
    video: filmverse,
    url: "https://filmverse-tz.vercel.app/",
    githubUrl: "https://github.com/Zett1e/Filmverse",
    img: film,
    libs: [reactIcon, sassIcon],
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
