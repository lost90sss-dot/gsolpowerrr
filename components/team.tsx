import Image from 'next/image'

const teamMembers = [
  {
    name: 'HYNAS RIZWAN',
    position: 'BDE',
    fullPosition: 'Business Development Executive',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/698347647_18103604540066165_7391464033720063190_n-sMiQjoLP93R0NNOyZlS4iI4UG7x5BU.jpg',
  },
  {
    name: 'UTHARA',
    position: 'BGA',
    fullPosition: 'Business Growth Associate',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/695768461_18103603235066165_5979804688841205307_n-v51tpFxam2rAFHcv6DX4zEh4Ro3oPO.jpg',
  },
  {
    name: 'RAESUDHEEN',
    position: 'ACCOUNTANT',
    fullPosition: 'Accountant',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/698473131_18103601954066165_4589987049273111909_n-TjSiLwJ5wlSbXKQkmtAbi1TiA3xGqV.jpg',
  },
  {
    name: 'SALMANUL FARIS',
    position: 'CREATIVE MONK',
    fullPosition: 'Creative Monk',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/698782638_18103602599066165_2291759737744454850_n-MWOrvnP4UJv6LJXnsfGYc1f8E5tYoD.jpg',
  },
  {
    name: 'NAIMA FATHIMA',
    position: 'CRA',
    fullPosition: 'Client Relation Associate',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/689281965_18103604264066165_502611556692768978_n-XT36pFCVqgDqCkiNsbt1TuDbLdIlou.jpg',
  },
  {
    name: 'SHAMEER',
    position: 'COO',
    fullPosition: 'Chief Operating Officer',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/687755184_18103416158066165_5333918663759352244_n-xAsBpNiPr7zadsVJtAS6SPb7p5j9Wa.jpg',
  },
  {
    name: 'FAIZAN',
    position: 'OPERATION MANAGER',
    fullPosition: 'Operation Manager',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/687650171_18103417691066165_5170182437300673247_n-p4ie2QKU4MyVQSlV7J0SoULZOPUn0f.jpg',
  },
  {
    name: 'FATHIMA RINSHA',
    position: 'CRM',
    fullPosition: 'Client Relation Manager',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/689939377_18103601453066165_7037587058940130141_n-pSUblGfDjPl1DbiG34QY7PnG1s9BFU.jpg',
  },
]

export default function Team() {
  return (
    <section className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Management & Client Relations</h2>
          <p className="text-muted-foreground text-lg">Our Operational Excellence Team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className="relative w-full aspect-[4/5] max-w-[280px] mb-6 overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="text-primary font-bold text-sm mb-2 tracking-wide">{member.position}</p>
              <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
