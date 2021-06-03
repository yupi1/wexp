import { useRef } from "react";

import Header from "./../components/Header.js"
import About from "./../components/About.js"
import Services from "./../components/Services.js";

const { log } = console;

export default function HomePage() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div className="container">
      <Header servicesRef={servicesRef} aboutRef={aboutRef} />

      <main className="content">
        <About forwardedRef={aboutRef} />
        <Services forwardedRef={servicesRef} />
      </main>

      <footer className="contact"></footer>
    </div>
  )
}
