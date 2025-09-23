import React from 'react';
import CrowdChart from '../../components/features/CrowdChart';
import Card from '../../components/common/Card';
import StatCard from '../../components/dashboard/StatCard';
import { Calendar, TrendingUp, Users } from 'lucide-react';

const CrowdAnalyticsPage = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Crowd Analytics</h1>
        <p className="text-gray-600">Historical data and trend analysis for visitor footfall.</p>
      </div>
      
      <div className="flex items-center space-x-4 mb-8">
        <label className="font-medium">Date Range:</label>
        <input type="date" defaultValue="2025-09-01" className="p-2 border rounded-md"/>
        <span>to</span>
        <input type="date" defaultValue="2025-09-23" className="p-2 border rounded-md"/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Visitors" value="45,890" icon={<Users />} />
        <StatCard title="Busiest Day" value="Sept 15" valueSubtitle="(Sunday)" icon={<Calendar />} />
        <StatCard title="Avg. Daily Footfall" value="~1,995" icon={<TrendingUp />} />
      </div>

      <Card>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Visitor Trends: September 2025</h2>
        {/* Placeholder for a more advanced chart, using the simple one for now */}
        <div className="h-96">
            <CrowdChart />
        </div>
      </Card>
    </div>
  );
};

export default CrowdAnalyticsPage;