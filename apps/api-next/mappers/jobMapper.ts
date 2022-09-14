import { Job, JobDTO } from '@cv-portfolio/data';

export const mapJobs = (jobs: Job[]) => {
  return jobs.map((job) => {
    const dto: JobDTO = {
      ...job,
      dateStart: {
        month: job.dateStart?.toLocaleString('default', { month: 'short' }),
        year: `${job.dateStart?.getFullYear()}`,
      },
      dateEnd: {
        month: job.dateEnd?.toLocaleString('default', { month: 'short' }),
        year: `${job.dateEnd?.getFullYear()}`,
      },
    };
    return dto;
  });
};
