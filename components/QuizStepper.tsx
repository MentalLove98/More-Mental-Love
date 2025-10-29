import { useState } from 'react'

const questions = [
  { q: "How stressed do you feel today?", options: ["1","2","3","4","5"] },
  { q: "Select emotions you felt in the past 24h", options: ["😄 Happy", "😐 Neutral", "🙁 Sad", "😢 Anxious", "😌 Calm"] }
]

export default function QuizStepper() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])

  const handleSelect = (option: string) => {
    const newAnswers = [...answers]
    newAnswers[step] = option
    setAnswers(newAnswers)
    setStep(Math.min(step + 1, questions.length - 1))
  }

  return (
    <div className="bg-calm p-6 rounded-card shadow">
      <h2 className="font-heading text-xl mb-2">{questions[step].q}</h2>
      <div className="flex flex-wrap gap-4">
        {questions[step].options.map((opt) => (
          <button
            key={opt}
            className="bg-lavender px-4 py-2 rounded shadow hover:bg-purple-400"
            onClick={() => handleSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
      <p className="mt-4 text-gray-600">Question {step + 1} of {questions.length}</p>
    </div>
  )
}
