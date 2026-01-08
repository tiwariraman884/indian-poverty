import { useState } from 'react';
import { Book, Code, Layers, FileText, ChevronRight, Copy, Check } from 'lucide-react';

const Resources = () => {
    const [activeTab, setActiveTab] = useState('docs');
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const tabs = [
        { id: 'docs', name: 'Documentation', icon: <Book className="w-5 h-5" /> },
        { id: 'api', name: 'API Reference', icon: <Code className="w-5 h-5" /> },
        { id: 'design', name: 'System Design', icon: <Layers className="w-5 h-5" /> },
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Platform Resources</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Everything you need to integrate with, build upon, or understand the SAMPARK Stack™.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white p-1 rounded-2xl shadow-sm border border-gray-100 flex gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === tab.id
                                        ? 'bg-govBlue text-white shadow-lg'
                                        : 'text-gray-500 hover:text-govBlue hover:bg-blue-50'
                                    }`}
                            >
                                {tab.icon}
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 min-h-[500px]">
                    {activeTab === 'docs' && (
                        <div className="max-w-4xl animate-fade-in">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Documentation Overview</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <section>
                                        <h3 className="text-xl font-bold text-govBlue mb-3">Getting Started</h3>
                                        <p className="text-gray-600 mb-4">Learn about the core principles of Multidimensional Poverty identification and how SAMPARK automates the workflow.</p>
                                        <button className="flex items-center gap-2 text-govBlue font-semibold hover:gap-3 transition-all">
                                            Read Quickstart Guide <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </section>
                                    <section>
                                        <h3 className="text-xl font-bold text-govBlue mb-3">Integration Guide</h3>
                                        <p className="text-gray-600 mb-4">Detailed guide for State and District administrations to sync their existing welfare databases.</p>
                                        <button className="flex items-center gap-2 text-govBlue font-semibold hover:gap-3 transition-all">
                                            View Integration Steps <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </section>
                                </div>
                                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                                    <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                                        <FileText className="w-5 h-5" /> Whitepapers
                                    </h4>
                                    <ul className="space-y-4">
                                        {['The AI for MPI Prediction PDF', 'Blockchain for Welfare Integrity', 'Universal Health Stack Integration'].map((item, i) => (
                                            <li key={i} className="flex justify-between items-center group cursor-pointer">
                                                <span className="text-blue-800 hover:underline">{item}</span>
                                                <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'api' && (
                        <div className="animate-fade-in">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">API Reference</h2>
                            <p className="text-gray-600 mb-8 max-w-2xl">Integrate SAMPARK metrics directly into your dashboards using our secure REST API.</p>

                            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                                <div className="bg-gray-800 px-6 py-3 flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <button
                                        onClick={() => copyToClipboard('GET /api/v1/score/household/{id}')}
                                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                                    >
                                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                        {copied ? 'Copied' : 'Copy'}
                                    </button>
                                </div>
                                <div className="p-6 font-mono text-sm">
                                    <div className="flex gap-4 mb-4">
                                        <span className="text-green-400">GET</span>
                                        <span className="text-gray-300">/api/v1/score/household/H3921-X</span>
                                    </div>
                                    <pre className="text-blue-300">
                                        {`{
  "household_id": "H3921-X",
  "mpi_score": 0.42,
  "intensity": "Moderate",
  "deprivations": ["Nutrition", "Housing"],
  "predictive_risk_90d": 0.12,
  "last_updated": "2024-03-20T10:30:00Z"
}`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'design' && (
                        <div className="animate-fade-in text-center py-12">
                            <Layers className="w-20 h-20 text-govBlue mx-auto mb-6 opacity-20" />
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Underlying Systems</h2>
                            <p className="text-gray-600 max-w-xl mx-auto mb-10">
                                SAMPARK identifies and remediates multidimensional poverty through a distributed event-driven architecture.
                            </p>
                            <div className="grid sm:grid-cols-3 gap-6">
                                {[
                                    { title: 'Data Lake', desc: 'S3-based storage for all scheme signals.' },
                                    { title: 'Inference Engine', desc: 'Real-time scoring using Redis & ML.' },
                                    { title: 'Trust Layer', desc: 'Hyperledger Fabric for audit trails.' },
                                ].map((item, i) => (
                                    <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Resources;
