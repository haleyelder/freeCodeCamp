// total cash
let cid = [
  ["PENNY", 1.01], //.01 x 101
  ["NICKEL", 2.05], //.05 x 20?
  ["DIME", 3.1], //.10 x 31
  ["QUARTER", 4.25], //.25 x 17
  ["ONE", 90], //1 x 90
  ["FIVE", 55], //5 x 11
  ["TEN", 20], //2 x 10
  ["TWENTY", 60], //3 x 20
  ["ONE HUNDRED", 100], // 1 x 100
];

// mons denominations
let denom = {
  "ONE HUNDRED": 10000,
  TWENTY: 2000,
  TEN: 1000,
  FIVE: 500,
  ONE: 100,
  QUARTER: 25,
  DIME: 10,
  NICKEL: 5,
  PENNY: 1,
};

cid = [...cid].reverse();
let changeDiff = 9674; // 96.74 x 100, from test case difference

let totalCash = 0;
let changeDue = [];

// cid in cents
cid.forEach((cash) => {
    cash[1] = Math.round(cash[1] * 100)
})


cid.forEach(elem => {
    // initiate currency to the element(array) and currency sum and multiply it by 100, so to work with whole number
    let cur = elem[0];
    // add cidSum to currency sum
    // cidSum += curSum;
    // initiate amount to 0
    let amount = 0;
    // loop through myChange and currency sum
    while (changeDiff >= denom[cur] && elem[1] > 0) {
      amount += denom[cur];
      changeDiff -= denom[cur];
      elem[1] -= denom[cur];
    }
    // if my amount is not equal to zero, then push change and divide amount with 100
    if (amount !== 0) {
      changeDue.push([cur, amount / 100]);
      }
     });

console.log(changeDue)
