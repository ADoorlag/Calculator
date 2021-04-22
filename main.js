const field = document.getElementById("result-field");

document.querySelectorAll(".add-value").forEach((button) => {
  button.addEventListener("click", addValue);
});

function addValue(e) {
  field.value += e.target.id;
}

document.getElementById("clear").addEventListener("click", clear);
document.getElementById("calculate").addEventListener("click", operate);
document.getElementById("back").addEventListener("click", backSpace);

//backspace mouse events
document.getElementById("back").addEventListener("mousedown", () => {
  document.getElementById("back-arrow").src = "images/Backspace(2).png";
});

document.getElementById("back").addEventListener("mouseup", () => {
  document.getElementById("back-arrow").src = "images/Backspace.png";
});

//main calculator functions

//clear function
function clear() {
  field.value = "";
}

//operate function to calculate result
function operate(e) {
  //don't run if calculator field if empty
  if (field.value == "") {
    field.value = "";
    return;
  }

  //try and catch to ensure valid expression inputs
  try {
    const input = field.value;
    field.value = math.evaluate(input);
  } catch (err) {
    //add show class to error div and make it dissapear again after two seconds
    document.getElementById("error").className = "show";

    setTimeout(() => {
      document.getElementById("error").className = "";
    }, 2000);

    field.value = "";
  } finally {
    e.preventDefault();
  }
}

//backspace function
function backSpace() {
  field.value = field.value.substring(0, field.value.length - 1);
}

//capture key value whenever it is pressed down and activate a corresponding calculator function if it corresponds to a calculator value
document.addEventListener("keydown", function (e) {
  const key = e.key || e.keyCode;

  switch (key) {

    case "1":
      addOne();
      break;

    case "2":
      addTwo();
      break;

    case "3":
      addThree();
      break;

    case "4":
      addFour();
      break;

    case "5":
      addFive();
      break;

    case "6":
      addSix();
      break;

    case "7":
      addSeven();
      break;

    case "8":
      addEight();
      break;

    case "9":
      addNine();
      break;

    case "0":
      addZero();
      break;

    case "(":
      addOpenParent();
      break;

    case ")":
      addClosingParent();
      break;

    case ".":
      addDot();
      break;

    case "-":
      subtraction();
      break;

    case "+":
      addition();
      break;

    case "*":
      multiplication();
      break;

    case "/":
      division();
      break;

    case "=":
      operate(e);
      break;

    case "Enter":
      operate(e);
      break;

    case "Backspace":
      backSpace();
      break;

    case "c":
      clear();
      break;

    case "Delete":
      clear();
      break;

// depreciated keyCode values used in case a primary key value isn't captured or is undefined
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
      operate(e);
      break;

    case 187:
      operate(e);
      break;

    case 99:
      clear();
      break;
  
    case 8:
      backSpace();
      break;
  
    case 46:
      clear();
      break;

    case 13:
      operate(e);
      break;
  }
});

//Functions to add calculable values
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
