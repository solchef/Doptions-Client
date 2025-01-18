import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const trades = [
  { id: "T001", asset: "AAPL", type: "Put", amount: 5000, status: "Completed" },
  { id: "T002", asset: "GOOGL", type: "Call", amount: 7500, status: "Pending" },
  { id: "T003", asset: "MSFT", type: "Put", amount: 3000, status: "Completed" },
  { id: "T004", asset: "AMZN", type: "Call", amount: 6000, status: "Cancelled" },
  { id: "T005", asset: "TSLA", type: "Put", amount: 4500, status: "Completed" },
]

export function TradesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Trade ID</TableHead>
          <TableHead>Asset</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {trades.map((trade) => (
          <TableRow key={trade.id}>
            <TableCell className="font-medium">{trade.id}</TableCell>
            <TableCell>{trade.asset}</TableCell>
            <TableCell>{trade.type}</TableCell>
            <TableCell>${trade.amount.toLocaleString()}</TableCell>
            <TableCell>
              <Badge
                variant={
                  trade.status === "Completed"
                    ? "success"
                    : trade.status === "Pending"
                    ? "warning"
                    : "destructive"
                }
              >
                {trade.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

