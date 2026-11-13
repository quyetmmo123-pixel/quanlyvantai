import React, { useState } from 'react';
import { useTMS } from '../../context/TMSContext';
import { VehicleType, ShipmentOrder } from '../../types';
import { 
  Building2, Search, Calculator, Calendar, MapPin, 
  Truck, ArrowRight, CheckCircle2, Clock, FileText, 
  Download, Sparkles, ShieldCheck, ChevronRight, PhoneCall
} from 'lucide-react';
import { InvoiceModal } from './InvoiceModal';

export const CustomerPortal: React.FC = () => {
  const { orders, createShipmentOrder } = useTMS();
  const [activeTab, setActiveTab] = useState<'BOOKING' | 'TRACKING'>('TRACKING');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrderForInvoice, setSelectedOrderForInvoice] = useState<ShipmentOrder | null>(null);

  // Form State
  const [customerName, setCustomerName] = useState('Công ty TNHH Samsung Electronics Việt Nam (SEV)');
  const [customerPhone, setCustomerPhone] = useState('0222.369.8888');
  const [pickupPoint, setPickupPoint] = useState('Cảng Đình Vũ - Bến Cầu Cảng số 2, Hải Phòng');
  const [deliveryPoint, setDeliveryPoint] = useState('Kho Logistics SEV, KCN Yên Phong, Bắc Ninh');
  const [vehicleType, setVehicleType] = useState<VehicleType>('CONTAINER_40FT');
  const [cargoType, setCargoType] = useState('Linh kiện điện tử bán dẫn & Bo mạch vi xử lý');
  const [weightTons, setWeightTons] = useState<number>(26.5);
  const [distanceKm, setDistanceKm] = useState<number>(125);
  const [isBackhaulEligible, setIsBackhaulEligible] = useState<boolean>(true);

  // Động cơ tính cước tự động (Automatic Quotation Engine)
  const calculateQuote = () => {
    let ratePerKm = 36000; // Đơn giá base theo loại xe
    if (vehicleType === 'CONTAINER_40FT') ratePerKm = 42000;
    if (vehicleType === 'CONTAINER_20FT') ratePerKm = 35000;
    if (vehicleType === 'TRUCK_15T') ratePerKm = 28000;
    if (vehicleType === 'TRUCK_8T') ratePerKm = 20000;

    const baseFreight = distanceKm * ratePerKm;
    const botFee = 410000; // Phí trạm thu phí cao tốc 5B Hà Nội - Hải Phòng
    const fuelSurcharge = Math.round(baseFreight * 0.08); // Phụ phí xăng dầu 8%
    const discountBackhaul = isBackhaulEligible ? Math.round(baseFreight * 0.15) : 0; // Giảm 15% nếu khớp tuyến chiều về!

    const total = baseFreight + botFee + fuelSurcharge - discountBackhaul;

    return {
      baseFreight,
      botFee,
      fuelSurcharge,
      discountBackhaul,
      total
    };
  };

  const quote = calculateQuote();

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date();
    const pickupTimeStr = `${now.getHours() + 2}:00 ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    const etaStr = `${now.getHours() + 6}:30 ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;

    createShipmentOrder({
      customerName,
      customerPhone,
      pickupPoint,
      deliveryPoint,
      cargoType,
      weightTons: Number(weightTons),
      requiredVehicleType: vehicleType,
      pickupTime: pickupTimeStr,
      etaDelivery: etaStr,
      distanceKm,
      freightPriceVnd: quote.total,
      isBackhaul: isBackhaulEligible
    });

    setActiveTab('TRACKING');
  };

  const filteredOrders = orders.filter(o => {
    if (!searchTerm) return true;
    const t = searchTerm.toLowerCase();
    return (
      o.trackingCode.toLowerCase().includes(t) ||
      o.id.toLowerCase().includes(t) ||
      o.customerName.toLowerCase().includes(t) ||
      o.cargoType.toLowerCase().includes(t)
    );
  });

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Top Navigation & Info */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('TRACKING')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'TRACKING'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Search className="w-4 h-4" /> Tra Cứu Vận Đơn &amp; Chứng Từ e-POD ({orders.length})
          </button>

          <button
            onClick={() => setActiveTab('BOOKING')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'BOOKING'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Calculator className="w-4 h-4 text-cyan-300" /> Đặt Xe Trực Tuyến &amp; Báo Giá Tự Động
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="hidden sm:inline">Cổng dịch vụ số khách hàng:</span>
          <span className="bg-slate-950 text-cyan-400 font-mono font-bold px-2.5 py-1 rounded-lg border border-slate-800">
            SEV Logistics Portal
          </span>
        </div>
      </div>

      {/* TAB 1: TRA CỨU TIẾN ĐỘ ĐƠN HÀNG (TRACKING & TRACING) */}
      {activeTab === 'TRACKING' && (
        <div className="space-y-4">
          {/* Search box */}
          <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 max-w-lg bg-slate-950 px-3.5 py-2.5 rounded-xl border border-slate-700">
              <Search className="w-4 h-4 text-cyan-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Nhập mã vận đơn (VD: NNP-2026-8891), mã đơn hoặc tên hàng..."
                className="bg-transparent text-xs text-white placeholder-slate-500 w-full focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Đang hiển thị <strong>{filteredOrders.length}</strong> đơn hàng vận chuyển</span>
            </div>
          </div>

          {/* Danh sách đơn hàng với Timeline trực quan */}
          <div className="space-y-4">
            {filteredOrders.map(order => {
              const statusMap = {
                PENDING: { label: 'Đang xếp hàng chờ điều xe', step: 1, color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' },
                DISPATCHED: { label: 'Đã phát lệnh - Xe đang di chuyển đến bãi', step: 2, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' },
                LOADING: { label: 'Đang bốc xếp & kẹp chì tại Cảng Hải Phòng', step: 3, color: 'text-blue-400 bg-blue-500/10 border-blue-500/30' },
                IN_TRANSIT: { label: 'Đang vận chuyển trên cao tốc', step: 4, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30' },
                DELIVERED: { label: 'Giao hàng thành công - Đã ký e-POD', step: 5, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' }
              };

              const currentStatus = statusMap[order.status];

              return (
                <div
                  key={order.id}
                  className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-lg space-y-4 hover:border-slate-700 transition-all"
                >
                  {/* Order Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-800/80 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-black text-sm text-cyan-400 bg-blue-950 px-2.5 py-1 rounded-lg border border-blue-800">
                          {order.trackingCode}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">[{order.id}]</span>
                        {order.isBackhaul && (
                          <span className="text-[10px] bg-emerald-950 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-800 flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-300" /> Tuyến chiều về (-15% cước)
                          </span>
                        )}
                      </div>
                      <div className="font-bold text-white text-xs mt-1.5">{order.customerName}</div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${currentStatus.color}`}>
                        {currentStatus.label}
                      </span>
                      <button
                        onClick={() => setSelectedOrderForInvoice(order)}
                        className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-700 flex items-center gap-1.5 transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5 text-cyan-400" /> Xem Hóa đơn &amp; e-POD
                      </button>
                    </div>
                  </div>

                  {/* 5-Step Progress Timeline */}
                  <div className="py-2">
                    <div className="grid grid-cols-5 gap-2 text-center text-[10px]">
                      {['1. Tiếp nhận', '2. Phân xe', '3. Bốc hàng cảng', '4. Đang vận chuyển', '5. Đã giao hàng'].map((label, idx) => {
                        const stepNum = idx + 1;
                        const isDone = currentStatus.step >= stepNum;
                        const isAct = currentStatus.step === stepNum;

                        return (
                          <div key={idx} className="flex flex-col items-center">
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] mb-1 transition-all ${
                                isDone
                                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                                  : 'bg-slate-800 text-slate-500'
                              }`}
                            >
                              {isDone ? '✓' : stepNum}
                            </div>
                            <span className={`font-semibold ${isAct ? 'text-cyan-300 font-bold' : isDone ? 'text-slate-200' : 'text-slate-500'}`}>
                              {label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 h-full rounded-full transition-all duration-500"
                        style={{ width: `${(currentStatus.step / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Chi tiết lộ trình & Phương tiện */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-semibold">Điểm bốc hàng (Hải Phòng):</span>
                      <div className="font-semibold text-slate-200 mt-0.5">{order.pickupPoint}</div>
                      <span className="text-[10px] text-slate-400">{order.pickupTime}</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-semibold">Điểm giao nhận:</span>
                      <div className="font-semibold text-slate-200 mt-0.5">{order.deliveryPoint}</div>
                      <span className="text-[10px] text-cyan-300 font-mono">Dự kiến: {order.etaDelivery}</span>
                    </div>

                    <div className="border-t md:border-t-0 md:border-l border-slate-800 md:pl-3">
                      <span className="text-[10px] text-slate-500 uppercase font-semibold">Phương tiện &amp; Cước:</span>
                      <div className="font-mono font-bold text-cyan-300 mt-0.5">
                        {order.assignedVehiclePlate || 'Đang điều xe'} {order.assignedDriverName ? `(${order.assignedDriverName})` : ''}
                      </div>
                      <div className="text-[11px] text-emerald-400 font-bold font-mono mt-0.5">
                        {order.freightPriceVnd.toLocaleString('vi-VN')} VNĐ
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: ĐẶT XE TRỰC TUYẾN & TÍNH CƯỚC TỰ ĐỘNG (ONLINE BOOKING & QUOTE ENGINE) */}
      {activeTab === 'BOOKING' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form nhập liệu (2 cột) */}
          <div className="lg:col-span-2 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Calculator className="w-4 h-4 text-cyan-400" />
                Phiếu Đặt Xe Vận Tải Trực Tuyến (Online Dispatch Request)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Nhập thông tin hàng hoá để hệ thống tự động tính cước và xếp xe tối ưu tải trọng
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Tên Doanh Nghiệp / Chủ Hàng:
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    className="w-full bg-slate-950 text-white rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Số Điện Thoại Điều Hàng:
                  </label>
                  <input
                    type="text"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    required
                    className="w-full bg-slate-950 text-white rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Tuyến đường Điểm bốc & Điểm trả */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Điểm Lấy Hàng (Cảng / Kho Hải Phòng):
                  </label>
                  <select
                    value={pickupPoint}
                    onChange={(e) => setPickupPoint(e.target.value)}
                    className="w-full bg-slate-950 text-slate-200 rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
                  >
                    <option value="Cảng Đình Vũ - Bến Cầu Cảng số 2, Hải Phòng">Cảng Đình Vũ - Bến Cầu Cảng số 2, Hải Phòng</option>
                    <option value="Cảng Tân Vũ - Bãi Container, Đình Vũ">Cảng Tân Vũ - Bãi Container, Đình Vũ</option>
                    <option value="Cảng Quốc tế Lạch Huyện (TC-HICT) - Hải Phòng">Cảng Quốc tế Lạch Huyện (TC-HICT) - Hải Phòng</option>
                    <option value="Cảng Chùa Vẽ - Kho Ngoại Quan CFS">Cảng Chùa Vẽ - Kho Ngoại Quan CFS</option>
                    <option value="KCN Tràng Duệ, An Dương, Hải Phòng">KCN Tràng Duệ, An Dương, Hải Phòng</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Điểm Giao Hàng (KCN / Nhà Máy):
                  </label>
                  <select
                    value={deliveryPoint}
                    onChange={(e) => {
                      setDeliveryPoint(e.target.value);
                      if (e.target.value.includes('Yên Phong')) setDistanceKm(125);
                      else if (e.target.value.includes('Quế Võ')) setDistanceKm(115);
                      else if (e.target.value.includes('Hà Nội')) setDistanceKm(110);
                      else if (e.target.value.includes('Hải Dương')) setDistanceKm(65);
                    }}
                    className="w-full bg-slate-950 text-slate-200 rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
                  >
                    <option value="Kho Logistics SEV, KCN Yên Phong, Bắc Ninh">Kho Logistics SEV, KCN Yên Phong, Bắc Ninh (125 km)</option>
                    <option value="Nhà máy Foxconn - KCN Quế Võ 1, Bắc Ninh">Nhà máy Foxconn - KCN Quế Võ 1, Bắc Ninh (115 km)</option>
                    <option value="ICD Mỹ Đình / KCN Đài Tư, Hà Nội">ICD Mỹ Đình / KCN Đài Tư, Hà Nội (110 km)</option>
                    <option value="KCN Đại An, TP. Hải Dương">KCN Đại An, TP. Hải Dương (65 km)</option>
                    <option value="KCN Phố Nối A, Hưng Yên">KCN Phố Nối A, Hưng Yên (85 km)</option>
                  </select>
                </div>
              </div>

              {/* Loại xe & Hàng hoá */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Loại Phương Tiện:
                  </label>
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value as any)}
                    className="w-full bg-slate-950 text-slate-200 rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
                  >
                    <option value="CONTAINER_40FT">Đầu kéo Cont 40ft (HC/DC)</option>
                    <option value="CONTAINER_20FT">Đầu kéo Cont 20ft</option>
                    <option value="TRUCK_15T">Xe tải thùng kín 15 Tấn</option>
                    <option value="TRUCK_8T">Xe tải thùng mui bạt 8 Tấn</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Tên Loại Hàng Hoá:
                  </label>
                  <input
                    type="text"
                    value={cargoType}
                    onChange={(e) => setCargoType(e.target.value)}
                    required
                    className="w-full bg-slate-950 text-white rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Khối Lượng Hàng (Tấn):
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    min="1"
                    max="35"
                    value={weightTons}
                    onChange={(e) => setWeightTons(Number(e.target.value))}
                    required
                    className="w-full bg-slate-950 text-cyan-300 font-mono font-bold rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Checkbox ghép chuyến chiều về */}
              <div className="bg-blue-950/40 p-3.5 rounded-xl border border-blue-800/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    id="backhaul-check"
                    checked={isBackhaulEligible}
                    onChange={(e) => setIsBackhaulEligible(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-0 bg-slate-900 border-slate-700"
                  />
                  <label htmlFor="backhaul-check" className="text-slate-200 cursor-pointer">
                    <strong className="text-cyan-300">Tận dụng khung giờ xe chạy rỗng chiều về của NNP:</strong>
                    <span className="block text-[11px] text-slate-400">
                      Được chiết khấu ngay -15% tổng giá cước nếu chấp nhận linh hoạt khung giờ nhận hàng ±60 phút.
                    </span>
                  </label>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-1 rounded border border-emerald-800">
                  TIẾT KIỆM 15%
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Truck className="w-4 h-4" /> Xác Nhận Gửi Yêu Cầu Đặt Xe Ngay
              </button>
            </form>
          </div>

          {/* Bảng tính cước dự kiến (Quotation Engine Card - 1 cột) */}
          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Báo Giá Vận Tải Dự Kiến
                </h4>
                <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded font-mono border border-emerald-800">
                  REAL-TIME QUOTE
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Cự ly vận chuyển dự kiến:</span>
                  <span className="font-mono font-bold text-white">{distanceKm} km</span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span>Cước cơ sở ({vehicleType}):</span>
                  <span className="font-mono text-white">{quote.baseFreight.toLocaleString('vi-VN')} đ</span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span>Phụ phí nhiên liệu (8%):</span>
                  <span className="font-mono text-slate-300">+{quote.fuelSurcharge.toLocaleString('vi-VN')} đ</span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span>Phí BOT Cao tốc 5B Hà Nội - HP:</span>
                  <span className="font-mono text-slate-300">+{quote.botFee.toLocaleString('vi-VN')} đ</span>
                </div>

                {quote.discountBackhaul > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold bg-emerald-950/40 p-2 rounded-lg border border-emerald-900">
                    <span>Ưu đãi chiều về (Backhaul -15%):</span>
                    <span className="font-mono">-{quote.discountBackhaul.toLocaleString('vi-VN')} đ</span>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 mt-4 space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold text-slate-300">TỔNG CƯỚC DỰ KIẾN:</span>
                <span className="text-xl font-black text-cyan-400 font-mono">
                  {quote.total.toLocaleString('vi-VN')} <span className="text-xs text-slate-400">VNĐ</span>
                </span>
              </div>

              <div className="text-[11px] text-slate-400 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800">
                🔒 Giá đã bao gồm bảo hiểm hàng hoá và phí cầu đường cao tốc. Đơn hàng sẽ được chuyển trực tiếp vào màn hình điều phối của NNP Logistics.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Invoice & e-POD Modal */}
      <InvoiceModal
        order={selectedOrderForInvoice}
        isOpen={!!selectedOrderForInvoice}
        onClose={() => setSelectedOrderForInvoice(null)}
      />
    </div>
  );
};
