export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2
        className="font-serif shrink-0"
        style={{ color: '#4A3327', fontSize: '1.35rem', letterSpacing: '0.02em' }}
      >
        {title}
      </h2>
      <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(182,140,107,0.3)' }} />
    </div>
  )
}
