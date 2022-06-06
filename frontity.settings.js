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
      description:
        "Sarah Krespin est née en 1993 à Londres. Elle vit actuellement à Paris et est titulaire d’un Master en recherche, création et plasticités contemporaines à l’École des Arts de la Sorbonne."
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
