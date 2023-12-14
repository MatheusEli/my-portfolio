import { Route, Routes, NavLink } from "react-router-dom";
import Websites from "./Websites";
import Apps from "./Apps";
import { useRef } from 'react';

export default function Projects({ contact }) {

  let projectsRef = useRef(null);
  
  const smoothAnimation = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <section className="projects" ref={projectsRef}>
      <h2 className="heading-primary">Projects</h2>
      <h6 onClick={() => contact()} className="btn">
        CONTACT ME
      </h6>

      <div className="projects__menu" style={{ width: "100%", marginTop: "2rem" }}>
        <NavLink
          className={(navData) => (navData.isActive ? "item-active" : "")}
          to="/"
        >
          <h6 className="btn" style={{ marginRight: "2rem" }} onClick={smoothAnimation}>
            Websites
          </h6>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "item-active" : "")}
          to="/apps"
        >
          <h6 className="btn" onClick={smoothAnimation}>Apps</h6>
        </NavLink>
      </div>

      <Routes>
        <Route exact path="/" element={<Websites />} />
        <Route exact path="/apps" element={<Apps />} />
      </Routes>
    </section>
  );
}
