import './main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressCard, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import Jobs from './jobs/jobs';
import { Job } from '@cv-portfolio/data';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  library.add(faAddressCard, faFolderOpen);
  const jobs: Job[] = [
    new Job(
      'Mid Angular Developer',
      'Gorilla Logic',
      'Medellin',
      new Date(2021, 6, 12),
      true,
      [
        'Using angular 10+ and working with Sass preprocesor.',
        'Use redux pattern to manage state of the application.',
        'Use Spectator and Cypress to implement unit and e2e test cases.',
      ]
    ),
    new Job(
      'Web UI Developer',
      'Globant',
      'Medellin',
      new Date(2018, 9, 15),
      false,
      [
        'Head of the UI team in many applications for one of the Big Four accounting organizations',
        'Taking part in decisions and giving directly advice to the client about the UI of the project and estimating the effort of the tasks.',
        'Using angular 2+ and worked with LESS preprocesor.',
        'Talk to the client about the benefits of keeping applications up-to-date and successfully updated an application from version 2 to 8.',
        'Implementing redux pattern with NGRX for the state management of the applications.',
      ],
      new Date(2021, 6, 12)
    ),
  ];

  return (
    <div className="cv-portfolio-main-container">
      <section id="about-me" className="about container">
        <h2 className="section-title">
          <FontAwesomeIcon icon={faAddressCard} className="icon" />
          About me
        </h2>
        <h3 className="role">Frontend Developer</h3>
        <p className="introduction">
          Web developer with five years of experience in front-end development,
          focused in making high scalable web applications with the best
          practices using the angular framework, also with abilities of working
          with agile methodologies and self learning.
        </p>
      </section>
      <section id="employment-history" className="container">
        <h2 className="section-title">
          <FontAwesomeIcon icon={faFolderOpen} className="icon" />
          Jobs
        </h2>
        <Jobs jobs={jobs} />
      </section>
    </div>
  );
}

export default Main;
