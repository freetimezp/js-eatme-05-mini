//change qty
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

//animation

const flavorName = document.getElementById("flavor-name");
const flavorDesc = document.getElementById("flavor-desc");

const nachoCheese = document.getElementById("nacho-cheese");
const coolRanch = document.getElementById("cool-ranch");
const sweetChilli = document.getElementById("sweet-chilli");

let currentImg = "nacho_cheese.webp";
let progress = 0;

const animation1 = anime.timeline({
    autoplay: false,
    update: function (anim) {
        progress = Math.round(anim.progress);
    },
    complete: function (anim) {
        progress = 0;
    }
});

animation1.add({
    targets: "#pack-img",
    translateX: -1500,
    scale: 0,
    rotate: "2deg",
    changeComplete: function (anim) {
        document.querySelector("#pack-img").src = "./assets/images/" + currentImg;
    }
}).add({
    targets: "#pack-img",
    translateX: 0,
    scale: 1,
    rotate: "-15deg",
});

coolRanch.addEventListener("click", () => {
    if (currentImg === "cool_ranch.webp" || progress > 0) return;

    flavorName.innerText = "Cool Ranch";
    flavorDesc.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit tenetur perferendis.";
    currentImg = "cool_ranch.webp";
    animation1.play();
});

sweetChilli.addEventListener("click", () => {
    if (currentImg === "spicy_sweet_chilli.webp" || progress > 0) return;

    flavorName.innerText = "Sweet Chilli";
    flavorDesc.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit tenetur perferendis.";
    currentImg = "spicy_sweet_chilli.webp";
    animation1.play();
});

nachoCheese.addEventListener("click", () => {
    if (currentImg === "nacho_cheese.webp" || progress > 0) return;

    flavorName.innerText = "Nacho Cheese";
    flavorDesc.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit tenetur perferendis.";
    currentImg = "nacho_cheese.webp";
    animation1.play();
});


