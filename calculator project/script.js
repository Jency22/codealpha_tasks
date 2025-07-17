const display = document.getElementById("display");
const cover = document.getElementById("cover");
const calculator = document.getElementById("calculator");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function toggleCover() {
  cover.classList.add("open");
}

// Keyboard support
document.addEventListener("keydown", function (e) {
  if ((e.key >= '0' && e.key <= '9') || ["+", "-", "*", "/", "."].includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    e.preventDefault();
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
