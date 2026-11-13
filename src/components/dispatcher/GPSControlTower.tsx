import React, { useState } from 'react';
import { useTMS } from '../../context/TMSContext';
import { 
  MapPin, AlertTriangle, Radio, Navigation, Clock, 
  Fuel, ShieldAlert, CheckCircle, RefreshCw, PhoneCall, Gauge, Truck 
} from 'lucide-react';

export const GPSControlTower: React.FC = () => {
  const { vehicles, bottleneckAlerts, resolveBottleneck } = useTMS();
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(vehicles[0]?.id || null);

  const selectedVehicle = vehicles.find(v => v.id === selectedVehicleId) || vehicles[0];

  // Các điểm mốc hành lang vận tải Bắc Bộ
  const waypoints = [
    { name: 'Cảng Quốc tế Lạch Huyện (TC-HICT)', x: 92, y: 65, type: 'PORT' },
    { name: 'Cảng Đình Vũ & Tân Vũ', x: 80, y: 70, type: 'PORT' },
    { name: 'Cảng Chùa Vẽ & Hoàng Diệu', x: 74, y: 60, type: 'PORT' },
    { name: 'KCN Tràng Duệ (LG)', x: 65, y: 58, type: 'IZ' },
    { name: 'KCN Đại An (Hải Dương)', x: 48, y: 55, type: 'IZ' },
    { name: 'KCN Phố Nối (Hưng Yên)', x: 32, y: 62, type: 'IZ' },
    { name: 'ICD Tiên Sơn (Bắc Ninh)', x: 26, y: 38, type: 'ICD' },
    { name: 'KCN Quế Võ (Bắc Ninh)', x: 30, y: 32, type: 'IZ' },
    { name: 'KCN Yên Phong (Samsung)', x: 18, y: 25, type: 'IZ' },
    { name: 'ICD Mỹ Đình / KCN Đài Tư (Hà Nội)', x: 12, y: 50, type: 'ICD' }
  ];

  return (
    <div className="space-y-6">
      {/* BẢNG CẢNH BÁO ĐIỂM NGHẼN (PORT/DEPOT BOTTLENECK ALERTS) */}
      {bottleneckAlerts.length > 0 && (
        <div className="bg-rose-950/40 border border-rose-500/50 p-4 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping"></span>
              <AlertTriangle className="w-5 h-5 text-rose-400" />
              <h3 className="text-sm font-bold text-white">
                Cảnh Báo Điểm Nghẽn Thời Gian Thực ({bottleneckAlerts.length} phương tiện dừng đỗ quá thời gian quy định)
              </h3>
            </div>
            <span className="text-[11px] bg-rose-900 text-rose-200 px-2 py-0.5 rounded font-mono font-semibold">
              Ngưỡng quy định: Tối đa 90 phút tại Cảng/Kho
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {bottleneckAlerts.map(alert => (
              <div 
                key={alert.id}
                className="bg-slate-900/90 p-3.5 rounded-xl border border-rose-700/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-rose-300 font-mono text-sm bg-rose-950 px-2 py-0.5 rounded border border-rose-800">
                      {alert.vehiclePlate}
                    </span>
                    <span className="text-rose-400 font-bold bg-rose-500/20 px-2 py-0.5 rounded">
                      Dừng đỗ: {alert.waitDurationMinutes} phút / Giới hạn {alert.thresholdMinutes}p
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5 inline text-rose-400 mr-1" />
                    {alert.location}
                  </div>

                  <p className="text-[11px] text-slate-400 italic mb-3">
                    {alert.reason}
                  </p>

                  <div className="text-[11px] text-slate-400 mb-3 flex items-center justify-between">
                    <span>Tài xế: <strong className="text-slate-200">{alert.driverName}</strong></span>
                    <a href={`tel:${alert.driverPhone}`} className="text-cyan-400 hover:underline flex items-center gap-1">
                      <PhoneCall className="w-3 h-3" /> {alert.driverPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
                  <button
                    onClick={() => resolveBottleneck(alert.id)}
                    className="flex-1 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-rose-900/40"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Hối thúc điều độ cảng / Đổi cổng kiểm hóa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* KHÔNG GIAN BẢN ĐỒ GIÁM SÁT HÀNH TRÌNH GPS MÔ PHỎNG */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bản đồ Corridor phía Bắc (2 cột) */}
        <div className="lg:col-span-2 bg-slate-900/90 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                <h3 className="text-sm font-bold text-white">
                  Bản Đồ Giám Sát Vận Tải Trực Tuyến: Trục Cụm Cảng Hải Phòng ↔ Hà Nội ↔ Bắc Ninh
                </h3>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Cập nhật toạ độ GPS tần suất 10 giây/lần • Tích hợp cảm biến dầu và tốc độ động cơ
              </p>
            </div>
            <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700">
              Cao tốc 5B &amp; QL5A
            </span>
          </div>

          {/* Khung bản đồ đồ họa SVG mô phỏng không gian địa lý */}
          <div className="relative w-full h-80 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden select-none">
            {/* Lưới toạ độ nền */}
            <svg className="w-full h-full opacity-20">
              <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#38bdf8" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Tuyến đường Cao tốc Hải Phòng - Hà Nội & QL18 (Đường cao tốc) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Cao tốc 5B: Hải Phòng -> Hưng Yên -> Hà Nội */}
              <path
                d="M 80% 70% Q 55% 65% 32% 62% T 12% 50%"
                fill="none"
                stroke="#1e3a8a"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M 80% 70% Q 55% 65% 32% 62% T 12% 50%"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                strokeLinecap="round"
              />

              {/* Tuyến kết nối sang Bắc Ninh (Yên Phong, Quế Võ) */}
              <path
                d="M 55% 65% Q 40% 45% 26% 38% T 18% 25%"
                fill="none"
                stroke="#1e3a8a"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M 55% 65% Q 40% 45% 26% 38% T 18% 25%"
                fill="none"
                stroke="#a855f7"
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeLinecap="round"
              />
            </svg>

            {/* Các điểm nút Waypoints (Cảng & KCN) */}
            {waypoints.map((wp, i) => (
              <div
                key={i}
                style={{ left: `${wp.x}%`, top: `${wp.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10"
              >
                <div className={`w-3.5 h-3.5 rounded-full border-2 ${
                  wp.type === 'PORT' ? 'bg-cyan-500 border-white' : wp.type === 'IZ' ? 'bg-amber-500 border-white' : 'bg-purple-500 border-white'
                } shadow-md`}></div>
                <span className="text-[9px] font-bold text-slate-300 bg-slate-900/90 px-1.5 py-0.5 rounded border border-slate-700 mt-1 whitespace-nowrap shadow pointer-events-none group-hover:text-cyan-300">
                  {wp.name}
                </span>
              </div>
            ))}

            {/* Các xe vận tải NNP trên tuyến */}
            {vehicles.map(v => {
              // Tọa độ giả lập theo vị trí
              let left = '50%';
              let top = '50%';
              if (v.plateNumber === '15H-028.66') { left = '54%'; top = '65%'; }
              else if (v.plateNumber === '15H-019.52') { left = '20%'; top = '28%'; }
              else if (v.plateNumber === '15C-229.80') { left = '78%'; top = '68%'; }
              else if (v.plateNumber === '15C-338.19') { left = '81%'; top = '72%'; }
              else if (v.plateNumber === '15H-031.95') { left = '28%'; top = '36%'; }
              else if (v.plateNumber === '15H-052.77') { left = '45%'; top = '64%'; }
              else { left = '75%'; top = '62%'; }

              const isSelected = selectedVehicle?.id === v.id;

              return (
                <div
                  key={v.id}
                  onClick={() => setSelectedVehicleId(v.id)}
                  style={{ left, top }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-20 ${
                    isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                  }`}
                >
                  <div className={`relative p-1.5 rounded-full border-2 shadow-xl ${
                    v.status === 'BOTTLENECK' 
                      ? 'bg-rose-600 border-white animate-bounce' 
                      : v.status === 'EMPTY_RUN'
                      ? 'bg-amber-500 border-white'
                      : v.status === 'IN_TRANSIT'
                      ? 'bg-blue-600 border-cyan-300'
                      : 'bg-emerald-600 border-white'
                  }`}>
                    <Truck className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shadow mt-1 whitespace-nowrap ${
                    isSelected ? 'bg-cyan-400 text-slate-950 border border-white' : 'bg-slate-900/90 text-slate-200 border border-slate-700'
                  }`}>
                    {v.plateNumber}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chú giải bản đồ */}
          <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800 gap-2">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span> Cảng biển</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Khu công nghiệp (IZ)</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span> Cảng cạn ICD</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Có hàng</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Chạy rỗng</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Nghẽn cảng</span>
            </div>
          </div>
        </div>

        {/* Cửa sổ chi tiết xe được chọn (Telematics Detail Card - 1 cột) */}
        <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-400">Dữ liệu Giám sát Xe (Telematics)</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                selectedVehicle.status === 'IN_TRANSIT' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' :
                selectedVehicle.status === 'EMPTY_RUN' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' :
                selectedVehicle.status === 'BOTTLENECK' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' :
                'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              }`}>
                {selectedVehicle.status === 'IN_TRANSIT' ? 'ĐANG CHỞ HÀNG' :
                 selectedVehicle.status === 'EMPTY_RUN' ? 'ĐANG CHẠY RỖNG' :
                 selectedVehicle.status === 'BOTTLENECK' ? 'NGHẼN DỪNG ĐỖ' : 'XẾP DỠ CẢNG'}
              </span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-4">
              <div className="text-lg font-black text-white font-mono">{selectedVehicle.plateNumber}</div>
              <div className="text-xs text-slate-400 mt-0.5">
                {selectedVehicle.model} • {selectedVehicle.trailerPlate ? `Moóc: ${selectedVehicle.trailerPlate}` : 'Thùng liền'}
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Vị trí GPS hiện thời:</span>
                  <strong className="text-white">{selectedVehicle.currentLocation}</strong>
                </div>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <Navigation className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Điểm đến / Lộ trình:</span>
                  <span className="text-slate-200">{selectedVehicle.destination}</span>
                </div>
              </div>

              {/* Tốc độ & Nhiên liệu */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                <div className="bg-slate-800/40 p-2.5 rounded-xl border border-slate-700/60">
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Gauge className="w-3.5 h-3.5 text-cyan-400" /> Tốc độ GPS
                  </span>
                  <div className="text-base font-bold text-white font-mono mt-0.5">
                    {selectedVehicle.speedKmh} <span className="text-xs text-slate-400">km/h</span>
                  </div>
                </div>

                <div className="bg-slate-800/40 p-2.5 rounded-xl border border-slate-700/60">
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Fuel className="w-3.5 h-3.5 text-amber-400" /> Bình nhiên liệu
                  </span>
                  <div className="text-base font-bold text-white font-mono mt-0.5">
                    {selectedVehicle.fuelPercent}% <span className="text-xs text-slate-400">dầu</span>
                  </div>
                </div>
              </div>

              {/* Tải trọng chở */}
              <div className="bg-slate-800/40 p-2.5 rounded-xl border border-slate-700/60">
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-slate-400">Hệ số lợi dụng trọng tải:</span>
                  <span className="font-bold text-blue-400">{selectedVehicle.utilizationRate}%</span>
                </div>
                <div className="text-xs font-mono font-semibold text-slate-200 mb-1.5">
                  {selectedVehicle.currentPayloadTons} / {selectedVehicle.maxPayloadTons} Tấn
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: `${selectedVehicle.utilizationRate}%` }}></div>
                </div>
              </div>

              <div className="bg-slate-800/40 p-2.5 rounded-xl border border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400">Tài xế phụ trách:</span>
                  <div className="font-bold text-slate-200">{selectedVehicle.driverName}</div>
                </div>
                <a
                  href={`tel:${selectedVehicle.driverPhone}`}
                  className="bg-blue-600/30 hover:bg-blue-600/50 text-cyan-300 border border-blue-500/40 px-2.5 py-1 rounded-lg font-mono text-xs flex items-center gap-1"
                >
                  <PhoneCall className="w-3 h-3" /> Gọi điện
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
