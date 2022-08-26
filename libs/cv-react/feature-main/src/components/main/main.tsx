import './main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAddressCard,
  faFire,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';
import Jobs from './jobs/jobs';
import { useEffect, useState } from 'react';
import { getJobHistory } from '../../services/jobs.service';
import { JobModel } from '@cv-portfolio/data';
import { Footer, Header } from '@cv-portfolio/shared/react-ui';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  library.add(faAddressCard, faFolderOpen, faFire);
  const [jobs, setJobs] = useState<JobModel[]>([]);
  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const {
      data: { data },
    } = await getJobHistory();
    setJobs(data ? [...data] : []);
  };

  return (
    <div className="cv-portfolio-main-container feature-container">
      <Header>
        <div className="name-container">
          <h1 className="name">Andres Valencia Diaz</h1>
          <p className="resume">
            Nice to meet you! I'm Andrés from Colombia
            <span role="img" aria-label="colombia flag">
              🇨🇴
            </span>
            , Frontend developer who really likes to learn and try new things in
            this vast world of technology!
          </p>
        </div>
      </Header>
      <div className="wrapper">
        <section id="about-me" className="about container">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faAddressCard} className="icon" />
            About me
          </h2>
          <h3 className="role">Frontend Developer</h3>
          <p className="introduction">
            Web developer with five years of experience in front-end
            development, focused in making high scalable web applications with
            the best practices using the angular framework, also with abilities
            of working with agile methodologies and self learning.
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
      <Footer />
    </div>
  );
}

export default Main;
