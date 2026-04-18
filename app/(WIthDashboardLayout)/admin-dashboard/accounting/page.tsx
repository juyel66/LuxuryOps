import FinancialOverview from '@/app/Pages/DashboardComponent/AdminComponents/FinancialOverviewCard';
import RecentTransactions from '@/app/Pages/DashboardComponent/AdminComponents/RecentTransactions';
import TotalEarnDailyRevenueTotalTrent from '@/app/Pages/DashboardComponent/AdminComponents/TotalEarnDailyRevenueTotalTrent';
import React from 'react';

const page = () => {
    return (
        <div>
            <FinancialOverview />
            <TotalEarnDailyRevenueTotalTrent />
            <RecentTransactions />
            
        </div>
    );
};

export default page;