const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

const clearButton = document.querySelector(".js-clear");

const delButton = document.querySelector(".js-del");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const buttonValue = (buttonsEl[i].textContent);
        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
};

function clearResult() {
    inputFieldEl.value = "";
}

function calculateResult() {
    inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue;
}

clearButton.addEventListener("click", function clearResult() {
    inputFieldEl.value = "";
});