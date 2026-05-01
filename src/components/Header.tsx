import React from 'react';
import { Sparkles, Terminal } from 'lucide-react';

interface HeaderProps {
  onGoHome: () => void;
  onGoGuide: () => void;
  currentTab: 'home' | 'quiz' | 'results' | 'guide';
}

export const Header: React.FC<HeaderProps> = ({ onGoHome, onGoGuide, currentTab }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <button
          onClick={onGoHome}
          className="flex items-center space-x-2 text-indigo-600 font-bold text-xl hover:opacity-80 transition cursor-pointer"
        >
          <Terminal className="w-7 h-7 text-indigo-600" />
          <span className="tracking-tight select-none">
            TechMatch <span className="font-light text-slate-500 text-sm hidden sm:inline">| Avaliação de Perfil</span>
          </span>
        </button>

        <nav className="flex items-center space-x-1 sm:space-x-3">
          <button
            onClick={onGoHome}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all cursor-pointer ${
              currentTab === 'home'
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Início
          </button>
          <button
            onClick={onGoGuide}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all cursor-pointer flex items-center space-x-1 ${
              currentTab === 'guide'
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-4 h-4 hidden sm:inline" />
            <span>Guia de Perfis</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
