export function add (numbers:string): number {
    let num  = numbers.split(/[,\n]/).map(Number).reduce((a,b)=>a+b, 0)
    return num;
}
