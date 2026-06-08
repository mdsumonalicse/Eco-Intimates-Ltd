import React, { ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-soft-gray p-6">
          <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center border border-navy/5">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
              <AlertCircle className="text-red-500" size={40} />
            </div>
            <h2 className="text-2xl font-tech font-bold text-navy uppercase tracking-tight mb-4">
              System Interrupted
            </h2>
            <p className="text-navy/60 font-medium mb-8 leading-relaxed">
              An unexpected error occurred. This might be due to a library compatibility issue or a temporary glitch.
            </p>
            <div className="bg-soft-gray/50 rounded-xl p-4 mb-8 text-left">
              <p className="text-[10px] font-tech font-bold text-navy/40 uppercase mb-2 tracking-widest">Error Trace</p>
              <code className="text-xs text-red-600 block break-words line-clamp-3">
                {this.state.error?.message}
              </code>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-navy text-white font-tech font-bold py-4 rounded-xl uppercase tracking-widest hover:bg-emerald transition-all flex items-center justify-center gap-3"
            >
              <RefreshCw size={18} /> Re-initialize System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
