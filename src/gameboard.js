const Ship = require('./ship');

class Gameboard {
    constructor() {
        this.grid = [];
        for (let i = 1; i < 11; i ++) {
            for (let n = 65; n < 90; n++) {
                this.grid.push({
                    coord: String.fromCharCode(n) + i,
                    ship: undefined,
                    hit: false,
                })
            }
        }
    }
    placeShip(ship, coord, direction) {
        
    }
}

module.exports = Gameboard;