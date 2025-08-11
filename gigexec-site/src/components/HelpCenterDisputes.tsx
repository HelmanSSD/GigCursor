'use client'

import React, { useState } from 'react'

const disputesFAQs = [
  {
    question: "What should I do if I have a dispute with an employer/freelancer?",
    answer: "If you encounter a dispute, first try to resolve the issue directly by communicating with the employer/freelancer through the platform. If the matter remains unresolved, you can escalate the dispute by submitting a formal dispute resolution request via the app."
  },
  {
    question: "How do I file a dispute?",
    answer: "To file a dispute, navigate to the project or contract in question, select \"Open a Dispute,\" and provide detailed information about the issue. Be sure to include any supporting documentation or evidence related to the work completed."
  },
  {
    question: "What happens after I file a dispute?",
    answer: "Once a dispute is filed, our dispute resolution team will review your submission and mediate between you and the other party. Both parties will have the opportunity to present their case. We aim to resolve disputes within a set timeframe, typically 7–10 business days."
  },
  {
    question: "What kind of evidence can I submit for a dispute?",
    answer: "You can submit various forms of evidence, such as communication records, files related to the job, contracts, screenshots of conversations, invoices, and proof of payment. Be sure to provide as much relevant information as possible to support your claim."
  },
  {
    question: "What if I am unsatisfied with the dispute resolution outcome?",
    answer: "If you are not satisfied with the outcome of the dispute, you may request a further review by providing additional evidence or reasoning. However, the final decision is at the discretion of the dispute resolution team."
  },
  {
    question: "Can I get a refund if the work was not completed as agreed?",
    answer: "If the dispute resolution team determines that the work was not completed or was not up to the agreed-upon standard, you may be eligible for a partial or full refund depending on the situation."
  },
  {
    question: "What happens if the other party doesn't respond to the dispute?",
    answer: "If the other party fails to respond to the dispute within the allotted time, the resolution team may make a decision based solely on the information and evidence provided by you."
  },
  {
    question: "Can I still work with the same freelancer/employer after a dispute?",
    answer: "Yes, you can choose to continue working with the same freelancer/employer after a dispute is resolved, but we recommend reviewing the terms of the project carefully to avoid further issues."
  }
]

const relatedArticles = [
  {
    title: "Understanding Dispute Resolution on GigExecs",
    excerpt: "Learn about our comprehensive dispute resolution process and how we ensure fair outcomes for all parties involved.",
    date: "March 15, 2024",
    author: "GigExecs Team"
  },
  {
    title: "Best Practices for Avoiding Disputes",
    excerpt: "Discover proactive strategies to prevent disputes and maintain positive working relationships on the platform.",
    date: "February 28, 2024",
    author: "GigExecs Team"
  },
  {
    title: "Communication Strategies for Project Success",
    excerpt: "Effective communication is key to project success. Learn how to maintain clear expectations and avoid misunderstandings.",
    date: "January 20, 2024",
    author: "GigExecs Team"
  }
]

export default function HelpCenterDisputes() {
  const [search, setSearch] = useState("")
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const filteredFaqs = disputesFAQs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase()) ||
    faq.answer.toLowerCase().includes(search.toLowerCase())
  )

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="p-4 sm:p-8">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4 text-white">
        Disputes
      </h2>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search our collection of frequently asked questions and other helpful resources…"
          className="w-full p-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#012E46] focus:border-[#012E46] transition-all duration-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* FAQ Accordions */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left flex justify-between items-center"
              aria-expanded={activeIndex === index}
              aria-controls={`dispute-content-${index}`}
            >
              <span className="cursor-pointer font-semibold text-slate-900 pr-4">
                {faq.question}
              </span>
              <span className="text-xl text-slate-600 transition-transform duration-200">
                {activeIndex === index ? "—" : "+"}
              </span>
            </button>
            <div
              id={`dispute-content-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-slate-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredFaqs.length === 0 && search && (
        <div className="text-center py-8">
          <p className="text-white/60 text-lg">
            No matching results found.
          </p>
          <button
            onClick={() => setSearch("")}
            className="mt-2 text-white font-semibold hover:underline"
          >
            Clear search
          </button>
        </div>
      )}

      {/* Related Articles */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-white mb-6">
          Related Articles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <h4 className="font-semibold text-slate-900 mb-2">
                {article.title}
              </h4>
              <p className="text-slate-600 text-sm mb-3">
                {article.excerpt}
              </p>
              <div className="flex justify-between items-center text-xs text-slate-500">
                <span>{article.author}</span>
                <span>{article.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
