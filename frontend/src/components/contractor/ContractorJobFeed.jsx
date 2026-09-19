import React, { useState, useEffect } from 'react';
import { MOCK_CONTRACTOR_JOBS, MOCK_USERS } from '../../data/mockData';

export default function ContractorJobFeed({
  onSelectJob,
  setActiveScreen,
  onLogout,
  lang,
  setLang,
  t
}) {
  const [jobs, setJobs] = useState(MOCK_CONTRACTOR_JOBS);
  const [filter, setFilter] = useState('all'); // 'all' | 'critical' | 'standard'
  const [countdown, setCountdown] = useState(6480); // seconds for urgent job

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCountdown = (totalSeconds) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h}h ${m}m ${s < 10 ? '0' : ''}${s}s`;
  };

  const filteredJobs = jobs.filter((job) => {
    if (filter === 'all') return true;
    if (filter === 'critical') return job.priority === 'CRITICAL';
    if (filter === 'standard') return job.priority === 'STANDARD';
    return true;
  });

  const handleStartProof = (job) => {
    onSelectJob(job);
    setActiveScreen('contractor-camera');
  };

  return (
    <div className="flex flex-col gap-4 pt-1 pb-28">
      {/* Contractor Header */}
      <header className="flex items-center justify-between bg-white p-4 rounded-3xl shadow-sm border border-[#d7e8c3]/80">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={MOCK_USERS.contractor.avatar}
              alt="Rajesh Shinde"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-[#0d631b]"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#0d631b] rounded-full ring-2 ring-white"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[16px] text-[#151d19]">
              {MOCK_USERS.contractor.name}
            </span>
            <div className="flex items-center gap-1.5 text-[11px] font-['Plus_Jakarta_Sans'] text-[#40493d]">
              <span className="font-semibold text-[#0d631b]">{MOCK_USERS.contractor.crew}</span>
              <span>•</span>
              <span>{MOCK_USERS.contractor.company}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setLang(lang === 'en' ? 'mr' : 'en')}
            className="px-2.5 py-1 rounded-full text-[12px] font-['Plus_Jakarta_Sans'] font-bold border border-[#2e7d32]/30 bg-[#ecf6ee] text-[#0d631b]"
          >
            {lang === 'en' ? 'मराठी' : 'ENG'}
          </button>
          <button
            onClick={onLogout}
            className="w-9 h-9 rounded-full bg-[#ecf6ee] text-[#ba1a1a] hover:bg-[#ffdad6] flex items-center justify-center transition-colors"
            title={t.logout}
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
          </button>
        </div>
      </header>

      {/* KPI Stats Grid */}
      <section className="grid grid-cols-3 gap-2.5">
        <div className="flex flex-col p-3 rounded-2xl bg-[#ecf6ee] border border-[#d7e8c3]/60 shadow-xs">
          <span className="text-[11px] font-['Plus_Jakarta_Sans'] font-bold text-[#546346] uppercase">
            Active Jobs
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[22px] font-bold text-[#0d631b] mt-0.5">
            4
          </span>
          <span className="text-[10px] font-['Inter'] text-[#40493d]">
            Ward 14 & K-West
          </span>
        </div>

        <div className="flex flex-col p-3 rounded-2xl bg-[#ffdad6]/60 border border-[#ba1a1a]/20 shadow-xs">
          <span className="text-[11px] font-['Plus_Jakarta_Sans'] font-bold text-[#ba1a1a] uppercase flex items-center gap-0.5">
            <span className="material-symbols-outlined text-[13px]">timer</span>
            Urgent SLA
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[22px] font-bold text-[#ba1a1a] mt-0.5">
            1
          </span>
          <span className="text-[10px] font-['Inter'] text-[#93000a]">
            &lt; 2h Remaining
          </span>
        </div>

        <div className="flex flex-col p-3 rounded-2xl bg-[#d7e8c3] border border-[#bfcaba] shadow-xs">
          <span className="text-[11px] font-['Plus_Jakarta_Sans'] font-bold text-[#121f08] uppercase">
            Queued Escrow
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[18px] font-bold text-[#121f08] mt-1">
            ₹48,000
          </span>
          <span className="text-[10px] font-['Inter'] text-[#3d4b30]">
            Pay-on-Verification
          </span>
        </div>
      </section>

      {/* Urgent Alert Banner */}
      <section className="p-4 rounded-3xl bg-[#ba1a1a] text-white shadow-lg flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 animate-pulse">
            <span className="material-symbols-outlined text-[22px]">alarm</span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Plus_Jakarta_Sans'] text-[14px] font-bold">
              {t.urgentSlaWarning}
            </span>
            <span className="font-mono text-[13px] text-white/90">
              ⏱️ {formatCountdown(countdown)} to avoid 15% penalty
            </span>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between px-1">
        <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] font-bold text-[#151d19]">
          {t.assignedWorkOrders}
        </h3>
        <div className="flex items-center gap-1.5">
          {['all', 'critical', 'standard'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-full text-[11px] font-['Plus_Jakarta_Sans'] font-bold transition-all ${
                filter === f
                  ? 'bg-[#0d631b] text-white shadow-xs'
                  : 'bg-[#ecf6ee] text-[#40493d] hover:bg-[#e1ebe3]'
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Work Orders List */}
      <div className="flex flex-col gap-3">
        {filteredJobs.map((job) => (
          <article
            key={job.id}
            className="p-4 rounded-3xl bg-white shadow-sm border border-[#d7e8c3]/80 flex flex-col gap-3 hover:border-[#2e7d32] transition-all"
          >
            {/* Header row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[12px] font-bold text-[#0d631b] bg-[#ecf6ee] px-2.5 py-0.5 rounded-full">
                  {job.id}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-['Plus_Jakarta_Sans'] font-bold ${
                    job.priority === 'CRITICAL'
                      ? 'bg-[#ffdad6] text-[#ba1a1a]'
                      : 'bg-[#d7e8c3] text-[#121f08]'
                  }`}
                >
                  {job.priority} SLA
                </span>
              </div>
              <span className="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#0d631b]">
                {job.payout} Payout
              </span>
            </div>

            {/* Content row */}
            <div className="flex items-start gap-3">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-[#ecf6ee] relative">
                <img
                  src={job.citizenPhoto}
                  alt={job.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/70 text-white text-[9px] font-bold">
                  BEFORE
                </span>
              </div>

              <div className="flex flex-col min-w-0 flex-1">
                <h4 className="font-['Plus_Jakarta_Sans'] text-[16px] font-bold text-[#151d19] truncate">
                  {job.title}
                </h4>
                <p className="font-['Inter'] text-[12px] text-[#40493d] truncate mt-0.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-[#0d631b]">pin_drop</span>
                  <span>{job.address}</span>
                </p>
                <span className="text-[11px] font-['Plus_Jakarta_Sans'] text-[#546346] mt-1 font-semibold truncate">
                  {job.roadClass} • {job.distance}
                </span>
              </div>
            </div>

            {/* Action button */}
            <div className="flex items-center justify-between pt-1 border-t border-[#f2fcf4]">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#40493d] flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-amber-600">timer</span>
                <span>{job.slaLabel}</span>
              </span>

              <button
                type="button"
                onClick={() => handleStartProof(job)}
                className="px-4 py-2 rounded-full bg-[#0d631b] hover:bg-[#2e7d32] text-white font-['Plus_Jakarta_Sans'] text-[13px] font-bold shadow-sm active:scale-95 transition-all flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[17px]">photo_camera</span>
                <span>{t.startRepairProof}</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
