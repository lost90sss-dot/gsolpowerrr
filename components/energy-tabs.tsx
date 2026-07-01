import Link from 'next/link';

const tabs = [
  { name: 'Solar', id: 'solar' },
  { name: 'Wind', id: 'wind' },
  { name: 'Hydro', id: 'hydro' },
  { name: 'Geothermal', id: 'geothermal' },
];

export default function EnergyTabs() {
  return (
    <section className="w-full bg-background border-b border-primary/20 py-4 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-center gap-4 md:gap-12 flex-wrap">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={`#${tab.id}`}
            className="px-6 py-2 rounded-full border border-primary/30 hover:bg-primary/10 hover:border-primary text-foreground font-semibold transition-all"
          >
            {tab.name} Energy
          </Link>
        ))}
      </div>
    </section>
  );
}
