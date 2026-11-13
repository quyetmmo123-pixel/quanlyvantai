import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  UserRole, Vehicle, ShipmentOrder, SmartConsolidationSuggestion, 
  FuelLog, FuelAuditRecord, BottleneckAlert, DispatchEOrder, KPIData 
} from '../types';
import { 
  INITIAL_VEHICLES, INITIAL_ORDERS, INITIAL_SMART_SUGGESTIONS, 
  INITIAL_BOTTLENECK_ALERTS, INITIAL_DISPATCH_ORDER, INITIAL_FUEL_LOGS, 
  INITIAL_FUEL_AUDITS, MOCK_KPI_DATA 
} from '../data/mockData';

interface ToastNotification {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

interface TMSContextType {
  activeRole: UserRole;
  setActiveRole: (role: UserRole) => void;
  vehicles: Vehicle[];
  orders: ShipmentOrder[];
  smartSuggestions: SmartConsolidationSuggestion[];
  bottleneckAlerts: BottleneckAlert[];
  dispatchOrder: DispatchEOrder;
  fuelLogs: FuelLog[];
  fuelAudits: FuelAuditRecord[];
  kpiData: KPIData;
  notifications: ToastNotification[];
  showToast: (message: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  dismissToast: (id: string) => void;
  
  // Actions
  applySmartSuggestion: (suggId: string) => void;
  createShipmentOrder: (order: Omit<ShipmentOrder, 'id' | 'trackingCode' | 'status'>) => ShipmentOrder;
  updateDispatchStep: (step: 1 | 2 | 3 | 4) => void;
  submitFuelLog: (log: Omit<FuelLog, 'id' | 'date' | 'status'>) => void;
  submitEpod: (signatureData: string, signerName: string, notes: string) => void;
  resolveBottleneck: (alertId: string) => void;
  createNewDispatch: (newDispatch: Omit<DispatchEOrder, 'id' | 'currentStep' | 'stepTimestamps'>) => void;
}

const TMSContext = createContext<TMSContextType | undefined>(undefined);

export const TMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeRole, setActiveRole] = useState<UserRole>('DIRECTOR');
  const [vehicles, setVehicles] = useState<Vehicle[]>(INITIAL_VEHICLES);
  const [orders, setOrders] = useState<ShipmentOrder[]>(INITIAL_ORDERS);
  const [smartSuggestions, setSmartSuggestions] = useState<SmartConsolidationSuggestion[]>(INITIAL_SMART_SUGGESTIONS);
  const [bottleneckAlerts, setBottleneckAlerts] = useState<BottleneckAlert[]>(INITIAL_BOTTLENECK_ALERTS);
  const [dispatchOrder, setDispatchOrder] = useState<DispatchEOrder>(INITIAL_DISPATCH_ORDER);
  const [fuelLogs, setFuelLogs] = useState<FuelLog[]>(INITIAL_FUEL_LOGS);
  const [fuelAudits, setFuelAudits] = useState<FuelAuditRecord[]>(INITIAL_FUEL_AUDITS);
  const [kpiData, setKpiData] = useState<KPIData>(MOCK_KPI_DATA);
  const [notifications, setNotifications] = useState<ToastNotification[]>([]);

  const showToast = (message: string, type: 'success' | 'info' | 'warning' | 'error' = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      dismissToast(id);
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Áp dụng ghép hàng thông minh (Ghép LTL hoặc Chiều về)
  const applySmartSuggestion = (suggId: string) => {
    const sugg = smartSuggestions.find(s => s.id === suggId);
    if (!sugg || sugg.isApplied) return;

    if (sugg.type === 'LTL_MERGE') {
      // Ghép đơn hàng lẻ vào xe 15C-338.19
      setVehicles(prev => prev.map(v => {
        if (v.plateNumber === sugg.targetVehiclePlate) {
          return {
            ...v,
            currentPayloadTons: 14.2,
            utilizationRate: 94.7,
            status: 'IN_TRANSIT',
            destination: 'KCN Quế Võ & KCN Yên Phong (Đã ghép đơn kép)'
          };
        }
        return v;
      }));

      // Cập nhật trạng thái các đơn hàng ghép
      setOrders(prev => prev.map(o => {
        if (sugg.matchedOrderIds.includes(o.id)) {
          return {
            ...o,
            status: 'IN_TRANSIT',
            assignedVehiclePlate: sugg.targetVehiclePlate,
            assignedDriverName: 'Vũ Văn Thắng',
            isLtlConsolidated: true
          };
        }
        return o;
      }));

      // Tăng chỉ số KPI
      setKpiData(prev => ({
        ...prev,
        payloadUtilizationGamma: 85.8,
        emptyRunPct: 20.8,
        fuelSavedLiters: prev.fuelSavedLiters + 45
      }));

      showToast(`Đã xác nhận ghép hàng thành công! Xe ${sugg.targetVehiclePlate} nâng tải trọng lên 94.7%, tiết kiệm 2.150.000đ.`, 'success');
    } else if (sugg.type === 'BACKHAUL_MATCH') {
      // Nhận đơn chiều về cho xe 15H-019.52
      setVehicles(prev => prev.map(v => {
        if (v.plateNumber === sugg.targetVehiclePlate) {
          return {
            ...v,
            currentPayloadTons: 22.0,
            utilizationRate: 68.8,
            status: 'IN_TRANSIT',
            destination: 'Cảng Lạch Huyện (Đơn hàng xuất khẩu chiều về)'
          };
        }
        return v;
      }));

      // Cập nhật đơn hàng xuất khẩu
      setOrders(prev => prev.map(o => {
        if (sugg.matchedOrderIds.includes(o.id)) {
          return {
            ...o,
            status: 'IN_TRANSIT',
            assignedVehiclePlate: sugg.targetVehiclePlate,
            assignedDriverName: 'Trần Đình Trọng',
            isBackhaul: true
          };
        }
        return o;
      }));

      // Cải thiện tỷ lệ chạy rỗng
      setKpiData(prev => ({
        ...prev,
        loadedDistanceBeta: 80.2,
        emptyRunPct: 19.8,
        totalRevenueVnd: prev.totalRevenueVnd + 5400000
      }));

      showToast(`Đã nhận đơn chiều về (Backhaul)! Xe ${sugg.targetVehiclePlate} xóa bỏ 118km chạy rỗng, tăng doanh thu +5.400.000đ.`, 'success');
    }

    setSmartSuggestions(prev => prev.map(s => s.id === suggId ? { ...s, isApplied: true } : s));
  };

  // Khách hàng đặt xe mới từ Customer Portal
  const createShipmentOrder = (orderData: Omit<ShipmentOrder, 'id' | 'trackingCode' | 'status'>) => {
    const newId = `DH-${Math.floor(8100 + Math.random() * 900)}`;
    const newTracking = `NNP-2026-${Math.floor(9000 + Math.random() * 999)}`;
    const newOrder: ShipmentOrder = {
      ...orderData,
      id: newId,
      trackingCode: newTracking,
      status: 'PENDING'
    };

    setOrders(prev => [newOrder, ...prev]);
    showToast(`Tạo đơn hàng thành công! Mã vận đơn: ${newTracking}. Điều độ viên đã nhận được yêu cầu.`, 'success');
    return newOrder;
  };

  // Tài xế cập nhật trạng thái chuyến đi 4 bước
  const updateDispatchStep = (step: 1 | 2 | 3 | 4) => {
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    
    setDispatchOrder(prev => {
      const timestamps = { ...prev.stepTimestamps };
      if (step === 1) timestamps.step1 = `${timeStr} (Tài xế xác nhận nhận lệnh)`;
      if (step === 2) timestamps.step2 = `${timeStr} (Đã đến Cảng Đình Vũ xếp hàng)`;
      if (step === 3) timestamps.step3 = `${timeStr} (Xuất phát lăn bánh vận chuyển)`;
      if (step === 4) timestamps.step4 = `${timeStr} (Đã đến KCN Yên Phong giao hàng)`;

      return {
        ...prev,
        currentStep: step,
        stepTimestamps: timestamps
      };
    });

    // Đồng bộ trạng thái xe & đơn hàng
    if (step === 2) {
      setVehicles(prev => prev.map(v => v.plateNumber === dispatchOrder.vehiclePlate ? { ...v, status: 'LOADING_PORT' } : v));
      setOrders(prev => prev.map(o => o.id === dispatchOrder.orderId ? { ...o, status: 'LOADING' } : o));
      showToast(`Tài xế báo: Đã đến Cảng xếp hàng và hoàn tất thủ tục kẹp chì.`, 'info');
    } else if (step === 3) {
      setVehicles(prev => prev.map(v => v.plateNumber === dispatchOrder.vehiclePlate ? { ...v, status: 'IN_TRANSIT', speedKmh: 75 } : v));
      setOrders(prev => prev.map(o => o.id === dispatchOrder.orderId ? { ...o, status: 'IN_TRANSIT' } : o));
      showToast(`Tài xế báo: Xe đang trên đường vận chuyển theo Cao tốc Hà Nội - Hải Phòng.`, 'info');
    } else if (step === 4) {
      setVehicles(prev => prev.map(v => v.plateNumber === dispatchOrder.vehiclePlate ? { ...v, status: 'AVAILABLE', speedKmh: 0, currentPayloadTons: 0, utilizationRate: 0 } : v));
      setOrders(prev => prev.map(o => o.id === dispatchOrder.orderId ? { ...o, status: 'DELIVERED', epodSignedAt: timeStr } : o));
      showToast(`Tài xế báo: Đã hoàn tất giao hàng thành công tại Kho KCN Yên Phong!`, 'success');
    }
  };

  // Tài xế ký biên bản giao nhận điện tử e-POD
  const submitEpod = (signatureData: string, signerName: string, notes: string) => {
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;

    setOrders(prev => prev.map(o => {
      if (o.id === dispatchOrder.orderId) {
        return {
          ...o,
          status: 'DELIVERED',
          epodSignedAt: timeStr,
          epodSignerName: signerName,
          epodSignatureData: signatureData,
          epodNotes: notes
        };
      }
      return o;
    }));

    updateDispatchStep(4);
    showToast(`Đã tải lên và ký biên bản giao nhận e-POD thành công! Hồ sơ đã lưu trữ vào hệ thống.`, 'success');
  };

  // Tài xế khai báo phiếu đổ nhiên liệu
  const submitFuelLog = (logData: Omit<FuelLog, 'id' | 'date' | 'status'>) => {
    const now = new Date();
    const timeStr = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    const newLog: FuelLog = {
      ...logData,
      id: `FL-${Math.floor(210 + Math.random() * 800)}`,
      date: timeStr,
      status: 'APPROVED'
    };

    setFuelLogs(prev => [newLog, ...prev]);

    // Cập nhật Odometer của xe
    setVehicles(prev => prev.map(v => {
      if (v.plateNumber === logData.vehiclePlate) {
        return {
          ...v,
          odometerKm: Math.max(v.odometerKm, logData.odometerKm),
          fuelPercent: 95
        };
      }
      return v;
    }));

    showToast(`Đã gửi phiếu khai báo nhiên liệu (${logData.liters} lít - ${logData.amountVnd.toLocaleString('vi-VN')} đ). Đã đối soát tự động.`, 'success');
  };

  // Xử lý cảnh báo nghẽn cảng/kho
  const resolveBottleneck = (alertId: string) => {
    const alert = bottleneckAlerts.find(a => a.id === alertId);
    if (!alert) return;

    setBottleneckAlerts(prev => prev.filter(a => a.id !== alertId));
    setVehicles(prev => prev.map(v => {
      if (v.plateNumber === alert.vehiclePlate) {
        return {
          ...v,
          status: 'IN_TRANSIT',
          portWaitMinutes: 10,
          speedKmh: 45
        };
      }
      return v;
    }));

    showToast(`Đã gửi công văn hối thúc điều độ Cảng và giải tỏa điểm nghẽn cho xe ${alert.vehiclePlate}.`, 'info');
  };

  // Điều độ viên phát lệnh điều động mới
  const createNewDispatch = (newDispatch: Omit<DispatchEOrder, 'id' | 'currentStep' | 'stepTimestamps'>) => {
    const newOrderNumber = `LĐ-2026-${Math.floor(100 + Math.random() * 899)}`;
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;

    const created: DispatchEOrder = {
      ...newDispatch,
      id: newOrderNumber,
      currentStep: 1,
      stepTimestamps: {
        step1: `${timeStr} (Điều độ viên phát lệnh trực tuyến)`
      }
    };

    setDispatchOrder(created);

    // Cập nhật trạng thái xe sang nhận lệnh
    setVehicles(prev => prev.map(v => {
      if (v.plateNumber === newDispatch.vehiclePlate) {
        return {
          ...v,
          status: 'IN_TRANSIT',
          destination: newDispatch.deliveryPoint,
          currentPayloadTons: newDispatch.weightTons,
          utilizationRate: Math.round((newDispatch.weightTons / v.maxPayloadTons) * 100),
          activeOrderId: newDispatch.orderId
        };
      }
      return v;
    }));

    // Cập nhật trạng thái đơn hàng
    setOrders(prev => prev.map(o => {
      if (o.id === newDispatch.orderId) {
        return {
          ...o,
          status: 'DISPATCHED',
          assignedVehiclePlate: newDispatch.vehiclePlate,
          assignedDriverName: newDispatch.driverName
        };
      }
      return o;
    }));

    showToast(`Đã phát lệnh điều động ${newOrderNumber} cho tài xế ${newDispatch.driverName} (${newDispatch.vehiclePlate})!`, 'success');
  };

  return (
    <TMSContext.Provider
      value={{
        activeRole,
        setActiveRole,
        vehicles,
        orders,
        smartSuggestions,
        bottleneckAlerts,
        dispatchOrder,
        fuelLogs,
        fuelAudits,
        kpiData,
        notifications,
        showToast,
        dismissToast,
        applySmartSuggestion,
        createShipmentOrder,
        updateDispatchStep,
        submitFuelLog,
        submitEpod,
        resolveBottleneck,
        createNewDispatch
      }}
    >
      {children}
    </TMSContext.Provider>
  );
};

export const useTMS = () => {
  const context = useContext(TMSContext);
  if (!context) {
    throw new Error('useTMS must be used within a TMSProvider');
  }
  return context;
};
