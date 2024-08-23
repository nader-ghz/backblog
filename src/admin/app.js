import logo from "./logo.png";
const config = {
  translations: {
    en: {
      'app.components.LeftMenu.navbrand.title': 'Pointdev Blog',
      'app.components.LeftMenu.navbrand.title': 'Pointdev Blog'
    }
  },
  auth :{
    logo
  },
  theme : {
    light : "light"
  },
  menu : {
    logo
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
