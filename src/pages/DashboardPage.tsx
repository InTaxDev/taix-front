import React from 'react';
const DashboardPage: React.FC = () => {
  // 模拟数据
  const summaryData = [
    { title: '总用户', value: '1,234,567', icon: '👥' },
    { title: '总钱包', value: '2,345,678', icon: '💼' },
    { title: '总资产', value: '1.2B', icon: '💰' },
    { title: '总标签', value: '131,234', icon: '🏷️' },
  ];

  const leaderboardData = [
    { rank: '#1', name: '用户A', points: '150,000', address: '0x1234...5678' },
    { rank: '#2', name: '用户B', points: '145,000', address: '0x2345...6789' },
    { rank: '#3', name: '用户C', points: '142,000', address: '0x3456...7890' },
    { rank: '#20', name: '用户T', points: '98,000', address: '0x4567...8901' },
  ];

  return (
    <div className="min-h-screen text-white p-6">
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Web3 数据看板
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {summaryData.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl">{item.icon}</div>
                <div className="text-sm font-medium text-gray-400">{item.title}</div>
              </div>
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
            <h2 className="text-lg font-semibold text-gray-300 mb-4 flex items-center">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
              总用户 (每日)
            </h2>
            <div className="h-60 flex items-center justify-center text-gray-500 bg-white/5 rounded-lg">
              [每日总用户折线图区域]
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
            <h2 className="text-lg font-semibold text-gray-300 mb-4 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              资产规模
            </h2>
            <div className="h-60 flex items-center justify-center text-gray-500 bg-white/5 rounded-lg">
              [资产规模堆叠柱状图区域]
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 积分排行榜 - 表格 */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
            <h2 className="text-lg font-semibold text-gray-300 mb-4 flex items-center">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
              积分排行榜
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-4 w-[80px] text-gray-400 font-medium">Rank</th>
                    <th className="p-4 text-gray-400 font-medium">Name</th>
                    <th className="p-4 text-gray-400 font-medium">Address</th>
                    <th className="p-4 text-right text-gray-400 font-medium">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.slice(0, 3).map((item) => (
                    <tr key={item.rank} className="hover:bg-white/5 transition-colors duration-200">
                      <td className="p-4 font-medium text-cyan-400">{item.rank}</td>
                      <td className="p-4 text-gray-300">{item.name}</td>
                      <td className="p-4 text-gray-400 font-mono text-sm">{item.address}</td>
                      <td className="p-4 text-right text-gray-300">{item.points}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={4} className="text-center text-gray-500 py-4">...</td>
                  </tr>
                  {leaderboardData.length > 3 && (
                    <tr className="hover:bg-white/5 transition-colors duration-200">
                      <td className="p-4 font-medium text-cyan-400">{leaderboardData[3].rank}</td>
                      <td className="p-4 text-gray-300">{leaderboardData[3].name}</td>
                      <td className="p-4 text-gray-400 font-mono text-sm">{leaderboardData[3].address}</td>
                      <td className="p-4 text-right text-gray-300">{leaderboardData[3].points}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
            <h2 className="text-lg font-semibold text-gray-300 mb-4 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              积分分布
            </h2>
            <div className="h-[340px] flex items-center justify-center text-gray-500 bg-white/5 rounded-lg">
              [积分分布水平条形图区域]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 