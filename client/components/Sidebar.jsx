import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DollarSign, Settings, CreditCard, Lock, Menu, X } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const quadrants = [
    {
      id: 'cash-liquidity',
      label: 'Cash & Liquidity',
      icon: DollarSign,
      path: '/quadrant/cash-liquidity',
      color: 'from-blue-500 to-purple-600',
      hoverBg: 'hover:bg-blue-50'
    },
    {
      id: 'account-setup',
      label: 'Account Setup',
      icon: Settings,
      path: '/quadrant/account-setup',
      color: 'from-blue-500 to-purple-600',
      hoverBg: 'hover:bg-purple-50'
    },
    {
      id: 'payment-templates',
      label: 'Payment Templates',
      icon: CreditCard,
      path: '/quadrant/payment-templates',
      color: 'from-blue-500 to-purple-600',
      hoverBg: 'hover:bg-cyan-50'
    },
    {
      id: 'limits-policy',
      label: 'Limits & Policy',
      icon: Lock,
      path: '/quadrant/limits-policy',
      color: 'from-blue-500 to-purple-600',
      hoverBg: 'hover:bg-orange-50'
    }
  ];

  const isActive = (path) => {
    return location.pathname === path || 
           (location.pathname === '/' && path === '/quadrant/cash-liquidity');
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  
  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed md:hidden top-4 right-4 z-50 p-2 bg-white rounded-lg border border-slate-200 shadow-md hover:bg-slate-50 transition-colors"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for Mobile - Full screen blocking */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-200 shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:z-0 md:relative md:translate-x-0 flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-8 text-white border-b border-indigo-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-indigo-600 font-bold text-lg">C</span>
            </div>
            <div>
              <h2 className="text-lg font-bold">CashFlow</h2>
              <p className="text-xs text-indigo-100">Finance Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
         <div className="border-t border-slate-200 px-4 py-4">
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center justify-center px-4 py-2 bg-indigo-50 hover:bg-indigo-100 border border-blue-500
 text-indigo-700 rounded-lg font-medium transition-colors text-sm"
          >
            Home
          </Link>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {quadrants.map((quadrant) => {
            const Icon = quadrant.icon;
            const active = isActive(quadrant.path);

            
            return (
              <Link
                key={quadrant.id}
                to={quadrant.path}
                onClick={handleNavClick}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 group ${
                  active
                    ? `bg-gradient-to-r ${quadrant.color} text-white shadow-md`
                    : `text-slate-700 ${quadrant.hoverBg}`
                }`}
              >
                <Icon size={20} />
                <span className="text-sm">{quadrant.label}</span>
              </Link>

              
            );

            
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="border-t border-slate-200 px-4 py-4">
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center justify-center px-4 py-2 bg-indigo-50 hover:bg-indigo-100 border border-blue-500
 text-indigo-700 rounded-lg font-medium transition-colors text-sm"
          >
            Back to Dashboard
          </Link>
        </div>
      </aside>
    </>
  );
}
