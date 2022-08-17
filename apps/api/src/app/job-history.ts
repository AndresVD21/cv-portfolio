import { Job } from '@cv-portfolio/data';
import { Express } from 'express';
import { mapJobs } from './mappers/jobMapper';

const jobs: Job[] = [
  new Job(
    'Mid Angular Developer',
    'Gorilla Logic',
    'Medellin',
    new Date(2021, 6, 12),
    true,
    [
      'Using angular 10+ and working with Sass preprocesor.',
      'Use redux pattern to manage state of the application.',
      'Use Spectator and Cypress to implement unit and e2e test cases.',
    ]
  ),
  new Job(
    'Web UI Developer',
    'Globant',
    'Medellin',
    new Date(2018, 9, 15),
    false,
    [
      'Head of the UI team in many applications for one of the Big Four accounting organizations',
      'Taking part in decisions and giving directly advice to the client about the UI of the project and estimating the effort of the tasks.',
      'Using angular 2+ and worked with LESS preprocesor.',
      'Talk to the client about the benefits of keeping applications up-to-date and successfully updated an application from version 2 to 8.',
      'Implementing redux pattern with NGRX for the state management of the applications.',
    ],
    new Date(2021, 6, 12)
  ),
];

export function jobHistory(app: Express) {
  app.get('/api/job-history', (req, resp) => resp.send(mapJobs(jobs)));
}
