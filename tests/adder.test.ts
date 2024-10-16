import { add } from "../src/adder";

test('adds csv 1 and 2 which are in a single string to get 3', () => {
    expect(add('1, 2')).toBe(3);
})