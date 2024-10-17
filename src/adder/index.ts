export function add (numbers:string): number {
    let num  = numbers.split(/[_\-,\n ;/'"*@]/).map(Number).reduce((a,b)=>a+b, 0)
    return num;
}
