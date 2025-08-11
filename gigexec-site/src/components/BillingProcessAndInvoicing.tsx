'use client'

import React, { useState } from 'react'

const billingFaqs = [
  {
    title: "How does the billing process work on the platform?",
    content: "The billing process involves charging clients for services rendered by freelancers or consultants. Clients are billed based on the agreed-upon terms and payment schedule for each project."
  },
  {
    title: "When will I receive invoices for services rendered?",
    content: "Invoices are typically generated upon project completion or at agreed-upon milestones. You'll receive invoices via email or can access them directly on your account dashboard."
  },
  {
    title: "How do I view and download invoices for my records?",
    content: "You can view and download invoices from your account dashboard under the \"Billing\" or \"Invoices\" section. Simply click on the invoice you wish to download for a detailed view."
  },
  {
    title: "What should I do if I have questions or concerns about an invoice?",
    content: "If you have any questions or concerns about an invoice, please reach out to our billing support team for assistance. We're here to help resolve any billing-related issues promptly."
  }
]

export default function BillingProcessAndInvoicing() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filteredFaqs = billingFaqs.filter(faq =>
    faq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-10">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[#012E46]">
        Billing Process & Invoicing
      </h1>

      {/* Search Input */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search our collection of frequently asked questions and other helpful resources..."
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#012E46] focus:border-[#012E46] transition-all duration-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* FAQ Accordion Items */}
      <div className="flex flex-col gap-4">
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md transition-all duration-300 ease-in-out border border-gray-100"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center cursor-pointer focus:outline-none"
              aria-expanded={openIndex === index}
              aria-controls={`billing-content-${index}`}
            >
              <h2 className="font-semibold text-base sm:text-lg text-[#012E46] text-left pr-4">
                {faq.title}
              </h2>
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
              id={`billing-content-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-sm sm:text-base text-[#012E46] leading-relaxed">
                {faq.content}
              </p>
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
