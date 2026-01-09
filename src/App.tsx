import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/presentation/components/Navigation';
import { Home } from '@/presentation/pages/Home';
import { Projects } from '@/presentation/pages/Projects';
import { About } from '@/presentation/pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

