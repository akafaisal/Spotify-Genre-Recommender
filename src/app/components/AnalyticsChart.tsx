"use client"; // required in Next.js App Router for client components

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const data = [
  { genre: "Pop", users: 3000 },
  { genre: "Rock", users: 2000 },
  { genre: "Jazz", users: 1500 },
  { genre: "Hip-Hop", users: 4000 },
];

const songs = [
  { title: "Song A", plays: 1200 },
  { title: "Song B", plays: 980 },
  { title: "Song C", plays: 750 },
];

export default function AnalyticsChart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ml-12 p-6 ">
      {/* Chart Section */}
      <div className="p-4 border rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Genre Popularity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="genre" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#111111"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Table Section */}
      <div className="p-4 rounded-2xl shadow-md border">
        <h2 className="text-xl font-semibold mb-4">Top Songs</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Plays</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {songs.map((s, i) => (
              <TableRow key={i}>
                <TableCell>{s.title}</TableCell>
                <TableCell>{s.plays}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
