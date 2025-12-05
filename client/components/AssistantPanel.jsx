import { X } from 'lucide-react';

export default function AssistantPanel({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="border-b border-slate-200 p-6 flex items-center justify-between bg-gradient-to-r from-indigo-50 to-blue-50">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Finance Assistant</h2>
            <p className="text-sm text-slate-600 mt-1">AI-powered insights</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white rounded-lg transition-colors"
            aria-label="Close"
          >
            <X size={20} className="text-slate-600" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-full pb-20">
          <div className="p-6 space-y-6">
            {/* Chat messages */}
            <div className="space-y-4">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="max-w-xs bg-indigo-600 text-white rounded-2xl rounded-tr-none px-4 py-3">
                  <p className="text-sm">
                    Why are you recommending using surplus cash to reduce borrowing?
                  </p>
                  <p className="text-xs text-indigo-100 mt-2">Just now</p>
                </div>
              </div>

              {/* Assistant Message */}
              <div className="flex justify-start">
                <div className="max-w-xs bg-slate-100 text-slate-900 rounded-2xl rounded-tl-none px-4 py-3">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Finance Assistant</p>
                  <p className="text-sm leading-relaxed">
                   You are paying interest on the borrowing at Institution C while holding 1,000,000 of idle cash at Institution A that earns little or no return. Using 750,000 of this surplus to repay part of the borrowing reduces interest cost while keeping an operating buffer in Institution A.   </p>
                 
                  <p className="text-xs text-slate-500 mt-3">2 minutes ago</p>
                </div>
              </div>
            </div>

            {/* Suggested Questions */}
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-3">Suggested Questions</p>
              <div className="space-y-2">
                <button className="w-full text-left text-sm p-3 rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-indigo-300 transition-colors text-slate-700">
                  What are the current liquidity risks?
                </button>
                <button className="w-full text-left text-sm p-3 rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-indigo-300 transition-colors text-slate-700">
                  How can I optimize payment timing?
                </button>
                <button className="w-full text-left text-sm p-3 rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-indigo-300 transition-colors text-slate-700">
                  What limits should I adjust?
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask a question..."
              className="flex-1 px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
