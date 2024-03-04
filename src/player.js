const Gameboard = require('./gameboard');

class Player {
    constructor(name) {
        this.name = name;
        this.board = new Gameboard();
    }
    attack(player, coord) {
        
    }
}

module.exports = Player;
