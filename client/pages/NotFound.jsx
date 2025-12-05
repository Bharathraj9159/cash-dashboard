import MainLayout from '../components/MainLayout';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-96 py-12">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle size={32} className="text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">404</h1>
          <p className="text-xl text-slate-600 mb-4">Page Not Found</p>
          <p className="text-slate-600 mb-8">
            The page you're looking for doesn't exist. Return to the dashboard to continue.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
