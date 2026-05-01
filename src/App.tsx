import { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import { PersonaGuide } from './components/PersonaGuide';
import { CategoryScores } from './types/quiz';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'quiz' | 'results' | 'guide'>('home');
  const [userScores, setUserScores] = useState<CategoryScores | null>(null);

  const handleStartQuiz = () => {
    setUserScores(null);
    setCurrentTab('quiz');
  };

  const handleFinishQuiz = (scores: CategoryScores) => {
    setUserScores(scores);
    setCurrentTab('results');
  };

  const handleGoHome = () => {
    setCurrentTab('home');
  };

  const handleGoGuide = () => {
    setCurrentTab('guide');
  };

  const handleRetakeQuiz = () => {
    setUserScores(null);
    setCurrentTab('quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-zinc-50 flex flex-col antialiased text-slate-800">
      <Header
        onGoHome={handleGoHome}
        onGoGuide={handleGoGuide}
        currentTab={currentTab}
      />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-8">
        {currentTab === 'home' && (
          <Home onStartQuiz={handleStartQuiz} onGoGuide={handleGoGuide} />
        )}

        {currentTab === 'quiz' && (
          <Quiz onFinishQuiz={handleFinishQuiz} onAbortQuiz={handleGoHome} />
        )}

        {currentTab === 'results' && userScores && (
          <Results scores={userScores} onRetake={handleRetakeQuiz} />
        )}

        {currentTab === 'guide' && <PersonaGuide />}
      </main>

      <footer className="border-t border-slate-100 bg-white/60 backdrop-blur py-8 mt-12 text-center text-slate-400 text-xs font-medium">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 TechMatch. Todos os direitos reservados para Software Houses inovadoras.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <span className="hover:text-indigo-600 cursor-pointer select-none" onClick={handleGoHome}>Início</span>
            <span>•</span>
            <span className="hover:text-indigo-600 cursor-pointer select-none" onClick={handleGoGuide}>Guia de Perfis</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
