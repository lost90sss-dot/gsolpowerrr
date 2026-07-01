import LazyVideo from './lazy-video'

export default function ProductShowcase() {
  return (
    <>
      {/* Solar Energy Video Section */}
      <section id="solar" className="relative w-full h-96 md:h-screen overflow-hidden border-t border-primary/10">
        <LazyVideo
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mp_%20%282%29-IrnRiNG8Emzk0MoNemx6V78PliRxdp.mp4"
          autoPlay
          muted
          loop
          playsInline
          containerClassName="absolute inset-0 w-full h-full"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Solar Energy Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-balance">Solar Energy</h2>
            <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto">
              Harnessing the Power of the Sun
            </p>
          </div>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
        {/* Solar 3D Model Viewer */}
        <div className="mb-16 bg-card border border-primary/20 rounded-xl overflow-hidden">
          <iframe
            src="https://3d.energyencyclopedia.com/solar_menu"
            width="100%"
            height="600"
            className="w-full"
            title="Interactive 3D Solar System Model"
            style={{ border: 'none' }}
          />
        </div>

        {/* Energy Extraction Process */}
        <div className="mt-20 pt-12 border-t border-primary/10">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Solar Energy Extraction Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition">
              <div className="text-4xl font-bold text-primary mb-3">01</div>
              <h4 className="font-semibold text-foreground mb-2">Photon Capture</h4>
              <p className="text-sm text-muted-foreground">Photovoltaic cells absorb solar photons, generating electron-hole pairs in the semiconductor material through the photoelectric effect.</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition">
              <div className="text-4xl font-bold text-primary mb-3">02</div>
              <h4 className="font-semibold text-foreground mb-2">Electron Excitation</h4>
              <p className="text-sm text-muted-foreground">Electrons gain energy and move through the cell&apos;s internal electric field, creating a directional flow of electrical current.</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition">
              <div className="text-4xl font-bold text-primary mb-3">03</div>
              <h4 className="font-semibold text-foreground mb-2">DC Conversion</h4>
              <p className="text-sm text-muted-foreground">Direct current flows through external circuits and inverters, converting DC to AC power for grid integration and storage.</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition">
              <div className="text-4xl font-bold text-primary mb-3">04</div>
              <h4 className="font-semibold text-foreground mb-2">Grid Distribution</h4>
              <p className="text-sm text-muted-foreground">Clean renewable energy is distributed to buildings or fed back to the grid, with smart metering tracking production in real-time.</p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}
