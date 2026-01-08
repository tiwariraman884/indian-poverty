import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'
import Modules from './pages/Modules'
import Beneficiaries from './pages/Beneficiaries'
import Architecture from './pages/Architecture'
import Dashboard from './pages/Dashboard'
import DistrictView from './pages/DistrictView'
import Login from './pages/Login'
import Resources from './pages/Resources'
import Legal from './pages/Legal'
import Profile from './pages/Profile'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/modules" element={<Layout><Modules /></Layout>} />
        <Route path="/beneficiaries" element={<Layout><Beneficiaries /></Layout>} />
        <Route path="/architecture" element={<Layout><Architecture /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/district" element={<Layout><DistrictView /></Layout>} />
        <Route path="/resources" element={<Layout><Resources /></Layout>} />
        <Route path="/legal" element={<Layout><Legal /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
