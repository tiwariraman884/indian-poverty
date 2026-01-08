import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { MapPin, TrendingDown, Bell } from 'lucide-react'

export default function DistrictView() {
  const [households] = useState([
    { id: '001', geoCode: 'UP-LKO-001', members: 5, mpiScore: 0.42, risk: 'HIGH' },
    { id: '002', geoCode: 'UP-LKO-002', members: 4, mpiScore: 0.28, risk: 'MEDIUM' },
    { id: '003', geoCode: 'UP-LKO-003', members: 6, mpiScore: 0.15, risk: 'LOW' },
  ])

  const trendData = [
    { month: 'Jan', score: 0.45 },
    { month: 'Feb', score: 0.43 },
    { month: 'Mar', score: 0.40 },
    { month: 'Apr', score: 0.38 },
    { month: 'May', score: 0.35 },
    { month: 'Jun', score: 0.33 },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">District Collector View</h2>
          <p className="text-gray-600">Lucknow District, Uttar Pradesh</p>
        </div>
        <button className="bg-govBlue text-white px-6 py-2 rounded-lg flex items-center gap-2">
          <Bell size={20} />
          Send Alerts
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <TrendingDown className="text-govGreen" />
          MPI Score Trend (Declining = Good)
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={trendData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#15803D" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">High-Risk Households</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Geo Code</th>
                <th className="px-4 py-3 text-left">Members</th>
                <th className="px-4 py-3 text-left">MPI Score</th>
                <th className="px-4 py-3 text-left">Risk Level</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {households.map((h) => (
                <tr key={h.id} className="border-b">
                  <td className="px-4 py-3 flex items-center gap-2">
                    <MapPin size={16} className="text-gray-500" />
                    {h.geoCode}
                  </td>
                  <td className="px-4 py-3">{h.members}</td>
                  <td className="px-4 py-3 font-mono">{h.mpiScore}</td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 rounded-full text-sm font-medium">
                      {h.risk}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-govBlue hover:underline">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
