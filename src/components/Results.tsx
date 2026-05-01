import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Award, CheckCircle, Flame, RefreshCcw, Sparkles } from 'lucide-react';
import { CategoryScores, CategoryKey } from '../types/quiz';
import { personas, categories } from '../data/quizData';

interface ResultsProps {
  scores: CategoryScores;
  onRetake: () => void;
}

export const Results: React.FC<ResultsProps> = ({ scores, onRetake }) => {
  // Determine matched persona
  const matchedPersona = useMemo(() => {
    let maxCategory: CategoryKey = 'frontend';
    let maxScore = -1;

    Object.entries(scores).forEach(([key, val]) => {
      if (val > maxScore) {
        maxScore = val;
        maxCategory = key as CategoryKey;
      }
    });

    return personas.find((p) => p.category === maxCategory) || personas[0];
  }, [scores]);

  // Format chart data for Recharts Pie Chart
  const chartData = useMemo(() => {
    return categories.map((cat) => {
      const pointValue = scores[cat.key];
      return {
        name: cat.label,
        value: pointValue,
        color: cat.color
      };
    }).filter(item => item.value > 0); // Exclude items with 0 points for a cleaner chart
  }, [scores]);

  // Calculate total points
  const totalPoints = useMemo(() => {
    return Object.values(scores).reduce((acc, curr) => acc + curr, 0);
  }, [scores]);

  return (
    <div className="space-y-12 py-6">
      {/* Success Hero Badge */}
      <div className="bg-gradient-to-br from-emerald-50 via-slate-50 to-indigo-50/40 rounded-3xl p-6 sm:p-12 border border-emerald-100/40 relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-200/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-200/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-emerald-200">
                <CheckCircle className="w-4 h-4" />
                <span>Diagnóstico Concluído</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight pt-1">
                Seu perfil de maior afinidade: <span className="text-indigo-600 block sm:inline">{matchedPersona.title}</span>
              </h1>
              <p className="text-slate-500 text-sm font-medium">
                Atribuição sugerida: <span className="text-slate-700 font-bold">{matchedPersona.idealRole}</span>
              </p>
            </div>

            <button
              onClick={onRetake}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm shadow-sm hover:shadow transition cursor-pointer select-none self-start"
            >
              <RefreshCcw className="w-4 h-4" />
              <span>Refazer Teste</span>
            </button>
          </div>

          {/* Description matched persona */}
          <div className="bg-white/80 backdrop-blur p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2 text-indigo-600 font-extrabold text-sm uppercase tracking-wider select-none">
                <Sparkles className="w-5 h-5 fill-indigo-100" />
                <span>Visão do Perfil</span>
              </div>
              <p className="text-slate-600 text-base leading-relaxed">
                {matchedPersona.description}
              </p>

              <div className="pt-2 space-y-2">
                <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span>Traços que definem sua atuação:</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-1">
                  {matchedPersona.traits.map((trait, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                      <span className="text-indigo-500 font-bold select-none">•</span>
                      <span>{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Core skills */}
            <div className="bg-slate-50/60 p-5 rounded-xl border border-slate-100 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                  Principais Skills:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {matchedPersona.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-2.5 py-1.5 rounded-lg shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200/60 pt-3 mt-4 flex items-center justify-between text-xs font-medium text-slate-400">
                <span>Algoritmo TechMatch</span>
                <span>v1.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Visual Chart - Pie Chart requested by user */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center space-y-6 h-full min-h-[420px]">
          <div className="text-center space-y-1 w-full">
            <h3 className="text-lg font-bold text-slate-800 tracking-tight">Habilidades em cada eixo</h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Distribuição percentual das suas respostas acumuladas por categoria
            </p>
          </div>

          <div className="w-full flex-grow h-[280px]">
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="45%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.96)',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                    itemStyle={{ fontSize: '13px', fontWeight: '600' }}
                    formatter={(val: any) => [`${val} pts`, 'Pontos']}
                  />
                  <Legend
                    verticalAlign="bottom"
                    iconType="circle"
                    iconSize={8}
                    formatter={(value) => <span className="text-xs font-bold text-slate-600 tracking-tight">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-slate-400 text-sm">
                Nenhum ponto acumulado.
              </div>
            )}
          </div>
        </div>

        {/* Categories Point Breakdown */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5 flex flex-col h-full min-h-[420px]">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-800 tracking-tight flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600" />
              <span>Desempenho por Categoria</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Sua pontuação final detalhada nos 6 eixos principais
            </p>
          </div>

          <div className="space-y-4 flex-grow overflow-y-auto">
            {categories.map((cat) => {
              const scoreValue = scores[cat.key];
              const scorePercentage = totalPoints > 0 ? (scoreValue / totalPoints) * 100 : 0;

              return (
                <div key={cat.key} className="space-y-1.5">
                  <div className="flex justify-between items-center text-sm font-bold text-slate-700">
                    <span className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: cat.color }}
                      />
                      {cat.label}
                    </span>
                    <span className="text-slate-600 flex items-center gap-1.5">
                      <span className="text-indigo-600 font-extrabold">{scoreValue} pts</span>
                      <span className="text-slate-400 font-normal text-xs">({scorePercentage.toFixed(1)}%)</span>
                    </span>
                  </div>

                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200/20">
                    <div
                      className="h-full rounded-full transition-all duration-500 ease-out"
                      style={{
                        backgroundColor: cat.color,
                        width: `${Math.min(100, (scoreValue / 15) * 100)}%`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Total de Pontos Conquistados</span>
            <span className="text-indigo-600 text-sm font-extrabold">{totalPoints} pts</span>
          </div>
        </div>
      </div>
    </div>
  );
};
