import MainLayout from '../components/MainLayout';
import QuadrantCard from '../components/QuadrantCard';
import { DollarSign, Settings, CreditCard, Lock } from 'lucide-react';

export default function Dashboard() {
  const quadrants = [
    {
      id: 'cash-liquidity',
      title: 'Cash & Liquidity',
      description: 'Monitor your cash position and liquidity status',
      p1Count: 1,
      p2Count: 1,
      icon: DollarSign,
    },
    {
      id: 'account-setup',
      title: 'Account Setup',
      description: 'Manage account configurations and connections',
      p1Count: 1,
      p2Count: 0,
      icon: Settings,
    },
    {
      id: 'payment-templates',
      title: 'Payment Templates',
      description: 'Review and manage payment instruction templates',
      p1Count: 0,
      p2Count: 2,
      icon: CreditCard,
    },
    {
      id: 'limits-policy',
      title: 'Limits & Policy',
      description: 'Monitor policy compliance and transaction limits',
      p1Count: 1,
      p2Count: 1,
      icon: Lock,
    },
  ];

  return (
    <MainLayout>
      {/* Header Section */}
      <div className="mb-12">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Cash Management Dashboard
            </h1>
            <p className="text-lg text-slate-600">
              Finance Insights Platform • What should you look at first?
            </p>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded-lg border border-slate-200">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
              Total Alerts
            </p>
            <p className="text-2xl font-bold text-slate-900">12</p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-slate-200">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">
              Critical (P1)
            </p>
            <p className="text-2xl font-bold text-red-600">6</p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-slate-200">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">
              Warning (P2)
            </p>
            <p className="text-2xl font-bold text-amber-600">6</p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-slate-200">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
              Last Updated
            </p>
            <p className="text-lg font-semibold text-slate-900">Just now</p>
          </div>
        </div>
      </div>

      {/* Quadrants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quadrants.map((quadrant) => (
          <QuadrantCard
            key={quadrant.id}
            id={quadrant.id}
            title={quadrant.title}
            description={quadrant.description}
            p1Count={quadrant.p1Count}
            p2Count={quadrant.p2Count}
            icon={quadrant.icon}
          />
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <h3 className="text-sm font-bold text-slate-900 mb-2">How to use this dashboard</h3>
        <ul className="space-y-1 text-sm text-slate-700">
          <li className="flex gap-2">
            <span className="text-red-600 font-bold">•</span>
            <span><strong>Critical Alerts (P1):</strong> Require immediate attention and action</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span><strong>Warning Alerts (P2):</strong> Should be reviewed and addressed soon</span>
          </li>
          <li className="flex gap-2">
            <span className="text-indigo-600 font-bold">•</span>
            <span>Click any quadrant to view detailed alerts and recommendations</span>
          </li>
          <li className="flex gap-2">
            <span className="text-indigo-600 font-bold">•</span>
            <span>Use the Assistant panel to get AI-powered insights and explanations</span>
          </li>
        </ul>
      </div>
    </MainLayout>
  );
}
