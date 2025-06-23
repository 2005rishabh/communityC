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
    user: { name: "Priya Sharma", avatar: "https://placehold.co/100x100" },
    image: "https://placehold.co/600x400",
    location: "Juhu Beach, Mumbai",
    description: "Large amount of plastic bottles and bags dumped near the shore. Seems to be a recurring issue.",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    user: { name: "Rajesh Kumar", avatar: "https://placehold.co/100x100" },
    image: "https://placehold.co/600x400",
    location: "Connaught Place, New Delhi",
    description: "Overflowing trash can, garbage spilling onto the sidewalk. Needs immediate attention from NDMC.",
    timestamp: "1 day ago",
  },
  {
    id: "3",
    user: { name: "Anjali Singh", avatar: "https://placehold.co/100x100" },
    image: "https://placehold.co/600x400",
    location: "Ulsoor Lake, Bengaluru",
    description: "Visible chemical foam on the water surface near the promenade. Concerning for local wildlife.",
    timestamp: "3 days ago",
  },
  {
    id: "4",
    user: { name: "Vikram Patel", avatar: "https://placehold.co/100x100" },
    image: "https://placehold.co/600x400",
    location: "Sanjay Gandhi National Park, Mumbai",
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
  { rank: 1, id: "3", name: "Anjali Singh", avatar: "https://placehold.co/100x100", points: 1250, badges: ['default', 'secondary', 'outline'] },
  { rank: 2, id: "1", name: "Priya Sharma", avatar: "https://placehold.co/100x100", points: 1100, badges: ['default', 'secondary'] },
  { rank: 3, id: "2", name: "Rajesh Kumar", avatar: "https://placehold.co/100x100", points: 950, badges: ['default'] },
  { rank: 4, id: "4", name: "Vikram Patel", avatar: "https://placehold.co/100x100", points: 800, badges: ['secondary'] },
  { rank: 5, id: "5", name: "Suresh Gupta", avatar: "https://placehold.co/100x100", points: 650, badges: [] },
  { rank: 6, id: "6", name: "Meena Kumari", avatar: "https://placehold.co/100x100", points: 500, badges: ['secondary'] },
];
