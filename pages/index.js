import Header from "./../components/Header.js"
import About from "./../components/About.js"
import Services from "./../components/Services.js";

export default function HomePage() {
  return (
    <div className="container">
      <Header />
      
      <main className="content"> 
        <About />
        <Services />
      </main>

      <footer className="contact"></footer>
    </div>
  )
}
