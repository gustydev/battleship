const game = require('./game');
const dom = require('./dom');
const craftBoards = dom.craftBoards;
const fillBoard = dom.fillBoard;
const Ship = require('./ship');
const Player = require('./player')

const compPlayer = new Player('Computer');
const humanPlayer = new Player('Human');

compPlayer.board.placeShip(new Ship('Carrier', 5), 'A1', 'horizontal')
compPlayer.board.placeShip(new Ship('Battleship', 4), 'A2', 'horizontal')
compPlayer.board.placeShip(new Ship('Cruiser', 3), 'A3', 'horizontal')
compPlayer.board.placeShip(new Ship('Submarine', 3), 'A4', 'horizontal')
compPlayer.board.placeShip(new Ship('Destroyer', 2), 'A5', 'horizontal')

humanPlayer.board.placeShip(new Ship('Carrier', 5), 'A6', 'horizontal')
humanPlayer.board.placeShip(new Ship('Battleship', 4), 'A7', 'horizontal')
humanPlayer.board.placeShip(new Ship('Cruiser', 3), 'A8', 'horizontal')
humanPlayer.board.placeShip(new Ship('Submarine', 3), 'A9', 'horizontal')
humanPlayer.board.placeShip(new Ship('Destroyer', 2), 'A10', 'horizontal')
// Later replace with ship placement function

craftBoards();
fillBoard(humanPlayer);
