import Image from 'next/image'

interface FeatureCardProps {
  title: string
  description: string
  image: string
  icon?: React.ReactNode
}

export function FeatureCard({
  title,
  description,
  image,
  icon,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          {icon && <div className="text-accent">{icon}</div>}
          <h3 className="font-serif text-xl font-bold text-foreground">
            {title}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
