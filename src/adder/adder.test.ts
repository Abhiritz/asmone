import type * as tstfunc from './index';

const {add} = jest.requireActual<typeof tstfunc>("./index.ts")

const successCases = [
 
    {
        id: 0,
        input: {i:' 1;2/3*4, _5,6,7\n8"9\'10_1005_2024/9999999'},
        output: 55
    },
];

describe('asm six, ignore numbers exceeding 1000',() => {
    it.each(successCases)("test case $id input: $input output: $output",({input,output})=>{
        const {i} = input;
        expect(add(i)).toBe(output)
    })
})