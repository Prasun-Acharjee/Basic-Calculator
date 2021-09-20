var result = document.getElementById("output");

function clearScreen() {
  result.value = "";
}

function addToDisplay(value) {
  console.log(result.value + value);
  result.value = result.value + value;
}

function calculate() {
  var finalValue = result.value;
  var output = eval(finalValue);
  console.log(output);
  result.value = output;
}
