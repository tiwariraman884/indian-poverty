import { Server, Database, Cloud, Lock, Code, Layers, Globe, Cpu, Shield } from 'lucide-react';

const Architecture = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">System Architecture</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        SAMPARK Stack™ is built as a modular, scalable, and secure Digital Public Infrastructure (DPI), capable of handling 100+ Crore records with &lt;2s latency.
                    </p>
                </div>

                {/* High Level Diagrams */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Frontend */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border-t-4 border-blue-500 hover:shadow-xl transition-all duration-300 group animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"><Globe /></div>
                            <h3 className="text-xl font-bold text-gray-900">Frontend Layer</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex flex-col">
                                <span className="font-semibold text-gray-800">Web Dashboard</span>
                                <span className="text-sm text-gray-500">React + Tailwind (Admin/Public)</span>
                            </li>
                            <li className="flex flex-col border-t border-gray-50 pt-4">
                                <span className="font-semibold text-gray-800">Mobile App</span>
                                <span className="text-sm text-gray-500">Flutter (Offline-First for ASHA/FPS)</span>
                            </li>
                            <li className="flex flex-col border-t border-gray-50 pt-4">
                                <span className="font-semibold text-gray-800">Kiosk Mode</span>
                                <span className="text-sm text-gray-500">Android AOSP for Common Service Centers</span>
                            </li>
                        </ul>
                    </div>

                    {/* Backend */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border-t-4 border-emerald-500 hover:shadow-xl transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors"><Server /></div>
                            <h3 className="text-xl font-bold text-gray-900">Backend & API</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex flex-col">
                                <span className="font-semibold text-gray-800">API Gateway</span>
                                <span className="text-sm text-gray-500">NestJS (REST + GraphQL)</span>
                            </li>
                            <li className="flex flex-col border-t border-gray-50 pt-4">
                                <span className="font-semibold text-gray-800">AI Microservices</span>
                                <span className="text-sm text-gray-500">Python (FastAPI) + Ray Serve</span>
                            </li>
                            <li className="flex flex-col border-t border-gray-50 pt-4">
                                <span className="font-semibold text-gray-800">Event Bus</span>
                                <span className="text-sm text-gray-500">Apache Kafka for real-time streams</span>
                            </li>
                        </ul>
                    </div>

                    {/* Data & Trust */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border-t-4 border-purple-500 hover:shadow-xl transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-purple-50 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors"><Database /></div>
                            <h3 className="text-xl font-bold text-gray-900">Data & Trust</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex flex-col">
                                <span className="font-semibold text-gray-800">Transactional DB</span>
                                <span className="text-sm text-gray-500">PostgreSQL (Partioned)</span>
                            </li>
                            <li className="flex flex-col border-t border-gray-50 pt-4">
                                <span className="font-semibold text-gray-800">IoT Time-Series</span>
                                <span className="text-sm text-gray-500">TimescaleDB</span>
                            </li>
                            <li className="flex flex-col border-t border-gray-50 pt-4">
                                <span className="font-semibold text-gray-800">Ledger</span>
                                <span className="text-sm text-gray-500">Vishvasya Blockchain (Hyperledger)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* API Specs Section */}
                <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Code className="w-64 h-64 transform group-hover:scale-110 transition-transform duration-1000" />
                    </div>

                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <Code className="text-blue-400" /> API Specification (v1)
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        <div className="space-y-6">
                            <div className="hover:translate-x-2 transition-transform">
                                <div className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-bold">Auth & Identity</div>
                                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl font-mono text-sm border border-gray-700 hover:border-blue-500/50 transition-colors">
                                    <div className="flex gap-2"><span className="text-green-400">POST</span> /auth/login</div>
                                    <div className="flex gap-2 mt-2"><span className="text-green-400">POST</span> /auth/abha-link</div>
                                </div>
                            </div>
                            <div className="hover:translate-x-2 transition-transform">
                                <div className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-bold">Household Intelligence</div>
                                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl font-mono text-sm border border-gray-700 hover:border-blue-500/50 transition-colors">
                                    <div className="flex gap-2"><span className="text-blue-400">GET</span> /household/{'{id}'}/mpi</div>
                                    <div className="flex gap-2 mt-2"><span className="text-green-400">POST</span> /household/register</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="hover:translate-x-2 transition-transform">
                                <div className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-bold">AI Health Scan</div>
                                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl font-mono text-sm border border-gray-700 hover:border-blue-500/50 transition-colors">
                                    <div className="flex gap-2"><span className="text-green-400">POST</span> /health/anemia/scan</div>
                                    <div className="flex gap-2 mt-2"><span className="text-green-400">POST</span> /health/anthropometry</div>
                                </div>
                            </div>
                            <div className="hover:translate-x-2 transition-transform">
                                <div className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-bold">Climate Trigger</div>
                                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl font-mono text-sm border border-gray-700 hover:border-blue-500/50 transition-colors">
                                    <div className="flex gap-2"><span className="text-blue-400">GET</span> /climate/risk/{'{geoCode}'}</div>
                                    <div className="flex gap-2 mt-2"><span className="text-green-400">POST</span> /insurance/payout</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Security by Design</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="px-6 py-3 bg-white rounded-full border border-gray-100 shadow-sm text-gray-600 text-sm font-bold flex items-center gap-3 hover:shadow-md transition-shadow"><Lock className="w-4 h-4 text-blue-500" /> End-to-End Encryption</span>
                        <span className="px-6 py-3 bg-white rounded-full border border-gray-100 shadow-sm text-gray-600 text-sm font-bold flex items-center gap-3 hover:shadow-md transition-shadow"><Shield className="w-4 h-4 text-emerald-500" /> Role-Based Access Control</span>
                        <span className="px-6 py-3 bg-white rounded-full border border-gray-100 shadow-sm text-gray-600 text-sm font-bold flex items-center gap-3 hover:shadow-md transition-shadow"><Layers className="w-4 h-4 text-purple-500" /> Data Localization (India)</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Architecture;
