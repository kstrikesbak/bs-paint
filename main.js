const brush = document.querySelector('.current-brush')
const classes = brush.classList;
document.querySelector('#reset').addEventListener('click', resetEverything)
function resetEverything() {
    document.location.reload(true);
}
document.querySelector('.color-1').addEventListener('click', changeBrush)
function changeBrush() {
    classes.replace(classes[1] , 'color-1')
}
document.querySelector('.color-2').addEventListener('click', changeBrush1)
function changeBrush1() {
    classes.replace(classes[1], 'color-2')
}
document.querySelector('.color-3').addEventListener('click', changeBrush2)
function changeBrush2() {
    classes.replace(classes[1], 'color-3')
}
document.querySelector('.color-4').addEventListener('click', changeBrush3)
function changeBrush3() {
    classes.replace(classes[1], 'color-4')
}
document.querySelector('.color-5').addEventListener('click', changeBrush4)
function changeBrush4() {
    classes.replace(classes[1], 'color-5')
}
document.querySelector('.color-6').addEventListener('click', changeBrush5)
function changeBrush5() {
    classes.replace(classes[1], 'color-6')
}

const allSquares = document.querySelectorAll('.square')
let newSquares = Array.from(allSquares)
const squareClass =newSquares.classList
for (let i = 0; i < newSquares.length; i++) {
    newSquares[i].addEventListener("click", function(event) {
        newSquares[i].classList.replace(newSquares[i].classList[1], classes[1])
})
}