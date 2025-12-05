import { ChevronRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuadrantCard({ 
  id, 
  title, 
  description, 
  p1Count, 
  p2Count, 
  icon: Icon 
}) {
  const hasAlerts = p1Count > 0 || p2Count > 0;

  return (
    <Link to={`/quadrant/${id}`}>
      <div className="group h-full bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-indigo-300 transition-all duration-300 p-6 cursor-pointer overflow-hidden relative">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-full -mr-12 -mt-12 group-hover:scale-110 transition-transform" />

        <div className="relative z-10">
          {/* Icon and Title */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                {Icon && (
                  <div className="p-2.5 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors">
                    <Icon size={20} className="text-indigo-600" />
                  </div>
                )}
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
              </div>
              <p className="text-sm text-slate-600">{description}</p>
            </div>
          </div>

          {/* Alert Counts */}
          <div className="flex gap-3 mt-6 pt-6 border-t border-slate-100">
            {/* P1 Alerts */}
            <div className="flex-1">
              <div className="p-3 bg-gradient-to-br from-red-50 to-red-50/50 rounded-lg border border-red-200">
                <p className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-1">
                  Critical (P1)
                </p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold text-red-600">{p1Count}</p>
                  {p1Count > 0 && (
                    <AlertCircle size={16} className="text-red-500 animate-pulse" />
                  )}
                </div>
              </div>
            </div>

            {/* P2 Alerts */}
            <div className="flex-1">
              <div className="p-3 bg-gradient-to-br from-amber-50 to-amber-50/50 rounded-lg border border-amber-200">
                <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">
                  Warning (P2)
                </p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold text-amber-600">{p2Count}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 mt-6 text-indigo-600 font-medium text-sm group-hover:gap-3 transition-all">
            <span>View Details</span>
            <ChevronRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
}
