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
let capyHole1
let capyHole2
let farmerHole
let num1
let num2
let num3
let capy1
let capy2
let farmer
let score = 0
let gameOver = false
let arr = [0,1,2,3,4,5,6,7,8]

// import Capy from './scripts/create_chars'

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


function createCapy1() {

    if(gameOver) {
        return
    }


    if(capyHole1) {
        capyHole1.innerHTML = "";
    }

    capy1 = document.createElement("img");
    capy1.id = "capy1";
    capy1.src = './assets/clear-capybara.png';
    capy1.classList.add('character')

    num1 = randomNum();
 
    capyHole1 = document.getElementById(num1);
    capyHole1.appendChild(capy1);

    capy1.addEventListener('click', () => {
        score += 10;
        document.getElementById("score").innerText = score.toString();
        capyHole1.removeChild(capy1);
    })
    
}


function createCapy2() {

    if(gameOver) {
        return
    }

    if(capyHole2) {
        capyHole2.innerHTML = "";
    }   
    
    capy2 = document.createElement("img");
    // capy2.id = "capy2";
    capy2.src = './assets/clear-capybara.png';
    capy2.classList.add('character')
    
    num2 = randomNum();
    capyHole2 = document.getElementById(num2);
// debugger;
    capyHole2.appendChild(capy2);
// debugger;    
    capy2.addEventListener('click', () => {
        score += 10;
        document.getElementById("score").innerText = score.toString();
        capyHole2.removeChild(capy2);
    })
    

}




function createFarmer() {

    if(gameOver) {
        return
    }

    if(farmerHole) {
        farmerHole.innerHTML = "";
    }

    let farmer = document.createElement("img");
    farmer.id = "farmer";
    farmer.src = './assets/transparent_farmer.png';
    farmer.classList.add('character')

    num3 = randomNum();

    farmerHole = document.getElementById(num3);
    farmerHole.appendChild(farmer);

    farmer.addEventListener('click', () => {
        gameOver = true;
        document.getElementById("h1").innerText = "Game Over: " + score.toString();
    })


}

function runGame() {
    setInterval(createCapy1, 1000);
    // new Capy();
    setInterval(createCapy2, 1000);
    setInterval(createFarmer, 1000);
    setInterval(resetArr, 1000);
}

function randomNum() {
    let num = Math.floor(Math.random() * arr.length);
    let randNum = arr.splice(num,1)[0]
    return randNum.toString();
}

function resetArr() {
    arr = [0,1,2,3,4,5,6,7,8]
}

function clickCapy () {
    //How can I get the clicking to be it's own function

}
