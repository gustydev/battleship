const dom = require('./dom');
const craftBoards = dom.craftBoards;
const fillBoard = dom.fillBoard;
const clickAttack = dom.clickAttack;
const Ship = require('./ship');

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

function randomRange(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomShips(player) {
    const shipList = [
        new Ship('Carrier', 5),
        new Ship('Battleship', 4),
        new Ship('Cruiser', 3),
        new Ship('Submarine', 3),
        new Ship('Destroyer', 2)
    ]

    const takenCoords = [];

    const directions = ['horizontal', 'vertical'];

    shipList.forEach((ship) => {
        let randomX = randomRange(65, 74); // charCode 65 to 74: A to J
        let randomY = randomRange(1, 10);

        while (takenCoords.includes(`${String.fromCharCode(randomX)}${randomY}`)) {
            randomX = randomRange(65, 74);
            randomY = randomRange(1, 10);
        }

        const coord = `${String.fromCharCode(randomX)}${randomY}`;
        const dir = directions[randomRange(0, 1)];

        const place = player.board.placeShip(ship, coord, dir);

        place.forEach((c) => {
            takenCoords.push(c.coord);
        })

    })

}

module.exports = {
    loadGame, 
    checkWin,
    randomShips
};