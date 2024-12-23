import Icon from "./extensions/Icon.png";
import Logo from "./extensions/Logo.svg";

export default {
  config: {
    auth: {
      logo: Logo,
    },
    head: {
      favicon: Icon,
    },
    menu: {
      logo: Icon,
    },
    notifications: {
      releases: false,
    },
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to Won Games!",
        "Auth.form.welcome.subtitle": "Log in to your account",
        "app.components.LeftMenu.navbrand.title": "Won Games Dashboard",
      },
    },
    // theme: {
      // light: {
      //   colors: {
      //   },
      // },
      // dark: {
      //   colors: {
      //     primary100: "#030415",
      //     primary600: "#f231a5",
      //     primary700: "#f231a5",
      //     neutral0: "#0d102f",
      //     neutral100: "#030415",
      //   },
      // },
      // defaultMode: "dark",
    // },
    locales: [],
  },
  bootstrap() {},
};
