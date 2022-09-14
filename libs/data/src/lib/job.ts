export class Job {
  roleName = '';
  company = '';
  location = '';
  dateStart: Date;
  dateEnd?: Date | null;
  isCurrentJob = false;
  jobFunctions: string[] = [];

  constructor(
    roleName: string,
    company: string,
    location: string,
    dateStart: Date,
    isCurrentJob: boolean,
    jobFunctions: string[],
    dateEnd?: Date
  ) {
    (this.roleName = roleName),
      (this.company = company),
      (this.location = location),
      (this.dateStart = dateStart),
      (this.dateEnd = dateEnd),
      (this.isCurrentJob = isCurrentJob),
      (this.jobFunctions = [...jobFunctions]);
  }

  getDateInfo(type: 'start' | 'end'): { month: string; year: string } {
    let month = '';
    let year = '';
    switch (type) {
      case 'start':
        month =
          this.dateStart?.toLocaleString('default', { month: 'short' }) || '';
        year = `${this.dateStart?.getFullYear()}`;
        return {
          month,
          year,
        };
      case 'end':
        month =
          this.dateEnd?.toLocaleString('default', { month: 'short' }) || '';
        year = `${this.dateEnd?.getFullYear()}`;
        return {
          month,
          year,
        };
    }
  }
}
