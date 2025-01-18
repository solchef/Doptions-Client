import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'

const stats = [
  { name: 'S&P 500', stat: '4,185.81', change: '35.88', changePercent: '0.86%', trend: 'up' },
  { name: 'Nasdaq', stat: '12,888.28', change: '114.97', changePercent: '0.89%', trend: 'up' },
  { name: 'Dow Jones', stat: '33,886.47', change: '113.35', changePercent: '0.33%', trend: 'up' },
  { name: 'Russell 2000', stat: '1,810.50', change: '4.89', changePercent: '0.27%', trend: 'down' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function MarketOverview() {
  return (
    <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {stats.map((item) => (
        <div key={item.name} className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
          <dt>
            <p className="truncate text-sm font-medium text-gray-500">{item.name}</p>
          </dt>
          <dd className="flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
            <p
              className={classNames(
                item.trend === 'up' ? 'text-green-600' : 'text-red-600',
                'ml-2 flex items-baseline text-sm font-semibold'
              )}
            >
              {item.trend === 'up' ? (
                <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
              ) : (
                <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
              )}
              <span className="sr-only"> {item.trend === 'up' ? 'Increased' : 'Decreased'} by </span>
              {item.change} ({item.changePercent})
            </p>
          </dd>
        </div>
      ))}
    </dl>
  )
}

