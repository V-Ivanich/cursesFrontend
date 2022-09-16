const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
];

const result = giveTalonsInOrder(people, ordersArr);
console.log("result", result);

function giveTalonsInOrder(patients, orders) {
  let result = [];
  for (let item of orders) {
    for (let elem of patients) {
      if (elem["id"] === item) {
        result.push(elem);
      }
    }
  }
  return result;
}
