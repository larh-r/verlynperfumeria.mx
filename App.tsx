export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 lg:px-10 border-t border-border/50 bg-gradient-dark">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold-deep/20" />
          <div className="absolute inset-6 border border-gold/30 flex items-center justify-center">
            <div className="text-center">
              <p className="font-display text-7xl md:text-8xl gradient-gold-text">V</p>
              <p className="text-[10px] uppercase tracking-luxe text-gold mt-2">Maison Véryn</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-luxe text-gold mb-4">Notre Maison</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
            Composed in <span className="italic gradient-gold-text">Grasse</span>,
            <br />
            destined for the world.
          </h2>
          <div className="w-12 h-px bg-gold my-8" />
          <p className="text-muted-foreground leading-relaxed font-light mb-6">
            VÉRYN is a quiet rebellion against the ordinary. Each composition is hand-blended in our
            atelier in Grasse from the world's rarest naturals — Hindi oud aged twenty years, Bulgarian
            rose harvested at dawn, ambergris washed ashore on distant coasts.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            We do not chase trends. We compose silhouettes — fragrances that linger in memory long
            after the wearer has left the room.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div>
              <p className="font-display text-3xl text-gold">20+</p>
              <p className="text-[10px] uppercase tracking-luxe text-muted-foreground mt-1">Master Perfumers</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold">100%</p>
              <p className="text-[10px] uppercase tracking-luxe text-muted-foreground mt-1">Natural Sourced</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold">48h</p>
              <p className="text-[10px] uppercase tracking-luxe text-muted-foreground mt-1">Global Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

