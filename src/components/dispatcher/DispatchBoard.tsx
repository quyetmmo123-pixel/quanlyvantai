import React, { useState } from 'react';
import { useTMS } from '../../context/TMSContext';
import { VehicleStatus, VehicleType } from '../../types';
import { 
  Truck, Radio, Sparkles, Navigation, Send, Filter, 
  MapPin, Clock, Fuel, AlertTriangle, CheckCircle, Search, 
  Plus, Check, ArrowRight, Gauge, ChevronRight
} from 'lucide-react';
import { SmartConsolidation } from './SmartConsolidation';
import { GPSControlTower } from './GPSControlTower';
import { DispatchModal } from './DispatchModal';

export const DispatchBoard: React.FC = () => {
  const { vehicles, orders, smartSuggestions } = useTMS();
  const [activeTab, setActiveTab] = useState<'BOARD' | 'SMART_CONSOLIDATION' | 'GPS_TOWER'>('BOARD');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [typeFilter, setTypeFilter] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isDispatchModalOpen, setIsDispatchModalOpen] = useState<boolean>(false);

  // Thống kê nhanh theo trạng thái
  const countInTransit = vehicles.filter(v => v.status === 'IN_TRANSIT').length;
  const countEmpty = vehicles.filter(v => v.status === 'EMPTY_RUN').length;
  const countLoading = vehicles.filter(v => v.status === 'LOADING_PORT').length;
  const countBottleneck = vehicles.filter(v => v.status === 'BOTTLENECK').length;
  const countMaintenance = vehicles.filter(v => v.status === 'MAINTENANCE').length;
  const countAvailable = vehicles.filter(v => v.status === 'AVAILABLE').length;

  const filteredVehicles = vehicles.filter(v => {
    if (statusFilter !== 'ALL' && v.status !== statusFilter) return false;
    if (typeFilter !== 'ALL' && v.type !== typeFilter) return false;
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return (
        v.plateNumber.toLowerCase().includes(term) ||
        v.driverName.toLowerCase().includes(term) ||
        v.currentLocation.toLowerCase().includes(term) ||
        v.destination.toLowerCase().includes(term)
      );
    }
    return true;
  });

  const unappliedCount = smartSuggestions.filter(s => !s.isApplied).length;

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Top Navigation Tabs & Quick Action */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('BOARD')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'BOARD'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Truck className="w-4 h-4" /> Bảng Điều Phối Xe ({vehicles.length})
          </button>

          <button
            onClick={() => setActiveTab('SMART_CONSOLIDATION')}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'SMART_CONSOLIDATION'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-300" /> Ghép Hàng Thông Minh (AI LTL &amp; Backhaul)
            {unappliedCount > 0 && (
              <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full">
                {unappliedCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('GPS_TOWER')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'GPS_TOWER'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Radio className="w-4 h-4" /> Giám Sát GPS &amp; Điểm Nghẽn Cảng
          </button>
        </div>

        <button
          onClick={() => setIsDispatchModalOpen(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-900/30 transition-all active:scale-95"
        >
          <Plus className="w-4 h-4" /> Phát Lệnh Điều Động Mới
        </button>
      </div>

      {/* RENDER NỘI DUNG TÙY THEO TAB */}
      {activeTab === 'SMART_CONSOLIDATION' && <SmartConsolidation />}
      {activeTab === 'GPS_TOWER' && <GPSControlTower />}

      {activeTab === 'BOARD' && (
        <div className="space-y-4">
          {/* Status Pills Filter */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <button
              onClick={() => setStatusFilter('ALL')}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-colors ${
                statusFilter === 'ALL' ? 'bg-slate-200 text-slate-900' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Tất cả ({vehicles.length})
            </button>
            <button
              onClick={() => setStatusFilter('IN_TRANSIT')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-colors ${
                statusFilter === 'IN_TRANSIT' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-blue-300 border border-slate-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-blue-400"></span> Đang chở hàng ({countInTransit})
            </button>
            <button
              onClick={() => setStatusFilter('EMPTY_RUN')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-colors ${
                statusFilter === 'EMPTY_RUN' ? 'bg-amber-600 text-white' : 'bg-slate-900 text-amber-300 hover:text-amber-200 border border-amber-900/60'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400"></span> Đang chạy rỗng ({countEmpty}) - Cần ghép!
            </button>
            <button
              onClick={() => setStatusFilter('LOADING_PORT')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-colors ${
                statusFilter === 'LOADING_PORT' ? 'bg-cyan-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-cyan-300 border border-slate-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span> Xếp/dỡ tại Cảng ({countLoading})
            </button>
            <button
              onClick={() => setStatusFilter('BOTTLENECK')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-colors ${
                statusFilter === 'BOTTLENECK' ? 'bg-rose-600 text-white' : 'bg-slate-900 text-rose-300 hover:text-rose-200 border border-rose-900/60'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span> Nghẽn cảng ({countBottleneck})
            </button>
            <button
              onClick={() => setStatusFilter('AVAILABLE')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-colors ${
                statusFilter === 'AVAILABLE' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-emerald-300 border border-slate-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Sẵn sàng ({countAvailable})
            </button>
            <button
              onClick={() => setStatusFilter('MAINTENANCE')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-colors ${
                statusFilter === 'MAINTENANCE' ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-purple-300 border border-slate-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-purple-400"></span> Bảo dưỡng ({countMaintenance})
            </button>
          </div>

          {/* Search bar & Type filter */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800/80">
            <div className="flex items-center gap-2 flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm biển số xe, tài xế, vị trí GPS..."
                className="bg-transparent text-xs text-white placeholder-slate-500 w-full focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Loại phương tiện:</span>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="bg-slate-900 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 border border-slate-700 focus:outline-none"
              >
                <option value="ALL">Tất cả chủng loại</option>
                <option value="CONTAINER_40FT">Đầu kéo Container 40ft</option>
                <option value="CONTAINER_20FT">Đầu kéo Container 20ft</option>
                <option value="TRUCK_15T">Xe tải thùng 15 Tấn</option>
                <option value="TRUCK_8T">Xe tải thùng 8 Tấn</option>
              </select>
            </div>
          </div>

          {/* Grid danh sách thẻ xe (Fleet Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredVehicles.map(vehicle => {
              const activeOrder = orders.find(o => o.id === vehicle.activeOrderId);

              const statusBadges = {
                IN_TRANSIT: { label: 'Đang chở hàng', color: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
                EMPTY_RUN: { label: 'Đang chạy rỗng', color: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
                LOADING_PORT: { label: 'Xếp/dỡ tại cảng', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
                BOTTLENECK: { label: 'Cảnh báo nghẽn', color: 'bg-rose-500/20 text-rose-300 border-rose-500/40' },
                MAINTENANCE: { label: 'Bảo dưỡng', color: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
                AVAILABLE: { label: 'Sẵn sàng', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' }
              };

              const badge = statusBadges[vehicle.status];

              return (
                <div
                  key={vehicle.id}
                  className="bg-slate-900/90 rounded-2xl border border-slate-800/90 hover:border-slate-700 p-4 flex flex-col justify-between transition-all duration-200 shadow-md hover:shadow-xl group"
                >
                  <div>
                    {/* Header Card: Biển số & Badge */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono font-black text-sm text-white bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                            {vehicle.plateNumber}
                          </span>
                          {vehicle.trailerPlate && (
                            <span className="font-mono text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                              {vehicle.trailerPlate}
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1 truncate">
                          {vehicle.model}
                        </div>
                      </div>

                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>

                    {/* Thanh tải trọng (Hệ số gamma) */}
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 mb-3 space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-400">Trọng tải chở:</span>
                        <span className="font-mono font-bold text-slate-200">
                          {vehicle.currentPayloadTons} / {vehicle.maxPayloadTons} Tấn ({vehicle.utilizationRate}%)
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            vehicle.utilizationRate >= 80 ? 'bg-emerald-500' :
                            vehicle.utilizationRate >= 50 ? 'bg-blue-500' :
                            vehicle.utilizationRate > 0 ? 'bg-amber-500' : 'bg-slate-600'
                          }`}
                          style={{ width: `${Math.min(vehicle.utilizationRate, 100)}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Vị trí GPS & Điểm đến */}
                    <div className="space-y-1.5 text-xs mb-3">
                      <div className="flex items-start gap-1.5 text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-[11px] text-slate-300 line-clamp-1">{vehicle.currentLocation}</span>
                      </div>

                      <div className="flex items-start gap-1.5 text-slate-400">
                        <Navigation className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-[11px] text-slate-400 line-clamp-1">{vehicle.destination}</span>
                      </div>
                    </div>

                    {/* Tài xế & Telematics */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-800/80 text-slate-400">
                      <div>
                        <span>Tài xế:</span>
                        <div className="font-semibold text-slate-200 truncate">{vehicle.driverName}</div>
                      </div>
                      <div className="text-right">
                        <span>Tốc độ / Bình dầu:</span>
                        <div className="font-mono font-semibold text-slate-200">
                          {vehicle.speedKmh} km/h • {vehicle.fuelPercent}%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between gap-2">
                    {vehicle.status === 'EMPTY_RUN' ? (
                      <button
                        onClick={() => setActiveTab('SMART_CONSOLIDATION')}
                        className="w-full py-1.5 px-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[11px] font-bold flex items-center justify-center gap-1 transition-colors"
                      >
                        <Sparkles className="w-3.5 h-3.5" /> Tìm đơn chiều về ngay
                      </button>
                    ) : vehicle.status === 'BOTTLENECK' ? (
                      <button
                        onClick={() => setActiveTab('GPS_TOWER')}
                        className="w-full py-1.5 px-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-bold flex items-center justify-center gap-1 transition-colors"
                      >
                        <AlertTriangle className="w-3.5 h-3.5" /> Xử lý nghẽn cảng ({vehicle.portWaitMinutes}p)
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsDispatchModalOpen(true)}
                        className="w-full py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-medium flex items-center justify-center gap-1 transition-colors"
                      >
                        <Send className="w-3 h-3 text-cyan-400" /> Điều động xe
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Modal Phát lệnh điều động */}
      <DispatchModal
        isOpen={isDispatchModalOpen}
        onClose={() => setIsDispatchModalOpen(false)}
      />
    </div>
  );
};
