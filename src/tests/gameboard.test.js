const Gameboard = require('../gameboard');

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

