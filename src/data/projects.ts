export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  featured?: boolean;
  details?: {
    client?: string;
    role?: string;
    duration?: string;
    challenges?: string[];
    solutions?: string[];
  };
}

export const projects: Project[] = [
  {
    title: "StreamX",
    description: "Stream Mobile Games Anytime, Anywhere",
    image: "/streamX.png",
    tags: ["UI Design", "UX Research", "Figma"],
    link: "#",
    featured: true,
    details: {
      role: "Lead UI/UX Designer",
      duration: "1 week",
      challenges: [
        "Streamline live streaming workflows",
        "Design intuitive gaming overlays",
        "Optimize audience interaction tools"
      ]
    }
  },
  {
    title: "Infosynex",
    description: "Professional website for innovative digital solutions.",
    image: "/infosynex.png",
    tags: ["UI/UX Design", "Website", "Figma"],
    link: "#"
  },
  {
    title: "Identifysuite",
    description: "Identify is a user-friendly platform tailored for sellers and prep centers.",
    image: "/identify.png",
    tags: ["UI/UX Design", "Web App", "Figma"],
    link: "#"
  },
  {
    title: "SwiftDrop Rider",
    description: "Streamlining deliveries with order tracking, navigation, and earnings management.",
    image: "/rider.png",
    tags: ["UI Design", "Mobile App", "Prototyping"],
    link: "#"
  }
];