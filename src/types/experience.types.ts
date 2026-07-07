export type TRole = {
  title: string;
  startDate: string; // YYYY - MM
  endDate?: string;
  description?: string;
};

export type TExperience = {
  company: string;
  website: string;
  startDate: string;
  endDate?: string;
  technologies: string[];
  roles: TRole[];
};
