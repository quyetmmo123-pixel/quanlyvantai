import React from 'react';
import { useTMS } from '../../context/TMSContext';
import { Sparkles, ArrowRight, Truck, PackageCheck, Zap, DollarSign, TrendingUp, Check } from 'lucide-react';

export const SmartConsolidation: React.FC = () => {
  const { smartSuggestions, applySmartSuggestion, orders, vehicles } = useTMS();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-4 rounded-2xl border border-blue-900/60">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600/30 text-cyan-300 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <h3 className="text-sm font-bold text-white">
              Động Cơ Ghép Hàng Thông Minh &amp; Đơn Hàng Chiều Về (AI Smart Consolidation &amp; Backhaul)
            </h3>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Thuật toán tự động phân tích toạ độ GPS, khối lượng đơn hàng và lịch hạ hàng để ghép đơn lẻ (LTL) và tìm hàng khứ hồi
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-lg font-semibold">
            Đã tiết kiệm: 233 km chạy rỗng hôm nay
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {smartSuggestions.map(sugg => {
          const targetVehicle = vehicles.find(v => v.plateNumber === sugg.targetVehiclePlate);
          const matchedOrdersList = orders.filter(o => sugg.matchedOrderIds.includes(o.id));

          return (
            <div 
              key={sugg.id}
              className={`p-5 rounded-2xl border transition-all ${
                sugg.isApplied 
                  ? 'bg-slate-900/40 border-emerald-500/40 opacity-90' 
                  : 'bg-slate-900/90 border-blue-500/50 shadow-lg shadow-blue-950/40 hover:border-blue-400'
              }`}
            >
              {/* Badge & Title */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${
                  sugg.type === 'LTL_MERGE'
                    ? 'bg-blue-950 text-cyan-300 border-cyan-800'
                    : 'bg-amber-950 text-amber-300 border-amber-800'
                }`}>
                  <Zap className="w-3.5 h-3.5" />
                  {sugg.type === 'LTL_MERGE' ? 'GOM ĐƠN LẺ (LTL GROUPING)' : 'ĐƠN HÀNG CHIỀU VỀ (BACKHAUL MATCH)'}
                </span>

                {sugg.isApplied ? (
                  <span className="bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-2.5 py-1 rounded-lg border border-emerald-500/40 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Đã thực thi lệnh ghép
                  </span>
                ) : (
                  <span className="bg-amber-500/20 text-amber-300 text-xs font-semibold px-2 py-0.5 rounded-lg border border-amber-500/30">
                    Chờ điều độ phê duyệt
                  </span>
                )}
              </div>

              <h4 className="text-sm font-bold text-white mb-1.5">{sugg.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">{sugg.description}</p>

              {/* Thông tin Xe đề xuất & Tải trọng trước / sau tối ưu */}
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 mb-4 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-blue-400" /> Phương tiện điều động:
                  </span>
                  <span className="font-bold text-white font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-800">
                    {sugg.targetVehiclePlate} ({targetVehicle?.model})
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Hiệu suất tải trọng trước &rarr; sau khi ghép:</span>
                    <span className="font-mono font-bold text-white">
                      <span className="text-slate-400">{sugg.originalCapacityPct}%</span>
                      <ArrowRight className="w-3 h-3 inline mx-1.5 text-cyan-400" />
                      <span className="text-emerald-400 font-extrabold text-sm">{sugg.optimizedCapacityPct}%</span>
                    </span>
                  </div>

                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden flex">
                    <div className="bg-slate-500 h-full transition-all" style={{ width: `${sugg.originalCapacityPct}%` }}></div>
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full transition-all" style={{ width: `${sugg.optimizedCapacityPct - sugg.originalCapacityPct}%` }}></div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
                  <strong className="text-slate-300">Lộ trình bốc hàng tối ưu:</strong> {sugg.pickupRoute}
                </div>
              </div>

              {/* Danh sách các đơn hàng ghép */}
              <div className="space-y-2 mb-4">
                <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                  Chi tiết đơn hàng trong chuyến ghép:
                </div>
                {matchedOrdersList.map(ord => (
                  <div key={ord.id} className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/60 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-slate-200">
                        {ord.id} - {ord.customerName}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate max-w-xs">
                        {ord.cargoType} ({ord.weightTons} Tấn) • {ord.deliveryPoint}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-cyan-300 font-bold">
                        {ord.freightPriceVnd.toLocaleString('vi-VN')} đ
                      </div>
                      <span className="text-[10px] text-slate-400">Cước vận tải</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lợi ích kinh tế tính toán */}
              <div className="grid grid-cols-2 gap-2 mb-4 text-center">
                <div className="bg-emerald-950/40 p-2 rounded-xl border border-emerald-800/50">
                  <div className="text-[10px] text-emerald-400 font-medium">Cắt giảm chạy rỗng</div>
                  <div className="text-xs font-bold text-white font-mono mt-0.5">
                    -{sugg.deadheadKmSaved} km rỗng
                  </div>
                </div>
                <div className="bg-blue-950/40 p-2 rounded-xl border border-blue-800/50">
                  <div className="text-[10px] text-cyan-300 font-medium">Doanh thu / Tiết kiệm ròng</div>
                  <div className="text-xs font-bold text-emerald-400 font-mono mt-0.5">
                    +{sugg.revenueAddedVnd ? sugg.revenueAddedVnd.toLocaleString('vi-VN') : sugg.costSavedVnd.toLocaleString('vi-VN')} đ
                  </div>
                </div>
              </div>

              {/* Nút hành động */}
              <button
                disabled={sugg.isApplied}
                onClick={() => applySmartSuggestion(sugg.id)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  sugg.isApplied
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 active:scale-[0.98]'
                }`}
              >
                {sugg.isApplied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" /> Đã phát lệnh ghép thành công
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 text-amber-300" /> Xác nhận ghép chuyến &amp; Phát lệnh điều động
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
