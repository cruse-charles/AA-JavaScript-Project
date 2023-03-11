// class Capy{    
//     constructor() {
//         let capy = document.createElement("img")
//         capy.src = '../assets/capybara.PNG'
//     }
// }

// export default Capy

class create_holes{
    constructor() {
        this.hole = create_holes.setHoles();
    }

    setHoles() {
        for(let i = 1; i < 10; i++) {
        hole = document.createElement("div");
        hole.id = i.toString();
        hole.classList.add('hole');
        document.getElementById("board").appendChild(hole)
    }
}

}
export {setHoles}