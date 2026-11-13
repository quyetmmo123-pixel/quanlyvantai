export type UserRole = 'DIRECTOR' | 'DISPATCHER' | 'DRIVER' | 'CUSTOMER' | 'FLEET_TECH';

export type VehicleStatus = 
  | 'IN_TRANSIT'     // Đang chở hàng
  | 'EMPTY_RUN'      // Đang chạy rỗng (cần tìm đơn chiều về)
  | 'LOADING_PORT'   // Đang xếp/dỡ tại cảng/kho
  | 'BOTTLENECK'     // Dừng đỗ quá thời gian quy định tại cảng/kho
  | 'MAINTENANCE'    // Đang bảo dưỡng kỹ thuật
  | 'AVAILABLE';     // Sẵn sàng nhận lệnh

export type VehicleType = 
  | 'CONTAINER_40FT' // Đầu kéo Moóc 40ft (trọng tải 30-32 tấn)
  | 'CONTAINER_20FT' // Đầu kéo Moóc 20ft (trọng tải 25-28 tấn)
  | 'TRUCK_15T'      // Xe tải thùng 3 chân 15 tấn
  | 'TRUCK_8T';       // Xe tải thùng 8 tấn

export interface Vehicle {
  id: string;
  plateNumber: string;         // Biển kiểm soát (VD: 15H-028.66)
  trailerPlate?: string;       // Biển rơ moóc (VD: 15R-012.89)
  model: string;               // Hãng & dòng xe (VD: Chenglong H7 440HP, Hyundai Xcient, Hino 500)
  type: VehicleType;
  maxPayloadTons: number;      // Tải trọng cho phép (tấn)
  currentPayloadTons: number;  // Tải trọng thực tế đang chở
  utilizationRate: number;     // Hệ số sử dụng trọng tải (%) = current / max
  status: VehicleStatus;
  driverId: string;
  driverName: string;
  driverPhone: string;
  currentLocation: string;     // Vị trí GPS hiện tại (Cảng Đình Vũ, Km32 Cao tốc 5B...)
  destination: string;         // Điểm đến
  speedKmh: number;            // Tốc độ km/h
  fuelPercent: number;         // Mức nhiên liệu trong bình (%)
  odometerKm: number;          // Số công-tơ-mét tổng
  portWaitMinutes: number;     // Thời gian dừng/chờ tại cảng/kho (phút)
  stdFuelPer100Km: number;     // Định mức tiêu hao chuẩn (L/100km)
  registrationExpiry: string;  // Hạn đăng kiểm (YYYY-MM-DD)
  insuranceExpiry: string;     // Hạn bảo hiểm TNDS & vật chất (YYYY-MM-DD)
  lastServiceOdo: number;      // Km ở lần bảo dưỡng trước
  nextServiceOdo: number;      // Km đến hạn bảo dưỡng kế tiếp
  activeOrderId?: string;      // Đơn hàng đang chở
}

export interface ShipmentOrder {
  id: string;                  // Mã đơn nội bộ (DH-8091)
  trackingCode: string;        // Mã vận đơn khách tra cứu (NNP-2026-8891)
  customerName: string;        // Tên khách hàng (Công ty TNHH Samsung Electronics VN...)
  customerPhone: string;
  pickupPoint: string;         // Điểm lấy hàng (Cảng Đình Vũ, Cầu Cảng số 3...)
  deliveryPoint: string;       // Điểm giao hàng (KCN Yên Phong, Bắc Ninh...)
  cargoType: string;           // Tên hàng hoá (Linh kiện điện tử, Hạt nhựa, Cuộn thép...)
  weightTons: number;          // Khối lượng hàng (tấn)
  volumeCbm?: number;          // Thể tích m3
  requiredVehicleType: VehicleType;
  status: 'PENDING' | 'DISPATCHED' | 'LOADING' | 'IN_TRANSIT' | 'DELIVERED';
  assignedVehiclePlate?: string;
  assignedDriverName?: string;
  pickupTime: string;          // Giờ hẹn bốc hàng
  etaDelivery: string;         // Giờ dự kiến giao
  distanceKm: number;          // Khoảng cách tuyến đường (km)
  freightPriceVnd: number;     // Cước phí vận chuyển (VNĐ)
  isLtlConsolidated?: boolean; // Được ghép đơn lẻ (LTL)
  isBackhaul?: boolean;        // Là đơn hàng chiều về (giảm rỗng)
  epodSignedAt?: string;       // Thời gian ký e-POD
  epodSignerName?: string;     // Người nhận hàng ký tên
  epodSignatureData?: string;  // Dữ liệu chữ ký base64
  epodNotes?: string;
}

export interface SmartConsolidationSuggestion {
  id: string;
  type: 'LTL_MERGE' | 'BACKHAUL_MATCH';
  title: string;
  description: string;
  targetVehiclePlate: string;
  matchedOrderIds: string[];
  originalCapacityPct: number;
  optimizedCapacityPct: number;
  deadheadKmSaved: number;
  costSavedVnd: number;
  revenueAddedVnd: number;
  pickupRoute: string;
  isApplied: boolean;
}

export interface FuelLog {
  id: string;
  vehiclePlate: string;
  driverName: string;
  date: string;
  stationName: string;
  liters: number;
  amountVnd: number;
  odometerKm: number;
  receiptNote?: string;
  status: 'APPROVED' | 'PENDING' | 'FLAGGED';
}

export interface FuelAuditRecord {
  id: string;
  vehiclePlate: string;
  driverName: string;
  tripRoute: string;
  distanceKm: number;
  cargoTons: number;
  stdRatePer100Km: number;     // Định mức tiêu hao chuẩn (L/100km)
  stdFuelLiters: number;       // Số lít dầu định mức cho chuyến
  actualFuelLiters: number;    // Số lít dầu thực tế tiêu thụ
  varianceLiters: number;      // Chênh lệch (lít) = Thực tế - Định mức
  variancePct: number;         // Chênh lệch (%) = (Thực tế - Định mức) / Định mức * 100
  alertLevel: 'SAVED' | 'NORMAL' | 'HIGH_ALERT'; // Thưởng / Chuẩn / Bất thường
  note?: string;
}

export interface BottleneckAlert {
  id: string;
  vehiclePlate: string;
  driverName: string;
  driverPhone: string;
  location: string;
  waitDurationMinutes: number;
  thresholdMinutes: number;
  severity: 'WARNING' | 'CRITICAL';
  reason: string;
}

export interface DispatchEOrder {
  id: string;
  orderId: string;
  vehiclePlate: string;
  trailerPlate?: string;
  driverName: string;
  driverPhone: string;
  pickupPoint: string;
  deliveryPoint: string;
  cargoType: string;
  weightTons: number;
  sealNumber: string;
  optimalRoute: string;
  tollFeeEstimateVnd: number;
  distanceKm: number;
  eta: string;
  currentStep: 1 | 2 | 3 | 4; // 1: Đã nhận lệnh, 2: Đã đến kho/cảng xếp hàng, 3: Đang vận chuyển, 4: Hoàn thành giao hàng
  stepTimestamps: {
    step1?: string;
    step2?: string;
    step3?: string;
    step4?: string;
  };
}

export interface KPIData {
  fleetOperationalRate: number;       // Tỷ lệ xe vận doanh (%)
  payloadUtilizationGamma: number;    // Hệ số sử dụng trọng tải bình quân gamma (%)
  loadedDistanceBeta: number;         // Hệ số sử dụng quãng đường có hàng beta (%)
  totalTonKm: number;                 // Tổng sản lượng Tấn.km
  totalRevenueVnd: number;            // Doanh thu (VNĐ)
  totalFuelCostVnd: number;           // Chi phí nhiên liệu (VNĐ)
  emptyRunPct: number;                // Tỷ lệ chạy rỗng (%) = 100 - beta
  fuelSavedLiters: number;            // Dầu tiết kiệm được nhờ điều độ thông minh
  monthlyComparison: Array<{
    month: string;
    revenueMil: number;
    fuelCostMil: number;
    emptyRunPct: number;
    tonKmK: number;
  }>;
  fleetGroupStats: Array<{
    groupName: string;
    vehicleCount: number;
    utilizationRatePct: number;
    emptyRunPct: number;
    fuelRatePer100Km: number;
  }>;
  timeAllocation: Array<{
    activity: string;
    percentage: number;
    color: string;
  }>;
}
