import blueberryBottle from "../assets/blueberry.png";
import limeBottle from "../assets/lime.png";
import orangeBottle from "../assets/orange.png";
import strawberryBottle from "../assets/strawberry.png";

export const products = [
  {
    id: "orange",
    label: "Orange Zest",
    headline: ["Fresh Orange &", "Citrus Blend", "In One"],
    price: "$13.00",
    description:
      "Fresh orange from local farmers blended into a creamy citrus yogurt drink. Built for bright energy, recovery, and all-day refreshment.",
    image: orangeBottle,
    theme: {
      page: "#f08c2e",
      pageDark: "#d96c14",
      accent: "#ffe08a",
      accentText: "#b45b11",
      soft: "#fff3df",
      badgeMain: "#ffe07e",
      badgeMainText: "#b35a12",
      badgeSecond: "#ff6b3d",
      badgeThird: "#09090b",
    },
    badges: [
      { value: "50%", label: "Fresh Orange", variant: "main", position: "top" },
      {
        value: "25%",
        label: "Citrus Boost",
        variant: "second",
        position: "middle",
      },
      { value: "25%", label: "Love", variant: "third", position: "bottom" },
    ],
  },
  {
    id: "lime",
    label: "Citrus Mint",
    headline: ["Lime Mint", "Cooler Fusion", "For Balance"],
    price: "$12.50",
    description:
      "A bright lime base, mellow yogurt texture, and a fresh mint finish that keeps the whole sip calm, light, and crisp.",
    image: limeBottle,
    theme: {
      page: "#67ba5d",
      pageDark: "#4eaa52",
      accent: "#f2f08d",
      accentText: "#4b8b3e",
      soft: "#f3fff1",
      badgeMain: "#f1f58f",
      badgeMainText: "#4a7e35",
      badgeSecond: "#2f8f71",
      badgeThird: "#16311f",
    },
    badges: [
      { value: "45%", label: "Fresh Lime", variant: "main", position: "top" },
      {
        value: "20%",
        label: "Mint Leaf",
        variant: "second",
        position: "middle",
      },
      { value: "18%", label: "Cool", variant: "third", position: "bottom" },
    ],
  },
  {
    id: "strawberry",
    label: "Berry Bloom",
    headline: ["Strawberry", "Bloom Blend", "For Focus"],
    price: "$14.20",
    description:
      "Creamy strawberry yogurt brightened with floral notes for a smoother energy curve and a sweeter finish through the day.",
    image: strawberryBottle,
    theme: {
      page: "#e33b32",
      pageDark: "#e33b32",
      accent: "#ffd56b",
      accentText: "#b04f67",
      soft: "#fff1f4",
      badgeMain: "#ffe07e",
      badgeMainText: "#a54c65",
      badgeSecond: "#ff6a5d",
      badgeThird: "#281320",
    },
    badges: [
      { value: "40%", label: "Sweet Berry", variant: "main", position: "top" },
      {
        value: "22%",
        label: "Silky Yogurt",
        variant: "second",
        position: "middle",
      },
      { value: "12%", label: "Glow", variant: "third", position: "bottom" },
    ],
  },
  {
    id: "blueberry",
    label: "Blue Calm",
    headline: ["Blueberry", "Protein Sip", "To Reset"],
    price: "$14.80",
    description:
      "Blueberry-rich yogurt with a deeper, mellow finish. Designed for quiet focus, recovery sessions, and long creative work.",
    image: blueberryBottle,
    theme: {
      page: "#5e74df",
      pageDark: "#4d61d2",
      accent: "#8fd7ff",
      accentText: "#4054b7",
      soft: "#edf3ff",
      badgeMain: "#93d8ff",
      badgeMainText: "#3b53a8",
      badgeSecond: "#3556c8",
      badgeThird: "#151b33",
    },
    badges: [
      { value: "38%", label: "Blue Fruit", variant: "main", position: "top" },
      {
        value: "24%",
        label: "Calm Focus",
        variant: "second",
        position: "middle",
      },
      { value: "16%", label: "Reset", variant: "third", position: "bottom" },
    ],
  },
];

export const topNav = ["Find Store", "Delivery", "Products", "About Us"];

export const stripItems = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  label: "Calmly Energize",
}));
