import React, { useRef, useState, useEffect } from 'react';
import { useTMS } from '../../context/TMSContext';
import { X, CheckCircle2, PenTool, Eraser, Camera, ShieldCheck } from 'lucide-react';

export const EPodModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { dispatchOrder, submitEpod } = useTMS();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const [signerName, setSignerName] = useState('Lê Tuấn Vũ (Thủ kho Samsung SEV)');
  const [cargoCondition, setCargoCondition] = useState('Đầy đủ nguyên seal, không móp méo');
  const [sealConfirmed, setSealConfirmed] = useState(true);

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#0F172A';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#38BDF8';
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Drawing handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    setHasSignature(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#0F172A';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const signatureData = canvasRef.current ? canvasRef.current.toDataURL() : '';
    submitEpod(signatureData, signerName, `${cargoCondition}. Số seal: ${dispatchOrder.sealNumber}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        {/* Header */}
        <div className="px-5 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Biên Bản Giao Nhận Điện Tử (e-POD)</h3>
              <p className="text-[11px] text-slate-400">Ký xác nhận nhận hàng trực tuyến &amp; Bàn giao seal</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 overflow-y-auto">
          {/* Thông tin đơn hàng */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1.5 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Mã lệnh điều động:</span>
              <span className="font-mono font-bold text-white">{dispatchOrder.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Phương tiện / Tài xế:</span>
              <span className="font-bold text-cyan-300">{dispatchOrder.vehiclePlate} ({dispatchOrder.driverName})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Hàng hoá:</span>
              <span className="font-medium text-slate-200">{dispatchOrder.cargoType} ({dispatchOrder.weightTons} Tấn)</span>
            </div>
            <div className="flex justify-between border-t border-slate-800 pt-1.5">
              <span className="text-slate-400">Số Kẹp Chì / Seal:</span>
              <span className="font-mono font-extrabold text-amber-300">{dispatchOrder.sealNumber}</span>
            </div>
          </div>

          {/* Xác nhận tình trạng seal */}
          <div className="flex items-center gap-2 bg-slate-800/40 p-3 rounded-xl border border-slate-700/60">
            <input
              type="checkbox"
              id="seal-check"
              checked={sealConfirmed}
              onChange={(e) => setSealConfirmed(e.target.checked)}
              className="w-4 h-4 rounded text-blue-600 focus:ring-0 bg-slate-900 border-slate-700"
            />
            <label htmlFor="seal-check" className="text-xs text-slate-200 cursor-pointer">
              Xác nhận số kẹp chì trùng khớp và còn nguyên vẹn 100% khi bàn giao.
            </label>
          </div>

          {/* Tên người ký nhận */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Họ tên &amp; Chức vụ người nhận hàng / Thủ kho:
            </label>
            <input
              type="text"
              value={signerName}
              onChange={(e) => setSignerName(e.target.value)}
              required
              className="w-full bg-slate-950 text-slate-200 text-xs rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Ghi chú tình trạng hàng hoá bàn giao:
            </label>
            <input
              type="text"
              value={cargoCondition}
              onChange={(e) => setCargoCondition(e.target.value)}
              className="w-full bg-slate-950 text-slate-200 text-xs rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Khung chữ ký cảm ứng Canvas */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <PenTool className="w-3.5 h-3.5 text-cyan-400" /> Ký tên điện tử trực tiếp trên màn hình:
              </label>
              <button
                type="button"
                onClick={clearCanvas}
                className="text-[11px] text-slate-400 hover:text-rose-400 flex items-center gap-1"
              >
                <Eraser className="w-3 h-3" /> Ký lại
              </button>
            </div>

            <div className="border border-slate-700 rounded-xl overflow-hidden bg-slate-950 relative">
              <canvas
                ref={canvasRef}
                width={450}
                height={160}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className="w-full h-40 touch-none cursor-crosshair"
              />
              {!hasSignature && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-slate-600 text-xs">
                  (Dùng ngón tay hoặc chuột để ký tên xác nhận vào đây)
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800"
            >
              Đóng
            </button>
            <button
              type="submit"
              disabled={!sealConfirmed}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-900/30 flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" /> Ký &amp; Hoàn Tất Giao Hàng
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
