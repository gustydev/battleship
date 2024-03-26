const Gameboard = require('../gameboard');
const Ship = require('../ship');

test('grid test', () => {
    const testBoard = new Gameboard();
    const a1 = {coord: 'A1', ship: undefined, isHit: false}
    const f8 = {coord: 'F8', ship: undefined, isHit: false}
    const j10 = {coord: 'J10', ship: undefined, isHit: false}
    const z99 = {coord: 'Z99', ship: undefined, isHit: false}
    expect(testBoard.grid).toContainEqual(a1);
    expect(testBoard.grid).toContainEqual(f8);
    expect(testBoard.grid).toContainEqual(j10);
    expect(testBoard.grid).not.toContainEqual(z99);
})

test('ship placement tests', () => {
    const testBoard = new Gameboard();

    const carrier = new Ship('Carrier', 5);
    const destroyer = new Ship('Destroyer', 2);

    const carrierV = [
        {coord: 'A10', ship: 'Carrier', isHit: false}, 
        {coord: 'A9', ship: 'Carrier', isHit: false},
        {coord: 'A8', ship: 'Carrier', isHit: false},
        {coord: 'A7', ship: 'Carrier', isHit: false},
        {coord: 'A6', ship: 'Carrier', isHit: false}
    ];

    const destroyerH = [
        {coord: 'B10', ship: 'Destroyer', isHit: false}, 
        {coord: 'C10', ship: 'Destroyer', isHit: false}
    ];

    expect(testBoard.placeShip(carrier, 'A2', 'vertical')).toBeFalsy();
    expect(testBoard.placeShip(carrier, 'I10', 'horizontal')).toBeFalsy();

    expect(testBoard.placeShip(carrier, 'A10', 'vertical')).toEqual(carrierV);
    expect(testBoard.placeShip(destroyer, 'B10', 'horizontal')).toEqual(destroyerH);

    expect(testBoard.ships).toEqual([
        {name: 'Carrier', size: 5, positions: [
            {coord: 'A10', isHit: false},
            {coord: 'A9', isHit: false},
            {coord: 'A8', isHit: false},
            {coord: 'A7', isHit: false},
            {coord: 'A6', isHit: false}
        ]},
        {name: 'Destroyer', size: 2, positions: [
            {coord: 'B10', isHit: false},
            {coord: 'C10', isHit: false}
        ]}
    ])
})

test('receive attack function', () => {
    const testBoard = new Gameboard();

    const carrier = new Ship('Carrier', 5);
    const battleship = new Ship('Battleship', 4);

    testBoard.placeShip(carrier, 'A10', 'vertical'); // A10 to A6
    testBoard.placeShip(battleship, 'B10', 'horizontal'); // A10 to E10

    expect(testBoard.receiveAttack('A10')).toBeTruthy(); // Hitting attack

    expect(testBoard.ships.find(s => s.name === 'Carrier').positions[0].isHit).toBeTruthy();
    expect(testBoard.ships.find(s => s.name === 'Carrier').positions[1].isHit).toBeFalsy();
    expect(testBoard.ships.find(s => s.name === 'Battleship').positions[0].isHit).toBeFalsy();

    expect(testBoard.grid.find(c => c.coord === 'A10').isHit).toBeTruthy();
    expect(testBoard.grid.find(c => c.coord === 'A9').isHit).toBeFalsy();
    expect(testBoard.grid.find(c => c.coord === 'G6').isHit).toBeFalsy();

    expect(testBoard.receiveAttack('A10')).toBeFalsy(); // Repeated attack (does not count)

    expect(testBoard.receiveAttack('E10')).toBeTruthy();
    expect(testBoard.ships.find(s => s.name === 'Battleship').positions[3].isHit).toBeTruthy();
    expect(testBoard.grid.find(c => c.coord === 'E10').isHit).toBeTruthy();

    expect(testBoard.receiveAttack('G6')).toBeTruthy(); // Missed attack

    expect(testBoard.grid.find(c => c.coord === 'G6').isHit).toBeTruthy();

})

test('test if all player ships sunk', () => {
    const testBoard = new Gameboard();
    const smallShip = new Ship('small ship', 2);
    const littleShip = new Ship('little ship', 1);

    testBoard.placeShip(smallShip, 'C6', 'horizontal')
    testBoard.placeShip(littleShip, 'A10', 'vertical')

    expect(testBoard.allSunk()).toBeFalsy();

    testBoard.receiveAttack('A10')

    expect(testBoard.allSunk()).toBeFalsy();

    testBoard.receiveAttack('C6')
    testBoard.receiveAttack('D6');

    expect(testBoard.allSunk()).toBeTruthy();

})

test('out of bounds function tests', () => {
    const board = new Gameboard();

    expect(board.isOutOfBounds('A10')).toBeFalsy();
    expect(board.isOutOfBounds('Z99')).toBeTruthy();
    expect(board.isOutOfBounds('C4')).toBeFalsy();
    expect(board.isOutOfBounds('J10')).toBeFalsy();

}) 

test('taken coordinates function test', () => {
    const testBoard = new Gameboard();
    const bigShip = new Ship('Big boy', 10);
    testBoard.placeShip(bigShip, 'A1', 'horizontal'); // Takes up A1 to J1

    expect(testBoard.coordIsTaken('A1')).toBeTruthy();
    expect(testBoard.coordIsTaken('J1')).toBeTruthy();
    expect(testBoard.coordIsTaken('A2')).toBeFalsy();
    expect(testBoard.coordIsTaken('J10')).toBeFalsy();

})