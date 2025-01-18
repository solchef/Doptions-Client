"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { date: "2023-01", put: 4000, call: 2400 },
  { date: "2023-02", put: 3000, call: 1398 },
  { date: "2023-03", put: 2000, call: 9800 },
  { date: "2023-04", put: 2780, call: 3908 },
  { date: "2023-05", put: 1890, call: 4800 },
  { date: "2023-06", put: 2390, call: 3800 },
  { date: "2023-07", put: 3490, call: 4300 },
]

export function OptionsChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
        <Tooltip />
        <Line type="monotone" dataKey="put" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="call" stroke="#82ca9d" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

