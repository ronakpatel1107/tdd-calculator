export function add(numbers:string){
    
    if(!numbers) return 0

    if (numbers.length === 1) return parseInt(numbers)

    const inputs = numbers.split(',')

    return inputs.map(number => parseInt(number)).reduce((a, b) => a + b, 0)
       
}