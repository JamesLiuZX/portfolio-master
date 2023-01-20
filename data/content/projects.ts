import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "NFInsighT",
    desc: "All-in-one NFT Dashboard for Price Prediction, Analytics and Sentiments. Consisting over 700 NFT collections in database and complete with account authentication and wallet integration.",
    img: "/static/projects/NFinsighT.jpg",
    link: "https://nfinsight.vercel.app/",
    github: "https://github.com/SeeuSim/dogehalla",
    tags: ["Typescript", "NextJS", "TailwindCSS", "Prisma"],
  },
  {
    id: 1,
    title: "Dunman Helper",
    desc: "A simple and elegant chatbot for anyone interested in finding out more about Dunman High School. ",
    img: "/static/projects/DHelper.jpg",
    link: "https://jamesliuzx.github.io/AI-Chatbot/",
    tags: ["HTML", "CSS", "Javascript", "Python"],
  },
  {
    id: 2,
    title: "Portfolio Site",
    desc: "This current site/",
    img: "/static/projects/portfolio1.jpg",
    link: "localhost:3000",
    tags: ["Typescript", "React", "NextJS", "TailwindCSS","Vercel"],
  },
  {
    id: 3,
    title: "Netinder",
    desc: "A dating app in a Netflix format",
    img: "/static/projects/create-html-boilerplate.png",
    tags: ["React", "Node"],
  },
  {
    id: 4,
    title: "MetaTrader4 Expert Advisors",
    desc: "Wrote scripts to automate trading based on customisable parameters",
    img: "/static/projects/MQL.png",
    github: "https://github.com/JamesLiuZX/MetaTrader4",
    tags: ["MQL4", "C++"],
  },
  {
    id: 5,
    title: "Shopify E-Commerce Site",
    desc: "Designed website for business, with over 300 unique visitors per month. Added code customisations for customer needs.",
    img: "/static/projects/create-html-boilerplate.png",
    link: "https://herbalbathsg.com",
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