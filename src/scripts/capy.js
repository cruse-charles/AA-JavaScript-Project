class Capy {
    constructor(game) {
        this.game = game
        
        this.capy = document.createElement("img");
        this.capy.src = './assets/clear-capybara.png';
        this.capy.classList.add('character');
        this.sound = new Audio('./assets/assets_smash.mp3')

        this.capy.addEventListener('click', () => {
            this.game.hit()
            this.sound.play()
            this.capyHole.removeChild(this.capy)
        })

    }

    draw() {

        if(this.game.gameOver) {
            return
        }

        this.position = randomNum()
        this.capyHole = document.getElementById(this.position);

        let empty = false
        while(!empty) {
            empty = true;
            if (this.capyHole.innerHTML != "") {
                empty = false;
                this.position = randomNum();
                this.capyHole = document.getElementById(this.position);
            }
        }
        
        this.capyHole.appendChild(this.capy);
    }
}

function randomNum() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

export default Capy;