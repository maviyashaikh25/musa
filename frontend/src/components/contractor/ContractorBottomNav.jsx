import React from 'react';

export default function ContractorBottomNav({ activeScreen, setActiveScreen, t }) {
  const navItems = [
    { id: 'contractor-jobs', label: t.jobsQueue, icon: 'format_list_bulleted' },
    { id: 'contractor-camera', label: t.repairProof, isCenter: true, icon: 'camera' },
    { id: 'contractor-scorecard', label: t.scorecard, icon: 'military_tech' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-safe bg-[#f2fcf4]/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(46,125,50,0.06)] border-t border-[#e6f0e8]">
      <div className="h-18 px-6 max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          if (item.isCenter) {
            return (
              <div key={item.id} className="relative -top-4 flex flex-col items-center justify-center">
                <button
                  aria-label={t.repairProof}
                  onClick={() => setActiveScreen('contractor-camera')}
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0d631b] text-white shadow-[0_8px_20px_rgba(46,125,50,0.38)] active:scale-95 hover:bg-[#2e7d32] transition-all ring-4 ring-white"
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
              className={`flex flex-col items-center justify-center gap-1 min-w-[64px] min-h-[44px] transition-colors ${
                isActive ? 'text-[#0d631b] font-bold' : 'text-[#546346] hover:text-[#151d19]'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">
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
