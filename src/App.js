import "./sass/main.scss";
import { useRef } from "react";
import Header from './components/Header';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const resultRef = useRef(null);
  const contact = () => {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="container">
      <Header contact={contact} />
      <Languages />
      <Projects contact={contact}/>
      <Contact resultRef={resultRef} />
    </div>
  );
}
