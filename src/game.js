const dom = require('./dom');
const craftBoards = dom.craftBoards;
const fillBoard = dom.fillBoard;
const clickAttack = dom.clickAttack;

function loadGame(human, comp) {
    craftBoards();
    fillBoard(human);
    clickAttack(human, comp);
}

function checkWin(human, comp) {
    if (human.board.allSunk()) {
        alert(`${human.name}'s ships all sunk! ${comp.name} wins!`);
    }
    if (comp.board.allSunk()) {
        alert(`${comp.name}'s ships all sunk! ${human.name} wins!`)
    }
}

module.exports = {
    loadGame, 
    checkWin
};