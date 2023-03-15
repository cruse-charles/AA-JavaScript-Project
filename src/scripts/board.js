class Board {
    constructor(game) {
        // this.board = Board.setHoles
        // This was wrong above, look into it, i was making a class method
        this.game = game
        this.setHoles();
    }

    setHoles() {
        for(let i = 0; i < 9; i++) {
            let hole = document.createElement("div");
            hole.id = i.toString();
            hole.classList.add('hole');
            document.getElementById("board").appendChild(hole)
        }
    
    }



    
}

export default Board