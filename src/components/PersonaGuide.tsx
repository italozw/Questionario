import React from 'react';
import { personas } from '../data/quizData';
import { ShieldCheck, Award, Target, Star } from 'lucide-react';

export const PersonaGuide: React.FC = () => {
  return (
    <div className="space-y-12 py-6">
      <div className="max-w-3xl space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Guia de Perfis da Software House
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
          Conheça cada um dos perfis profissionais mapeados pelo nosso algoritmo e entenda suas atribuições típicas no ecossistema de desenvolvimento de software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {personas.map((persona) => (
          <div
            key={persona.id}
            className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all space-y-6"
          >
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-xs font-semibold select-none border border-indigo-100">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Perfil</span>
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
                    {persona.title}
                  </h2>
                </div>
                <div className="text-right sm:text-right hidden sm:block">
                  <span className="text-xs text-slate-400 font-medium">Atribuição Principal</span>
                  <div className="text-indigo-600 font-bold text-sm">{persona.idealRole}</div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed border-b border-slate-100 pb-4">
                {persona.description}
              </p>

              {/* Attributes and characteristics */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Target className="w-4 h-4 text-indigo-500" />
                    <span>Características Marcantes:</span>
                  </h4>
                  <ul className="space-y-1.5 text-slate-600 text-sm pl-2">
                    {persona.traits.map((trait, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold flex-shrink-0">•</span>
                        <span>{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Award className="w-4 h-4 text-indigo-500" />
                    <span>Competências Técnicas:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {persona.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs font-semibold bg-slate-100 text-slate-700 px-2.5 py-1.5 rounded-lg border border-slate-200/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100/80 pt-4 flex items-center justify-between text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Perfil Ativo</span>
              </span>
              <span>{persona.idealRole}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
