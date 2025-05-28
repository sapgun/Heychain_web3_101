"use client"

// components/practice-component.tsx

import type React from "react"
import { useState, useEffect } from "react"
import { Check } from "lucide-react"

interface PracticeComponentProps {
  practice: {
    steps: string[]
  }
  texts: {
    step: string
  }
}

const PracticeComponent: React.FC<PracticeComponentProps> = ({ practice, texts }) => {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())

  useEffect(() => {
    // Load completed steps from local storage on mount
    const storedCompletedSteps = localStorage.getItem("completedSteps")
    if (storedCompletedSteps) {
      setCompletedSteps(new Set(JSON.parse(storedCompletedSteps)))
    }
  }, [])

  useEffect(() => {
    // Save completed steps to local storage whenever it changes
    localStorage.setItem("completedSteps", JSON.stringify(Array.from(completedSteps)))
  }, [completedSteps])

  const toggleStep = (index: number) => {
    const newCompletedSteps = new Set(completedSteps)
    if (newCompletedSteps.has(index)) {
      newCompletedSteps.delete(index)
    } else {
      newCompletedSteps.add(index)
    }
    setCompletedSteps(newCompletedSteps)
  }

  return (
    <div>
      {practice.steps.map((step, index) => (
        <div
          key={index}
          className={`
      p-4 rounded-lg border transition-all duration-200 cursor-pointer min-h-[60px] flex items-start
      ${
        completedSteps.has(index)
          ? "bg-green-500/20 border-green-500/50"
          : "bg-gray-700/30 border-gray-600 hover:bg-gray-600/50 hover:border-gray-500"
      }
    `}
          onClick={() => toggleStep(index)}
        >
          <div className="flex items-start space-x-3 w-full">
            <div
              className={`
          w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5
          ${completedSteps.has(index) ? "bg-green-500 border-green-500" : "border-gray-500"}
        `}
            >
              {completedSteps.has(index) && <Check className="w-3 h-3 text-white" />}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-white text-sm sm:text-base mb-1 leading-tight">
                {texts.step} {index + 1}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">{step}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PracticeComponent
