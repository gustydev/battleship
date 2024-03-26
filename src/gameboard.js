class Gameboard {
    constructor() {
        this.grid = [];

        for (let i = 1; i < 11; i ++) {
            for (let n = 65; n < 75; n++) {
                this.grid.push({
                    coord: String.fromCharCode(n) + i,
                    ship: undefined,
                    isHit: false,
                })
            }
        }

        this.ships = [];
    }

    isOutOfBounds(xAxis, yAxis) {
        if (yAxis < 1 || xAxis.charCodeAt(0) >= 75) {
            return true;
        }
        return false;
    }

    coordIsTaken(coord) {
        const found = this.grid.find((sh) => sh.coord === coord);

        if (found.ship) {
            return true;
        }
        return false;
    }

    placeShip(ship, coord, direction) {
        let xAxis = coord.slice(0, 1);
        let yAxis = Number(coord.slice(1));

        for (let i = 0; i < ship.size; i++) {
            if (this.isOutOfBounds(xAxis, yAxis) || this.coordIsTaken(xAxis + yAxis)) {
                return false;
            }
            ship.positions[i] = {coord: xAxis + yAxis, isHit: false};
            if (direction === 'vertical') {
                yAxis -= 1;
            } else {
                xAxis = String.fromCharCode(xAxis.charCodeAt(0) + 1);
            }
        }

        const shipCoords = []; // For the tests

        ship.positions.forEach((p) => {
            const sq = this.grid.find((square) => square.coord === p.coord)
            sq.ship = ship.name;
            shipCoords.push(sq);
        })

        if (!this.ships.includes(ship)) {
            this.ships.push(ship);
        } else {
            return false;
        }

        return shipCoords;
    }

    receiveAttack(coord) {
        const sq = this.grid.find(s => s.coord === coord);

        if (sq.isHit) {
            return false;
        }
        sq.isHit = true;

        const shipHit = this.ships.find(s => s.positions.some(e => e.coord === coord));

        if (shipHit) {
            shipHit.hit(coord);
        }

        return true;
    }

    allSunk() {
        return this.ships.every(s => s.isSunk());
    }

    clear() {
        this.ships = [];
        this.grid.forEach((square) => {
            square.ship = undefined;
            square.isHit = false;
        })
        return true;
    }
}

module.exports = Gameboard;