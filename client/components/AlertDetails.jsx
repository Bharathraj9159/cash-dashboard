import { AlertCircle, AlertTriangle, ChevronRight } from 'lucide-react';

export default function AlertDetails({ alert }) {
  if (!alert) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-8 text-center flex items-center justify-center h-full min-h-96">
        <div>
          <p className="text-slate-600 text-sm">Select an alert to view details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className={`px-6 py-4 bg-gradient-to-r ${
        alert.priority === 'P1'
          ? 'from-red-50 to-red-50/50 border-b-2 border-red-200'
          : 'from-amber-50 to-amber-50/50 border-b-2 border-amber-200'
      }`}>
        <div className="flex items-start gap-3">
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-sm ${
              alert.priority === 'P1'
                ? 'bg-red-500'
                : 'bg-amber-500'
            }`}
          >
            {alert.priority}
          </div>
          <div>
            <h3 className="font-bold text-slate-900">{alert.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{alert.summary}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6 max-h-96 overflow-y-auto">
        {/* Reason / Explanation */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <span className="w-1 h-4 bg-indigo-600 rounded-full" />
            Reason / Explanation
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed">
            {alert.explanation}
          </p>
        </div>

        {/* Recommendation */}
        <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-slate-900 mb-2">Recommended Action</h4>
          <p className="text-sm text-slate-700">{alert.recommendation}</p>
        </div>

        {/* Accounts Involved */}
        {alert.accounts && alert.accounts.length > 0 && (
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Accounts Involved</h4>
            <div className="space-y-2">
              {alert.accounts.map((account) => (
                <div
                  key={account.id}
                  className="p-4 border border-slate-200 rounded-lg hover:border-indigo-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900 text-sm">{account.name}</p>
                      <p className="text-xs text-slate-600 mt-1">{account.institution}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-slate-900">${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                      <p className="text-xs text-slate-500 mt-1">{account.currency}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Details */}
        <div className="pt-4 border-t border-slate-200">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Severity
              </p>
              <p className="text-sm font-semibold text-slate-900">
                {alert.priority === 'P1' ? 'Critical' : 'Medium'}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Category
              </p>
              <p className="text-sm font-semibold text-slate-900">{alert.category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
