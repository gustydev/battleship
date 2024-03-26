const Ship = require('./ship');
const Player = require('./player');
const game = require('./game');
const loadGame = game.loadGame;
const checkWin = game.checkWin;

const comp = new Player('Computer');
const human = new Player('Human');
// Later allow player to set their own name

loadGame(human, comp);
