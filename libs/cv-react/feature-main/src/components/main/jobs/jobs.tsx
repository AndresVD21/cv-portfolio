import { JobModel } from '@cv-portfolio/data';
import CvReactJob from './job/job';
import './jobs.scss';

/* eslint-disable-next-line */
export interface JobsProps {
  jobs: JobModel[];
}

const Jobs: React.FC<JobsProps> = ({ jobs }) => {
  return (
    <div className="employ-container">
      {jobs.length > 0 &&
        jobs.map((job) => <CvReactJob key={job.roleName} job={job} />)}
      {jobs.length === 0 && (
        <div className="no-jobs-container">
          <span className="no-jobs-text">There are no jobs registered.</span>
        </div>
      )}
    </div>
  );
};

export default Jobs;
