import { JobDTO } from '@cv-portfolio/data';
import axios from 'axios';

export const getJobHistory = () => {
  return axios.get<JobDTO[]>('/api/job-history');
};
