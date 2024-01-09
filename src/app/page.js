import DashboardCard from "./components/datsboard-card/dashboard-card";
import Table from "./components/table/table";

export default function Home() {
  return (
    <>
      <div className="px-4 py-4">
        <div className="grid grid-cols-6 gap-4">
          <DashboardCard icon="Invoice" title="Total Invoice" />
          <DashboardCard icon="Order" title="Total Order" number={0} />
          <DashboardCard icon="Running" title="Running Order" number={0} />
          <DashboardCard icon="Complete" title="Complete Order" number={0} />
          <DashboardCard icon="Cancel" title="Cancel Order" number={0} />
          <DashboardCard icon="Amount" title="Total Income" />
        </div>

        <div
          className="my-4"
          style={{
            backgroundColor: "#263846",
            padding: "20px",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <Table />
        </div>
      </div>
    </>
  );
}
