import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardDrawer>{ children }</DashboardDrawer>;
};

export default DashBoardLayout;
