class Farmer {
    constructor(game) {
        this.game = game

        this.farmer = document.createElement("img");
        this.farmer.id = "farmer";
        this.farmer.src = './assets/transparent_farmer.png';
        this.farmer.classList.add('character');

        this.farmer.addEventListener('click', () => {
            document.getElementById("h1").innerText = "Game Over: " + this.game.score.toString();
            this.game.gameOver = true;
        })
    }


    
    draw() {
    
        if(this.game.gameOver) {
            return
        }

        this.position = randomNum()
        this.farmerHole = document.getElementById(this.position);
        console.log(this.position)

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