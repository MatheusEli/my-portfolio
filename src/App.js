import "./sass/main.scss";
import NatoursImage from "./assets/natours.png";
import TEMSImage from "./assets/tems.png";
import SOSTEMSImage from "./assets/sostems.png";
import NexterImage from "./assets/nexter.png";
import TrilloImage from "./assets/trillo.png";
import AtelieImage from "./assets/atelie.png";
import { useRef } from "react";

import { ReactComponent as GithubIcon } from "./assets/github.svg";
import { ReactComponent as MentorIcon } from "./assets/mentor.svg";
import { ReactComponent as LinkedinIcon } from "./assets/linkedin.svg";
import { ReactComponent as TwitterIcon } from "./assets/twitter.svg";

import { motion } from "framer-motion";

export default function App() {
  const resultRef = useRef(null);

  const contact = () => {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="container">
      <section className="header">
        <nav className="navigation">
          matheuseli
          <ul>
            <li>
              <a
                rel="noreferrer"
                href="https://github.com/MatheusEli"
                target="_blank"
              >
                <GithubIcon />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                href="https://www.frontendmentor.io/profile/MatheusEli"
                target="_blank"
              >
                <MentorIcon />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/matheus-eli-ferreira/"
                target="_blank"
              >
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                href="https://twitter.com/MatheusEli99"
                target="_blank"
              >
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </nav>

        <div  className="header__text-box">
          <h1>
            Nice to meet you!
            <br />
            I'm <span>Matheus Eli</span>.
          </h1>
          <p>
            Based in the São Paulo, I’m a front-end developer passionate about
            building accessible web apps that users love.
          </p>

          <h6 onClick={contact}>CONTACT ME</h6>
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
        <h6 onClick={contact}>CONTACT ME</h6>

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

      <section className="contact" ref={resultRef}>
        <div className="contact__container">
          <div>
            <h2>Contact</h2>
            <p>
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>

          <form className="form">
            <div className="form__input-box">
              <input type="text" placeholder="name" />
            </div>
            <div className="form__input-box">
              <input type="text" placeholder="email" />
            </div>
            <div className="form__input-box">
              <textarea placeholder="message" />
            </div>

            <button>Send Message</button>
          </form>
        </div>
        <nav className="navigation">
          matheuseli
          <ul>
            <li>
              <a
                rel="noreferrer"
                href="https://github.com/MatheusEli"
                target="_blank"
              >
                <GithubIcon />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                href="https://www.frontendmentor.io/profile/MatheusEli"
                target="_blank"
              >
                <MentorIcon />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/matheus-eli-ferreira/"
                target="_blank"
              >
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                href="https://twitter.com/MatheusEli99"
                target="_blank"
              >
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
