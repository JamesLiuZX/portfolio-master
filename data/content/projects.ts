import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "NFInsighT",
    desc: "All-in-one NFT Dashboard for Price Prediction, Analytics and Sentiments. Consisting over 700 NFT collections in database and complete with account authentication and wallet integration.",
    img: "/static/projects/NFinsighT.JPG",
    link: "https://nfinsight.vercel.app/",
    github: "https://github.com/SeeuSim/dogehalla",
    tags: ["Typescript", "NextJS", "TailwindCSS", "Prisma"],
  },
  {
    id: 1,
    title: "Dunman Helper",
    desc: "A simple and elegant chatbot for anyone interested in finding out more about Dunman High School. ",
    img: "/static/projects/DHelper.JPG",
    link: "https://jamesliuzx.github.io/AI-Chatbot/",
    tags: ["HTML", "CSS", "Javascript", "Python"],
  },
  {
    id: 2,
    title: "Portfolio Site",
    desc: "This current site :)",
    img: "/static/projects/portfolio1.JPG",
    link: "localhost:3000",
    tags: ["Typescript", "React", "NextJS", "TailwindCSS","Vercel"],
  },
  {
    id: 4,
    title: "MetaTrader4 Expert Advisors",
    desc: "Wrote scripts to automate trading based on customisable parameters",
    img: "/static/projects/mt4a.JPG",
    github: "https://github.com/JamesLiuZX/MetaTrader4",
    tags: ["MQL4", "C++"],
  },
  {
    id: 5,
    title: "Java Task Management Bot",
    desc: "Implemented interative brownfield chatbot using Java.",
    img: "/static/projects/herbalbath1.JPG",
    link: "https://jamesliuzx.github.io/ip/",
    github: "https://github.com/JamesLiuZX/ip",
    tags: ["Java", "JUnit"],
  },
  {
    id: 6,
    title: "Shopify E-Commerce Site",
    desc: "Designed website for business, with over 300 unique visitors per month. Added code customisations for customer needs.",
    img: "/static/projects/herbalbath1.JPG",
    link: "https://herbalbathsg.com/products/colored-hair-dye",
    tags: ["Shopify", "HTML", "CSS", "Javascript"],
  },

];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects