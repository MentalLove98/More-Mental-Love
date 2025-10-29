import { useState } from 'react'

const emojis = ['😄','🙂','😐','🙁','😢']

export default function MoodTracker() {
  const [selected, setSelected] = useState<number | null>(null)
  const [note, setNote] = useState('Feeling anxious but hopeful.')

  return (
    <div className="bg-calm p-6 rounded-card shadow mb-6">
      <h2 className="font-heading text-xl mb-2">How are you feeling today?</h2>
      <div className="flex space-x-4 text-3xl mb-4">
        {emojis.map((emoji, idx) => (
          <button
            key={idx}
            className={`p-2 rounded-lg ${selected === idx ? 'bg-lavender' : ''}`}
            onClick={() => setSelected(idx)}
          >
            {emoji}
          </button>
        ))}
      </div>
      <textarea
        className="w-full p-2 rounded border border-gray-300"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  )
}
