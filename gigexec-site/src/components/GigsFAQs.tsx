'use client'

import React, { useState } from 'react'

const gigsFAQs = [
  {
    question: "What is a gig on GigExecs?",
    answer: "A gig on GigExecs refers to a specific project or task posted by a client seeking services from freelancers or consultants. Gigs can vary in scope, duration, and requirements, covering a wide range of industries and skill sets."
  },
  {
    question: "How do I browse gigs on GigExecs?",
    answer: "To browse gigs, simply navigate to the platform's \"Find Gigs\" section, where you can explore available projects based on categories, keywords, or filters. Each gig listing provides details such as project description, requirements, budget, and timeline."
  },
  {
    question: "How do I apply for gigs on GigExecs?",
    answer: "To apply for gigs, click on the desired project listing and review the project details. If you meet the requirements and are interested in the gig, submit a proposal outlining your qualifications, relevant experience, and approach to the project"
  },
  {
    question: "Can I post gigs as a client on GigExecs?",
    answer: "Yes, both clients and consultants can post gigs on GigExecs by creating a project listing detailing the project scope, requirements, budget, and timeline. Posting gigs allows clients to receive proposals from qualified freelancers or consultants interested in the project."
  },
  {
    question: "What happens if there is a dispute over a contract?",
    answer: "In the event of a dispute over a contract, both parties should attempt to resolve the issue amicably through negotiation and communication. If resolution cannot be reached, GigExecs offers dispute resolution services or mediation to help resolve the conflict."
  },
  {
    question: "What happens if there is a dispute over a gig on GigExecs?",
    answer: "In the event of a dispute over a gig, both parties are encouraged to communicate openly and attempt to resolve the issue amicably. If resolution cannot be reached, GigExecs offer's dispute resolution services or mediation to help facilitate a resolution"
  },
  {
    question: "Are there any fees associated with posting or applying for gigs on GigExecs?",
    answer: "GigExecs charge's fees for certain premium features or services, such as featured gig listings or access to advanced search filters. However, basic usage of the platform, including browsing and applying for gigs, is free for users."
  }
]

export default function GigsFAQs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const filteredFaqs = gigsFAQs.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left mb-6 text-[#012E46]">
        Gigs
      </h2>

      {/* Search Input */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search our collection of frequently asked questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#012E46] focus:border-[#012E46] transition-all duration-200"
        />
      </div>

      {/* Accordion Items */}
      <div className="space-y-4">
        {filteredFaqs.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              aria-expanded={openAccordion === index}
              aria-controls={`accordion-content-${index}`}
            >
              <h3 className="font-semibold text-lg text-[#012E46] pr-4">
                {item.question}
              </h3>
              <svg
                className={`w-5 h-5 text-[#012E46] transition-transform duration-200 ${
                  openAccordion === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            <div
              id={`accordion-content-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-4">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredFaqs.length === 0 && searchTerm && (
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
