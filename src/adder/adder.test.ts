import type * as tstfunc from './index';

const {add} = jest.requireActual<typeof tstfunc>("./index.ts")

const successCases = [
 
    {
        id: 0,
        input: {i:' 1;2/3*4, _5,6,7\n8"9\'10_1005_2024/9999999'},
        output: 55
    },
    {
        id: 1,
        input: {i:' 1;_\\/    **2/3*4, _5,6,7\n8"9\'10_1005_2024/9999999'},
        output: 55
    },
];

describe('asm seven, can take delimiters of any length between numbers',() => {
    it.each(successCases)("test case $id input: $input output: $output",({input,output})=>{
        const {i} = input;
        expect(add(i)).toBe(output)
    })
})