import Head from 'next/head'

export default function HomePage() {
  return (
    <div className="container">
      <nav className="navigation-menu">
        <ul className="nav-list">
          <li className="nav-item"><a className="nav-link" href="">About</a></li>
          <li className="nav-item"><a className="nav-link" href="">Services</a></li>
          <li className="nav-item"><a className="nav-link" href="">Contact</a></li>
        </ul>
      </nav>
      <h1 className="red">Wood Export from Ukraine</h1>
    </div>
  )
}
