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
        // delete Game();
        new Game();
    }

    document.getElementById("instructions-button").onclick = showInstructions
    function showInstructions() {
        let instructionsScreen = document.getElementById("instructions-screen");
        instructionsScreen.style.display = 'block';

        // let board = document.getElementById('board')
        // board.style.display = 'none';
    }

    document.getElementById('close-instructions-button').onclick = closeInstructions
    function closeInstructions() {
        let instructionsScreen = document.getElementById('instructions-screen');
        instructionsScreen.style.display = 'none';
    }
        

})

