'use client'

import React, { useState } from 'react'

const helpData = [
  {
    heading: "What is Gigexecs?",
    body: "GigExec is a job marketplace exclusively designed for highly experienced freelancers with at least 10 years of expertise. It provides access to a curated pool of seasoned professionals, ensuring clients receive top-tier quality and expertise for their projects."
  },
  {
    heading: "Understanding Gigs",
    body: "The platform offers a wide range of job opportunities spanning industries such as consultancy, project management, technical expertise, creative services, and more. Clients can find professionals capable of handling diverse projects, from complex technical tasks to strategic consultancy assignments. Each job listing on GigExec is tailored to attract seasoned professionals, ensuring clients access top-tier talent for their projects."
  },
  {
    heading: "Who are Clients?",
    body: "Clients on GigExec are individuals, businesses, or organizations seeking highly experienced freelancers with at least 10 years of expertise to fulfill their project needs. These clients range from small businesses to large corporations and individuals requiring specialized services. They rely on GigExec to connect them with top-tier talent across various fields, ensuring effective project outcomes."
  },
  {
    heading: "Who are Experienced Professionals?",
    body: `A freelancer is a self-employed individual who provides services to clients on a project or contract basis. Freelancers work in a wide range of industries, including writing, design, programming, marketing, consulting, and more. They typically work remotely and can set their own schedules and rates.

As independent contractors, freelancers are responsible for finding their own clients, negotiating contracts, and managing their own finances. They may work for multiple clients simultaneously or specialize in a particular niche. Freelancers are often highly skilled and experienced in their field, and they are able to offer flexible and customized services to meet their clients' needs.

Freelancing offers many benefits, including the freedom to choose the projects you work on, the ability to set your own rates, and the flexibility to work from anywhere. However, it also requires a high degree of self-discipline, organization, and business savvy to succeed. Freelancers must be able to manage their time effectively, maintain a steady flow of work, and provide high-quality services that meet their clients' expectations.`
  }
]

export default function HelpCenterGettingStarted() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const filteredData = helpData.filter(item =>
    item.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.body.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left mb-6 text-[#012E46]">
        Getting Started
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
        {filteredData.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              aria-expanded={openAccordion === index}
              aria-controls={`accordion-content-${index}`}
            >
              <h3 className="font-semibold text-lg text-[#012E46] pr-4">
                {item.heading}
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
                  {item.body}
                </p>
              </div>
            </div>
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
