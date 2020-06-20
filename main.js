const field = document.getElementById("result-field");

function Erase() {
  field.value = "";
}

function AddSeven() {
  field.value += "7";
}

function AddEight() {
  field.value += "8";
}

function AddNine() {
  field.value += "9";
}

function AddFour() {
  field.value += "4";
}

function AddFive() {
  field.value += "5";
}

function AddSix() {
  field.value += "6";
}

function AddOne() {
  field.value += "1";
}

function AddTwo() {
  field.value += "2";
}

function AddThree() {
  field.value += "3";
}

function AddZero() {
  field.value += "0";
}

function Addition() {
  field.value += "+";
}

function Subtraction() {
  field.value += "-";
}

function Multiplication() {
  field.value += "*";
}

function Division() {
  field.value += "/";
}

function AddDot() {
  field.value += ".";
}

function AddOpenParent() {
  field.value += "(";
}

function AddClosingParent() {
  field.value += ")";
}

function Backspace() {
  field.value = field.value.substring(0, field.value.length - 1);
}

function Operate() {
  const input = field.value;
  field.value = eval(input);
}
