import { Project, Technology } from "../types";

export const PROJECTS: Project[] = [
  {
    link: "https://bit.ly/2YZp5yF",
    image: "assets/images/3d-portal.png",
    title: "Anditi 3D Portal",
    info: "Interactive 3D interface for inspecting, measuring, and navigating complex spatial models.",
  },
  {
    link: "https://www.bigw.com.au/",
    image: "assets/images/bigw.png",
    title: "Big W - Purchase Journey",
    info: "End-to-end ownership of a high-traffic e-commerce purchasing experience, from add-to-cart to checkout.",
  },
  {
    link: "https://portal.spatial.nsw.gov.au/client/search",
    image: "assets/images/spatial-portal.png",
    title: "NSW Spatial Services — Spatial Data Portal",
    info: "Public-facing spatial data catalogue focused on discoverability, accessibility, and scalable UI architecture.",
  },
  {
    link: "https://firestory.io/",
    image: "assets/images/firestory.png",
    title: "Firestory — Early Product Build",
    info: "Early-stage product engineering for a real-time bushfire risk and prediction platform.",
  },
  {
    link: "https://bit.ly/2Pvb5qs",
    image: "assets/images/solar-app.png",
    title: "Anditi Solar App",
    info: "Data-driven web application for analysing solar energy systems through maps and visual analytics.",
  },
];

export const PROJECTS2: Project[] = [
  {
    link: "https://juliakuchina.github.io/babylonjs-house/",
    image: "assets/images/spooky-house.png",
    title: "3D Spooky House",
    info: "Interactive 3D environment exploring real-time rendering and user interaction.",
  },
  {
    link: "https://juliakuchina.github.io/data-ui-kit/",
    image: "assets/images/data-ui.png",
    title: "Data UI Kit (Analytics Exploration)",
    info: "Exploration of scalable UI patterns for analytics-heavy dashboards.",
  },
  {
    link: "https://codepen.io/JKuchina/full/BRVzYp/",
    image: "assets/images/meteorit.jpg",
    title: "Map Data Across the Globe",
    info: "Early exploration of global data visualisation and map-based interaction.",
  },
  {
    link: "https://codepen.io/JKuchina/pens/public",
    image: "assets/images/d3-force-directed.jpg",
    title: "D3 Visualisation Experiments",
    info: "Small experiments exploring layout, interaction, and information density with D3.",
  },
  {
    link: "https://codepen.io/JKuchina/full/zwBaOM/",
    image: "assets/images/gameoflife.jpg",
    title: "Game of Life",
    info: "Exploration of state management, rendering performance, and interaction logic.",
  },
];

export const TECHNOLOGIES: Technology[] = [
  { text: "React", size: 9, group: 3 },
  { text: "Typescript", size: 9, group: 3 },
  { text: "JavaScript", size: 9, group: 3 },
  { text: "Design System", size: 9, group: 7 },
  { text: "UI Architecture", size: 9, group: 1 },
  { text: "Performance", size: 9, group: 1 },

  { text: "A11y", size: 4, group: 4 },
  { text: "UX", size: 4, group: 7 },
  { text: "Motion", size: 4, group: 4 },
  { text: "CSS Arch", size: 4, group: 7 },
  { text: "State", size: 4, group: 7 },
  { text: "Testing", size: 4, group: 7 },

  { text: "Next.js", size: 3, group: 3 },
  { text: "GraphQL", size: 4, group: 3 },
  { text: "APIs", size: 2, group: 3 },
  { text: "Cloud", size: 2, group: 1 },
  { text: "React", size: 2, group: 1 },
  { text: "Tokens", size: 2, group: 1 },
  { text: "Forms", size: 2, group: 1 },
  { text: "Maps", size: 2, group: 1 },
  { text: "Realtime", size: 2, group: 1 },
  { text: "Viz", size: 2, group: 4 },
  { text: "3D", size: 2, group: 4 },
];
