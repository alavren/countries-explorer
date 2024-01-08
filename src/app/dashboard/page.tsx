import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import React from "react";

import DashboardComponent from "@/components/Dashboard";

const Dashboard = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <DashboardComponent />
    </div>
  );
};

export default Dashboard;