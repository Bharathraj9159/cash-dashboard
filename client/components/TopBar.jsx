import { DollarSign, Settings, CreditCard, Lock, HelpCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function TopBar({ title, description, quadrantId, onAssistantOpen }) {
  const location = useLocation();

  const quadrantIcons = {
    'cash-liquidity': DollarSign,
    'account-setup': Settings,
    'payment-templates': CreditCard,
    'limits-policy': Lock,
  };

  const quadrantColors = {
    'cash-liquidity': 'from-blue-500 to-blue-600',
    'account-setup': 'from-purple-500 to-purple-600',
    'payment-templates': 'from-cyan-500 to-cyan-600',
    'limits-policy': 'from-orange-500 to-orange-600',
  };

  const Icon = quadrantIcons[quadrantId] || DollarSign;
  const colorClass = quadrantColors[quadrantId] || 'from-indigo-500 to-indigo-600';

  // ✅ Only show assistant on /quadrant/... routes
  // for safety, we check includes as well
  const path = location.pathname || '';
  const showAssistant =
    path.startsWith('/quadrant') || path.includes('/quadrant/');

  return (
    <div className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between gap-3">
        {/* Left Section */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <div className={`p-2.5 sm:p-3 bg-gradient-to-br ${colorClass} rounded-lg shadow-md flex-shrink-0`}>
            <Icon size={22} className="text-white sm:hidden" />
            <Icon size={24} className="text-white hidden sm:block" />
          </div>
          <div className="min-w-0">
            <h1 className="text-lg sm:text-2xl font-bold text-slate-900 truncate">
              {title}
            </h1>
            <p className="hidden sm:block text-sm text-slate-600 mt-1">
              {description}
            </p>
            <p className="sm:hidden text-xs text-slate-500 mt-0.5 line-clamp-1">
              {description}
            </p>
          </div>
        </div>

        {/* Right Section – Ask Assistant button */}
        {showAssistant && (
          <div className="flex items-center gap-2">
            {/* Desktop / tablet button */}
            <button
              onClick={onAssistantOpen}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 
                         text-indigo-700 rounded-lg font-medium transition-colors border border-indigo-200"
            >
              <HelpCircle size={18} />
              <span>Ask Assistant</span>
            </button>

            {/* Mobile icon-only button */}
            <button
              onClick={onAssistantOpen}
              className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-full 
                         bg-indigo-600 text-white shadow-md active:scale-95 transition-transform"
              aria-label="Ask Assistant"
            >
              <HelpCircle size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
