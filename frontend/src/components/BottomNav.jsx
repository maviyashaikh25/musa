import React from 'react';

export default function BottomNav({ activeScreen, setActiveScreen, t }) {
  const navItems = [
    { id: 'home', label: t.home, icon: 'home' },
    { id: 'my-reports', label: t.myReports, icon: 'assignment' },
    { id: 'report', label: t.report, isCenter: true, icon: 'add_a_photo' },
    { id: 'activity', label: t.activity, icon: 'how_to_vote' },
    { id: 'community-map', label: t.liveMap, icon: 'map' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-safe bg-[#f2fcf4]/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(46,125,50,0.06)] border-t border-[#e6f0e8]">
      <div className="h-18 px-4 max-w-xl mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          if (item.isCenter) {
            return (
              <div key={item.id} className="relative -top-4 flex flex-col items-center justify-center">
                <button
                  aria-label={t.reportBtn}
                  onClick={() => setActiveScreen('report')}
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-[#2e7d32] text-white shadow-[0_8px_20px_rgba(46,125,50,0.38)] active:scale-95 active:bg-[#0d631b] hover:bg-[#1b6d24] transition-all"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                </button>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#0d631b] mt-1">
                  {item.label}
                </span>
              </div>
            );
          }

          const isActive = activeScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveScreen(item.id)}
              className={`flex flex-col items-center justify-center gap-1 min-w-[56px] min-h-[44px] transition-colors ${
                isActive ? 'text-[#0d631b] font-bold' : 'text-[#546346] hover:text-[#151d19]'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                {item.icon}
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px]">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
