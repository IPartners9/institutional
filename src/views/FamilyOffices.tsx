
import React from 'react';

const FamilyOffices: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="bg-navy py-20">
        <div className="container mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">Family Offices</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Bespoke structuring for intergenerational wealth preservation.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="font-serif text-3xl text-navy font-bold mb-6">Structuring for Generations</h2>
                <div className="w-20 h-1 bg-gold mb-8"></div>
                <div className="prose prose-lg text-charcoal font-sans leading-relaxed">
                    <p className="mb-4">
                        Ipanema Partners provides a dedicated suite of services tailored specifically for Single and Multi-Family Offices. We understand that family wealth is not just about capital; it is about legacy, privacy, and continuity.
                    </p>
                    <p className="mb-4">
                        Our Private Client division works closely with your existing legal counsel and tax advisors to implement robust fiduciary structures, trusts, and private trust companies (PTCs) in top-tier jurisdictions.
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-6 text-gray-700 text-base">
                        <li>Private Trust Companies (PTC) Formation</li>
                        <li>Foundation Establishment & Management</li>
                        <li>Philanthropic Vehicle Structuring</li>
                        <li>Next-Generation Governance Planning</li>
                        <li>Cross-Border Tax Planning & Optimization</li>
                        <li>Management of Cross-Border Tax, Legal & Compliance Teams</li>
                        <li>Access to Exclusive Deal Flow (Aligned with FO Mandate)</li>
                    </ul>
                </div>
             </div>
             <div className="relative h-96 w-full">
                <div className="absolute top-0 left-0 w-4/5 h-full bg-gold/10 z-0 transform -translate-x-4 translate-y-4"></div>
                <img 
                    src="https://picsum.photos/id/1036/800/800" 
                    alt="Private Office" 
                    className="absolute inset-0 w-full h-full object-cover shadow-xl z-10 grayscale-[20%]"
                />
            </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="bg-white py-24 border-y border-gray-100">
        <div className="container mx-auto px-6">
             <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="font-serif text-4xl text-navy font-bold mb-6">The Family Office Ecosystem</h2>
                <p className="text-charcoal text-lg leading-relaxed">
                    We operate as a silent, efficient engine within your broader advisory network. We do not replace your trusted legal counsel or tax advisors; we execute their strategies with precision. Our role is to provide the operational infrastructure—entities, directors, and compliance frameworks—that allows your family office to function seamlessly across borders.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                    <div className="w-16 h-16 mx-auto bg-navy text-gold flex items-center justify-center rounded-full mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </div>
                    <h3 className="font-serif text-xl text-navy font-bold mb-4">Uncompromising Privacy</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Confidentiality is paramount. We utilize robust legal structures and nominee services to protect family privacy while maintaining full regulatory compliance.
                    </p>
                </div>
                <div>
                     <div className="w-16 h-16 mx-auto bg-navy text-gold flex items-center justify-center rounded-full mb-6">
                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                    <h3 className="font-serif text-xl text-navy font-bold mb-4">Advisor Collaboration</h3>
                    <p className="text-gray-600 leading-relaxed">
                        We integrate directly with your existing tax and legal teams, ensuring that our implementation matches their architectural blueprints perfectly.
                    </p>
                </div>
                <div>
                     <div className="w-16 h-16 mx-auto bg-navy text-gold flex items-center justify-center rounded-full mb-6">
                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="font-serif text-xl text-navy font-bold mb-4">Generational Outlook</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Our structures are built to endure. We plan for succession, governance transitions, and the long-term stewardship of family assets.
                    </p>
                </div>
             </div>
        </div>
      </div>

      {/* Specialized Services Grid */}
      <div className="container mx-auto px-6 py-24">
        <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-12 text-center">Dedicated Private Client Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 border-t-4 border-navy shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="font-serif text-xl text-navy font-bold mb-3">Cross-Border Tax Planning</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Strategic tax optimization for global families, navigating complex treaties and local regulations to preserve wealth across jurisdictions.
                </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 border-t-4 border-gold shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="font-serif text-xl text-navy font-bold mb-3">Luxury Asset Structuring</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Specialized holding structures for superyachts, private aircraft, and fine art collections, optimizing for tax efficiency and liability protection.
                </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 border-t-4 border-navy shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="font-serif text-xl text-navy font-bold mb-3">Deal-Specific SPVs</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Rapid deployment of Special Purpose Vehicles for direct private equity or venture capital investments, segregating risk per asset.
                </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-8 border-t-4 border-gold shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="font-serif text-xl text-navy font-bold mb-3">Philanthropic Foundations</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Creation and management of charitable foundations and trusts, ensuring your legacy impact is managed with the same rigor as your investments.
                </p>
            </div>
            {/* Card 5 */}
             <div className="bg-white p-8 border-t-4 border-navy shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="font-serif text-xl text-navy font-bold mb-3">Governance Frameworks</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Drafting family constitutions and implementing governance boards to manage decision-making processes across generations.
                </p>
            </div>
            {/* Card 6 */}
             <div className="bg-white p-8 border-t-4 border-gold shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="font-serif text-xl text-navy font-bold mb-3">Residency & Citizenship</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Advisory on citizenship-by-investment programs and tax residency planning for globally mobile family members.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyOffices;
