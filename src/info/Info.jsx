import self from "../img/self.jpg";

// export let colors = ["rgb(0,255,255)", "rgb(166,104,255)"];
export let colors = ["rgb(0,255,255)", "rgb(50,104,255)"];


export const info = {
  firstName: "Juan",
  lastName: "Allegretti",
  initials: "JA",
  position: "a Cyber Security Engineer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors["0"],
  miniBio: [
    {
      emoji: "🎓",
      text: "Computer Engineer @ UNLaM",
    },
    {
      emoji: "💼",
      text: "Cyber Security Engineer @ Mercado Libre",
    },
    {
      emoji: "📧",
      text: "juan.allegretti@outlook.com",
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/people/Juan-Allegretti/pfbid037TtX5Jrq2Yes3g8T9qxxoAHXJQETLz5RMXCGrwwUzvJ8PTnGF6Mw4b6DJ5xG3rmzl/",
      icon: "fab fa-facebook",
      label: "facebook",
    },
    {
      link: "https://instagram.com/juan.allegretti",
      icon: "fab fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/juan-allegretti",
      icon: "fab fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com/in/juanallegretti",
      icon: "fab fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://www.x.com/juanallegretti",
      icon: "fa-brands fa-x-twitter",
      label: "x",
    },
    {
      link: "https://www.threads.net/juan.allegretti",
      icon: "fa-brands fa-threads",
      label: "threads",
    },
  ],
};
