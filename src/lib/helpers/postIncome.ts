import postExpense from "./postExpense";

function postIncome(newItem: any) {
  fetch("/api/income/addIncome", {
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
