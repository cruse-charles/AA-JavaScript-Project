// import Example from './scripts/example'

// document.addEventListener("DOMContentLoaded", () => {
    //     console.log("Hello")
    //     const main = document.getElementById("main")
    //     new Example(main);
    // })
    
//------------------------------------------------------------



// how can i divide these into different classes and call on them, tried it and failed



//I have to define hole on the outside for capybara photos to create and delete themselves, why?
let hole

document.addEventListener("DOMContentLoaded", () => {
    console.log("hi");
    setHoles();
    createCapy();
    runGame()
})

function setHoles() {
    for(let i = 1; i < 10; i++) {
        let hole = document.createElement("div");
        hole.id = i.toString();
        hole.classList.add('hole');
        document.getElementById("board").appendChild(hole)
    }

}

let capy

function createCapy() {

    if(hole) {
        hole.innerHTML = "";
    }


    capy = document.createElement("img");
    capy.id = "capy";
    capy.src = './assets/capybara.PNG';

    let num = randomNum();
    hole = document.getElementById(num);
    hole.appendChild(capy);

}

function runGame() {
    setInterval(createCapy,1000);
}

function randomNum() {
    let num = Math.floor(Math.random() * 10);
    return num.toString();
}