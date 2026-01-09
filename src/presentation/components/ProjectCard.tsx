import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { Project } from '@/domain/entities/Project';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Card className="group relative h-full overflow-hidden border-cyan-500/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 transition-all duration-300 group-hover:from-cyan-500/10 group-hover:via-cyan-500/5 group-hover:to-cyan-500/10" />
        
        <CardHeader className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0" />
              <CardTitle className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl truncate">
                {project.title}
              </CardTitle>
            </div>
            <span className="rounded-full bg-cyan-500/20 px-2 sm:px-3 py-1 text-xs font-semibold text-cyan-400 whitespace-nowrap">
              {project.category.toUpperCase()}
            </span>
          </div>
          <CardDescription className="text-sm sm:text-base text-slate-300 mt-2 sm:mt-3">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-cyan-500/10 px-2 sm:px-3 py-1 text-xs font-medium text-cyan-300 ring-1 ring-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-4 sm:p-6 pt-0">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn w-full"
          >
            <Button
              variant="outline"
              className="group/btn w-full border-cyan-500/30 bg-slate-800/50 text-cyan-400 transition-all hover:border-cyan-500 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] text-sm sm:text-base"
            >
              <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:rotate-12" />
              Visitar Projeto
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

