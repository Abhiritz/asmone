export function add (numbers:string): number {
    let negatives = '';
    let num  = numbers.split(/[_,\n ;\\/'"*@]/).map(Number).reduce((a,b)=>{
        if  (b < 0) {
            negatives !== '' ? negatives += ', ' + b : negatives += b ;
        }else if(b > 1000) return  a;
        return  a+b
    }, 0)
    if(negatives.length > 0){
        throw new Error('negative numbers are not allowed '+negatives)
    }

    return num;
}
