import Thumbnail from "../../assets/finance-image.jpg";

export const articles = [
  {
    id: 1,
    category: "BUSINESS",
    title: "How to Start a Business Without Capital",
    description:
      "Discover creative strategies for launching ventures with zero upfront cost.",
    duration: "7 mins to read",
    thumbnail: Thumbnail,
    isFeatured: true,
  },
  {
    id: 2,
    category: "FINANCE",
    title: "Investing 101: A Beginner’s Guide",
    description:
      "A friendly walkthrough of the fundamentals of modern investing.",
    duration: "5 mins to read",
    thumbnail: Thumbnail,
    isFeatured: true,
  },
  {
    id: 3,
    category: "TECH",
    title: "How AI is Changing Everyday Life",
    description:
      "Explore how artificial intelligence quietly powers daily routines.",
    duration: "6 mins to read",
    thumbnail: Thumbnail,
    isFeatured: true,
  },
  {
    id: 4,
    category: "CAREER",
    title: "Top Skills to Learn in 2025",
    description:
      "Future-proof your career with essential skills employers value.",
    duration: "8 mins to read",
    thumbnail: Thumbnail,
    isFeatured: false,
  },
  {
    id: 5,
    category: "ECONOMY",
    title: "Understanding Inflation in Simple Terms",
    description:
      "A clear explanation of inflation and how it affects your spending power.",
    duration: "4 mins to read",
    thumbnail: Thumbnail,
    isFeatured: false,
  },
  {
    id: 6,
    category: "PRODUCTIVITY",
    title: "Daily Habits That Boost Productivity",
    description:
      "Simple habits you can practice to get more done without burnout.",
    duration: "5 mins to read",
    thumbnail: Thumbnail,
    isFeatured: true,
  },
  {
    id: 7,
    category: "TECH",
    title: "Cybersecurity Basics Everyone Should Know",
    description:
      "Protect your digital life with these essential cybersecurity tips.",
    duration: "6 mins to read",
    thumbnail: Thumbnail,
    isFeatured: true,
  },
  {
    id: 8,
    category: "FINANCE",
    title: "Smart Budgeting for Students",
    description: "Learn how to manage allowances and expenses the smart way.",
    duration: "4 mins to read",
    thumbnail: Thumbnail,
    isFeatured: true,
  },
];

export const featuredArticles = articles.filter(
  (article) => article.isFeatured
);
