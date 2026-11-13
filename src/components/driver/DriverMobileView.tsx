import React, { useState } from 'react';
import { useTMS } from '../../context/TMSContext';
import { 
  Smartphone, Navigation, CheckCircle2, MapPin, 
  Fuel, ShieldCheck, PhoneCall, Radio, Clock, 
  AlertCircle, ChevronRight, Maximize2, Minimize2, FileText, ArrowRight
} from 'lucide-react';
import { EPodModal } from './EPodModal';
import { FuelLogForm } from './FuelLogForm';

export const DriverMobileView: React.FC = () => {
  const { dispatchOrder, updateDispatchStep, orders, vehicles } = useTMS();
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [activeDriverTab, setActiveDriverTab] = useState<'ORDER' | 'FUEL' | 'EPOD'>('ORDER');
  const [isEpodModalOpen, setIsEpodModalOpen] = useState(false);

  const currentVehicle = vehicles.find(v => v.plateNumber === dispatchOrder.vehiclePlate) || vehicles[0];
  const activeOrder = orders.find(o => o.id === dispatchOrder.orderId);

  // 4 bước tiến trình chuyến đi
  const steps = [
    { stepNum: 1, label: 'Đã nhận lệnh', desc: 'Xác nhận điều động', timestamp: dispatchOrder.stepTimestamps.step1 },
    { stepNum: 2, label: 'Đã đến cảng xếp hàng', desc: 'Check-in cổng & kẹp chì', timestamp: dispatchOrder.stepTimestamps.step2 },
    { stepNum: 3, label: 'Đang vận chuyển', desc: 'Lăn bánh trên hành trình', timestamp: dispatchOrder.stepTimestamps.step3 },
    { stepNum: 4, label: 'Hoàn thành giao hàng', desc: 'Ký nhận e-POD', timestamp: dispatchOrder.stepTimestamps.step4 }
  ];

  const handleStepClick = (stepNum: 1 | 2 | 3 | 4) => {
    if (stepNum === 4) {
      setIsEpodModalOpen(true);
    } else {
      updateDispatchStep(stepNum);
    }
  };

  return (
    <div className="space-y-4 animate-fade-in flex flex-col items-center">
      {/* Top Controls: Mode Switcher & Explanation */}
      <div className="w-full max-w-4xl flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 p-3 rounded-2xl border border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-cyan-400" />
          <span className="font-semibold text-white">Phân Hệ Tài Xế (NNP Driver Mobile App)</span>
          <span className="text-slate-400 hidden sm:inline">• Thiết kế chuẩn công thái học cho tài xế đường dài</span>
        </div>

        <button
          onClick={() => setIsFullWidth(!isFullWidth)}
          className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors font-medium"
        >
          {isFullWidth ? (
            <>
              <Minimize2 className="w-3.5 h-3.5" /> Xem dạng Khung Smartphone
            </>
          ) : (
            <>
              <Maximize2 className="w-3.5 h-3.5" /> Mở rộng toàn màn hình
            </>
          )}
        </button>
      </div>

      {/* MOBILE CONTAINER (Phone Frame or Fullscreen) */}
      <div
        className={`w-full transition-all duration-300 ${
          isFullWidth
            ? 'max-w-4xl'
            : 'max-w-md bg-slate-950 p-3 rounded-[40px] border-4 border-slate-700 shadow-2xl relative shadow-blue-950/50'
        }`}
      >
        {/* Smartphone Camera Notch Mockup */}
        {!isFullWidth && (
          <div className="w-32 h-4 bg-slate-900 rounded-full mx-auto mb-2 flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-700"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
          </div>
        )}

        {/* Màn hình hiển thị điện thoại */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-inner flex flex-col">
          {/* Driver Status Bar */}
          <div className="bg-gradient-to-r from-blue-950 to-slate-900 p-4 border-b border-blue-900/40">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-blue-600/30 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 font-bold text-sm">
                  TX
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{dispatchOrder.driverName}</h3>
                  <div className="text-[11px] text-cyan-300 font-mono flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Xe: {dispatchOrder.vehiclePlate} ({dispatchOrder.trailerPlate || 'Moóc rời'})
                  </div>
                </div>
              </div>

              <a
                href="tel:19008899"
                className="bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 p-2 rounded-xl flex items-center gap-1 text-[11px] font-bold"
              >
                <PhoneCall className="w-3.5 h-3.5" /> Hotline
              </a>
            </div>

            {/* Sub Tabs: Lệnh điều động / Phiếu đổ dầu */}
            <div className="grid grid-cols-2 gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800/80 text-xs">
              <button
                onClick={() => setActiveDriverTab('ORDER')}
                className={`py-1.5 rounded-lg font-bold transition-colors ${
                  activeDriverTab === 'ORDER' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Lệnh Vận Chuyển
              </button>
              <button
                onClick={() => setActiveDriverTab('FUEL')}
                className={`py-1.5 rounded-lg font-bold transition-colors ${
                  activeDriverTab === 'FUEL' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Khai Báo Phiếu Dầu
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-4 space-y-4">
            {activeDriverTab === 'FUEL' ? (
              <FuelLogForm />
            ) : (
              <>
                {/* Lệnh điều động điện tử Card */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 shadow-md">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono font-bold text-cyan-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800">
                      LỆNH: {dispatchOrder.id}
                    </span>
                    <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                      Khối lượng: {dispatchOrder.weightTons} Tấn
                    </span>
                  </div>

                  <div className="font-bold text-white text-sm mb-1">{dispatchOrder.cargoType}</div>

                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 my-2.5 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Số Kẹp Chì / Seal:</span>
                    <span className="font-mono font-extrabold text-amber-300 text-sm">{dispatchOrder.sealNumber}</span>
                  </div>

                  {/* Hành trình Điểm Bốc & Trả */}
                  <div className="space-y-2 text-xs pt-1">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[10px]">
                        A
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-semibold">Điểm bốc hàng:</span>
                        <div className="text-slate-200 font-medium">{dispatchOrder.pickupPoint}</div>
                      </div>
                    </div>

                    <div className="w-0.5 h-3 bg-slate-700 ml-2"></div>

                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[10px]">
                        B
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-semibold">Điểm giao hàng:</span>
                        <div className="text-slate-200 font-medium">{dispatchOrder.deliveryPoint}</div>
                      </div>
                    </div>
                  </div>

                  {/* Lộ trình tối ưu gợi ý */}
                  <div className="mt-3 p-2.5 bg-blue-950/40 rounded-xl border border-blue-900/60 text-[11px] text-slate-300">
                    <div className="flex items-center gap-1.5 text-cyan-300 font-bold mb-1">
                      <Navigation className="w-3.5 h-3.5" /> Lộ trình tối ưu ({dispatchOrder.distanceKm} km):
                    </div>
                    {dispatchOrder.optimalRoute}
                  </div>
                </div>

                {/* 4 NÚT CẬP NHẬT TRẠNG THÁI CHUYẾN ĐI THEO THỜI GIAN THỰC */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                    <span>Cập nhật tiến độ chuyến đi:</span>
                    <span className="text-[10px] text-cyan-400 font-mono font-normal">Bước {dispatchOrder.currentStep}/4</span>
                  </div>

                  <div className="space-y-2">
                    {steps.map(s => {
                      const isCompleted = dispatchOrder.currentStep >= s.stepNum;
                      const isCurrent = dispatchOrder.currentStep === s.stepNum;

                      return (
                        <button
                          key={s.stepNum}
                          onClick={() => handleStepClick(s.stepNum as any)}
                          className={`w-full p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all ${
                            isCurrent
                              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 border-cyan-400 text-white shadow-lg shadow-blue-900/40 scale-[1.01]'
                              : isCompleted
                              ? 'bg-slate-950/80 border-emerald-500/40 text-slate-200'
                              : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                                isCompleted
                                  ? 'bg-emerald-500 text-slate-950'
                                  : 'bg-slate-800 text-slate-400 border border-slate-700'
                              }`}
                            >
                              {isCompleted ? <CheckCircle2 className="w-5 h-5 text-slate-950" /> : s.stepNum}
                            </div>
                            <div>
                              <div className="font-bold text-xs leading-snug">{s.label}</div>
                              <div className="text-[11px] opacity-80">{s.desc}</div>
                              {s.timestamp && (
                                <div className="text-[10px] text-cyan-300 font-mono mt-0.5">
                                  ✓ {s.timestamp}
                                </div>
                              )}
                            </div>
                          </div>

                          <ChevronRight className={`w-4 h-4 ${isCurrent ? 'text-white' : 'text-slate-600'}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Nút bấm Ký biên bản giao nhận e-POD */}
                <button
                  onClick={() => setIsEpodModalOpen(true)}
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <ShieldCheck className="w-4 h-4" /> Ký &amp; Tải Lên Biên Bản Giao Nhận e-POD
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modal e-POD */}
      <EPodModal
        isOpen={isEpodModalOpen}
        onClose={() => setIsEpodModalOpen(false)}
      />
    </div>
  );
};
