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