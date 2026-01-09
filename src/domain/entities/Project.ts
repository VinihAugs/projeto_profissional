export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  technologies: string[];
  image?: string;
  category: 'web' | 'ai' | 'api' | 'other';
}

