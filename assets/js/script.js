const minus = document.getElementById("minus");
const qty = document.getElementById("qty");
const plus = document.getElementById("plus");

if (minus) {
    minus.addEventListener("click", () => {
        qty.value -= 1 ? qty.value > 1 : 1;
    });
}

if (plus) {
    plus.addEventListener("click", () => {
        qty.value = parseInt(qty.value) + 1;
    });
}