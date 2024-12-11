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
    title: "POS Point of Sale",
    description: "Modern POS system with intuitive interface for restaurants",
    image: "/pointofSale.png",
    tags: ["UI Design", "UX Research", "Figma"],
    link: "#",
    featured: true,
    details: {
      role: "Lead UI/UX Designer",
      duration: "2 weeks",
      challenges: [
        "Simplify complex ordering workflows",
        "Design intuitive table management",
        "Create efficient payment processing flow"
      ]
    }
  },
  {
    title: "Task Management",
    description: "A mobile app for managing tasks and team collaboration",
    image: "/task.png",
    tags: ["UI/UX Design", "Mobile App", "Figma"],
    link: "#"
  },
  {
    title: "InfoSynex",
    description: "Information management and sharing platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tags: ["UI/UX Design", "Web App", "Figma"],
    link: "#"
  },
  {
    title: "Crypto Wallet",
    description: "Crypto trading and portfolio management app",
    image: "/crypto.png",
    tags: ["UI Design", "Mobile App", "Prototyping"],
    link: "#"
  }
];