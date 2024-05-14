const colors = ["red", "green", "blue", "yellow", "pink", "black", "skyblue", "white"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const animation = document.querySelector(".container");
btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber()
    let temp = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[temp+1];
    document.body.style.transition = ".5s";
    color.innerHTML = colors[temp+1];
    color.style.color = colors[temp+1];
    animation.style.transition = ".5s";
    // console.log(randomNumber);
    // document.getElementById('background').style.backgroundColor =colors[randomNumber];

});
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}