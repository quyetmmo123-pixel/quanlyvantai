import React, { useState } from 'react';
import { Wrench, Fuel, ShieldAlert } from 'lucide-react';
import { FleetMaintenance } from './FleetMaintenance';
import { FuelAuditTable } from './FuelAuditTable';

export const FleetTechView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'MAINTENANCE' | 'FUEL_AUDIT'>('MAINTENANCE');

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Tab Switcher */}
      <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-2xl border border-slate-800 w-fit">
        <button
          onClick={() => setActiveTab('MAINTENANCE')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'MAINTENANCE'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Wrench className="w-4 h-4" /> Hồ Sơ Phương Tiện &amp; Cảnh Báo Đăng Kiểm
        </button>

        <button
          onClick={() => setActiveTab('FUEL_AUDIT')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'FUEL_AUDIT'
              ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Fuel className="w-4 h-4" /> Quản Lý &amp; Đối Soát Định Mức Nhiên Liệu
        </button>
      </div>

      {activeTab === 'MAINTENANCE' ? <FleetMaintenance /> : <FuelAuditTable />}
    </div>
  );
};
