'use client'

import React, { useState } from 'react'

const subscriptionFaqs = [
  {
    question: "What subscription plans are available on the platform?",
    answer: "Currently, GigExec offers a single subscription plan at its initial launch, providing users with comprehensive access to all platform features. However, future updates may introduce additional subscription options to better cater to user needs. Stay tuned for any developments in our subscription offerings. For specific inquiries or suggestions, feel free to contact our support team."
  },
  {
    question: "How can I upgrade or downgrade my subscription plan?",
    answer: "You can upgrade or downgrade your subscription plan at any time by accessing your account settings. Simply select the desired plan and follow the prompts to make the change."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time. However, please note that cancellation may affect access to certain features or services associated with your subscription plan."
  }
]

export default function SubscriptionManagement() {
  const [search, setSearch] = useState("")

  const filteredFaqs = subscriptionFaqs.filter(({ question, answer }) =>
    (question + answer).toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="w-full px-4 sm:px-12 py-8">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
        Subscription Management
      </h1>

      {/* Search Input */}
      <div className="mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search our collection of frequently asked questions and other helpful resources..."
          className="w-full px-4 py-3 rounded-full text-sm sm:text-base bg-white text-gray-800 placeholder:text-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-[#012E46] focus:ring-opacity-50 transition-all duration-200"
        />
      </div>

      {/* FAQ Items */}
      <div className="space-y-6">
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            className="mb-6 rounded-3xl bg-white p-6 sm:p-8 shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100"
          >
            <h2 className="text-base sm:text-lg font-semibold text-[#012E46] mb-2">
              {faq.question}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredFaqs.length === 0 && search && (
        <div className="text-center py-8">
          <p className="text-white/60 text-lg">
            No results found for "{search}"
          </p>
          <button
            onClick={() => setSearch("")}
            className="mt-2 text-white font-semibold hover:underline"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  )
}
