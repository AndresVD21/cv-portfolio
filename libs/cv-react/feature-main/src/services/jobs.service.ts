import { JobDTO, ResponseDTO } from '@cv-portfolio/data';
import { getJobs } from '@cv-portfolio/data-access';
import axios from 'axios';

export const getJobHistory = (apiUrl: string) => {
  // return getJobs(apiUrl);
  return axios.get<ResponseDTO<JobDTO[]>>(`${apiUrl}/api/job-history`);
};
