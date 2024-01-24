const screen = document.querySelector("[data-screen]");
const btns = document.querySelectorAll("[data-btn]");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        screen.innerText = e.target.innerText;
    });
});


equal.addEventListener("click", () => {
    try {
        screen.innerText = eval(screen.innerText);
    } catch (error) {
        alert("Invalid Input");
        screen.innerText = '0';
    }
});




