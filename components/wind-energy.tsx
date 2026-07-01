import LazyVideo from './lazy-video'

export default function WindEnergy() {
  return (
    <>
      <section id="wind" className="relative w-full h-96 md:h-screen overflow-hidden border-t border-primary/10">
        {/* Wind Energy Video Background */}
        <LazyVideo
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wind-dlIEcMcCwM3F1NNk4Pzc3Uw2XUEQao.mp4"
          autoPlay
          muted
          loop
          playsInline
          containerClassName="absolute inset-0 w-full h-full"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Wind Energy Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-balance">Wind Energy</h2>
            <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto">
              Capturing the Power of the Wind
            </p>
          </div>
        </div>
      </section>

      {/* Wind Energy Details Section */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Wind Turbine 3D Model Viewer */}
          <div className="mb-16 bg-card border border-primary/20 rounded-xl overflow-hidden">
            <iframe
              src="https://3d.energyencyclopedia.com/wind-energy/horizontal-axis-turbine"
              width="100%"
              height="600"
              className="w-full"
              title="Interactive 3D Horizontal Axis Wind Turbine Model"
              style={{ border: 'none' }}
            />
          </div>

          {/* Energy Extraction Process */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Wind Energy Extraction Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition">
                <div className="text-4xl font-bold text-primary mb-3">01</div>
                <h4 className="font-semibold text-foreground mb-2">Wind Intake</h4>
                <p className="text-sm text-muted-foreground">Wind passes through turbine blades, creating rotational force. Optimal wind speeds (12-35 mph) generate maximum kinetic energy.</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition">
                <div className="text-4xl font-bold text-primary mb-3">02</div>
                <h4 className="font-semibold text-foreground mb-2">Blade Rotation</h4>
                <p className="text-sm text-muted-foreground">Aerodynamic blade design converts wind pressure into rotational motion, spinning the rotor shaft at increasing speeds.</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition">
                <div className="text-4xl font-bold text-primary mb-3">03</div>
                <h4 className="font-semibold text-foreground mb-2">Generator Conversion</h4>
                <p className="text-sm text-muted-foreground">Mechanical rotation drives a generator, converting kinetic energy into electrical energy through electromagnetic induction.</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition">
                <div className="text-4xl font-bold text-primary mb-3">04</div>
                <h4 className="font-semibold text-foreground mb-2">Power Distribution</h4>
                <p className="text-sm text-muted-foreground">Generated electricity flows through power converters and inverters, supplying clean renewable power to grid or on-site systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
