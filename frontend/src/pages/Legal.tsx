import { Shield, Lock, FileText, ChevronRight } from 'lucide-react';

const Legal = () => {
    const sections = [
        {
            id: 'privacy',
            title: 'Privacy Policy',
            icon: <Lock className="w-8 h-8 text-blue-600" />,
            content: `The Government of India is committed to protecting the privacy of its citizens. This platform collects and processes data strictly for identifying and remediating multidimensional poverty. All data is stored securely in National Data Centers and is protected by the Digital Personal Data Protection (DPDP) Act, 2023.`
        },
        {
            id: 'terms',
            title: 'Terms of Service',
            icon: <FileText className="w-8 h-8 text-indigo-600" />,
            content: `Use of the SAMPARK Stack™ platform is restricted to authorized government officials and stakeholders. Unauthorized access, data scraping, or misuse of the platform is strictly prohibited and subject to legal action under the IT Act and other relevant statutes.`
        },
        {
            id: 'security',
            title: 'Security & Compliance',
            icon: <Shield className="w-8 h-8 text-green-600" />,
            content: `We employ bank-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. The platform is ISO 27001 certified and undergoes regular VAPT (Vulnerability Assessment and Penetration Testing) by CERT-In empaneled auditors.`
        }
    ];

    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal & Compliance</h1>
                    <p className="text-lg text-gray-600">
                        Ensuring trust, transparency, and data sovereignty for every citizen.
                    </p>
                </div>

                <div className="space-y-12">
                    {sections.map((section) => (
                        <div key={section.id} id={section.id} className="scroll-mt-24 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white rounded-2xl shadow-sm">
                                    {section.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                            </div>
                            <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed italic">
                                "{section.content}"
                            </div>
                            <div className="mt-8 flex gap-4">
                                <button className="text-govBlue font-semibold flex items-center gap-1 hover:gap-2 transition-all text-sm">
                                    Download Full Document <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-8 bg-govBlue rounded-3xl text-white">
                    <h3 className="text-xl font-bold mb-4">Data Governance Board</h3>
                    <p className="opacity-80 mb-6">
                        The SAMPARK Stack™ is governed by an inter-ministerial council ensuring ethical AI usage and cross-departmental data integrity.
                    </p>
                    <div className="text-sm font-mono opacity-60">
                        REF_ID: GOV-DPI-2024-SAMPARK
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Legal;
