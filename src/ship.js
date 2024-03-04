class Ship {
    constructor(name, size) {
        this.name = name;
        this.size = size;
        this.positions = Array(size);
        for (let i = 0; i < this.positions.length; i++) {
            this.positions[i] = {coord: undefined, isHit: false};
        }
    }
    hit(pos) {
        if (!(this.positions[pos].isHit)) {
            this.positions[pos].isHit = true;
            return true;
        }
        return false; // If position was already hit or invalid
    }
    isSunk() {
        return this.positions.every(pos => pos.isHit === true);
    }
}

const test = new Ship('ta', 3);
test.hit(2)


module.exports = Ship;