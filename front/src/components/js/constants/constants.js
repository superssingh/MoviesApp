import { apiKey } from "../api_keys/movieAPI";
const apiPath = "https://api.themoviedb.org/3/trending/movie/day?api_key=";
const imagePath = "https://image.tmdb.org/t/p/w500/";
const videoPath1 = "https://api.themoviedb.org/3/movie/";
const videoPath2 = "/videos?api_key=";
const videoLanguage = "&language=en-US";
const youtubePath = "https://www.youtube.com/embed/";

export const COMPANY_NAME = "GOGIXER";
export const ACTION_INVALID = "INVALID ACTION";
export const NETWORK_ERROR = "Network connection error";

export const HAMBURGER_CLOSE = "hamburger-close";
export const HAMBURGER_OPEN = "hamburger-open";
export const MENU_DEFAULT = "menus";
export const MOBILE_OPEN = "mobile-open";
export const MOBILE_CLOSE = "mobile-close";

export const menus = [
  { name: "Home", path: "/", id: 1 },
  { name: "Blog", path: "/blog", id: 2 },
  { name: "Services", path: "/services", id: 3 },
  { name: "Shop", path: "/shop", id: 4 },
  { name: "Contact Us", path: "/contact", id: 5 },
];

export const footer_menus = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Services", path: "/services" },
  { name: "Shop", path: "/shop" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Login", path: "/login" },
];

export const getURL = () => {
  return apiPath + apiKey;
};

export const getImagePath = (image) => {
  return imagePath + image;
};

export const getVideoKey = (movie_id) => {
  const videoURL = videoPath1 + movie_id + videoPath2 + apiKey + videoLanguage;
  return videoURL;
};

export const getVideoLink = (videoKey) => {
  const videoURL = youtubePath + videoKey;
  return videoURL;
};
