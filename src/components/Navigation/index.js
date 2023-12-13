import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as MentorIcon } from "../../assets/mentor.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";

export default function Navigation() {
  return (
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
  )
}
