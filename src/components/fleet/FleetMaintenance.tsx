import React, { useState } from 'react';
import { useTMS } from '../../context/TMSContext';
import { 
  Wrench, ShieldCheck, AlertTriangle, Calendar, 
  Gauge, CheckCircle2, Search, Filter, Truck 
} from 'lucide-react';

export const FleetMaintenance: React.FC = () => {
  const { vehicles } = useTMS();
  const [searchTerm, setSearchTerm] = useState('');

  // Tính số ngày còn lại đến hạn đăng kiểm
  const getDaysRemaining = (expiryDateStr: string) => {
    const today = new Date('2026-11-13'); // Theo mốc thời gian hệ thống
    const expiry = new Date(expiryDateStr);
    const diffTime = expiry.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const filteredVehicles = vehicles.filter(v => {
    if (!searchTerm) return true;
    const t = searchTerm.toLowerCase();
    return (
      v.plateNumber.toLowerCase().includes(t) ||
      v.model.toLowerCase().includes(t) ||
      v.driverName.toLowerCase().includes(t)
    );
  });

  return (
    <div className="space-y-4">
      {/* Top Banner & Search */}
      <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Wrench className="w-4 h-4 text-cyan-400" />
            Hồ Sơ Kỹ Thuật Phương Tiện &amp; Cảnh Báo An Toàn Định Kỳ
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Tự động giám sát hạn Đăng kiểm, Bảo hiểm TNDS và Chu kỳ bảo dưỡng theo km lăn bánh (Odometer)
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-950 px-3 py-2 rounded-xl border border-slate-700 w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm biển số, dòng xe, tài xế..."
            className="bg-transparent text-xs text-white placeholder-slate-500 w-full focus:outline-none"
          />
        </div>
      </div>

      {/* Grid thẻ xe theo dõi kỹ thuật */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVehicles.map(vehicle => {
          const regDays = getDaysRemaining(vehicle.registrationExpiry);
          const insDays = getDaysRemaining(vehicle.insuranceExpiry);

          // Tính % km đến hạn bảo dưỡng
          const kmInterval = vehicle.nextServiceOdo - vehicle.lastServiceOdo;
          const kmDriven = vehicle.odometerKm - vehicle.lastServiceOdo;
          const servicePct = Math.min(Math.round((kmDriven / kmInterval) * 100), 100);
          const kmRemaining = Math.max(vehicle.nextServiceOdo - vehicle.odometerKm, 0);

          return (
            <div
              key={vehicle.id}
              className={`bg-slate-900/90 rounded-2xl border p-4 shadow-md space-y-3.5 transition-all ${
                regDays <= 7
                  ? 'border-rose-500/80 shadow-rose-950/30'
                  : regDays <= 30
                  ? 'border-amber-500/60'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Header: Biển số & Chủng loại */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-black text-sm text-white bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {vehicle.plateNumber}
                    </span>
                    {vehicle.trailerPlate && (
                      <span className="font-mono text-[10px] text-cyan-300 bg-blue-950 px-1.5 py-0.5 rounded border border-blue-900">
                        {vehicle.trailerPlate}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">{vehicle.model}</div>
                </div>

                <span className="text-[10px] font-mono text-slate-300 bg-slate-800 px-2 py-0.5 rounded">
                  Tải: {vehicle.maxPayloadTons} Tấn
                </span>
              </div>

              {/* Odometer & Thanh bảo dưỡng định kỳ */}
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Gauge className="w-3.5 h-3.5 text-cyan-400" /> Odometer tổng:
                  </span>
                  <span className="font-mono font-bold text-white text-xs">
                    {vehicle.odometerKm.toLocaleString('vi-VN')} km
                  </span>
                </div>

                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">Chu kỳ bảo dưỡng kế tiếp:</span>
                    <span className={`font-mono font-bold ${kmRemaining <= 1000 ? 'text-rose-400' : 'text-slate-300'}`}>
                      Còn {kmRemaining.toLocaleString('vi-VN')} km
                    </span>
                  </div>

                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        servicePct >= 90 ? 'bg-rose-500' : servicePct >= 75 ? 'bg-amber-500' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${servicePct}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Hạn Đăng Kiểm & Bảo Hiểm */}
              <div className="space-y-2 text-xs">
                {/* Đăng kiểm */}
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-slate-300 text-[11px]">Hạn Đăng kiểm:</span>
                  </div>
                  <div className="text-right">
                    <span className={`font-mono font-bold text-[11px] ${
                      regDays <= 7 ? 'text-rose-400 font-extrabold' : regDays <= 30 ? 'text-amber-400' : 'text-emerald-400'
                    }`}>
                      {vehicle.registrationExpiry} ({regDays > 0 ? `Còn ${regDays} ngày` : 'QUÁ HẠN'})
                    </span>
                  </div>
                </div>

                {/* Bảo hiểm */}
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-slate-300 text-[11px]">Hạn Bảo hiểm:</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-slate-300 text-[11px]">
                      {vehicle.insuranceExpiry} (Còn {insDays} ngày)
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer status notice */}
              {regDays <= 7 ? (
                <div className="bg-rose-950/60 p-2 rounded-xl border border-rose-800/60 text-[10px] text-rose-300 flex items-center gap-1.5 font-bold">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                  CẢNH BÁO: Phải đặt lịch đưa xe vào Trạm Đăng kiểm 15-01S Đình Vũ ngay!
                </div>
              ) : (
                <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1 border-t border-slate-800">
                  <span>Tài xế: {vehicle.driverName}</span>
                  <span className="text-emerald-400">✓ Đủ điều kiện lăn bánh</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
