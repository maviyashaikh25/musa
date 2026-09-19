import React, { useState } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import CivicHome from './components/CivicHome';
import ReportCamera from './components/ReportCamera';
import ComplaintDetail from './components/ComplaintDetail';
import MyReports from './components/MyReports';
import CommunityMap from './components/CommunityMap';
import LoginPage from './components/LoginPage';

// Contractor components
import ContractorJobFeed from './components/contractor/ContractorJobFeed';
import GhostOverlayCamera from './components/contractor/GhostOverlayCamera';
import ContractorScorecard from './components/contractor/ContractorScorecard';
import ContractorBottomNav from './components/contractor/ContractorBottomNav';

// Municipal components
import MunicipalPortal from './components/municipal/MunicipalPortal';
import MunicipalReviewDashboard from './components/municipal/MunicipalReviewDashboard';
import WardHeatmapAnalytics from './components/municipal/WardHeatmapAnalytics';

import { MOCK_INCIDENT_DETAIL, MOCK_CONTRACTOR_JOBS, MOCK_USERS, WARDS_LIST } from './data/mockData';
import { TRANSLATIONS } from './data/translations';

export default function App() {
  const [currentUser, setCurrentUser] = useState(MOCK_USERS.citizen); // start with citizen
  const [activeScreen, setActiveScreen] = useState('home'); // 'home' | 'report' | 'detail' | 'my-reports' | 'community-map' | 'contractor-jobs' | 'contractor-camera' | 'contractor-scorecard' | 'municipal-review' | 'municipal-analytics' | 'login'
  const [lang, setLang] = useState('en'); // 'en' | 'mr'
  const [selectedWard, setSelectedWard] = useState(WARDS_LIST[0]);
  const [selectedIncident, setSelectedIncident] = useState(MOCK_INCIDENT_DETAIL);
  const [selectedJob, setSelectedJob] = useState(MOCK_CONTRACTOR_JOBS[0]);
  const [userReports, setUserReports] = useState([]);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const handleLogin = (user) => {
    setCurrentUser(user);
    if (user.role === 'citizen') {
      setActiveScreen('home');
    } else if (user.role === 'contractor') {
      setActiveScreen('contractor-jobs');
    } else {
      setActiveScreen('municipal-review');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActiveScreen('login');
  };

  const switchRoleQuickly = (role) => {
    if (role === 'citizen') {
      setCurrentUser(MOCK_USERS.citizen);
      setActiveScreen('home');
    } else if (role === 'contractor') {
      setCurrentUser(MOCK_USERS.contractor);
      setActiveScreen('contractor-jobs');
    } else {
      setCurrentUser(MOCK_USERS.officer);
      setActiveScreen('municipal-review');
    }
  };

  const addNewReport = (newIncident) => {
    setUserReports((prev) => [newIncident, ...prev]);
    setSelectedIncident(newIncident);
  };

  // If user is not logged in or active screen is login
  if (!currentUser || activeScreen === 'login') {
    return (
      <LoginPage
        onLogin={handleLogin}
        lang={lang}
        setLang={setLang}
        t={t}
      />
    );
  }

  const isContractor = currentUser.role === 'contractor';
  const isOfficer = currentUser.role === 'officer';

  return (
    <div className="min-h-screen w-full bg-[#f2fcf4] text-[#151d19] font-['Inter'] antialiased flex flex-col items-center selection:bg-[#2e7d32] selection:text-white">
      {/* Universal Demo Switcher Bar at top */}
      <div className="w-full bg-[#ecf6ee] border-b border-[#d7e8c3] px-4 py-2 flex items-center justify-between z-50 sticky top-0 backdrop-blur-md">
        <div className="flex items-center gap-2 max-w-6xl mx-auto w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-['Plus_Jakarta_Sans'] font-bold text-[#546346] uppercase hidden sm:inline">
              Active Portal:
            </span>
            <div className="flex items-center bg-white rounded-full p-0.5 border border-[#d7e8c3] shadow-xs">
              <button
                onClick={() => switchRoleQuickly('citizen')}
                className={`px-3 py-1 rounded-full text-[11px] font-['Plus_Jakarta_Sans'] font-bold transition-all ${
                  !isContractor && !isOfficer
                    ? 'bg-[#0d631b] text-white shadow-xs'
                    : 'text-[#40493d] hover:text-[#151d19]'
                }`}
              >
                🧑 Citizen
              </button>
              <button
                onClick={() => switchRoleQuickly('contractor')}
                className={`px-3 py-1 rounded-full text-[11px] font-['Plus_Jakarta_Sans'] font-bold transition-all ${
                  isContractor
                    ? 'bg-[#0d631b] text-white shadow-xs'
                    : 'text-[#40493d] hover:text-[#151d19]'
                }`}
              >
                👷 Contractor
              </button>
              <button
                onClick={() => switchRoleQuickly('officer')}
                className={`px-3 py-1 rounded-full text-[11px] font-['Plus_Jakarta_Sans'] font-bold transition-all ${
                  isOfficer
                    ? 'bg-[#0d631b] text-white shadow-xs'
                    : 'text-[#40493d] hover:text-[#151d19]'
                }`}
              >
                🏛️ Municipal
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isOfficer && (
              <div className="flex items-center bg-white rounded-xl p-0.5 border border-[#d7e8c3] text-[12px] font-['Plus_Jakarta_Sans'] font-bold">
                <button
                  onClick={() => setActiveScreen('municipal-review')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeScreen === 'municipal-review'
                      ? 'bg-[#ecf6ee] text-[#0d631b]'
                      : 'text-[#546346] hover:text-[#151d19]'
                  }`}
                >
                  Verification Queue
                </button>
                <button
                  onClick={() => setActiveScreen('municipal-analytics')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeScreen === 'municipal-analytics'
                      ? 'bg-[#ecf6ee] text-[#0d631b]'
                      : 'text-[#546346] hover:text-[#151d19]'
                  }`}
                >
                  Ward Analytics & Ledger
                </button>
              </div>
            )}

            <button
              onClick={handleLogout}
              className="text-[11px] font-['Plus_Jakarta_Sans'] font-bold text-[#ba1a1a] hover:underline flex items-center gap-0.5 ml-1"
            >
              <span className="material-symbols-outlined text-[14px]">logout</span>
              <span className="hidden sm:inline">{t.logout}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Screen Container */}
      <div className={`w-full ${isOfficer ? 'max-w-6xl px-4 py-3' : 'max-w-md min-h-screen bg-[#f2fcf4] relative shadow-2xl sm:border-x sm:border-[#d7e8c3]/60 flex flex-col'}`}>
        {/* CITIZEN VIEWS */}
        {!isContractor && !isOfficer && (
          <>
            <Header
              activeScreen={activeScreen}
              setActiveScreen={setActiveScreen}
              lang={lang}
              setLang={setLang}
              selectedWard={selectedWard}
              setSelectedWard={setSelectedWard}
              t={t}
            />

            <main className="flex-1 w-full pt-16 px-4 flex flex-col">
              {activeScreen === 'home' && (
                <CivicHome
                  setActiveScreen={setActiveScreen}
                  setSelectedIncident={setSelectedIncident}
                  selectedWard={selectedWard}
                  t={t}
                />
              )}

              {activeScreen === 'report' && (
                <ReportCamera
                  setActiveScreen={setActiveScreen}
                  addNewReport={addNewReport}
                  selectedWard={selectedWard}
                  t={t}
                />
              )}

              {activeScreen === 'detail' && (
                <ComplaintDetail
                  incident={selectedIncident}
                  setActiveScreen={setActiveScreen}
                  t={t}
                />
              )}

              {activeScreen === 'my-reports' && (
                <MyReports
                  userReports={userReports}
                  setActiveScreen={setActiveScreen}
                  setSelectedIncident={setSelectedIncident}
                  t={t}
                />
              )}

              {activeScreen === 'community-map' && (
                <CommunityMap
                  setActiveScreen={setActiveScreen}
                  setSelectedIncident={setSelectedIncident}
                  selectedWard={selectedWard}
                  t={t}
                />
              )}
            </main>

            {activeScreen !== 'report' && (
              <BottomNav
                activeScreen={activeScreen}
                setActiveScreen={setActiveScreen}
                t={t}
              />
            )}
          </>
        )}

        {/* CONTRACTOR VIEWS */}
        {isContractor && (
          <>
            <main className="flex-1 w-full pt-3 px-4 flex flex-col">
              {activeScreen === 'contractor-jobs' && (
                <ContractorJobFeed
                  onSelectJob={setSelectedJob}
                  setActiveScreen={setActiveScreen}
                  onLogout={handleLogout}
                  lang={lang}
                  setLang={setLang}
                  t={t}
                />
              )}

              {activeScreen === 'contractor-camera' && (
                <GhostOverlayCamera
                  job={selectedJob}
                  setActiveScreen={setActiveScreen}
                  t={t}
                />
              )}

              {activeScreen === 'contractor-scorecard' && (
                <ContractorScorecard
                  onLogout={handleLogout}
                  lang={lang}
                  setLang={setLang}
                  t={t}
                />
              )}
            </main>

            {activeScreen !== 'contractor-camera' && (
              <ContractorBottomNav
                activeScreen={activeScreen}
                setActiveScreen={setActiveScreen}
                t={t}
              />
            )}
          </>
        )}

        {/* MUNICIPAL OFFICER VIEWS (Desktop-first Dashboard matching exact Stitch design) */}
        {isOfficer && (
          <div className="w-full">
            <MunicipalPortal
              onLogout={handleLogout}
              lang={lang}
              setLang={setLang}
              t={t}
            />
          </div>
        )}
      </div>
    </div>
  );
}
