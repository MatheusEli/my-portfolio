import "./sass/main.scss";
import { useEffect, useRef } from "react";
import Header from './components/Header';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {

  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.screen.orientation.type !== 'portrait-primary') {
        window.screen.orientation.lock('portrait-primary')
          .then(() => console.log('Orientação bloqueada com sucesso'))
          .catch((err) => console.error('Erro ao bloquear a orientação', err));
      }
    };
    window.addEventListener('orientationchange', handleOrientationChange);
    handleOrientationChange();
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

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
