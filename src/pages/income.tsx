import ProtectedPage from "./components/ProtectedPage";
import Table from "./components/Table";

export default function Income() {

  return (
    <ProtectedPage>
      <Table 
        title="Income" 
        tableHead={[
          { columnName: "Income Source" },
          { columnName: "Amount" }
        ]}
      
      />
    </ProtectedPage>
  );
}
