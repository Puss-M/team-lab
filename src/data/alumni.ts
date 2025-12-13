export interface Alumni {
  id: number;
  name: string;
  role: string;
  affiliation: string; // e.g., "University of Maryland", "Google"
  bio: string; // Short bio
  lat: number;
  lng: number;
  avatarUrl: string; // URL to an avatar image
  profileUrl?: string; // Link to personal homepage
}

export const alumniData: Alumni[] = [
  {
    id: 1,
    name: "Dr. Alice Chen",
    role: "Assistant Professor",
    affiliation: "University of Maryland",
    bio: "Specializing in Computer Vision and Federated Learning.",
    lat: 38.9869,
    lng: -76.9426,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    profileUrl: "#",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Research Scientist",
    affiliation: "DeepMind, London",
    bio: "Working on AGI and Reinforcement Learning.",
    lat: 51.5333, 
    lng: -0.1260, // London coords (~Kings Cross)
    avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    profileUrl: "#",
  },
  {
    id: 3,
    name: "Carol Zhang",
    role: "PhD Candidate",
    affiliation: "Stanford University",
    bio: "Researching NLP and Human-AI Interaction.",
    lat: 37.4275,
    lng: -122.1697,
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    profileUrl: "#",
  },
  {
    id: 4,
    name: "David Kumar",
    role: "Software Engineer",
    affiliation: "National University of Singapore (NUS)",
    bio: "Building scalable distributed systems.",
    lat: 1.2966,
    lng: 103.7764,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    profileUrl: "#",
  },
  {
    id: 5,
    name: "Eva Muley",
    role: "Postdoc",
    affiliation: "ETH Zurich",
    bio: "Robotics and Control Systems.",
    lat: 47.3769,
    lng: 8.5417,
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    profileUrl: "#",
  },
    {
    id: 6,
    name: "Frank Liu",
    role: "Data Scientist",
    affiliation: "Tsinghua University",
    bio: "Big Data Analytics and AI.",
    lat: 39.9997,
    lng: 116.3268,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    profileUrl: "#",
  }
];
