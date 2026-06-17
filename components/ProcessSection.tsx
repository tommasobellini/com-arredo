import Link from 'next/link'

const steps = [
  {
    num: '01',
    title: 'Consulenza',
    description:
      'Primo incontro in bottega o a domicilio: ascoltiamo le tue esigenze, misuriamo gli spazi e definiamo budget e tempi.',
  },
  {
    num: '02',
    title: 'Progetto su misura',
    description:
      'Elaboriamo disegni tecnici, campionature di essenze e finiture. Ogni dettaglio viene condiviso prima della lavorazione.',
  },
  {
    num: '03',
    title: 'Lavorazione in bottega',
    description:
      'Realizzazione artigianale con incastri a mano, essenze certificate e controlli qualità in ogni fase della produzione.',
  },
  {
    num: '04',
    title: 'Posa e collaudo',
    description:
      'Installazione a regola d\'arte, rifiniture in loco e verifica finale insieme al cliente per la consegna del progetto.',
  },
]

export default function ProcessSection() {
  return (
    <section id="processo" className="process-section">
      <div className="container">
        <header className="process-header">
          <span className="process-eyebrow">COME LAVORIAMO</span>
          <h2 className="process-title serif">
            Il nostro <span className="text-accent">processo</span>
          </h2>
          <p className="process-intro">
            Dal primo schizzo alla posa finale: quattro fasi chiare, seguite con la stessa cura
            artigianale che da oltre trent&apos;anni caratterizza Com-Arredo.
          </p>
        </header>

        <ol className="process-timeline">
          {steps.map((step, index) => (
            <li key={step.num} className="process-step">
              <article className="process-card">
                <span className="process-card-num" aria-hidden>
                  {step.num}
                </span>
                <h3 className="process-card-title serif">{step.title}</h3>
                <p className="process-card-desc">{step.description}</p>
              </article>
              {index < steps.length - 1 && (
                <span className="process-connector" aria-hidden />
              )}
            </li>
          ))}
        </ol>

        <div className="process-cta">
          <p className="process-cta-text">
            Hai già un&apos;idea o un progetto da realizzare? Raccontacelo: ti rispondiamo entro 24 ore.
          </p>
          <div className="process-cta-actions section-actions" style={{ marginTop: 0 }}>
            <Link href="/contatti" className="btn-primary">
              Avvia il tuo progetto
            </Link>
            <Link href="/portfolio" className="footer-cta-secondary">
              Guarda i lavori
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
