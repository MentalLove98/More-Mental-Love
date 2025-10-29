import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-lavender px-8 py-4 flex justify-between items-center shadow-md">
      <h1 className="font-heading text-2xl text-white">More Mental Love</h1>
      <div className="space-x-4">
        <Link href="/dashboard" className="text-white hover:underline">Dashboard</Link>
        <Link href="/quiz" className="text-white hover:underline">Quiz</Link>
        <Link href="/admin" className="text-white hover:underline">Admin</Link>
      </div>
    </nav>
  )
}
