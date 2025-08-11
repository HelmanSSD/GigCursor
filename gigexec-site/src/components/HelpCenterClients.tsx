'use client'

import React, { useState } from 'react'

const clientFaqs = [
  {
    question: "How can I find consultants on the platform?",
    answer: "Clients can find consultants by browsing through our directory of experienced professionals or by posting a project and receiving proposals from qualified consultants."
  },
  {
    question: "What types of consulting services are available on the platform?",
    answer: "Our platform offers a wide range of consulting services including management, strategy, finance, marketing, technology, human resources, and more. Clients can find consultants with expertise in various industries and specialties."
  },
  {
    question: "How do I post a project on the platform?",
    answer: "Posting a project is simple. Just click on the \"Create a New Gig\" button in the navigation bar, provide details about your project requirements, budget, and timeline, and submit the project. Qualified consultants will then submit proposals for your review."
  },
  {
    question: "Can I review the profiles of consultants before hiring them?",
    answer: "Yes, clients have access to detailed profiles of consultants, which include information about their expertise, experience, past projects, client reviews, and ratings. This allows clients to make informed decisions when hiring consultants."
  },
  {
    question: "How do I communicate with consultants during a project?",
    answer: "Clients can communicate with consultants directly through our platform's messaging system. This allows for seamless communication, sharing of project updates, and collaboration throughout the project duration."
  },
  {
    question: "What if I'm not satisfied with the work of a consultant?",
    answer: "If a client is not satisfied with the work of a consultant, they can discuss their concerns directly with the consultant and attempt to resolve any issues. If necessary, clients can also reach out to our support team for assistance in resolving disputes."
  },
  {
    question: "Are there any fees for posting projects or hiring consultants on the platform?",
    answer: "Clients can post projects on our platform for free. However, there are fees associated with hiring consultants, such as project fees or service fees. These fees are transparently displayed before hiring a consultant."
  },
  {
    question: "How can I ensure the confidentiality of my project information?",
    answer: "We take the confidentiality of our clients' projects seriously. Clients can rest assured that their project information is kept confidential and only shared with the consultant(s) they choose to work with."
  },
  {
    question: "Can I hire consultants for long-term projects or ongoing support?",
    answer: "Yes, clients can hire consultants for both short-term and long-term projects, as well as for ongoing support. Many consultants offer flexible arrangements to meet the needs of clients' projects."
  }
]

export default function HelpCenterClients() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filteredFaqs = clientFaqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="px-4 sm:px-12 py-8 w-full max-w-screen-lg mx-auto">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-4 text-white">
        Client
      </h2>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search our collection of frequently asked questions and other helpful resources..."
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#012E46] focus:border-[#012E46] transition-all duration-200"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* FAQ Accordion Items */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-3xl p-6 shadow-lg">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left font-semibold text-lg text-[#012E46] flex items-center justify-between hover:text-[#012E46]/80 transition-colors duration-200"
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <span className="pr-4">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-[#012E46] transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
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
              id={`faq-content-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-sm text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredFaqs.length === 0 && searchQuery && (
        <div className="text-center py-8">
          <p className="text-white/60 text-lg">
            No results found for "{searchQuery}"
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-2 text-white font-semibold hover:underline"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  )
}
