import { Wallet, Briefcase, Heart, Book, CloudLightning, Home, UserCheck, Stethoscope, Landmark, BadgePercent } from 'lucide-react';

const Beneficiaries = () => {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Who We Serve</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        SAMPARK Stack™ connects the entire ecosystem of poverty elimination, from the highest levels of governance to the individual household.
                    </p>
                </div>

                {/* End Beneficiaries */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px bg-gray-200 flex-grow"></div>
                        <h2 className="text-2xl font-bold text-govBlue uppercase tracking-widest text-center px-4">End Beneficiaries</h2>
                        <div className="h-px bg-gray-200 flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Rural Households", desc: "Access to entitlements, clean energy, and housing.", icon: <Home className="w-8 h-8" />, color: "bg-orange-100 text-orange-600" },
                            { title: "Urban Informal Settlements", desc: "Recognition, sanitation, and health services.", icon: <UserCheck className="w-8 h-8" />, color: "bg-blue-100 text-blue-600" },
                            { title: "Women Entrepreneurs", desc: "Micro-credit, SHG market linkage, and skill growth.", icon: <Wallet className="w-8 h-8" />, color: "bg-pink-100 text-pink-600" },
                            { title: "Vulnerable Groups", desc: "Children, elderly, and disabled citizens.", icon: <Heart className="w-8 h-8" />, color: "bg-red-100 text-red-600" }
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all border border-gray-100 group cursor-pointer">
                                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-govBlue transition-colors">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Primary Users (Govt) */}
                <div className="mb-24 bg-govBlue/5 rounded-3xl p-12">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-govBlue uppercase tracking-widest mb-4">Primary Users (Governance)</h2>
                        <p className="text-gray-600">Enabling data-driven decisions for administrators.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "District Collectors", desc: "Real-time dashboard of district MPI heatmaps and budget burn-down.", icon: <Landmark className="w-8 h-8" /> },
                            { title: "State Departments", desc: "Policy planning based on granular, aggregated live signals.", icon: <Briefcase className="w-8 h-8" /> },
                            { title: "Block Officers", desc: "Last-mile monitoring and intervention deployment.", icon: <UserCheck className="w-8 h-8" /> }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl p-8 shadow-sm text-center hover:shadow-lg transition-all cursor-pointer group">
                                <div className="w-16 h-16 rounded-full bg-blue-50 text-govBlue flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-govBlue transition-colors">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Secondary Users (Frontline) */}
                <div>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px bg-gray-200 flex-grow"></div>
                        <h2 className="text-2xl font-bold text-govBlue uppercase tracking-widest text-center px-4">Frontline Workforce</h2>
                        <div className="h-px bg-gray-200 flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition cursor-pointer group">
                            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Stethoscope className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-govBlue transition-colors">ASHA & Anganwadi Workers</h3>
                                <p className="text-gray-600">Equipped with offline-first apps for health scanning, growth monitoring, and nutrition tracking.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition cursor-pointer group">
                            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <BadgePercent className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-govBlue transition-colors">FPS Dealers & SHG Leaders</h3>
                                <p className="text-gray-600">Blockchain-enabled PoS systems for ration delivery and livelihood product marketplace management.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Beneficiaries;
