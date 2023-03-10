function postExpense(newItem: any) {
  fetch("/api/expenses/addExpense", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

export default postExpense;
