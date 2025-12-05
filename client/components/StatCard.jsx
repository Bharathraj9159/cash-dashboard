import { AlertCircle, Clock, CheckCircle, Activity } from 'lucide-react';

const statCardVariants = {
  total: {
    bgGradient: 'from-slate-50 to-slate-50/50',
    borderColor: 'border-slate-200',
    labelColor: 'text-slate-700',
    valueColor: 'text-slate-900',
    iconBg: 'bg-slate-100 group-hover:bg-slate-200',
    iconColor: 'text-slate-600',
    icon: Activity,
  },
  critical: {
    bgGradient: 'from-red-50 to-red-50/50',
    borderColor: 'border-red-200',
    labelColor: 'text-red-700',
    valueColor: 'text-red-600',
    iconBg: 'bg-red-100 group-hover:bg-red-200',
    iconColor: 'text-red-600',
    icon: AlertCircle,
  },
  warning: {
    bgGradient: 'from-amber-50 to-amber-50/50',
    borderColor: 'border-amber-200',
    labelColor: 'text-amber-700',
    valueColor: 'text-amber-600',
    iconBg: 'bg-amber-100 group-hover:bg-amber-200',
    iconColor: 'text-amber-600',
    icon: Clock,
  },
};

export default function StatCard({ label, value, variant = 'total', animate = false }) {
  const config = statCardVariants[variant] || statCardVariants.total;
  const Icon = config.icon;

  return (
    <div className="group">
      <div
        className={`relative p-6 bg-gradient-to-br ${config.bgGradient} rounded-xl border ${config.borderColor} shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden`}
      >
        {/* Background accent animation */}
        <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 opacity-20 group-hover:scale-110 transition-transform duration-300 ${
          variant === 'critical'
            ? 'bg-gradient-to-br from-red-400 to-red-300'
            : variant === 'warning'
            ? 'bg-gradient-to-br from-amber-400 to-amber-300'
            : 'bg-gradient-to-br from-slate-400 to-slate-300'
        }`} />

        <div className="relative z-10">
          {/* Icon and Label */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${config.labelColor}`}>
                {label}
              </p>
            </div>
            <div className={`p-2.5 ${config.iconBg} rounded-lg transition-colors duration-300 flex-shrink-0`}>
              <Icon size={18} className={config.iconColor} />
            </div>
          </div>

          {/* Value */}
          <div className="flex items-baseline gap-2">
            <p className={`text-4xl font-bold ${config.valueColor}`}>
              {value}
            </p>
            {animate && value > 0 && (
              <span className={`inline-flex w-2 h-2 rounded-full animate-pulse ${
                variant === 'critical'
                  ? 'bg-red-500'
                  : variant === 'warning'
                  ? 'bg-amber-500'
                  : 'bg-slate-500'
              }`} />
            )}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
          variant === 'critical'
            ? 'from-red-400 to-transparent'
            : variant === 'warning'
            ? 'from-amber-400 to-transparent'
            : 'from-slate-400 to-transparent'
        }`} />
      </div>
    </div>
  );
}
