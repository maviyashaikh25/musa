import React from 'react';
import { MOCK_CONTRACTOR_SCORECARD, MOCK_USERS } from '../../data/mockData';

export default function ContractorScorecard({ onLogout, lang, setLang, t }) {
  const scorecard = MOCK_CONTRACTOR_SCORECARD;

  return (
    <div className="flex flex-col gap-4 pt-1 pb-28">
      {/* Header */}
      <header className="flex items-center justify-between bg-white p-4 rounded-3xl shadow-sm border border-[#d7e8c3]/80">
        <div className="flex items-center gap-3">
          <img
            src={MOCK_USERS.contractor.avatar}
            alt="Contractor"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#0d631b]"
          />
          <div className="flex flex-col">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[16px] text-[#151d19]">
              {t.scorecard}
            </span>
            <span className="text-[11px] font-['Plus_Jakarta_Sans'] text-[#546346] font-semibold">
              Apex Paving Ltd. • Tier 1 Verified Vendor
            </span>
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
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
          </button>
        </div>
      </header>

      {/* Main Performance Hero Banner */}
      <section className="p-5 rounded-3xl bg-gradient-to-br from-[#0d631b] to-[#1b5e20] text-white shadow-xl flex flex-col gap-3 relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-['Plus_Jakarta_Sans'] font-bold">
            ★ Tier 1 Verified Contractor
          </span>
          <span className="text-[12px] font-bold text-[#cbffc2] flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            Pay-on-Verification Active
          </span>
        </div>

        <div className="flex items-end justify-between mt-2">
          <div className="flex flex-col">
            <span className="text-[12px] font-['Plus_Jakarta_Sans'] text-white/80 uppercase tracking-wider">
              {t.verifiedRate}
            </span>
            <span className="text-[36px] font-bold font-['Plus_Jakarta_Sans'] leading-none mt-1">
              {scorecard.verifiedRate}
            </span>
          </div>

          <div className="flex flex-col text-right">
            <span className="text-[11px] font-['Plus_Jakarta_Sans'] text-white/80">
              Target &gt; 92.0%
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#cbffc2] text-[#002204] text-[11px] font-bold mt-1">
              +4.8% Above SLA
            </span>
          </div>
        </div>
      </section>

      {/* Financial Payout Summary Cards */}
      <section className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-3xl bg-white border border-[#d7e8c3] shadow-xs flex flex-col gap-1">
          <div className="flex items-center justify-between text-[#546346]">
            <span className="text-[11px] font-['Plus_Jakarta_Sans'] font-bold uppercase">
              {t.payoutReleased}
            </span>
            <span className="material-symbols-outlined text-[18px] text-[#0d631b]">account_balance_wallet</span>
          </div>
          <span className="text-[20px] font-['Plus_Jakarta_Sans'] font-bold text-[#0d631b] mt-1">
            {scorecard.payoutReleased}
          </span>
          <span className="text-[10px] text-[#40493d]">Direct to Bank Account</span>
        </div>

        <div className="p-4 rounded-3xl bg-white border border-[#d7e8c3] shadow-xs flex flex-col gap-1">
          <div className="flex items-center justify-between text-[#546346]">
            <span className="text-[11px] font-['Plus_Jakarta_Sans'] font-bold uppercase">
              {t.inEscrow}
            </span>
            <span className="material-symbols-outlined text-[18px] text-amber-600">lock_clock</span>
          </div>
          <span className="text-[20px] font-['Plus_Jakarta_Sans'] font-bold text-[#151d19] mt-1">
            {scorecard.inEscrowReview}
          </span>
          <span className="text-[10px] text-[#40493d]">Releases upon AI check</span>
        </div>
      </section>

      {/* 60-Day Monsoon Defect Liability Guarantee */}
      <section className="p-4 rounded-3xl bg-[#ecf6ee] border border-[#d7e8c3] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#2e7d32] text-white flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">shield</span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#151d19]">
              {t.monsoonDefectLiability}
            </span>
            <span className="font-['Inter'] text-[11px] text-[#40493d]">
              {t.zeroFailures}
            </span>
          </div>
        </div>
        <span className="material-symbols-outlined text-[#0d631b] text-[20px]">check_circle</span>
      </section>

      {/* Completed Repairs Cryptographic Ledger List */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="font-['Plus_Jakarta_Sans'] text-[17px] font-bold text-[#151d19]">
            Recent Verified Ledger Entries
          </h3>
          <span className="text-[11px] font-bold text-[#0d631b]">SHA-256 Chained</span>
        </div>

        {scorecard.ledgerHistory.map((item) => (
          <div
            key={item.id}
            className="p-3.5 rounded-2xl bg-white border border-[#d7e8c3]/80 shadow-xs flex items-center justify-between"
          >
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] font-bold text-[#0d631b]">
                  {item.id}
                </span>
                <span className="text-[11px] font-['Plus_Jakarta_Sans'] text-[#546346]">
                  {item.date}
                </span>
              </div>
              <span className="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#151d19] truncate mt-0.5">
                {item.address}
              </span>
              <span className="font-mono text-[10px] text-[#40493d]">
                Hash: {item.hash} (Tamper-Proof)
              </span>
            </div>

            <div className="flex flex-col items-end shrink-0">
              <span className="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#0d631b]">
                {item.payout}
              </span>
              <span className="text-[11px] font-bold text-[#0d631b] bg-[#ecf6ee] px-2 py-0.5 rounded-full mt-0.5">
                {item.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
