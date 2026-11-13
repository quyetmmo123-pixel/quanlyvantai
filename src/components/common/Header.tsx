import React, { useState, useEffect } from 'react';
import { useTMS } from '../../context/TMSContext';
import { UserRole } from '../../types';
import { 
  Truck, ShieldCheck, Activity, Users, Smartphone, 
  Building2, Wrench, Bell, AlertTriangle, Radio, 
  MapPin, Clock, Fuel, Sparkles
} from 'lucide-react';

export const Header: React.FC = () => {
  const { activeRole, setActiveRole, bottleneckAlerts, smartSuggestions, vehicles } = useTMS();
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('vi-VN', { hour12: false }) + ' - ' + now.toLocaleDateString('vi-VN'));
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const unappliedSuggestions = smartSuggestions.filter(s => !s.isApplied).length;
  const onlineVehicles = vehicles.filter(v => v.status !== 'MAINTENANCE').length;

  const roles: Array<{ id: UserRole; label: string; icon: any; badge?: string; desc: string }> = [
    { 
      id: 'DIRECTOR', 
      label: 'Ban Giám đốc', 
      icon: Activity, 
      desc: 'KPI Hiệu suất & Báo cáo' 
    },
    { 
      id: 'DISPATCHER', 
      label: 'Điều độ viên', 
      icon: Radio, 
      badge: unappliedSuggestions > 0 ? `${unappliedSuggestions} gợi ý` : undefined,
      desc: 'Điều hành & Ghép hàng' 
    },
    { 
      id: 'DRIVER', 
      label: 'Tài xế', 
      icon: Smartphone, 
      desc: 'Giao diện Mobile App' 
    },
    { 
      id: 'CUSTOMER', 
      label: 'Khách hàng', 
      icon: Building2, 
      desc: 'Đặt xe & Tra cứu e-POD' 
    },
    { 
      id: 'FLEET_TECH', 
      label: 'Kỹ thuật & Nhiên liệu', 
      icon: Wrench, 
      badge: bottleneckAlerts.length > 0 ? `${bottleneckAlerts.length} nghẽn` : undefined,
      desc: 'Hồ sơ xe & Định mức dầu' 
    }
  ];

  return (
    <header className="bg-slate-950/95 border-b border-slate-800/80 sticky top-0 z-40 backdrop-blur-md shadow-lg shadow-black/30">
      {/* Top Banner / Ticker */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 px-4 py-1.5 border-b border-blue-900/40 text-[11px] text-slate-300 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-medium text-blue-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Hệ thống GPS Live: <strong>{onlineVehicles}/{vehicles.length} Phương tiện online</strong> (Trục Hải Phòng - Hà Nội - Bắc Ninh)
          </span>
          <span className="hidden md:inline-block text-slate-500">|</span>
          <span className="hidden md:flex items-center gap-1 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Cụm Cảng Hải Phòng: Cảng Đình Vũ • Tân Vũ • Lạch Huyện • Chùa Vẽ
          </span>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          {unappliedSuggestions > 0 && (
            <span className="bg-blue-900/80 text-blue-200 px-2 py-0.5 rounded text-[10px] font-semibold flex items-center gap-1 border border-blue-700/60 animate-bounce">
              <Sparkles className="w-3 h-3 text-amber-300" /> {unappliedSuggestions} Đề xuất ghép hàng thông minh đang chờ duyệt
            </span>
          )}
          <span className="flex items-center gap-1 font-mono text-slate-300">
            <Clock className="w-3.5 h-3.5 text-slate-400" /> {time || '13/11/2026'}
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 flex items-center justify-center shadow-lg shadow-blue-500/20 border border-blue-400/30">
            <Truck className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-black tracking-wider text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-200">
                NNP LOGISTICS <span className="text-cyan-400 font-extrabold text-sm ml-1 px-1.5 py-0.5 rounded bg-blue-950 border border-blue-800">TMS</span>
              </h1>
            </div>
            <p className="text-[11px] text-slate-400 font-medium truncate max-w-xs md:max-w-none">
              CÔNG TY TNHH ĐẦU TƯ VÀ XUẤT NHẬP KHẨU NNP • <span className="text-cyan-300">Tối ưu hiệu quả phương tiện vận tải</span>
            </p>
          </div>
        </div>

        {/* Role Switcher */}
        <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 shadow-inner overflow-x-auto max-w-full">
          {roles.map(r => {
            const Icon = r.icon;
            const isActive = activeRole === r.id;
            return (
              <button
                key={r.id}
                onClick={() => setActiveRole(r.id)}
                className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <div className="text-left hidden sm:block">
                  <div>{r.label}</div>
                </div>
                {r.badge && (
                  <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-amber-400 text-slate-950' : 'bg-red-500/90 text-white'
                  }`}>
                    {r.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
