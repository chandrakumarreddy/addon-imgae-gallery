let elem = document.querySelectorAll('.image');
console.log(elem[0]);

function clicked(x) {
    x.src = "";
    x.src = "img/blank.png";
}

function randomGenerator() {
    return Math.ceil(Math.random() * 50);
}