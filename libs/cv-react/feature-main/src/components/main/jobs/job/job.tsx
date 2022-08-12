import { Job } from '@cv-portfolio/data';
import './job.scss';

/* eslint-disable-next-line */
export interface JobProps {
  job: Job;
}

const CvReactJob: React.FC<JobProps> = ({ job }) => {
  return (
    <div className="employ">
      <div className={`employ-data ${job.isCurrentJob ? 'current' : ''}`}>
        <p className="employ-header">
          <span className="employ-role-name">{job.roleName}</span>
          at
          <span className="employ-company">{job.company}</span>
          <span className="employ-location">{job.location}</span>
        </p>
        <p className="employ-date-range">
          <span className="date-start_month">
            {job.getDateInfo('start').month}
          </span>
          <span className="date-start_year">
            {job.getDateInfo('start').year}
          </span>
          -
          {job.isCurrentJob ? (
            <span className="present">Present</span>
          ) : (
            <>
              <span className="date-end_month">
                {job.getDateInfo('end').month}
              </span>
              <span className="date-end_year">
                {job.getDateInfo('end').year}
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default CvReactJob;
