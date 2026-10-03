export interface Author {
  id: string;
  name: string;
  slug: string;
  handle: string;
  email: string;
  role: string;
  isPlaceholderBio: boolean;
  biography: string;
  avatar: string;
  photo: string;
  socials: {
    x: string;
    instagram: string;
    github: string;
    email: string;
  };
  topics: string[];
}

export const authorData: Author = {
  id: "author-srijan-prasad",
  name: "Srijan Prasad",
  slug: "srijan-prasad",
  handle: "@Ushan_0",
  email: "srijanprasad2006@gmail.com",
  role: "Developer, Open Source Contributor & Knowledge Architect",
  isPlaceholderBio: false,
  biography: "Developer, open-source contributor, and digital knowledge architect. Speaker on WordPress Security & Cleanup at WordCamp Bhopal 2023, and Pattern Table Lead at WordCamp Bhopal 2025. Writing on Full Site Editing (FSE), modern web architecture, generative search optimization (GEO/AEO), and personal knowledge systems.",
  avatar: "/srijan-prasad-avatar.png",
  photo: "/srijan-prasad-photo.jpg",
  socials: {
    x: "https://x.com/Ushan_0",
    instagram: "https://www.instagram.com/srijanprasad_/",
    github: "https://github.com/Srijanprasad",
    email: "mailto:srijanprasad2006@gmail.com"
  },
  topics: [
    "WordPress & Open Source",
    "Full Site Editing (FSE)",
    "Generative Engine Optimization",
    "Software Engineering",
    "Knowledge Architecture"
  ]
};
