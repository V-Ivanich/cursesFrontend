const dateStr = new Date("2022 Sep 12");
console.log(dateStr);
const dateUser = new Date(2022, 9, 6);
console.log(dateUser);
const dateUserStr = new Date("2022 7 10");
console.log(dateUserStr);
const dateUserTime = new Date(1630916008000);
console.log(dateUserTime);

function getDateFormat(date, separator) {
  const arrDate = [];
  arrDate.push(date.getFullYear());
  arrDate.push(date.getMonth());
  arrDate.push(date.getDate());
  console.log(arrDate.join(separator));
}

getDateFormat(dateStr, "-");
