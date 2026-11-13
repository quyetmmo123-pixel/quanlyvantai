import React, { useState } from 'react';

// Biểu đồ kết hợp Doanh thu - Chi phí nhiên liệu - Tỷ lệ chạy rỗng theo tháng
interface MonthlyDataPoint {
  month: string;
  revenueMil: number;
  fuelCostMil: number;
  emptyRunPct: number;
  tonKmK: number;
}

export const RevenueFuelEmptyChart: React.FC<{ data: MonthlyDataPoint[] }> = ({ data }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const maxRevenue = Math.max(...data.map(d => d.revenueMil)) * 1.15;
  const maxEmptyPct = 50;

  const svgWidth = 650;
  const svgHeight = 280;
  const paddingLeft = 50;
  const paddingRight = 50;
  const paddingTop = 30;
  const paddingBottom = 40;

  const chartWidth = svgWidth - paddingLeft - paddingRight;
  const chartHeight = svgHeight - paddingTop - paddingBottom;
  const groupWidth = chartWidth / data.length;
  const barWidth = groupWidth * 0.28;

  // Tính tọa độ đường line Tỷ lệ chạy rỗng
  const points = data.map((d, i) => {
    const x = paddingLeft + i * groupWidth + groupWidth / 2;
    const y = paddingTop + chartHeight - (d.emptyRunPct / maxEmptyPct) * chartHeight;
    return { x, y, data: d };
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  return (
    <div className="w-full overflow-x-auto bg-slate-900/60 p-4 rounded-xl border border-slate-800">
      <div className="flex flex-wrap items-center justify-between mb-3 text-xs gap-3">
        <div className="font-semibold text-slate-200">Diễn biến Doanh thu, Chi phí Nhiên liệu & Tỷ lệ Chạy rỗng (6 tháng)</div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-blue-500"></span>
            <span className="text-slate-300">Doanh thu (triệu đ)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-amber-500"></span>
            <span className="text-slate-300">Chi phí dầu (triệu đ)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 bg-red-400"></span>
            <span className="w-2 h-2 rounded-full bg-red-400 -ml-2"></span>
            <span className="text-red-300 font-medium">Tỷ lệ chạy rỗng (%)</span>
          </div>
        </div>
      </div>

      <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-64 select-none">
        {/* Lưới ngang Grid */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => {
          const y = paddingTop + chartHeight * (1 - ratio);
          const revVal = Math.round(maxRevenue * ratio);
          const emptyVal = Math.round(maxEmptyPct * ratio);
          return (
            <g key={idx}>
              <line x1={paddingLeft} y1={y} x2={svgWidth - paddingRight} y2={y} stroke="#334155" strokeDasharray="3 3" opacity={0.6} />
              <text x={paddingLeft - 8} y={y + 4} textAnchor="end" className="text-[10px] fill-slate-400 font-mono">
                {revVal}M
              </text>
              <text x={svgWidth - paddingRight + 8} y={y + 4} textAnchor="start" className="text-[10px] fill-red-400 font-mono">
                {emptyVal}%
              </text>
            </g>
          );
        })}

        {/* Các cột Bar (Doanh thu & Chi phí nhiên liệu) */}
        {data.map((d, i) => {
          const groupX = paddingLeft + i * groupWidth;
          const revHeight = (d.revenueMil / maxRevenue) * chartHeight;
          const fuelHeight = (d.fuelCostMil / maxRevenue) * chartHeight;
          const isHovered = hoverIndex === i;

          return (
            <g key={i} onMouseEnter={() => setHoverIndex(i)} onMouseLeave={() => setHoverIndex(null)} className="cursor-pointer">
              {/* Background highlight khi hover */}
              <rect
                x={groupX}
                y={paddingTop}
                width={groupWidth}
                height={chartHeight}
                fill={isHovered ? 'rgba(59, 130, 246, 0.08)' : 'transparent'}
                rx={4}
              />

              {/* Cột Doanh thu */}
              <rect
                x={groupX + groupWidth * 0.18}
                y={paddingTop + chartHeight - revHeight}
                width={barWidth}
                height={revHeight}
                className="fill-blue-500 transition-all duration-300 hover:fill-blue-400"
                rx={3}
              />

              {/* Cột Nhiên liệu */}
              <rect
                x={groupX + groupWidth * 0.18 + barWidth + 4}
                y={paddingTop + chartHeight - fuelHeight}
                width={barWidth}
                height={fuelHeight}
                className="fill-amber-500 transition-all duration-300 hover:fill-amber-400"
                rx={3}
              />

              {/* Nhãn tháng dưới trục X */}
              <text
                x={groupX + groupWidth / 2}
                y={svgHeight - 12}
                textAnchor="middle"
                className={`text-[11px] font-medium transition-colors ${isHovered ? 'fill-blue-400 font-bold' : 'fill-slate-400'}`}
              >
                {d.month}
              </text>
            </g>
          );
        })}

        {/* Đường line Tỷ lệ chạy rỗng */}
        <path d={linePath} fill="none" stroke="#F87171" strokeWidth={2.5} strokeLinecap="round" />

        {/* Các điểm tròn trên đường line */}
        {points.map((p, i) => (
          <g key={i} onMouseEnter={() => setHoverIndex(i)} onMouseLeave={() => setHoverIndex(null)} className="cursor-pointer">
            <circle cx={p.x} cy={p.y} r={hoverIndex === i ? 6 : 4} className="fill-red-500 stroke-slate-900 stroke-2 transition-all" />
            <text x={p.x} y={p.y - 10} textAnchor="middle" className="text-[10px] font-bold fill-red-400 font-mono">
              {p.data.emptyRunPct}%
            </text>
          </g>
        ))}

        {/* Tooltip hiển thị khi hover */}
        {hoverIndex !== null && (
          <g transform={`translate(${Math.min(points[hoverIndex].x + 10, svgWidth - 190)}, 35)`}>
            <rect width={175} height={82} rx={6} fill="#0F172A" stroke="#38BDF8" strokeWidth={1} filter="drop-shadow(0 4px 6px rgba(0,0,0,0.5))" />
            <text x={10} y={18} className="text-[11px] font-bold fill-slate-100">{data[hoverIndex].month}</text>
            <text x={10} y={35} className="text-[10px] fill-blue-400">Doanh thu: {data[hoverIndex].revenueMil.toLocaleString('vi-VN')} tr VNĐ</text>
            <text x={10} y={50} className="text-[10px] fill-amber-400">Chi phí dầu: {data[hoverIndex].fuelCostMil.toLocaleString('vi-VN')} tr VNĐ</text>
            <text x={10} y={65} className="text-[10px] fill-red-400 font-semibold">Tỷ lệ chạy rỗng: {data[hoverIndex].emptyRunPct}%</text>
            <text x={10} y={77} className="text-[9px] fill-emerald-400 font-mono">Sản lượng: {data[hoverIndex].tonKmK.toLocaleString('vi-VN')}k Tấn.km</text>
          </g>
        )}
      </svg>
    </div>
  );
};

// Biểu đồ so sánh Hiệu suất & Tỷ lệ chạy rỗng theo từng Nhóm xe
interface FleetGroupStat {
  groupName: string;
  vehicleCount: number;
  utilizationRatePct: number;
  emptyRunPct: number;
  fuelRatePer100Km: number;
}

export const FleetGroupComparisonChart: React.FC<{ groups: FleetGroupStat[] }> = ({ groups }) => {
  return (
    <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xs font-semibold text-slate-200">Hiệu suất Tải trọng vs Tỷ lệ Chạy rỗng theo Phân nhóm xe</h4>
        <span className="text-[11px] text-emerald-400 font-medium">Mục tiêu chạy rỗng &lt; 22%</span>
      </div>

      <div className="space-y-4">
        {groups.map((group, idx) => (
          <div key={idx} className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/60 hover:border-slate-600 transition-colors">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-semibold text-slate-100">{group.groupName}</span>
              <span className="text-[11px] font-mono text-cyan-300">Định mức: {group.fuelRatePer100Km} L/100km</span>
            </div>

            {/* Thanh tải trọng bình quân */}
            <div className="space-y-1 mb-2">
              <div className="flex justify-between text-[11px] text-slate-300">
                <span>Hệ số lợi dụng trọng tải (γ):</span>
                <span className="font-bold text-blue-400">{group.utilizationRatePct}%</span>
              </div>
              <div className="w-full bg-slate-700/60 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${group.utilizationRatePct}%` }}
                ></div>
              </div>
            </div>

            {/* Thanh tỷ lệ chạy rỗng */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-slate-300">
                <span>Tỷ lệ km chạy rỗng:</span>
                <span className={`font-bold ${group.emptyRunPct > 25 ? 'text-rose-400' : 'text-amber-400'}`}>
                  {group.emptyRunPct}%
                </span>
              </div>
              <div className="w-full bg-slate-700/60 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${group.emptyRunPct > 25 ? 'bg-rose-500' : 'bg-amber-500'}`} 
                  style={{ width: `${group.emptyRunPct}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Biểu đồ hình quạt tròn Donut: Cơ cấu thời gian vận hành đoàn xe
interface TimeAllocItem {
  activity: string;
  percentage: number;
  color: string;
}

export const TimeAllocationDonutChart: React.FC<{ items: TimeAllocItem[] }> = ({ items }) => {
  const size = 180;
  const strokeWidth = 26;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let currentOffset = 0;

  return (
    <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
      <h4 className="text-xs font-semibold text-slate-200 mb-2">Cơ cấu Thời gian Hoạt động của Đội xe (24/7)</h4>
      
      <div className="flex items-center justify-around my-2">
        <div className="relative flex items-center justify-center">
          <svg width={size} height={size} className="transform -rotate-90">
            {items.map((item, idx) => {
              const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
              const strokeDashoffset = -currentOffset;
              currentOffset += (item.percentage / 100) * circumference;

              return (
                <circle
                  key={idx}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="transparent"
                  stroke={item.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-500 hover:opacity-90 cursor-pointer"
                />
              );
            })}
          </svg>
          <div className="absolute text-center">
            <div className="text-xl font-bold text-slate-100">62.4%</div>
            <div className="text-[10px] text-slate-400 font-medium">Lăn bánh có hàng</div>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
              <div className="flex flex-col">
                <span className="text-slate-300 text-[11px]">{item.activity}</span>
                <span className="text-slate-100 font-bold font-mono text-[11px]">{item.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-[11px] text-slate-400 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/50 mt-2">
        💡 <strong className="text-blue-300">Nhận định vận hành:</strong> Thời gian chờ xếp dỡ tại Cảng Đình Vũ và Tân Vũ chiếm 17.8% (cao hơn chuẩn 12%). Cần đẩy mạnh làm thủ tục điện tử e-Port để tăng giờ lăn bánh có hàng.
      </div>
    </div>
  );
};
