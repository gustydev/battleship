const Ship = require('./ship');
const Player = require('./player');
const game = require('./game');
const loadGame = game.loadGame;
const checkWin = game.checkWin;

const comp = new Player('Computer');
const human = new Player('Human');
// Later allow player to set their own name

comp.board.placeShip(new Ship('Carrier', 5), 'A1', 'horizontal')
comp.board.placeShip(new Ship('Battleship', 4), 'A2', 'horizontal')
comp.board.placeShip(new Ship('Cruiser', 3), 'A3', 'horizontal')
comp.board.placeShip(new Ship('Submarine', 3), 'A4', 'horizontal')
comp.board.placeShip(new Ship('Destroyer', 2), 'A5', 'horizontal')
// Later make all ships random

human.board.placeShip(new Ship('Carrier', 5), 'A2', 'horizontal')
human.board.placeShip(new Ship('Battleship', 4), 'A4', 'horizontal')
human.board.placeShip(new Ship('Cruiser', 3), 'A6', 'horizontal')
human.board.placeShip(new Ship('Submarine', 3), 'A8', 'horizontal')
human.board.placeShip(new Ship('Destroyer', 2), 'A10', 'horizontal')
// Later replace with ship placement function

loadGame(human, comp);

const timer = setInterval(checkWin, 100, human, comp)
