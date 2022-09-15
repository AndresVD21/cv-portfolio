import { JobDTO, ResponseDTO } from '@cv-portfolio/data';
import { getJobs } from '@cv-portfolio/data-access';
import axios from 'axios';
import { from } from 'rxjs';

export const getJobHistory = (apiUrl: string) => {
  // return getJobs(apiUrl);
  return from(axios.get<ResponseDTO<JobDTO[]>>(`${apiUrl}/api/job-history`));
};
