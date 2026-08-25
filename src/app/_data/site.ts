export type Project = {
  title: string;
  category: string;
  location: string;
  image: string;
  imageAlt: string;
  size: "large" | "small";
};

export type JournalEntry = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
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

export const journalEntries: JournalEntry[] = [
  {
    title: "A slower way to see the coast",
    excerpt:
      "On walking without a shot list, following the weather, and finding photographs in the pauses.",
    date: "18.06.2025",
    category: "Field notes",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A quiet road leading through a coastal landscape",
  },
  {
    title: "In conversation with natural light",
    excerpt:
      "A few thoughts on making portraits that feel unhurried, open, and like the person in front of the lens.",
    date: "02.05.2025",
    category: "Process",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A portrait in warm natural light",
  },
  {
    title: "Notes from Northumberland",
    excerpt:
      "Three days, one old camera, and a landscape that changed completely every hour.",
    date: "21.03.2025",
    category: "Travel",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A mountain landscape reflected in a lake",
  },
];

export const navigation = [
  { label: "Work", href: "/work" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
