import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Activity, Users, Home, AlertTriangle } from 'lucide-react'

export default function Dashboard() {
  const stats = {
    totalHouseholds: 45678,
    highRisk: 2341,
    mediumRisk: 8765,
    lowRisk: 34572,
  }

  const mpiData = [
    { name: 'Health', value: 0.18 },
    { name: 'Education', value: 0.12 },
    { name: 'Living Std', value: 0.39 },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">National Poverty Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Households</p>
              <p className="text-2xl font-bold">{stats.totalHouseholds.toLocaleString()}</p>
            </div>
            <Home className="text-govBlue" size={32} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">High Risk</p>
              <p className="text-2xl font-bold text-govRed">{stats.highRisk.toLocaleString()}</p>
            </div>
            <AlertTriangle className="text-govRed" size={32} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Medium Risk</p>
              <p className="text-2xl font-bold text-govYellow">{stats.mediumRisk.toLocaleString()}</p>
            </div>
            <Users className="text-govYellow" size={32} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Low Risk</p>
              <p className="text-2xl font-bold text-govGreen">{stats.lowRisk.toLocaleString()}</p>
            </div>
            <Activity className="text-govGreen" size={32} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">MPI Score Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mpiData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#1E40AF" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Recent Interventions</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-govGreen pl-4">
              <p className="font-medium">Health Screening Completed</p>
              <p className="text-sm text-gray-600">UP-LKO-001 - 245 households</p>
            </div>
            <div className="border-l-4 border-govBlue pl-4">
              <p className="font-medium">PDS Distribution</p>
              <p className="text-sm text-gray-600">MH-MUM-042 - 1,234 beneficiaries</p>
            </div>
            <div className="border-l-4 border-govYellow pl-4">
              <p className="font-medium">Climate Alert Issued</p>
              <p className="text-sm text-gray-600">GJ-AMD-012 - Heat wave warning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
