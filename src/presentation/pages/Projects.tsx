import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/domain/entities/Project';
import { ProjectService } from '@/domain/services/ProjectService';
import { ProjectRepositoryImpl } from '@/infrastructure/repositories/ProjectRepositoryImpl';
import { ProjectCard } from '@/presentation/components/ProjectCard';
import { Sparkles, Code2 } from 'lucide-react';

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      const repository = new ProjectRepositoryImpl();
      const service = new ProjectService(repository);
      const data = await service.getAllProjects();
      setProjects(data);
      setLoading(false);
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent mx-auto mb-4" />
          <p className="text-cyan-400">Carregando projetos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
            <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Meus Projetos
              </span>
            </h1>
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4">
            Explore os projetos que desenvolvi, cada um representando soluções inovadoras e tecnologias modernas
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

