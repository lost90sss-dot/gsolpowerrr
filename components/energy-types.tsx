import { Zap, Wind, Waves, Flame } from 'lucide-react'

interface EnergyCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const EnergyCard: React.FC<EnergyCardProps> = ({ icon: Icon, title, description }) => (
  <div className="group relative p-6 rounded-lg border border-primary/20 bg-card/50 backdrop-blur hover:border-primary/50 hover:bg-primary/10 transition duration-300">
    <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition">
      <Icon className="text-primary" size={24} />
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
)

export default function EnergyTypes() {
  const energyTypes = [
    {
      icon: Zap,
      title: 'Solar Energy',
      description: 'High-efficiency photovoltaic systems engineered for premium deployments',
    },
    {
      icon: Wind,
      title: 'Wind Energy',
      description: 'Advanced vertical turbine technology for silent, efficient power generation',
    },
    {
      icon: Waves,
      title: 'Wave Energy',
      description: 'Kinetic ocean wave capture for offshore renewable baseload power',
    },
    {
      icon: Flame,
      title: 'Geothermal',
      description: 'Earth&apos;s thermal potential for consistent, reliable energy output',
    },
  ]

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-background via-background/80 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {energyTypes.map((energy) => (
            <EnergyCard
              key={energy.title}
              icon={energy.icon}
              title={energy.title}
              description={energy.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
