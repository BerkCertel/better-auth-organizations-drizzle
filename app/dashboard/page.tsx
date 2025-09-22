import Logout from "@/components/logout";

function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <div>
        <h1>Dashboard</h1>
      </div>
      <Logout />
    </div>
  );
}

export default DashboardPage;
