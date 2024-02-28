class Ship {
    constructor(name, size) {
        this.name = name;
        this.size = size;
        this.positions = Array(size).fill(false);
    }
    hit(pos) {
        if (pos >= 0 && pos < this.size && !this.positions[pos]) {
            this.positions[pos] = true;
            return true;
        }
        return false; // If position was already hit or invalid
    }
    isSunk() {
        return this.positions.every(pos => pos === true);
    }
}

module.exports = Ship;