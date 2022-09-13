interface DateObj {
  month: string;
  year: string;
}
export class JobModel {
  roleName = '';
  company = '';
  location = '';
  dateStart?: DateObj | null;
  dateEnd?: DateObj | null;
  isCurrentJob = false;
  jobFunctions: string[] = [];
}
