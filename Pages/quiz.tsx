import Navbar from '../components/Navbar'
import QuizStepper from '../components/QuizStepper'

export default function QuizPage() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl mb-6">Self-Assessment Quiz</h1>
        <QuizStepper />
      </main>
    </div>
  )
}
