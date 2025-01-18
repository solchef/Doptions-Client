import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, DollarSign, Activity, Users } from 'lucide-react'

const stats = [
  { name: 'Total Trades', stat: '1,234', icon: TrendingUp, change: '12%', changeType: 'increase' },
  { name: 'Portfolio Value', stat: '$1,234,567', icon: DollarSign, change: '2.5%', changeType: 'increase' },
  { name: 'Win Rate', stat: '68%', icon: Activity, change: '4%', changeType: 'increase' },
  { name: 'Active Traders', stat: '2,345', icon: Users, change: '3%', changeType: 'decrease' },
]

export function WelcomeCard() {
  return (
    <>
      {stats.map((item) => (
        <Card key={item.name}>
          <CardContent className="flex items-center justify-between p-6">
            <div className="flex items-center">
              <div className="mr-4 rounded-full bg-blue-100 p-3">
                <item.icon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">{item.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              </div>
            </div>
            <div className={`text-sm ${item.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
              {item.change}
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

