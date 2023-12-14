import AppTems from '../../../assets/apptems.png';
import ACare from '../../../assets/acare.png';

export default function Apps() {
  return (
    <ul>
          <li>
            <div className="projects__button-box">
              <a
                rel="noreferrer"
                href="https://play.google.com/store/apps/details?id=br.com.tems.app_tems_v2"
                target="_blank"
              >
                view project
              </a>
            </div>
            <figure>
              <img src={AppTems} alt="AppTems App" />
              <figcaption>
                <h5>App TEMS</h5>
                Flutter Strapi
              </figcaption>
            </figure>
          </li>
          <li>
            <div className="projects__button-box">
              <a rel="noreferrer" href="https://play.google.com/store/apps/details?id=br.com.acare" target="_blank">
                view project
              </a>
            </div>
            <figure>
              <img src={ACare} alt="A-Care App" />
              <figcaption>
                <h5>A-Care</h5>
                Ionic Angular Typescript Firebase
              </figcaption>
            </figure>
          </li>
        </ul>
  )
}
