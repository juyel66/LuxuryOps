import DriverAndRecentActivity from "@/app/Pages/DashboardComponent/AdminComponents/DriverAndRecentActivity";
import OverviewCard from "@/app/Pages/DashboardComponent/AdminComponents/OverviewCard";
import RevenueChartAndUpComming from "@/app/Pages/DashboardComponent/AdminComponents/RevenueChartAndUpComming";

const page = () => {
  return (
    <div className="text-white ">
     <OverviewCard />
     <RevenueChartAndUpComming />
     <DriverAndRecentActivity />
 
      
    </div>
  );
};

export default page;