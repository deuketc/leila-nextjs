export type Project = {
  title: string;
  category: string;
  location: string;
  image: string;
  imageAlt: string;
  size: "large" | "small";
};

export const projects: Project[] = [
  {
    title: "Still waters",
    category: "Editorial",
    location: "The Hebrides",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1500&q=85",
    imageAlt: "A misty coastal landscape with a calm sea",
    size: "large",
  },
  {
    title: "A quiet morning",
    category: "Portraits",
    location: "London",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Portrait of a woman in soft natural light",
    size: "small",
  },
  {
    title: "Open country",
    category: "Landscape",
    location: "Northumberland",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "A sunlit woodland path",
    size: "small",
  },
];

export const navigation = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
