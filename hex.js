const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener('click', function () {
    let temp = Math.floor(Math.random() * 16777215);
    let colors = temp.toString(16);
    document.body.style.background = `#${colors}`;
    document.body.style.transition = ".5s";
    color.innerHTML = `#${colors}`;;
    color.style.color = `#${colors}`;
});
