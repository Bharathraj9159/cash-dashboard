import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import AssistantPanel from './AssistantPanel';
import { HelpCircle } from 'lucide-react';



export default function MainLayout({
  children,
  topBar = null,
  isAssistantOpen,      // 🔁 remove default false here
  onAssistantClose = null,
}) {
  const [internalAssistantOpen, setInternalAssistantOpen] = useState(false);
  const location = useLocation();

  // ✅ true when you are on http://localhost:8081/
  const isHome = location.pathname === '/';

  // ✅ Use controlled prop if provided, otherwise internal state
  const assistantOpen =
    typeof isAssistantOpen === 'boolean' ? isAssistantOpen : internalAssistantOpen;

  const handleAssistantClose = () => {
    if (onAssistantClose) {
      onAssistantClose();
    } else {
      setInternalAssistantOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 h-screen">
        {/* Top Header - Only on Dashboard (home) */}
        {!topBar && (
          <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo for mobile */}
                <Link to="/" className="flex md:hidden items-center gap-2 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                    <span className="text-white font-bold text-xs">C</span>
                  </div>
                </Link>

                <h1 className="text-xl font-bold text-slate-900 flex-1">
                  Cash Management Dashboard
                </h1>

                {/* Right Actions */}
                {/* ✅ Hide Ask Assistant button on home ("/") */}
                {!isHome && (
                  <button
                    onClick={() => setInternalAssistantOpen(true)}
                    className="hidden sm:flex items-center gap-2 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg font-medium transition-colors border border-indigo-200 ml-auto"
                  >
                    <HelpCircle size={18} />
                    Ask Assistant
                  </button>
                )}
              </div>
            </div>
          </header>
        )}

        {/* Top Bar if provided (for quadrant pages) */}
        {topBar}

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="px-4 sm:px-6 lg:px-8 py-8">{children}</div>
        </main>
      </div>

      {/* Assistant Panel */}
      <AssistantPanel isOpen={assistantOpen} onClose={handleAssistantClose} />
    </div>
  );
}
