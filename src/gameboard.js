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
        let xAxis = coord.slice(0, 1);
        let yAxis = Number(coord.slice(1));
        for (let i = 0; i < ship.size; i++) {
            if (yAxis < 1 || xAxis.charCodeAt(0) > 74) { // Out of bounds cases
                return false;
            }
            ship.positions.push(`${xAxis + yAxis}`);
            if (direction === 'vertical') {
                yAxis -= 1;
            } else {
                xAxis = String.fromCharCode(a.charCodeAt(0) + 1);
            }
        }
        const shipCoords = [];
        ship.positions.forEach((p) => {
            const sq = this.grid.find((square) => square.coord === p)
            sq.ship = ship.name;
            shipCoords.push(sq);
        })
        return shipCoords;
    }
}

module.exports = Gameboard;