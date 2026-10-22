function Header() {
  return (
    <header className="app-header">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="brand">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 12 4 4 8-9" /></svg>
        </span>
        <div><h1>TaskFlow</h1><p>Less clutter. More clarity.</p></div>
      </div>
      <span className="header-caption">A space to get things done</span>
    </header>
  )
}

export default Header
