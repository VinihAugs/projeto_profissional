import { motion } from 'framer-motion';
import { Linkedin, Instagram, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/presentation/components/ui/Button';
import { Link } from 'react-router-dom';

export function Home() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/viniciusaugusto3006/',
      icon: Linkedin,
      color: 'hover:text-blue-400',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/viniciusaugst_/',
      icon: Instagram,
      color: 'hover:text-pink-400',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5511942166646',
      icon: MessageCircle,
      color: 'hover:text-green-400',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 sm:gap-3"
              >
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400 animate-pulse" />
                <span className="text-sm sm:text-base text-cyan-400 font-semibold">Desenvolvedor Front-End</span>
              </motion.div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Eleve seu negócio
                </span>
                <br />
                <span className="text-white">com um time de</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  qualidade
                </span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed"
            >
              Olá, sou <strong className="text-cyan-400">Vinicius Augusto</strong>, desenvolvedor{' '}
              <strong className="text-cyan-400">Front-End especializado em React e TypeScript</strong> com mais de 4 anos de experiência.
              Desenvolvo aplicações escaláveis utilizando <strong className="text-cyan-400">React, Next.js, React Native</strong> e{' '}
              <strong className="text-cyan-400">metodologias ágeis</strong>, com foco em código limpo, arquitetura sólida e experiência do usuário.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              {['React', 'Next.js', 'TypeScript', 'React Native', 'Redux', 'Tailwind', 'Material UI', 'Node.js', 'MongoDB'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-cyan-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-cyan-300 ring-1 ring-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link to="/projects" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all"
                >
                  Ver Projetos
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              
              <Link to="/about" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500"
                >
                  Sobre Mim
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="space-y-3"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-cyan-400">Acesse minhas redes:</h2>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-center sm:justify-start gap-2 rounded-lg border border-cyan-500/20 bg-slate-800/50 px-4 py-3 text-sm sm:text-base text-slate-300 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 ${social.color}`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl" />
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-2xl border border-cyan-500/20 bg-slate-800/50 p-3 sm:p-4 backdrop-blur-sm"
              >
                <img
                  src="/assets/eu.png"
                  alt="Vinicius Augusto"
                  className="w-full rounded-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

