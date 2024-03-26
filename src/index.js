const Ship = require('./ship');
const Player = require('./player');
const game = require('./game');
const loadGame = game.loadGame;
const checkWin = game.checkWin;
const randomizeShips = game.randomizeShips;

const comp = new Player('Computer');
const human = new Player('Human');
// Later allow player to set their own name

randomizeShips(comp);
randomizeShips(human) // Later replace with ship placement function

loadGame(human, comp);

const timer = setInterval(checkWin, 100, human, comp)
