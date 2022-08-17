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
import { getJobHistory } from '../../services/getJobs';
import { JobModel } from '@cv-portfolio/data';
import Footer from '../footer/footer';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  library.add(faAddressCard, faFolderOpen, faFire);
  const [jobs, setJobs] = useState<JobModel[]>([]);
  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const { data } = await getJobHistory();
    setJobs(data);
  };

  return (
    <>
      <div className="cv-portfolio-main-container">
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
    </>
  );
}

export default Main;
