
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, SKILL_CATEGORIES, ACHIEVEMENTS, EDUCATION, EMAIL, GITHUB_URL, LINKEDIN_URL } from '../constants';
import { Shield, Cpu, Activity, ExternalLink, Trophy, Quote, MessageCircle } from 'lucide-react';
import CloudBubbles from './CloudBubbles';

interface UIOverlayProps {
  activeBlock: number;
  onNavigate: (index: number) => void;
}

const UIOverlay: React.FC<UIOverlayProps> = ({ activeBlock, onNavigate }) => {
  const stats = [
    { label: 'Projects Completed', value: '7+', icon: <Cpu size={16} /> },
    { label: 'Years Experience in AI', value: '1+', icon: <Activity size={16} /> },
    { label: 'Technologies Mastered', value: '10+', icon: <Shield size={16} /> },
    { label: 'Hackathons Won', value: '3+', icon: <Trophy size={16} /> },
  ];

  const navItems = ['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'ACHIEVEMENTS', 'CONTACT'];

  return (
    <>
      {/* Floating Chat Bubble */}
      <div className="fixed bottom-10 right-10 z-50 pointer-events-auto cursor-pointer group">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl transition-all"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold">Hi! How can we help?</span>
          <MessageCircle size={14} className="ml-2" />
        </motion.div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-10 flex print:hidden">
        {/* Straight Vertical Navigation */}
        <div className="hidden md:flex flex-col justify-center p-12 pointer-events-auto h-full w-48 lg:w-56 items-start gap-12">
          {navItems.map((label, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(idx)}
              className="group flex items-center gap-6 focus:outline-none w-full text-left"
            >
              <motion.div 
                className={`h-1.5 rounded-full transition-all duration-500 ${activeBlock === idx ? 'bg-[#00ff88] w-12 shadow-[0_0_20px_#00ff88]' : 'bg-zinc-800 w-6 group-hover:bg-zinc-600 group-hover:w-8'}`}
                animate={activeBlock === idx ? { scaleX: [1, 1.2, 1] } : {}}
              />
              <span className={`text-[11px] font-mono tracking-[0.2em] uppercase transition-all duration-300 ${activeBlock === idx ? 'text-[#00ff88] translate-x-2 font-bold' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                {label}
              </span>
            </button>
          ))}
        </div>

        <div className="flex-1 flex flex-col relative h-full">
          {/* Header */}
          <div className="p-10 flex justify-between items-start pointer-events-auto">
            <div className="font-mono">
              <h1 className="text-2xl font-black text-[#00ff88] tracking-tighter">HARSHIT.SYSTEM</h1>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest"></p>
            </div>
          </div>

          <div className="flex-1 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {activeBlock === 0 && (
                <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col p-10 justify-between">
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <CloudBubbles />
                    <motion.h2 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-7xl md:text-[10rem] font-black tracking-tighter text-white z-10 mb-4 leading-none">
                      HARSHIT BHATIA<span className="text-[#00ff88]">.</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-[#00ff88] text-sm md:text-xl uppercase tracking-[0.4em] font-bold italic mb-12">
                      Bridging the AI-Human Digital Divide
                    </motion.p>
                  </div>

                  <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 pointer-events-auto">
                    {stats.map((stat, i) => (
                      <div key={i} className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center text-center border border-white/5">
                        <div className="text-[#00ff88] mb-2">{stat.icon}</div>
                        <div className="text-3xl font-black text-white">{stat.value}</div>
                        <div className="text-[9px] text-zinc-500 uppercase font-mono tracking-widest mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              )}

              {activeBlock === 1 && SectionContainer("Identity", (
                <div className="max-w-6xl w-full flex flex-col gap-12">
                  <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="w-72 h-96 shrink-0 glass-panel p-2 rounded-2xl relative group overflow-hidden border border-white/5">
                      <img src="/public/images/Harshit.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 rounded-xl" alt="Profile" />
                    </div>
                    <div className="flex-1 space-y-8">
                       <h3 className="text-4xl font-bold tracking-tighter leading-tight italic">
                         "Building <span className="text-[#00ff88]">autonomous protocols</span> that integrate seamlessly into human workflows."
                       </h3>
                       <p className="text-zinc-400 text-lg leading-relaxed border-l-2 border-zinc-800 pl-8">
                         I am a pre-final B.Tech Computer Engineering student at Amity University Punjab. My research focus lies in Vision-based AI systems and NLP frameworks that solve real-world accessibility and safety problems.
                       </p>
                       <div className="glass-panel p-6 rounded-2xl border border-white/5">
                          <p className="text-[#00ff88] text-[10px] font-mono uppercase tracking-[0.3em] mb-4">Education Timeline</p>
                          <div className="space-y-4">
                            <div className="flex justify-between items-start">
                               <div>
                                 <p className="text-white font-bold">{EDUCATION[0].degree}</p>
                                 <p className="text-zinc-500 text-xs">{EDUCATION[0].institution}</p>
                               </div>
                               <p className="text-[10px] font-mono text-zinc-600">{EDUCATION[0].duration}</p>
                            </div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              ))}

              {activeBlock === 2 && SectionContainer("Skills", (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pointer-events-auto">
                  {SKILL_CATEGORIES.map((cat, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-panel p-8 rounded-2xl border border-white/5 group hover:border-[#00ff88]/30 transition-all bg-black/40"
                    >
                      <h3 className="text-[#00ff88] text-[10px] font-mono uppercase tracking-[0.4em] mb-6 border-b border-[#00ff88]/10 pb-4">{cat.title}</h3>
                      <div className="flex flex-wrap gap-3">
                        {cat.skills.map((skill, j) => (
                          <span key={j} className="px-3 py-1.5 bg-zinc-900/50 rounded-lg text-zinc-300 text-[11px] font-bold border border-white/5 group-hover:border-[#00ff88]/20 transition-all shadow-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}

              {activeBlock === 3 && SectionContainer("Projects", (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20 pointer-events-auto">
                  {PROJECTS.map((proj, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel rounded-2xl overflow-hidden group border border-white/5 flex flex-col min-h-[450px] bg-black/40 hover:bg-black/60 transition-all">
                      {proj.image && (
                        <div className="h-48 overflow-hidden relative">
                          <img src={proj.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt={proj.title} />
                          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold text-[#00ff88] uppercase tracking-widest">{proj.type}</div>
                        </div>
                      )}
                      <div className="p-8 flex flex-col flex-1 justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-4">
                             <h3 className="text-xl font-bold text-white group-hover:text-[#00ff88] transition-colors">{proj.title}</h3>
                             {!proj.image && <span className="bg-[#00ff88]/10 border border-[#00ff88]/20 px-2 py-1 rounded text-[8px] font-bold text-[#00ff88] uppercase tracking-widest">{proj.type}</span>}
                          </div>
                          <p className="text-xs text-zinc-500 font-mono leading-relaxed mb-6">{proj.description}</p>
                        </div>
                        <div>
                          <div className="flex flex-wrap gap-2 mb-8">
                            {proj.stack.map((s, j) => <span key={j} className="text-[8px] bg-zinc-900 px-2 py-1 rounded text-zinc-400 uppercase border border-white/5">#{s}</span>)}
                          </div>
                          <a href={proj.link} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 py-3 bg-zinc-100 text-black text-[10px] font-black uppercase tracking-widest hover:bg-[#00ff88] transition-all rounded-lg">
                            <ExternalLink size={14} /> View Repository
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}

              {activeBlock === 4 && SectionContainer("Achievements", (
                <div className="w-full flex flex-col gap-10 pb-20 pointer-events-auto">
                  {ACHIEVEMENTS.map((ach, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }} 
                      animate={{ opacity: 1, x: 0 }}
                      className="glass-panel p-10 rounded-2xl flex flex-col md:flex-row gap-10 items-start md:items-center bg-black/40 border border-white/5 relative overflow-hidden group"
                    >
                       <div className="shrink-0">
                          <div className="w-16 h-16 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center text-[#00ff88] group-hover:bg-[#00ff88] group-hover:text-black transition-all">
                             <Trophy size={24} />
                          </div>
                       </div>
                       
                       <div className="flex-1 space-y-4">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                             <div>
                                <h3 className="font-serif-mag text-3xl italic tracking-tighter text-white">{ach.title}</h3>
                                <p className="text-[#00ff88] text-[10px] font-mono uppercase tracking-[0.2em]">{ach.position}</p>
                             </div>
                             {ach.prize && (
                               <div className="bg-white text-black px-4 py-2 rounded-lg font-black text-xs uppercase tracking-widest self-start md:self-center">
                                  {ach.prize}
                               </div>
                             )}
                          </div>
                          <p className="text-zinc-500 font-serif italic text-sm md:text-base leading-relaxed max-w-3xl">
                             "{ach.details}"
                          </p>
                       </div>
                       
                       <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                          <Quote size={80} className="text-white" />
                       </div>
                    </motion.div>
                  ))}
                </div>
              ))}

              {activeBlock === 5 && (
                <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex items-center justify-center p-10 pointer-events-auto">
                  <div className="max-w-2xl w-full glass-panel p-12 md:p-16 text-center rounded-3xl relative border border-white/5">
                    <CloudBubbles />
                    <h2 className="text-6xl font-black mb-10 tracking-tighter uppercase text-white leading-none">Transmission</h2>
                    <p className="text-zinc-500 font-mono text-sm mb-12 max-w-md mx-auto">Available for high-stakes AI collaborations and system engineering roles.</p>
                    <div className="flex flex-col gap-5">
                       <a href={`mailto:${EMAIL}`} className="p-6 bg-white text-black font-black uppercase tracking-[0.3em] hover:bg-[#00ff88] transition-all text-xs rounded-xl shadow-2xl">
                          {EMAIL}
                       </a>
                       <div className="grid grid-cols-2 gap-4">
                          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="p-5 glass-panel text-white font-bold hover:bg-white hover:text-black transition-all uppercase tracking-widest text-[10px] rounded-xl border border-white/5">GitHub</a>
                          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="p-5 glass-panel text-white font-bold hover:bg-white hover:text-black transition-all uppercase tracking-widest text-[10px] rounded-xl border border-white/5">LinkedIn</a>
                       </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

function SectionContainer(title: string, children: React.ReactNode) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}
      className="absolute inset-0 flex flex-col p-8 md:p-24 pointer-events-none"
    >
      <div className="max-w-7xl w-full flex flex-col pointer-events-auto relative h-full">
        {/* Section Title Header */}
        <div className="flex items-center gap-4 mb-10 opacity-30 select-none shrink-0">
           <div className="h-[1px] w-20 bg-zinc-500" />
           <span className="text-[10px] uppercase font-mono tracking-[1em]">{title}</span>
        </div>
        
        {/* Scrollable Area - Visible Scrollbar Enabled */}
        <div className="flex-1 overflow-y-auto custom-h-scroll pr-8 pb-32 pointer-events-auto">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export default UIOverlay;
