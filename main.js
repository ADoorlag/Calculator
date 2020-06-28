const field = document.getElementById("result-field");

document.querySelectorAll(".add-value").forEach((button) => {
  button.addEventListener("click", addValue);
});

function addValue(e) {
  //let value = "";
  if (e.target.classList.contains("add-value")) {
    field.value += e.target.id;
  } else {
    console.log("Not a valid calculator value");
  }
}

document.getElementById("clear").addEventListener("click", clear);
document.getElementById("calculate").addEventListener("click", operate);
document.getElementById("back").addEventListener("click", backSpace);

function clear() {
  field.value = "";
}

function operate() {
  if (field.value == "") {
    field.value = "";
    return;
  }

  const input = field.value;
  field.value = eval(input);
}

function backSpace() {
  field.value = field.value.substring(0, field.value.length - 1);
}

//primary keyboard catching event
document.addEventListener("keypress", function (e) {
  const code = e.keyCode;

  switch (code) {
    case 49:
      addOne();
      break;

    case 50:
      addTwo();
      break;

    case 51:
      addThree();
      break;

    case 52:
      addFour();
      break;

    case 53:
      addFive();
      break;

    case 54:
      addSix();
      break;

    case 55:
      addSeven();
      break;

    case 56:
      addEight();
      break;

    case 57:
      addNine();
      break;

    case 48:
      addZero();
      break;

    case 40:
      addOpenParent();
      break;

    case 41:
      addClosingParent();
      break;

    case 46:
      addDot();
      break;

    case 45:
      subtraction();
      break;

    case 43:
      addition();
      break;

    case 42:
      multiplication();
      break;

    case 47:
      division();
      break;

    case 61:
      operate();
      break;

    case 13:
      operate();
      break;
  }
});

//secondary backspace and delete keyboard event
document.addEventListener("keydown", function (e) {
  const code = e.keyCode;

  switch (code) {
    case 8:
      backSpace();
      break;

    case 46:
      clear();
      break;

    case 13:
      operate();
      break;
  }
});

//keyboard functions
function addSeven() {
  field.value += "7";
}

function addEight() {
  field.value += "8";
}

function addNine() {
  field.value += "9";
}

function addFour() {
  field.value += "4";
}

function addFive() {
  field.value += "5";
}

function addSix() {
  field.value += "6";
}

function addOne() {
  field.value += "1";
}

function addTwo() {
  field.value += "2";
}

function addThree() {
  field.value += "3";
}

function addZero() {
  field.value += "0";
}

function addition() {
  field.value += "+";
}

function subtraction() {
  field.value += "-";
}

function multiplication() {
  field.value += "*";
}

function division() {
  field.value += "/";
}

function addDot() {
  field.value += ".";
}

function addOpenParent() {
  field.value += "(";
}

function addClosingParent() {
  field.value += ")";
}
