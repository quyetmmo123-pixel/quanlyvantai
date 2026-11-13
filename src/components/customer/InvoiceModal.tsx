import React from 'react';
import { ShipmentOrder } from '../../types';
import { X, Printer, Download, CheckCircle, ShieldCheck, Building2 } from 'lucide-react';

export const InvoiceModal: React.FC<{ order: ShipmentOrder | null; isOpen: boolean; onClose: () => void }> = ({
  order,
  isOpen,
  onClose
}) => {
  if (!isOpen || !order) return null;

  const basePrice = order.freightPriceVnd || 4500000;
  const vatPrice = Math.round(basePrice * 0.08); // VAT 8% ngành logistics vận tải
  const totalPrice = basePrice + vatPrice;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/30 text-cyan-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Chứng Từ &amp; Hóa Đơn Vận Tải Điện Tử</h3>
              <p className="text-[11px] text-slate-400">Mã vận đơn: {order.trackingCode}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Invoice Printable View */}
        <div className="p-6 space-y-5 overflow-y-auto bg-slate-950 text-xs">
          {/* Company Banner */}
          <div className="flex justify-between items-start border-b border-slate-800 pb-4">
            <div>
              <h4 className="font-black text-sm text-white">CÔNG TY TNHH ĐẦU TƯ VÀ XUẤT NHẬP KHẨU NNP</h4>
              <p className="text-slate-400 text-[11px] mt-0.5">Địa chỉ: Km 5 Đường 356, KCN Đình Vũ, Đông Hải 2, Hải An, Hải Phòng</p>
              <p className="text-slate-400 text-[11px]">Mã số thuế: 0201889988 • Hotline: 1900.8899 • Email: van-tai@nnplogistics.vn</p>
            </div>
            <div className="text-right">
              <span className="font-mono text-cyan-400 font-bold bg-blue-950 px-2 py-1 rounded border border-blue-800">
                HÓA ĐƠN ĐIỆN TỬ
              </span>
              <div className="text-[10px] text-slate-500 mt-1">Số: NNP-HD/26/{order.id.replace('DH-', '')}</div>
            </div>
          </div>

          {/* Customer info */}
          <div className="grid grid-cols-2 gap-4 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold">Khách hàng / Đơn vị nhận:</span>
              <div className="font-bold text-slate-100 text-xs mt-0.5">{order.customerName}</div>
              <div className="text-slate-400 text-[11px]">Điện thoại: {order.customerPhone}</div>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold">Phương tiện vận chuyển:</span>
              <div className="font-mono font-bold text-cyan-300 text-xs mt-0.5">
                {order.assignedVehiclePlate || '15H-028.66'} (TX: {order.assignedDriverName || 'Nguyễn Văn Dũng'})
              </div>
              <div className="text-slate-400 text-[11px]">Loại xe: {order.requiredVehicleType}</div>
            </div>
          </div>

          {/* Trip details */}
          <div className="space-y-2">
            <div className="flex justify-between py-1 border-b border-slate-800 text-slate-300">
              <span className="text-slate-400">Tuyến đường:</span>
              <span className="font-medium text-white">{order.pickupPoint} &rarr; {order.deliveryPoint}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800 text-slate-300">
              <span className="text-slate-400">Hàng hoá vận chuyển:</span>
              <span className="font-medium text-white">{order.cargoType} ({order.weightTons} Tấn)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800 text-slate-300">
              <span className="text-slate-400">Trạng thái giao nhận:</span>
              <span className="text-emerald-400 font-bold">
                {order.status === 'DELIVERED' ? '✓ Đã hoàn tất giao hàng & ký e-POD' : 'Đang vận chuyển'}
              </span>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-4 space-y-2">
            <div className="flex justify-between text-slate-300">
              <span>Cước vận tải cơ sở:</span>
              <span className="font-mono">{basePrice.toLocaleString('vi-VN')} đ</span>
            </div>
            <div className="flex justify-between text-slate-400 text-[11px]">
              <span>Thuế GTGT (VAT 8%):</span>
              <span className="font-mono">{vatPrice.toLocaleString('vi-VN')} đ</span>
            </div>
            <div className="flex justify-between text-white font-bold text-sm pt-2 border-t border-slate-800">
              <span>TỔNG TIỀN THANH TOÁN:</span>
              <span className="font-mono text-cyan-300">{totalPrice.toLocaleString('vi-VN')} VNĐ</span>
            </div>
          </div>

          {/* Chữ ký số e-POD */}
          {order.epodSignedAt && (
            <div className="bg-emerald-950/30 p-3.5 rounded-xl border border-emerald-800/50 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
                  <CheckCircle className="w-4 h-4" /> Ký nhận điện tử e-POD hợp lệ
                </div>
                <div className="text-[11px] text-slate-300 mt-1">Người ký: <strong>{order.epodSignerName}</strong></div>
                <div className="text-[10px] text-slate-400 font-mono">Thời gian: {order.epodSignedAt}</div>
              </div>
              <div className="text-right">
                <span className="text-[9px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded font-mono border border-emerald-700">
                  DIGITALLY SIGNED
                </span>
              </div>
            </div>
          )}

          {/* Footer buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" /> In Chứng Từ
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Tải File PDF e-POD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
