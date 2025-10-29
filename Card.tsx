interface CardProps {
  title: string
  description: string
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="bg-calm rounded-card shadow p-6 hover:shadow-lg transition">
      <h2 className="font-heading text-xl mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  )
}
