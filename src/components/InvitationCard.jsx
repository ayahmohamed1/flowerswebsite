import { useEffect } from 'react'
import config from '../config'
import Reveal from './Reveal'

export default function InvitationCard() {
  const imagePath = config.event?.image || '/assets/card.png';
  const goldColor = "#B1935C";
  const paleGoldColor = "#F3E5AB";
  const offWhiteColor = "#FDFBF7";

  // حماية زر الرجوع (Back Button) لمنع الخروج من الموقع بالخطأ
  useEffect(() => {
    // إضافة حالة وهمية لتاريخ المتصفح عند ظهور الكارت
    window.history.pushState({ page: 'invitation' }, '', window.location.href);

    const handlePopState = (event) => {
      // منع الخروج وإعادة حقن الحالة لجعل زر الرجوع "ممتصاً" داخل السيت
      window.history.pushState({ page: 'invitation' }, '', window.location.href);
      
      // اختيارياً: يمكنك التمرير لأعلى الصفحة بسلاسة بدلاً من الخروج
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const fallingHearts = [
    { id: 1, left: '5%', size: 'w-6 h-6', duration: '15s', delay: '0s' },
    { id: 2, left: '15%', size: 'w-4 h-4', duration: '12s', delay: '2s' },
    { id: 3, left: '25%', size: 'w-7 h-7', duration: '18s', delay: '4s' },
    { id: 4, left: '35%', size: 'w-5 h-5', duration: '14s', delay: '1s' },
    { id: 5, left: '45%', size: 'w-8 h-8', duration: '20s', delay: '5s' },
    { id: 6, left: '55%', size: 'w-4 h-4', duration: '16s', delay: '3s' },
    { id: 7, left: '65%', size: 'w-6 h-6', duration: '19s', delay: '0.5s' },
    { id: 8, left: '75%', size: 'w-5 h-5', duration: '13s', delay: '6s' },
    { id: 9, left: '85%', size: 'w-8 h-8', duration: '22s', delay: '2.5s' },
    { id: 10, left: '95%', size: 'w-4 h-4', duration: '15s', delay: '7s' },
    { id: 11, left: '10%', size: 'w-7 h-7', duration: '17s', delay: '8s' },
    { id: 12, left: '80%', size: 'w-5 h-5', duration: '21s', delay: '9s' },
  ];

  return (
    <section 
      className="relative flex justify-center overflow-hidden px-6 py-24 sm:py-32"
      style={{ backgroundColor: '#E1D0C9 !important' }}
    >
      
      <style>{`
        @keyframes falling {
          0% { top: -10%; transform: translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.9; }
          50% { transform: translateX(20px) rotate(180deg); }
          90% { opacity: 0.9; }
          100% { top: 110%; transform: translateX(-20px) rotate(360deg); opacity: 0; }
        }
        .animate-fall {
          position: absolute;
          animation-name: falling;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      {/* خلفية زخرفية */}
      <div className="absolute inset-0 z-0 opacity-[0.10] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="cardFloralPatternForced" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M20,10 C25,5 35,5 40,10 C45,5 55,5 60,10" stroke={goldColor} strokeWidth="1" fill="none" />
            <circle cx="20" cy="5" r="2" fill={paleGoldColor} />
            <path d="M60,40 C65,35 75,35 80,40 C85,35 95,35 100,40" stroke={goldColor} strokeWidth="1" fill="none" />
            <circle cx="60" cy="35" r="2" fill={paleGoldColor} />
            <path d="M10,60 C15,55 25,55 30,60 C35,55 45,55 50,60" stroke={goldColor} strokeWidth="1" fill="none" />
            <circle cx="10" cy="55" r="2" fill={paleGoldColor} />
             <path d="M70,90 C75,85 85,85 90,90 C95,85 105,85 110,90" stroke={goldColor} strokeWidth="1" fill="none" />
            <circle cx="70" cy="85" r="2" fill={paleGoldColor} />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cardFloralPatternForced)" />
        </svg>
      </div>

      {/* القلوب المتساقطة */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {fallingHearts.map((heart) => (
          <svg
            key={heart.id}
            className={`animate-fall ${heart.size}`}
            style={{
              left: heart.left,
              animationDuration: heart.duration,
              animationDelay: heart.delay,
            }}
            viewBox="0 0 24 24"
            fill="none"
            stroke={offWhiteColor}
            strokeWidth="1"
          >
            <path
              d="M12 4.435C10.011 1.93 6.541 1.93 4.542 4.435C2.544 6.94 2.544 11.391 4.542 13.896L12 21.609L19.458 13.896C21.456 11.391 21.456 6.94 19.458 4.435C17.459 1.93 13.989 1.93 12 4.435Z"
              fill={offWhiteColor}
              fillOpacity="0.75"
            />
          </svg>
        ))}
      </div>

      {/* تأثيرات الإضاءة */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-1/4 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 translate-x-1/2 rounded-full bg-white/30 blur-3xl" />
      </div>

      <Reveal className="relative mx-auto w-full max-w-lg text-center flex flex-col items-center z-20">
        
        {/* عناصر SVG الديكورية */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <svg viewBox="0 0 100 100" className="absolute left-0 top-0 h-24 w-24 opacity-60">
            <path d="M10,20 C15,10 25,10 30,20 C35,10 45,10 50,20" stroke={goldColor} strokeWidth="1.5" fill="none"/>
            <path d="M15,25 C20,15 30,15 35,25 C40,15 50,15 55,25" stroke={goldColor} strokeWidth="1.5" fill="none"/>
            <path d="M20,30 C25,20 35,20 40,30 C45,20 55,20 60,30" stroke={goldColor} strokeWidth="1.5" fill="none"/>
            <circle cx="20" cy="15" r="3" fill={paleGoldColor}/>
            <circle cx="35" cy="15" r="2.5" fill={paleGoldColor}/>
            <circle cx="50" cy="15" r="2" fill={paleGoldColor}/>
          </svg>
          <svg viewBox="0 0 100 100" className="absolute right-0 top-0 h-16 w-16 opacity-50">
            <path d="M80,10 C85,5 95,5 100,10" stroke={goldColor} strokeWidth="1.2" fill="none"/>
            <path d="M85,15 C90,10 100,10 105,15" stroke={goldColor} strokeWidth="1.2" fill="none"/>
            <path d="M90,20 C95,15 105,15 110,20" stroke={goldColor} strokeWidth="1.2" fill="none"/>
            <path d="M75,20 L85,25 L80,30" stroke={goldColor} strokeWidth="1.2" fill="none"/>
          </svg>
          <svg viewBox="0 0 100 100" className="absolute right-0 bottom-0 h-20 w-20 opacity-60">
            <path d="M70,80 C75,70 85,70 90,80" stroke={goldColor} strokeWidth="1.5" fill="none"/>
            <path d="M75,85 C80,75 90,75 95,85" stroke={goldColor} strokeWidth="1.5" fill="none"/>
            <path d="M80,90 C85,80 95,80 100,90" stroke={goldColor} strokeWidth="1.5" fill="none"/>
            <circle cx="85" cy="75" r="3" fill={paleGoldColor}/>
            <circle cx="95" cy="75" r="2.5" fill={paleGoldColor}/>
          </svg>
        </div>

        {/* حاوية الصورة */}
        <div 
          className="relative overflow-hidden rounded-xl p-1.5 shadow-2xl z-10"
          style={{
            border: `1px solid ${goldColor}50`,
            backgroundImage: `linear-gradient(135deg, ${goldColor} 0%, ${paleGoldColor} 50%, ${goldColor} 100%)`
          }}
        >
          <div className="rounded-lg p-1" style={{ backgroundColor: '#E1D0C9' }}>
            <img 
              src={imagePath} 
              alt="Wedding Invitation" 
              className="w-full h-auto object-contain rounded-md" 
            />
          </div>
        </div>

        {/* حقل اسم الضيف */}
        <div className="mt-12 w-full max-w-sm z-20">
          <input
            type="text"
            placeholder="guest name" 
            className="w-full rounded-full border px-6 py-3 text-center text-sm tracking-[0.1em] text-gold-ink transition-all duration-300 focus:outline-none focus:ring-2 border-[#B1935C] placeholder:text-[#B1935C]/70 focus:ring-[#B1935C]/50 bg-white/40 shadow-inner"
            style={{
              fontFamily: 'serif',
              backgroundColor: '#E1D0C9',
            }}
          />
          <div className="mt-2 h-px w-24 mx-auto" style={{ backgroundColor: `${goldColor}80` }}></div>
        </div>

      </Reveal>
    </section>
  )
}