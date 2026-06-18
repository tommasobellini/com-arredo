'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="it">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#0e0d0b', color: '#fff' }}>
        <main
          id="main-content"
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Errore del sito</h1>
          <p style={{ opacity: 0.7, maxWidth: '28rem', marginBottom: '2rem' }}>
            Si è verificato un errore critico. Ricarica la pagina o riprova tra qualche istante.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              background: '#348059',
              color: '#fff',
              border: 'none',
              padding: '0.875rem 1.5rem',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Riprova
          </button>
        </main>
      </body>
    </html>
  )
}
