import Game from './scripts/game'

document.addEventListener("DOMContentLoaded", () => {

    

    document.getElementById("start-button").onclick = startGame
    function startGame() {
        let startScreen = document.getElementById("start-screen");
        let introFarmer = document.getElementById("intro-farmer");
        let canvas = document.getElementById("canvas");
        startScreen.style.display = "none";
        introFarmer.style.display = "none";
        canvas.style.display = "block";
        new Game();
    }
        

})

