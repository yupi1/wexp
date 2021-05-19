import Navigation from "./../components/Navigation.js";
import About from "./../components/About.js"

export default function HomePage() {
  return (
    <div className="container">
      <header>
        <Navigation />
        <span style={{visibility: "hidden"}}>DT</span>
      </header>

      <main>
        <About />

        <section className="Services"></section>
      </main>

      <footer className="contact"></footer>
    </div>
  )
}
