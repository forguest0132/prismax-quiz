'use client';

import React, { useState, useRef } from 'react';
import { ALL_QUESTIONS, Question } from '@/data/questions';
import { toPng } from 'html-to-image';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Download, 
  Share2, 
  RefreshCw, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  ArrowRight,
  Upload,
  User,
  Award,
  Check
} from 'lucide-react';

export default function PrismaXQuizApp() {
  const [gameState, setGameState] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [userName, setUserName] = useState('');
  const [avatar, setAvatar] = useState<string | null>(null);
  
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const startQuiz = () => {
    if (!userName.trim()) return alert('Please enter your username!');

    const uniqueCategories = Array.from(new Set(ALL_QUESTIONS.map(q => q.category)));
    const pickedCategories = [...uniqueCategories].sort(() => 0.5 - Math.random()).slice(0, 8);

    const selectedQuestions: Question[] = [];
    pickedCategories.forEach(category => {
      const categoryQuestions = ALL_QUESTIONS.filter(q => q.category === category);
      const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
      selectedQuestions.push(categoryQuestions[randomIndex]);
    });

    const finalShuffledQuestions = [...selectedQuestions].sort(() => 0.5 - Math.random());

    setQuizQuestions(finalShuffledQuestions);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswers([]);
    setIsAnswerSubmitted(false);
    setGameState('quiz');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleOption = (index: number) => {
    if (isAnswerSubmitted) return;
    const currentQ = quizQuestions[currentIndex];
    const isMulti = currentQ.isMultiple || currentQ.correctAnswers.length > 1;

    if (isMulti) {
      if (selectedAnswers.includes(index)) {
        setSelectedAnswers(selectedAnswers.filter(i => i !== index));
      } else {
        setSelectedAnswers([...selectedAnswers, index]);
      }
    } else {
      setSelectedAnswers([index]);
    }
  };

  const submitCurrentAnswer = () => {
    if (selectedAnswers.length === 0) return;
    setIsAnswerSubmitted(true);
    const currentQ = quizQuestions[currentIndex];
    
    const isCorrect = 
      currentQ.correctAnswers.length === selectedAnswers.length &&
      currentQ.correctAnswers.every(ans => selectedAnswers.includes(ans));

    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < 7) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswers([]);
      setIsAnswerSubmitted(false);
    } else {
      setGameState('result');
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  };

  const getRankData = () => {
    if (score >= 8) return { rank: 'FOUNDING VALIDATOR', badge: 'THE FIRST 100', note: 'Flawless Physical AI Consensus Accuracy ⚡' };
    if (score >= 6) return { rank: 'TRUSTED VALIDATOR', badge: 'VLA SPECIALIST', note: 'Consensus Quality Master 🔥' };
    if (score >= 4) return { rank: 'CORE CONTRIBUTOR', badge: 'INNOVATOR TIER', note: 'Strong grasp of Physical AI Standards' };
    return { rank: 'AI EXPLORER', badge: 'AMPLIFIER', note: 'Ecosystem Learner & Trainee' };
  };

  const downloadPhotocard = async () => {
    if (!cardRef.current) return;
    setIsDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, { 
        cacheBust: true, 
        pixelRatio: 3,
        quality: 1
      });
      const link = document.createElement('a');
      link.download = `Prisma-Tango-Pass-${userName.replace(/\s+/g, '_')}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Download failed', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const shareOnX = () => {
    const text = encodeURIComponent(
      `⚡ Just completed the @PrismaX_AI Tango Arena!\n\n🎖️ Accuracy: ${score}/8 (${Math.round((score / 8) * 100)}%)\n🛡️ Role: ${getRankData().rank}\n\nJoin the Prisma Tango Arena! 👇`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  const userAvatarSrc = avatar || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + (userName || 'PrismaX');

  const currentQ = quizQuestions[currentIndex];
  const isCurrentQuestionMulti = currentQ ? (currentQ.isMultiple || currentQ.correctAnswers.length > 1) : false;

  const cleanQuestionText = currentQ 
    ? currentQ.question.replace(/[*★]/g, '').replace(/\s*\(Multiple answers may apply\)/gi, '').trim() 
    : '';

  return (
    <main className="min-h-screen bg-[#ebe4d8] text-[#1c1b18] font-sans flex flex-col items-center justify-center p-3 sm:p-6 relative overflow-hidden selection:bg-[#cbb89d]">
      
      {/* 🤖 GLOBAL BACKGROUND */}
      <div 
        className="fixed inset-0 bg-cover bg-right sm:bg-center pointer-events-none opacity-45 filter sepia-[0.35] contrast-[1.05] z-0"
        style={{ 
          backgroundImage: `url('https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=620,height=324.76190476190476/event-covers/1b/c2d774-897b-4024-8178-081e6a17b07c')` 
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-tr from-[#f1ebe1]/90 via-[#f4eee6]/80 to-[#eae0d2]/75 pointer-events-none z-0" />

      {/* 1. INTRO / REGISTRATION SCREEN */}
      {gameState === 'intro' && (
        <div className="w-full max-w-md bg-[#faf6f0]/90 border border-[#e5ded4] rounded-[28px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(180,165,145,0.25)] z-10 backdrop-blur-xl">
          
          <div className="flex items-center gap-3.5 bg-[#ede6dc]/70 p-3.5 rounded-2xl border border-[#ded5c8] mb-6">
            <div className="w-13 h-13 rounded-full bg-[#e2d8c9] border border-[#d5caa] flex items-center justify-center relative shadow-sm overflow-hidden shrink-0">
              {avatar ? (
                <img 
                  src={avatar} 
                  alt="Preview" 
                  className="w-full h-full rounded-full object-cover" 
                />
              ) : (
                <User className="w-6 h-6 text-[#8a7f71]" />
              )}
              {avatar && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#faf6f0]" />
              )}
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1c1b18] tracking-tight">
                Prisma Tango Arena
              </h3>
              <p className="text-[11px] text-[#786f63] font-mono italic">
                {userName ? `@${userName}` : 'Test Today, Validate Tomorrow'}
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold tracking-tight text-[#1c1b18] mb-1 font-serif">
            Participant Verification
          </h2>
          <p className="text-xs text-[#786f63] mb-6 leading-relaxed">
            Enter the arena and complete the 8-question challenge.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#786f63] font-bold mb-1.5">
                Your Username
              </label>
              <input
                type="text"
                placeholder="e.g. Boysun"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                className="w-full bg-[#f4eee5] border border-[#dcd3c4] rounded-xl px-4 py-3 text-sm text-[#1c1b18] placeholder:italic placeholder:text-[#9e9486] focus:outline-none focus:border-[#bda382] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#786f63] font-bold mb-1.5">
                Avatar Photo
              </label>
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 rounded-full border-2 border-dashed border-[#cbb89d] bg-[#f2ece2] flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                  {avatar ? (
                    <img 
                      src={avatar} 
                      alt="Avatar" 
                      className="w-full h-full rounded-full object-cover" 
                    />
                  ) : (
                    <User className="w-5 h-5 text-[#a09484]" />
                  )}
                </div>
                <label className="flex items-center gap-2 bg-[#ede5d8] hover:bg-[#e4dcce] text-xs font-semibold px-4 py-3 rounded-xl border border-[#d8cfbf] text-[#3d372e] cursor-pointer transition-all">
                  <Upload className="w-4 h-4 text-[#8a7a65]" /> Upload Photo
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              </div>
            </div>

            <button
              onClick={startQuiz}
              className="w-full mt-4 bg-[#c8b398] hover:bg-[#bd9f7e] text-[#1c1b18] font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm transition-all shadow-md active:scale-98 cursor-pointer"
            >
              Enter Tango Arena <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 2. QUIZ SCREEN */}
      {gameState === 'quiz' && quizQuestions.length > 0 && (
        <div className="w-full max-w-xl bg-[#faf6f0]/90 border border-[#e8e2d8] rounded-[32px] p-6 sm:p-9 shadow-[0_25px_60px_rgba(160,140,115,0.22)] z-10 relative overflow-hidden backdrop-blur-2xl">
          
          <div 
            className="absolute -right-10 top-0 bottom-0 w-3/4 bg-contain bg-no-repeat bg-right-top pointer-events-none opacity-20 filter sepia-[0.3]"
            style={{ 
              backgroundImage: `url('https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=620,height=324.76190476190476/event-covers/1b/c2d774-897b-4024-8178-081e6a17b07c')` 
            }}
          />

          <div className="flex items-center justify-between border-b border-[#ece5da] pb-5 mb-5 relative z-10">
            <div className="flex items-center gap-3.5">
              <div className="relative">
                <img 
                  src={userAvatarSrc} 
                  alt={userName} 
                  className="w-13 h-13 rounded-full object-cover border border-[#dfd5c5] shadow-sm" 
                />
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#faf6f0] shadow-[0_0_8px_#10b981]" />
              </div>
              
              <div>
                <h4 className="text-base font-bold tracking-tight text-[#1c1b18] flex items-center gap-1">
                  Prisma Tango Arena
                </h4>
                <div className="text-xs font-mono tracking-wider text-[#736a5e] truncate max-w-[170px] sm:max-w-none">
                  @{userName}
                </div>
              </div>
            </div>

            <div className="text-right font-mono">
              <div className="text-xs font-bold text-[#2b2722]">Q: {currentIndex + 1}/8</div>
              <div className="text-[10px] uppercase text-[#8c8274]">SCORE: {score}</div>
            </div>
          </div>

          <div className="w-full bg-[#e8e0d4] h-2 rounded-full mb-7 overflow-hidden relative z-10">
            <div 
              className="bg-[#bda17e] h-full transition-all duration-300 rounded-full shadow-[0_0_8px_rgba(189,161,126,0.6)]"
              style={{ width: `${((currentIndex + 1) / 8) * 100}%` }}
            />
          </div>

          <div className="mb-6 relative z-10">
            <h3 className="text-xl sm:text-[22px] font-semibold text-[#181613] leading-snug tracking-tight">
              {cleanQuestionText}
            </h3>
            {isCurrentQuestionMulti && (
              <p className="text-xs text-[#8a7b68] font-medium italic mt-1.5 tracking-wide">
                (Multiple answers may apply)
              </p>
            )}
          </div>

          <div className="space-y-3 mb-7 relative z-10">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswers.includes(idx);
              const isCorrectAnswer = currentQ.correctAnswers.includes(idx);
              
              let cardBg = "bg-[#f2ece2]/80 border-[#e4dcd0] text-[#1c1b18] hover:bg-[#ede5d8] hover:border-[#c8b79f]";
              let badgeBg = "bg-[#e5dccf] text-[#4d4438]";

              if (isAnswerSubmitted) {
                if (isCorrectAnswer) {
                  cardBg = "bg-emerald-50/90 border-emerald-500 text-emerald-950 font-medium";
                  badgeBg = "bg-emerald-500 text-white";
                } else if (isSelected && !isCorrectAnswer) {
                  cardBg = "bg-rose-50/90 border-rose-500 text-rose-950 font-medium";
                  badgeBg = "bg-rose-500 text-white";
                } else {
                  cardBg = "bg-[#f2ece2]/40 border-[#e4dcd0]/50 text-[#8c8477] opacity-60";
                  badgeBg = "bg-[#e5dccf]/50 text-[#9c9386]";
                }
              } else if (isSelected) {
                cardBg = "bg-[#e8decfa0] border-[#b99f7d] shadow-sm";
                badgeBg = "bg-[#bda17e] text-white";
              }

              return (
                <button
                  key={idx}
                  onClick={() => toggleOption(idx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between text-sm sm:text-base cursor-pointer ${cardBg}`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`w-8 h-8 ${isCurrentQuestionMulti ? 'rounded-lg' : 'rounded-xl'} flex items-center justify-center text-xs font-bold font-mono transition-colors shrink-0 ${badgeBg}`}>
                      {isCurrentQuestionMulti ? (
                        isSelected ? <Check className="w-4 h-4 stroke-[3]" /> : String.fromCharCode(65 + idx)
                      ) : (
                        String.fromCharCode(65 + idx)
                      )}
                    </span>
                    <span>{option}</span>
                  </div>
                  {isAnswerSubmitted && isCorrectAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="relative z-10">
            {!isAnswerSubmitted ? (
              <button
                onClick={submitCurrentAnswer}
                disabled={selectedAnswers.length === 0}
                className="w-full bg-[#c8b398] hover:bg-[#bda587] disabled:opacity-40 text-[#1a1815] font-bold py-4 rounded-2xl text-sm sm:text-base transition-all shadow-md active:scale-98 cursor-pointer"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="w-full bg-[#201d19] hover:bg-[#322e28] text-[#f7f2ea] font-bold py-4 rounded-2xl text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-lg active:scale-98 cursor-pointer"
              >
                {currentIndex < 7 ? 'Next Question' : 'View Photocard & Results'} <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* 3. FINAL PHOTOCARD SCREEN */}
      {gameState === 'result' && (
        <div className="flex flex-col items-center gap-6 z-10 w-full max-w-md">
          
          <div 
            ref={cardRef}
            className="w-[370px] text-[#1c1813] rounded-[34px] p-7 shadow-[0_25px_60px_rgba(110,88,58,0.3)] border-[3px] border-[#9c8466]/40 relative flex flex-col justify-between overflow-hidden"
            style={{ 
              minHeight: '585px',
              backgroundColor: '#a89274',
              backgroundImage: `
                radial-gradient(at 15% 15%, #c5b297 0px, transparent 65%),
                radial-gradient(at 85% 85%, #876e50 0px, transparent 65%),
                linear-gradient(180deg, #9b8364 0%, #b8a388 45%, #9b8466 100%)
              `
            }}
          >
            <div className="flex justify-between items-center border-b border-[#2e2317]/25 pb-4 relative z-10">
              <div>
                <span className="font-serif text-2xl font-black tracking-tight text-[#221b14]">
                  Prisma<sup className="text-sm font-sans font-normal">(x)</sup>
                </span>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#2c2217] font-mono font-bold">
                  Robotics Network
                </p>
              </div>
              
              <div className="flex items-center gap-1.5 bg-[#231d16] text-[#e6d8c3] text-[10px] font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d8c2a3]" /> VERIFIED
              </div>
            </div>

            <div className="mt-4 mb-5 flex flex-col items-center text-center relative z-10">
              <div className="relative mb-2.5">
                <div className="p-1 rounded-full bg-[#30271e]/15 shadow-md">
                  <img 
                    src={userAvatarSrc} 
                    alt={userName} 
                    className="w-24 h-24 rounded-full object-cover border-3 border-[#241e17]"
                  />
                </div>
                <span className="absolute bottom-0 right-1 bg-[#231d16] text-[#e8dbca] p-1.5 rounded-full text-xs shadow-md border border-[#9b8364]">
                  <Sparkles className="w-3.5 h-3.5 text-[#d8c2a3]" />
                </span>
              </div>
              
              <h2 className="text-2xl font-bold font-serif text-[#1e1710] tracking-tight leading-snug">
                {userName}
              </h2>
              
              <div className="mt-2 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#2a2117]/25 border border-[#2a2117]/35 shadow-sm">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1e1710]">
                  {getRankData().badge}
                </span>
              </div>
            </div>

            <div 
              className="relative z-10 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-white/70 space-y-2.5 overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.50) 50%, rgba(255,255,255,0.32) 100%)'
              }}
            >
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />

              <div className="flex justify-between items-center text-xs relative z-10">
                <span className="text-[#3d2f20] uppercase font-bold text-[10.5px] tracking-wider font-mono">
                  Validation Accuracy
                </span>
                <span className="font-mono font-black text-sm text-[#18130e] tracking-tight">
                  {score} / 8 ({Math.round((score / 8) * 100)}%)
                </span>
              </div>

              <div className="flex justify-between items-center text-xs relative z-10">
                <span className="text-[#3d2f20] uppercase font-bold text-[10.5px] tracking-wider font-mono">
                  Assigned Rank
                </span>
                <span className="font-bold text-xs text-[#1e1710] font-mono tracking-wide px-2.5 py-0.5 rounded-lg bg-white/75 border border-white/80 shadow-sm">
                  {getRankData().rank}
                </span>
              </div>

              <div className="text-[11px] text-center italic text-[#3d3226] font-semibold pt-2 border-t border-[#382d20]/20 font-sans relative z-10">
                "{getRankData().note}"
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-[#2a2015]/30 flex flex-col items-center gap-2 relative z-10">
              <div className="w-full flex justify-between items-center text-[10.5px] text-[#1c150e] font-mono font-bold">
                <span className="tracking-widest flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#1c150e] stroke-[2.5]" /> PHYSICAL AI VALIDATOR
                </span>
                <span className="tracking-wide">app.prismax.ai</span>
              </div>

              <div className="text-[11px] font-serif italic font-semibold text-[#1f170f] tracking-wide">
                Built by Boysun
              </div>
            </div>
          </div>

          <div className="w-full flex items-center gap-2.5">
            <button
              onClick={downloadPhotocard}
              disabled={isDownloading}
              className="flex-1 bg-[#201d19] hover:bg-[#322e28] text-[#f7f2ea] font-bold py-3.5 px-3 rounded-2xl flex items-center justify-center gap-2 text-xs sm:text-sm transition-all shadow-md active:scale-98 cursor-pointer truncate"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span className="truncate">{isDownloading ? 'Generating...' : 'Download'}</span>
            </button>

            <button
              onClick={shareOnX}
              className="flex-1 bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white font-bold py-3.5 px-3 rounded-2xl flex items-center justify-center gap-2 text-xs sm:text-sm transition-all shadow-md active:scale-98 cursor-pointer truncate"
            >
              <Share2 className="w-4 h-4 shrink-0" />
              <span className="truncate">Share on X</span>
            </button>

            <button
              onClick={() => setGameState('intro')}
              className="bg-[#e4dcce] hover:bg-[#d8cebe] border border-[#cdc2b0] text-[#3d362b] font-bold p-3.5 rounded-2xl flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-sm"
              title="Retake Quiz"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}