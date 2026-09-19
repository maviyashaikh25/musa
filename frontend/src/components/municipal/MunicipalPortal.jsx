import React, { useState, useEffect, useRef } from 'react';

// Enhanced Mock Data matching the user's exact dashboard screenshot
export const TRIAGE_QUEUE_DATA = [
  {
    id: "#CF-8429",
    rawId: "CF-8429",
    matchScore: "98.4% Match",
    matchColor: "emerald",
    sla: "1h 45m SLA",
    address: "342 Elm Street, Ward 14",
    ward: "Ward 14 (Maplewood)",
    hazardType: "Deep Asphalt Pothole",
    contractor: "Apex Paving Ltd.",
    crew: "Crew #4 (Rajesh S.)",
    citizen: "Maya S.",
    status: "Sign-off Ready",
    depth: "120mm Defect Depth",
    reportedTime: "Oct 24 • 9:15 AM",
    repairedTime: "Oct 26 • 2:10 PM",
    repairType: "Hot-mix Asphalt Patch",
    homographyConfidence: "98.4%",
    anchorsLocked: "3/3 Anchors Locked",
    beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqN3QvFP4tqPuysr6ufwxUoj95aryz370FdFkg_EGvKUd5RwTSvhiEE6YhYHjD_Y9LwaX93PXa75BcQVDKyVi859KPLgj2WV5NWF7DxgPhrYUKVnFyhBQDX_k0-BagDesfVAwN2fBQd9rA1tCoIjamuC4YNZ0RiDEAPzMI3qGRx_K-vyma1mSrN2iPvEx2fKUC1vgGyJ3lfVp0UpdaTiQ2Ie6iIxOq1rc7RUyknq7eOOMo7VrrFwSPUw",
    afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0TpDjXqMy-XXPRo3jnGEZX6mNFVQwk4uHkdhs8-Rd9MWdBolqnPAC8HAj4SjbrIJl_qpPDrj7w5a7aKbUyACYce8jSnloSQQv3uQAF_nxrWdlIghUuGqfRKB7mgmDW0uRMHs5bqUTTqomyj1F44Dra3zNiF3YqAKTZWI_v-p2z15d4N-6tGfCjvRy_rfbHapOYLCIDB2_a3QCjyBq-w9dF2Csth_j3tZE2kF1pS22493WeVNH0-x35w",
    telemetry: [
      { name: "GPS Delta", detail: "0.9m offset (Tolerance ≤ 2.5m)", icon: "near_me", status: "Pass" },
      { name: "Compass Heading", detail: "282° W vs 284° W (2° variance)", icon: "explore", status: "Pass" },
      { name: "Landmark Geometry", detail: "Kerb & pole matched (99.2%)", icon: "domain", status: "Pass" },
      { name: "Surface Fill & Level", detail: "100% flush patch, void eliminated", icon: "layers", status: "Pass" }
    ],
    hash: "#e7a4f9104c89a01f92e42b109f01",
    anchors: [
      { x1: 28, y1: 38, x2: 30, y2: 36, label: "Kerb Edge" },
      { x1: 66, y1: 26, x2: 64, y2: 24, label: "Sign Pole" },
      { x1: 82, y1: 52, x2: 78, y2: 48, label: "Joint Seam" }
    ]
  },
  {
    id: "#CF-8430",
    rawId: "CF-8430",
    matchScore: "91.2% Match",
    matchColor: "emerald",
    sla: "4h 12m SLA",
    address: "892 Pine Crest Ave",
    ward: "Ward 14 (Maplewood)",
    hazardType: "Crumbling Shoulder",
    contractor: "NorthStar Infra",
    crew: "Crew #2 (Anand K.)",
    citizen: "Vikram R.",
    status: "Under Review",
    depth: "85mm Surface Spall",
    reportedTime: "Oct 25 • 11:20 AM",
    repairedTime: "Oct 26 • 1:40 PM",
    repairType: "Bituminous Cold Overlay",
    homographyConfidence: "91.2%",
    anchorsLocked: "3/3 Anchors Locked",
    beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhS_lyFD4zIki-hYjRs0J_nj-kUtl-IVmxBC20jIz_3I4baGn5LnFpJbRM3_nmZXkpN0pNOcgWl3GzfVTF1jEBJ6Pzhi_KSxzdBCwqryvn2kI7IWpT3W5CdZ0HLwRIAR-sykN9qkUhz5a6-LLC6nzwPyEjTcWTeR9bfvYd5nLK52kGoGMs2p5aIkb2LG6vKh0r1-1ybH21JX6nXa1FOvOXyjio0lwOb_cAq_489dzWOU_AmH-wPstSKA",
    afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD34BtGNaMowD674Rfy8Ry0_HVg91KXAhn-jOkHLaPl4Qopvgb_EgklAQe-QF6Z2pjtzrFXWn3hTSQoKF9NJCQ3WR6tjSeDC1gWc8tWjwB-zWtBoMG6vUCZYGhYobxQn5LYiP0z57NJPHrlTekmz1WxEdA-SuHcFsMy61yZvoBoRQdBliQl7qkzaP-11zGUeOTykUWSXGj8cwmQS0h_MUNmMzQOal9GE_umK83uVlscwjbOlhsTtnxkaA",
    telemetry: [
      { name: "GPS Delta", detail: "1.4m offset (Tolerance ≤ 2.5m)", icon: "near_me", status: "Pass" },
      { name: "Compass Heading", detail: "190° S vs 194° S (4° variance)", icon: "explore", status: "Pass" },
      { name: "Landmark Geometry", detail: "Curb line matched (93.1%)", icon: "domain", status: "Pass" },
      { name: "Surface Fill & Level", detail: "Smooth rolled edge finish", icon: "layers", status: "Pass" }
    ],
    hash: "#84a1e9b201f893ca...192b",
    anchors: [
      { x1: 32, y1: 44, x2: 34, y2: 42, label: "Drain Grate" },
      { x1: 72, y1: 30, x2: 70, y2: 28, label: "Boundary Wall" }
    ]
  },
  {
    id: "#CF-8431",
    rawId: "CF-8431",
    matchScore: "74.3% Mismatch",
    matchColor: "red",
    sla: "2h left",
    address: "Oak Ridge Ave & 4th",
    ward: "Ward 14 (Maplewood)",
    hazardType: "Sunken Manhole Rim",
    contractor: "Landmark Flagged",
    crew: "Crew #6 (Karan M.)",
    citizen: "Devika N.",
    status: "Flagged Discrepancy",
    depth: "140mm Subsidence",
    reportedTime: "Oct 25 • 3:00 PM",
    repairedTime: "Oct 26 • 11:15 AM",
    repairType: "Cast-iron Riser Ring",
    homographyConfidence: "74.3%",
    anchorsLocked: "1/3 Anchors Misaligned",
    beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1qtcsNjSXhDrNZ1jTwcY6zDwQC0cchueHYRoZZWS8IU-MpnsO3z0vtK4n8r18-59lqI6kr-urdIkHIkLVWtVeobUzKeSUa-zIPM5nS4NFnIDGllNQ3HIIon70jGs127zxrmc5buSHGCa4Ud7nzOZrJWHshQn8FnHMHROIjxhHxtnSJ2-ubn4XbwTI4kOh0ziBEWdayUXgR8S43ZgeAB9KWUTF3xW-1ItuyMSz4PTpjzTsAK7CzprQKQ",
    afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhS_lyFD4zIki-hYjRs0J_nj-kUtl-IVmxBC20jIz_3I4baGn5LnFpJbRM3_nmZXkpN0pNOcgWl3GzfVTF1jEBJ6Pzhi_KSxzdBCwqryvn2kI7IWpT3W5CdZ0HLwRIAR-sykN9qkUhz5a6-LLC6nzwPyEjTcWTeR9bfvYd5nLK52kGoGMs2p5aIkb2LG6vKh0r1-1ybH21JX6nXa1FOvOXyjio0lwOb_cAq_489dzWOU_AmH-wPstSKA",
    telemetry: [
      { name: "GPS Delta", detail: "8.4m offset (EXCEEDS 2.5m)", icon: "near_me", status: "Fail" },
      { name: "Compass Heading", detail: "045° vs 110° (65° skew)", icon: "explore", status: "Fail" },
      { name: "Landmark Geometry", detail: "Different background curb", icon: "domain", status: "Fail" },
      { name: "Surface Fill & Level", detail: "Level detected", icon: "layers", status: "Pass" }
    ],
    hash: "#71f92a104c99e19d...7721",
    anchors: []
  },
  {
    id: "#CF-8432",
    rawId: "CF-8432",
    matchScore: "99.1% Match",
    matchColor: "emerald",
    sla: "5h 30m",
    address: "1200 Lakeview Blvd",
    ward: "Ward 14 (Maplewood)",
    hazardType: "Pothole & Alligator Cracking",
    contractor: "QuickPatch Co.",
    crew: "Crew #1 (Suresh P.)",
    citizen: "Rohan D.",
    status: "Sign-off Ready",
    depth: "95mm Fatigue Crack",
    reportedTime: "Oct 25 • 4:15 PM",
    repairedTime: "Oct 26 • 12:05 PM",
    repairType: "Infrared Thermal Patch",
    homographyConfidence: "99.1%",
    anchorsLocked: "3/3 Anchors Locked",
    beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqN3QvFP4tqPuysr6ufwxUoj95aryz370FdFkg_EGvKUd5RwTSvhiEE6YhYHjD_Y9LwaX93PXa75BcQVDKyVi859KPLgj2WV5NWF7DxgPhrYUKVnFyhBQDX_k0-BagDesfVAwN2fBQd9rA1tCoIjamuC4YNZ0RiDEAPzMI3qGRx_K-vyma1mSrN2iPvEx2fKUC1vgGyJ3lfVp0UpdaTiQ2Ie6iIxOq1rc7RUyknq7eOOMo7VrrFwSPUw",
    afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0TpDjXqMy-XXPRo3jnGEZX6mNFVQwk4uHkdhs8-Rd9MWdBolqnPAC8HAj4SjbrIJl_qpPDrj7w5a7aKbUyACYce8jSnloSQQv3uQAF_nxrWdlIghUuGqfRKB7mgmDW0uRMHs5bqUTTqomyj1F44Dra3zNiF3YqAKTZWI_v-p2z15d4N-6tGfCjvRy_rfbHapOYLCIDB2_a3QCjyBq-w9dF2Csth_j3tZE2kF1pS22493WeVNH0-x35w",
    telemetry: [
      { name: "GPS Delta", detail: "0.4m offset (Tolerance ≤ 2.5m)", icon: "near_me", status: "Pass" },
      { name: "Compass Heading", detail: "310° NW vs 311° NW", icon: "explore", status: "Pass" },
      { name: "Landmark Geometry", detail: "Storm inlet match (99.8%)", icon: "domain", status: "Pass" },
      { name: "Surface Fill & Level", detail: "Thermal welded edge flush", icon: "layers", status: "Pass" }
    ],
    hash: "#52d8104c89a01f92...9e44",
    anchors: [
      { x1: 25, y1: 35, x2: 27, y2: 34, label: "Catch Basin" },
      { x1: 65, y1: 22, x2: 63, y2: 23, label: "Tree Trunk" }
    ]
  },
  {
    id: "#CF-8433",
    rawId: "CF-8433",
    matchScore: "88.5% Match",
    matchColor: "emerald",
    sla: "8h 15m",
    address: "45 Maplewood Way",
    ward: "Ward 14 (Maplewood)",
    hazardType: "Curb Erosion",
    contractor: "GreenRoads",
    crew: "Crew #3 (Pooja S.)",
    citizen: "Amit G.",
    status: "Sign-off Ready",
    depth: "60mm Edge Break",
    reportedTime: "Oct 25 • 5:40 PM",
    repairedTime: "Oct 26 • 2:30 PM",
    repairType: "Concrete Curb & Gutter Patch",
    homographyConfidence: "88.5%",
    anchorsLocked: "3/3 Anchors Locked",
    beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhS_lyFD4zIki-hYjRs0J_nj-kUtl-IVmxBC20jIz_3I4baGn5LnFpJbRM3_nmZXkpN0pNOcgWl3GzfVTF1jEBJ6Pzhi_KSxzdBCwqryvn2kI7IWpT3W5CdZ0HLwRIAR-sykN9qkUhz5a6-LLC6nzwPyEjTcWTeR9bfvYd5nLK52kGoGMs2p5aIkb2LG6vKh0r1-1ybH21JX6nXa1FOvOXyjio0lwOb_cAq_489dzWOU_AmH-wPstSKA",
    afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD34BtGNaMowD674Rfy8Ry0_HVg91KXAhn-jOkHLaPl4Qopvgb_EgklAQe-QF6Z2pjtzrFXWn3hTSQoKF9NJCQ3WR6tjSeDC1gWc8tWjwB-zWtBoMG6vUCZYGhYobxQn5LYiP0z57NJPHrlTekmz1WxEdA-SuHcFsMy61yZvoBoRQdBliQl7qkzaP-11zGUeOTykUWSXGj8cwmQS0h_MUNmMzQOal9GE_umK83uVlscwjbOlhsTtnxkaA",
    telemetry: [
      { name: "GPS Delta", detail: "1.1m offset (Tolerance ≤ 2.5m)", icon: "near_me", status: "Pass" },
      { name: "Compass Heading", detail: "088° E vs 090° E", icon: "explore", status: "Pass" },
      { name: "Landmark Geometry", detail: "Sidewalk slab lines (91.0%)", icon: "domain", status: "Pass" },
      { name: "Surface Fill & Level", detail: "Curb line restored", icon: "layers", status: "Pass" }
    ],
    hash: "#9a21bcf87c55e318...8f7b",
    anchors: [
      { x1: 40, y1: 50, x2: 42, y2: 48, label: "Sidewalk Joint" }
    ]
  }
];

export default function MunicipalPortal({ onLogout, lang, setLang, t }) {
  const [activeTab, setActiveTab] = useState('review-queue'); // 'review-queue' | 'ward-heatmap' | 'contractor-scorecards' | 'audit-ledger'
  const [selectedDocket, setSelectedDocket] = useState(TRIAGE_QUEUE_DATA[0]);
  const [searchFilter, setSearchFilter] = useState('');
  const [queueFilter, setQueueFilter] = useState('all'); // 'all' | 'ai-verified' | 'disputed' | 'approved'
  const [actionNotice, setActionNotice] = useState(null);
  const [defectFilter, setDefectFilter] = useState('potholes');
  const [timeRange, setTimeRange] = useState('30d');
  const [mapLayer, setMapLayer] = useState('heatmap');
  const [selectedHotspot, setSelectedHotspot] = useState(true);
  const [isVerifyingChain, setIsVerifyingChain] = useState(false);
  const [chainVerified, setChainVerified] = useState(true);

  const canvasRef = useRef(null);

  // Keyboard shortcut listener (Press A to approve, R to request rework)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'a' || e.key === 'A') {
        handleApprove();
      } else if (e.key === 'r' || e.key === 'R') {
        handleRework();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedDocket]);

  // Draw connecting keypoint lines between photos
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !selectedDocket) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!selectedDocket.anchors || selectedDocket.anchors.length === 0) return;

    const w = canvas.width;
    const h = canvas.height;
    const midX = w / 2;

    selectedDocket.anchors.forEach((pt) => {
      const x1 = (pt.x1 / 100) * midX;
      const y1 = (pt.y1 / 100) * h;
      const x2 = midX + (pt.x2 / 100) * midX;
      const y2 = (pt.y2 / 100) * h;

      // Draw dotted green vector line connecting landmarks
      ctx.beginPath();
      ctx.setLineDash([5, 4]);
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 2.2;
      ctx.stroke();

      // Anchor point 1 (Left Before photo)
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.arc(x1, y1, 5, 0, 2 * Math.PI);
      ctx.fillStyle = '#166534';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      // Anchor point 2 (Right After photo)
      ctx.beginPath();
      ctx.arc(x2, y2, 5, 0, 2 * Math.PI);
      ctx.fillStyle = '#22c55e';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
    });
  }, [selectedDocket]);

  const handleApprove = () => {
    setActionNotice({
      type: 'approved',
      msg: `Docket ${selectedDocket.id} Approved! Payout authorized for ${selectedDocket.contractor}. Merkle Block #${Math.floor(1400 + Math.random() * 50)} cryptographically sealed.`
    });
    setTimeout(() => setActionNotice(null), 5000);
  };

  const handleRework = () => {
    setActionNotice({
      type: 'rework',
      msg: `Rework order dispatched for ${selectedDocket.id}. 12-hour SLA timer initialized on contractor mobile terminal.`
    });
    setTimeout(() => setActionNotice(null), 5000);
  };

  const handleVerifyChain = () => {
    setIsVerifyingChain(true);
    setTimeout(() => {
      setIsVerifyingChain(false);
      setChainVerified(true);
    }, 700);
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f7f4] text-[#151d19] font-['Inter'] flex antialiased">
      {/* 1. LEFT OPERATIONS HUB SIDEBAR */}
      <aside className="w-64 bg-white border-r border-[#e0ece2] flex flex-col justify-between shrink-0 select-none">
        <div className="flex flex-col">
          {/* Logo & DPW Ops Tag */}
          <div className="p-4 flex flex-col gap-2 border-b border-[#e0ece2]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#1b5e20] text-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[20px]">handyman</span>
              </div>
              <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-[20px] text-[#151d19] tracking-tight">
                CivicFix
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#eef7ee] border border-[#d2e7d3] text-[#1b5e20] text-[11px] font-bold">
              <span className="material-symbols-outlined text-[15px]">account_balance</span>
              <span>Maplewood DPW Ops</span>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="px-3 py-4 flex flex-col gap-1">
            <span className="px-3 pb-2 text-[10px] font-['Plus_Jakarta_Sans'] font-bold text-[#6f7e73] uppercase tracking-wider">
              Operations Hub
            </span>

            <button
              onClick={() => setActiveTab('review-queue')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-bold transition-all ${
                activeTab === 'review-queue'
                  ? 'bg-[#1b5e20] text-white shadow-xs'
                  : 'text-[#414d45] hover:bg-[#f0f6f1] hover:text-[#151d19]'
              }`}
            >
              <span className="material-symbols-outlined text-[19px]">fact_check</span>
              <span>Review Queue</span>
            </button>

            <button
              onClick={() => setActiveTab('ward-heatmap')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-bold transition-all ${
                activeTab === 'ward-heatmap'
                  ? 'bg-[#1b5e20] text-white shadow-xs'
                  : 'text-[#414d45] hover:bg-[#f0f6f1] hover:text-[#151d19]'
              }`}
            >
              <span className="material-symbols-outlined text-[19px]">map</span>
              <span>Ward Heatmap Analytics</span>
            </button>

            <button
              onClick={() => setActiveTab('contractor-scorecards')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-bold transition-all ${
                activeTab === 'contractor-scorecards'
                  ? 'bg-[#1b5e20] text-white shadow-xs'
                  : 'text-[#414d45] hover:bg-[#f0f6f1] hover:text-[#151d19]'
              }`}
            >
              <span className="material-symbols-outlined text-[19px]">engineering</span>
              <span>Contractor Scorecards</span>
            </button>

            <button
              className="flex items-center justify-between px-3 py-2.5 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#414d45] hover:bg-[#f0f6f1]"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[19px]">badge</span>
                <span>Contractor ID & Batch</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#d7e8c3] text-[#1b5e20] text-[10px] font-extrabold">
                New
              </span>
            </button>

            <button
              onClick={() => setActiveTab('audit-ledger')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-bold transition-all ${
                activeTab === 'audit-ledger'
                  ? 'bg-[#1b5e20] text-white shadow-xs'
                  : 'text-[#414d45] hover:bg-[#f0f6f1] hover:text-[#151d19]'
              }`}
            >
              <span className="material-symbols-outlined text-[19px]">lock</span>
              <span>Audit Ledger</span>
            </button>

            <button
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#414d45] hover:bg-[#f0f6f1]"
            >
              <span className="material-symbols-outlined text-[19px]">settings</span>
              <span>Settings</span>
            </button>

            <div className="pt-4">
              <button className="w-full py-2 px-3 rounded-xl border border-dashed border-[#b6ccb9] text-[#1b5e20] hover:bg-[#eef7ee] font-['Plus_Jakarta_Sans'] text-[12px] font-bold flex items-center justify-center gap-1.5 transition-colors">
                <span className="material-symbols-outlined text-[16px]">add</span>
                <span>Create Batch / Contractor ID</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom SLA Health indicator */}
        <div className="p-4 border-t border-[#e0ece2] flex flex-col gap-2">
          <div className="flex items-center justify-between text-[11px] font-['Plus_Jakarta_Sans'] font-bold">
            <span className="text-[#414d45]">SLA Health</span>
            <span className="text-[#1b5e20]">98.4%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[#e0ece2] overflow-hidden">
            <div className="h-full bg-[#1b5e20] rounded-full" style={{ width: '98.4%' }}></div>
          </div>
          <span className="text-[10px] text-[#6f7e73] leading-tight">
            All 6 Wards meeting municipal response benchmarks
          </span>
        </div>
      </aside>

      {/* 2. MAIN WORKSPACE */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header Bar */}
        <header className="h-16 bg-white border-b border-[#e0ece2] px-6 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f6f1] text-[#1b5e20] text-[12px] font-bold shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#1b5e20] animate-pulse"></span>
              <span>24 Open Dispatches</span>
            </div>

            {/* Global Search Input */}
            <div className="relative flex-1">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#7a887d] text-[18px]">
                search
              </span>
              <input
                type="text"
                placeholder="Search hazard ID, ward, or contractor..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#f4f8f4] border border-[#e0ece2] text-[13px] placeholder-[#7a887d] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1b5e20]"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative w-9 h-9 rounded-xl hover:bg-[#f0f6f1] flex items-center justify-center text-[#414d45] transition-colors">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#ba1a1a]"></span>
            </button>
            <button className="w-9 h-9 rounded-xl hover:bg-[#f0f6f1] flex items-center justify-center text-[#414d45] transition-colors">
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>

            {/* Officer Profile Badge */}
            <div className="flex items-center gap-3 pl-3 border-l border-[#e0ece2]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
                alt="Elena Rostova"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#1b5e20]"
              />
              <div className="flex flex-col text-left">
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] text-[#151d19] leading-tight">
                  Elena Rostova
                </span>
                <span className="font-['Inter'] text-[11px] text-[#6f7e73]">
                  Chief Roads Inspector
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Global Toast Action Notice */}
        {actionNotice && (
          <div
            className={`mx-6 mt-4 p-3 rounded-2xl flex items-center gap-2.5 font-['Plus_Jakarta_Sans'] text-[13px] font-bold shadow-sm transition-all ${
              actionNotice.type === 'approved'
                ? 'bg-[#d7e8c3] text-[#12230b] border border-[#a3f69c]'
                : 'bg-[#ffdad6] text-[#93000a] border border-[#ffb4ab]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              {actionNotice.type === 'approved' ? 'verified' : 'history'}
            </span>
            <span>{actionNotice.msg}</span>
          </div>
        )}

        {/* TAB 1: REVIEW QUEUE (Inspection Evidence & Triage) */}
        {activeTab === 'review-queue' && (
          <main className="p-6 flex flex-col gap-6">
            {/* 4 KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1 */}
              <div className="p-4 rounded-2xl bg-white border border-[#e0ece2] shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-['Plus_Jakarta_Sans'] font-bold text-[#414d45] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#1b5e20]">pending_actions</span>
                    <span>Pending Triage & AI Review</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#eef7ee] text-[#1b5e20] text-[10px] font-extrabold">
                    Queue Active
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-[32px] font-extrabold font-['Plus_Jakarta_Sans'] text-[#151d19] tracking-tight">
                    38
                  </span>
                  <span className="text-[12px] text-[#6f7e73]">reports awaiting sign-off</span>
                </div>
                <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-[#f0f4f0] text-[11px] font-bold">
                  <span className="px-2 py-0.5 rounded-full bg-[#d7e8c3] text-[#1b5e20]">
                    ● 14 High (&gt;95%)
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#fff4cc] text-[#8a6500]">
                    ● 19 Mod
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#ba1a1a]">
                    ● 5 Flagged
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-4 rounded-2xl bg-white border border-[#e0ece2] shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-['Plus_Jakarta_Sans'] font-bold text-[#414d45] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#1b5e20]">timer</span>
                    <span>Median Review Turnaround</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#d7e8c3] text-[#1b5e20] text-[10px] font-extrabold">
                    -34% MoM
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-[32px] font-extrabold font-['Plus_Jakarta_Sans'] text-[#151d19] tracking-tight">
                    2.4 <span className="text-[20px] font-bold">min</span>
                  </span>
                  <span className="text-[12px] text-[#6f7e73]">target ≤ 6.0m</span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#f0f4f0] text-[11px]">
                  <span className="text-[#6f7e73]">Automated AI approval rate</span>
                  <span className="font-bold text-[#1b5e20]">92.0%</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-4 rounded-2xl bg-white border border-[#e0ece2] shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-['Plus_Jakarta_Sans'] font-bold text-[#414d45] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#1b5e20]">verified</span>
                    <span>Contractor SLA Compliance</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#eef7ee] text-[#1b5e20] text-[10px] font-extrabold">
                    Active Period
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-[32px] font-extrabold font-['Plus_Jakarta_Sans'] text-[#1b5e20] tracking-tight">
                    96.8%
                  </span>
                  <span className="text-[12px] text-[#6f7e73]">Ward 14 & 15</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#e0ece2] mt-3 overflow-hidden">
                  <div className="h-full bg-[#1b5e20] rounded-full" style={{ width: '96.8%' }}></div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-4 rounded-2xl bg-white border border-[#e0ece2] shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-['Plus_Jakarta_Sans'] font-bold text-[#414d45] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#1b5e20]">lock</span>
                    <span>Cryptographic Audit Ledger</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#eef7ee] text-[#1b5e20] text-[10px] font-extrabold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1b5e20]"></span>
                    Sync
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-[32px] font-extrabold font-['Plus_Jakarta_Sans'] text-[#151d19] tracking-tight">
                    1,429
                  </span>
                  <span className="text-[12px] text-[#6f7e73]">blocks sealed</span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#f0f4f0] text-[11px]">
                  <span className="text-[#6f7e73]">Tampering instances</span>
                  <span className="font-bold text-[#1b5e20]">0 detected (Immutable)</span>
                </div>
              </div>
            </div>

            {/* Split Main Grid: Triage Queue on Left (4.5 cols), Active Docket on Right (7.5 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Left Column: Triage Queue */}
              <div className="lg:col-span-5 flex flex-col gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-[#e0ece2] shadow-xs flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px] text-[#1b5e20]">ballot</span>
                      <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[16px] text-[#151d19]">
                        Triage Queue
                      </h3>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#eef7ee] text-[#1b5e20] text-[11px] font-bold">
                      Live Stream
                    </span>
                  </div>

                  {/* Filter & Ward selectors */}
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <span className="absolute left-2.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#7a887d] text-[16px]">
                        search
                      </span>
                      <input
                        type="text"
                        placeholder="Filter ID or street..."
                        className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[#f4f8f4] border border-[#e0ece2] text-[12px] placeholder-[#7a887d] focus:outline-none"
                      />
                    </div>
                    <select className="px-2.5 py-1.5 rounded-xl bg-[#f4f8f4] border border-[#e0ece2] text-[12px] font-['Plus_Jakarta_Sans'] font-bold text-[#151d19] focus:outline-none">
                      <option>Ward 14 • Maplewood</option>
                      <option>Ward A • Colaba</option>
                      <option>Ward K/W • Andheri</option>
                    </select>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-1.5 pt-1 overflow-x-auto no-scrollbar">
                    {[
                      { key: 'all', label: 'All Pending (38)' },
                      { key: 'ai-verified', label: 'AI Verified (24)' },
                      { key: 'disputed', label: 'Disputed (9)' },
                      { key: 'approved', label: 'Approved' }
                    ].map((pill) => (
                      <button
                        key={pill.key}
                        onClick={() => setQueueFilter(pill.key)}
                        className={`px-3 py-1 rounded-full text-[11px] font-['Plus_Jakarta_Sans'] font-bold whitespace-nowrap transition-all ${
                          queueFilter === pill.key
                            ? 'bg-[#1b5e20] text-white'
                            : 'bg-[#f0f6f1] text-[#414d45] hover:bg-[#e0ece2]'
                        }`}
                      >
                        {pill.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Queue Cards List */}
                <div className="flex flex-col gap-2.5">
                  {TRIAGE_QUEUE_DATA.map((item) => {
                    const isSelected = selectedDocket.id === item.id;
                    const isMismatch = item.matchColor === 'red';
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedDocket(item)}
                        className={`p-3.5 rounded-2xl bg-white border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#1b5e20] ring-2 ring-[#1b5e20]/25 shadow-md'
                            : 'border-[#e0ece2] hover:border-[#b6ccb9] shadow-xs'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono text-[12px] font-bold text-[#151d19]">
                              {item.id}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-['Plus_Jakarta_Sans'] font-bold ${
                                isMismatch
                                  ? 'bg-[#ffdad6] text-[#ba1a1a]'
                                  : 'bg-[#d7e8c3] text-[#1b5e20]'
                              }`}
                            >
                              {isMismatch ? '⚠️ ' : '✓ '}
                              {item.matchScore}
                            </span>
                          </div>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-['Plus_Jakarta_Sans'] font-bold ${
                              item.sla.includes('left')
                                ? 'bg-[#ffdad6] text-[#ba1a1a]'
                                : 'bg-[#f0f6f1] text-[#6f7e73]'
                            }`}
                          >
                            {item.sla}
                          </span>
                        </div>

                        <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-[14px] text-[#151d19] mt-1.5">
                          {item.address}
                        </h4>

                        <div className="flex items-center justify-between text-[11px] text-[#6f7e73] mt-1">
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[14px] text-[#ba1a1a]">
                              dangerous
                            </span>
                            <span className="truncate">{item.hazardType}</span>
                          </div>
                          <span className="truncate max-w-[140px] text-right font-medium text-[#414d45]">
                            {item.contractor}
                          </span>
                        </div>

                        {/* Sign-off Ready footer for top item */}
                        {item.status === 'Sign-off Ready' && (
                          <div className="mt-2.5 pt-2 border-t border-[#f0f4f0] flex items-center justify-between text-[11px]">
                            <span className="font-bold text-[#1b5e20]">Sign-off Ready</span>
                            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[#1b5e20] flex items-center gap-0.5">
                              <span>Inspect Evidence</span>
                              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                            </span>
                          </div>
                        )}
                        {item.status === 'Flagged Discrepancy' && (
                          <div className="mt-2.5 pt-2 border-t border-[#f0f4f0] flex items-center justify-between text-[11px]">
                            <span className="font-bold text-[#ba1a1a]">Landmark Flagged</span>
                            <span className="text-[#ba1a1a] font-bold">Inspect Warning →</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Active Inspection Docket (Inspection Evidence) */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                {/* Header of Active Docket */}
                <div className="p-5 rounded-2xl bg-white border border-[#e0ece2] shadow-xs flex flex-col gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-[#1b5e20] text-white text-[10px] font-['Plus_Jakarta_Sans'] font-extrabold tracking-wider uppercase">
                          Active Docket
                        </span>
                        <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[20px] text-[#151d19]">
                          Inspection Evidence {selectedDocket.id}
                        </h2>
                      </div>
                      <div className="flex items-center gap-1.5 text-[12px] text-[#6f7e73] mt-1">
                        <span className="material-symbols-outlined text-[15px] text-[#1b5e20]">location_on</span>
                        <span>{selectedDocket.address}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#f0f6f1] text-[#414d45] text-[11px] font-['Plus_Jakarta_Sans'] font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">person</span>
                        <span>Citizen: {selectedDocket.citizen}</span>
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#eef7ee] text-[#1b5e20] text-[11px] font-['Plus_Jakarta_Sans'] font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">local_shipping</span>
                        <span>{selectedDocket.contractor}</span>
                      </span>
                    </div>
                  </div>

                  {/* Subhead: Computer Vision Geometric Alignment */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#f0f4f0]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-[#1b5e20]">photo_camera</span>
                      <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-[14px] text-[#151d19]">
                        Computer Vision Geometric Alignment
                      </h4>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#d7e8c3] text-[#1b5e20] text-[11px] font-['Plus_Jakarta_Sans'] font-bold flex items-center gap-1">
                      <span>✨</span>
                      <span>{selectedDocket.homographyConfidence} Homography Confidence</span>
                    </span>
                  </div>

                  {/* DUAL BEFORE / AFTER IMAGE CANVAS WITH HOMOGRAPHY ANCHORS */}
                  <div className="relative w-full rounded-2xl overflow-hidden bg-black border border-[#d2e7d3]">
                    {/* Two Photos Grid */}
                    <div className="grid grid-cols-2 w-full h-64 sm:h-72">
                      {/* Left Photo: Before Fix */}
                      <div className="relative w-full h-full border-r border-white/20 overflow-hidden">
                        <img
                          src={selectedDocket.beforeImage}
                          alt="Before Fix"
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-white text-[10px] font-['Plus_Jakarta_Sans'] font-bold">
                          Before Fix
                        </span>
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2.5 flex flex-col text-white">
                          <span className="font-['Plus_Jakarta_Sans'] font-bold text-[11px]">
                            Citizen Initial Report
                          </span>
                          <span className="text-[10px] text-white/80">
                            {selectedDocket.reportedTime} • {selectedDocket.depth}
                          </span>
                        </div>
                      </div>

                      {/* Right Photo: After Repair */}
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={selectedDocket.afterImage}
                          alt="After Repair"
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-md bg-[#1b5e20] text-white text-[10px] font-['Plus_Jakarta_Sans'] font-bold">
                          After Repair
                        </span>
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2.5 flex flex-col text-white">
                          <span className="font-['Plus_Jakarta_Sans'] font-bold text-[11px]">
                            Contractor Repair Proof
                          </span>
                          <span className="text-[10px] text-white/80">
                            {selectedDocket.repairedTime} • {selectedDocket.repairType}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Center Top Badge: 3/3 Anchors Locked */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-[#1b5e20]/90 backdrop-blur-md text-white text-[10px] font-['Plus_Jakarta_Sans'] font-bold flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a3f69c] animate-ping"></span>
                      <span>{selectedDocket.anchorsLocked}</span>
                    </div>

                    {/* Canvas Overlay for Dotted Lines */}
                    <canvas
                      ref={canvasRef}
                      width={680}
                      height={288}
                      className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    />
                  </div>

                  {/* 4 Sensor Telemetry Breakdown Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedDocket.telemetry.map((tel, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#f8fbf8] border border-[#e0ece2] flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-[#eef7ee] text-[#1b5e20] flex items-center justify-center">
                            <span className="material-symbols-outlined text-[16px]">{tel.icon}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[12px] text-[#151d19]">
                              {tel.name}
                            </span>
                            <span className="text-[11px] text-[#6f7e73] leading-tight">
                              {tel.detail}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-['Plus_Jakarta_Sans'] font-bold ${
                            tel.status === 'Pass'
                              ? 'bg-[#d7e8c3] text-[#1b5e20]'
                              : 'bg-[#ffdad6] text-[#ba1a1a]'
                          }`}
                        >
                          {tel.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Cryptographic SHA-256 Merkle Banner */}
                  <div className="p-3.5 rounded-xl bg-[#f0f6f1] border border-[#d2e7d3] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-[#1b5e20] text-white flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">lock</span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-['Plus_Jakarta_Sans'] font-bold text-[12px] text-[#151d19]">
                            Audit Trail Immutable & Validated
                          </span>
                          <span className="material-symbols-outlined text-[15px] text-[#1b5e20]">
                            verified
                          </span>
                        </div>
                        <span className="font-mono text-[11px] text-[#6f7e73] truncate">
                          SHA-256: {selectedDocket.hash}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={handleVerifyChain}
                      className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#e0ece2] border border-[#c3d9c5] text-[#1b5e20] font-['Plus_Jakarta_Sans'] text-[11px] font-bold flex items-center gap-1 shrink-0 transition-colors"
                    >
                      <span>Inspect Merkle Block</span>
                      <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                    </button>
                  </div>

                  {/* Inspector Sign-off Dropdown & Actions */}
                  <div className="flex flex-col gap-3 pt-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-['Plus_Jakarta_Sans'] font-bold text-[#414d45]">
                        Inspector Sign-off Finding / Justification
                      </label>
                      <select className="w-full px-3 py-2.5 rounded-xl bg-[#f8fbf8] border border-[#e0ece2] text-[13px] font-['Plus_Jakarta_Sans'] text-[#151d19] focus:outline-none">
                        <option>Work fully compliant with municipal road standard SPEC-2024</option>
                        <option>Satisfactory patch with minor edge seam variance (acceptable)</option>
                        <option>Requires thermal re-smoothing on northern seam</option>
                      </select>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 pt-1">
                      <button
                        onClick={handleApprove}
                        className="w-full py-3 rounded-full bg-[#1b5e20] hover:bg-[#256e2b] text-white font-['Plus_Jakarta_Sans'] text-[14px] font-bold shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined text-[18px]">verified</span>
                        <span>Approve Repair & Authorize Payout</span>
                      </button>

                      <div className="flex items-center justify-between">
                        <button
                          onClick={handleRework}
                          className="px-4 py-2 rounded-xl bg-[#eef7ee] hover:bg-[#d7e8c3] text-[#1b5e20] font-['Plus_Jakarta_Sans'] text-[12px] font-bold flex items-center gap-1.5 transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px]">replay</span>
                          <span>Request Rework</span>
                        </button>

                        <button
                          onClick={() => {
                            setActionNotice({
                              type: 'rework',
                              msg: `Claim ${selectedDocket.id} Rejected. Contractor penalized under Section 12-B.`
                            });
                          }}
                          className="text-[12px] font-['Plus_Jakarta_Sans'] font-bold text-[#ba1a1a] hover:underline"
                        >
                          Reject Claim
                        </button>
                      </div>

                      {/* Keyboard shortcut hint */}
                      <div className="flex items-center justify-between text-[10px] text-[#6f7e73] pt-1">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[13px]">keyboard</span>
                          <span>Press <kbd className="px-1.5 py-0.5 bg-white border border-[#d2e7d3] rounded font-mono font-bold">A</kbd> to quick-approve, <kbd className="px-1.5 py-0.5 bg-white border border-[#d2e7d3] rounded font-mono font-bold">R</kbd> to request rework</span>
                        </span>
                        <span className="font-semibold text-[#1b5e20]">Auto-seal upon sign-off</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}

        {/* TAB 2: WARD HEATMAP ANALYTICS */}
        {activeTab === 'ward-heatmap' && (
          <main className="p-6 flex flex-col gap-6">
            {/* Top Breadcrumbs & Filter Bar */}
            <div className="p-4 rounded-2xl bg-white border border-[#e0ece2] shadow-xs flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                {/* Hierarchy Breadcrumb dropdowns */}
                <div className="flex flex-wrap items-center gap-2 text-[12px] font-['Plus_Jakarta_Sans'] font-bold">
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#f0f6f1] border border-[#e0ece2] text-[#151d19]">
                    <span className="material-symbols-outlined text-[16px] text-[#1b5e20]">apartment</span>
                    <span>Ward 14 (Maplewood West)</span>
                    <span className="material-symbols-outlined text-[14px]">expand_more</span>
                  </div>
                  <span className="text-[#6f7e73]">›</span>
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#f0f6f1] border border-[#e0ece2] text-[#151d19]">
                    <span>Zone B (Residential Corridors)</span>
                    <span className="material-symbols-outlined text-[14px]">expand_more</span>
                  </div>
                  <span className="text-[#6f7e73]">›</span>
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#f0f6f1] border border-[#e0ece2] text-[#151d19]">
                    <span>Division 3 (Arterials)</span>
                    <span className="material-symbols-outlined text-[14px]">expand_more</span>
                  </div>
                  <span className="text-[#6f7e73]">›</span>
                  <div className="px-3 py-1.5 rounded-xl bg-[#1b5e20] text-white">
                    <span>● Beat 12 (Elm & Pine Precinct)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-[#6f7e73] uppercase">
                    Telemetry Sync: 2m ago
                  </span>
                  <button className="px-3 py-1.5 rounded-xl bg-[#eef7ee] hover:bg-[#d7e8c3] text-[#1b5e20] text-[12px] font-['Plus_Jakarta_Sans'] font-bold flex items-center gap-1.5 transition-colors">
                    <span className="material-symbols-outlined text-[16px]">file_download</span>
                    <span>Export GeoJSON & PDF</span>
                  </button>
                </div>
              </div>

              {/* Time and Defect Filter Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#f0f4f0]">
                {/* Time Range Tabs */}
                <div className="flex items-center bg-[#f0f6f1] p-1 rounded-xl">
                  {['Last 7 Days', 'Last 30 Days', 'Q3 2024', 'Custom Range'].map((range) => (
                    <button
                      key={range}
                      onClick={() => setTimeRange(range)}
                      className={`px-3 py-1 rounded-lg text-[11px] font-['Plus_Jakarta_Sans'] font-bold transition-all ${
                        timeRange === range || (timeRange === '30d' && range === 'Last 30 Days')
                          ? 'bg-white text-[#1b5e20] shadow-xs'
                          : 'text-[#414d45] hover:text-[#151d19]'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>

                {/* Defect Type Filter Chips */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-[11px] font-['Plus_Jakarta_Sans'] font-bold">
                  <span className="text-[#6f7e73] text-[11px] pr-1">Defects:</span>
                  <button
                    onClick={() => setDefectFilter('potholes')}
                    className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all ${
                      defectFilter === 'potholes'
                        ? 'bg-[#1b5e20] text-white'
                        : 'bg-[#f0f6f1] text-[#414d45]'
                    }`}
                  >
                    <span>●</span>
                    <span>Deep Potholes</span>
                    <span className="px-1.5 rounded bg-black/20 text-[10px]">112</span>
                  </button>
                  <button
                    onClick={() => setDefectFilter('shoulders')}
                    className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all ${
                      defectFilter === 'shoulders'
                        ? 'bg-[#1b5e20] text-white'
                        : 'bg-[#f0f6f1] text-[#414d45]'
                    }`}
                  >
                    <span>Crumbling Shoulders</span>
                    <span className="px-1.5 rounded bg-black/10 text-[10px]">34</span>
                  </button>
                  <button
                    onClick={() => setDefectFilter('manhole')}
                    className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all ${
                      defectFilter === 'manhole'
                        ? 'bg-[#1b5e20] text-white'
                        : 'bg-[#f0f6f1] text-[#414d45]'
                    }`}
                  >
                    <span>Manhole Rims</span>
                    <span className="px-1.5 rounded bg-black/10 text-[10px]">23</span>
                  </button>
                  <button
                    onClick={() => setDefectFilter('heaves')}
                    className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all ${
                      defectFilter === 'heaves'
                        ? 'bg-[#1b5e20] text-white'
                        : 'bg-[#f0f6f1] text-[#414d45]'
                    }`}
                  >
                    <span>Frost Heaves</span>
                    <span className="px-1.5 rounded bg-black/10 text-[10px]">15</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 4 Hazard KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Hazard KPI 1 */}
              <div className="p-4 rounded-2xl bg-white border border-[#e0ece2] shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-['Plus_Jakarta_Sans'] font-bold text-[#6f7e73] tracking-wider uppercase">
                    Active Road Hazards
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#fff4cc] text-[#8a6500] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">warning</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-[32px] font-extrabold font-['Plus_Jakarta_Sans'] text-[#151d19]">
                    184
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#f0f4f0] text-[11px]">
                  <span className="text-[#1b5e20] font-bold flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[14px]">trending_down</span>
                    <span>14% vs last mo</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#f0f6f1] text-[#6f7e73] font-bold">
                    3.8 / km²
                  </span>
                </div>
              </div>

              {/* Hazard KPI 2 */}
              <div className="p-4 rounded-2xl bg-white border border-[#e0ece2] shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-['Plus_Jakarta_Sans'] font-bold text-[#ba1a1a] tracking-wider uppercase">
                    Critical SLA Breach Risk
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">notification_important</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-[32px] font-extrabold font-['Plus_Jakarta_Sans'] text-[#ba1a1a]">
                    6
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#f0f4f0] text-[11px]">
                  <span className="text-[#6f7e73]">Exceeds 48h limit</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#ba1a1a] font-bold">
                    Immediate Dispatch
                  </span>
                </div>
              </div>

              {/* Hazard KPI 3 */}
              <div className="p-4 rounded-2xl bg-white border border-[#e0ece2] shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-['Plus_Jakarta_Sans'] font-bold text-[#6f7e73] tracking-wider uppercase">
                    Median Fix Resolution
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#eef7ee] text-[#1b5e20] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-[32px] font-extrabold font-['Plus_Jakarta_Sans'] text-[#151d19]">
                    34.2 <span className="text-[20px] font-bold">hrs</span>
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#f0f4f0] text-[11px]">
                  <span className="text-[#6f7e73]">Benchmark: &lt; 40.0 hrs</span>
                  <span className="text-[#1b5e20] font-bold">✓ On Track</span>
                </div>
              </div>

              {/* Hazard KPI 4 */}
              <div className="p-4 rounded-2xl bg-white border border-[#e0ece2] shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-['Plus_Jakarta_Sans'] font-bold text-[#6f7e73] tracking-wider uppercase">
                    Repeat Hotspots
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#f0f6f1] text-[#414d45] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">refresh</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-[32px] font-extrabold font-['Plus_Jakarta_Sans'] text-[#151d19]">
                    11
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#f0f4f0] text-[11px]">
                  <span className="text-[#6f7e73]">&gt;2 fixes in 90 days</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#fff4cc] text-[#8a6500] font-bold">
                    Review Alert
                  </span>
                </div>
              </div>
            </div>

            {/* Main Split Analytics Grid: Left Map + Charts (8 cols), Right Scorecards (4 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Left Column (8 cols) */}
              <div className="lg:col-span-8 flex flex-col gap-4">
                {/* GIS Heatmap Map Canvas Card */}
                <div className="p-5 rounded-2xl bg-white border border-[#e0ece2] shadow-xs flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1b5e20]"></span>
                      <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[15px] text-[#151d19]">
                        GIS Street Layer: Ward 14 Grid
                      </h3>
                      <span className="font-mono text-[11px] text-[#6f7e73]">EPSG: 3857</span>
                    </div>

                    {/* Map Layers */}
                    <div className="flex items-center bg-[#f0f6f1] p-0.5 rounded-xl text-[11px] font-['Plus_Jakarta_Sans'] font-bold">
                      <button
                        onClick={() => setMapLayer('heatmap')}
                        className={`px-3 py-1 rounded-lg transition-all ${
                          mapLayer === 'heatmap' ? 'bg-[#1b5e20] text-white shadow-xs' : 'text-[#414d45]'
                        }`}
                      >
                        🔥 Heatmap
                      </button>
                      <button
                        onClick={() => setMapLayer('territories')}
                        className={`px-3 py-1 rounded-lg transition-all ${
                          mapLayer === 'territories' ? 'bg-[#1b5e20] text-white shadow-xs' : 'text-[#414d45]'
                        }`}
                      >
                        🗺️ Territories
                      </button>
                      <button
                        onClick={() => setMapLayer('historical')}
                        className={`px-3 py-1 rounded-lg transition-all ${
                          mapLayer === 'historical' ? 'bg-[#1b5e20] text-white shadow-xs' : 'text-[#414d45]'
                        }`}
                      >
                        🕒 Historical
                      </button>
                    </div>
                  </div>

                  {/* STYLIZED ROAD NETWORK & HEATMAP CANVAS */}
                  <div className="relative w-full h-96 rounded-2xl bg-[#eaf4ec] border border-[#d2e7d3] overflow-hidden flex items-center justify-center">
                    {/* SVG Street Grid lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                      <line x1="80" y1="0" x2="80" y2="400" stroke="#ffffff" strokeWidth="18" />
                      <line x1="200" y1="0" x2="200" y2="400" stroke="#ffffff" strokeWidth="22" />
                      <line x1="360" y1="0" x2="360" y2="400" stroke="#ffffff" strokeWidth="28" strokeDasharray="6 3" />
                      <line x1="520" y1="0" x2="520" y2="400" stroke="#ffffff" strokeWidth="18" />
                      <line x1="0" y1="90" x2="800" y2="90" stroke="#ffffff" strokeWidth="18" />
                      <line x1="0" y1="200" x2="800" y2="200" stroke="#ffffff" strokeWidth="24" />
                      <line x1="0" y1="310" x2="800" y2="310" stroke="#ffffff" strokeWidth="18" strokeDasharray="6 3" />
                    </svg>

                    {/* Heat Glowing Gradient Blobs */}
                    <div className="absolute top-28 left-[330px] w-36 h-48 rounded-full bg-red-500/35 blur-2xl pointer-events-none animate-pulse"></div>
                    <div className="absolute top-16 left-[180px] w-28 h-28 rounded-full bg-amber-400/25 blur-xl pointer-events-none"></div>
                    <div className="absolute bottom-12 left-[480px] w-32 h-32 rounded-full bg-emerald-400/30 blur-2xl pointer-events-none"></div>

                    {/* Street Labels */}
                    <span className="absolute top-1/2 left-[370px] -rotate-90 text-[10px] font-mono tracking-widest text-[#738876] font-bold">
                      OAK RIDGE AVE
                    </span>

                    {/* Hotspot Pin on the Map */}
                    <div className="absolute top-36 left-[350px] z-10 w-7 h-7 rounded-full bg-[#ba1a1a] text-white flex items-center justify-center font-bold text-[12px] shadow-lg ring-4 ring-red-300/60 animate-bounce">
                      !
                    </div>

                    {/* Green Fix Pin */}
                    <div className="absolute bottom-28 left-[280px] z-10 w-6 h-6 rounded-full bg-[#1b5e20] text-white flex items-center justify-center font-bold text-[11px] shadow-md ring-2 ring-emerald-200">
                      ✓
                    </div>

                    {/* INTERACTIVE HOTSPOT POPUP DIALOG (Elm Street Corridor) */}
                    {selectedHotspot && (
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-30 w-84 bg-white/95 backdrop-blur-md rounded-2xl border border-[#d2e7d3] p-4 shadow-xl flex flex-col gap-2.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a]"></span>
                            <h4 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[14px] text-[#151d19]">
                              Elm Street Corridor
                            </h4>
                          </div>
                          <span className="px-2 py-0.5 rounded-md bg-[#ffdad6] text-[#ba1a1a] text-[10px] font-['Plus_Jakarta_Sans'] font-extrabold">
                            Beat 12 Hotspot
                          </span>
                        </div>

                        <p className="text-[11px] text-[#6f7e73] leading-relaxed">
                          Critical wear corridor between 4th Ave & Lakeview. Elevated heavy freight deflection.
                        </p>

                        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#f0f4f0] text-[11px]">
                          <div>
                            <span className="text-[#6f7e73] block text-[10px]">Pothole Count</span>
                            <span className="font-bold text-[#151d19]">14 Active</span>
                          </div>
                          <div>
                            <span className="text-[#6f7e73] block text-[10px]">Rework Notices</span>
                            <span className="font-bold text-[#ba1a1a]">2 Issued</span>
                          </div>
                          <div>
                            <span className="text-[#6f7e73] block text-[10px]">Asphalt Age</span>
                            <span className="font-bold text-[#151d19]">12.4 Yrs</span>
                          </div>
                          <div>
                            <span className="text-[#6f7e73] block text-[10px]">Est. Fix Cost</span>
                            <span className="font-bold text-[#1b5e20]">$4,850</span>
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-[#f8fbf8] border border-[#e0ece2] flex flex-col gap-0.5 text-[10px]">
                          <span className="font-bold text-[#151d19] flex items-center gap-1">
                            <span className="material-symbols-outlined text-[13px] text-[#1b5e20]">construction</span>
                            <span>Engineering Recommendation</span>
                          </span>
                          <span className="text-[#6f7e73]">
                            Milling & 2-inch bitumen overlay recommended. Patch-work no longer cost-effective.
                          </span>
                        </div>

                        <button className="w-full py-2 rounded-xl bg-[#1b5e20] hover:bg-[#256e2b] text-white font-['Plus_Jakarta_Sans'] text-[12px] font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all">
                          <span>Dispatch Overlay Crew</span>
                          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </button>
                      </div>
                    )}

                    {/* Bottom Map Legend & Zoom controls */}
                    <div className="absolute bottom-3 left-3 z-20 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#d2e7d3] flex items-center gap-3 text-[11px] font-bold text-[#414d45]">
                      <span>Density:</span>
                      <span className="flex items-center gap-1 text-[#1b5e20]">
                        <span className="w-2 h-2 rounded-full bg-[#1b5e20]"></span> Low
                      </span>
                      <span className="flex items-center gap-1 text-[#8a6500]">
                        <span className="w-2 h-2 rounded-full bg-[#8a6500]"></span> Med
                      </span>
                      <span className="flex items-center gap-1 text-[#ba1a1a]">
                        <span className="w-2 h-2 rounded-full bg-[#ba1a1a]"></span> Severe
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1 bg-white/90 backdrop-blur-md p-1 rounded-xl border border-[#d2e7d3] text-[11px] font-bold text-[#414d45]">
                      <button className="w-7 h-7 rounded-lg hover:bg-[#f0f6f1] flex items-center justify-center">+</button>
                      <button className="w-7 h-7 rounded-lg hover:bg-[#f0f6f1] flex items-center justify-center">-</button>
                      <button className="px-2 h-7 rounded-lg hover:bg-[#f0f6f1] flex items-center justify-center">3D Tilt</button>
                      <button className="w-7 h-7 rounded-lg hover:bg-[#f0f6f1] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[16px]">my_location</span>
                      </button>
                    </div>
                  </div>

                  {/* 3 Telemetry Data cards below map */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-[#f8fbf8] border border-[#e0ece2] flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#eef7ee] text-[#1b5e20] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">satellite_alt</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-[#6f7e73] font-semibold">Imagery Baseline</span>
                        <span className="font-['Plus_Jakarta_Sans'] font-bold text-[12px] text-[#151d19]">
                          Maplewood Drone Survey (Aug 2024)
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#f8fbf8] border border-[#e0ece2] flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#eef7ee] text-[#1b5e20] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">sensors</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-[#6f7e73] font-semibold">Bus Accelerometer Data</span>
                        <span className="font-['Plus_Jakarta_Sans'] font-bold text-[12px] text-[#151d19]">
                          Line 12 & 44 Telemetry Synced
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#f8fbf8] border border-[#e0ece2] flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#eef7ee] text-[#1b5e20] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">local_police</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-[#6f7e73] font-semibold">Patrol Verification</span>
                        <span className="font-['Plus_Jakarta_Sans'] font-bold text-[12px] text-[#151d19]">
                          Crew 4 Active on Lakeview
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Surface Roughness Index (IRI) Bar Chart */}
                <div className="p-5 rounded-2xl bg-white border border-[#e0ece2] shadow-xs flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px] text-[#1b5e20]">equalizer</span>
                      <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[15px] text-[#151d19]">
                        Ward 14 Arterial Surface Roughness Index (IRI)
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-[#6f7e73]">
                      International Roughness Index (m/km)
                    </span>
                  </div>

                  {/* Bar Chart Bars */}
                  <div className="grid grid-cols-6 gap-3 items-end h-44 pt-4 px-2 border-b border-[#e0ece2]">
                    {/* Elm St: 4.6 (Red, severe) */}
                    <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                      <span className="text-[11px] font-bold text-[#ba1a1a]">4.6</span>
                      <div className="w-full bg-[#ba1a1a] rounded-t-lg" style={{ height: '90%' }}></div>
                      <span className="text-[10px] font-['Plus_Jakarta_Sans'] font-bold text-[#414d45] truncate w-full text-center">
                        Elm St
                      </span>
                    </div>

                    {/* Pine Crest: 3.1 (Muted) */}
                    <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                      <span className="text-[11px] font-bold text-[#7a887d]">3.1</span>
                      <div className="w-full bg-[#a8bba9] rounded-t-lg" style={{ height: '62%' }}></div>
                      <span className="text-[10px] font-['Plus_Jakarta_Sans'] font-bold text-[#414d45] truncate w-full text-center">
                        Pine Crest
                      </span>
                    </div>

                    {/* Lakeview: 1.8 (Good) */}
                    <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                      <span className="text-[11px] font-bold text-[#1b5e20]">1.8</span>
                      <div className="w-full bg-[#99e2a4] rounded-t-lg" style={{ height: '36%' }}></div>
                      <span className="text-[10px] font-['Plus_Jakarta_Sans'] font-bold text-[#414d45] truncate w-full text-center">
                        Lakeview
                      </span>
                    </div>

                    {/* Oak Ridge: 2.2 (Medium) */}
                    <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                      <span className="text-[11px] font-bold text-[#1b5e20]">2.2</span>
                      <div className="w-full bg-[#72c781] rounded-t-lg" style={{ height: '44%' }}></div>
                      <span className="text-[10px] font-['Plus_Jakarta_Sans'] font-bold text-[#414d45] truncate w-full text-center">
                        Oak Ridge
                      </span>
                    </div>

                    {/* Maplewood: 1.2 (Excellent) */}
                    <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                      <span className="text-[11px] font-bold text-[#1b5e20]">1.2</span>
                      <div className="w-full bg-[#1b5e20] rounded-t-lg" style={{ height: '24%' }}></div>
                      <span className="text-[10px] font-['Plus_Jakarta_Sans'] font-bold text-[#414d45] truncate w-full text-center">
                        Maplewood
                      </span>
                    </div>

                    {/* 8th Precinct: 2.9 (Muted) */}
                    <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                      <span className="text-[11px] font-bold text-[#7a887d]">2.9</span>
                      <div className="w-full bg-[#d2e2d3] rounded-t-lg" style={{ height: '58%' }}></div>
                      <span className="text-[10px] font-['Plus_Jakarta_Sans'] font-bold text-[#414d45] truncate w-full text-center">
                        8th Precinct
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (4 cols) */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                {/* 1. Beat SLA Performance */}
                <div className="p-4 rounded-2xl bg-white border border-[#e0ece2] shadow-xs flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[14px] text-[#151d19]">
                      Beat SLA Performance
                    </h3>
                    <span className="text-[11px] font-bold text-[#1b5e20]">Ward 14: 92.4%</span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div>
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className="font-bold text-[#151d19]">Beat 12 (Elm Corridor)</span>
                        <span className="font-bold text-[#ba1a1a]">78.2% (Behind)</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#ffdad6] overflow-hidden">
                        <div className="h-full bg-[#ba1a1a] rounded-full" style={{ width: '78.2%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className="font-bold text-[#151d19]">Beat 11 (North Hills)</span>
                        <span className="font-bold text-[#1b5e20]">98.1%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#eef7ee] overflow-hidden">
                        <div className="h-full bg-[#1b5e20] rounded-full" style={{ width: '98.1%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className="font-bold text-[#151d19]">Beat 13 (Maple Gardens)</span>
                        <span className="font-bold text-[#1b5e20]">95.0%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#eef7ee] overflow-hidden">
                        <div className="h-full bg-[#1b5e20] rounded-full" style={{ width: '95.0%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Contractor Scorecard */}
                <div className="p-4 rounded-2xl bg-white border border-[#e0ece2] shadow-xs flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[17px] text-[#1b5e20]">engineering</span>
                      <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[14px] text-[#151d19]">
                        Contractor Scorecard
                      </h3>
                    </div>
                    <span className="text-[11px] font-semibold text-[#6f7e73]">Ward 14 Active</span>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {/* Contractor 1: Apex Paving */}
                    <div className="p-3 rounded-xl bg-[#f8fbf8] border border-[#e0ece2] flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#1b5e20] text-white flex items-center justify-center font-bold text-[11px]">
                            A
                          </div>
                          <div>
                            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[12px] text-[#151d19] block leading-tight">
                              Apex Paving Ltd.
                            </span>
                            <span className="text-[10px] text-[#6f7e73]">42 repairs completed</span>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-[#d7e8c3] text-[#1b5e20] text-[10px] font-bold">
                          Grade A
                        </span>
                      </div>
                      <div className="grid grid-cols-3 text-center pt-1 border-t border-[#f0f4f0] text-[10px]">
                        <div>
                          <span className="text-[#6f7e73] block">On-Time</span>
                          <span className="font-bold text-[#1b5e20]">96.8%</span>
                        </div>
                        <div>
                          <span className="text-[#6f7e73] block">Failure</span>
                          <span className="font-bold text-[#151d19]">0.8%</span>
                        </div>
                        <div>
                          <span className="text-[#6f7e73] block">Avg Turn</span>
                          <span className="font-bold text-[#151d19]">22 hrs</span>
                        </div>
                      </div>
                    </div>

                    {/* Contractor 2: NorthStar Infra */}
                    <div className="p-3 rounded-xl bg-[#f8fbf8] border border-[#e0ece2] flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#3d7a46] text-white flex items-center justify-center font-bold text-[11px]">
                            B+
                          </div>
                          <div>
                            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[12px] text-[#151d19] block leading-tight">
                              NorthStar Infra
                            </span>
                            <span className="text-[10px] text-[#6f7e73]">31 repairs completed</span>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-[#eef7ee] text-[#1b5e20] text-[10px] font-bold">
                          Grade B+
                        </span>
                      </div>
                      <div className="grid grid-cols-3 text-center pt-1 border-t border-[#f0f4f0] text-[10px]">
                        <div>
                          <span className="text-[#6f7e73] block">On-Time</span>
                          <span className="font-bold text-[#1b5e20]">89.2%</span>
                        </div>
                        <div>
                          <span className="text-[#6f7e73] block">Failure</span>
                          <span className="font-bold text-[#ba1a1a]">3.2%</span>
                        </div>
                        <div>
                          <span className="text-[#6f7e73] block">Avg Turn</span>
                          <span className="font-bold text-[#151d19]">36 hrs</span>
                        </div>
                      </div>
                    </div>

                    {/* Contractor 3: QuickPatch Co. */}
                    <div className="p-3 rounded-xl bg-[#fff8f7] border border-[#ffdad6] flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#ba1a1a] text-white flex items-center justify-center font-bold text-[11px]">
                            C
                          </div>
                          <div>
                            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[12px] text-[#151d19] block leading-tight">
                              QuickPatch Co. 🚩
                            </span>
                            <span className="text-[10px] text-[#ba1a1a] font-bold">Flagged for Audit</span>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#ba1a1a] text-[10px] font-bold">
                          Grade C
                        </span>
                      </div>
                      <div className="grid grid-cols-3 text-center pt-1 border-t border-[#fce4e4] text-[10px]">
                        <div>
                          <span className="text-[#6f7e73] block">On-Time</span>
                          <span className="font-bold text-[#ba1a1a]">74.5%</span>
                        </div>
                        <div>
                          <span className="text-[#6f7e73] block">Repeat Fail</span>
                          <span className="font-bold text-[#ba1a1a]">8.1%</span>
                        </div>
                        <div>
                          <span className="text-[#6f7e73] block">Avg Turn</span>
                          <span className="font-bold text-[#151d19]">47 hrs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Chronic Wear Hotspots */}
                <div className="p-4 rounded-2xl bg-white border border-[#e0ece2] shadow-xs flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[17px] text-[#ba1a1a]">pin_drop</span>
                      <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[14px] text-[#151d19]">
                        Chronic Wear Hotspots
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold text-[#ba1a1a]">11 Total</span>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <div className="p-3 rounded-xl bg-[#fff8f7] border border-[#ffdad6] flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-['Plus_Jakarta_Sans'] font-bold text-[12px] text-[#151d19]">
                          342–380 Elm Street
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#ba1a1a] text-[10px] font-bold">
                          3 Reports in 60d
                        </span>
                      </div>
                      <p className="text-[11px] text-[#6f7e73] leading-relaxed">
                        Sub-base water erosion suspected beneath east lane storm runoff inlet.
                      </p>
                      <div className="flex items-center justify-between pt-1 border-t border-[#fce4e4] text-[10px]">
                        <span className="text-[#6f7e73]">Last Patched: Oct 12 by QuickPatch</span>
                        <button className="font-bold text-[#1b5e20] hover:underline">
                          Order Core Sample
                        </button>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#fffbf2] border border-[#ffe0b2] flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-['Plus_Jakarta_Sans'] font-bold text-[12px] text-[#151d19]">
                          Oak Ridge & 4th Intersection
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-[#fff3e0] text-[#e65100] text-[10px] font-bold">
                          2 Reports in 45d
                        </span>
                      </div>
                      <p className="text-[11px] text-[#6f7e73] leading-relaxed">
                        Sunken manhole recurring displacement caused by heavy municipal bus turning radius.
                      </p>
                      <div className="flex items-center justify-between pt-1 border-t border-[#ffe8cc] text-[10px]">
                        <span className="text-[#6f7e73]">Last Patched: Oct 29 by NorthStar</span>
                        <button className="font-bold text-[#1b5e20] hover:underline">
                          Adjust Casting
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}

        {/* TAB 3: AUDIT LEDGER (Dedicated Merkle Block Explorer) */}
        {activeTab === 'audit-ledger' && (
          <main className="p-6 flex flex-col gap-4 max-w-5xl">
            <div className="p-5 rounded-2xl bg-white border border-[#e0ece2] shadow-xs flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[22px] text-[#1b5e20]">lock</span>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[18px] text-[#151d19]">
                    Tamper-Evident SHA-256 Audit Chain
                  </h3>
                </div>
                <button
                  onClick={handleVerifyChain}
                  disabled={isVerifyingChain}
                  className="px-4 py-2 rounded-xl bg-[#1b5e20] text-white text-[12px] font-['Plus_Jakarta_Sans'] font-bold flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <span className={`material-symbols-outlined text-[16px] ${isVerifyingChain ? 'animate-spin' : ''}`}>
                    {isVerifyingChain ? 'sync' : 'verified_user'}
                  </span>
                  <span>{isVerifyingChain ? 'Verifying Hashes...' : 'Re-verify Block Integrity'}</span>
                </button>
              </div>

              {chainVerified && (
                <div className="p-3 rounded-xl bg-[#d7e8c3] text-[#1b5e20] font-bold text-[12px] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>1,429 Blocks Cryptographically Validated. Zero Merkle discrepancies found.</span>
                </div>
              )}

              <div className="flex flex-col gap-2 mt-2">
                {[
                  { block: 1429, hash: "e7a4f9104c89a01f...9f01", event: "OFFICER_SIGN_OFF", actor: "Elena Rostova (ID-84)", time: "2 mins ago" },
                  { block: 1428, hash: "3d18e9842fbc401e...b401", event: "AI_HOMOGRAPHY_MATCH", actor: "CV Engine v2.4", time: "14 mins ago" },
                  { block: 1427, hash: "11e9a21bcf87c55e...7c55", event: "CONTRACTOR_PROOF_SUBMIT", actor: "Apex Paving (Crew #4)", time: "22 mins ago" },
                  { block: 1426, hash: "9a21bcf87c55e318...8f7b", event: "CITIZEN_REPORT_SUBMIT", actor: "Maya S. (Citizen)", time: "2 days ago" }
                ].map((b) => (
                  <div key={b.block} className="p-3 rounded-xl bg-[#f8fbf8] border border-[#e0ece2] flex items-center justify-between text-[12px]">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-[#1b5e20]">Block #{b.block}</span>
                      <span className="font-bold text-[#151d19]">{b.event}</span>
                      <span className="text-[#6f7e73]">({b.actor})</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-[11px] text-[#6f7e73]">
                      <span className="bg-white px-2 py-0.5 rounded border border-[#e0ece2]">{b.hash}</span>
                      <span>{b.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
