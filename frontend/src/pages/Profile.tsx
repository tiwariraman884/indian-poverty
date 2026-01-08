import { useAuth } from '../context/AuthContext';
import { User, Mail, Shield, Clock, LogOut, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
        return null;
    }

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Cover / Header */}
                    <div className="h-32 bg-gradient-to-r from-govBlue to-blue-800"></div>

                    <div className="px-8 pb-12">
                        <div className="relative flex justify-between items-end -mt-12 mb-8">
                            <div className="p-1 bg-white rounded-3xl shadow-lg">
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-24 h-24 rounded-2xl object-cover"
                                />
                            </div>
                            <button
                                onClick={handleLogout}
                                className="mb-2 px-6 py-2.5 bg-red-50 text-red-600 rounded-xl font-bold flex items-center gap-2 hover:bg-red-100 transition-all border border-red-100"
                            >
                                <LogOut className="w-4 h-4" /> Sign Out
                            </button>
                        </div>

                        <div className="space-y-1">
                            <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                            <p className="text-gray-500 font-medium flex items-center gap-2">
                                <Shield className="w-4 h-4 text-govBlue" /> {user.role}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            {/* Personal Info */}
                            <div className="space-y-6">
                                <h2 className="text-lg font-bold text-gray-900 border-b border-gray-50 pb-2">Identity Details</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className="p-2.5 bg-white rounded-xl shadow-sm"><User className="w-5 h-5 text-gray-400" /></div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Full Name</p>
                                            <p className="text-sm font-bold text-gray-900">{user.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className="p-2.5 bg-white rounded-xl shadow-sm"><Mail className="w-5 h-5 text-gray-400" /></div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Email Address</p>
                                            <p className="text-sm font-bold text-gray-900">{user.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Security Session */}
                            <div className="space-y-6">
                                <h2 className="text-lg font-bold text-gray-900 border-b border-gray-50 pb-2">Session Integrity</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className="p-2.5 bg-white rounded-xl shadow-sm"><Clock className="w-5 h-5 text-emerald-500" /></div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Login Time</p>
                                            <p className="text-sm font-bold text-gray-900">Today, 10:42 AM</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                                        <div className="p-2.5 bg-white rounded-xl shadow-sm"><Shield className="w-5 h-5 text-govBlue" /></div>
                                        <div>
                                            <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">Security Level</p>
                                            <p className="text-sm font-bold text-govBlue">Tier 1 (Administrative)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-gray-900 rounded-3xl text-white">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold">Digital Signature Status</h3>
                                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/20">VERIFIED</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Your account is linked with ABHA ID and is currently active for District-level MPI score generation.
                            </p>
                            <button className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all text-blue-400">
                                View Security Logs <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
