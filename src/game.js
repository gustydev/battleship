const Gameboard = require('./gameboard');
const Player = require('./player');
const Ship = require('./ship');

const computer = new Player('Computer');
const human = new Player('Human');

function game() {
    computer.board.placeShip(new Ship('Carrier', 5), 'A1', 'horizontal')
    computer.board.placeShip(new Ship('Battleship', 4), 'A2', 'horizontal')
    computer.board.placeShip(new Ship('Cruiser', 3), 'A3', 'horizontal')
    computer.board.placeShip(new Ship('Submarine', 3), 'A4', 'horizontal')
    computer.board.placeShip(new Ship('Destroyer', 2), 'A5', 'horizontal')
    
    human.board.placeShip(new Ship('Carrier', 5), 'A6', 'horizontal')
    human.board.placeShip(new Ship('Battleship', 4), 'A7', 'horizontal')
    human.board.placeShip(new Ship('Cruiser', 3), 'A8', 'horizontal')
    human.board.placeShip(new Ship('Submarine', 3), 'A9', 'horizontal')
    human.board.placeShip(new Ship('Destroyer', 2), 'A10', 'horizontal')
    // Later replace with ship placement function

    while (!human.board.allSunk() && !computer.board.allSunk()) {
        // game will run
    }

    if (human.board.allSunk()) {
        alert(`All of ${human.name}'s ships have been sunk! Computer wins!`);
    } else {
        alert(`All of the computer's ships have been sunk! ${human.name} wins!`)
    }
    
    return;
}

module.exports = game;