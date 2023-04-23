import ProtectedPage from "./components/ProtectedPage";
import Table from "./components/Table";

export default function Expense() {

  return (
    <ProtectedPage>
      <Table 
        title="Expenses" 
        tableHead={[
          { columnName: "Expense" },
          { columnName: "Amount" }
        ]}
      
      />
    </ProtectedPage>
    
  );
}
