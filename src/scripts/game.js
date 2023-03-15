import Board from './board'
import Capy from './capy'
import Farmer from './farmer'


class Game {
    constructor() {

        this.board = new Board(this);
        this.capy1 = new Capy(this);
        this.capy2 = new Capy(this);
        this.capy3 = new Capy(this)
        this.farmer1 = new Farmer(this);
        this.farmer2 = new Farmer(this);

        // setInterval(() => {
        //     this.farmer.draw();
        // }, 1500);
        // setInterval(() => {
        //     this.capy1.draw();
        // }, 1500);

        // setInterval(() => {
        //     this.capy2.draw();
        // }, 1500);
        // // setInterval(this.capy2.draw.bind(this.capy2), 1000);



        setInterval(() => {
            this.farmer1.draw();
        }, randomNum(500,1500));

        setInterval(() => {
            this.farmer2.draw();
        }, randomNum(500,1500));

        setInterval(() => {
            this.capy1.draw();
        }, randomNum(500,1500));

        setInterval(() => {
            this.capy2.draw();
        }, randomNum(500,1500));

        setInterval(() => {
            this.capy3.draw();
        }, randomNum(500,1500));


        this.score = 0;
        this.gameOver = false;
        
    }

    hit() {
        this.score += 10;
        document.getElementById("score").innerText = this.score.toString();
    }


    
    
    restart() {
        // this.capy1.restart()
        // this.capy2.restart()
        // this.farmer.restart()
        this.score = 0;
        document.getElementById("score").innerText = this.score.toString();
        this.gameOver = false;
        let board = document.getElementById("board");
        board.style.display = "flex";
        let gameOverScreen = document.getElementById("game-over-screen");
        gameOverScreen.style.display = 'none';
    }

    bindRestart() {
        this.gameOverButton = document.getElementById('game-over-button')
        this.gameOverButton.addEventListener('click', this.restart.bind(this))
    }
    
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
    
}

export default Game