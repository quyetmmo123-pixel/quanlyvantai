import React, { useState } from 'react';
import { useTMS } from '../../context/TMSContext';
import { Fuel, DollarSign, Gauge, Camera, Check, Plus, X } from 'lucide-react';

export const FuelLogForm: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const { dispatchOrder, submitFuelLog, vehicles } = useTMS();

  const currentVehicle = vehicles.find(v => v.plateNumber === dispatchOrder.vehiclePlate) || vehicles[0];

  const [stationName, setStationName] = useState('Petrolimex Trạm 14 - Cảng Chùa Vẽ, Hải Phòng');
  const [liters, setLiters] = useState<number>(150);
  const [amountVnd, setAmountVnd] = useState<number>(3300000);
  const [odometerKm, setOdometerKm] = useState<number>(currentVehicle.odometerKm + 120);
  const [receiptNote, setReceiptNote] = useState('Đổ dầu trước khi xuất phát cao tốc 5B');
  const [hasReceiptPhoto, setHasReceiptPhoto] = useState(true);

  const handleLitersChange = (val: number) => {
    setLiters(val);
    setAmountVnd(Math.round(val * 22000)); // Giá dầu Diesel 0.05S-II ước tính 22k/l
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitFuelLog({
      vehiclePlate: dispatchOrder.vehiclePlate,
      driverName: dispatchOrder.driverName,
      stationName,
      liters: Number(liters),
      amountVnd: Number(amountVnd),
      odometerKm: Number(odometerKm),
      receiptNote: `${receiptNote} (Đã đính kèm ảnh hoá đơn VAT & đồng hồ cột bơm)`
    });

    if (onClose) onClose();
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Fuel className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Khai Báo Phiếu Đổ Nhiên Liệu Nhanh</h3>
            <p className="text-[11px] text-slate-400">Xe: {dispatchOrder.vehiclePlate} • Tài xế: {dispatchOrder.driverName}</p>
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
        <div>
          <label className="block font-semibold text-slate-300 mb-1">
            Trạm Xăng Dầu Đổ:
          </label>
          <select
            value={stationName}
            onChange={(e) => setStationName(e.target.value)}
            className="w-full bg-slate-950 text-slate-200 text-xs rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-amber-500"
          >
            <option value="Petrolimex Trạm 14 - Cảng Chùa Vẽ, Hải Phòng">Petrolimex Trạm 14 - Cảng Chùa Vẽ, Hải Phòng</option>
            <option value="Trạm Xăng dầu PVOIL Đình Vũ - Đường 356">Trạm Xăng dầu PVOIL Đình Vũ - Đường 356</option>
            <option value="Trạm PVOIL Km 48 Cao tốc Hà Nội - Hải Phòng (Hải Dương)">Trạm PVOIL Km 48 Cao tốc Hà Nội - Hải Phòng (Hải Dương)</option>
            <option value="Petrolimex Trạm 23 - KCN Tiên Sơn Bắc Ninh">Petrolimex Trạm 23 - KCN Tiên Sơn Bắc Ninh</option>
            <option value="Petrolimex KCN Yên Phong - Bắc Ninh">Petrolimex KCN Yên Phong - Bắc Ninh</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold text-slate-300 mb-1">
              Số lít dầu Diesel (Lít):
            </label>
            <input
              type="number"
              min="10"
              max="600"
              value={liters}
              onChange={(e) => handleLitersChange(Number(e.target.value))}
              required
              className="w-full bg-slate-950 text-white font-mono font-bold text-sm rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-300 mb-1">
              Tổng tiền thanh toán (VNĐ):
            </label>
            <input
              type="number"
              step="1000"
              value={amountVnd}
              onChange={(e) => setAmountVnd(Number(e.target.value))}
              required
              className="w-full bg-slate-950 text-emerald-400 font-mono font-bold text-sm rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold text-slate-300 mb-1">
            Số Công-tơ-mét (Odometer) hiện tại trên đồng hồ xe:
          </label>
          <div className="relative">
            <input
              type="number"
              value={odometerKm}
              onChange={(e) => setOdometerKm(Number(e.target.value))}
              required
              className="w-full bg-slate-950 text-cyan-300 font-mono font-bold text-sm rounded-xl p-2.5 pl-9 border border-slate-700 focus:outline-none focus:border-cyan-500"
            />
            <Gauge className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
          </div>
          <span className="text-[10px] text-slate-500 mt-1 block">
            Lần đổ trước: {currentVehicle.odometerKm.toLocaleString('vi-VN')} km (Đã chạy +{odometerKm - currentVehicle.odometerKm} km)
          </span>
        </div>

        {/* Chụp ảnh hóa đơn & cột bơm */}
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-slate-400" />
            <span className="text-slate-300 text-xs">Ảnh chụp cột bơm &amp; Hóa đơn VAT:</span>
          </div>
          <label className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold px-3 py-1.5 rounded-lg cursor-pointer transition-colors border border-slate-700">
            {hasReceiptPhoto ? '✓ Đã chụp (IMG_0891.JPG)' : 'Chụp ảnh'}
            <input
              type="file"
              className="hidden"
              onChange={() => setHasReceiptPhoto(true)}
            />
          </label>
        </div>

        <div>
          <label className="block font-semibold text-slate-300 mb-1">
            Ghi chú chuyến đi / lý do nạp:
          </label>
          <input
            type="text"
            value={receiptNote}
            onChange={(e) => setReceiptNote(e.target.value)}
            className="w-full bg-slate-950 text-slate-300 text-xs rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-amber-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs shadow-lg shadow-amber-900/30 flex items-center justify-center gap-1.5 transition-all"
        >
          <Check className="w-4 h-4" /> Gửi Duyệt Phiếu Nhiên Liệu
        </button>
      </form>
    </div>
  );
};
