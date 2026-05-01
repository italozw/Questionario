import React from 'react';
import { Play, Code, Database, Shield, Briefcase, TrendingUp, Compass, CheckCircle } from 'lucide-react';
import { categories } from '../data/quizData';

interface HomeProps {
  onStartQuiz: () => void;
  onGoGuide: () => void;
}

export const Home: React.FC<HomeProps> = ({ onStartQuiz, onGoGuide }) => {
  return (
    <div className="space-y-12 py-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-slate-50 to-blue-50/50 rounded-3xl p-6 sm:p-12 border border-indigo-100/50 relative overflow-hidden shadow-sm">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-1.5 bg-indigo-100 text-indigo-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase select-none">
            Diagnóstico Profissional para Software House
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Descubra o seu perfil ideal na área de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Tecnologia e Negócios</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            Responda a 15 questões práticas sobre o dia a dia de uma Software House. 
            Nosso algoritmo avaliará suas competências e revelará em qual persona (Frontend, Backend, Vendas, Marketing, Gestão ou Infra) você mais se destaca.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onStartQuiz}
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-base font-bold px-8 py-4 rounded-xl shadow-lg shadow-indigo-100 hover:shadow-indigo-200 transition-all cursor-pointer select-none"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>Iniciar Diagnóstico</span>
            </button>
            <button
              onClick={onGoGuide}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-base font-semibold px-8 py-4 rounded-xl transition cursor-pointer select-none"
            >
              <Compass className="w-5 h-5" />
              <span>Ver Perfis Avaliados</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 pt-4 border-t border-slate-200/60 max-w-xl text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>15 Questões assertivas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Resultado Imediato</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Cards */}
      <div className="space-y-6">
        <div className="text-center sm:text-left space-y-1">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Eixos de Habilidades Avaliados</h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl">
            Nosso questionário testa suas habilidades nestes 6 eixos que compõem uma Software House de sucesso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={cat.key}
              className="group bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-105 shadow-sm"
                  style={{ backgroundColor: cat.color }}
                >
                  {idx === 0 && <Code className="w-6 h-6" />}
                  {idx === 1 && <Database className="w-6 h-6" />}
                  {idx === 2 && <Shield className="w-6 h-6" />}
                  {idx === 3 && <Briefcase className="w-6 h-6" />}
                  {idx === 4 && <TrendingUp className="w-6 h-6" />}
                  {idx === 5 && <Compass className="w-6 h-6" />}
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                    {cat.label}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-auto">
                <div className="text-xs font-semibold text-slate-400 select-none">
                  Eixo #0{idx + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
