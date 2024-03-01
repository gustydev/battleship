const Gameboard = require('../gameboard');
const Ship = require('../ship');

test('grid test', () => {
    const testBoard = new Gameboard();
    const a1 = {coord: 'A1', hit: false}
    const f8 = {coord: 'F8', hit: false}
    const j10 = {coord: 'J10', hit: false}
    const z99 = {coord: 'Z99', hit: false}
    expect(testBoard.grid).toContainEqual(a1);
    expect(testBoard.grid).toContainEqual(f8);
    expect(testBoard.grid).toContainEqual(j10);
    expect(testBoard.grid).not.toContainEqual(z99);
})

test('ship placement test', () => {
    const testBoard = new Gameboard();
    const carrier = new Ship('Carrier', 5);
    const carrierV = [
        {coord: 'A10', ship: 'Carrier', hit: false}, 
        {coord: 'A9', ship: 'Carrier', hit: false},
        {coord: 'A8', ship: 'Carrier', hit: false},
        {coord: 'A7', ship: 'Carrier', hit: false},
        {coord: 'A6', ship: 'Carrier', hit: false}
    ];
    expect(testBoard.placeShip(carrier, 'A10', 'vertical')).toEqual(carrierV);
    const carrierH = [
        {coord: 'A10', ship: 'Carrier', hit: false}, 
        {coord: 'B10', ship: 'Carrier', hit: false},
        {coord: 'C10', ship: 'Carrier', hit: false},
        {coord: 'D10', ship: 'Carrier', hit: false},
        {coord: 'E10', ship: 'Carrier', hit: false}
    ];
    expect(testBoard.placeShip(carrier, 'A10', 'horizontal')).toEqual(carrierH);
})