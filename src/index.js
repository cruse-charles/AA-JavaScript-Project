// import Example from './scripts/example'

// document.addEventListener("DOMContentLoaded", () => {
    //     console.log("Hello")
    //     const main = document.getElementById("main")
    //     new Example(main);
    // })
    
//------------------------------------------------------------



// how can i divide these into different classes and call on them, 
//tried it and failed



//******I have to define hole on the outside for capybara photos to create 
//and delete themselves, why?
let hole
let hole2
let hole3
let capy
let capy2
let farmer
let score = 0
let gameOver = false

document.addEventListener("DOMContentLoaded", () => {
    console.log("start");
    setHoles();
    runGame();


    
})

function setHoles() {
    for(let i = 0; i < 9; i++) {
        let hole = document.createElement("div");
        hole.id = i.toString();
        hole.classList.add('hole');
        document.getElementById("board").appendChild(hole)
    }

}


function createCapy() {

    if(hole || hole2) {
        hole.innerHTML = "";
        hole2.innerHTML = "";
    }

    console.log(hole);
    console.log(hole2);
    console.log(hole3)

    capy = document.createElement("img");
    capy.id = "capy";
    capy.src = './assets/capybara.png';

    let num = randomNum();
    hole = document.getElementById(num);
    hole.appendChild(capy);

    capy.addEventListener('click', () => {
        score += 10;
        document.getElementById("score").innerText = score.toString();
        hole.removeChild(capy);
    })

    
    
    
    capy2 = document.createElement("img");
    capy2.id = "capy2";
    capy2.src = './assets/clear-capybara.png';
    
    let num2 = randomNum();
    hole2 = document.getElementById(num2);
    hole2.appendChild(capy2);
    
    capy2.addEventListener('click', () => {
        score += 10;
        document.getElementById("score").innerText = score.toString();
        hole2.removeChild(capy2);
    })
    //****Still have a problem of both capys appearing in same hole and with farmer too
}







function createFarmer() {

    if(hole3) {
        hole3.innerHTML = "";
    }

    let farmer = document.createElement("img");
    farmer.id = "farmer";
    farmer.src = './assets/transparent_farmer.png';

    let num3 = randomNum();
    hole3 = document.getElementById(num3);
    hole3.appendChild(farmer);

    farmer.addEventListener('click', () => {
        gameOver = true
        document.getElementById("score").innerText = "Game Over:" + score.toString();
    })

}

function runGame() {
    setInterval(createCapy,1500);
    setInterval(createFarmer, 1500);

}

function randomNum() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}


function clickCapy () {
    //How can I get the clicking to be it's own function

}
