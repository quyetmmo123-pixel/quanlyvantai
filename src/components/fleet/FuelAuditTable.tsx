import React, { useState } from 'react';
import { useTMS } from '../../context/TMSContext';
import { 
  Fuel, AlertTriangle, CheckCircle, TrendingDown, 
  TrendingUp, Search, Filter, ShieldAlert, Award, FileText 
} from 'lucide-react';

export const FuelAuditTable: React.FC = () => {
  const { fuelAudits, fuelLogs } = useTMS();
  const [activeSubTab, setActiveSubTab] = useState<'AUDIT' | 'LOGS'>('AUDIT');
  const [filterLevel, setFilterLevel] = useState<string>('ALL');

  const filteredAudits = fuelAudits.filter(a => {
    if (filterLevel !== 'ALL' && a.alertLevel !== filterLevel) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      {/* Sub Tabs & Filter */}
      <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveSubTab('AUDIT')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'AUDIT'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Fuel className="w-4 h-4" /> Bảng Đối Soát Định Mức Nhiên Liệu ({fuelAudits.length})
          </button>

          <button
            onClick={() => setActiveSubTab('LOGS')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'LOGS'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" /> Phiếu Đổ Dầu Tài Xế Khai Báo ({fuelLogs.length})
          </button>
        </div>

        {activeSubTab === 'AUDIT' && (
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">Lọc mức độ:</span>
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="bg-slate-950 text-slate-200 text-xs rounded-xl px-3 py-1.5 border border-slate-700 focus:outline-none"
            >
              <option value="ALL">Tất cả các chuyến</option>
              <option value="HIGH_ALERT">🔴 Bất thường (Vượt định mức)</option>
              <option value="SAVED">🟢 Tiết kiệm (Dưới định mức)</option>
              <option value="NORMAL">⚪ Đạt chuẩn (±3%)</option>
            </select>
          </div>
        )}
      </div>

      {/* TAB 1: BẢNG ĐỐI SOÁT ĐỊNH MỨC THEO CHUYẾN */}
      {activeSubTab === 'AUDIT' && (
        <div className="space-y-4">
          {/* Chú thích định mức của NNP Logistics */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 text-xs flex flex-wrap items-center justify-between gap-3 text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              <span>Định mức kỹ thuật NNP:</span>
              <strong className="text-white">Đầu kéo tải nặng: 35.5 - 36.0 L/100km</strong> • 
              <span className="text-slate-400">Đầu kéo rỗng: 26.0 L/100km</span> • 
              <span className="text-slate-400">Xe tải 15T: 23.5 L/100km</span>
            </div>
            <div className="text-[11px] text-amber-300 font-medium">
              ⚠️ Tự động kích hoạt cờ đỏ khi tiêu hao thực tế vượt &gt; +5% so với định mức
            </div>
          </div>

          <div className="overflow-x-auto bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] font-bold tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4">Phương tiện / Tài xế</th>
                  <th className="py-3.5 px-4">Tuyến hành trình</th>
                  <th className="py-3.5 px-4 text-center">Cự ly &amp; Tải</th>
                  <th className="py-3.5 px-4 text-right">Định mức chuẩn</th>
                  <th className="py-3.5 px-4 text-right">Thực tế tiêu hao</th>
                  <th className="py-3.5 px-4 text-right">Chênh lệch (Δ)</th>
                  <th className="py-3.5 px-4 text-center">Đánh giá &amp; Cảnh báo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-medium">
                {filteredAudits.map(record => {
                  const isHighAlert = record.alertLevel === 'HIGH_ALERT';
                  const isSaved = record.alertLevel === 'SAVED';

                  return (
                    <tr 
                      key={record.id} 
                      className={`hover:bg-slate-800/40 transition-colors ${
                        isHighAlert ? 'bg-rose-950/20' : ''
                      }`}
                    >
                      <td className="py-3 px-4">
                        <div className="font-mono font-bold text-white text-xs bg-slate-950 px-2 py-0.5 rounded border border-slate-800 inline-block">
                          {record.vehiclePlate}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{record.driverName}</div>
                      </td>

                      <td className="py-3 px-4">
                        <div className="font-semibold text-slate-100">{record.tripRoute}</div>
                        {record.note && (
                          <div className={`text-[10px] mt-0.5 max-w-xs ${
                            isHighAlert ? 'text-rose-400 font-semibold' : 'text-slate-400'
                          }`}>
                            {record.note}
                          </div>
                        )}
                      </td>

                      <td className="py-3 px-4 text-center font-mono">
                        <div>{record.distanceKm} km</div>
                        <div className="text-[10px] text-slate-400">{record.cargoTons} Tấn hàng</div>
                      </td>

                      <td className="py-3 px-4 text-right font-mono">
                        <div>{record.stdFuelLiters} Lít</div>
                        <div className="text-[10px] text-slate-400">({record.stdRatePer100Km} L/100km)</div>
                      </td>

                      <td className="py-3 px-4 text-right font-mono font-bold text-white">
                        <div>{record.actualFuelLiters} Lít</div>
                        <div className="text-[10px] text-slate-400">
                          ({((record.actualFuelLiters / record.distanceKm) * 100).toFixed(1)} L/100km)
                        </div>
                      </td>

                      <td className="py-3 px-4 text-right font-mono font-bold">
                        <span className={isHighAlert ? 'text-rose-400' : isSaved ? 'text-emerald-400' : 'text-slate-300'}>
                          {record.varianceLiters > 0 ? `+${record.varianceLiters}` : record.varianceLiters} Lít
                        </span>
                        <div className={`text-[10px] ${
                          isHighAlert ? 'text-rose-400' : isSaved ? 'text-emerald-400' : 'text-slate-400'
                        }`}>
                          ({record.variancePct > 0 ? `+${record.variancePct}%` : `${record.variancePct}%`})
                        </div>
                      </td>

                      <td className="py-3 px-4 text-center">
                        {isHighAlert ? (
                          <span className="inline-flex items-center gap-1 bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] font-bold px-2.5 py-1 rounded-full animate-pulse">
                            <AlertTriangle className="w-3 h-3 text-rose-400" /> BẤT THƯỜNG / VƯỢT MỨC
                          </span>
                        ) : isSaved ? (
                          <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold px-2.5 py-1 rounded-full">
                            <Award className="w-3 h-3 text-amber-300" /> TIẾT KIỆM TỐT
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 bg-slate-800 text-slate-300 border border-slate-700 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                            <CheckCircle className="w-3 h-3 text-cyan-400" /> ĐẠT CHUẨN
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: DANH SÁCH PHIẾU ĐỔ DẦU DO TÀI XẾ KHAI BÁO */}
      {activeSubTab === 'LOGS' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fuelLogs.map(log => (
              <div
                key={log.id}
                className="bg-slate-900/90 rounded-2xl border border-slate-800 p-4 shadow-md space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono font-bold text-white text-xs bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {log.vehiclePlate}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    {log.status}
                  </span>
                </div>

                <div className="text-xs">
                  <div className="font-semibold text-slate-200">{log.stationName}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">{log.date}</div>
                </div>

                <div className="grid grid-cols-2 gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-slate-500 block">Số lít nạp:</span>
                    <strong className="text-cyan-300 text-sm">{log.liters} Lít</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 block">Số tiền:</span>
                    <strong className="text-emerald-400 text-sm">{log.amountVnd.toLocaleString('vi-VN')} đ</strong>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400">
                  <span>Số Odometer: </span>
                  <strong className="text-slate-200 font-mono">{log.odometerKm.toLocaleString('vi-VN')} km</strong>
                </div>

                {log.receiptNote && (
                  <div className="text-[10px] text-slate-400 italic bg-slate-800/40 p-2 rounded-lg border border-slate-700/50">
                    {log.receiptNote}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
