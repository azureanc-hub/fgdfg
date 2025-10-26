import { Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const LiveViewers = () => {
  const [viewerCount, setViewerCount] = useState(0);

  useEffect(() => {
    const generateRandomCount = () => Math.floor(Math.random() * 20) + 5;
    setViewerCount(generateRandomCount());

    const interval = setInterval(() => {
      setViewerCount(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        const newCount = Math.max(3, Math.min(30, prev + change));
        return newCount;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="bg-zinc-900 border-2 border-yellow-400/30 rounded-full px-5 py-3 shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-105">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Users className="w-5 h-5 text-yellow-400" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-yellow-400">{viewerCount}</span>
            <span className="text-xs text-gray-400 -mt-1">viewing now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveViewers;
