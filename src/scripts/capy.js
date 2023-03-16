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
        })


    }

    draw() {

        if(this.game.gameOver) {
            return
        }

        this.position = randomNum()
        this.capyHole = document.getElementById(this.position);
        // console.log(this.position)

// debugger

        this.capy.addEventListener('click', () => {
            this.capyHole.removeChild(this.capy);
            // this.capy.parentElement.innerHTML = "";
        })
        
        
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
        


        
        
        //search for an element with the position, check if it's full, if so put the game while loop in here and let it loop
        //through that, don't draw until the spot is empty here, do this before the append child.

    
    }


    // restart() {
    //     if(this.capyHole){
    //     this.capyHole.removeChild(this.capy);
    //     } else {
    //         return
    //     }
    // }
    
}



function randomNum() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}



export default Capy;
