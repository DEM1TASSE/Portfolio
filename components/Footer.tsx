export function Footer() {
  return (
    <footer className="mt-24 py-8" style={{ borderTop: '1px solid rgba(182,140,107,0.2)' }}>
      <div className="max-w-4xl mx-auto px-6 text-center text-sm" style={{ color: '#8C5B3C', opacity: 0.6 }}>
        © {new Date().getFullYear()} Demi Ruohan Wang
      </div>
    </footer>
  )
}
