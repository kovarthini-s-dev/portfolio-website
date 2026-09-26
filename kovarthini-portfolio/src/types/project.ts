export interface Project {
  title: string;
  category: "Professional" | "Personal";
  description: string;
  technologies: string[];
  details: string[];
  clients: string[];
  confidential: boolean;
}