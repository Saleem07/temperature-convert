//define UI variables
let celsius = document.getElementById("input-celsius");

let fahren = document.getElementById("input-fahren");

let kelvin = document.getElementById("input-kelvin");

allEvents();

function allEvents() {
  document.getElementById("celbtn").addEventListener("click", getFromCelsius);
  document.getElementById("fahbtn").addEventListener("click", getFromFahren);
  document.getElementById("kelbtn").addEventListener("click", getFromKelvin);
}

function getFromCelsius() {
  if (celsius.value === "") {
    showError("❌ Enter number(s) in Celsius Field ❌");
  } else {
    fahren.value = parseFloat(celsius.value * 1.8 + 32).toFixed(2);
    kelvin.value = parseFloat(celsius.value * 1 + 273.15).toFixed(2);
  }
}

function getFromFahren() {
  if (fahren.value === "") {
    showError("❌ Enter number(s) in Fahrenheit Field ❌");
  } else {
    celsius.value = parseFloat((fahren.value - 32) / 1.8).toFixed(2);
    kelvin.value = parseFloat((fahren.value * 1 + 459.67) / 1.8).toFixed(2);
  }
}

function getFromKelvin() {
  if (kelvin.value === "") {
    showError("❌ Enter number(s) in Kelvin Field ❌");
  } else {
    celsius.value = parseFloat(kelvin.value - 273.15).toFixed(2);
    fahren.value = parseFloat(kelvin.value * 1.8 - 459.67).toFixed(2);
  }
}

document.querySelector("#reset").addEventListener("click", function(e) {
  kelvin.value = "";
  celsius.value = "";
  fahren.value = "";
  e.preventDefault();
});

function showError(error) {
  const errorDiv = document.createElement("div");
  const body = document.querySelector("body");
  const card = document.querySelector("#main");

  errorDiv.className = "alert";
  errorDiv.appendChild(document.createTextNode(error));

  body.insertBefore(errorDiv, card);
  setTimeout(clearError, 3000);
}
function clearError() {
  document.querySelector(".alert").remove();
}
