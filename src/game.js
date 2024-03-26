const dom = require('./dom');
const craftBoards = dom.craftBoards;
const fillBoard = dom.fillBoard;
const clickAttack = dom.clickAttack;
const Ship = require('./ship');
const Player = require('./player');

function checkWin(human, comp) {
    const checker = setInterval(() => {
        const players = [human, comp];
        const loser = players.find((p) => p.board.allSunk());
        const winner = players.find((p) => !p.board.allSunk());
    
        if (loser) {
            alert(`All of ${loser.name}'s ships sunk! ${winner.name} wins!`);
            clearInterval(checker);
            loadGame();
        }
    }, 100, human, comp);
}

function randomRange(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomizeShips(player) {
    const shipList = [
        new Ship('Carrier', 5),
        new Ship('Battleship', 4),
        new Ship('Cruiser', 3),
        new Ship('Submarine', 3),
        new Ship('Destroyer', 2)
    ];

    const directions = ['horizontal', 'vertical'];

    shipList.forEach((ship) => {
        let randomX, randomY, coord, dir, place;
        
        while (!place) { // Keep trying until placement is valid
            randomX = randomRange(65, 74); // charCode 65 to 74: A to J
            randomY = randomRange(1, 10);
            coord = `${String.fromCharCode(randomX)}${randomY}`;
            dir = directions[randomRange(0, 1)]

            place = player.board.placeShip(ship, coord, dir);
        }
    })
}

function placeShips(human, comp) {
    randomizeShips(human); 
    // Later allow player to choose between manual/auto placement
    randomizeShips(comp);
}

function createPlayers() {
    const human = new Player('Human');
    const comp = new Player('Computer');
    return {human, comp};
}

function loadGame() {
    const players = createPlayers();
    const human = players.human;
    const comp = players.comp;

    craftBoards();
    placeShips(human, comp);
    fillBoard(human);
    clickAttack(human, comp);
    checkWin(human, comp);
}

module.exports = {
    loadGame, 
    checkWin,
    randomizeShips
};