const background= document.getElementById("background");
const button = document.getElementById("btn")
const main = document.querySelector(".main")

let colorArr = ["red","blue","aqua","green","crimson","cadetblue","chartreuse"]

button.addEventListener ("click",function(){
   let randomColor = colorArr[getRandomColor()]
   main.style.backgroundColor = randomColor;
   background.textContent= randomColor
});
function getRandomColor() {
    return Math.floor(Math.random()* colorArr.length)
}