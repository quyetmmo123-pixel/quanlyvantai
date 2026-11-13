import React from 'react';
import { TMSProvider, useTMS } from './context/TMSContext';
import { Header } from './components/common/Header';
import { ToastContainer } from './components/common/Toast';
import { DirectorDashboard } from './components/director/DirectorDashboard';
import { DispatchBoard } from './components/dispatcher/DispatchBoard';
import { DriverMobileView } from './components/driver/DriverMobileView';
import { CustomerPortal } from './components/customer/CustomerPortal';
import { FleetTechView } from './components/fleet/FleetTechView';
import { Truck, ShieldCheck, Heart, Radio, MapPin, PhoneCall } from 'lucide-react';

const MainContent: React.FC = () => {
  const { activeRole } = useTMS();

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      {activeRole === 'DIRECTOR' && <DirectorDashboard />}
      {activeRole === 'DISPATCHER' && <DispatchBoard />}
      {activeRole === 'DRIVER' && <DriverMobileView />}
      {activeRole === 'CUSTOMER' && <CustomerPortal />}
      {activeRole === 'FLEET_TECH' && <FleetTechView />}
    </main>
  );
};

export const App: React.FC = () => {
  return (
    <TMSProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        <Header />
        
        <div className="flex-1">
          <MainContent />
        </div>

        {/* Global Toast Container */}
        <ToastContainer />

        {/* Modern Logistics Footer */}
        <footer className="bg-slate-950 border-t border-slate-900 py-6 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-cyan-400 flex items-center justify-center font-bold">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-slate-300">CÔNG TY TNHH ĐẦU TƯ VÀ XUẤT NHẬP KHẨU NNP</strong>
                <div className="text-[11px] text-slate-500">
                  Hệ thống Quản lý Vận tải NNP TMS • Đội xe Cảng Hải Phòng &amp; Hành lang công nghiệp phía Bắc
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-[11px]">
              <span className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Trụ sở: Đình Vũ, Hải An, Hải Phòng
              </span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" /> Tổng đài: 1900.8899
              </span>
              <span className="text-slate-600">
                © 2026 NNP Logistics. Bản quyền giải pháp TMS tối ưu phương tiện.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </TMSProvider>
  );
};

export default App;
