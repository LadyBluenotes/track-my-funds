import ProtectedPage from "./components/ProtectedPage";
import Table from "./components/Table";

export default function Dashboard() {

  return (
    <ProtectedPage>
      <Table 
        title="Dashboard" 
        tableHead={[
          { columnName: "Total Income" },
          { columnName: "Total Expenses" },
          { columnName: "Remaining" }
        ]}
      />
    </ProtectedPage>
    
  );
}
