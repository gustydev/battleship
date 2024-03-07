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
    shipThree.positions = [
        {coord: 'A1', isHit: false},
        {coord: 'B1', isHit: false},
        {coord: 'C1', isHit: false}
    ]

    expect(shipThree.positions[0].isHit).toBeFalsy();
    expect(shipThree.hit('A1')).toBeTruthy();
    expect(shipThree.positions[0].isHit).toBeTruthy();
    expect(shipThree.hit('A1')).toBeFalsy();

    expect(shipThree.positions[2].isHit).toBeFalsy();
    expect(shipThree.hit('C1')).toBeTruthy();
    expect(shipThree.positions[2].isHit).toBeTruthy();
    expect(shipThree.hit('C1')).toBeFalsy();
})

test('testing isSunk function', () => {
    const shipOne = new Ship('test', 1);
    shipOne.positions = [{coord: 'A1', isHit: false}]
    
    expect(shipOne.isSunk()).toBeFalsy();
    shipOne.hit('A1');
    expect(shipOne.isSunk()).toBeTruthy();
})