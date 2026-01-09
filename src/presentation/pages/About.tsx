import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Code, CheckCircle2, Languages, Brain } from 'lucide-react';

export function About() {
  const experiences = [
    {
      title: 'Desenvolvedor Full Stack',
      description: 'Desenvolvimento de aplicações web completas utilizando React, Next.js, Node.js, TypeScript, MongoDB e PostgreSQL. Implementação de APIs RESTful e GraphQL, arquitetura de microsserviços, integração com serviços cloud e desenvolvimento de soluções escaláveis com foco em performance e experiência do usuário',
      icon: Briefcase,
    },
    {
      title: 'Desenvolvedor Front-End',
      description: 'Especializado em desenvolvimento de interfaces modernas e responsivas utilizando React, Next.js, TypeScript, Redux, Context API, Tailwind CSS, Material UI e Styled Components. Experiência em componentização avançada, design systems, testes unitários, otimização de performance e metodologias ágeis (Scrum/Kanban)',
      icon: Code,
    },
    {
      title: 'Analista de Sistemas',
      description: 'Desenvolvimento em Visual Basic for Applications (VBA), Automação Web com Selenium, Suporte e Banco de Dados (SQL)',
      icon: Briefcase,
    },
    {
      title: 'Analista de Qualidade (QA)',
      description: 'QA, Testes de APIs, Homologação, Soluções de Captura, Controle de Qualidade, Scrum, Metodologia Ágil, Analista de Sistema, Atendimento Interno, Desenvolvimento em Java',
      icon: Award,
    },
  ];

  const certifications = [
    'Git / Github',
    'IA for Devs',
    'MongoDB',
    'Fullstack Developer',
    'Marketing Strategy Fundamentals',
    'Scrum Fundamentals Certified',
    'Cloud Computing',
    'Introdução a Testes de Software',
  ];

  const frontendTech = [
    'React', 'React Native', 'Next.js', 'TypeScript', 'Redux',
    'Context API', 'HTML5', 'CSS3', 'ES6', 'Sass',
    'Tailwind', 'Nativewind', 'Material UI', 'Styled Components',
  ];

  const backendTech = [
    'Node.js', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'GraphQL',
    'Java', 'Python', 'SQL', 'VBA',
  ];

  const tools = [
    'Git', 'Github', 'Jira', 'Confluence', 'Postman',
    'Swagger', 'VSCode', 'Selenium', 'Gherkin',
    'DataDOG', 'Salesforce', 'MuleSoft', 'PowerBI',
  ];

  const softSkills = [
    'Trabalho em equipe',
    'Liderança',
    'Pensamento criativo',
    'Resolução de problemas',
    'Comprometimento',
    'Autogestão',
  ];

  const languages = [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Básico/Intermediário' },
    { name: 'Espanhol', level: 'Básico' },
    { name: 'Italiano', level: 'Básico' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4">
            Conheça minha jornada profissional e experiência em tecnologia
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-cyan-500/20 bg-slate-800/50 p-6 sm:p-8 backdrop-blur-sm"
          >
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Olá, me chamo <strong className="text-cyan-400">Vinicius Augusto</strong>, desenvolvedor Front-End especializado em{' '}
              <strong className="text-cyan-400">React e TypeScript</strong> com mais de 4 anos de experiência na criação de interfaces web escaláveis e de alta performance.
              Experiência comprovada no desenvolvimento de aplicações completas utilizando React, Next.js, Context API, Redux, Sass e Material UI,
              com sólida experiência em consumo de APIs RESTful e GraphQL. Já desenvolvi soluções automatizadas que otimizaram processos internos,
              trabalhando com componentização avançada, testes unitários, design responsivo e metodologias ágeis (Scrum/Kanban).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 flex items-center gap-2 sm:gap-3">
              <Briefcase className="h-6 w-6 sm:h-8 sm:w-8" />
              Experiências Profissionais
            </h2>
            <div className="grid gap-4 sm:gap-6">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.2 }}
                    className="group rounded-xl border border-cyan-500/20 bg-slate-800/50 p-4 sm:p-6 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-slate-800/70"
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                      <div className="rounded-lg bg-cyan-500/20 p-2 sm:p-3 flex-shrink-0">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">{exp.title}</h3>
                        <p className="text-sm sm:text-base text-slate-300">{exp.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="rounded-xl border border-cyan-500/20 bg-slate-800/50 p-6 backdrop-blur-sm"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8" />
              Formação Acadêmica
            </h2>
            <div className="space-y-3">
              <p className="text-base sm:text-lg text-slate-300">
                Formado em tecnólogo de{' '}
                <strong className="text-cyan-400">Análise e Desenvolvimento de Sistemas</strong> na{' '}
                <strong className="text-cyan-400">FATEC São Paulo</strong> (2020-2025), onde adquiri conhecimentos sólidos 
                nas melhores práticas e metodologias de desenvolvimento de software, preparando-me para atuar como desenvolvedor 
                front-end com foco em soluções inovadoras e de alta qualidade.
              </p>
              <div className="pt-3 border-t border-slate-700/50">
                <p className="text-sm sm:text-base text-slate-400 mb-2 font-semibold">Habilidades adquiridas no curso:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Algoritmos e Lógica de Programação',
                    'Programação Orientada a Objetos',
                    'Estruturas de Dados',
                    'Banco de Dados (SQL e NoSQL)',
                    'Engenharia de Software',
                    'Sistemas Operacionais',
                    'Redes de Computadores',
                    'Arquitetura e Organização de Computadores',
                    'Interação Humano Computador',
                    'Segurança da Informação',
                    'Sistemas Distribuídos',
                    'Gestão de Projetos',
                    'Metodologias Ágeis (Scrum)',
                    'Desenvolvimento Web',
                    'Programação Linear e Aplicações',
                    'Estatística Aplicada',
                    'Matemática Discreta',
                    'Auditoria de Sistemas',
                    'Inteligência Artificial',
                    'Gestão e Governança de TI',
                  ].map((area) => (
                    <span
                      key={area}
                      className="rounded-md bg-slate-700/30 px-3 py-1 text-xs sm:text-sm text-slate-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="rounded-xl border border-cyan-500/20 bg-slate-800/50 p-6 backdrop-blur-sm"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <Award className="h-6 w-6 sm:h-8 sm:w-8" />
              Certificações
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-sm sm:text-base text-slate-300">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="rounded-xl border border-cyan-500/20 bg-slate-800/50 p-6 backdrop-blur-sm"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <Code className="h-6 w-6 sm:h-8 sm:w-8" />
              Tecnologias e Ferramentas
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-3">Front-End</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {frontendTech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-cyan-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-cyan-300 ring-1 ring-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-3">Back-End & Banco de Dados</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {backendTech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-blue-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-blue-300 ring-1 ring-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-3">Ferramentas & Testes</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg bg-purple-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-purple-300 ring-1 ring-purple-500/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="rounded-xl border border-cyan-500/20 bg-slate-800/50 p-6 backdrop-blur-sm"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <Brain className="h-6 w-6 sm:h-8 sm:w-8" />
              Habilidades Comportamentais
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {softSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-sm sm:text-base text-slate-300">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="rounded-xl border border-cyan-500/20 bg-slate-800/50 p-6 backdrop-blur-sm"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <Languages className="h-6 w-6 sm:h-8 sm:w-8" />
              Idiomas
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
                  <span className="text-sm sm:text-base font-medium text-slate-200">{lang.name}</span>
                  <span className="text-xs sm:text-sm text-cyan-400">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 backdrop-blur-sm"
          >
            <p className="text-base sm:text-lg text-slate-200 text-center">
              Sou apaixonado por <strong className="text-cyan-400">tecnologia, inovação e qualidade</strong>, 
              e busco sempre me aprimorar e me atualizar nas minhas áreas de interesse.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

