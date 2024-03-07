const game = require('./game');
const Player = require('./player')
const craftBoards = require('./dom');

const compPlayer = new Player('Computer');
const humanPlayer = new Player('Human');

craftBoards()