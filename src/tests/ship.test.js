const Ship = require('../ship');

test('testing hit function', () => {
    const shipThree = new Ship('test', 3);
    expect(shipThree.hit(0)).toBeTruthy();
    expect(shipThree.hit(0)).toBeFalsy();
    expect(shipThree.hit(1)).toBeTruthy();
    expect(shipThree.positions[0]).toBeTruthy();
    expect(shipThree.positions[1]).toBeTruthy();
    expect(shipThree.positions[2]).toBeFalsy();
    shipThree.hit(2)
    expect(shipThree.positions[2]).toBeTruthy();
})

test('testing isSunk function', () => {
    const shipOne = new Ship('test', 1);
    expect(shipOne.isSunk()).toBeFalsy();
    shipOne.hit(0);
    expect(shipOne.isSunk()).toBeTruthy();
})