let price = 19.5
let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]



let denomObj = {
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

let cash = document.getElementById("cash");
let changeDue = document.getElementById("change-due");

const purchaseBtn = () => {
  let numCash = parseFloat(cash.value);
  let changeDiff = (numCash - price) * 100;

  if (numCash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (numCash === price) {
    changeDue.innerText = "No change due - customer paid with exact cash";
  } else {
    cid.reverse();
    let registerReturn = [];
    let cidCents = [];

    for (let i = 0; i < cid.length; i++) {
      cidCents.push([cid[i][0], Math.round(cid[i][1] * 100)]);
    }

    cidCents.forEach((elem) => {
      let bills = elem[0];
      let billVals = elem[1];
      let cashCalc = 0;

      // exact change return STATUS CLOSED
      if (changeDiff === billVals) {
        registerReturn.push("C", `${bills}: $${billVals / 100}`);
        return;
      }

      while (changeDiff >= denomObj[bills] && elem[1] > 0) {
        cashCalc += denomObj[bills];
        changeDiff -= denomObj[bills];
        elem[1] -= denomObj[bills];
      }

      // insuff funds
      if (cashCalc < changeDiff) {
        return;
      }
      if (cashCalc !== 0) {
        // cash to return
        registerReturn.push("O", `${bills}: $${cashCalc / 100}`);
      }
    });

    if (registerReturn[0] === "O") {
      const resultO = registerReturn.filter((word) => word != "O");
      changeDue.innerText = `Status OPEN: ${resultO.join(" ")}`
    } else if (registerReturn[0] === "C") {
      const resultC = registerReturn.filter((word) => word != "C");
      changeDue.innerText = `Status CLOSED - ${resultC.join(" ")}`
    } else {
      changeDue.innerText = `Status INSUFFICIENT_FUNDS`
    }
  }
};
