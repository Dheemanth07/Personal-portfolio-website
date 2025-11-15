
export interface PersonalDetails {
    dateOfBirth: string;
    gender: string;
    nationality: string;
    languagesKnown: string[];
}

export interface ResumeData {
  name: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
  personalDetails: PersonalDetails;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  skills: SkillsData;
  certifications: CertificationEntry[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface ProjectEntry {
  title: string;
  technologies: string;
  period: string;
  description: string[];
}

export interface SkillsData {
  languages: string;
  frameworks: string;
  developerTools: string;
  libraries: string;
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  year: number;
}
