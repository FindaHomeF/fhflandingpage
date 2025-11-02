'use client'

export default function ChartCard({ title, data, type = 'line', color = 'var(--chart-blue)', format = 'number' }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <div className="text-center p-6">
          <p className="text-gray-600 mb-2 font-medium">Chart Preview</p>
          <p className="text-sm text-gray-500">
            Install <code className="bg-gray-200 px-2 py-1 rounded text-xs font-mono">recharts</code> to display {type} charts
          </p>
        </div>
      </div>
    </div>
  )
}
