import { Project } from '@/domain/entities/Project';
import { ProjectRepository } from '@/domain/repositories/ProjectRepository';

export class ProjectRepositoryImpl implements ProjectRepository {
  private projects: Project[] = [
    {
      id: '1',
      title: 'CineVision AI',
      description: 'Plataforma de análise e recomendação de filmes usando inteligência artificial',
      url: 'https://cinevision-ai.vercel.app',
      technologies: ['React', 'AI', 'TypeScript'],
      category: 'ai',
    },
    {
      id: '2',
      title: 'Grimório',
      description: 'Sistema de gerenciamento e organização de conhecimento',
      url: 'https://grimorio.onrender.com',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      category: 'web',
    },
    {
      id: '3',
      title: 'Node.js Educativo',
      description: 'Guia completo e interativo para desenvolvedores aprenderem Node.js',
      url: 'https://nodeprojectstudy.vercel.app',
      technologies: ['Node.js', 'Express', 'MongoDB/PostgreSQL'],
      category: 'web',
    },
    {
      id: '4',
      title: 'Calamidade',
      description: 'Aplicação web moderna com recursos avançados',
      url: 'https://calamidade.vercel.app',
      technologies: ['React', 'TypeScript', 'Vite'],
      category: 'web',
    },
  ];

  async getAll(): Promise<Project[]> {
    return Promise.resolve(this.projects);
  }

  async getById(id: string): Promise<Project | null> {
    const project = this.projects.find((p) => p.id === id);
    return Promise.resolve(project || null);
  }
}

