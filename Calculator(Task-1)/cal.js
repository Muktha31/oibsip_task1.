const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const themeToggler = document.querySelector(".theme-toggler");
let currentIp = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.id;

        if (value === "clear") {
            currentIp = "";
            updateDisplay();
            return;
        }

        if (value === "backspace") {
            currentIp = currentIp.slice(0, -1);
            updateDisplay();
            return;
        }

        if (value === "equal") {
            try {
                currentIp = eval(currentIp).toString(); 
            } catch {
                currentIp = "Error"; 
            }
            updateDisplay();
            return;
        }

        currentIp += value;
        updateDisplay();
    });
});

function updateDisplay() {
    display.textContent = currentIp; 
    adjustDisplayWidth(); 
}

function adjustDisplayWidth() {
    const displayContent = display.textContent;
    if (displayContent.length > 10) {
        display.style.fontSize = '24px'; 
    } else {
        display.style.fontSize = '36px'; 
    }
}

themeToggler.addEventListener("click", () => {
    const calculator = document.querySelector(".calculator");
    calculator.classList.toggle("dark");
    themeToggler.classList.toggle("active");
});
