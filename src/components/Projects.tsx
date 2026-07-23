import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { Sprout, Store, TrendingUp, Users, CheckSquare, BarChart2, Layers, Eye, Bookmark, Trophy, Star, ArrowUpRight, FileSpreadsheet } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const categories = ['전체', 'AI/서비스 기획', '소상공인/O2O', '마케팅/콘텐츠'];

  const filteredProjects = selectedCategory === '전체'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Sprout': return <Sprout className={className} />;
      case 'Store': return <Store className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      default: return <Sprout className={className} />;
    }
  };

  const renderStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-5 h-5 text-[#ba1a1a]" />;
      case 'CheckSquare': return <CheckSquare className="w-5 h-5 text-[#ba1a1a]" />;
      case 'BarChart2': return <BarChart2 className="w-5 h-5 text-[#ba1a1a]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#ba1a1a]" />;
      case 'Eye': return <Eye className="w-5 h-5 text-[#ba1a1a]" />;
      case 'Bookmark': return <Bookmark className="w-5 h-5 text-[#ba1a1a]" />;
      default: return <BarChart2 className="w-5 h-5 text-[#ba1a1a]" />;
    }
  };

  return (
    <section className="py-24 bg-[#f2f4f6] border-t border-[#c5c6ce]/20" id="projects">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#ba1a1a]/10 text-[#ba1a1a] rounded-full font-label-md text-xs font-bold uppercase tracking-wider mb-4 border border-[#ba1a1a]/20">
            Case Studies & PRD Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-black text-[#041632] tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-[#44474d] text-base md:text-lg leading-relaxed break-keep">
            <span className="inline-block">복잡한 문제를 단순화하고</span> <span className="inline-block">데이터로 증명한 대표 기획 사례들입니다.</span><br />
            <span className="inline-block">각 카드를 클릭하면</span> <span className="inline-block">상세 PRD 요구사항 및</span> <span className="inline-block">사용자 조사 케이스 스터디를 볼 수 있습니다.</span>
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#041632] text-white shadow-md'
                    : 'bg-white text-[#44474d] border border-[#c5c6ce]/30 hover:border-[#ba1a1a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards List in Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredProjects.map((project) => {
            const isDarkCard = project.id === 'youth-content';

            if (isDarkCard) {
              return (
                /* Project 3 - Dark Bento Highlight Card */
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="col-span-1 md:col-span-12 bg-[#041632] rounded-[2rem] overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-xl border border-white/10 group cursor-pointer"
                >
                  <div className="md:w-5/12 bg-[#1b2b48] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-[#ba1a1a]/20 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="text-xs font-black tracking-widest text-[#8393b5] uppercase mb-6 flex items-center gap-2">
                      <BarChart2 className="w-4 h-4 text-[#ba1a1a]" />
                      <span>Quantitative Results</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 my-auto">
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-[#ba1a1a] text-4xl lg:text-5xl font-black mb-1">+34%</p>
                        <p className="text-[#8393b5] text-xs font-bold uppercase tracking-wider">조회수 증가</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-[#ba1a1a] text-4xl lg:text-5xl font-black mb-1">+68%</p>
                        <p className="text-[#8393b5] text-xs font-bold uppercase tracking-wider">저장수 증가</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10 text-xs text-[#8393b5] font-mono">
                      <span>퍼널 최적화 & 타겟 고객군 재정의</span>
                    </div>
                  </div>

                  <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-between text-white">
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <span className="px-3.5 py-1.5 bg-[#ba1a1a] text-white text-xs font-black rounded-full tracking-wider uppercase">
                          {project.roleBadge}
                        </span>
                        <span className="text-[#8393b5] font-mono text-xs font-bold">{project.period}</span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-[#b7c7eb] transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-6 h-6 text-[#ba1a1a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </h3>

                      <p className="text-[#8393b5] text-sm md:text-base mb-8 leading-relaxed font-normal">
                        {project.summary}
                      </p>
                    </div>

                    <div>
                      <div className="pt-6 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
                        <p className="text-[#ba1a1a] font-extrabold text-sm md:text-base flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-[#ba1a1a]" />
                          <span>{project.achievement}</span>
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-xs text-white font-bold bg-white/10 px-4 py-2 rounded-full border border-white/20 group-hover:bg-[#ba1a1a] transition-colors">
                          <FileSpreadsheet className="w-3.5 h-3.5" />
                          <span>PRD & 케이스 스터디 보기</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              /* Project Standard Bento Cards (6 Columns each on medium screens) */
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="col-span-1 md:col-span-6 bg-white rounded-[2rem] overflow-hidden border border-[#eceef0] flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#ba1a1a]/40 group cursor-pointer p-8 md:p-10 shadow-sm"
              >
                <div>
                  {/* Top Role & Date Row */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-3.5 py-1.5 bg-[#041632] text-white text-xs font-black rounded-full tracking-wider uppercase">
                      {project.roleBadge}
                    </span>
                    <span className="text-[#75777e] font-mono text-xs font-bold">{project.period}</span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-4 ${project.bgColor} rounded-2xl shrink-0 group-hover:scale-105 transition-transform`}>
                      {renderIcon(project.iconName, `w-8 h-8 ${project.iconColor}`)}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-[#041632] group-hover:text-[#ba1a1a] transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                      </h3>
                      <p className="text-xs text-[#ba1a1a] font-bold mt-1">{project.category}</p>
                    </div>
                  </div>

                  <p className="text-[#44474d] text-sm md:text-base mb-6 leading-relaxed font-normal">
                    {project.summary}
                  </p>

                  {/* Stats Ribbon */}
                  <div className="grid grid-cols-2 gap-2.5 mb-6">
                    {project.stats.map((st, sIdx) => (
                      <div key={sIdx} className="p-3 bg-[#f2f4f6] rounded-xl border border-[#c5c6ce]/20 flex items-center gap-2.5">
                        {renderStatIcon(st.icon)}
                        <div>
                          <p className="text-[10px] text-[#75777e] font-bold">{st.label}</p>
                          <p className="text-xs font-black text-[#041632]">{st.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Achievement Callout */}
                <div className="pt-5 border-t border-[#eceef0] flex items-center justify-between gap-2">
                  <p className="text-[#ba1a1a] font-black text-xs md:text-sm flex items-center gap-1.5 line-clamp-1">
                    {project.id === 'plant-ai' ? (
                      <Trophy className="w-4 h-4 shrink-0 text-[#ba1a1a]" />
                    ) : (
                      <Star className="w-4 h-4 shrink-0 text-[#ba1a1a]" />
                    )}
                    <span>{project.achievement}</span>
                  </p>

                  <span className="p-2 rounded-full bg-[#f2f4f6] text-[#041632] group-hover:bg-[#ba1a1a] group-hover:text-white transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
