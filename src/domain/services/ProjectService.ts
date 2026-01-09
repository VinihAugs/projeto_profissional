import { Project } from '../entities/Project';
import { ProjectRepository } from '../repositories/ProjectRepository';

export class ProjectService {
  constructor(private repository: ProjectRepository) {}

  async getAllProjects(): Promise<Project[]> {
    return this.repository.getAll();
  }

  async getProjectById(id: string): Promise<Project | null> {
    return this.repository.getById(id);
  }
}

