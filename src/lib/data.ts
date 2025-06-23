import type { BadgeProps } from "@/components/ui/badge";

export type Report = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  image: string;
  location: string;
  description: string;
  timestamp: string;
};

export const reports: Report[] = [
  {
    id: "1",
    user: { name: "Jane Doe", avatar: "https://placehold.co/100x100" },
    image: "https://placehold.co/600x400",
    location: "Riverfront Park, Smallville",
    description: "Large amount of plastic bottles and bags dumped near the river bank. Seems to be a recurring issue.",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    user: { name: "John Smith", avatar: "https://placehold.co/100x100" },
    image: "https://placehold.co/600x400",
    location: "Oak Street, Metropolis",
    description: "Overflowing trash can, garbage spilling onto the sidewalk. Needs immediate attention from sanitation department.",
    timestamp: "1 day ago",
  },
  {
    id: "3",
    user: { name: "Alice Johnson", avatar: "https://placehold.co/100x100" },
    image: "https://placehold.co/600x400",
    location: "City Lake, Gotham",
    description: "Visible oil slick on the water surface near the old factory. Concerning for local wildlife.",
    timestamp: "3 days ago",
  },
  {
    id: "4",
    user: { name: "Bob Brown", avatar: "https://placehold.co/100x100" },
    image: "https://placehold.co/600x400",
    location: "Green Valley Hiking Trail",
    description: "Construction debris left on the side of the trail, including cement bags and broken tiles.",
    timestamp: "1 week ago",
  },
];

export type LeaderboardUser = {
  rank: number;
  id: string;
  name: string;
  avatar: string;
  points: number;
  badges: BadgeProps['variant'][];
};

export const leaderboardUsers: LeaderboardUser[] = [
  { rank: 1, id: "3", name: "Alice Johnson", avatar: "https://placehold.co/100x100", points: 1250, badges: ['default', 'secondary', 'outline'] },
  { rank: 2, id: "1", name: "Jane Doe", avatar: "https://placehold.co/100x100", points: 1100, badges: ['default', 'secondary'] },
  { rank: 3, id: "2", name: "John Smith", avatar: "https://placehold.co/100x100", points: 950, badges: ['default'] },
  { rank: 4, id: "4", name: "Bob Brown", avatar: "https://placehold.co/100x100", points: 800, badges: ['secondary'] },
  { rank: 5, id: "5", name: "Charlie Davis", avatar: "https://placehold.co/100x100", points: 650, badges: [] },
  { rank: 6, id: "6", name: "Diana Prince", avatar: "https://placehold.co/100x100", points: 500, badges: ['secondary'] },
];
