import Table from "./components/Table";

export default function Income() {

  return (
    <Table 
        title="Income" 
        tableHead={[
          { columnName: "Income Source" },
          { columnName: "Amount" }
        ]}
      
      />
  );
}
