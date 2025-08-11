'use client'

import React, { useState } from 'react'

const paymentFaqs = [
  {
    question: "What payment methods are accepted on the platform?",
    answer: "We only accept payment methods through credit/debit cards at this time. We strive to provide a seamless and secure payment experience for our users, and credit/debit card transactions offer a convenient and widely accepted method for processing payments on our platform. We apologise for any inconvenience this may cause and appreciate your understanding. If you have any questions or concerns regarding payment methods, please don't hesitate to contact our support team for assistance."
  },
  {
    question: "How can I add or update my payment method?",
    answer: "You can add or update your payment method in your account settings. Simply navigate to the \"Payment Methods\" section under your profile and follow the prompts to add a new payment method or update existing ones."
  },
  {
    question: "Are there any additional fees for using certain payment methods?",
    answer: "We strive to provide transparent pricing, and there are typically no additional fees for using standard payment methods. However, please check with your financial institution for any potential transaction fees they may charge."
  },
  {
    question: "What should I do if I have questions or concerns about an invoice?",
    answer: "If you have any questions or concerns about an invoice, please reach out to our billing support team for assistance. We're here to help resolve any billing-related issues promptly."
  }
]

export default function PaymentMethods() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filteredFaqs = paymentFaqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#012E46]">
        Payment Methods
      </h2>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for a question..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012E46] focus:border-[#012E46] transition-all duration-200"
        />
      </div>

      {/* FAQ Accordion Items */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md cursor-pointer transition-all duration-300 border border-gray-100 hover:shadow-lg"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg sm:text-xl text-[#012E46] pr-4">
                {faq.question}
              </h3>
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
            </div>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {faq.answer}
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
