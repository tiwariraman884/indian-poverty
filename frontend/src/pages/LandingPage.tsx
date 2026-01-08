import { ArrowRight, Shield, Zap, Heart, CloudLightning, ShoppingBag, BookOpen, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/landing_hero.png"
                        alt="SAMPARK Vision"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            Live: Pilot Active in 2 Districts
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Predict. Prevent. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                                Eliminate Poverty.
                            </span>
                        </h1>

                        <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                            From scheme delivery to capability assurance. SAMPARK Stack™ is India's first AI-driven socio-technical operating system designed to identify and remediate multidimensional poverty in real-time.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/modules" className="px-8 py-4 bg-govBlue text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2">
                                Explore The Stack <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/architecture" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
                                View Architecture
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Stats overlay */}
                <div className="absolute bottom-0 w-full bg-black/30 backdrop-blur-md border-t border-white/10 py-6">
                    <div className="max-w-7xl mx-auto px-4 flex justify-between md:justify-start gap-12 text-white/80">
                        <div>
                            <p className="text-3xl font-bold text-white">100Cr+</p>
                            <p className="text-xs uppercase tracking-wider">Records Capacity</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">99.9%</p>
                            <p className="text-xs uppercase tracking-wider">Uptime SLA</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">&lt;2s</p>
                            <p className="text-xs uppercase tracking-wider">Response Time</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Statement Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base text-govBlue font-bold tracking-wide uppercase mb-2">The Challenge</h2>
                        <p className="text-4xl font-bold text-gray-900 mb-4">India doesn't lack schemes. It lacks visibility.</p>
                        <p className="text-lg text-gray-600">Current systems measure poverty after the damage is done. We are shifting the paradigm from reactive governance to predictive intervention.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Fragmented Data", desc: "Siloed information across departments prevents holistic view of household needs.", icon: <Activity className="w-8 h-8 text-red-500" /> },
                            { title: "Delivery Leakage", desc: "Inefficient supply chains and identity fraud reduce impact of welfare spending.", icon: <Shield className="w-8 h-8 text-orange-500" /> },
                            { title: "Reactive Governance", desc: "Interventions happen too late. We need to prevent deprivation before it becomes irreversible.", icon: <Zap className="w-8 h-8 text-yellow-500" /> }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modules Preview Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-base text-govBlue font-bold tracking-wide uppercase mb-2">Core Modules</h2>
                            <p className="text-4xl font-bold text-gray-900">A Unified Operating System</p>
                        </div>
                        <Link to="/modules" className="hidden md:flex items-center gap-2 text-govBlue font-semibold hover:text-blue-800">
                            View All Modules <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "MPI Intelligence", desc: "Real-time poverty scoring beyond income.", icon: <Activity className="w-6 h-6" />, color: "bg-blue-600", img: "/images/landing_hero.png", link: "/modules#mpi" },
                            { title: "Precision Health", desc: "Non-invasive AI diagnostics & scanning.", icon: <Heart className="w-6 h-6" />, color: "bg-rose-600", img: "/images/health_module.png", link: "/modules#health" },
                            { title: "Climate Risk", desc: "Forecasting & automatic insurance payouts.", icon: <CloudLightning className="w-6 h-6" />, color: "bg-teal-600", img: "/images/climate_module.png", link: "/modules#climate" },
                            { title: "Education Engine", desc: "Vernacular AI tutors & dropout prediction.", icon: <BookOpen className="w-6 h-6" />, color: "bg-indigo-600", img: "/images/education_module.png", link: "/modules#education" }
                        ].map((module, i) => (
                            <Link key={i} to={module.link} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer hover:shadow-xl transition-all">
                                <img src={module.img} alt={module.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90"></div>

                                <div className="absolute bottom-0 p-6 w-full">
                                    <div className={`w-12 h-12 ${module.color} text-white rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                                        {module.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        {module.desc}
                                    </p>
                                    <span className="text-white text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Show Details <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/modules" className="inline-flex items-center gap-2 text-govBlue font-bold">
                            View All 7 Modules <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Vision Quote */}
            <section className="py-24 bg-govBlue relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
                        "SAMPARK converts surveys into live signals, welfare into smart contracts, and villages into self-healing socio-technical systems."
                    </h2>
                    <div className="inline-block px-6 py-2 border border-white/30 rounded-full text-white/80 text-sm font-medium">
                        PRODUCT VISION 2030
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
