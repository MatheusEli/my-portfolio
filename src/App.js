import "./sass/main.scss";
import NatoursImage from './assets/natours.png';
import TEMSImage from './assets/tems.png';
import SOSTEMSImage from './assets/sostems.png';
import NexterImage from './assets/nexter.png';
import TrilloImage from './assets/trillo.png';

export default function App() {
  return (
    <div className="container">
      <section className="header">
        <nav className="navigation">
          <a href="#">matheuseli</a>
          <ul>
            <li>
              <a href="#">
                <img src="github.svg" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="mentor.svg" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="linkedin.svg" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="twitter.svg" />
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__text-box">
          <h1>
            Nice to meet you!
            <br />
            I'm <span>Matheus Eli</span>.
          </h1>
          <p>
            Based in the São Paulo, I’m a front-end developer passionate about
            building accessible web apps that users love.
          </p>

          <h6>CONTACT ME</h6>
        </div>
      </section>

      <section className="languages">
        <ul className="languages__list">
          <li className="languages__item">
            <h4>HTML</h4>
            <p>4 Years Experience</p>
          </li>
          <li className="languages__item">
            <h4>CSS</h4>
            <p>4 Years Experience</p>
          </li>
          <li className="languages__item">
            <h4>Javascript</h4>
            <p>4 Years Experience</p>
          </li>
          <li className="languages__item">
            <h4>Acessibility</h4>
            <p>1 Years Experience</p>
          </li>
          <li className="languages__item">
            <h4>React</h4>
            <p>1 Year Experience</p>
          </li>
          <li className="languages__item">
            <h4>Sass</h4>
            <p>2 Years Experience</p>
          </li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <h6>CONTACT ME</h6>

        <ul>
          <li>
            <figure>
              <img src={NatoursImage}  alt="Natours Website"/>
              <figcaption>
                <h5>Natours</h5>
                HTML SASS
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={TEMSImage}  alt="Natours Website"/>
              <figcaption>
                <h5>TEMS</h5>
                REACT HTML SASS JAVASCRIPT
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={NexterImage}  alt="Natours Website"/>
              <figcaption>
                <h5>Nexter</h5>
                HTML SASS
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={SOSTEMSImage}  alt="Natours Website"/>
              <figcaption>
                <h5>SOS TEMS</h5>
                ANGULAR HTML SASS TYPESCRIPT
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>

      <section className="contact">

      </section>
    </div>
  );
}
