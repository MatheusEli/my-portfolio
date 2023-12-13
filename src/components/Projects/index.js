import NatoursImage from "../../assets/natours.png";
import TEMSImage from "../../assets/tems.png";
import SOSTEMSImage from "../../assets/sostems.png";
import NexterImage from "../../assets/nexter.png";
import TrilloImage from "../../assets/trillo.png";
import AtelieImage from "../../assets/atelie.png";

export default function Projects({contact}) {
  return (
    <section className="projects">
        <h2>Projects</h2>
        <h6 onClick={() => contact()}>CONTACT ME</h6>

        <ul>
          <li>
            <div className="projects__button-box">
              <a
                rel="noreferrer"
                href="https://matheuseli-natours.netlify.app/"
                target="_blank"
              >
                view project
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/MatheusEli/natours"
                target="_blank"
              >
                view code
              </a>
            </div>
            <figure>
              <img src={NatoursImage} alt="Natours Website" />
              <figcaption>
                <h5>Natours</h5>
                HTML SASS
              </figcaption>
            </figure>
          </li>
          <li>
            <div className="projects__button-box">
              <a rel="noreferrer" href="https://tems.com.br/" target="_blank">
                view project
              </a>
            </div>
            <figure>
              <img src={TEMSImage} alt="TEMS Website" />
              <figcaption>
                <h5>TEMS</h5>
                REACT HTML SASS JAVASCRIPT
              </figcaption>
            </figure>
          </li>
          <li>
            <div className="projects__button-box">
              <a
                rel="noreferrer"
                href="https://matheuseli.github.io/Nexter/"
                target="_blank"
              >
                view project
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/MatheusEli/Nexter"
                target="_blank"
              >
                view code
              </a>
            </div>
            <figure>
              <img src={NexterImage} alt="Nexter Website" />
              <figcaption>
                <h5>Nexter</h5>
                HTML SASS
              </figcaption>
            </figure>
          </li>
          <li>
            <div className="projects__button-box">
              <a
                rel="noreferrer"
                href="https://tems.com.br/sostems/#/sobre-campanha"
                target="_blank"
              >
                view project
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/MatheusEli/landing-page-sostems"
                target="_blank"
              >
                view code
              </a>
            </div>
            <figure>
              <img src={SOSTEMSImage} alt="SOS TEMS Website" />
              <figcaption>
                <h5>Campanha SOS TEMS</h5>
                ANGULAR HTML SASS TYPESCRIPT
              </figcaption>
            </figure>
          </li>
          <li>
            <div className="projects__button-box">
              <a
                rel="noreferrer"
                href="https://matheuseli.github.io/Trillo/"
                target="_blank"
              >
                view project
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/MatheusEli/Trillo"
                target="_blank"
              >
                view code
              </a>
            </div>
            <figure>
              <img src={TrilloImage} alt="Trillo Website" />
              <figcaption>
                <h5>Trillo</h5>
                HTML SASS
              </figcaption>
            </figure>
          </li>
          <li>
            <div className="projects__button-box">
              <a
                rel="noreferrer"
                href="https://matheuseli-atelie-frontend.netlify.app"
                target="_blank"
              >
                view project
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/MatheusEli/atelie-frontend-teste"
                target="_blank"
              >
                view code
              </a>
            </div>
            <figure>
              <img src={AtelieImage} alt="Atelie Website" />
              <figcaption>
                <h5>Campanha Atelie</h5>
                REACT HTML SASS JAVASCRIPT
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
  )
}
