import Table from "./components/Table";

export default function Expense() {

  return (
    <Table 
        title="Expenses" 
        tableHead={[
          { columnName: "Expense" },
          { columnName: "Amount" }
        ]}
      
      />
  );
}
