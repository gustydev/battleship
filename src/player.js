const Gameboard = require('./gameboard');

class Player {
    constructor(name) {
        this.name = name;
        this.board = new Gameboard();
    }
    attack(target, coord) {
        if (!coord) {
            let random = target.board.grid[Math.floor(Math.random()*target.board.grid.length)];
            while (random.isHit !== false) { // Find valid (not hit) coordinates
                random = target.board.grid[Math.floor(Math.random()*target.board.grid.length)];
            }
            return target.board.receiveAttack(random.coord), random.coord;
        }
        return target.board.receiveAttack(coord), coord;
    }
}

module.exports = Player;
