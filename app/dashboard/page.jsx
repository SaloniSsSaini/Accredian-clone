import Chart from "../../components/Chart";
import Navbar from "../../components/layout/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="p-10 space-y-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition">
            <p className="text-sm text-gray-500">Users</p>
            <p className="text-2xl font-bold">1200</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition">
            <p className="text-sm text-gray-500">Leads</p>
            <p className="text-2xl font-bold">320</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition">
            <p className="text-sm text-gray-500">Revenue</p>
            <p className="text-2xl font-bold">$12K</p>
          </div>
        </div>

        <Chart />
      </div>
    </>
  );
}