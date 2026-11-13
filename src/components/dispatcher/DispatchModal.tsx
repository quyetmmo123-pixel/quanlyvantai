import React, { useState } from 'react';
import { useTMS } from '../../context/TMSContext';
import { X, Send, Truck, User, MapPin, Package, ShieldCheck, FileText } from 'lucide-react';

export const DispatchModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { vehicles, orders, createNewDispatch } = useTMS();

  const [selectedVehiclePlate, setSelectedVehiclePlate] = useState(vehicles[0]?.plateNumber || '');
  const [selectedOrderId, setSelectedOrderId] = useState(orders.find(o => o.status === 'PENDING')?.id || orders[0]?.id || '');
  const [sealNumber, setSealNumber] = useState(`NNP-SEAL-${Math.floor(10000 + Math.random() * 89999)}`);
  const [optimalRoute, setOptimalRoute] = useState('Cảng Đình Vũ -> Đường 356 -> Cao tốc Hà Nội - Hải Phòng (CT04) -> Nút giao Yên Mỹ -> KCN Yên Phong (125km)');

  if (!isOpen) return null;

  const currentVehicle = vehicles.find(v => v.plateNumber === selectedVehiclePlate) || vehicles[0];
  const currentOrder = orders.find(o => o.id === selectedOrderId) || orders[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentVehicle || !currentOrder) return;

    createNewDispatch({
      orderId: currentOrder.id,
      vehiclePlate: currentVehicle.plateNumber,
      trailerPlate: currentVehicle.trailerPlate,
      driverName: currentVehicle.driverName,
      driverPhone: currentVehicle.driverPhone,
      pickupPoint: currentOrder.pickupPoint,
      deliveryPoint: currentOrder.deliveryPoint,
      cargoType: currentOrder.cargoType,
      weightTons: currentOrder.weightTons,
      sealNumber: sealNumber,
      optimalRoute: optimalRoute,
      tollFeeEstimateVnd: 410000,
      distanceKm: currentOrder.distanceKm || 120,
      eta: currentOrder.etaDelivery || '18:00 13/11/2026'
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/30 text-cyan-400 flex items-center justify-center">
              <Send className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Phát Lệnh Điều Động Điện Tử (E-Dispatch Order)</h3>
              <p className="text-[11px] text-slate-400">Đồng bộ tức thời sang điện thoại của tài xế và khách hàng</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
          {/* Chọn đầu xe & Đơn hàng */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Chọn Phương tiện &amp; Tài xế:
              </label>
              <select
                value={selectedVehiclePlate}
                onChange={(e) => setSelectedVehiclePlate(e.target.value)}
                className="w-full bg-slate-950 text-slate-200 text-xs rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
              >
                {vehicles.map(v => (
                  <option key={v.id} value={v.plateNumber}>
                    {v.plateNumber} - {v.model} (TX: {v.driverName} - {v.status === 'AVAILABLE' ? '🟢 Sẵn sàng' : '🟡 ' + v.status})
                  </option>
                ))}
              </select>
              <div className="text-[11px] text-slate-400 mt-1">
                Tài xế phụ trách: <strong className="text-slate-200">{currentVehicle?.driverName}</strong> ({currentVehicle?.driverPhone})
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Chọn Đơn hàng vận chuyển:
              </label>
              <select
                value={selectedOrderId}
                onChange={(e) => setSelectedOrderId(e.target.value)}
                className="w-full bg-slate-950 text-slate-200 text-xs rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
              >
                {orders.map(o => (
                  <option key={o.id} value={o.id}>
                    [{o.id}] {o.customerName.substring(0, 30)}... ({o.weightTons} Tấn)
                  </option>
                ))}
              </select>
              <div className="text-[11px] text-slate-400 mt-1">
                Trọng lượng: <strong className="text-cyan-300">{currentOrder?.weightTons} Tấn</strong> • {currentOrder?.cargoType}
              </div>
            </div>
          </div>

          {/* Lộ trình Điểm bốc & Điểm giao */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-start gap-2 text-xs">
              <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] text-slate-400">Điểm bốc hàng (Pick-up):</span>
                <div className="font-semibold text-slate-200">{currentOrder?.pickupPoint}</div>
              </div>
            </div>
            <div className="flex items-start gap-2 text-xs border-t border-slate-800/80 pt-2">
              <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] text-slate-400">Điểm trả hàng (Drop-off):</span>
                <div className="font-semibold text-slate-200">{currentOrder?.deliveryPoint}</div>
              </div>
            </div>
          </div>

          {/* Số kẹp chì / Seal & Lộ trình */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Số Kẹp Chì / Container Seal:
              </label>
              <input
                type="text"
                value={sealNumber}
                onChange={(e) => setSealNumber(e.target.value)}
                required
                className="w-full bg-slate-950 text-slate-200 text-xs rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Ước tính Phí Cầu đường BOT:
              </label>
              <input
                type="text"
                disabled
                value="410.000 VNĐ (Cao tốc Hà Nội - Hải Phòng)"
                className="w-full bg-slate-950/60 text-slate-400 text-xs rounded-xl p-2.5 border border-slate-800 cursor-not-allowed"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Gợi ý Lộ trình Vận Tải Tối Ưu:
            </label>
            <textarea
              rows={2}
              value={optimalRoute}
              onChange={(e) => setOptimalRoute(e.target.value)}
              className="w-full bg-slate-950 text-slate-200 text-xs rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Actions */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800"
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 flex items-center gap-2"
            >
              <Send className="w-4 h-4" /> Phát Lệnh Điều Động Điện Tử
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
