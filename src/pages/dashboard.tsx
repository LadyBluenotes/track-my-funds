import Table from "./components/Table";

export default function Dashboard() {

  return (
    <Table 
        title="Dashboard" 
        tableHead={[
          { columnName: "Total Income" },
          { columnName: "Total Expenses" },
          { columnName: "Remaining" }
        ]}
      />
  );
}
