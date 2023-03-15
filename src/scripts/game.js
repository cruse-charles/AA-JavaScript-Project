import Board from './board'
import Capy from './capy'
import Farmer from './farmer'


class Game {
    constructor() {

        this.board = new Board(this);
        this.capy1 = new Capy(this);
        this.capy2 = new Capy(this);
        this.farmer = new Farmer(this);

        setInterval(() => {
            this.farmer.draw();
        }, 1500);
        setInterval(() => {
            this.capy1.draw();
        }, 1500);

        setInterval(() => {
            this.capy2.draw();
        }, 1500);
        // setInterval(this.capy2.draw.bind(this.capy2), 1000);

        this.score = 0
        this.gameOver = false
    }

    hit() {
        this.score += 10
        document.getElementById("score").innerText = this.score.toString();
    }


}




export default Game