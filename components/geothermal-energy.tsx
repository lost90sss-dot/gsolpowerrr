import LazyVideo from './lazy-video'

export default function GeothermalEnergy() {
  return (
    <>
      <section id="geothermal" className="relative w-full h-96 md:h-screen overflow-hidden border-t border-primary/10">
        <LazyVideo
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vidu-video-3304078223142528-EQs5VGRYTSswouxkERzQRtN04ux72w.mp4"
          autoPlay
          muted
          loop
          playsInline
          containerClassName="absolute inset-0 w-full h-full"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Geothermal Energy Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-balance">Geothermal Energy</h2>
            <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto">
              Harnessing Heat from the Earth
            </p>
          </div>
        </div>
      </section>

      {/* Geothermal Energy Details Section */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Geothermal Power Plant 3D Model Viewer */}
          <div className="mb-16 bg-card border border-primary/20 rounded-xl overflow-hidden">
            <iframe
              src="https://3d.energyencyclopedia.com/geothermal"
              width="100%"
              height="600"
              className="w-full"
              title="Interactive 3D Geothermal Power Plant Model"
              style={{ border: 'none' }}
            />
          </div>

          {/* Energy Extraction Process */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Geothermal Energy Extraction Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition">
                <div className="text-4xl font-bold text-primary mb-3">01</div>
                <h4 className="font-semibold text-foreground mb-2">Heat Source Access</h4>
                <p className="text-sm text-muted-foreground">Deep wells reach geothermal reservoirs where rock temperatures exceed 300°C, tapping into Earth&apos;s constant internal heat.</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition">
                <div className="text-4xl font-bold text-primary mb-3">02</div>
                <h4 className="font-semibold text-foreground mb-2">Fluid Extraction</h4>
                <p className="text-sm text-muted-foreground">Hot geothermal fluids or steam are pumped to the surface through production wells, carrying thermal energy from deep underground.</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition">
                <div className="text-4xl font-bold text-primary mb-3">03</div>
                <h4 className="font-semibold text-foreground mb-2">Energy Conversion</h4>
                <p className="text-sm text-muted-foreground">High-pressure steam or hot fluid drives turbines, converting thermal energy into mechanical rotation for electricity generation.</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition">
                <div className="text-4xl font-bold text-primary mb-3">04</div>
                <h4 className="font-semibold text-foreground mb-2">Continuous Power</h4>
                <p className="text-sm text-muted-foreground">Spent fluids are reinjected to maintain pressure and heat, enabling reliable baseload power 24/7 with minimal environmental impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
