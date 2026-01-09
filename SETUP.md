# 🚀 Guia de Instalação

## Passos para executar o projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Executar em modo desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### 3. Build para produção

```bash
npm run build
```

### 4. Preview da build

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
projeto_profissional/
├── src/
│   ├── domain/              # Camada de domínio (Clean Architecture)
│   │   ├── entities/        # Entidades
│   │   ├── repositories/   # Interfaces
│   │   └── services/        # Serviços de negócio
│   ├── infrastructure/      # Camada de infraestrutura
│   │   └── repositories/    # Implementações
│   ├── presentation/        # Camada de apresentação
│   │   ├── components/      # Componentes React
│   │   ├── pages/           # Páginas
│   │   └── utils/           # Utilitários
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globais
├── public/
│   └── assets/              # Imagens e assets
└── package.json
```

## ✨ Funcionalidades

- ✅ Design futurístico com glassmorphism
- ✅ Animações suaves com Framer Motion
- ✅ Responsivo para todos os dispositivos
- ✅ Clean Architecture e SOLID
- ✅ TypeScript para type safety
- ✅ Página de projetos com links para seus sites
- ✅ Navegação moderna e interativa

## 🎨 Tecnologias Utilizadas

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React (ícones)

## 📝 Notas

- Os assets (imagens) devem estar na pasta `public/assets/`
- O projeto já está configurado com path aliases (`@/`)
- Todos os componentes seguem os princípios SOLID

