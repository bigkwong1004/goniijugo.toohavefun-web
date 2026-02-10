import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, Palette, Users, Phone, Mail, MapPin,
  Award, Heart,
  Menu, X, ExternalLink
} from 'lucide-react';

// --- 1. 데이터 자산 (Data Assets) ---
const COMPANY_INFO = {
  name: "주식회사 투해펀",
  engName: "Toohavefun Co., Ltd.",
  address: "세종특별자치시 한누리대로 194 세종의 아침 126호",
  phone: "010-5768-7800",
  email: "goniijugo@gmail.com",
  cert: "사회적기업 (제2023-336호)"
};

const HISTORY = [
  {
    year: "2026", events: [
      "01. 청양지사 설립"
    ]
  },
  {
    year: "2025", events: [
      "11. 종촌예술제 '예술로 잇다' 총괄 기획",
      "10. 금남면 제5회 용포천 등불축제 주관",
      "09. 세종시 갤러리 가는날 '천년의 빛' 전시",
      "06. 종촌동 주민총회 및 풀뿌리마을장터 운영",
      "04. 시민 건강 프로젝트 '달빛 건강 체조' 기획"
    ]
  },
  {
    year: "2024", events: [
      "12. 가재골 배움터 성과공유회 전시 연출",
      "11. 종촌동 주민자치발표회 총괄 기획",
      "06. 시민 참여형 '나도 아티스트' 프로그램 운영",
      "04. 소셜캠퍼스온 입주 예술가 기획전 개최"
    ]
  },
  {
    year: "2023", events: [
      "12. 고용노동부 인증 사회적기업 지정 (제2023-336호)",
      "10. 한글날 특별전시 '모두의 이응' 기획",
      "08. 유휴공간 활용 프로젝트 '공실미술관: 타샤의 정원'"
    ]
  },
  {
    year: "2020-2022", events: [
      "2022.12 지역예술가 아카이빙 '시차화랑'",
      "2021.05 세종시 로컬크리에이터 선정",
      "2020.05 법인 설립 및 밴가드1아트센터 개관"
    ]
  }
];

const PRESS_RELEASES = [
  {
    id: 1,
    date: "2023.10",
    media: "대전인터넷신문",
    title: "제5회 용포천 등불축제, 마을의 어울림 한마당",
    desc: "주민이 직접 꾸민 참여형 축제. 공동체 문화 확산의 장이 된 금남면의 대표 가을 축제 현장입니다.",
    tag: "축제기획",
    link: "https://www.daejeonpress.co.kr/news/66491",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    date: "2023.09",
    media: "경향신문",
    title: "세종시 종촌동 '빈 상가에 미술관 꾸미니 사람들이 오네요'",
    desc: "상가 공실 문제를 예술로 해결한 '종촌동 공실미술관'. 지역 상권에 활력을 불어넣는 새로운 시도입니다.",
    tag: "공간재생",
    link: "https://www.khan.co.kr/article/202309251534001",
    img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    date: "2023.08",
    media: "더세종포커스",
    title: "“미술을 경험하는 공간으로 초대합니다” 노광호 대표",
    desc: "일상 속 예술의 진가를 전하는 투해펀의 비전. 지역 작가와 시민을 잇는 문화사업의 가치를 조명합니다.",
    tag: "인터뷰",
    link: "https://www.tsjfocus.co.kr/news/articleView.html?idxno=2472",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop"
  }
];

const SOCIAL_VALUES = [
  {
    icon: <Users className="w-8 h-8 text-amber-500" />,
    title: "주민 주도형 문화",
    desc: "관 주도가 아닌, 주민이 직접 기획하고 참여하는 '풀뿌리 문화 자치'를 실현합니다."
  },
  {
    icon: <Palette className="w-8 h-8 text-amber-500" />,
    title: "예술가 일자리 창출",
    desc: "청년 작가와 경력 단절 예술인들에게 지속 가능한 창작 활동의 기회를 제공합니다."
  },
  {
    icon: <Heart className="w-8 h-8 text-amber-500" />,
    title: "문화 소외계층 포용",
    desc: "찾아가는 전시와 교육을 통해 누구나 평등하게 예술을 누리는 세상을 만듭니다."
  }
];

// --- 2. 컴포넌트 (Components) ---

const BrandLogo = ({ className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      {/* Left 'T' shape */}
      <rect x="25" y="40" width="12" height="40" rx="6" fill="#00AEEF" />
      <rect x="15" y="30" width="32" height="12" rx="6" fill="#00A651" className="mix-blend-multiply opacity-80" />

      {/* Right 'F' hook shape */}
      <rect x="55" y="30" width="12" height="50" rx="6" fill="#ED1C24" />
      <rect x="55" y="30" width="30" height="12" rx="6" fill="#EC008C" className="mix-blend-multiply opacity-80" />

      {/* Orange Dot */}
      <circle cx="85" cy="55" r="8" fill="#F7941D" />
    </svg>
    <div className="text-xl md:text-2xl font-bold tracking-tighter text-white">
      TOOHAVE<span className="text-amber-500">FUN</span>
    </div>
  </div>
);

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-20 px-6 md:px-12 ${className}`}>
    {children}
  </section>
);

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

// --- 3. 메인 앱 (Main App) ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617] text-white font-sans selection:bg-amber-900/30 selection:text-amber-200">

      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-white"><BrandLogo /></a>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            {['회사소개', '사회적가치', '사업영역', '언론보도', '연혁', '문의하기'].map((item) => {
              const id = item === '회사소개' ? 'about' : item === '사회적가치' ? 'social' : item === '사업영역' ? 'business' : item === '언론보도' ? 'press' : item === '연혁' ? 'history' : 'contact';
              return (
                <a key={item} href={`#${id}`} className="hover:text-amber-500 transition relative group text-slate-300">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
                </a>
              );
            })}
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <nav className="flex flex-col p-6 space-y-4 text-slate-300 bg-slate-900">
                {['about', 'social', 'business', 'press', 'history', 'contact'].map((item) => (
                  <a key={item} href={`#${item}`} onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-amber-400 border-b border-slate-800 uppercase text-slate-300">
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section className="relative h-screen flex items-center justify-center bg-[#020617] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/80 to-[#020617] z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-20 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-white/5 text-slate-300 text-sm font-medium border border-white/10 backdrop-blur-md">
                <Award size={16} className="text-amber-500" /> {COMPANY_INFO.cert}
              </span>
            </div>
            <h2 className="text-4xl md:text-8xl font-black text-white mb-8 leading-[1.2] md:leading-[1.1] tracking-tighter break-keep">
              문화를 <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">잇고</span>, <br className="md:hidden" />
              가치를 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">빚다</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              투해펀은 예술가의 상상력과 지역 주민의 삶을 연결하여<br className="hidden md:block" />
              지속 가능한 문화 예술 생태계를 만들어가는 사회적 기업입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#business" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 px-8 rounded-full transition transform hover:scale-105 shadow-lg shadow-amber-500/25">
                사업영역 보기
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-4 px-8 rounded-full backdrop-blur-sm transition border border-white/30">
                문의하기
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Values */}
      <Section id="social" className="bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#020617] -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h3 className="text-sm font-bold text-amber-500 tracking-[0.3em] uppercase mb-4 text-center">Our Mission</h3>
              <h2 className="text-3xl md:text-5xl font-black text-white text-center tracking-tighter break-keep">투해펀이 만드는 사회적 가치</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-transparent mx-auto mt-8"></div>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-10">
            {SOCIAL_VALUES.map((val, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-[#111] hover:bg-[#1a1a1a] rounded-3xl p-0 overflow-hidden border border-white/5 transition-all duration-500 h-full flex flex-col group">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={idx === 0 ? "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" :
                        idx === 1 ? "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" :
                          "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"}
                      alt={val.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-amber-500/10 group-hover:bg-transparent transition duration-700"></div>
                  </div>
                  <div className="p-8">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg text-amber-500 mb-6 group-hover:scale-110 transition -mt-16 relative z-10 border border-slate-100">
                      {val.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{val.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Business Areas */}
      <Section id="business" className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <FadeIn>
              <h3 className="text-amber-500 font-bold tracking-widest mb-2">BUSINESS AREA</h3>
              <h2 className="text-4xl font-bold leading-snug">
                상상을 현실로 만드는<br />투해펀의 솔루션
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-slate-400 text-lg leading-relaxed">
                우리는 단순한 행사를 넘어 지역의 고유한 이야기를 발굴하고,
                트렌디한 기획력을 더해 사람들의 발길이 머무는 명소를 만듭니다.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "주민자치 & 축제", d: "마을축제 / 주민총회 / 지역특화 행사", i: <Users />, img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop" },
              { t: "전시 & 공간기획", d: "공실미술관 / 갤러리 운영 / 팝업스토어", i: <Palette />, img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1000&auto=format&fit=crop" },
              { t: "문화예술교육", d: "지역특화 교육 / 선진지 견학 / 아트투어", i: <Building2 />, img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop" },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="group bg-[#111]/50 hover:bg-[#1a1a1a] p-0 rounded-3xl border border-white/5 transition-all duration-500 overflow-hidden h-full flex flex-col backdrop-blur-sm">
                  <div className="h-48 overflow-hidden">
                    <img src={item.img} alt={item.t} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700" />
                  </div>
                  <div className="p-8">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition">
                      {item.i}
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-white break-keep">{item.t}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed break-all">{item.d}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Press Release */}
      <Section id="press" className="bg-transparent relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] to-slate-900 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div>
                <h3 className="text-sm font-bold text-amber-500 tracking-[0.3em] uppercase mb-4">Press Release</h3>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">언론 속의 투해펀</h2>
              </div>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {PRESS_RELEASES.map((news, idx) => (
              <FadeIn key={news.id} delay={idx * 0.1}>
                <a
                  key={news.id}
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group cursor-pointer border border-slate-800 h-full flex flex-col"
                >
                  <div className="h-48 overflow-hidden relative shrink-0">
                    <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition duration-700"></div>
                    <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {news.tag}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4 text-xs tracking-widest text-slate-500 uppercase">
                      <span className="font-bold text-amber-500">{news.media}</span>
                      <span>{news.date}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-amber-400 transition leading-snug break-keep">
                      {news.title}
                    </h4>
                    <p className="text-slate-300 text-base line-clamp-3 mb-6 flex-grow leading-relaxed break-keep">
                      {news.desc}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-amber-500/80 group-hover:text-amber-400 transition">
                      자세히 보기 <ExternalLink size={16} className="ml-2" />
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* History */}
      <Section id="history" className="bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-[#020617] -z-10"></div>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-20 text-center tracking-tighter">걸어온 길</h2>
          </FadeIn>
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-[20px] md:left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-500/50 via-slate-800 to-transparent"></div>

            <div className="space-y-12">
              {HISTORY.map((yearGroup, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="relative pl-12 md:pl-20 group">
                    {/* Year Marker */}
                    <div className="absolute left-0 top-0 w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#020617] border-2 border-amber-500 rounded-2xl flex items-center justify-center z-10 -translate-x-1/2 md:translate-x-[-50%] group-hover:scale-110 transition shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                      <span className="text-amber-500 font-black text-sm md:text-base">{yearGroup.year.substring(2)}</span>
                    </div>

                    <div className="bg-[#111]/40 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-amber-500/30 transition-all duration-500">
                      <h3 className="text-3xl font-black text-white mb-8 tracking-tighter flex items-center gap-4 break-keep">
                        {yearGroup.year} <span className="text-amber-500/20 text-5xl">/</span>
                      </h3>
                      <div className="space-y-6">
                        {yearGroup.events.map((event, eventIdx) => (
                          <div key={eventIdx} className="flex items-start gap-5 group/item">
                            <div className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 shrink-0 group-hover/item:scale-150 transition shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
                            <p className="text-slate-200 leading-relaxed text-lg md:text-xl font-medium group-hover/item:text-white transition break-keep">{event}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <BrandLogo className="text-white mb-8 scale-100 origin-left" />
              <h2 className="text-3xl font-bold mb-6 leading-snug text-white">
                상상이 현실이 되는 곳,<br />
                투해펀과 함께하세요.
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                프로젝트의 시작부터 끝까지,<br />
                가장 든든한 파트너가 되어드리겠습니다.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
              <h3 className="text-xl font-bold mb-6 text-white border-b border-slate-700 pb-4">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-amber-500 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Office</p>
                    <p className="text-lg font-medium text-white">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-amber-500 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Phone</p>
                    <p className="text-lg font-bold text-white">{COMPANY_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-amber-500 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email</p>
                    <p className="text-lg font-medium text-white">{COMPANY_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.engName} All rights reserved.</p>
            <nav className="flex gap-6">
              <span className="hover:text-slate-300 cursor-pointer transition">개인정보처리방침</span>
              <span className="hover:text-slate-300 cursor-pointer transition">이용약관</span>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
