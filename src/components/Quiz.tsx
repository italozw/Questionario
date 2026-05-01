import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, CornerDownRight } from 'lucide-react';
import { questions } from '../data/quizData';
import { CategoryScores } from '../types/quiz';

interface QuizProps {
  onFinishQuiz: (scores: CategoryScores) => void;
  onAbortQuiz: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ onFinishQuiz, onAbortQuiz }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSelectOption = (questionId: number, choiceId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: choiceId
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const calculateFinalScores = () => {
    // Initialize base scores
    const finalScores: CategoryScores = {
      frontend: 0,
      backend: 0,
      infraSupport: 0,
      salesBiz: 0,
      marketingSEO: 0,
      productAgile: 0
    };

    // Aggregate point modifiers for all answered questions
    Object.entries(selectedAnswers).forEach(([qId, choiceId]) => {
      const q = questions.find((item) => item.id === Number(qId));
      if (q) {
        const choice = q.choices.find((c) => c.id === choiceId);
        if (choice && choice.scores) {
          Object.entries(choice.scores).forEach(([catKey, value]) => {
            if (value) {
              finalScores[catKey as keyof CategoryScores] += value;
            }
          });
        }
      }
    });

    onFinishQuiz(finalScores);
  };

  // Check if current question has an answer
  const isCurrentAnswered = !!selectedAnswers[currentQuestion.id];

  return (
    <div className="max-w-3xl mx-auto py-6 sm:py-10 space-y-8">
      {/* Quiz Progress Top Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
              Diagnóstico em Andamento
            </span>
            <span className="text-xs bg-indigo-50 text-indigo-600 font-semibold px-2.5 py-0.5 rounded-full border border-indigo-100">
              Questão {currentIndex + 1} de {questions.length}
            </span>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm">
            Selecione a resposta que mais se aproxima do seu dia a dia ou pensamento.
          </p>
        </div>

        {/* Action button to cancel/exit */}
        <button
          onClick={onAbortQuiz}
          className="text-slate-400 hover:text-slate-600 text-sm font-medium self-end sm:self-auto cursor-pointer"
        >
          Voltar ao início
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200/30">
        <div
          className="bg-gradient-to-r from-indigo-500 to-blue-500 h-full transition-all duration-300 ease-out"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-indigo-500 font-bold text-sm">
            <ChevronRight className="w-5 h-5" />
            <span>Contexto e Situação Prática</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight leading-snug">
            {currentQuestion.title}
          </h2>
        </div>

        {/* Options List */}
        <div className="space-y-3.5 pt-2">
          {currentQuestion.choices.map((choice) => {
            const isSelected = selectedAnswers[currentQuestion.id] === choice.id;

            return (
              <button
                key={choice.id}
                onClick={() => handleSelectOption(currentQuestion.id, choice.id)}
                className={`w-full text-left p-4 sm:p-5 rounded-xl border flex items-start gap-4 cursor-pointer transition-all ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/40 text-indigo-900 ring-4 ring-indigo-50'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div
                  className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-600 text-white scale-110'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {isSelected ? (
                    <CheckCircle2 className="w-4 h-4 fill-current text-white animate-pulse" />
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-transparent" />
                  )}
                </div>

                <div className="flex-grow space-y-1">
                  <div className={`text-base font-medium transition-colors ${
                    isSelected ? 'text-indigo-900 font-bold' : 'text-slate-800'
                  }`}>
                    {choice.text}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer select-none"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>

        {!isLastQuestion ? (
          <button
            onClick={handleNext}
            disabled={!isCurrentAnswered}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-extrabold text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-100 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer select-none"
          >
            <span>Próxima</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={calculateFinalScores}
            disabled={!isCurrentAnswered}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-extrabold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-100 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer select-none"
          >
            <CornerDownRight className="w-4 h-4" />
            <span>Ver Resultado</span>
          </button>
        )}
      </div>
    </div>
  );
};
