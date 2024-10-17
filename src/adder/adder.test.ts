import type * as tstfunc from './index';

const {add} = jest.requireActual<typeof tstfunc>("./index.ts")

const successCases = [
    {
        id: 0,
        input: {i:'1,2'},
        output: 3
    },
    {
        id: 1,
        input: {i:'1,2,3'},
        output: 6
    },
    {
        id: 2,
        input: {i:'1'},
        output: 1
    },
    {
        id: 3,
        input: {i:''},
        output: 0
    },
    {
        id: 3,
        input: {i:'1,2,3,6666,8,9,0,1,5,8,9,3,555,09,79,80'},
        output: 7438
    },
    {
        id: 4,
        input: {i:'2,4\n34'},
        output: 40
    },
    {
        id: 5,
        input: {i:' 1;2/3*4 5_6,7\n8"9\'10'},
        output: 55
    },
    {
        id: 6,
        input: {i:' 1;2/3*4, -5,6_7\n8"9\'10'},
        output: Error
    },
    {
        id: 7,
        input: {i:' 1;2/3*4, -5,-6,7\n8"9\'10_-7/-8'},
        output: Error
    },
];

describe('asm five, negative numbers throw exception as mentioned',() => {
    it.each(successCases)("test case $id input: $input output: $output",({input,output})=>{
        const {i} = input;
        expect(add(i)).toBe(output)
    })
})