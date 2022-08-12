import { Job } from '@cv-portfolio/data';
import CvReactJob from './job/job';
import './jobs.scss';

/* eslint-disable-next-line */
export interface JobsProps {
  jobs: Job[];
}

const Jobs: React.FC<JobsProps> = ({ jobs }) => {
  return (
    <div className="employ-container">
      {jobs.map((job) => (
        <CvReactJob key={job.roleName} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
