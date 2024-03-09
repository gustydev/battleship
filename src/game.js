const Player = require('./player');
const Ship = require('./ship');

function game(human, comp) {
    
    while (!human.board.allSunk() && !comp.board.allSunk()) {
        clickAttack(humanPlayer, compPlayer);

    }

    if (human.board.allSunk()) {
        alert(`All of ${human.name}'s ships have been sunk! Computer wins!`);
    } else {
        alert(`All of the computer's ships have been sunk! ${human.name} wins!`)
    }
    
    return;
}

module.exports = game;