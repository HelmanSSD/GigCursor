'use client'

import React, { useState } from 'react'

const refundsFaqs = [
  {
    question: "What is the refund policy for services rendered?",
    answer: "Our refund policy varies depending on the circumstances. Generally, refunds are issued in accordance with the terms of the agreement between clients and freelancers/consultants. Please refer to the project contract or contact our billing support team for more information."
  },
  {
    question: "How long does it take to process refunds or issue credits?",
    answer: "Refunds and credits are typically processed within a specified timeframe, which may vary depending on the payment method and financial institution. We strive to process refunds promptly once the request is approved."
  },
  {
    question: "What should I do if I believe I'm eligible for a refund or credit?",
    answer: "If you believe you're eligible for a refund or credit, please contact our billing support team with details of your request. We'll review your case and provide assistance in processing the refund or issuing credits accordingly."
  }
]

export default function RefundsAndCredits() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFaqs = refundsFaqs.filter(({ question, answer }) =>
    (question + answer).toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-full px-4 md:px-10 py-8 space-y-6">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        Refunds and Credits
      </h2>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search our collection of frequently asked questions and other helpful resources…"
          className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#012E46] focus:border-[#012E46] text-sm transition-all duration-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-3xl p-6 text-sm md:text-base shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100"
          >
            <p className="font-semibold text-[#012E46] mb-2">
              {faq.question}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredFaqs.length === 0 && searchTerm && (
        <div className="text-center py-8">
          <p className="text-white/60 text-lg">
            No matching results found.
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="mt-2 text-white font-semibold hover:underline"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  )
}
