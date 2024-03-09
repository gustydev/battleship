const Player = require('./player');
const Ship = require('./ship');
const dom = require('./dom');
const clickAttack = dom.clickAttack;

function game(human, comp) {

    if (human.board.allSunk()) {
        alert(`All of ${human.name}'s ships have been sunk! Computer wins!`);
    } else {
        alert(`All of the computer's ships have been sunk! ${human.name} wins!`)
    }
    
    return;
}

module.exports = game;