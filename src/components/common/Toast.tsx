import React from 'react';
import { useTMS } from '../../context/TMSContext';
import { CheckCircle2, AlertTriangle, Info, XCircle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { notifications, dismissToast } = useTMS();

  if (notifications.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-md w-full pointer-events-none">
      {notifications.map(n => {
        const icons = {
          success: <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />,
          warning: <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0" />,
          error: <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />,
          info: <Info className="w-5 h-5 text-blue-400 flex-shrink-0" />
        };

        const borders = {
          success: 'border-emerald-500/50 bg-slate-900/95 text-slate-100 shadow-emerald-500/10',
          warning: 'border-amber-500/50 bg-slate-900/95 text-slate-100 shadow-amber-500/10',
          error: 'border-rose-500/50 bg-slate-900/95 text-slate-100 shadow-rose-500/10',
          info: 'border-blue-500/50 bg-slate-900/95 text-slate-100 shadow-blue-500/10'
        };

        return (
          <div
            key={n.id}
            className={`pointer-events-auto flex items-start gap-3 p-3.5 rounded-xl border shadow-xl backdrop-blur-md transition-all duration-300 animate-slide-in ${borders[n.type]}`}
          >
            {icons[n.type]}
            <div className="text-xs font-medium leading-relaxed flex-1">{n.message}</div>
            <button
              onClick={() => dismissToast(n.id)}
              className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
