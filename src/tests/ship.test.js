const Ship = require('../ship');

test('ship positions', () => {
    const testShip = new Ship('test', 3);
    const shipPos = [
        {coord: undefined, isHit: false},
        {coord: undefined, isHit: false},
        {coord: undefined, isHit: false}
    ]

    expect(testShip.positions).toEqual(shipPos);
})

test('testing hit function', () => {
    const shipThree = new Ship('test', 3);

    expect(shipThree.positions[0].isHit).toBeFalsy();
    expect(shipThree.hit(0)).toBeTruthy();
    expect(shipThree.positions[0].isHit).toBeTruthy();
    expect(shipThree.hit(0)).toBeFalsy();

    expect(shipThree.positions[2].isHit).toBeFalsy();
    expect(shipThree.hit(2)).toBeTruthy();
    expect(shipThree.positions[2].isHit).toBeTruthy();
    expect(shipThree.hit(2)).toBeFalsy();
})

test('testing isSunk function', () => {
    const shipOne = new Ship('test', 1);
    
    expect(shipOne.isSunk()).toBeFalsy();
    shipOne.hit(0);
    expect(shipOne.isSunk()).toBeTruthy();
})