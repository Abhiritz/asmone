export function add (numbers:string): number {
    let num  = numbers.split(',').map(Number).reduce((a,b)=>a+b)
    return num;
}
