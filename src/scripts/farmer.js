class Farmer {
    constructor(game) {
        this.game = game

        this.farmer = document.createElement("img");
        this.farmer.id = "farmer";
        this.farmer.src = './assets/transparent_farmer.png';
        this.farmer.classList.add('character');

        this.farmer.addEventListener('click', () => {
            this.game.gameOver = true;

            if(this.game.gameOver) {
                let gameOverScreen = document.getElementById("game-over-screen");
                gameOverScreen.style.display = 'block';
                let board = document.getElementById("board");
                board.style.display = "none";
                this.game.bindRestart()
            }
        })
    }


    
    draw() {
    
        if(this.game.gameOver) {
            return
        }

        this.position = randomNum()
        this.farmerHole = document.getElementById(this.position);

        let empty = false
        while(!empty) {
            empty = true;
            if (this.farmerHole.innerHTML != "") {
                empty = false;
                this.position = randomNum();
                this.farmerHole = document.getElementById(this.position);
            }
        }

        this.farmerHole.appendChild(this.farmer);
    
    }


}


function randomNum() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}




export default Farmer;