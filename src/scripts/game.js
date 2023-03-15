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
        //     this.farmer1.draw();
        // }, randomNum(500,1500));

        // setInterval(() => {
        //     this.farmer2.draw();
        // }, randomNum(500,1500));

        // setInterval(() => {
        //     this.capy1.draw();
        // }, randomNum(500,1500));

        // setInterval(() => {
        //     this.capy2.draw();
        // }, randomNum(500,1500));

        setInterval(() => {
            this.capy3.draw();
        }, 3000);

        setInterval(() => {
            this.incrementTimer();
        }, 1000)

        this.score = 0;
        this.gameOver = false;
        this.timer = 60
        
    }

    hit() {
        this.score += 10;
        document.getElementById("score").innerText = this.score.toString();
    }

    incrementTimer() {
        document.getElementById("timer").innerText = this.timer.toString()
        this.timer -= 1
        if (this.timer == 0){
            this.gameOver = true;
        }

        if(this.gameOver) {
            let gameOverScreen = document.getElementById("game-over-screen");
            gameOverScreen.style.display = 'block';
            let board = document.getElementById("board");
            board.style.display = "none";
            this.timer = 0
            clearInterval(() => {
                this.incrementTimer();
            }, 1000)
            this.bindRestart()
        }
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
        this.timer = 60
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