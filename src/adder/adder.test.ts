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
];

describe('asm two, can take any number of inputs ',() => {
    it.each(successCases)("test case $id input: $input output: $output",({input,output})=>{
        const {i} = input;
        expect(add(i)).toBe(output)
    })
})