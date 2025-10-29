import Navbar from '../components/Navbar'
import Table from '../components/Table'

export default function AdminPage() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl mb-6">Admin Panel</h1>
        <Table />
      </main>
    </div>
  )
}
