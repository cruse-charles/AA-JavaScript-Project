class Capy {
    constructor() {

    }
    // if(gameOver) {
    //     return
    // }

    createCapy1() {

        let capy1 = document.createElement("img");
        capy1.src = './assets/clear-capybara.png';
        capy1.classList.add('character')
        
        let num1 = randomNum();
        let capyHole1 = document.getElementById(num1);
    
        if(capyHole1) {
            capyHole1.innerHTML = "";
        }
    
        capyHole1.appendChild(capy1);
    
        capy1.addEventListener('click', () => {
            score += 10;
            document.getElementById("score").innerText = score.toString();
            capyHole1.removeChild(capy1);
        })
    }
    
}


let arr = [0,1,2,3,4,5,6,7,8]
function randomNum() {
    let num = Math.floor(Math.random() * arr.length);
    let randNum = arr.splice(num,1)[0];
    return randNum.toString();
}

setInterval(Capy.createCapy1,1500)


export default Capy;