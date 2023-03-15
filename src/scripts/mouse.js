const cursor = document.querySelector('.cursor')

window.addEventListener('mousemove', event => {
    cursor.style.top = event.pageY + 'px'
    cursor .style.left = event.pageX + 'px'
})

window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})

window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})

function startGame() {
    let startScreen = document.getElementById("start-screen")
    let introFarmer = document.getElementById("intro-farmer")
    let canvas = document.getElementById("canvas")
    startScreen.style.display = "none";
    introFarmer.style.display = "none";
    canvas.style.display = "block";
}