import { Activity, Thermometer, ShieldCheck, Zap, Home, BookOpen, ShoppingBag, CloudLightning, ExternalLink } from 'lucide-react';

const Modules = () => {
    const modules = [
        {
            id: 1,
            anchor: "mpi",
            title: "MPI Intelligence Engine",
            desc: "Real-time poverty scoring beyond income using random forest and CNN ensemble models.",
            features: ["IoT & Satellite Inputs", "Live MPI Score", "Risk Prediction (30/60/90 days)"],
            icon: <Activity className="w-8 h-8" />,
            color: "bg-blue-600",
            image: "/images/landing_hero.png",
            links: [
                { label: "NITI Aayog MPI Dashboard", url: "https://www.niti.gov.in/" },
                { label: "UNDP Multidimensional Poverty", url: "https://hdr.undp.org/data-center/mpi" }
            ]
        },
        {
            id: 2,
            anchor: "health",
            title: "Precision Health Stack",
            desc: "Non-invasive anemia detection and AI anthropometry specifically for rural health.",
            features: ["Non-invasive Anemia Scan", "AI Anthropometry", "Offline-first ASHA App"],
            icon: <Thermometer className="w-8 h-8" />,
            color: "bg-rose-600",
            image: "/images/health_module.png",
            links: [
                { label: "ASHA Mobile App (Android)", url: "https://nhsrcindia.org/asha" },
                { label: "Ayushman Bharat Digital Mission", url: "https://abdm.gov.in/" },
                { label: "National Health Portal", url: "https://www.nhp.gov.in/" }
            ]
        },
        {
            id: 3,
            anchor: "welfare",
            title: "Smart Welfare & Blockchain",
            desc: "Permissioned blockchain for zero-leakage entitlement delivery and grain traceability.",
            features: ["Smart Contract Entitlements", "Grain Traceability", "Fraud-proof Delivery"],
            icon: <ShieldCheck className="w-8 h-8" />,
            color: "bg-emerald-600",
            image: "/images/landing_hero.png",
            links: [
                { label: "Public Distribution System", url: "https://dfpd.gov.in/" },
                { label: "One Nation One Ration Card", url: "https://nfsa.gov.in/" }
            ]
        },
        {
            id: 4,
            anchor: "energy",
            title: "Energy & Housing Resilience",
            desc: "eCooking telemetry and microgrid load balancing combined with 3DCP housing tracking.",
            features: ["Microgrid Analytics", "Housing 3DCP Tracking", "Disaster Resilience Score"],
            icon: <Zap className="w-8 h-8" />,
            color: "bg-yellow-600",
            image: "/images/landing_hero.png",
            links: [
                { label: "PM Awas Yojana", url: "https://pmaymis.gov.in/" },
                { label: "Ministry of Power", url: "https://powermin.gov.in/" }
            ]
        },
        {
            id: 5,
            anchor: "education",
            title: "Education & Capability",
            desc: "Vernacular AI tutors and dropout prediction models to ensure foundational learning.",
            features: ["Vernacular AI Tutors", "Dropout Prediction", "FLN Diagnostics"],
            icon: <BookOpen className="w-8 h-8" />,
            color: "bg-indigo-600",
            image: "/images/education_module.png",
            links: [
                { label: "Vernacular AI Tutors", url: "https://diksha.gov.in/" },
                { label: "Dropout Prediction Model", url: "https://samagra.education.gov.in/" },
                { label: "FLN Diagnostics", url: "https://nipunbharat.education.gov.in/" }
            ]
        },
        {
            id: 6,
            anchor: "livelihood",
            title: "Livelihood Marketplace",
            desc: "SHG commerce enablement and voice-based ordering for micro-entrepreneurs.",
            features: ["SHG Commerce", "Voice Ordering AI", "Skill Credentialing"],
            icon: <ShoppingBag className="w-8 h-8" />,
            color: "bg-purple-600",
            image: "/images/landing_hero.png",
            links: [
                { label: "National Rural Livelihoods Mission", url: "https://nrlm.gov.in/" },
                { label: "GeM - Government e-Marketplace", url: "https://gem.gov.in/" }
            ]
        },
        {
            id: 7,
            anchor: "climate",
            title: "Climate Risk Protection",
            desc: "Automatic payout triggers based on heat waves and flood data overlays.",
            features: ["Heat Risk Index", "Automatic Insurance Payouts", "Early Warnings"],
            icon: <CloudLightning className="w-8 h-8" />,
            color: "bg-teal-600",
            image: "/images/climate_module.png",
            links: [
                { label: "PM Fasal Bima Yojana", url: "https://pmfby.gov.in/" },
                { label: "India Meteorological Department", url: "https://mausam.imd.gov.in/" }
            ]
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Core Solution Modules</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A suite of seven integrated modules working as a single operating system to tackle every dimension of poverty.
                    </p>
                </div>

                <div className="space-y-12">
                    {modules.map((module, index) => (
                        <div
                            key={module.id}
                            id={module.anchor}
                            className={`scroll-mt-24 flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-8 items-center bg-white rounded-3xl p-6 shadow-sm border border-gray-100 overflow-hidden`}
                        >
                            <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden relative group">
                                <img
                                    src={module.image}
                                    alt={module.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                            </div>

                            <div className="w-full md:w-1/2 md:px-8">
                                <div className={`w-14 h-14 ${module.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-gray-200`}>
                                    {module.icon}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{module.title}</h2>
                                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                    {module.desc}
                                </p>

                                <ul className="space-y-3">
                                    {module.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-govBlue"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Related Resources</h4>
                                    <div className="flex flex-wrap gap-4">
                                        {module.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-govBlue hover:text-white rounded-lg text-sm font-semibold text-gray-600 transition-all border border-gray-200"
                                            >
                                                {link.label} <ExternalLink className="w-4 h-4" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modules;
