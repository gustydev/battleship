const Ship = require('../ship');

test('testing hit function', () => {
    const shipThree = new Ship(3);
    shipThree.hit();
    expect(shipThree.timesHit).toBe(1);
    for (let i = 0; i < 100; i++) {
        shipThree.hit();
    }
    expect(shipThree.timesHit).toBe(3);
})

test('testing isSunk function', () => {
    const shipOne = new Ship(1);
    expect(shipOne.isSunk()).toBeFalsy();
    shipOne.hit();
    expect(shipOne.isSunk()).toBeTruthy();
})