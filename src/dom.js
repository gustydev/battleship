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

module.exports = craftBoards;