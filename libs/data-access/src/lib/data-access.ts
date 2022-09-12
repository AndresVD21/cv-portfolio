import axios from 'axios';
import {
  FbJobDto,
  JobDTO,
  LanguageDTO,
  ResponseDTO,
  SkillDTO,
} from '@cv-portfolio/data';
import { mapJobs } from '../mappers/mapJobs';

export const getSkills = (firebaseUrl: string) =>
  axios
    .get(`${firebaseUrl}/getSkills`)
    .then((res) => {
      const response: ResponseDTO<SkillDTO[]> = {
        data: res.data,
      };
      return response;
    })
    .catch((err) => {
      const error: ResponseDTO<SkillDTO[]> = {
        error: err,
      };
      return error;
    });

export const getLanguages = (firebaseUrl: string) =>
  axios
    .get(`${firebaseUrl}/getLanguages`)
    .then((res) => {
      const response: ResponseDTO<LanguageDTO[]> = {
        data: res.data,
      };
      return response;
    })
    .catch((err) => {
      const error: ResponseDTO<LanguageDTO[]> = {
        error: err,
      };
      return error;
    });

export const getJobs = (firebaseUrl: string) =>
  axios
    .get<FbJobDto[]>(`${firebaseUrl}/getJobs`)
    .then((res) => {
      console.log(res.data);
      const response: ResponseDTO<JobDTO[]> = {
        data: mapJobs(res.data),
      };
      return response;
    })
    .catch((err) => {
      const error: ResponseDTO<JobDTO[]> = {
        error: err,
      };
      return error;
    });
