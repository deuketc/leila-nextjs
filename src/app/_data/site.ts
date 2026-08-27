export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  image: string;
  imageAlt: string;
  size: "large" | "small";
  gallery: GalleryImage[];
};

export type GalleryImage = {
  image: string;
  imageAlt: string;
};

export type InstagramImage = GalleryImage;

export type JournalEntry = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export type RecipeEntry = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export const projects: Project[] = [
  {
    slug: "still-waters",
    title: "Still waters",
    category: "Editorial",
    location: "The Hebrides",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1500&q=85",
    imageAlt: "A misty coastal landscape with a calm sea",
    size: "large",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "A misty coastal landscape with a calm sea",
      },
      {
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "A wide view across the Hebridean coast",
      },
      {
        image:
          "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Cloud and light over the water",
      },
    ],
  },
  {
    slug: "a-quiet-morning",
    title: "A quiet morning",
    category: "Portraits",
    location: "Auckland",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Portrait of a woman in soft natural light",
    size: "small",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Portrait of a woman in soft natural light",
      },
      {
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "A portrait beside a sunlit window",
      },
    ],
  },
  {
    slug: "open-country",
    title: "Open country",
    category: "Landscape",
    location: "Northumberland",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "A sunlit woodland path",
    size: "small",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "A sunlit woodland path",
      },
      {
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Open mountains under a wide sky",
      },
    ],
  },
];

export const latestProject = projects[0];

export const instagramImages: InstagramImage[] = [
  {
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Soft light across a quiet coastal landscape",
  },
  {
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A cup of coffee on a wooden table",
  },
  {
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A field of wildflowers in morning light",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Friends gathered together outdoors",
  },
  {
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Fresh ingredients arranged on a kitchen table",
  },
];

export const journalEntries: JournalEntry[] = [
  {
    slug: "a-slower-way-to-see-the-coast",
    title: "A slower way to see the coast",
    excerpt:
      "On walking without a shot list, following the weather, and finding photographs in the pauses.",
    date: "18.06.2025",
    category: "Field notes",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A quiet road leading through a coastal landscape",
    body: [
      "The coast has a way of making time feel wider. On this particular morning, the weather moved faster than I did, drawing long veils of rain across the water and then opening again to a clear strip of blue.",
      "I had arrived with a list of photographs in mind. I left it in the car. Without the pressure to make a picture, there was more room to notice the small things: a line of seaweed, a house light coming on, the shape of a path after the tide had turned.",
      "These are often the photographs I keep. Not the grand view, but the quiet evidence that I was there and paying attention.",
    ],
  },
  {
    slug: "in-conversation-with-natural-light",
    title: "In conversation with natural light",
    excerpt:
      "A few thoughts on making portraits that feel unhurried, open, and like the person in front of the lens.",
    date: "02.05.2025",
    category: "Process",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A portrait in warm natural light",
    body: [
      "The best portrait sessions rarely begin with the camera. They begin with a cup of tea, a walk around the room, and enough time for the day to settle into itself.",
      "Natural light gives us a generous starting point. It shifts gently, finds the edges of a face, and lets the person in front of me remain themselves rather than becoming a performance.",
      "My role is mostly to make space for that to happen. The photograph arrives somewhere in the conversation, usually just after everyone has stopped looking for it.",
    ],
  },
  {
    slug: "notes-from-northumberland",
    title: "Notes from Northumberland",
    excerpt:
      "Three days, one old camera, and a landscape that changed completely every hour.",
    date: "21.03.2025",
    category: "Travel",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A mountain landscape reflected in a lake",
    body: [
      "Northumberland changes character by the hour. The road north was bright and open; by late afternoon, the hills had disappeared behind a wall of cloud.",
      "I kept returning to the same stretch of water with an old camera and no particular plan. Each visit made the landscape feel less like a subject and more like a conversation.",
      "There is a particular pleasure in letting a place stay unfinished. A photograph can hold a question for a while before it needs to become an answer.",
    ],
  },
];

export const latestJournalEntry = journalEntries[0];

export const recipeEntries: RecipeEntry[] = [
  {
    slug: "the-lemon-cake-for-slow-afternoons",
    title: "The lemon cake for slow afternoons",
    excerpt:
      "A tender, bright cake made for sharing, with a generous spoonful of crème fraîche on the side.",
    date: "12.06.2025",
    category: "Baking",
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A lemon cake served on a ceramic plate",
    body: [
      "This is the kind of cake that makes an afternoon feel like it has nowhere else to be. It is bright with lemon, tender in the middle, and best served in generous slices.",
      "Beat the butter and sugar until pale, then add the eggs one at a time. Fold through the flour, zest, and a little crème fraîche before baking until golden and just springy to the touch.",
      "Finish with a simple lemon glaze while the cake is still warm. Let it settle, then serve with another spoonful of crème fraîche and a pot of tea.",
    ],
  },
  {
    slug: "tomatoes-torn-bread-summer",
    title: "Tomatoes, torn bread, summer",
    excerpt:
      "The almost-no-cook lunch that tastes like a table in the sun and asks very little of you.",
    date: "28.05.2025",
    category: "Seasonal",
    image:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A fresh seasonal salad with tomatoes and herbs",
    body: [
      "Choose the ripest tomatoes you can find and let them do most of the work. This is a generous, unfussy salad for warm days and hungry company.",
      "Tear good bread into rough pieces and toast until crisp at the edges. Toss it with tomatoes, torn basil, olive oil, red wine vinegar, and plenty of flaky salt.",
      "Leave everything together for ten minutes before serving so the bread can catch all the sweet tomato juices.",
    ],
  },
  {
    slug: "a-pot-of-green-things",
    title: "A pot of green things",
    excerpt:
      "Comforting, vibrant, and adaptable: a simple recipe for the days when the market has been generous.",
    date: "09.04.2025",
    category: "Everyday",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A bowl of vegetables and greens on a table",
    body: [
      "There is no strict recipe here, only a useful rhythm: start with onions, add whatever green vegetables look best, and give everything time to soften.",
      "Pour in stock, add a handful of beans, and simmer until the vegetables are tender. Blend only a little so the finished soup keeps some texture.",
      "Serve with herbs, good olive oil, and bread rubbed with garlic. It is even better the next day.",
    ],
  },
];

export const navigation = [
  { label: "Gallery", href: "/gallery" },
  { label: "Journal", href: "/journal" },
  { label: "Recipes", href: "/recipes" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
