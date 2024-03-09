function craftBoards() {
    const boardOne = document.querySelector('div#board-1');
    const boardTwo = document.querySelector('div#board-2');
    const boards = [boardOne, boardTwo];

    boards.forEach((board) => {
        const playerId = board.id.match(/\d+$/);

        for (let i = 1; i < 11; i ++) {
            const row = document.createElement('div');
            row.classList.add('row');
            row.id = `p${playerId}-row${i}`;
            board.appendChild(row);
        }

        const rows = board.childNodes;

        rows.forEach((row) => {
            for (let n = 65; n < 75; n++) {
                const coordX = String.fromCharCode(n);
                const coordY = row.id.match(/\d+$/);
                const square = document.createElement('div');
                square.classList.add('square');
                square.id = `p${playerId}-${coordX}${coordY}`
                row.appendChild(square);
            }
        })
    })
}

function fillBoard(p) {
    p.board.grid.forEach((sq) => {
        if (sq.ship) {
            const boardSq = document.getElementById(`p1-${sq.coord}`);
            boardSq.style.backgroundColor = 'black';
        }
    })
}

function sendAttack(player, target, coord) {
    let board;
    if (target.name === 'Computer') {
        board = document.querySelector('div#board-2');
    } else {
        board = document.querySelector('div#board-1');
    }

    let attack;
    if (!coord) {
        attack = player.attack(target);
    }
    attack = player.attack(target, coord);

    const sq = document.getElementById(`p${board.id.slice(-1)}-${attack}`);

    if (attack) {
        if (target.board.grid.find((s) => s.coord === attack).ship) {
            sq.style.backgroundColor = 'red';
        } else {
            sq.style.backgroundColor = 'green';
        }
        return true;
    }
    return false;
}

function clickAttack(player, comp) {
    const compBoard = document.querySelector('div#board-2');
    const squares = compBoard.querySelectorAll('div.square');

    squares.forEach((s) => {
        s.addEventListener('click', () => {
            if (![...s.classList].includes('hit')) {
                s.classList.add('hit');
                sendAttack(player, comp, s.id.substring(3, 6));
                sendAttack(comp, player)
            }
        })
    })
}

module.exports = {
    craftBoards, 
    fillBoard,
    sendAttack,
    clickAttack
};