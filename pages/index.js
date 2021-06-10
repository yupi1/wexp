import { useRef } from "react";

import Header from "./../components/Header.js"
import About from "./../components/About.js"
import Services from "./../components/Services.js";
import Footer from "./../components/Footer"

const { log } = console;

export default function HomePage() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div className="container">
      <Header servicesRef={servicesRef} aboutRef={aboutRef} footerRef={footerRef} />

      <main className="content">
        <About forwardedRef={aboutRef} />
        <Services forwardedRef={servicesRef} />
      </main>

      <Footer forwardedRef={footerRef} />
    </div>
  )
}
