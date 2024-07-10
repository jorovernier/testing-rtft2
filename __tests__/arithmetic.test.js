import { isEven, sum } from '../arithmetic.js';

test('returns true for even numbers', () => {
    expect(isEven(2)).toBe(true)
})

test('adds 1 + 2', () => {
    expect(sum(1, 2)).toEqual(3)
})