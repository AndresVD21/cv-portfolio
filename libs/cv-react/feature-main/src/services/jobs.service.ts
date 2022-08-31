import { JobDTO, ResponseDTO } from '@cv-portfolio/data';
import axios from 'axios';

export const getJobHistory = (apiUrl: string) => {
  return axios.get<ResponseDTO<JobDTO[]>>(`${apiUrl}/api/job-history`);
};
