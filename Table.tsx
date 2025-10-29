interface User {
  email: string
  lastMood: string
  avgMood: string
}

const users: User[] = [
  { email: "alice@example.com", lastMood: "2025-10-27", avgMood: "🙂" },
  { email: "bob@example.com", lastMood: "2025-10-28", avgMood: "😄" }
]

export default function Table() {
  return (
    <table className="w-full border-collapse bg-calm rounded-card shadow">
      <thead>
        <tr className="bg-lavender text-white">
          <th className="p-3 text-left">Email</th>
          <th className="p-3 text-left">Last Mood Entry</th>
          <th className="p-3 text-left">Avg Mood</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.email} className="border-t hover:bg-purple-50">
            <td className="p-3">{user.email}</td>
            <td className="p-3">{user.lastMood}</td>
            <td className="p-3">{user.avgMood}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
