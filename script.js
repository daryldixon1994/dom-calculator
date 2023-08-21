let numberBtns = document.getElementsByClassName("numbers");
let signBtns = document.getElementsByClassName("sign");
let equalBtn = document.querySelector(".sign-equal");
let clearBtn = document.querySelector(".sign-c");
let total = document.getElementById("total");

let value = "";
let value2 = "";

let signBtnIsClicked = false;
let signClicked = "";

function sum(a, b) {
  let sum = a + b;
  value = "";
  value2 = "";
  signBtnIsClicked = false;
  signClicked = "";
  return (total.innerHTML = sum);
}

function soustraction(a, b) {
  let sum = a - b;
  value = "";
  value2 = "";
  signBtnIsClicked = false;
  signClicked = "";
  return (total.innerHTML = sum);
}
function multiple(a, b) {
  let sum = a * b;
  value = "";
  value2 = "";
  signBtnIsClicked = false;
  signClicked = "";
  return (total.innerHTML = sum);
}
function divide(a, b) {
  if (b === 0) {
    value = "";
    value2 = "";
    signBtnIsClicked = false;
    signClicked = "";
    return (total.innerHTML = "0 is not allowed as a divider");
  }
  let sum = a / b;
  value = "";
  value2 = "";
  signBtnIsClicked = false;
  signClicked = "";
  return (total.innerHTML = sum.toFixed(2));
}

for (const btn of numberBtns) {
  btn.addEventListener("click", function () {
    if (signBtnIsClicked) {
      value2 += btn.innerHTML;
      total.innerHTML = value2;
    } else {
      value += btn.innerHTML;
      total.innerHTML = value;
    }
  });
}
for (const btn of signBtns) {
  btn.addEventListener("click", function () {
    signBtnIsClicked = true;
    signClicked = btn.innerHTML;
  });
}
equalBtn.addEventListener("click", function () {
  if (signClicked === "+") {
    sum(Number(value), Number(value2));
  } else if (signClicked === "-") {
    soustraction(Number(value), Number(value2));
  } else if (signClicked === "X") {
    multiple(Number(value), Number(value2));
  } else if (signClicked === "/") {
    divide(Number(value), Number(value2));
  }
});

clearBtn.addEventListener("click", function () {
  value = "";
  value2 = "";
  signBtnIsClicked = false;
  signClicked = "";
  total.innerHTML = "0";
});
