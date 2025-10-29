import Navbar from '../components/Navbar'
import MoodTracker from '../components/MoodTracker'

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl mb-6">Dashboard</h1>
        <MoodTracker />
      </main>
    </div>
  )
}
