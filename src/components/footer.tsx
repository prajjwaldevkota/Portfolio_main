export function Footer() {
  return (
    <footer className="page-width flex items-center justify-between gap-4 border-t border-divider py-7 text-xs text-muted">
      <p>© {new Date().getFullYear()} Prajjwal Devkota</p>
      <a href="#top" className="shrink-0">Back to top ↑</a>
    </footer>
  )
}
