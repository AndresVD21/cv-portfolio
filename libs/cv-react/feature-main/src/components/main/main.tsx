import './main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAddressCard,
  faFire,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';
import Jobs from './jobs/jobs';
import React, { useEffect, useState } from 'react';
import { getJobHistory } from '../../services/jobs.service';
import { JobModel } from '@cv-portfolio/data';
import {
  Footer,
  Header,
  Loading,
  NoData,
  Space,
} from '@cv-portfolio/shared/react-ui';
import { finalize, Subject, takeUntil } from 'rxjs';

/* eslint-disable-next-line */
export interface MainProps {
  apiUrl: string;
  functionsUrl: string;
}

export const Main: React.FC<MainProps> = ({ apiUrl, functionsUrl }) => {
  const $destroy = new Subject<boolean>();

  library.add(faAddressCard, faFolderOpen, faFire);
  const [jobs, setJobs] = useState<JobModel[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getHistory();

    return () => {
      $destroy.next(true);
      $destroy.unsubscribe();
    };
  }, []);

  const getHistory = () => {
    setLoading(true);
    getJobHistory(functionsUrl)
      .pipe(
        finalize(() => setLoading(false)),
        takeUntil($destroy)
      )
      .subscribe(({ data }) => {
        setJobs(data ? [...data] : []);
      });
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
            <Space />
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
            <Space />
            Jobs
          </h2>
          {loading ? (
            <Loading loadingMessage="Loading jobs history..." />
          ) : jobs.length > 0 ? (
            <Jobs jobs={jobs} />
          ) : (
            <NoData noDataText="There are no jobs registered." />
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
