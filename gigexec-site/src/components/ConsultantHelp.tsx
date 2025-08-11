'use client'

import React, { useState } from 'react'

const consultantData = [
  {
    heading: "How do I showcase my skills and experience effectively on my profile?",
    body: "Make sure to provide detailed information about your past projects, clients, achievements, and any certifications or qualifications you hold. Utilize our profile sections effectively to highlight your strengths."
  },
  {
    heading: "Can I set my own rates as a consultant?",
    body: "Yes, as a consultant, you have the flexibility to set your own rates based on your expertise, market demand, and the complexity of the projects you undertake."
  },
  {
    heading: "How do I find consulting opportunities on the platform?",
    body: "Consulting opportunities are typically listed under our \"Find Gigs\" section. You can browse through available projects, filter based on your expertise, and submit proposals for those that match your skills."
  },
  {
    heading: "What is the process for applying to consulting projects?",
    body: "Once you find a project of interest, you can submit a proposal outlining your approach, relevant experience, and how you can add value to the client's project. Clients will review proposals and may contact you for further discussion."
  },
  {
    heading: "How do I communicate with clients during a consulting project?",
    body: "Our platform provides messaging and communication tools that allow you to interact with clients directly. You can discuss project details, share documents, and provide updates through our secure messaging system."
  },
  {
    heading: "Are there any restrictions on the number of consulting projects I can take on?",
    body: "As a consultant, you have the flexibility to take on multiple projects simultaneously based on your availability and workload. However, ensure that you can commit enough time and resources to deliver high-quality results for each project."
  },
  {
    heading: "How can I build long-term relationships with clients as a consultant?",
    body: "Building trust, delivering exceptional results, and maintaining clear communication are key to fostering long-term relationships with clients. Consistently delivering value and exceeding client expectations can lead to repeat business and referrals."
  }
]

export default function ConsultantHelp() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = consultantData.filter(item =>
    item.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.body.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-[#012E46]">
        Consultant Help Center
      </h1>

      {/* Search Input */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search consultant help topics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#012E46] focus:border-[#012E46] transition-all duration-200"
        />
      </div>

      {/* Help Items */}
      <div className="space-y-6">
        {filteredData.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl p-6 space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">
              {item.heading}
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredData.length === 0 && searchTerm && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">
            No results found for "{searchTerm}"
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="mt-2 text-[#012E46] font-semibold hover:underline"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  )
}
