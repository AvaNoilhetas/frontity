import { config } from "dotenv";

// Launch dot-env.
config();
const API_URL = process.env.REACT_APP_API_URL;

const settings = {
  name: "frontity",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Sarah Krespin",
      description: "WordPress installation for Frontity development"
    }
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [],
          featured: {
            showOnList: false,
            showOnPost: false
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: API_URL,
          homepage: "home"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
