import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Shield, Activity, GraduationCap, ChevronDown, User as UserIcon, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const location = useLocation();
    const { user, isAuthenticated, logout } = useAuth();

    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Modules', path: '/modules' },
        { name: 'Beneficiaries', path: '/beneficiaries' },
        { name: 'Architecture', path: '/architecture' },
        { name: 'Dashboard', path: '/dashboard' },
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-900">
            {/* Header */}
            <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-md shadow-gray-200 group-hover:shadow-blue-500/10 transition-all duration-300 border border-gray-100/50">
                                <img src="/images/logo.png" alt="SAMPARK" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-govBlue to-blue-700 leading-tight">
                                    SAMPARK Stack™
                                </span>
                                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                                    Poverty Elimination OS
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(link.path)
                                        ? 'bg-govBlue text-white shadow-md shadow-blue-900/20'
                                        : 'text-gray-600 hover:text-govBlue hover:bg-blue-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* User Profile / Login */}
                            <div className="ml-4 pl-4 border-l border-gray-100 relative">
                                {isAuthenticated ? (
                                    <div className="relative">
                                        <button
                                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                                            className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
                                        >
                                            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                                <img src={user?.avatar} alt={user?.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <span className="text-xs font-bold text-gray-900">{user?.name}</span>
                                                <span className="text-[10px] text-gray-400 leading-none">Admin</span>
                                            </div>
                                            <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* Profile Dropdown */}
                                        {isProfileOpen && (
                                            <>
                                                <div
                                                    className="fixed inset-0 z-10"
                                                    onClick={() => setIsProfileOpen(false)}
                                                ></div>
                                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-20 animate-in fade-in zoom-in duration-200">
                                                    <div className="px-4 py-3 border-b border-gray-50 mb-1">
                                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Signed in as</p>
                                                        <p className="text-sm font-bold text-gray-900 truncate">{user?.email}</p>
                                                    </div>
                                                    <Link
                                                        to="/profile"
                                                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-govBlue hover:bg-blue-50 rounded-xl transition-all"
                                                        onClick={() => setIsProfileOpen(false)}
                                                    >
                                                        <UserIcon className="w-4 h-4" /> My Profile
                                                    </Link>
                                                    <a
                                                        href="#"
                                                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-govBlue hover:bg-blue-50 rounded-xl transition-all"
                                                    >
                                                        <Settings className="w-4 h-4" /> Account Settings
                                                    </a>
                                                    <div className="h-px bg-gray-50 my-1"></div>
                                                    <button
                                                        onClick={() => {
                                                            logout();
                                                            setIsProfileOpen(false);
                                                        }}
                                                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-all"
                                                    >
                                                        <LogOut className="w-4 h-4" /> Sign Out
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ) : (
                                    <Link to="/login" className="px-6 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 active:scale-95">
                                        Login
                                    </Link>
                                )}
                            </div>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-gray-600 rounded-lg hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-b border-gray-100 py-4 animate-fade-in">
                        <div className="flex flex-col space-y-2 px-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive(link.path)
                                        ? 'bg-govBlue text-white'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                        {/* Brand Column */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-2">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1 backdrop-blur-sm border border-white/20 shadow-lg shadow-black/20">
                                    <img src="/images/logo.png" alt="SAMPARK" className="w-full h-full object-contain" />
                                </div>
                                <span className="text-2xl font-bold tracking-tight">SAMPARK Stack™</span>
                            </div>
                            <p className="text-gray-400 max-w-sm leading-relaxed mb-6 italic">
                                "Solving the complexity of multidimensional poverty via a unified, AI-driven socio-technical operating system."
                            </p>

                            {/* Platform Status */}
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">Platform Status: Operational</span>
                            </div>

                            <div className="flex gap-4 text-sm text-gray-400">
                                <Link to="/architecture" className="hover:text-white transition-colors">Architecture</Link>
                                <span>•</span>
                                <Link to="/dashboard" className="hover:text-white transition-colors">Analytics</Link>
                                <span>•</span>
                                <Link to="/beneficiaries" className="hover:text-white transition-colors">Stakeholders</Link>
                            </div>
                        </div>

                        {/* Modules Column */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <Activity className="w-4 h-4 text-blue-400" /> Solutions
                            </h3>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><Link to="/modules#mpi" className="hover:text-white transition-colors flex items-center gap-2">MPI Intelligence</Link></li>
                                <li><Link to="/modules#health" className="hover:text-white transition-colors flex items-center gap-2">Precision Health</Link></li>
                                <li><Link to="/modules#welfare" className="hover:text-white transition-colors flex items-center gap-2">Smart Welfare</Link></li>
                                <li><Link to="/modules#climate" className="hover:text-white transition-colors flex items-center gap-2">Climate Risk</Link></li>
                                <li><Link to="/modules#education" className="hover:text-white transition-colors flex items-center gap-2">Education Engine</Link></li>
                                <li><Link to="/modules#energy" className="hover:text-white transition-colors flex items-center gap-2">Energy & Housing</Link></li>
                                <li><Link to="/modules#livelihood" className="hover:text-white transition-colors flex items-center gap-2">Livelihood Market</Link></li>
                            </ul>
                        </div>

                        {/* Resources Column */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <GraduationCap className="w-4 h-4 text-purple-400" /> Resources
                            </h3>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><Link to="/resources" className="hover:text-white transition-colors">Documentation</Link></li>
                                <li><Link to="/resources" className="hover:text-white transition-colors">API Reference</Link></li>
                                <li><Link to="/beneficiaries" className="hover:text-white transition-colors">User Guides</Link></li>
                                <li><Link to="/resources" className="hover:text-white transition-colors">System Design</Link></li>
                                <li><a href="mailto:support@sampark.gov.in" className="hover:text-white transition-colors">Technical Support</a></li>
                            </ul>
                        </div>

                        {/* Legal Column */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <Shield className="w-4 h-4 text-green-400" /> Governance
                            </h3>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li className="text-[10px] text-gray-500 leading-tight mb-4 border-l-2 border-green-400/30 pl-3">
                                    Fully compliant with Digital Personal Data Protection Act (2023).
                                </li>
                                <li><Link to="/legal#privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                                <li><Link to="/legal#terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                                <li><Link to="/legal#security" className="hover:text-white transition-colors">Security Audit</Link></li>
                                <li><a href="https://cert-in.org.in" target="_blank" className="hover:text-white transition-colors">CERT-In Empaneled</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                        <div className="flex flex-col gap-1 mb-4 md:mb-0">
                            <p>© 2024-2030 Government of India. Ministry of Electronics & IT.</p>
                            <p className="text-[10px] opacity-40">Digital Public Infrastructure as Open Source Software.</p>
                        </div>
                        <div className="flex gap-6">
                            <a href="https://github.com/sampark-stack" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                            <Link to="/legal#terms" className="hover:text-white transition-colors">Responsible Disclosure</Link>
                            <a href="#status" className="hover:text-white transition-colors flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> System OK
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
