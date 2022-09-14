import { FbJobDto, JobModel } from '@cv-portfolio/data';

export const mapJobs = (jobs: FbJobDto[]): JobModel[] => {
  return jobs.map((job) => {
    return {
      roleName: job.roleName,
      company: job.company,
      location: job.location,
      dateStart: {
        month: job.dateStartMonth,
        year: job.dateStartYear,
      },
      dateEnd: {
        month: job.dateEndMonth,
        year: job.dateEndYear,
      },
      isCurrentJob: job.isCurrentJob,
      jobFunctions: [...job.jobFunctions],
    };
  });
};
