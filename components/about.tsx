import Image from 'next/image'

export default function About() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-background via-background/50 to-background border-t border-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">About GSOL</h2>
        </div>

        <div className="space-y-12">
          <div>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              <strong className="text-foreground">GSOL CORP LLP</strong> is the mother company of GSOL POWER. Together we are led by modern sustainability visionaries committed to redefining clean energy transition on a global scale. We engineer resilient infrastructure that integrates architectural luxury with unmatched thermodynamic performance.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our core philosophy balances aesthetic elegance with high-efficiency utility engineering. From silent high-wind verticals to offshore kinetic ocean absorbers, our bespoke systems provide robust baseload grids for discerning enterprises, utility networks, and private resort portfolios worldwide.
            </p>
          </div>

          {/* Corporate Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Corporate Headquarters</h3>
              <p className="text-foreground font-semibold mb-2">GSOL POWER</p>
              <p className="text-muted-foreground mb-1">Subsidiary of GSOL CORP LLP</p>
              <p className="text-muted-foreground mb-4">1714, 7th Floor, T1 HI-LITE Business Park</p>
              <p className="text-muted-foreground">Kozhikode, Kerala - 673001, India</p>
            </div>

            <div className="bg-card border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Chief Executive Officer</h3>
              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-48 aspect-[3/4] shrink-0">
                  <Image
                    src="/ajmal-ceo.png"
                    alt="Ajmal Fakeer"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Phone</p>
                  <p className="text-foreground font-mono">+91 9656777005</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Email</p>
                  <p className="text-foreground font-mono">Gsolpower@gmail.com</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Website</p>
                  <p className="text-foreground font-mono">www.gsolpower.com</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
