const Player = require('../player');
const Ship = require('../ship');

test('attacking enemy ships', () => {
    const enemy = new Player('Computer');
    const player = new Player('Human');

    enemy.board.placeShip(new Ship('Carrier', 5), 'E10', 'horizontal');
    enemy.board.placeShip(new Ship('Battleship', 4), 'A6', 'vertical');
    
    expect(player.attack(enemy, 'E10')).toBeTruthy();
    expect(enemy.board.grid.find(s => s.coord === 'E10').isHit).toBeTruthy();
    expect(enemy.board.grid.find(s => s.coord === 'F10').isHit).toBeFalsy();
    expect(enemy.board.grid.find(s => s.coord === 'A5').isHit).toBeFalsy();
   
    expect(player.attack(enemy)).toBeTruthy(); // Random attack
    
})