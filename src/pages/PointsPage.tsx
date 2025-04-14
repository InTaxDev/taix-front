import React from 'react';
import PointsCard from '../components/PointsCard';
import PointsHistory from '../components/PointsHistory';

const mockHistory = [
  {
    id: '1',
    type: 'earn' as const,
    amount: 500,
    description: '完成任务奖励',
    date: '2024-04-11 10:30',
  },
  {
    id: '3',
    type: 'earn' as const,
    amount: 300,
    description: '邀请好友奖励',
    date: '2024-04-10 15:45',
  },
];

const PointsPage: React.FC = () => {
  return (
    <div className="min-h-screen p-8 text-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            积分管理
          </h1>
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 hover:bg-blue-500/30 transition-all duration-300">
              兑换积分
            </button>
            <button className="px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-400 hover:bg-purple-500/30 transition-all duration-300">
              查看规则
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="backdrop-blur-xl bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <PointsCard
              points={1234}
              title="总积分"
              description="您当前的可用积分余额"
              icon="coins"
            />
          </div>
          <div className="backdrop-blur-xl bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <PointsCard
              points={500}
              title="本月获得"
              description="本月累计获得的积分"
              icon="exchange"
            />
          </div>
          <div className="backdrop-blur-xl bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
            <PointsCard
              points={200}
              title="本月使用"
              description="本月累计使用的积分"
              icon="history"
            />
          </div>
        </div>

        <div className="backdrop-blur-xl bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              积分历史
            </h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded-lg bg-gray-700/50 text-gray-300 hover:bg-gray-700/70 transition-all duration-300">
                全部
              </button>
              <button className="px-3 py-1 rounded-lg bg-gray-700/50 text-gray-300 hover:bg-gray-700/70 transition-all duration-300">
                收入
              </button>
              <button className="px-3 py-1 rounded-lg bg-gray-700/50 text-gray-300 hover:bg-gray-700/70 transition-all duration-300">
                支出
              </button>
            </div>
          </div>
          <PointsHistory history={mockHistory} />
        </div>
      </div>
    </div>
  );
};

export default PointsPage; 