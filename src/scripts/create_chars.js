class Capy {
    constructor() {

        // if(gameOver) {
        //     return
        // }


        
        let capy1 = document.createElement("img");
        capy1.id = "capy1";
        capy1.src = './assets/clear-capybara.png';
        
        let num1 = randomNum();
        
        let capyHole1 = document.getElementById(num1);
        
        capyHole1.appendChild(capy1);
        
        if(capyHole1) {
            capyHole1.innerHTML = "";
        }
        

        capy1.addEventListener('click', () => {
            score += 10;
            document.getElementById("score").innerText = score.toString();
            capyHole1.removeChild(capy1);
        })
    
        
    }
}


function randomNum() {
    let num = Math.floor(Math.random() * arr.length);
    let randNum = arr.splice(num,1)[0]
    return randNum.toString();
    // return num
}

let arr = [0,1,2,3,4,5,6,7,8]
export default Capy;