import Header from "./../components/Header.js"
import About from "./../components/About.js"

export default function HomePage() {
  return (
    <div className="container">
      <Header />
      <main>
        <About />
        <section className="Services"></section>
      </main>

      <footer className="contact"></footer>
    </div>
  )
}
