import { JobDTO, ResponseDTO } from '@cv-portfolio/data';
import axios from 'axios';

export const getJobHistory = () => {
  return axios.get<ResponseDTO<JobDTO[]>>('/api/job-history');
};
