import "./App.css";
import {
  Nav,
  Hero,
  About,
  Career,
  Skills,
  Learning,
  Projects,
  Contact,
  Footer,
} from "./Components";

function App() {
  return (
    <div style={{ position: "relative", overflow: "hidden", width: "100vw" }}>
      <div className="shooting-lane" aria-hidden="true">
        <span className="shooting-object" />
      </div>
      <Nav />
      <Hero />
      <About />
      <Career />
      <Skills />
      <Learning />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
