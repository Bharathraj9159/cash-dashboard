import { AlertCircle, AlertTriangle } from 'lucide-react';

export default function AlertsList({ alerts, selectedAlertId, onSelectAlert }) {
  if (alerts.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <AlertCircle className="text-green-600" size={24} />
          </div>
        </div>
        <p className="text-slate-900 font-semibold mb-1">Nothing needs attention here today.</p>
        <p className="text-slate-600 text-sm">All systems running smoothly. Keep monitoring for changes.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="border-b border-slate-200 px-6 py-4 bg-gradient-to-r from-slate-50 to-slate-50/50">
        <h2 className="font-bold text-slate-900">Alerts ({alerts.length})</h2>
      </div>

      <div className="divide-y divide-slate-200 max-h-96 overflow-y-auto">
        {alerts.map((alert) => (
          <button
            key={alert.id}
            onClick={() => onSelectAlert(alert.id)}
            className={`w-full text-left p-4 transition-colors border-l-4 ${
              selectedAlertId === alert.id
                ? 'bg-indigo-50 border-l-indigo-600'
                : 'hover:bg-slate-50 border-l-transparent'
            }`}
          >
            <div className="flex gap-3">
              {/* Priority Badge */}
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-white ${
                  alert.priority === 'P1'
                    ? 'bg-red-500'
                    : 'bg-amber-500'
                }`}
              >
                {alert.priority}
              </div>

              {/* Alert Content */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-900 text-sm">{alert.title}</p>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">{alert.summary}</p>
              </div>

              {/* Alert Icon */}
              {alert.priority === 'P1' && (
                <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-1 animate-pulse" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
