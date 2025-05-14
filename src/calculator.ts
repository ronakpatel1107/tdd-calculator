export function add(numbers:string){
    
    if(!numbers) return 0

    const inputs = numbers.replace(/\n/g,',').split(',')

    return inputs.map(number => parseInt(number)).reduce((a, b) => a + b, 0)
       
}