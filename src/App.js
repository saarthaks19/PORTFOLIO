import "./App.css";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import Card from "./components/Card";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";

function App() {
  return (
    <div className="App">
      <section id="home">
        {" "}
        <Home></Home>{" "}
      </section>
      <section id="about">
        {" "}
        <About></About>{" "}
      </section>
      <section id="skills">
        {" "}
        <Skills></Skills>{" "}
      </section>
      <section id="projects">
        {" "}
        <Projects></Projects>{" "}
      </section>
      <section id="contact">
        {" "}
        <Contact></Contact>{" "}
      </section>
    </div>
  );
}

export default App;
