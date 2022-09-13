import { JobModel } from '@cv-portfolio/data';
import { Space } from '@cv-portfolio/shared/react-ui';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './job.scss';

/* eslint-disable-next-line */
export interface JobProps {
  job: JobModel;
}

const CvReactJob: React.FC<JobProps> = ({ job }) => {
  return (
    <div className="employ">
      <div className={`employ-data ${job.isCurrentJob ? 'current' : ''}`}>
        {job.isCurrentJob && (
          <FontAwesomeIcon
            icon={faFire}
            className="current-job-icon"
            size="2x"
          />
        )}
        <p className="employ-header">
          <span className="employ-role-name">{job.roleName}</span>
          <Space />
          at
          <Space />
          <span className="employ-company">{job.company},</span>
          <Space />
          <span className="employ-location">{job.location}</span>
        </p>
        <p className="employ-date-range">
          <span className="date-start_month">{job.dateStart?.month}</span>
          <Space />
          <span className="date-start_year">{job.dateStart?.year}</span>
          <Space />-<Space />
          {job.isCurrentJob ? (
            <span className="present">Present</span>
          ) : (
            <>
              <span className="date-end_month">{job.dateEnd?.month}</span>
              <Space />
              <span className="date-end_year">{job.dateEnd?.year}</span>
            </>
          )}
        </p>
        <div className="employ-functions">
          <ul className="functions-list">
            {job.jobFunctions.map((func) => (
              <li className="function-item" key={func}>
                {func}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CvReactJob;
