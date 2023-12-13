import "./sass/main.scss";
import NatoursImage from "./assets/natours.png";
import TEMSImage from "./assets/tems.png";
import SOSTEMSImage from "./assets/sostems.png";
import NexterImage from "./assets/nexter.png";
import TrilloImage from "./assets/trillo.png";
import AtelieImage from "./assets/atelie.png";
import { useRef, useState, useEffect } from "react";

import { ReactComponent as GithubIcon } from "./assets/github.svg";
import { ReactComponent as MentorIcon } from "./assets/mentor.svg";
import { ReactComponent as LinkedinIcon } from "./assets/linkedin.svg";
import { ReactComponent as TwitterIcon } from "./assets/twitter.svg";

import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";

import axios from "axios";
import { isMobile } from "react-device-detect";

export default function App() {
  const [envioHabilitado, setEnvioHabilitado] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [dados, setDados] = useState({
    name: "",
    email: "",
    text: "",
  });

  const clear = () => {
    setDados({
      name: "",
      email: "",
      text: "",
    });
  };

  const handleChange = (name, value) => {
    if (name === "email") {
      validateEmail(value);
    }
    setDados({
      ...dados,
      [name]: value,
    });
  };

  useEffect(() => {
    const { name, email, text } = dados;

    const todosCamposPreenchidos =
      name.trim() !== "" && email.trim() !== "" && text.trim() !== "";

    setEnvioHabilitado(todosCamposPreenchidos);
  }, [dados]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "https://matheuseli-portfolio.netlify.app/.netlify/functions/send-email",
        {
          nome: dados.name,
          email: dados.email,
          message: dados.text,
        }
      );
      clear();
    } catch (error) {
      console.log(error);
    }

    clear();
  };

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  };

  const resultRef = useRef(null);

  const contact = () => {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const attributes = !isMobile && {
    initial: { opacity: 0, x: "-50" },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 }
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

        <div className="header__text-box">
          {isMobile ? (
            <h1>
              Nice to meet you!
              <br />
              I'm <span>Matheus Eli</span>.
            </h1>
          ) : (
            <>
              <AnimatedTitle text="Nice to meet you!" />
              <AnimatedTitle text="I'm Matheus Eli" />
            </>
          )}
          <motion.p {...attributes}>
            Based in the São Paulo, I’m a front-end developer passionate about
            building accessible web apps that users love.
          </motion.p>

          <motion.h6 {...attributes} onClick={contact}>
            CONTACT ME
          </motion.h6>
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

          <form className="form" onSubmit={handleSubmit}>
            <div className="form__input-box">
              <input
                type="text"
                placeholder="name"
                value={dados.name}
                onChange={(event) => handleChange("name", event.target.value)}
              />
            </div>
            <div className="form__input-box">
              <input
                type="email"
                placeholder="email"
                value={dados.email}
                style={{
                  borderBottom: isValidEmail ? "" : "1px solid #FF6F5B",
                }}
                onChange={(event) => handleChange("email", event.target.value)}
              />
              {!isValidEmail && (
                <p
                  style={{
                    marginTop: "0",
                    textAlign: "right",
                    color: "#FF6F5B",
                    textTransform: "none",
                    fontSize: "1.2rem",
                    marginLeft: "auto",
                  }}
                >
                  Sorry, invalid format here
                </p>
              )}
            </div>
            <div className="form__input-box">
              <textarea
                placeholder="message"
                value={dados.text}
                onChange={(event) => handleChange("text", event.target.value)}
              />
            </div>

            <button disabled={!envioHabilitado}>Send Message</button>
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
