// import Example from './scripts/example'

// document.addEventListener("DOMContentLoaded", () => {
    //     console.log("Hello")
    //     const main = document.getElementById("main")
    //     new Example(main);
    // })
    



// import Capy from './scripts/create_chars'

document.addEventListener("DOMContentLoaded", () => {
    console.log("hi");
    setHoles();
    createCapy();
})

function setHoles() {
    for(let i = 1; i < 10; i++) {
        let hole = document.createElement("div");
        hole.id = i.toString();
        hole.classList.add('hole');
        document.getElementById("board").appendChild(hole)
    }

}

function createCapy() {
    let capy = document.createElement("img");
    capy.id = "capy"
    capy.src = './assets/capybara.PNG';
    let hole = document.getElementById("1");
    hole.appendChild(capy);
}

