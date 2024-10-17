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
];

describe('asm one ',() => {
    it.each(successCases)("test case $id input: $input output: $output",({input,output})=>{
        const {i} = input;
        expect(add(i)).toBe(output)
    })
})