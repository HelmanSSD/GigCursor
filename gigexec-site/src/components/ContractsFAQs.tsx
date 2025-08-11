'use client'

import React, { useState } from 'react'

const contractsFAQs = [
  {
    question: "What is a contract on GigExecs?",
    answer: "A contract on the platform is a legally binding agreement between a client and a freelancer/consultant outlining the terms and conditions of their working relationship. It typically includes details such as project scope, deliverables, timelines, payment terms, and other relevant terms."
  },
  {
    question: "How do I create a contract with a freelancer/consultant?",
    answer: "To create a contract, both parties must agree to the terms and conditions of the project. This can be done through the platform's Manage Gig section. Once both parties agree, the contract is finalised and becomes binding."
  },
  {
    question: "What is included in a contract?",
    answer: "A contract include's clear and detailed information about the project scope, deliverables, timelines, payment terms, intellectual property rights, confidentiality agreements, and any other relevant terms specific to the project."
  },
  {
    question: "Can I negotiate terms in a contract?",
    answer: "Yes, clients and freelancers/consultants can negotiate the terms of the contract to ensure they are mutually beneficial. It's important to communicate openly and clearly about expectations and requirements to reach a satisfactory agreement."
  },
  {
    question: "What happens if there is a dispute over a contract?",
    answer: "In the event of a dispute over a contract, both parties should attempt to resolve the issue amicably through negotiation and communication. If resolution cannot be reached, GigExecs offers dispute resolution services or mediation to help resolve the conflict."
  },
  {
    question: "Can I cancel a contract once it's been signed?",
    answer: "Contracts are legally binding agreements, and canceling them may have legal and financial implications. However, if both parties agree to cancel the contract, they can do so by mutual consent. It's important to review the contract terms regarding cancellation and termination clauses."
  },
  {
    question: "What happens if one party breaches the contract?",
    answer: "If one party breaches the contract by failing to fulfill their obligations, the other party may pursue legal remedies such as seeking damages or terminating the contract. It's essential to document any breaches and attempt to resolve the issue through communication before taking legal action."
  }
]

export default function ContractsFAQs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const filteredFaqs = contractsFAQs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6 text-white">
        Contracts
      </h2>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search our collection of frequently asked questions and other helpful resources…"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#012E46] focus:border-[#012E46] transition-all duration-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* FAQ Accordions */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-900"
              aria-expanded={activeIndex === index}
              aria-controls={`contract-content-${index}`}
            >
              <span className="pr-4">{faq.question}</span>
              <span className="text-xl text-gray-600 transition-transform duration-200">
                {activeIndex === index ? "—" : "+"}
              </span>
            </button>
            <div
              id={`contract-content-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
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
