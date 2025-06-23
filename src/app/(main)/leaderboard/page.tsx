import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { leaderboardUsers } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";

const badgeIcons: Record<NonNullable<BadgeProps['variant']>, React.ReactNode> = {
  default: <Trophy className="h-4 w-4 text-yellow-500" />,
  secondary: <Medal className="h-4 w-4 text-slate-400" />,
  destructive: null,
  outline: <Award className="h-4 w-4 text-orange-500" />,
};

export default function LeaderboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">Leaderboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Top Pollution Spotters</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Rank</TableHead>
                <TableHead>User</TableHead>
                <TableHead className="text-right">Points</TableHead>
                <TableHead className="text-center">Badges</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-bold text-lg">
                    {user.rank}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} data-ai-hint="person face" />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-mono">{user.points}</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      {user.badges.length > 0 ? (
                        user.badges.map((variant, index) => (
                           variant && badgeIcons[variant] ? <span key={index}>{badgeIcons[variant]}</span> : null
                        ))
                      ) : (
                        <span className="text-xs text-muted-foreground">-</span>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
