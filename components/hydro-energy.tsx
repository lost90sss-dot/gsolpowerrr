import LazyVideo from './lazy-video'

export default function HydroEnergy() {
  return (
    <>
      <section id="hydro" className="relative w-full h-96 md:h-screen overflow-hidden border-t border-primary/10">
        <LazyVideo
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hydro-fPi5nHQRJVwFRsn2pTlZJBj2Zwljmo.mp4"
          autoPlay
          muted
          loop
          playsInline
          containerClassName="absolute inset-0 w-full h-full"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hydro Energy Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-balance">Hydro Energy</h2>
            <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto">
              Harnessing the Power of Water
            </p>
          </div>
        </div>
      </section>

      {/* Hydro Energy Details Section */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Pelton Turbine 3D Model Viewer */}
          <div className="mb-16 bg-card border border-primary/20 rounded-xl overflow-hidden">
            <iframe
              src="https://3d.energyencyclopedia.com/hydropower-plant/pelton"
              width="100%"
              height="600"
              className="w-full"
              title="Interactive 3D Pelton Turbine Model"
              style={{ border: 'none' }}
            />
          </div>

          {/* Energy Extraction Process */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Hydro Energy Extraction Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition">
                <div className="text-4xl font-bold text-primary mb-3">01</div>
                <h4 className="font-semibold text-foreground mb-2">Water Collection</h4>
                <p className="text-sm text-muted-foreground">Water is collected in reservoirs behind dams, creating gravitational potential energy from elevation differences.</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition">
                <div className="text-4xl font-bold text-primary mb-3">02</div>
                <h4 className="font-semibold text-foreground mb-2">Pressure Buildup</h4>
                <p className="text-sm text-muted-foreground">Water accumulates behind the dam, building hydrostatic pressure as depth increases, storing massive amounts of potential energy.</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition">
                <div className="text-4xl font-bold text-primary mb-3">03</div>
                <h4 className="font-semibold text-foreground mb-2">Turbine Spin</h4>
                <p className="text-sm text-muted-foreground">Controlled water flow spins turbine blades at high speed, converting kinetic energy into mechanical rotational energy.</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition">
                <div className="text-4xl font-bold text-primary mb-3">04</div>
                <h4 className="font-semibold text-foreground mb-2">Power Output</h4>
                <p className="text-sm text-muted-foreground">Connected generators convert turbine rotation into electricity, providing consistent, controllable renewable power to the grid.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
