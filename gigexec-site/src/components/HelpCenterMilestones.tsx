'use client'

import React, { useState } from 'react'

const milestonesFAQs = [
  {
    question: "What are milestones?",
    answer: "Milestones are significant points or events in a project that mark progress toward a specific goal or achievement. They serve as checkpoints to track the completion of key tasks or phases within the project timeline."
  },
  {
    question: "How do I create milestones for my project?",
    answer: "To create milestones for your project, identify key objectives or deliverables and break them down into smaller, measurable tasks. Assign specific dates or deadlines to each milestone to track progress effectively."
  },
  {
    question: "What should I do if a milestone is not met as planned?",
    answer: "If a milestone is not met as planned, assess the reasons for the delay and take corrective action as necessary. This may involve reallocating resources, adjusting timelines, or revising project plans to ensure future milestones are achieved on time."
  },
  {
    question: "How do milestones impact project payments?",
    answer: "Milestones serve as payment triggers in project contracts or agreements. Payments may be tied to the completion of specific milestones, ensuring that work is delivered satisfactorily before payment is made."
  }
]

export default function HelpCenterMilestones() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const filteredFAQs = milestonesFAQs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-6">
        Milestones
      </h2>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search FAQs..."
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012E46] focus:border-[#012E46] transition-all duration-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* FAQ Accordions */}
      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <button
              className="w-full text-left flex justify-between items-center"
              onClick={() => handleToggle(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`milestone-content-${index}`}
            >
              <span className="text-lg font-semibold text-slate-900 pr-4">
                {faq.question}
              </span>
              <span className="text-xl text-slate-600 transition-transform duration-200">
                {activeIndex === index ? "—" : "+"}
              </span>
            </button>
            <div
              id={`milestone-content-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-slate-800 text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredFAQs.length === 0 && searchTerm && (
        <div className="text-center py-8">
          <p className="text-slate-600 text-lg">
            No matching results found.
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="mt-2 text-slate-800 font-semibold hover:underline"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  )
}
