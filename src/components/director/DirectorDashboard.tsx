import React, { useState } from 'react';
import { useTMS } from '../../context/TMSContext';
import { 
  TrendingUp, TrendingDown, Percent, Gauge, Truck, 
  DollarSign, Fuel, Award, Calendar, Filter, Download, 
  ArrowUpRight, ArrowDownRight, CheckCircle2, ShieldAlert
} from 'lucide-react';
import { 
  RevenueFuelEmptyChart, 
  FleetGroupComparisonChart, 
  TimeAllocationDonutChart 
} from '../common/Charts';

export const DirectorDashboard: React.FC = () => {
  const { kpiData, vehicles, orders } = useTMS();
  const [selectedPeriod, setSelectedPeriod] = useState<'MONTH' | 'QUARTER' | 'YEAR'>('MONTH');
  const [selectedCorridor, setSelectedCorridor] = useState<string>('ALL');

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Welcome & Quick Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/80 p-4 rounded-2xl border border-slate-800 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-white">Báo cáo & Giám sát Hiệu suất Vận tải Đoàn xe NNP</h2>
            <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30">
              Dữ liệu thời gian thực
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Mục tiêu trọng tâm: Nâng cao hệ số sử dụng trọng tải (γ) &amp; Cắt giảm triệt để tỷ lệ chạy rỗng chiều về (Backhaul)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Lọc chu kỳ */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setSelectedPeriod('MONTH')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedPeriod === 'MONTH' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Tháng 11/2026
            </button>
            <button
              onClick={() => setSelectedPeriod('QUARTER')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedPeriod === 'QUARTER' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Quý 4/2026
            </button>
            <button
              onClick={() => setSelectedPeriod('YEAR')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedPeriod === 'YEAR' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Năm 2026
            </button>
          </div>

          {/* Lọc tuyến đường */}
          <select 
            value={selectedCorridor}
            onChange={(e) => setSelectedCorridor(e.target.value)}
            className="bg-slate-950 text-slate-300 text-xs rounded-xl px-3 py-2 border border-slate-800 focus:outline-none focus:border-blue-500"
          >
            <option value="ALL">Tất cả hành lang vận tải</option>
            <option value="HP_HN">Hải Phòng ↔ Hà Nội (Cao tốc 5B)</option>
            <option value="HP_BN">Hải Phòng ↔ Bắc Ninh (Yên Phong, Quế Võ)</option>
            <option value="HP_HD">Hải Phòng ↔ Hải Dương / Hưng Yên</option>
          </select>

          <button 
            onClick={() => window.print()}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-3 py-2 rounded-xl border border-slate-700 transition-colors"
          >
            <Download className="w-3.5 h-3.5" /> Xuất Báo cáo KPI
          </button>
        </div>
      </div>

      {/* 4 THẺ CHỈ SỐ KPI HIỆU SUẤT TRỌNG YẾU (Core Efficiency Metrics) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Tỷ lệ xe vận doanh */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-4 rounded-2xl border border-slate-800/90 shadow-md relative overflow-hidden group hover:border-blue-500/50 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400">Tỷ lệ Xe vận doanh (α)</span>
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <Truck className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white tracking-tight flex items-baseline gap-2">
            {kpiData.fleetOperationalRate}%
            <span className="text-xs font-semibold text-emerald-400 flex items-center">
              <ArrowUpRight className="w-3.5 h-3.5" /> +3.4%
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
            <span>44/48 xe đang lăn bánh</span>
            <span className="text-slate-500">Mục tiêu: &gt;88%</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2.5 overflow-hidden">
            <div className="bg-blue-500 h-full rounded-full" style={{ width: `${kpiData.fleetOperationalRate}%` }}></div>
          </div>
        </div>

        {/* KPI 2: Hệ số sử dụng trọng tải bình quân (gamma) */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-4 rounded-2xl border border-slate-800/90 shadow-md relative overflow-hidden group hover:border-cyan-500/50 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400">Hệ số Sử dụng Trọng tải (γ)</span>
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Gauge className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white tracking-tight flex items-baseline gap-2">
            {kpiData.payloadUtilizationGamma}%
            <span className="text-xs font-semibold text-emerald-400 flex items-center">
              <ArrowUpRight className="w-3.5 h-3.5" /> +7.2%
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
            <span>Nhờ ghép hàng LTL thông minh</span>
            <span className="text-slate-500">Chuẩn ngành: 72%</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2.5 overflow-hidden">
            <div className="bg-cyan-500 h-full rounded-full" style={{ width: `${kpiData.payloadUtilizationGamma}%` }}></div>
          </div>
        </div>

        {/* KPI 3: Hệ số sử dụng quãng đường có hàng (beta) & Giảm chạy rỗng */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-4 rounded-2xl border border-slate-800/90 shadow-md relative overflow-hidden group hover:border-emerald-500/50 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400">Quãng đường có hàng (β)</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Percent className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white tracking-tight flex items-baseline gap-2">
            {kpiData.loadedDistanceBeta}%
            <span className="text-xs font-semibold text-emerald-400 flex items-center">
              <ArrowUpRight className="w-3.5 h-3.5" /> +5.8%
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
            <span className="text-amber-400 font-medium">Chạy rỗng chỉ còn {kpiData.emptyRunPct}%</span>
            <span className="text-slate-500">Giảm từ 38%</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2.5 overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${kpiData.loadedDistanceBeta}%` }}></div>
          </div>
        </div>

        {/* KPI 4: Tổng sản lượng Tấn.km */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-4 rounded-2xl border border-slate-800/90 shadow-md relative overflow-hidden group hover:border-indigo-500/50 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400">Tổng Sản lượng Luân chuyển</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white tracking-tight flex items-baseline gap-2">
            {(kpiData.totalTonKm / 1000).toLocaleString('vi-VN')}k
            <span className="text-xs text-slate-400 font-normal">Tấn.km</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
            <span className="text-indigo-300 font-medium">+12.8% so với cùng kỳ</span>
            <span className="text-slate-500">Doanh thu 3.42 tỷ đ</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2.5 overflow-hidden">
            <div className="bg-indigo-500 h-full rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>

      {/* BIỂU ĐỒ TRỰC QUAN: PHÂN TÍCH TÀI CHÍNH & VẬN HÀNH */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Biểu đồ chính: Doanh thu, Nhiên liệu & Chạy rỗng theo tháng (2 cột) */}
        <div className="lg:col-span-2">
          <RevenueFuelEmptyChart data={kpiData.monthlyComparison} />
        </div>

        {/* Biểu đồ phụ: Cơ cấu thời gian vận hành 24/7 (1 cột) */}
        <div className="lg:col-span-1">
          <TimeAllocationDonutChart items={kpiData.timeAllocation} />
        </div>
      </div>

      {/* SO SÁNH HIỆU SUẤT THEO PHÂN NHÓM XE & BẢNG PHÂN TÍCH HIỆU QUẢ KINH TẾ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Biểu đồ nhóm xe */}
        <FleetGroupComparisonChart groups={kpiData.fleetGroupStats} />

        {/* Bảng phân tích Giá trị gia tăng từ "Tối ưu hóa phương tiện" */}
        <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-slate-200 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                Hiệu Quả Kinh Tế Khi Áp Dụng Thuật Toán Tối Ưu Phương Tiện NNP
              </h3>
              <span className="text-[11px] bg-blue-900/80 text-blue-200 px-2 py-0.5 rounded font-medium border border-blue-700/50">
                Tháng 11/2026
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/60 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-200">Nhiên liệu tiết kiệm nhờ giảm chạy rỗng:</div>
                  <div className="text-[11px] text-slate-400">Giảm từ 38% rỗng xuống 21.5% trên hành lang Bắc Ninh ↔ Hải Phòng</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-emerald-400">4,850 Lít dầu</div>
                  <div className="text-[11px] text-emerald-300 font-mono">≈ 106.700.000 VNĐ</div>
                </div>
              </div>

              <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/60 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-200">Doanh thu tăng thêm từ đơn hàng chiều về (Backhaul):</div>
                  <div className="text-[11px] text-slate-400">Tận dụng đầu kéo vừa trả hàng tại Yên Phong, Quế Võ để kéo cont xuất khẩu</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-blue-400">+380.000.000 VNĐ</div>
                  <div className="text-[11px] text-slate-400">72 chuyến khứ hồi</div>
                </div>
              </div>

              <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/60 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-200">Hiệu quả ghép đơn lẻ (LTL Grouping):</div>
                  <div className="text-[11px] text-slate-400">Nâng tải trọng bình quân xe tải thùng từ 40% lên 84.6%</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-cyan-400">Tiết kiệm 28 chuyến</div>
                  <div className="text-[11px] text-cyan-300">Giảm hao mòn &amp; phí BOT</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-blue-900/40 to-indigo-900/30 border border-blue-800/50 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-blue-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Tổng lợi ích kinh tế ròng thu được trong tháng:</span>
            </div>
            <div className="text-base font-black text-white font-mono bg-blue-600/40 px-3 py-1 rounded-lg border border-blue-500/40">
              +486.700.000 VNĐ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
